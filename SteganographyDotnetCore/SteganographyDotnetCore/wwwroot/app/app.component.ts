import { HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { StringConstants } from 'shared/string-constants';
import { ToasterService } from '../shared/toaster.service';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  plainText: string;
  decodedText: string;
  originalImageName: string;
  encodedImageName: string;
  defaultImageFilePath: string;
  originalImageBase64Data: string | ArrayBuffer;
  encodedImageBase64Data: string | ArrayBuffer;
  isLoading: boolean;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private appService: AppService,
    private toasterService: ToasterService) { }

  ngOnInit() {
    this.plainText = '';
    this.decodedText = '';
    this.originalImageName = '';
    this.encodedImageName = '';
    this.originalImageBase64Data = '';
    this.encodedImageBase64Data = '';
    this.defaultImageFilePath = StringConstants.DefaultImagePath;
    this.isLoading = false;
  }

  uploadOriginalImage(imageFile: File) {
    this.isLoading = true;
    this.originalImageName = '';
    this.encodedImageName = '';
    this.originalImageBase64Data = '';
    this.encodedImageBase64Data = '';

    this.appService.uploadImageFile(imageFile)
      .subscribe((res: HttpResponse<Blob>) => {
        this.isLoading = false;

        const blob = new Blob([res.body], { type: res.body.type });
        let reader = new FileReader();
        reader.readAsDataURL(blob);

        reader.onloadend = () => {
          this.originalImageName = imageFile.name;
          this.originalImageBase64Data = reader.result;
        };
      },
        (err: any) => {
          this.isLoading = false;
          this.toasterService.open(err.message);
        });
  }

  encodeText() {
    if (!this.originalImageName || !this.originalImageBase64Data) {
      this.toasterService.open(StringConstants.ImageRequiredForEncoding);
    }
    else if (!this.plainText || !this.plainText.trim()) {
      this.toasterService.open(StringConstants.PlainTextRequired);
    }
    else {
      this.isLoading = true;

      this.appService.encodeText({ OriginalFileName: this.originalImageName, PlainText: this.plainText })
        .subscribe((res: HttpResponse<Blob>) => {
          this.isLoading = false;
          this.toasterService.open(StringConstants.EncodingComplete);

          const blob = new Blob([res.body], { type: res.body.type });
          let reader = new FileReader();
          reader.readAsDataURL(blob);

          reader.onloadend = () => {
            this.encodedImageName = this.originalImageName;
            let imageName: string = this.originalImageName.split('.').slice(0, -1).join('.');
            let imageExtension: string = this.originalImageName.split('.').pop();
            this.encodedImageName = imageName + '_encoded.' + imageExtension;
            this.encodedImageBase64Data = reader.result;
          };
        },
          (err: any) => {
            this.isLoading = false;
            this.toasterService.open(err.message);
          });
    }
  }

  decodeText() {
    if (!this.originalImageName || !this.originalImageBase64Data) {
      this.toasterService.open(StringConstants.ImageRequiredForDecoding);
    }
    else {
      this.isLoading = true;

      this.appService.decodeText({ OriginalFileName: this.originalImageName })
        .then((res: any) => {
          this.isLoading = false;
          this.toasterService.open(StringConstants.DecodingComplete);

          this.decodedText = res.decodedText;
        })
        .catch((err: any) => {
          this.isLoading = false;
          this.toasterService.open(err.message);
        });
    }
  }

  downloadEncodedImage() {
    let linkSource: string = `${this.encodedImageBase64Data}`;
    let downloadLink: HTMLAnchorElement = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = this.encodedImageName;
    downloadLink.click();
    downloadLink.remove();
  }

  clearForm() {
    this.ngOnInit();
  }
}
