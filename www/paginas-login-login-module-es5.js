(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-login-login-module"], {
    /***/
    "2wOf":
    /*!*******************************************************!*\
      !*** ./src/app/paginas/login/login-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function wOf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "UYLD");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "A1ZD":
    /*!**********************************!*\
      !*** ./src/app/tab2/empleado.ts ***!
      \**********************************/

    /*! exports provided: Empleado */

    /***/
    function A1ZD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Empleado", function () {
        return Empleado;
      });

      var Empleado = function Empleado() {
        _classCallCheck(this, Empleado);
      };
      /***/

    },

    /***/
    "D2h0":
    /*!***********************************************!*\
      !*** ./src/app/paginas/login/login.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function D2h0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content > ion-list {\n  position: relative;\n}\n\nion-content {\n  background-color: #07f1be;\n}\n\n.btn-center-aling {\n  text-align: center !important;\n}\n\n.btn-center-aling ion-button {\n  --color: rgb(150, 11, 104);\n}\n\n.btn-center-aling ion-button:hover {\n  --color: black;\n}\n\nion-item {\n  --background: transparent;\n  color: #000000;\n  --min-height: 40px;\n}\n\nion-list {\n  background-color: transparent;\n}\n\nion-button {\n  --background:#4890DC;\n}\n\n.horizontal {\n  display: flex;\n  justify-content: center;\n}\n\n.vertical {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nimg {\n  width: 175px;\n  height: 175px;\n}\n\n:host {\n  --min-height: 30px;\n}\n\n.item-avatar {\n  width: 20px !important;\n  height: 60px !important;\n}\n\nion-toolbar {\n  --ion-background-color: #4890DC;\n  text-align: center;\n}\n\nion-avatar {\n  width: 200px;\n  height: 200px;\n  align-items: center;\n  justify-content: center;\n}\n\n:root {\n  /** primary **/\n  /** primary end **/\n  --ion-color-mango: #ffcc66;\n  --ion-color-mango-rgb: 255, 204, 102;\n  --ion-color-mango-contrast: #000000;\n  --ion-color-mango-contrast-rgb: 0, 0, 0;\n  --ion-color-mango-shade: #e0b45a;\n  --ion-color-mango-tint: #ffd175;\n}\n\n:root ion-tab-button.tab-selected ion-icon,\n:root ion-tab-button.tab-selected ion-label {\n  color: var(--ion-color-mango) !important;\n  --ion-color-base: var(--ion-color-mango) !important;\n}\n\n.ion-color-mango {\n  --ion-color-base: var(--ion-color-mango);\n  --ion-color-base-rgb: var(--ion-color-mango-rgb);\n  --ion-color-contrast: var(--ion-color-mango-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-mango-contrast-rgb);\n  --ion-color-shade: var(--ion-color-mango-shade);\n  --ion-color-tint: var(--ion-color-mango-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQVFBO0VBQ0kseUJBQUE7QUFMSjs7QUFRQTtFQUNJLDZCQUFBO0FBTEo7O0FBUUE7RUFDSSwwQkFBQTtBQUxKOztBQVFBO0VBQ0ksY0FBQTtBQUxKOztBQVFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFRQTtFQUNJLDZCQUFBO0FBTEo7O0FBU0E7RUFDSSxvQkFBQTtBQU5KOztBQVNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBTko7O0FBU0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQU5KOztBQVNBO0VBQ0ksWUFBQTtFQUFjLGFBQUE7QUFMbEI7O0FBU0E7RUFDSSxrQkFBQTtBQU5KOztBQVNBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQU5KOztBQVNBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTko7O0FBU0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUFOSjs7QUFRUTs7RUFFSSx3Q0FBQTtFQUNBLG1EQUFBO0FBTlo7O0FBV0E7RUFDSSx3Q0FBQTtFQUNBLGdEQUFBO0VBQ0EscURBQUE7RUFDQSw2REFBQTtFQUNBLCtDQUFBO0VBQ0EsNkNBQUE7QUFSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQ+aW9uLWxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gIHRvcDogMzAlO1xufVxuXG5cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgIC8vIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9KdXBpdGVyLmpwZyluby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuLy8gfVxuXG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3ZjFiZTtcbiB9XG5cbi5idG4tY2VudGVyLWFsaW5nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuXG4uYnRuLWNlbnRlci1hbGluZyBpb24tYnV0dG9uIHtcbiAgICAtLWNvbG9yOiByZ2IoMTUwLCAxMSwgMTA0KTtcbn1cblxuLmJ0bi1jZW50ZXItYWxpbmcgaW9uLWJ1dHRvbjpob3ZlciB7XG4gICAgLS1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIC0tbWluLWhlaWdodDogNDBweDtcbn1cblxuaW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5cbmlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDojNDg5MERDO1xufVxuXG4uaG9yaXpvbnRhbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59XG4udmVydGljYWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pbWd7XG4gICAgd2lkdGg6IDE3NXB4OyBoZWlnaHQ6IDE3NXB4O1xufVxuXG5cbjpob3N0IHtcbiAgICAtLW1pbi1oZWlnaHQ6IDMwcHg7XG59XG5cbi5pdGVtLWF2YXRhciB7XG4gICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM0ODkwREM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG46cm9vdCB7XG4gICAgLyoqIHByaW1hcnkgKiovXG4gICAgLyoqIHByaW1hcnkgZW5kICoqL1xuICAgIC0taW9uLWNvbG9yLW1hbmdvOiAjZmZjYzY2O1xuICAgIC0taW9uLWNvbG9yLW1hbmdvLXJnYjogMjU1LCAyMDQsIDEwMjtcbiAgICAtLWlvbi1jb2xvci1tYW5nby1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1tYW5nby1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tc2hhZGU6ICNlMGI0NWE7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tdGludDogI2ZmZDE3NTtcbiAgICBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQge1xuICAgICAgICBpb24taWNvbixcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFuZ28pICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbWFuZ28pICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pb24tY29sb3ItbWFuZ28ge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1tYW5nbyk7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tYW5nby1yZ2IpO1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3QpO1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLW1hbmdvLWNvbnRyYXN0LXJnYik7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1tYW5nby1zaGFkZSk7XG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLW1hbmdvLXRpbnQpO1xufSJdfQ== */";
      /***/
    },

    /***/
    "OVyi":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/login/login.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function OVyi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Bienvenido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n   \n  <div class=\"horizontal\">\n      <div class=\"vertical\">\n          <img src=\"../../../assets/astronet.jpg\" />   \n      </div>\n          \n  </div>\n\n<div class=\"ion-padding top\">\n  <form>\n    <ion-list class=\"ion-padding\">\n      <ion-item>\n        <ion-label position=\"floating\">Correo:</ion-label>\n        <ion-input type=\"email\" name=\"email\" required [(ngModel)]=\"cliente1.email\"\n          pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\">\n        </ion-input>\n      </ion-item>\n      <div class=\"sep\"></div>\n      <ion-item>\n        <ion-label position=\"floating\">Contraseña:</ion-label>\n        <ion-input type=\"password\" name=\"password\" required  [(ngModel)]=\"cliente1.password\"\n          pattern=\"([A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9])\\S{2,16}$\">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n    <div class=\"ion-padding ion-text-center\">\n      <ion-button expand=\"full\" (click)=\"iniciar()\">\n        Ingresar\n      </ion-button>\n    </div>\n  </form>\n\n  \n\n</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "Qd+U":
    /*!***********************************************!*\
      !*** ./src/app/paginas/login/login.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function QdU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "2wOf");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "UYLD");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "UYLD":
    /*!*********************************************!*\
      !*** ./src/app/paginas/login/login.page.ts ***!
      \*********************************************/

    /*! exports provided: LoginPage */

    /***/
    function UYLD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "OVyi");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "D2h0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_servicios_radio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/servicios/radio.service */
      "Ys19");
      /* harmony import */


      var src_app_servicios_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/servicios/storage.service */
      "6k2k");
      /* harmony import */


      var src_app_tab2_empleado__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/tab2/empleado */
      "A1ZD");

      var Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Network;
      var aux;

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, route, formBuilder, storage, service, toast, loading) {
          _classCallCheck(this, LoginPage);

          this.router = router;
          this.route = route;
          this.formBuilder = formBuilder;
          this.storage = storage;
          this.service = service;
          this.toast = toast;
          this.loading = loading;
          this.idUser = 0;
          this.isConnected = false;
          this.user1 = {
            id: 0,
            cedula: "",
            nombre: "",
            email: "",
            convencional: "",
            celular: "",
            direccionPrincipal: "",
            direccionSecundaria: "",
            direccionReferencia: "",
            latitud: "",
            longitud: "",
            servicio: [],
            antena: {}
          };
          this.cliente1 = new src_app_tab2_empleado__WEBPACK_IMPORTED_MODULE_10__["Empleado"]();
          this.myFormulario = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]))
          });
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listar();
            this.guardar();
            console.log("listar empleado" + this.storage.listarE());
          }
        }, {
          key: "menu",
          value: function menu() {
            console.log("hiciste click");
            this.router.navigate(['/tabs']);
          }
        }, {
          key: "listar",
          value: function listar() {
            console.log("Listado Tabs");
            console.log("lista ffff " + this.storage.listar());
          } //verifica si existe almacenado informacin en el localstorage y lo guarda en la base de datos

        }, {
          key: "guardar",
          value: function guardar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(this.storage.listar());
                      this.networkListener = Network.addListener('networkStatusChange', function (status) {
                        console.log('Cambió estado de la red', status);
                        _this.networkStatus = status;
                      });
                      _context.next = 4;
                      return Network.getStatus();

                    case 4:
                      this.networkStatus = _context.sent;
                      aux = String(this.networkStatus.connected);

                      if (aux == "true") {
                        if (this.storage.listar() != null) {
                          this.user1 = this.storage.listar();
                          console.log("Si funciona " + this.user1.id + " listar " + this.storage.listar());
                          this.service.crear(this.user).subscribe(function (res) {
                            _this.storage.limpiar();

                            console.log(res);
                          });
                        } else {
                          console.log("Esta Vacio");
                        }
                      }

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // metodo para loguearse

        }, {
          key: "login",
          value: function login() {
            var _this2 = this;

            this.service.login(this.cliente1).subscribe(function (response) {
              _this2.empleado = response;
              _this2.idUser = response.id;
              console.log("iduser " + _this2.idUser);

              _this2.storage.almacenarE(_this2.empleado);

              if (_this2.idUser > 0) {
                _this2.emp = _this2.storage.listarE();
                console.log("empleado 1234 " + _this2.emp.nombre);

                _this2.storage.almacenarL(_this2.idUser); //this.router.navigate(['/tabs']);


                _this2.router.navigate(['/tabs'], {
                  queryParams: {
                    id: _this2.idUser
                  }
                });
              } else if (_this2.idUser == 0) {
                _this2.mensaje('Datos Incorrecto');

                console.log("Datos Incorrectos");
              }
            });
          }
        }, {
          key: "mensaje",
          value: function mensaje(msj) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toast.create({
                        message: msj,
                        duration: 1500
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "iniciar",
          value: function iniciar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var l, _yield$l$onDidDismiss, role, data;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loading.create({
                        message: 'Espera...',
                        duration: 1500,
                        translucent: true
                      });

                    case 2:
                      l = _context3.sent;
                      l.present();
                      this.login();
                      console.log(" login " + this.login.name);
                      _context3.next = 8;
                      return l.onDidDismiss();

                    case 8:
                      _yield$l$onDidDismiss = _context3.sent;
                      role = _yield$l$onDidDismiss.role;
                      data = _yield$l$onDidDismiss.data;

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_servicios_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
        }, {
          type: src_app_servicios_radio_service__WEBPACK_IMPORTED_MODULE_8__["RadioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paginas-login-login-module-es5.js.map