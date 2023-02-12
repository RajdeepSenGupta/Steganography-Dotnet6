(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***********************************!*\
  !*** multi ./wwwroot/app/main.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rajde\source\repos\SteganographyDotnetCore\SteganographyDotnetCore\wwwroot\app\main.ts */"3by5");


/***/ }),

/***/ "2nJ6":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./wwwroot/app/app.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\r\n  <div class=\"head\">\r\n    <div class=\"head-container\">\r\n      <p class=\"head-text\">Steganography</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"body\">\r\n    <div class=\"body-container\">\r\n      <div class=\"loader\" [hidden]=\"!isLoading\">\r\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n      </div>\r\n\r\n      <mat-tab-group mat-stretch-tabs (selectedTabChange)=\"clearForm()\">\r\n        <mat-tab label=\"Home\">\r\n          <div class=\"description-head\">\r\n            <h3>What is Steganography?</h3>\r\n          </div>\r\n          <div class=\"description-body\">\r\n            <p>\r\n              Steganography is the technique of hiding secret data within an ordinary, non-secret, file or message in order to avoid detection;\r\n              the secret data is then extracted at its destination. The use of steganography can be combined with encryption as an extra step for hiding or protecting data.\r\n              The word steganography is derived from the Greek words steganos (meaning hidden or covered) and the Greek root graph (meaning to write).\r\n            </p>\r\n            <p>\r\n              Steganography can be used to conceal almost any type of digital content, including text, image, video or audio content; the data to be hidden can be hidden inside\r\n              almost any other type of digital content. The content to be concealed through steganography -- called hidden text -- is often encrypted before being incorporated into\r\n              the innocuous-seeming cover text file or data stream. If not encrypted, the hidden text is commonly processed in some way in order to increase the difficulty of\r\n              detecting the secret content.\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"description-head\">\r\n            <h3>How is steganography used today?</h3>\r\n          </div>\r\n          <div class=\"description-body\">\r\n            <p>\r\n              In modern digital steganography, data is first encrypted or obfuscated in some other way and then inserted, using a special algorithm, into data that is part of a\r\n              particular file format such as a JPEG image, audio or video file. The secret message can be embedded into ordinary data files in many different ways.\r\n              One technique is to hide data in bits that represent the same color pixels repeated in a row in an image file. By applying the encrypted data to this\r\n              redundant data in some inconspicuous way, the result will be an image file that appears identical to the original image but that has \"noise\" patterns of regular,\r\n              unencrypted data.\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"description-head\">\r\n            <h3>Practical example</h3>\r\n          </div>\r\n          <div class=\"description-body\">\r\n            <p>\r\n              In our application, we have used a very basic technique of storing any text data into an image file. We converted the image into pixels, where each pixel consists of\r\n              3 colors, viz. Red, Green and Blue. Then we break the text to bits and store each bit in each of the color of each pixel. To represent the ending of an encryption\r\n              of a text inside an image, we store eight consecutive 0 bits.\r\n            </p>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab label=\"Encode\">\r\n          <div class=\"encode-tab-main-body\">\r\n            <div class=\"center\">\r\n              <h2>Encode Text</h2>\r\n            </div>\r\n            <div class=\"center\">\r\n              <div class=\"encode-tab-image-container\">\r\n                <div class=\"center\">\r\n                  <h5>Original Image</h5>\r\n                </div>\r\n                <div class=\"center\">\r\n                  <img class=\"image\" [src]=\"originalImageName ? originalImageBase64Data : defaultImageFilePath\" />\r\n                </div>\r\n                <div class=\"center\" (click)=\"uploadFile.click();uploadFile.value=null\">\r\n                  <button mat-raised-button color=\"primary\">\r\n                    <mat-icon>upload</mat-icon>\r\n                    Upload Image\r\n                  </button>\r\n                  <input #uploadFile (change)=\"uploadOriginalImage($event.target.files[0])\" type=\"file\" accept=\"image/png, image/gif, image/jpeg\" hidden />\r\n                </div>\r\n              </div>\r\n              <div class=\"encode-tab-image-container\">\r\n                <div class=\"center\">\r\n                  <h5>Encoded Image</h5>\r\n                </div>\r\n                <div class=\"center\">\r\n                  <img class=\"image\" [src]=\"encodedImageName ? encodedImageBase64Data : defaultImageFilePath\" />\r\n                </div>\r\n                <div class=\"center\">\r\n                  <button mat-raised-button (click)=\"downloadEncodedImage()\" [disabled]=\"!encodedImageName\">\r\n                    <mat-icon>download</mat-icon>\r\n                    Download Encoded Image\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"center\">\r\n              <mat-form-field class=\"text-area\">\r\n                <mat-label>Plain Text</mat-label>\r\n                <textarea rows=\"3\" matInput matTextareaAutosize [(ngModel)]=\"plainText\"></textarea>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"center\">\r\n              <button mat-raised-button color=\"primary\" (click)=\"encodeText()\">Encode Text</button>\r\n              <button mat-raised-button (click)=\"clearForm()\">Clear Form</button>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab label=\"Decode\">\r\n          <div class=\"encode-tab-main-body\">\r\n            <div class=\"center\">\r\n              <h2>Decode Text</h2>\r\n            </div>\r\n            <div class=\"center\">\r\n              <div class=\"encode-tab-image-container\">\r\n                <div class=\"center\">\r\n                  <img class=\"image\" [src]=\"originalImageName ? originalImageBase64Data : defaultImageFilePath\" />\r\n                </div>\r\n                <div class=\"center\" (click)=\"uploadFile.click();uploadFile.value=null\">\r\n                  <button mat-raised-button color=\"primary\">\r\n                    <mat-icon>upload</mat-icon>\r\n                    Upload Image\r\n                  </button>\r\n                  <input #uploadFile (change)=\"uploadOriginalImage($event.target.files[0])\" type=\"file\" accept=\"image/png, image/gif, image/jpeg\" hidden />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"center decode-image-buttons\">\r\n              <button mat-raised-button color=\"primary\" (click)=\"decodeText()\">Decode Image</button>\r\n              <button mat-raised-button (click)=\"clearForm()\">Clear Form</button>\r\n            </div>\r\n            <div class=\"center disable-decoded-text\">\r\n              <mat-form-field class=\"text-area\">\r\n                <mat-label style=\"font-size:20px\">Decoded Text</mat-label>\r\n                <textarea rows=\"3\" style=\"font-size:20px\" matInput matTextareaAutosize [(ngModel)]=\"decodedText\"></textarea>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "3by5":
/*!*****************************!*\
  !*** ./wwwroot/app/main.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
const app_module_1 = __webpack_require__(/*! ./app.module */ "Atkv");
const environment_1 = __webpack_require__(/*! ../environments/environment */ "Kbbc");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ "Atkv":
/*!***********************************!*\
  !*** ./wwwroot/app/app.module.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
const animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
const app_component_1 = __webpack_require__(/*! ./app.component */ "RfvP");
const app_routing_1 = __webpack_require__(/*! ./app.routing */ "M3v2");
const shared_module_1 = __webpack_require__(/*! shared/shared.module */ "puhb");
const app_service_1 = __webpack_require__(/*! ./app.service */ "cAah");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            shared_module_1.SharedModule,
            app_routing_1.appRouting
        ],
        providers: [app_service_1.AppService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "JeVu":
/*!***************************************!*\
  !*** ./wwwroot/app/app.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Kbbc":
/*!*********************************************!*\
  !*** ./wwwroot/environments/environment.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "M3v2":
/*!************************************!*\
  !*** ./wwwroot/app/app.routing.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouting = void 0;
const router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
const app_component_1 = __webpack_require__(/*! ./app.component */ "RfvP");
const appRoutes = [
    {
        path: '',
        component: app_component_1.AppComponent,
        pathMatch: 'full'
    }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);


