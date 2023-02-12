"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouting = void 0;
const router_1 = require("@angular/router");
const app_component_1 = require("./app.component");
const appRoutes = [
    {
        path: '',
        component: app_component_1.AppComponent,
        pathMatch: 'full'
    }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map