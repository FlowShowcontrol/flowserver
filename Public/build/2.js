webpackJsonp([2],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadPageModule", function() { return DownloadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__download__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DownloadPageModule = /** @class */ (function () {
    function DownloadPageModule() {
    }
    DownloadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__download__["a" /* DownloadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__download__["a" /* DownloadPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__["a" /* MenuModule */]
            ],
        })
    ], DownloadPageModule);
    return DownloadPageModule;
}());

//# sourceMappingURL=download.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__menu_component__["a" /* MenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__menu_component__["a" /* MenuComponent */]
            ]
        })
    ], MenuModule);
    return MenuModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MenuComponent.prototype.clickHome = function () {
        this.navCtrl.setRoot("HomePage");
    };
    MenuComponent.prototype.clickDownload = function () {
        this.navCtrl.setRoot("DownloadPage");
    };
    MenuComponent.prototype.clickFaq = function () {
        this.navCtrl.setRoot("FaqPage");
    };
    MenuComponent.prototype.clickBuy = function () {
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'menucontrol',template:/*ion-inline-start:"/Users/wouter/flowservergui/src/components/menu/menu.component.html"*/'\n  <ion-navbar>\n        <button ion-button clear (click)="clickHome()">\n\n          <img src="./assets/imgs/listen.svg" style="width:30px;">\n          </button>\n        <button ion-button clear (click)="clickDownload()">DOWNLOAD</button>\n\n    \n        <button ion-button clear (click)="clickFaq()">F.A.Q.</button>    \n\n        <button ion-button round (click)="clickBuy()" style="margin-left:20px;">BUY</button>\n    </ion-navbar>'/*ion-inline-end:"/Users/wouter/flowservergui/src/components/menu/menu.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DownloadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DownloadPage = /** @class */ (function () {
    function DownloadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DownloadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DownloadPage');
    };
    DownloadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-download',template:/*ion-inline-start:"/Users/wouter/flowservergui/src/pages/download/download.html"*/'<ion-header no-border>\n  <menucontrol></menucontrol>\n\n</ion-header>\n<ion-content text-center>\n\n  <div style="min-height:30vh;border-color:#313131;display: flex;margin-top:50px;">\n\n    <span class="fill-remaining-space"></span>\n    <div style=" padding:40px;width:50vh">\n      <h1>Download</h1>\n\n      <div style="margin-top:50px">\n        <div style="margin-top:50px;display: flex">\n          <span class="fill-remaining-space"></span>\n          <div>\n            <img src="/assets/imgs/apple.svg" style="width:8vh;margin:1vh;fill:#fff;" />\n            <br />\n            <h5>{{version}}</h5>\n            <button ion-button style="margin-top:50px">Download</button>\n            <br />\n          </div>\n          <span class="fill-remaining-space"></span>\n\n          <div>\n            <img src="/assets/imgs/windows.svg" style="width:8vh;margin:1vh;fill:#fff;" />\n            <br />\n            <h5>{{version}}</h5>\n            <button ion-button style="margin-top:50px">Download</button>\n            <br />\n\n          </div>\n          <span class="fill-remaining-space"></span>\n\n        </div>\n      </div>\n    </div>\n    <span class="fill-remaining-space"></span>\n\n\n  </div>\n  <span style="font-weight: bold;margin-top:20px;display: block">MADE BY FLOW SHOWCONTROL</span>\n  <span style="font-weight: bold;margin-top:20px;display: block">CONTACT US AT SUPPORT@FLOW.THEATER</span>\n\n</ion-content>'/*ion-inline-end:"/Users/wouter/flowservergui/src/pages/download/download.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DownloadPage);
    return DownloadPage;
}());

//# sourceMappingURL=download.js.map

/***/ })

});
//# sourceMappingURL=2.js.map