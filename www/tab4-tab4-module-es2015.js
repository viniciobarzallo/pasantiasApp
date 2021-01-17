(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "1GDv":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab4-routing.module */ "dkQB");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "Wxre");







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab4PageRoutingModule"]
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "Wxre":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab4.page.html */ "kfDu");
/* harmony import */ var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4.page.scss */ "vacZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _componentes_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/popinfo/popinfo.component */ "l6nA");
/* harmony import */ var _servicios_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servicios/storage.service */ "6k2k");







let Tab4Page = class Tab4Page {
    constructor(popoverCtrl, storage) {
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.user1 = {
            id: 0,
            cedula: '',
            nombre: '',
            celular: '',
            email: '',
            password: '',
            departamento: '',
            registro: [],
            instalacion: []
        };
        this.datos = [];
    }
    ngOnInit() {
        this.user1 = this.storage.listarE();
        if (this.user1 != null) {
            console.log("user1 " + this.user1.nombre);
        }
        else
            console.log("vacio");
    }
    mostrarPop(evento) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _componentes_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_5__["PopinfoComponent"],
                event: evento,
                mode: 'ios',
            });
            console.log("cerrar sesion");
            this.storage.limpiar();
            yield popover.present();
            //popover.onDidDismiss(); despues de cerrar
            //popover.onWillDismiss(); justo antes de cerrar
            const { data } = yield popover.onWillDismiss();
            console.log('Padre:', data);
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _servicios_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab4Page);



/***/ }),

/***/ "dkQB":
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function() { return Tab4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab4.page */ "Wxre");




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ "kfDu":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Perfil</ion-title>\n\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"mostrarPop( $event )\">\n        <ion-icon slot=\"icon-only\" md=\"ellipsis-vertical\" ></ion-icon> \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      \n  <ion-list>\n      \n\n      <ion-item>\n        <ion-label>Nombres:</ion-label>\n        <ion-input  [(ngModel)]=\"user1.nombre\" type=\"text\" readonly></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Cargo:</ion-label>\n        <ion-input  [(ngModel)]=\"user1.departamento\" type=\"text\" readonly></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Correo:</ion-label>\n        <ion-input [(ngModel)]=\"user1.email\" type=\"text\" readonly></ion-input>\n      </ion-item>\n\n      \n      <ion-item>\n        <ion-label>Teléfono:</ion-label>\n        <ion-input  [(ngModel)]=\"user1.celular\" type=\"text\" readonly></ion-input>\n      </ion-item>\n  </ion-list>\n  \n</ion-content>\n");

/***/ }),

