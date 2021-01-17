(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-instalacion-instalacion-module"], {
    /***/
    "0BAn":
    /*!*******************************************************************!*\
      !*** ./src/app/paginas/instalacion/instalacion-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: InstalacionPageRoutingModule */

    /***/
    function BAn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstalacionPageRoutingModule", function () {
        return InstalacionPageRoutingModule;
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


      var _instalacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./instalacion.page */
      "EBE4");

      var routes = [{
        path: '',
        component: _instalacion_page__WEBPACK_IMPORTED_MODULE_3__["InstalacionPage"]
      }];

      var InstalacionPageRoutingModule = function InstalacionPageRoutingModule() {
        _classCallCheck(this, InstalacionPageRoutingModule);
      };

      InstalacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InstalacionPageRoutingModule);
      /***/
    },

    /***/
    "AWZm":
    /*!***********************************************************!*\
      !*** ./src/app/paginas/instalacion/instalacion.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function AWZm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content > ion-list {\n  position: relative;\n}\n\nion-content {\n  background-color: #07f1be;\n}\n\n.ion-padding {\n  background-color: #def;\n}\n\n.btn-center-aling {\n  text-align: center !important;\n}\n\nion-item {\n  --background: transparent;\n  color: #050505;\n  --min-height: 40px;\n  --size: 100px;\n}\n\nion-list {\n  background-color: transparent;\n}\n\nion-button {\n  --background:#4890DC;\n}\n\n.horizontal {\n  display: flex;\n  justify-content: center;\n}\n\n.vertical {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nimg {\n  width: 175px;\n  height: 175px;\n}\n\n:host {\n  --min-height: 30px;\n}\n\n.item-avatar {\n  width: 20px !important;\n  height: 60px !important;\n}\n\n.colorToolbar {\n  --ion-background-color: #4890DC;\n  text-align: center;\n}\n\n.centrarBoton {\n  text-align: center;\n}\n\nion-avatar {\n  width: 200px;\n  height: 200px;\n  align-items: center;\n  justify-content: center;\n}\n\n:root {\n  /** primary **/\n  /** primary end **/\n  --ion-color-mango: #ffcc66;\n  --ion-color-mango-rgb: 255, 204, 102;\n  --ion-color-mango-contrast: #000000;\n  --ion-color-mango-contrast-rgb: 0, 0, 0;\n  --ion-color-mango-shade: #e0b45a;\n  --ion-color-mango-tint: #ffd175;\n}\n\n:root ion-tab-button.tab-selected ion-icon,\n:root ion-tab-button.tab-selected ion-label {\n  color: var(--ion-color-mango) !important;\n  --ion-color-base: var(--ion-color-mango) !important;\n}\n\n.ion-color-mango {\n  --ion-color-base: var(--ion-color-mango);\n  --ion-color-base-rgb: var(--ion-color-mango-rgb);\n  --ion-color-contrast: var(--ion-color-mango-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-mango-contrast-rgb);\n  --ion-color-shade: var(--ion-color-mango-shade);\n  --ion-color-tint: var(--ion-color-mango-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9pbnN0YWxhY2lvbi9pbnN0YWxhY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFNQztFQUNHLHNCQUFBO0FBSEo7O0FBUUE7RUFDSSw2QkFBQTtBQUxKOztBQVFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0Qsa0JBQUE7RUFDQyxhQUFBO0FBTEo7O0FBU0E7RUFDSSw2QkFBQTtBQU5KOztBQVNBO0VBQ0ksb0JBQUE7QUFOSjs7QUFTQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQU5KOztBQVNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFOSjs7QUFTQTtFQUNJLFlBQUE7RUFBYyxhQUFBO0FBTGxCOztBQVNBO0VBQ0ksa0JBQUE7QUFOSjs7QUFTQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUFOSjs7QUFTQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFjQTtFQUNJLGtCQUFBO0FBWEo7O0FBY0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFYSjs7QUFjQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQVhKOztBQWFROztFQUVJLHdDQUFBO0VBQ0EsbURBQUE7QUFYWjs7QUFnQkE7RUFDSSx3Q0FBQTtFQUNBLGdEQUFBO0VBQ0EscURBQUE7RUFDQSw2REFBQTtFQUNBLCtDQUFBO0VBQ0EsNkNBQUE7QUFiSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvaW5zdGFsYWNpb24vaW5zdGFsYWNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQ+aW9uLWxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gIHRvcDogMzAlO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3ZjFiZTtcbiAgICBcblxuIH1cblxuXG4gLmlvbi1wYWRkaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmO1xuXG4gIH1cbiBcbiBcbi5idG4tY2VudGVyLWFsaW5nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzA1MDUwNTtcbiAgIC0tbWluLWhlaWdodDogNDBweDtcbiAgICAtLXNpemU6IDEwMHB4O1xuXG59XG5cbmlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiM0ODkwREM7XG59XG5cbi5ob3Jpem9udGFse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi52ZXJ0aWNhbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmltZ3tcbiAgICB3aWR0aDogMTc1cHg7IGhlaWdodDogMTc1cHg7XG59XG5cblxuOmhvc3Qge1xuICAgIC0tbWluLWhlaWdodDogMzBweDtcbn1cblxuLml0ZW0tYXZhdGFyIHtcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3JUb29sYmFyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNDg5MERDO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLy9pb24tdG9vbGJhciB7XG4vLyAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNDg5MERDO1xuLy8gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy99XG5cbi5jZW50cmFyQm90b24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuOnJvb3Qge1xuICAgIC8qKiBwcmltYXJ5ICoqL1xuICAgIC8qKiBwcmltYXJ5IGVuZCAqKi9cbiAgICAtLWlvbi1jb2xvci1tYW5nbzogI2ZmY2M2NjtcbiAgICAtLWlvbi1jb2xvci1tYW5nby1yZ2I6IDI1NSwgMjA0LCAxMDI7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC0taW9uLWNvbG9yLW1hbmdvLXNoYWRlOiAjZTBiNDVhO1xuICAgIC0taW9uLWNvbG9yLW1hbmdvLXRpbnQ6ICNmZmQxNzU7XG4gICAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgICAgICAgaW9uLWljb24sXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1hbmdvKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1hbmdvKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW9uLWNvbG9yLW1hbmdvIHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbWFuZ28pO1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbWFuZ28tcmdiKTtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1hbmdvLWNvbnRyYXN0KTtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tYW5nby1jb250cmFzdC1yZ2IpO1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbWFuZ28tc2hhZGUpO1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tYW5nby10aW50KTtcbn0iXX0= */";
      /***/
    },

    /***/
    "EBE4":
    /*!*********************************************************!*\
      !*** ./src/app/paginas/instalacion/instalacion.page.ts ***!
      \*********************************************************/

    /*! exports provided: InstalacionPage */

    /***/
    function EBE4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstalacionPage", function () {
        return InstalacionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_instalacion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./instalacion.page.html */
      "W2AS");
      /* harmony import */


      var _instalacion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./instalacion.page.scss */
      "AWZm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_componentes_popnuevains_popnuevains_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/componentes/popnuevains/popnuevains.component */
      "yyqg");
      /* harmony import */


      var src_app_servicios_radio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/servicios/radio.service */
      "Ys19"); //import { AlmacenamientoService } from '../../servicios/almacenamiento.service';


      var InstalacionPage = /*#__PURE__*/function () {
        function InstalacionPage(obtenerUrl, httpCliente, geolocation, popoverCtrol, router, service, route //private almacenamiento:AlmacenamientoService
        ) {
          _classCallCheck(this, InstalacionPage);

          this.obtenerUrl = obtenerUrl;
          this.httpCliente = httpCliente;
          this.geolocation = geolocation;
          this.popoverCtrol = popoverCtrol;
          this.router = router;
          this.service = service;
          this.route = route;
          this.clienteInstalacion = [];
          this.deshabilitarTexto = false;
          this.user = {
            id: 0,
            //tipoServicio: "",
            nombre: "",
            direccion: "",
            telefono: "",
            coordenadas: "",
            observaciones: "",
            // tecnico: "",
            empleado: {}
          };
        }

        _createClass(InstalacionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              params.id;

              _this.service.buscarI(params.id).subscribe(function (response) {
                _this.user = response;
              });
            });
            this.textoDisable();
          }
        }, {
          key: "textoDisable",
          value: function textoDisable() {
            console.log(this.deshabilitarTexto);
            this.deshabilitarTexto = !this.deshabilitarTexto;
          }
        }, {
          key: "textoEnable",
          value: function textoEnable() {
            console.log(this.deshabilitarTexto);
            this.deshabilitarTexto = false;
          }
        }, {
          key: "obtenerGeolocalizacion",
          value: function obtenerGeolocalizacion() {
            var _this2 = this;

            this.geolocation.getCurrentPosition().then(function (geoposition) {
              _this2.latitud = geoposition.coords.latitude;
              _this2.longitud = geoposition.coords.longitude;
              console.log(_this2.latitud);
              console.log(_this2.longitud);
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this3 = this;

            setTimeout(function () {
              _this3.obtenerGeolocalizacion();

              event.target.complete();
            }, 1500);
          }
        }, {
          key: "mostrarPop",
          value: function mostrarPop(evento) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover, _yield$popover$onWill, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverCtrol.create({
                        component: src_app_componentes_popnuevains_popnuevains_component__WEBPACK_IMPORTED_MODULE_8__["PopnuevainsComponent"],
                        event: evento,
                        mode: 'ios'
                      });

                    case 2:
                      popover = _context.sent;
                      _context.next = 5;
                      return popover.present();

                    case 5:
                      _context.next = 7;
                      return popover.onWillDismiss();

                    case 7:
                      _yield$popover$onWill = _context.sent;
                      data = _yield$popover$onWill.data;
                      console.log('Padre:', data);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "validadorDeCedula",
          value: function validadorDeCedula(cedula) {
            var cedulaCorrecta = false;

            if (cedula.length == 10) {
              var tercerDigito = parseInt(cedula.substring(2, 3));

              if (tercerDigito < 6) {
                // El ultimo digito se lo considera dígito verificador
                var coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
                var verificador = parseInt(cedula.substring(9, 10));
                var suma = 0;
                var digito = 0;

                for (var i = 0; i < cedula.length - 1; i++) {
                  digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];
                  suma += parseInt(digito % 10 + '') + parseInt(digito / 10 + ''); //      console.log(suma+" suma"+coefValCedula[i]); 
                }

                suma = Math.round(suma); //  console.log(verificador);
                //  console.log(suma);
                //  console.log(digito);

                if (Math.round(suma % 10) == 0 && Math.round(suma % 10) == verificador) {
                  cedulaCorrecta = true;
                } else if (10 - Math.round(suma % 10) == verificador) {
                  cedulaCorrecta = true;
                } else {
                  cedulaCorrecta = false;
                }
              } else {
                cedulaCorrecta = false;
              }
            } else {
              cedulaCorrecta = false;
            }

            this.validador = cedulaCorrecta;
          }
        }]);

        return InstalacionPage;
      }();

      InstalacionPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_servicios_radio_service__WEBPACK_IMPORTED_MODULE_9__["RadioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      InstalacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-instalacion',
        template: _raw_loader_instalacion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_instalacion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InstalacionPage);
      /***/
    },

    /***/
    "W2AS":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/instalacion/instalacion.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function W2AS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"colorToolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Instalación</ion-title>\n\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"mostrarPop( $event )\">\n        <ion-icon slot=\"icon-only\" md=\"ellipsis-vertical\" ></ion-icon> \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  \n      <!--\n      <input type=\"text\" value=\"\" name=\"cedula\" [(ngModel)]=\"cedula\" (change)=\"validadorDeCedula(cedula)\" maxlength=\"10\">\n      <small *ngIf=\"!validador\" class=\"text-danger\">Cedula Invalida</small>\n      -->\n\n    <ion-list>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Cédula:</ion-label>\n        <ion-input value={{user.id}} type=\"text\" maxlength=\"10\" placeholder=\"0101010101\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Nombres Completos:</ion-label>\n        <ion-input value={{user.nombre}} type=\"text\" placeholder=\"Apellidos Nombres\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Tipo de Servicio:</ion-label>\n        <ion-input value={{user.tipoServicio}} type=\"text\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Dirección:</ion-label>\n        <ion-input value={{user.direccion}} type=\"text\" placeholder=\"Calle principal\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Teléfonos:</ion-label>\n        <ion-input value={{user.telefono}} type=\"text\" maxlength=\"9\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Coordenadas:</ion-label>\n        <ion-input value={{user.coordenadas}} type=\"text\" maxlength=\"9\" [readonly]='deshabilitarTexto'></ion-input>\n      </ion-item>\n      \n\n      <ion-item>\n        <ion-label position=\"stacked\">Plan Adquirido:</ion-label>\n          <ion-select disabled interface=\"popover\">\n            <ion-select-option value=\"Basico\">Básico</ion-select-option>\n            <ion-select-option value=\"Intermedio\">Intermedio</ion-select-option>\n            <ion-select-option value=\"Alto\">Alto</ion-select-option>\n          </ion-select>\n          \n      </ion-item>\n      \n      <ion-item >\n        <ion-label>Observación: </ion-label>\n          <ion-input  value={{user.observaciones}} type=\"text\" maxlength=\"100\" [readonly]='deshabilitarTexto'></ion-input>\n        \n      </ion-item> \n       \n    </ion-list>\n   \n</ion-content>";
      /***/
    },

    /***/
    "Ys19":
    /*!********************************************!*\
      !*** ./src/app/servicios/radio.service.ts ***!
      \********************************************/

    /*! exports provided: RadioService */

    /***/
    function Ys19(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioService", function () {
        return RadioService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RadioService = /*#__PURE__*/function () {
        function RadioService(http) {
          _classCallCheck(this, RadioService);

          this.http = http;
          this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
        } //webservices para listar los registros


        _createClass(RadioService, [{
          key: "todasV",
          value: function todasV() {
            return this.http.get('http://35.184.60.118:8080/CallCenter/srv/astronet/listRgVT'); // return this.http.get<Registro[]>('http://35.222.54.60:8080/CallCenter/srv/astronet/listRgVT');
            //  return this.http.get<Registro[]>('http://localhost:8080/CallCenter/srv/astronet/listRgVT');
          } //Webservices para listar las instalaciones

        }, {
          key: "todasI",
          value: function todasI() {
            return this.http.get('http://35.184.60.118:8080/CallCenter/srv/astronet/listInst'); // return this.http.get<Instalacion[]>('http://35.222.54.60:8080/CallCenter/srv/astronet/listInst');
            // return this.http.get<Instalacion[]>('http://localhost:8080/CallCenter/srv/astronet/listInst');
          } //webservices para listar las visitas tecnicas de cada tecnico

        }, {
          key: "todasVs",
          value: function todasVs(nombre) {
            return this.http.get("http://35.184.60.118:8080/CallCenter/srv/astronet/listAG?nombre=".concat(nombre)); // return this.http.get<Agendamiento[]>(`http://35.222.54.60:8080/CallCenter/srv/astronet/listAG?nombre=${nombre}`);
            // return this.http.get<Agendamiento[]>(`http://localhost:8080/CallCenter/srv/astronet/listAG?nombre=${nombre}`);
          } //listar todas las instalaciones de cada tecnico

        }, {
          key: "todasIs",
          value: function todasIs(nombre) {
            return this.http.get("http://35.184.60.118:8080/CallCenter/srv/astronet/listIns?nombre=".concat(nombre)); // return this.http.get<Instalacion[]>(`http://35.222.54.60:8080/CallCenter/srv/astronet/listIns?nombre=${nombre}`);
            // return this.http.get<Instalacion[]>(`http://localhost:8080/CallCenter/srv/astronet/listIns?nombre=${nombre}`);
          } //Listar las antenas

        }, {
          key: "ListarAnt",
          value: function ListarAnt() {
            return this.http.get('http://35.184.60.118:8080/CallCenter/srv/astronet/listarAn'); //  return this.http.get<Antena[]>('http://35.222.54.60:8080/CallCenter/srv/astronet/listarAn');
            // return this.http.get<Antena[]>('http://localhost:8080/CallCenter/srv/astronet/listarAn');
          } //Crear un nuevo clinete desde la instalacion del servicio

        }, {
          key: "crear",
          value: function crear(cliente) {
            return this.http.post('http://35.184.60.118:8080/CallCenter/srv/astronet/create', cliente, {
              headers: this.httpHeaders
            }); // return this.http.post<Response>('http://35.222.54.60:8080/CallCenter/srv/astronet/create', cliente, {headers: this.httpHeaders});
            //  return this.http.post<Response>('http://localhost:8080/CallCenter/srv/astronet/create', cliente, {headers: this.httpHeaders});
          } //actualizar los datos del cliente desde la visita tecnica

        }, {
          key: "actualizar1",
          value: function actualizar1(cliente) {
            console.log("cliente actualizar " + cliente);
            return this.http.put('http://35.184.60.118:8080/CallCenter/srv/astronet/actualizarCl', cliente); // return this.http.put<Response>('http://35.222.54.60:8080/CallCenter/srv/astronet/actualizarCl',cliente);
            // return this.http.put<Response>('http://localhost:8080/CallCenter/srv/astronet/actualizarCl',cliente);
          } //actualizar la visita tecnica

        }, {
          key: "actualizarVisita",
          value: function actualizarVisita(agendamiento) {
            console.log("Registro actualizado " + agendamiento);
            return this.http.put('http://35.184.60.118:8080/CallCenter/srv/astronet/actualizarVisita', agendamiento); // return this.http.put<Response>('http://35.222.54.60:8080/CallCenter/srv/astronet/actualizarVisita',agendamiento);
            //  return this.http.put<Response>('http://localhost:8080/CallCenter/srv/astronet/actualizarVisita', agendamiento);
          } //actualizar la instalaciion

        }, {
          key: "actualizarInstalacion",
          value: function actualizarInstalacion(instalacion) {
            console.log("Instalacion actualizada " + instalacion);
            return this.http.put('http://35.184.60.118:8080/CallCenter/srv/astronet/actualizarInstalacion', instalacion); // return this.http.put<Response>('http://35.222.54.60:8080/CallCenter/srv/astronet/actualizarInstalacion',instalacion);
            //  return this.http.put<Response>('http://localhost:8080/CallCenter/srv/astronet/actualizarInstalacion', instalacion);
          } //buscar una visita tecnica

        }, {
          key: "buscarV",
          value: function buscarV(id) {
            console.log("id service service " + id);
            return this.http.get("http://35.184.60.118:8080/CallCenter/srv/astronet/buscarIdVis?id=".concat(id)); //  return this.http.get<Registro>(`http://35.222.54.60:8080/CallCenter/srv/astronet/buscarIdVis?id=${id}`);
            // return this.http.get<Registro>(`http://localhost:8080/CallCenter/srv/astronet/buscarIdVis?id=${id}`);
          } //buscar una instalacion

        }, {
          key: "buscarI",
          value: function buscarI(id) {
            return this.http.get("http://35.184.60.118:8080/CallCenter/srv/astronet/buscarInsId?id=".concat(id)); // return this.http.get<Instalacion>(`http://35.222.54.60:8080/CallCenter/srv/astronet/buscarInsId?id=${id}`);
            // return this.http.get<Instalacion>(`http://localhost:8080/CallCenter/srv/astronet/buscarInsId?id=${id}`);
          } //login para la app movil

        }, {
          key: "login",
          value: function login(cliente) {
            return this.http.post('http://35.184.60.118:8080/CallCenter/srv/astronet/login', cliente, {
              headers: this.httpHeaders
            }); //  return this.http.post<Empleado>('http://35.222.54.60:8080/CallCenter/srv/astronet/login', cliente, {headers: this.httpHeaders});
            // return this.http.post<Empleado>('http://localhost:8080/CallCenter/srv/astronet/login', cliente, {headers: this.httpHeaders});
          }
        }]);

        return RadioService;
      }();

      RadioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      RadioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RadioService);
      /***/
    },

    /***/
    "lGsn":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/popnuevains/popnuevains.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lGsn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-list >\n  <!-- ng-click = muestra el popcontroller que esta en tab2.ts\n       (click)=\"onClick( i + 1 )\" = al hacer click cierra el popcontroller\n       detail = puedan hacer click tanto en andriod como en ios\n -->\n <ion-item ng-click=\"mostrarPop($event)\" \n           (click)=\"onClick( i + 1 )\"  \n           detail>\n   <ion-label (click)=\"nuevaInstalacion()\">Nueva instalación</ion-label>\n </ion-item>\n</ion-list>";
      /***/
    },

    /***/
    "ovvr":
    /*!***********************************************************!*\
      !*** ./src/app/paginas/instalacion/instalacion.module.ts ***!
      \***********************************************************/

    /*! exports provided: InstalacionPageModule */

    /***/
    function ovvr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstalacionPageModule", function () {
        return InstalacionPageModule;
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


      var _instalacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./instalacion-routing.module */
      "0BAn");
      /* harmony import */


      var _instalacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./instalacion.page */
      "EBE4");

      var InstalacionPageModule = function InstalacionPageModule() {
        _classCallCheck(this, InstalacionPageModule);
      };

      InstalacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _instalacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["InstalacionPageRoutingModule"]],
        declarations: [_instalacion_page__WEBPACK_IMPORTED_MODULE_6__["InstalacionPage"]]
      })], InstalacionPageModule);
      /***/
    },

    /***/
    "rKb4":
    /*!********************************************************************!*\
      !*** ./src/app/componentes/popnuevains/popnuevains.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function rKb4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3BvcG51ZXZhaW5zL3BvcG51ZXZhaW5zLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "yyqg":
    /*!******************************************************************!*\
      !*** ./src/app/componentes/popnuevains/popnuevains.component.ts ***!
      \******************************************************************/

    /*! exports provided: PopnuevainsComponent */

    /***/
    function yyqg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopnuevainsComponent", function () {
        return PopnuevainsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_popnuevains_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./popnuevains.component.html */
      "lGsn");
      /* harmony import */


      var _popnuevains_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./popnuevains.component.scss */
      "rKb4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var PopnuevainsComponent = /*#__PURE__*/function () {
        function PopnuevainsComponent(routeLogin, popoverCtrl) {
          _classCallCheck(this, PopnuevainsComponent);

          this.routeLogin = routeLogin;
          this.popoverCtrl = popoverCtrl;
          this.items = Array(1);
        }

        _createClass(PopnuevainsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClick",
          value: function onClick(valor) {
            console.log('item:', valor);
            this.popoverCtrl.dismiss({
              item: valor
            });
          }
        }, {
          key: "nuevaInstalacion",
          value: function nuevaInstalacion() {
            this.routeLogin.navigate(['/nuevains']);
          }
        }]);

        return PopnuevainsComponent;
      }();

      PopnuevainsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
        }];
      };

      PopnuevainsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-popnuevains',
        template: _raw_loader_popnuevains_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_popnuevains_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PopnuevainsComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paginas-instalacion-instalacion-module-es5.js.map