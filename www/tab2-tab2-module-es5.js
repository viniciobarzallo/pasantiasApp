(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
    /***/
    "EGAO":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function EGAO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content > ion-list {\n  position: relative;\n}\n\nion-content {\n  background-color: #07f1be;\n}\n\n.btn-center-aling {\n  text-align: center !important;\n}\n\n.btn-center-aling ion-button {\n  --color: rgb(150, 11, 104);\n}\n\n.btn-center-aling ion-button:hover {\n  --color: black;\n}\n\nion-item {\n  --background: transparent;\n  color: #000000;\n  --min-height: 40px;\n}\n\nion-list {\n  background-color: transparent;\n}\n\nion-button {\n  --background:#4890DC;\n}\n\n.horizontal {\n  display: flex;\n  justify-content: center;\n}\n\n.vertical {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nimg {\n  width: 175px;\n  height: 175px;\n}\n\n:host {\n  --min-height: 30px;\n}\n\n.item-avatar {\n  width: 20px !important;\n  height: 60px !important;\n}\n\nion-toolbar {\n  --ion-background-color: #4890DC;\n  text-align: center;\n}\n\nion-avatar {\n  width: 200px;\n  height: 200px;\n  align-items: center;\n  justify-content: center;\n}\n\n:root {\n  /** primary **/\n  /** primary end **/\n  --ion-color-mango: #ffcc66;\n  --ion-color-mango-rgb: 255, 204, 102;\n  --ion-color-mango-contrast: #000000;\n  --ion-color-mango-contrast-rgb: 0, 0, 0;\n  --ion-color-mango-shade: #e0b45a;\n  --ion-color-mango-tint: #ffd175;\n}\n\n:root ion-tab-button.tab-selected ion-icon,\n:root ion-tab-button.tab-selected ion-label {\n  color: var(--ion-color-mango) !important;\n  --ion-color-base: var(--ion-color-mango) !important;\n}\n\n.ion-color-mango {\n  --ion-color-base: var(--ion-color-mango);\n  --ion-color-base-rgb: var(--ion-color-mango-rgb);\n  --ion-color-contrast: var(--ion-color-mango-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-mango-contrast-rgb);\n  --ion-color-shade: var(--ion-color-mango-shade);\n  --ion-color-tint: var(--ion-color-mango-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBUUE7RUFDSSx5QkFBQTtBQUxKOztBQVFBO0VBQ0ksNkJBQUE7QUFMSjs7QUFRQTtFQUNJLDBCQUFBO0FBTEo7O0FBUUE7RUFDSSxjQUFBO0FBTEo7O0FBUUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVFBO0VBQ0ksNkJBQUE7QUFMSjs7QUFTQTtFQUNJLG9CQUFBO0FBTko7O0FBU0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFOSjs7QUFTQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBTko7O0FBU0E7RUFDSSxZQUFBO0VBQWMsYUFBQTtBQUxsQjs7QUFTQTtFQUNJLGtCQUFBO0FBTko7O0FBU0E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FBTko7O0FBU0E7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0FBTko7O0FBU0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFOSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQU5KOztBQVFROztFQUVJLHdDQUFBO0VBQ0EsbURBQUE7QUFOWjs7QUFXQTtFQUNJLHdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxxREFBQTtFQUNBLDZEQUFBO0VBQ0EsK0NBQUE7RUFDQSw2Q0FBQTtBQVJKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50Pmlvbi1saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vICB0b3A6IDMwJTtcbn1cblxuXG4vLyBpb24tY29udGVudCB7XG4vLyAgICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvSnVwaXRlci5qcGcpbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbi8vIH1cblxuaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2YxYmU7XG4gfVxuXG4uYnRuLWNlbnRlci1hbGluZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcbn1cblxuLmJ0bi1jZW50ZXItYWxpbmcgaW9uLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogcmdiKDE1MCwgMTEsIDEwNCk7XG59XG5cbi5idG4tY2VudGVyLWFsaW5nIGlvbi1idXR0b246aG92ZXIge1xuICAgIC0tY29sb3I6IGJsYWNrO1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IzQ4OTBEQztcbn1cblxuLmhvcml6b250YWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuLnZlcnRpY2Fse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW1ne1xuICAgIHdpZHRoOiAxNzVweDsgaGVpZ2h0OiAxNzVweDtcbn1cblxuXG46aG9zdCB7XG4gICAgLS1taW4taGVpZ2h0OiAzMHB4O1xufVxuXG4uaXRlbS1hdmF0YXIge1xuICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNDg5MERDO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuOnJvb3Qge1xuICAgIC8qKiBwcmltYXJ5ICoqL1xuICAgIC8qKiBwcmltYXJ5IGVuZCAqKi9cbiAgICAtLWlvbi1jb2xvci1tYW5nbzogI2ZmY2M2NjtcbiAgICAtLWlvbi1jb2xvci1tYW5nby1yZ2I6IDI1NSwgMjA0LCAxMDI7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAgIC0taW9uLWNvbG9yLW1hbmdvLXNoYWRlOiAjZTBiNDVhO1xuICAgIC0taW9uLWNvbG9yLW1hbmdvLXRpbnQ6ICNmZmQxNzU7XG4gICAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgICAgICAgaW9uLWljb24sXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1hbmdvKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1hbmdvKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW9uLWNvbG9yLW1hbmdvIHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbWFuZ28pO1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbWFuZ28tcmdiKTtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1hbmdvLWNvbnRyYXN0KTtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tYW5nby1jb250cmFzdC1yZ2IpO1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbWFuZ28tc2hhZGUpO1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tYW5nby10aW50KTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "JZ9U":
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /*! exports provided: Tab2Page */

    /***/
    function JZ9U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "e9nj");
      /* harmony import */


      var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab2.page.scss */
      "EGAO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _componentes_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../componentes/popinfo/popinfo.component */
      "l6nA");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _servicios_radio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../servicios/radio.service */
      "Ys19");
      /* harmony import */


      var _servicios_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../servicios/storage.service */
      "6k2k");

      var Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(router, route, httpCliente, service, popoverCtrl, storage) {
          var _this = this;

          _classCallCheck(this, Tab2Page);

          this.router = router;
          this.route = route;
          this.httpCliente = httpCliente;
          this.service = service;
          this.popoverCtrl = popoverCtrl;
          this.storage = storage;
          this.user = {
            id: 0,
            tipoServicio: "",
            nombre: "",
            direccion: "",
            telefono: "",
            coordenadas: "",
            observaciones: "",
            tecnico: "",
            empleado: {}
          };
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
          this.checkbox = {};
          this.id = 0;
          this.nombre = null;
          this.tipoServicio = null;
          this.direccion = null;
          this.telefono = null;
          this.coordenadas = null;
          this.observaciones = null;
          this.tecnico = null;
          this.clientes = [];
          this.clientes1 = [];
          this.deshabilitarTexto = false;
          this.datos = [];
          this.realizado = true;
          this.lista();
          this.clientes1.forEach(function (id) {
            return _this.checkbox[_this.user.id] = false;
          }); //this.login();
        }

        _createClass(Tab2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.queryParams.subscribe(function (params) {
              params.id;

              _this2.service.buscarI(params.id).subscribe(function (response) {
                _this2.user = response;
                console.log("user.id " + _this2.user.id);
              });
            });
            this.textoEnable();
          }
        }, {
          key: "textoDisable",
          value: function textoDisable() {
            console.log("deshabilitad " + this.deshabilitarTexto);
            this.deshabilitarTexto = true;
          }
        }, {
          key: "textoEnable",
          value: function textoEnable() {
            console.log(this.deshabilitarTexto);
            this.deshabilitarTexto = false;
          } //lista todas las instalaciones de un tecnico

        }, {
          key: "lista",
          value: function lista() {
            var _this3 = this;

            this.user1 = this.storage.listarE();
            this.service.todasIs(this.user1.nombre).subscribe(function (response) {
              _this3.clientes = response;
            }, function (error) {
              console.log(error);
            });
          } //nos redirigimos al cliente de una especifica instalacion

        }, {
          key: "actualizar",
          value: function actualizar(id) {
            //this.navCtrl.push("Tab5Page");
            console.log("Hola");
            this.router.navigate(['/instalacion'], {
              queryParams: {
                id: id
              }
            });
          }
        }, {
          key: "cambiaEstado",
          value: function cambiaEstado() {
            console.log(this.realizado);
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
                      return this.popoverCtrl.create({
                        component: _componentes_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_6__["PopinfoComponent"],
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
          } //nos permite guardar en instalacion un true para decir que ya hemos realizado esa actividad  

        }, {
          key: "cambiar",
          value: function cambiar(event, _char) {
            this.instalacion = _char;
            console.log("actualizar", this.instalacion);
            this.service.actualizarInstalacion(this.instalacion).subscribe(function (response) {
              console.log(response);
            });
            this.textoDisable();
          }
        }]);

        return Tab2Page;
      }();

      Tab2Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _servicios_radio_service__WEBPACK_IMPORTED_MODULE_8__["RadioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
        }, {
          type: _servicios_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
        }];
      };

      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab2Page);
      /***/
    },

    /***/
    "TUkU":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function TUkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab2.page */
      "JZ9U");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab2-routing.module */
      "UDmF");

      var Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
      })], Tab2PageModule);
      /***/
    },

    /***/
    "UDmF":
    /*!*********************************************!*\
      !*** ./src/app/tab2/tab2-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab2PageRoutingModule */

    /***/
    function UDmF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
        return Tab2PageRoutingModule;
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab2.page */
      "JZ9U");

      var routes = [{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
      }];

      var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      };

      Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab2PageRoutingModule);
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
    "e9nj":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function e9nj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Instalaciones\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" >\n  <!--routerLink llama al metodo 'datos' para mostar atributos -->\n  <ion-card *ngFor=\"let char of clientes\">\n    <ion-card-header >\n      <ion-card-title>{{char.nombre}}</ion-card-title>\n    </ion-card-header>\n    <ion-card class=\"ion\" [disabled]='char.realizado'> \n    <ion-card-content [routerLink]=\"['/instalacion',char.id]\" (click)=\"actualizar(char.id)\"   >\n      \n      <ion-label >Dirección:</ion-label>\n      <ion-item>\n        <ion-label >{{char.direccion}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label  >{{char.coordenadas}}</ion-label>\n      </ion-item>\n    \n    </ion-card-content>\n  </ion-card>\n    <ion-card *ngIf=\"char.realizado\" name=\"trabajo\" color=\"danger\"   >\n      <ion-item >\n        <ion-label  *ngIf=\"char.realizado\">Realizado</ion-label>\n\n        <ion-toggle *ngIf=\"char.realizado\" disabled=\"!char.realizado\" slot=\"end\" [(ngModel)]=\"char.realizado\"   (ionChange)=\"cambiar($event, char)\" ></ion-toggle>\n        <ion-toggle *ngIf=\"!char.realizado\" slot=\"end\" [(ngModel)]=\"char.realizado\"   (ionChange)=\"cambiar($event)\" ></ion-toggle>\n        \n       </ion-item>  \n    </ion-card>\n    <ion-card *ngIf=\"!char.realizado\" name=\"trabajo\" color=\"silver\" >\n      <ion-item >\n        \n\n        <ion-toggle *ngIf=\"char.realizado\" disabled=\"!char.realizado\" slot=\"end\" [(ngModel)]=\"char.realizado\"   (ionChange)=\"cambiar($event, char)\" ></ion-toggle>\n        <ion-toggle *ngIf=\"!char.realizado\" slot=\"end\" [(ngModel)]=\"char.realizado\"   (ionChange)=\"cambiar($event)\" ></ion-toggle>\n        \n       </ion-item>  \n    </ion-card>\n    \n  </ion-card>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2-tab2-module-es5.js.map