/***/ }),

/***/ "R7te":
/*!**************************************************************!*\
  !*** ./wwwroot/$$_lazy_route_resource lazy namespace object ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "R7te";

/***/ }),

/***/ "RfvP":
/*!**************************************!*\
  !*** ./wwwroot/app/app.component.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const string_constants_1 = __webpack_require__(/*! shared/string-constants */ "y0NH");
const toaster_service_1 = __webpack_require__(/*! ../shared/toaster.service */ "qRPS");
const app_service_1 = __webpack_require__(/*! ./app.service */ "cAah");
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
AppComponent.ctorParameters = () => [
    { type: app_service_1.AppService },
    { type: toaster_service_1.ToasterService }
];
AppComponent.propDecorators = {
    fileInput: [{ type: core_1.ViewChild, args: ['fileInput',] }]
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "2nJ6").default,
        styles: [__webpack_require__(/*! ./app.component.css */ "JeVu").default]
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        toaster_service_1.ToasterService])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "cAah":
/*!************************************!*\
  !*** ./wwwroot/app/app.service.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const http_1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "kU1M");
const string_constants_1 = __webpack_require__(/*! shared/string-constants */ "y0NH");
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
AppService.ctorParameters = () => [
    { type: http_1.HttpClient }
];
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "puhb":
/*!*****************************************!*\
  !*** ./wwwroot/shared/shared.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
const forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
const animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
const router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
const http_1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
const button_1 = __webpack_require__(/*! @angular/material/button */ "bTqV");
const icon_1 = __webpack_require__(/*! @angular/material/icon */ "NFeN");
const menu_1 = __webpack_require__(/*! @angular/material/menu */ "STbY");
const input_1 = __webpack_require__(/*! @angular/material/input */ "qFsG");
const select_1 = __webpack_require__(/*! @angular/material/select */ "d3UM");
const slide_toggle_1 = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
const dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
const snack_bar_1 = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
const table_1 = __webpack_require__(/*! @angular/material/table */ "+0xr");
const paginator_1 = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
const list_1 = __webpack_require__(/*! @angular/material/list */ "MutI");
const datepicker_1 = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
const core_2 = __webpack_require__(/*! @angular/material/core */ "FKr1");
const tabs_1 = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
const autocomplete_1 = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
const tooltip_1 = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
const checkbox_1 = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
const chips_1 = __webpack_require__(/*! @angular/material/chips */ "A5z7");
const progress_bar_1 = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
const toaster_service_1 = __webpack_require__(/*! ./toaster.service */ "qRPS");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    core_1.NgModule({
        declarations: [],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            animations_1.BrowserAnimationsModule,
            router_1.RouterModule,
            http_1.HttpClientModule,
            button_1.MatButtonModule,
            icon_1.MatIconModule,
            menu_1.MatMenuModule,
            input_1.MatInputModule,
            select_1.MatSelectModule,
            slide_toggle_1.MatSlideToggleModule,
            dialog_1.MatDialogModule,
            snack_bar_1.MatSnackBarModule,
            table_1.MatTableModule,
            paginator_1.MatPaginatorModule,
            list_1.MatListModule,
            datepicker_1.MatDatepickerModule,
            core_2.MatNativeDateModule,
            tabs_1.MatTabsModule,
            autocomplete_1.MatAutocompleteModule,
            tooltip_1.MatTooltipModule,
            checkbox_1.MatCheckboxModule,
            chips_1.MatChipsModule,
            progress_bar_1.MatProgressBarModule
        ],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule,
            button_1.MatButtonModule,
            icon_1.MatIconModule,
            menu_1.MatMenuModule,
            input_1.MatInputModule,
            select_1.MatSelectModule,
            slide_toggle_1.MatSlideToggleModule,
            dialog_1.MatDialogModule,
            snack_bar_1.MatSnackBarModule,
            table_1.MatTableModule,
            paginator_1.MatPaginatorModule,
            list_1.MatListModule,
            datepicker_1.MatDatepickerModule,
            core_2.MatNativeDateModule,
            tabs_1.MatTabsModule,
            autocomplete_1.MatAutocompleteModule,
            tooltip_1.MatTooltipModule,
            checkbox_1.MatCheckboxModule,
            chips_1.MatChipsModule,
            progress_bar_1.MatProgressBarModule
        ],
        providers: [datepicker_1.MatDatepickerModule, toaster_service_1.ToasterService]
    })
], SharedModule);
exports.SharedModule = SharedModule;


