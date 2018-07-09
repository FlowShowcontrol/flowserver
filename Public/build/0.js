webpackJsonp([0],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__["a" /* MenuModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

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

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/wouter/flowservergui/src/pages/home/home.html"*/'<ion-header no-border>\n    <menucontrol></menucontrol>\n  \n  </ion-header>\n<ion-content text-center>\n <div style="height:50vh;margin-top:10vh">\n\n  <img src="/assets/imgs/listen.svg" style="width:10vh;margin:1vh;fill:#fff;" />\n\n\n\n  <h1>LISTEN</h1>\n\n  <h4 style="margin-top:4vh;">Digital Patching &amp; Listening</h4>\n\n\n  <h4>Crossplatform software for </h4>\n  <h4>radio technicians</h4>\n\n  <img src="/assets/imgs/apple.svg" style="width:4vh;margin:1vh;fill:#fff;" />\n  <img src="/assets/imgs/windows.svg" style="width:4vh;margin:1vh;fill:#fff;" />\n</div>\n\n\n<div style="background-color:#232323;min-height:30vh; padding:40px;border-top:1px solid #313131">\n\n  <h6><b>FEATURES</b></h6>\n\n  <div style="margin-top:2vh;display:flex;flex-wrap: wrap;justify-content: center;">\n      <div style="margin:20px;">\n          <h3>Multiple Interfaces</h3>\n          <p>Connect up to 3 MOTU AVB Interfaces and listen to all your channels</p>\n      </div>\n      <div style="margin:20px;">\n          <h3>Snapshots</h3>\n          <p>Create snapshots and see who\'s on and who will be on next</p>\n      </div>\n      <div style="margin:20px;">\n          <h3>Groups</h3>\n          <p>Listen with multiple techs in 2 assignable groups</p>\n      </div>\n      <div style="margin:20px;">\n          <h3>Digital Patch</h3>\n          <p>Patch one connection type to another one at a 1ms latency</p>\n      </div>\n      <div style="margin:20px;">\n          <h3>Chat</h3>\n          <p>Notify your FOH operator easily with the integrated chatbox</p>\n      </div>\n  </div>\n\n  <img src="/assets/imgs/V1.png" style="margin-bottom:-10vh;min-width:40vh;max-width:40vh" />\n</div>\n<div>\n  <div style="min-height:10vh">\n      <div style="background-color:#265a88;padding:50px;">\n          <h2 style="margin-top:50px;">Listen</h2>\n          <p class="lead">Listen and Patch using a MOTU AVB digital IO</p>\n          <h2><b>&euro; 399,-</b></h2>\n         <a href="https://gum.co/listenfs" target="_blank"> <button ion-button large round><b>Buy</b>\n          </button></a>\n\n          <span style="font-weight: bold;margin-top:20px;display: block">MADE BY FLOW SHOWCONTROL</span>\n          <span style="font-weight: bold;margin-top:20px;display: block">CONTACT US AT SUPPORT@FLOW.THEATER</span>\n\n      </div>\n  </div>\n</div>\n</ion-content>'/*ion-inline-end:"/Users/wouter/flowservergui/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map