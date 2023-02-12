import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { StringConstants } from 'shared/string-constants';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  uploadImageFile(imageFile: File) {
    let file = new FormData();
    file.append('upload', imageFile);

    const headers = new HttpHeaders();
    const options = { headers: headers, responseType: 'blob' as 'blob', observe: 'response' as 'response' };

    return this.http.post(StringConstants.ImageFileUploadApi, file, options);
  }

  encodeText(detailsToEncode: any) {
    const headers = new HttpHeaders();
    const options = { headers: headers, responseType: 'blob' as 'blob', observe: 'response' as 'response' };

    return this.http.post(StringConstants.Encode, detailsToEncode, options);
  }

  decodeText(detailsToDecode: any) {
    return this.http.post(StringConstants.Decode, detailsToDecode).pipe(map((res: any) => res)).toPromise();
  }
}