/***/ }),

/***/ "qRPS":
/*!*******************************************!*\
  !*** ./wwwroot/shared/toaster.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.ToasterService = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const snack_bar_1 = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
let ToasterService = class ToasterService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    open(message) {
        this.snackBar.open(message, '', { duration: 3000, horizontalPosition: 'center', verticalPosition: 'bottom' });
    }
};
ToasterService.ctorParameters = () => [
    { type: snack_bar_1.MatSnackBar }
];
ToasterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [snack_bar_1.MatSnackBar])
], ToasterService);
exports.ToasterService = ToasterService;


/***/ }),

/***/ "y0NH":
/*!********************************************!*\
  !*** ./wwwroot/shared/string-constants.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringConstants = void 0;
class StringConstants {
}
exports.StringConstants = StringConstants;
// API list
StringConstants.DefaultImagePath = '../assets/images/default.jpg';
StringConstants.ImageFileUploadApi = 'api/steganography/upload';
StringConstants.Encode = 'api/steganography/encode';
StringConstants.Decode = 'api/steganography/decode';
// Errors
StringConstants.PlainTextRequired = 'Please provide a plain text to encode';
StringConstants.ImageRequiredForEncoding = 'Please upload an image before encoding';
StringConstants.ImageRequiredForDecoding = 'Please upload an image before decoding';
// Messages
StringConstants.EncodingComplete = "Encoding complete";
StringConstants.DecodingComplete = "Decoding complete";


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map