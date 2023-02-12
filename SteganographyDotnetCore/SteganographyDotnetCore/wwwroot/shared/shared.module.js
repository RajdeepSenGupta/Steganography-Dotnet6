"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const animations_1 = require("@angular/platform-browser/animations");
const router_1 = require("@angular/router");
const http_1 = require("@angular/common/http");
const button_1 = require("@angular/material/button");
const icon_1 = require("@angular/material/icon");
const menu_1 = require("@angular/material/menu");
const input_1 = require("@angular/material/input");
const select_1 = require("@angular/material/select");
const slide_toggle_1 = require("@angular/material/slide-toggle");
const dialog_1 = require("@angular/material/dialog");
const snack_bar_1 = require("@angular/material/snack-bar");
const table_1 = require("@angular/material/table");
const paginator_1 = require("@angular/material/paginator");
const list_1 = require("@angular/material/list");
const datepicker_1 = require("@angular/material/datepicker");
const core_2 = require("@angular/material/core");
const tabs_1 = require("@angular/material/tabs");
const autocomplete_1 = require("@angular/material/autocomplete");
const tooltip_1 = require("@angular/material/tooltip");
const checkbox_1 = require("@angular/material/checkbox");
const chips_1 = require("@angular/material/chips");
const progress_bar_1 = require("@angular/material/progress-bar");
const toaster_service_1 = require("./toaster.service");
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
//# sourceMappingURL=shared.module.js.map