/***/ "vacZ":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content > ion-list {\n  position: relative;\n}\n\nion-content {\n  background-color: #07f1be;\n}\n\n.btn-center-aling {\n  text-align: center !important;\n}\n\n.btn-center-aling ion-button {\n  --color: rgb(150, 11, 104);\n}\n\n.btn-center-aling ion-button:hover {\n  --color: black;\n}\n\nion-item {\n  --background: transparent;\n  color: #000000;\n  --min-height: 40px;\n}\n\nion-list {\n  background-color: transparent;\n}\n\nion-button {\n  --background:#4890DC;\n}\n\n.horizontal {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\nimg {\n  width: 120px;\n  height: 120px;\n}\n\n:host {\n  --min-height: 30px;\n}\n\n.item-avatar {\n  width: 60px !important;\n  height: 60px !important;\n}\n\nion-toolbar {\n  --ion-background-color: #4890DC;\n  text-align: center;\n}\n\nion-avatar {\n  width: 200px;\n  height: 200px;\n  align-items: center;\n  justify-content: center;\n}\n\n:root {\n  /** primary **/\n  /** primary end **/\n  --ion-color-mango: #ffcc66;\n  --ion-color-mango-rgb: 255, 204, 102;\n  --ion-color-mango-contrast: #000000;\n  --ion-color-mango-contrast-rgb: 0, 0, 0;\n  --ion-color-mango-shade: #e0b45a;\n  --ion-color-mango-tint: #ffd175;\n}\n\n:root ion-tab-button.tab-selected ion-icon,\n:root ion-tab-button.tab-selected ion-label {\n  color: var(--ion-color-mango) !important;\n  --ion-color-base: var(--ion-color-mango) !important;\n}\n\n.ion-color-mango {\n  --ion-color-base: var(--ion-color-mango);\n  --ion-color-base-rgb: var(--ion-color-mango-rgb);\n  --ion-color-contrast: var(--ion-color-mango-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-mango-contrast-rgb);\n  --ion-color-shade: var(--ion-color-mango-shade);\n  --ion-color-tint: var(--ion-color-mango-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBUUE7RUFDSSx5QkFBQTtBQUxKOztBQVFBO0VBQ0ksNkJBQUE7QUFMSjs7QUFRQTtFQUNJLDBCQUFBO0FBTEo7O0FBUUE7RUFDSSxjQUFBO0FBTEo7O0FBUUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVFBO0VBQ0ksNkJBQUE7QUFMSjs7QUFTQTtFQUNJLG9CQUFBO0FBTko7O0FBU0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQU5KOztBQVdBO0VBQ0ksWUFBQTtFQUFjLGFBQUE7QUFQbEI7O0FBV0E7RUFDSSxrQkFBQTtBQVJKOztBQVdBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQVJKOztBQVdBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBUko7O0FBV0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUFSSjs7QUFVUTs7RUFFSSx3Q0FBQTtFQUNBLG1EQUFBO0FBUlo7O0FBYUE7RUFDSSx3Q0FBQTtFQUNBLGdEQUFBO0VBQ0EscURBQUE7RUFDQSw2REFBQTtFQUNBLCtDQUFBO0VBQ0EsNkNBQUE7QUFWSiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudD5pb24tbGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyAgdG9wOiAzMCU7XG59XG5cblxuLy8gaW9uLWNvbnRlbnQge1xuLy8gICAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL0p1cGl0ZXIuanBnKW5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4vLyB9XG5cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdmMWJlO1xuIH1cblxuLmJ0bi1jZW50ZXItYWxpbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG59XG5cbi5idG4tY2VudGVyLWFsaW5nIGlvbi1idXR0b24ge1xuICAgIC0tY29sb3I6IHJnYigxNTAsIDExLCAxMDQpO1xufVxuXG4uYnRuLWNlbnRlci1hbGluZyBpb24tYnV0dG9uOmhvdmVyIHtcbiAgICAtLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgLS1taW4taGVpZ2h0OiA0MHB4O1xufVxuXG5pb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiM0ODkwREM7XG59XG5cbi5ob3Jpem9udGFse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxufVxuXG5cbmltZ3tcbiAgICB3aWR0aDogMTIwcHg7IGhlaWdodDogMTIwcHg7XG59XG5cblxuOmhvc3Qge1xuICAgIC0tbWluLWhlaWdodDogMzBweDtcbn1cblxuLml0ZW0tYXZhdGFyIHtcbiAgICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzQ4OTBEQztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1hdmF0YXIge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbjpyb290IHtcbiAgICAvKiogcHJpbWFyeSAqKi9cbiAgICAvKiogcHJpbWFyeSBlbmQgKiovXG4gICAgLS1pb24tY29sb3ItbWFuZ286ICNmZmNjNjY7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tcmdiOiAyNTUsIDIwNCwgMTAyO1xuICAgIC0taW9uLWNvbG9yLW1hbmdvLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLW1hbmdvLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgICAtLWlvbi1jb2xvci1tYW5nby1zaGFkZTogI2UwYjQ1YTtcbiAgICAtLWlvbi1jb2xvci1tYW5nby10aW50OiAjZmZkMTc1O1xuICAgIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gICAgICAgIGlvbi1pY29uLFxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5nbykgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1tYW5nbykgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmlvbi1jb2xvci1tYW5nbyB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1hbmdvKTtcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLW1hbmdvLXJnYik7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1tYW5nby1jb250cmFzdCk7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3QtcmdiKTtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLW1hbmdvLXNoYWRlKTtcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbWFuZ28tdGludCk7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module-es2015.js.map