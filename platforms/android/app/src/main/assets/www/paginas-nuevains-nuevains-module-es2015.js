(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginas-nuevains-nuevains-module"],{

/***/ "+BKV":
/*!*************************************************************!*\
  !*** ./src/app/paginas/nuevains/nuevains-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NuevainsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevainsPageRoutingModule", function() { return NuevainsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nuevains_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevains.page */ "D9s1");




const routes = [
    {
        path: '',
        component: _nuevains_page__WEBPACK_IMPORTED_MODULE_3__["NuevainsPage"]
    }
];
let NuevainsPageRoutingModule = class NuevainsPageRoutingModule {
};
NuevainsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NuevainsPageRoutingModule);



/***/ }),

/***/ "6T7Q":
/*!*****************************************************!*\
  !*** ./src/app/paginas/nuevains/nuevains.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content > ion-list {\n  position: relative;\n}\n\nion-content {\n  background-color: #07f1be;\n}\n\n.btn-center-aling {\n  text-align: center !important;\n}\n\n.label {\n  margin: 0 0px 5px 0px;\n}\n\n.small {\n  text-align: start;\n  size: 30px;\n  padding: 20px;\n}\n\n.cedula {\n  size: 10px;\n}\n\n.ip {\n  size: 10px;\n}\n\nion-item {\n  --background: transparent;\n  color: #050505;\n  min-height: 40px;\n  min-width: 400px;\n}\n\nion-list {\n  background-color: transparent;\n}\n\nion-button {\n  --background:#4890DC;\n}\n\n.horizontal {\n  display: flex;\n  justify-content: center;\n}\n\n.vertical {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nimg {\n  width: 175px;\n  height: 175px;\n}\n\n:host {\n  --min-height: 30px;\n}\n\n.item-avatar {\n  width: 20px !important;\n  height: 60px !important;\n}\n\nion-toolbar {\n  --ion-background-color: #4890DC;\n  text-align: center;\n}\n\nion-avatar {\n  width: 200px;\n  height: 200px;\n  align-items: center;\n  justify-content: center;\n}\n\n:root {\n  /** primary **/\n  /** primary end **/\n  --ion-color-mango: #ffcc66;\n  --ion-color-mango-rgb: 255, 204, 102;\n  --ion-color-mango-contrast: #000000;\n  --ion-color-mango-contrast-rgb: 0, 0, 0;\n  --ion-color-mango-shade: #e0b45a;\n  --ion-color-mango-tint: #ffd175;\n}\n\n:root ion-tab-button.tab-selected ion-icon,\n:root ion-tab-button.tab-selected ion-label {\n  color: var(--ion-color-mango) !important;\n  --ion-color-base: var(--ion-color-mango) !important;\n}\n\n.ion-color-mango {\n  --ion-color-base: var(--ion-color-mango);\n  --ion-color-base-rgb: var(--ion-color-mango-rgb);\n  --ion-color-contrast: var(--ion-color-mango-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-mango-contrast-rgb);\n  --ion-color-shade: var(--ion-color-mango-shade);\n  --ion-color-tint: var(--ion-color-mango-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9udWV2YWlucy9udWV2YWlucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUFBO0VBQ0ksVUFBQTtBQUdKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUNBO0VBQ0ksNkJBQUE7QUFFSjs7QUFDQTtFQUNJLG9CQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQWMsYUFBQTtBQUdsQjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQ0E7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQUVKOztBQUFROztFQUVJLHdDQUFBO0VBQ0EsbURBQUE7QUFFWjs7QUFHQTtFQUNJLHdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxxREFBQTtFQUNBLDZEQUFBO0VBQ0EsK0NBQUE7RUFDQSw2Q0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9udWV2YWlucy9udWV2YWlucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudD5pb24tbGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyAgdG9wOiAzMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdmMWJlO1xuIH1cblxuLmJ0bi1jZW50ZXItYWxpbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbHtcbiAgICBtYXJnaW46IDAgMHB4IDVweCAwcHg7XG59XG4uc21hbGx7XG4gICAgdGV4dC1hbGlnbjpzdGFydDtcbiAgICBzaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4uY2VkdWxhe1xuICAgIHNpemU6IDEwcHg7XG59XG4uaXB7XG4gICAgc2l6ZTogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICMwNTA1MDU7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIFxufVxuXG5pb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDojNDg5MERDO1xufVxuXG4uaG9yaXpvbnRhbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udmVydGljYWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pbWd7XG4gICAgd2lkdGg6IDE3NXB4OyBoZWlnaHQ6IDE3NXB4O1xufVxuXG5cbjpob3N0IHtcbiAgICAtLW1pbi1oZWlnaHQ6IDMwcHg7XG59XG5cbi5pdGVtLWF2YXRhciB7XG4gICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM0ODkwREM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG46cm9vdCB7XG4gICAgLyoqIHByaW1hcnkgKiovXG4gICAgLyoqIHByaW1hcnkgZW5kICoqL1xuICAgIC0taW9uLWNvbG9yLW1hbmdvOiAjZmZjYzY2O1xuICAgIC0taW9uLWNvbG9yLW1hbmdvLXJnYjogMjU1LCAyMDQsIDEwMjtcbiAgICAtLWlvbi1jb2xvci1tYW5nby1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1tYW5nby1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tc2hhZGU6ICNlMGI0NWE7XG4gICAgLS1pb24tY29sb3ItbWFuZ28tdGludDogI2ZmZDE3NTtcbiAgICBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQge1xuICAgICAgICBpb24taWNvbixcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFuZ28pICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbWFuZ28pICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pb24tY29sb3ItbWFuZ28ge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1tYW5nbyk7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tYW5nby1yZ2IpO1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3QpO1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLW1hbmdvLWNvbnRyYXN0LXJnYik7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1tYW5nby1zaGFkZSk7XG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLW1hbmdvLXRpbnQpO1xufSJdfQ== */");

