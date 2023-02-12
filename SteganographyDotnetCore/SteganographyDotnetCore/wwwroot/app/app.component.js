"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const string_constants_1 = require("shared/string-constants");
const toaster_service_1 = require("../shared/toaster.service");
const app_service_1 = require("./app.service");
let AppComponent = class AppComponent {
    constructor(appService, toasterService) {
        this.appService = appService;
        this.toasterService = toasterService;
    }
    ngOnInit() {
        this.plainText = '';
        this.decodedText = '';
        this.originalImageName = '';
        this.encodedImageName = '';
        this.originalImageBase64Data = '';
        this.encodedImageBase64Data = '';
        this.defaultImageFilePath = string_constants_1.StringConstants.DefaultImagePath;
        this.isLoading = false;
    }
    uploadOriginalImage(imageFile) {
        this.isLoading = true;
        this.originalImageName = '';
        this.encodedImageName = '';
        this.originalImageBase64Data = '';
        this.encodedImageBase64Data = '';
        this.appService.uploadImageFile(imageFile)
            .subscribe((res) => {
            this.isLoading = false;
            const blob = new Blob([res.body], { type: res.body.type });
            let reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                this.originalImageName = imageFile.name;
                this.originalImageBase64Data = reader.result;
            };
        }, (err) => {
            this.isLoading = false;
            this.toasterService.open(err.message);
        });
    }
    encodeText() {
        if (!this.originalImageName || !this.originalImageBase64Data) {
            this.toasterService.open(string_constants_1.StringConstants.ImageRequiredForEncoding);
        }
        else if (!this.plainText || !this.plainText.trim()) {
            this.toasterService.open(string_constants_1.StringConstants.PlainTextRequired);
        }
        else {
            this.isLoading = true;
            this.appService.encodeText({ OriginalFileName: this.originalImageName, PlainText: this.plainText })
                .subscribe((res) => {
                this.isLoading = false;
                this.toasterService.open(string_constants_1.StringConstants.EncodingComplete);
                const blob = new Blob([res.body], { type: res.body.type });
                let reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    this.encodedImageName = this.originalImageName;
                    let imageName = this.originalImageName.split('.').slice(0, -1).join('.');
                    let imageExtension = this.originalImageName.split('.').pop();
                    this.encodedImageName = imageName + '_encoded.' + imageExtension;
                    this.encodedImageBase64Data = reader.result;
                };
            }, (err) => {
                this.isLoading = false;
                this.toasterService.open(err.message);
            });
        }
    }
    decodeText() {
        if (!this.originalImageName || !this.originalImageBase64Data) {
            this.toasterService.open(string_constants_1.StringConstants.ImageRequiredForDecoding);
        }
        else {
            this.isLoading = true;
            this.appService.decodeText({ OriginalFileName: this.originalImageName })
                .then((res) => {
                this.isLoading = false;
                this.toasterService.open(string_constants_1.StringConstants.DecodingComplete);
                this.decodedText = res.decodedText;
            })
                .catch((err) => {
                this.isLoading = false;
                this.toasterService.open(err.message);
            });
        }
    }
    downloadEncodedImage() {
        let linkSource = `${this.encodedImageBase64Data}`;
        let downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = this.encodedImageName;
        downloadLink.click();
        downloadLink.remove();
    }
    clearForm() {
        this.ngOnInit();
    }
};
__decorate([
    core_1.ViewChild('fileInput'),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "fileInput", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        toaster_service_1.ToasterService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map