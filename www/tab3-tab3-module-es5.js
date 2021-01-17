(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "IqiF":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function IqiF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "h1hx");
      /* harmony import */


      var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab3.page.scss */
      "nRCe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Tab3Page = function Tab3Page() {
        _classCallCheck(this, Tab3Page);
      };

      Tab3Page.ctorParameters = function () {
        return [];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab3Page);
      /***/
    },

    /***/
    "OcaV":
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function OcaV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "IqiF");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "h1hx":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function h1hx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Actividades\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n    <ion-button> \n      \n    </ion-button> \n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "k+ul":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function kUl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "IqiF");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "OcaV");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "nRCe":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function nRCe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content > ion-list {\n  position: relative;\n}\n\nion-content {\n  background-color: #07f1be;\n}\n\n.btn-center-aling {\n  text-align: center !important;\n}\n\n.btn-center-aling ion-button {\n  --color: rgb(150, 11, 104);\n}\n\n.btn-center-aling ion-button:hover {\n  --color: black;\n}\n\nion-item {\n  --background: transparent;\n  color: #000000;\n  --min-height: 40px;\n}\n\nion-list {\n  background-color: transparent;\n}\n\nion-button {\n  --background:#4890DC;\n}\n\n.horizontal {\n  display: flex;\n  justify-content: center;\n}\n\n.vertical {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nimg {\n  width: 175px;\n  height: 175px;\n}\n\n:host {\n  --min-height: 30px;\n}\n\n.item-avatar {\n  width: 20px !important;\n  height: 60px !important;\n}\n\nion-toolbar {\n  --ion-background-color: #4890DC;\n  text-align: center;\n}\n\nion-avatar {\n  width: 200px;\n  height: 200px;\n  align-items: center;\n  justify-content: center;\n}\n\n:root {\n  /** primary **/\n  /** primary end **/\n  --ion-color-mango: #ffcc66;\n  --ion-color-mango-rgb: 255, 204, 102;\n  --ion-color-mango-contrast: #000000;\n  --ion-color-mango-contrast-rgb: 0, 0, 0;\n  --ion-color-mango-shade: #e0b45a;\n  --ion-color-mango-tint: #ffd175;\n}\n\n:root ion-tab-button.tab-selected ion-icon,\n:root ion-tab-button.tab-selected ion-label {\n  color: var(--ion-color-mango) !important;\n  --ion-color-base: var(--ion-color-mango) !important;\n}\n\n.ion-color-mango {\n  --ion-color-base: var(--ion-color-mango);\n  --ion-color-base-rgb: var(--ion-color-mango-rgb);\n  --ion-color-contrast: var(--ion-color-mango-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-mango-contrast-rgb);\n  --ion-color-shade: var(--ion-color-mango-shade);\n  --ion-color-tint: var(--ion-color-mango-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBUUE7RUFDSSx5QkFBQTtBQUxKOztBQVFBO0VBQ0ksNkJBQUE7QUFMSjs7QUFRQTtFQUNJLDBCQUFBO0FBTEo7O0FBUUE7RUFDSSxjQUFBO0FBTEo7O0FBUUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVFBO0VBQ0ksNkJBQUE7QUFMSjs7QUFTQTtFQUNJLG9CQUFBO0FBTko7O0FBU0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFOSjs7QUFTQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBTko7O0FBU0E7RUFDSSxZQUFBO0VBQWMsYUFBQTtBQUxsQjs7QUFTQTtFQUNJLGtCQUFBO0FBTko7O0FBU0E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FBTko7O0FBU0E7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0FBTko7O0FBU0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFOSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQU5KOztBQVFROztFQUVJLHdDQUFBO0VBQ0EsbURBQUE7QUFOWjs7QUFXQTtFQUNJLHdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxxREFBQTtFQUNBLDZEQUFBO0VBQ0EsK0NBQUE7RUFDQSw2Q0FBQTtBQVJKIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50Pmlvbi1saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vICB0b3A6IDMwJTtcbn1cblxuXG4vLyBpb24tY29udGVudCB7XG4vLyAgICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvSnVwaXRlci5qcGcpbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbi8vIH1cblxuaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2YxYmU7XG4gfVxuXG4uYnRuLWNlbnRlci1hbGluZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcbn1cblxuLmJ0bi1jZW50ZXItYWxpbmcgaW9uLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogcmdiKDE1MCwgMTEsIDEwNCk7XG59XG5cbi5idG4tY2VudGVyLWFsaW5nIGlvbi1idXR0b246aG92ZXIge1xuICAgIC0tY29sb3I6IGJsYWNrO1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IzQ4OTBEQztcbn1cblxuLmhvcml6b250YWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuLnZlcnRpY2Fse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW1ne1xuICAgIHdpZHRoOiAxNzVweDsgaGVpZ2h0OiAxNzVweDtcbn1cblxuXG46aG9zdCB7XG4gICAgLS1taW4taGVpZ2h0OiAzMHB4O1xufVxuXG4uaXRlbS1hdmF0YXIge1xuICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNDg5MERDO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuOnJvb3Qge1xuICAgIC8qKiBwcmltYXJ5ICoqL1xuICAgIC8qKiBwcmltYXJ5IGVuZCAqKi9cbiAgICAtLWlvbi1jb2xvci1tYW5nbzogI2ZmY2M2NjtcbiAgICAtLWlvbi1jb2xvci1tYW5nby1yZ2I6IDI1NSwgMjA0LCAxMDI7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC0taW9uLWNvbG9yLW1hbmdvLXNoYWRlOiAjZTBiNDVhO1xuICAgIC0taW9uLWNvbG9yLW1hbmdvLXRpbnQ6ICNmZmQxNzU7XG4gICAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgICAgICAgaW9uLWljb24sXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1hbmdvKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1hbmdvKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW9uLWNvbG9yLW1hbmdvIHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbWFuZ28pO1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbWFuZ28tcmdiKTtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1hbmdvLWNvbnRyYXN0KTtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tYW5nby1jb250cmFzdC1yZ2IpO1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbWFuZ28tc2hhZGUpO1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tYW5nby10aW50KTtcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map