/***/ }),

/***/ "7rsg":
/*!**********************************!*\
  !*** ./src/app/tab2/servicio.ts ***!
  \**********************************/
/*! exports provided: Servicio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Servicio", function() { return Servicio; });
class Servicio {
}


/***/ }),

/***/ "D9s1":
/*!***************************************************!*\
  !*** ./src/app/paginas/nuevains/nuevains.page.ts ***!
  \***************************************************/
/*! exports provided: NuevainsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevainsPage", function() { return NuevainsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nuevains_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nuevains.page.html */ "dDV0");
/* harmony import */ var _nuevains_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nuevains.page.scss */ "6T7Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "fGQ8");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var src_app_tab2_cliente__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/tab2/cliente */ "jC1c");
/* harmony import */ var src_app_servicios_radio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/servicios/radio.service */ "Ys19");
/* harmony import */ var src_app_servicios_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/servicios/storage.service */ "6k2k");
/* harmony import */ var src_app_tab2_servicio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/tab2/servicio */ "7rsg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "TEn/");














let NuevainsPage = class NuevainsPage {
    constructor(geolocation, launchNavigator, service, storage, router, toastController) {
        this.geolocation = geolocation;
        this.launchNavigator = launchNavigator;
        this.service = service;
        this.storage = storage;
        this.router = router;
        this.toastController = toastController;
        this.teclado_especial = false;
        this.cliente = new src_app_tab2_cliente__WEBPACK_IMPORTED_MODULE_7__["Cliente"]();
        this.servicio = new src_app_tab2_servicio__WEBPACK_IMPORTED_MODULE_10__["Servicio"]();
        this.servicios = [];
        this.antenas = [];
        this.isConnected = false;
        this.lista_array = [];
        this.service.ListarAnt().subscribe(res => {
            this.antenas = res;
            console.log(this.antenas, "ANTENAS");
        });
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroup"]({
            cedula: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](this.cliente.cedula, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]),
            nombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](this.cliente.nombre, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].pattern(/^[A-Za-z ]+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]),
            apellidos: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](this.cliente.apellido, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].pattern(/^[A-Za-z ]+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](this.cliente.email),
            // convencional: new FormControl(this.cliente.convencional, [Validators.required]),
            // celular: new FormControl(this.cliente.celular, [Validators.required]),
            principal: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](this.cliente.direccionPrincipal, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]),
            secundaria: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](),
            referencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](this.cliente.direccionReferencia, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]),
            contrato: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](),
            //plan: new FormControl( ),
            //ip: new FormControl( ),
            // antena: new FormControl(),
            // password: new FormControl(),
            observacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]()
        });
    }
    ngOnDestroy() {
        //this.networkListener.remove();
    }
    //elegir la antena que se usa
    detect(evt) {
        let pos = this.antenas.findIndex(({ id }) => id >= evt.detail.value);
        this.antena = this.antenas[pos];
        console.log("Cambio", evt.detail.value, pos, this.antenas[pos]);
    }
    //elegir plan que se usa
    detect1(evt) {
        console.log(evt.detail.value);
        this.plan = (evt.detail.value);
        this.servicio.plan = this.plan;
    }
    //crear al nueo cliente si hay conexion
    //si no hay se guarda en un localstorage y cuando haiga
    // conexion se guarda en la base
    crear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.networkListener = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Network"].addListener('networkStatusChange', status => {
                console.log('Cambió estado de la red', status);
                this.networkStatus = status;
            });
            this.networkStatus = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Network"].getStatus();
            const aux = String(this.networkStatus.connected);
            if (aux == "true") {
                console.log("Si funciona esto " + this.networkStatus.connected);
                // this.cliente.servicio=this.servicio;
                this.servicios.push(this.servicio);
                this.cliente.servicio = this.servicios;
                //this.cliente.antena = this.antena;
                console.log(this.cliente, "Fuera de post");
                this.service.crear(this.cliente).subscribe(res => {
                    this.router.navigate(['/tabs'], { queryParams: {
                            id: this.cliente.id
                        } });
                    console.log(res);
                });
                let mensaje = '';
                mensaje = 'Datos Guardados';
                const toast = yield this.toastController.create({
                    message: mensaje,
                    position: 'bottom',
                    color: 'success',
                    duration: 2000
                });
                toast.present();
            }
            else if (aux == "false") {
                console.log("No funciona esto " + this.networkStatus.connected);
                this.storage.almacenar(this.cliente);
                console.log(" storage " + this.storage.listar());
                let mensaje = '';
                mensaje = 'Datos se guardaran cuando haiga internet';
                const toast = yield this.toastController.create({
                    message: mensaje,
                    position: 'middle',
                    color: 'danger',
                    duration: 2000
                });
                toast.present();
            }
            console.log("id " + this.id);
        });
    }
    listar() {
        console.log("Listado");
        console.log(this.storage.listar());
    }
    limpiar() {
        this.storage.limpiar();
        console.log('LocalStorage Vacio');
    }
    //obtiene las coordenadas del lugar que estamos en ese momento
    obtenerGeolocalizacion() {
        this.geolocation.getCurrentPosition().then((geoposition) => {
            this.latitud = String(geoposition.coords.latitude);
            this.longitud = String(geoposition.coords.longitude);
            console.log(this.latitud);
            console.log(this.longitud);
            this.cliente.latitud = this.latitud;
            this.cliente.longitud = this.longitud;
        });
    }
    //refrescamos la localizacion 
    doRefresh(event) {
        setTimeout(() => {
            this.obtenerGeolocalizacion();
            event.target.complete();
        }, 1500);
    }
    //mostramos la ubicacion actual del tecnico
    miUbicacion() {
        this.geolocation.getCurrentPosition().then(position => {
            this.latitudMiubicacion = position.coords.latitude;
            this.longitudMiubicacion = position.coords.longitude;
            console.log('miubicacion:', this.latitudMiubicacion);
            console.log('miubicacion:', this.longitudMiubicacion);
        }, error => {
            console.log('error', error);
        });
    }
    navegarMapas() {
        let options = {
            app: this.launchNavigator.APP.GOOGLE_MAPS,
            start: [this.latitudMiubicacion, this.longitudMiubicacion]
        };
        this.launchNavigator.navigate('Cuenca, EC', options)
            //this.launchNavigator.navigate([this.latitudmaps, this.longitudmaps],options)
            .then(success => {
            console.log(success);
        }, error => {
            console.log(error);
        });
        //console.log('mapas', this.latitudmaps);
        //console.log('mapas', this.longitudmaps);
    }
    //metodo validador de la cedula
    validadorDeCedula(cedula) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let cedulaCorrecta = false;
            let mensaje = '';
            if (cedula.length == 10) {
                let tercerDigito = parseInt(cedula.substring(2, 3));
                if (tercerDigito < 6) {
                    // El ultimo digito se lo considera dígito verificador
                    let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
                    let verificador = parseInt(cedula.substring(9, 10));
                    let suma = 0;
                    let digito = 0;
                    for (let i = 0; i < (cedula.length - 1); i++) {
                        digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];
                        suma += ((parseInt((digito % 10) + '') + (parseInt((digito / 10) + ''))));
                        //      console.log(suma+" suma"+coefValCedula[i]); 
                    }
                    suma = Math.round(suma);
                    //  console.log(verificador);
                    //  console.log(suma);
                    //  console.log(digito);
                    if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10) == verificador)) {
                        cedulaCorrecta = true;
                    }
                    else if ((10 - (Math.round(suma % 10))) == verificador) {
                        cedulaCorrecta = true;
                    }
                    else {
                        mensaje = 'Cedula Incorrecta';
                        cedulaCorrecta = false;
                    }
                }
                else {
                    mensaje = 'Cedula Incorrecta';
                    cedulaCorrecta = false;
                }
            }
            else {
                mensaje = 'Cedula Incorrecta';
                cedulaCorrecta = false;
            }
            this.validador = cedulaCorrecta;
            console.log("validador " + this.validador);
            if (!this.validador) {
                const toast = yield this.toastController.create({
                    message: mensaje,
                    position: 'middle',
                    color: 'danger',
                    duration: 2000
                });
                toast.present();
            }
        });
    }
    // llamaría validateIp a una función que valide directamente la ip que se pasa
    validateIp(ip) {
        let patronIp = new RegExp("^([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})$");
        let valores;
        // regresaria return si la ip no tiene el formato correcto.
        if (ip.search(patronIp) !== 0) {
            return false;
        }
        valores = ip.split(".");
        return valores[0] <= 255 && valores[1] <= 255 && valores[2] <= 255 && valores[3] <= 255 && valores[3] != 0 && valores[3] != 1 && valores[3] != 255;
    }
    //validamos la ip
    validateForm(idForm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let object = document.getElementById(idForm);
            let mensaje = '';
            console.log("idform " + idForm);
            //let valueForm = (<HTMLInputElement>object).value; // generamos un array de valores separado por el salto de linea
            let isValid = (this.validateIp(idForm)); // validamos que todos los elementos cumplan con la condición dada en validateIp
            this.valido = isValid;
            console.log("isvalid " + isValid);
            if (isValid) {
                //object.style.color = "#000"; 
                console.log("valido " + isValid);
                //return; 
            }
            else {
                console.log("no es valido " + isValid);
                mensaje = 'IP no valida';
                const toast = yield this.toastController.create({
                    message: mensaje,
                    position: 'middle',
                    color: 'danger',
                    duration: 2000
                });
                toast.present();
            }
        });
    }
    //metodo para validar la cedula
    esEmailValido(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let mailValido = false;
            'use strict';
            let mensaje = '';
            var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (email.match(EMAIL_REGEX)) {
                mailValido = true;
                this.email = mailValido;
                console.log("email " + email.match(EMAIL_REGEX));
            }
            else {
                mensaje = 'Email no valido';
                const toast = yield this.toastController.create({
                    message: mensaje,
                    position: 'middle',
                    color: 'danger',
                    duration: 2000
                });
                toast.present();
                this.email = false;
            }
            return mailValido;
        });
    }
};
NuevainsPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_4__["LaunchNavigator"] },
    { type: src_app_servicios_radio_service__WEBPACK_IMPORTED_MODULE_8__["RadioService"] },
    { type: src_app_servicios_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ToastController"] }
];
NuevainsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nuevains',
        template: _raw_loader_nuevains_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nuevains_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NuevainsPage);



