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
exports.AppService = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const string_constants_1 = require("shared/string-constants");
let AppService = class AppService {
    constructor(http) {
        this.http = http;
    }
    uploadImageFile(imageFile) {
        let file = new FormData();
        file.append('upload', imageFile);
        const headers = new http_1.HttpHeaders();
        const options = { headers: headers, responseType: 'blob', observe: 'response' };
        return this.http.post(string_constants_1.StringConstants.ImageFileUploadApi, file, options);
    }
    encodeText(detailsToEncode) {
        const headers = new http_1.HttpHeaders();
        const options = { headers: headers, responseType: 'blob', observe: 'response' };
        return this.http.post(string_constants_1.StringConstants.Encode, detailsToEncode, options);
    }
    decodeText(detailsToDecode) {
        return this.http.post(string_constants_1.StringConstants.Decode, detailsToDecode).pipe(operators_1.map((res) => res)).toPromise();
    }
};
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map