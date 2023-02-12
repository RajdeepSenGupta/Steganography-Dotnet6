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
const core_1 = require("@angular/core");
const snack_bar_1 = require("@angular/material/snack-bar");
let ToasterService = class ToasterService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    open(message) {
        this.snackBar.open(message, '', { duration: 3000, horizontalPosition: 'center', verticalPosition: 'bottom' });
    }
};
ToasterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [snack_bar_1.MatSnackBar])
], ToasterService);
exports.ToasterService = ToasterService;
//# sourceMappingURL=toaster.service.js.map