/***/ }),

/***/ "MIyc":
/*!*****************************************************!*\
  !*** ./src/app/paginas/nuevains/nuevains.module.ts ***!
  \*****************************************************/
/*! exports provided: NuevainsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevainsPageModule", function() { return NuevainsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nuevains_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nuevains-routing.module */ "+BKV");
/* harmony import */ var _nuevains_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuevains.page */ "D9s1");







let NuevainsPageModule = class NuevainsPageModule {
};
NuevainsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _nuevains_routing_module__WEBPACK_IMPORTED_MODULE_5__["NuevainsPageRoutingModule"]
        ],
        declarations: [_nuevains_page__WEBPACK_IMPORTED_MODULE_6__["NuevainsPage"]]
    })
], NuevainsPageModule);



/***/ }),

/***/ "dDV0":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/nuevains/nuevains.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Nueva Instalación</ion-title>\n  </ion-toolbar>\n  \n </ion-header>\n <ion-content class=\"ion-padding\"> \n  <!-- <div> -->\n  <form novalidate  (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n    <ion-list >\n    <ion-item > \n    <ion-label class=\"label\" position=\"stacked\" >Cédula:</ion-label>\n       <ion-input   name=\"cedula\" [(ngModel)]=\"cliente.cedula\" (change)=\"validador=true\" (change)=\"validadorDeCedula(cliente.cedula)\" type=\"text\" placeholder=\"0101010101\" maxlength=\"10\" autocomplete=\"off\" autocorrect=\"off\" formControlName=\"cedula\">\n      </ion-input>\n    \n  </ion-item> \n\n      <ion-item > \n      <ion-label position=\"stacked\">Nombres Completos:</ion-label>\n      <ion-input id=\"name\" [(ngModel)]=\"cliente.nombre\" type=\"text\" placeholder=\"Nombres Completos\" autocomplete=\"off\" autocorrect=\"off\" formControlName=\"nombres\"></ion-input>\n    </ion-item> \n\n    <ion-item > \n      <ion-label position=\"stacked\">Apellidos Completos:</ion-label>\n      <ion-input id=\"name\" [(ngModel)]=\"cliente.apellido\" type=\"text\" placeholder=\"Apellidos Completos\" autocomplete=\"off\" autocorrect=\"off\" formControlName=\"apellidos\"></ion-input>\n    </ion-item> \n\n\n    <ion-item> \n      <ion-label position=\"stacked\">Correo Electrónico:</ion-label>\n      <ion-input  (change)=\"email=true\" (change)=\"esEmailValido(cliente.email)\" [(ngModel)]=\"cliente.email\" type=\"text\" placeholder=\"Correo electrónico\" autocomplete=\"off\" autocorrect=\"off\" formControlName=\"email\"></ion-input>\n    </ion-item>\n\n    <!-- <ion-item> \n      <ion-label position=\"stacked\">Teléfonos:</ion-label>\n      <ion-input [(ngModel)]=\"cliente.convencional\" type=\"number\" placeholder=\"Convencional\" maxlength=\"7\" autocomplete=\"off\" autocorrect=\"off\"  formControlName=\"convencional\"></ion-input>\n     </ion-item>\n     \n     <ion-item> \n      <ion-input [(ngModel)]=\"cliente.celular\" type=\"number\" placeholder=\"Celular\" maxlength=\"10\" autocomplete=\"off\" autocorrect=\"off\" formControlName=\"celular\"></ion-input>\n     </ion-item> -->\n     \n     <ion-item> \n      <ion-label position=\"stacked\">Dirección:</ion-label>\n      <ion-input [(ngModel)]=\"cliente.direccionPrincipal\" type=\"text\" placeholder=\"Calle principal\" autocomplete=\"off\" autocorrect=\"off\" formControlName=\"principal\"></ion-input>\n     </ion-item>\n\n    <ion-item> \n      <ion-input [(ngModel)]=\"cliente.direccionSecundaria\" type=\"text\" placeholder=\"Calle secundaria\" autocomplete=\"off\" autocorrect=\"off\" formControlName=\"secundaria\"></ion-input>\n    </ion-item>\n    <ion-item> \n      <ion-input [(ngModel)]=\"cliente.direccionReferencia\" type=\"text\" placeholder=\"Referencia\" autocomplete=\"off\" autocorrect=\"off\" formControlName=\"referencia\"></ion-input>\n     </ion-item>\n\n     <ion-item> \n      <ion-label position=\"stacked\">Número Contrato:</ion-label>\n      <ion-input [(ngModel)]=\"servicio.numeroContrato\" type=\"text\" placeholder=\"Número contrato\" autocomplete=\"off\" autocorrect=\"off\" formControlName=\"contrato\"></ion-input>\n     </ion-item> \n\n     <ion-item> \n      <ion-label position=\"stacked\">Tipo Servicio:</ion-label>\n      <ion-input [(ngModel)]=\"servicio.tipoServicio\" type=\"text\" placeholder=\"Tipo Servicio\" autocomplete=\"off\" autocorrect=\"off\" formControlName=\"contrato\"></ion-input>\n     </ion-item> \n\n     <ion-item> \n      <ion-label position=\"stacked\">Router Vendido:</ion-label>\n      <ion-input [(ngModel)]=\"servicio.routerVendido\" type=\"text\" placeholder=\"Router Vendido\" autocomplete=\"off\" autocorrect=\"off\" formControlName=\"contrato\"></ion-input>\n     </ion-item> \n\n    <!-- <ion-item> \n      <ion-label position=\"stacked\">Plan Adquirido:</ion-label>\n        <ion-select (ionChange)=\"detect1($event)\" ok-text=\"Seleccionar\" cancel-text=\"Cancelar\" multiple=\"false\" formControlName=\"plan\">\n          <ion-select-option value=\"Basico\">Básico</ion-select-option>\n          <ion-select-option value=\"Intermedio\">Intermedio</ion-select-option>\n          <ion-select-option value=\"Alto\">Alto</ion-select-option>\n        </ion-select>\n    </ion-item> -->\n\n    <!-- <ion-item  > \n      <ion-label position=\"stacked\">IP:</ion-label>\n      <ion-input  (change)=\"validateForm(servicio.ip)\" name=\"\" id=\"ips\"   [(ngModel)]=\"servicio.ip\" type=\"text\" placeholder=\"XXX.XXX.XXX.XXX\" maxlength=\"15\" autocomplete=\"off\" autocorrect=\"off\" formControlName=\"ip\"></ion-input>\n    </ion-item> \n\n    <ion-item> \n      <ion-label>Antenas</ion-label>\n      <ion-select (ionChange)=\"detect($event)\" ok-text=\"Seleccionar\" cancel-text=\"Cancelar\" multiple=\"false\" formControlName=\"antena\">\n          <ion-select-option *ngFor=\"let ant of antenas\" value=\"{{ant.id}}\">{{ant.modelo}}</ion-select-option>\n      </ion-select> \n  </ion-item>          \n  <ion-item> \n      <ion-label position=\"stacked\">Contraseña:</ion-label>\n      <ion-input   [(ngModel)]=\"servicio.password\" type=\"text\" maxlength=\"15\" autocomplete=\"off\" autocorrect=\"off\" formControlName=\"password\"></ion-input>\n     </ion-item>     -->\n     \n     <ion-item>    \n      <ion-label>Coordenadas:\n        <ion-buttons>\n          <ion-button>\n            {{cliente.latitud}} {{cliente.longitud}}\n          </ion-button>\n        </ion-buttons>\n      </ion-label>\n    </ion-item> \n    <ion-tab-button (click)=\"obtenerGeolocalizacion()\">\n      <ion-icon name=\"locate-outline\"></ion-icon>\n      <ion-label>Coordenadas</ion-label>\n    </ion-tab-button>\n\n    <ion-item> \n      <ion-label position=\"stacked\">Observaciones:</ion-label>\n      <ion-input   [(ngModel)]=\"servicio.observaciones\" type=\"text\" maxlength=\"15\" autocomplete=\"off\" autocorrect=\"off\" formControlName=\"observacion\"></ion-input>\n     </ion-item>   \n\n\n   </ion-list> \n  \n        <div class=\"ion-padding ion-text-center\">\n      <!-- <ion-button  [disabled]=\"!valido || !email ||  -->\n        <ion-button  [disabled]=\" !email ||\n      form.get('nombres').hasError('pattern') ||\n      form.get('cedula').hasError('required') || \n      form.get('principal').hasError('required') || \n      form.get('referencia').hasError('required')\"  expand=\"block\" (click)=\"crear()\">\n        Guardar\n      </ion-button>\n    </div>\n\n  </form>\n<!-- </div> -->\n </ion-content> \n\n\n\n");

/***/ }),

/***/ "jC1c":
/*!*********************************!*\
  !*** ./src/app/tab2/cliente.ts ***!
  \*********************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
class Cliente {
}


/***/ })

}]);
//# sourceMappingURL=paginas-nuevains-nuevains-module-es2015.js.map