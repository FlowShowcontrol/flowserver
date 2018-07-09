webpackJsonp([1],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FaqPageModule = /** @class */ (function () {
    function FaqPageModule() {
    }
    FaqPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_menu_menu_module__["a" /* MenuModule */]
            ],
        })
    ], FaqPageModule);
    return FaqPageModule;
}());

//# sourceMappingURL=faq.module.js.map

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

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
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
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqPage = /** @class */ (function () {
    function FaqPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"/Users/wouter/flowservergui/src/pages/faq/faq.html"*/'<ion-header no-border>\n  <menucontrol></menucontrol>\n\n</ion-header>\n<ion-content text-center>\n  <div style="display:flex">\n\n<span class="fill-remaining-space">\n\n</span>\n    <div style="background-color:#232323;padding:40px;margin-top:80px;max-width:50vh;line-height: 2;">\n      <h1>Frequently Asked Questions</h1>\n\n      <h2>General</h2>\n\n      <h4>\n        What does a Listen setup look like\n      </h4>\n\n      <p>Listen controls up to 3 Motu AVB interfaces. There are two options.\n        <br />\n        <br /> Option 1: Connect the interfaces between the microphone input section and the console.\n        <br />\n        <br /> Option 2: Connect the interface as an insert to the console and patch all microphones through the Listen system.\n        This allows for easy bypassing if needed.</p>\n\n      <h4>\n        What are the system requirements for Listen\n      </h4>\n\n      <p>Listen runs on Windows and MacOS and does not function without at least one and up to 3 attached Motu AVB Audio Interfaces. For optimal\n        performance we recommend a pc or tablet with at least 2 gb of RAM, a modern processor and a touchscreen</p>\n      <h4>\n        What audio connections does Listen support?\n      </h4>\n\n      <p>Listen works in conjunction with Motu AVB audio interfaces. Depending on the model, you can choose setups that consist\n        of XLR, jack, ADAT, AES, USB, AVB or Madi inputs and outputs.</p>\n\n      <h2>Audio</h2>\n\n      <h4>\n        How does the audio routing work?\n      </h4>\n\n      <p>Listen works in conjunction with Motu AVB audio interfaces. Therefore all audio runs through the interfaces. To make\n        sure you can listen to your radio mics, we recommend sending the Listen output to an in-ear beltpack. You can easily\n        patch your inputs and outputs in the settings menu.</p>\n\n      <h4>\n        Does Listen output its audio through the PC\'s sound card?\n      </h4>\n\n      <p>No. All audio processing is done through the Motu AVB interfaces. Even though audio rendering through the PC would be\n        possible, it is very much affected by latency. To create a stable and low-latency signal, Listen would have to compress\n        the audio which would have negative audible effects.</p>\n\n      <h4>\n        How can I create a redundant system if I run all my microphones through the Motu AVB interface?\n      </h4>\n\n      <p>Listen has been thoroughly tested for stability and audio quality. If you require a redundant system, we recommend\n        running a seperate analog circuit or setting up Listen as an insert on your console.</p>\n\n      <h4>\n        Does Listen work over WIFI?\n      </h4>\n\n      <p>Yes. If you hook up your Motu AVB interface to a wireless router and connect your PC to this router, Listen works great.</p>\n\n      <h4>\n        Can I have more than three members in a session?\n      </h4>\n\n      <p>Currently not. To keep the system simple, the current design is three session members. Originally the system was designed\n        to be used by a FOH engineer and a radio technician who can also walk around the venue carrying a tablet. </p>\n\n      <h4>\n        How does autosync work?\n      </h4>\n\n      <p>Every Listen PC in your session keeps a stepcount of all the actions done on that PC. When PC\'s leave and come back\n        to the session, these step counts are compared and the system considers the highest step count to be the most recent\n        version of your show. These settings are then synced across the entire session. It is recommended to perform a \'Save\n        As\' if you are going to make big changes to your session and you want to keep a backup. </p>\n\n      <h2>Purchasing Listen</h2>\n\n\n      <h4>\n        Can use Listen without an internet connection?\n      </h4>\n\n      <p>Yes.</p>\n    </div>\n<span class="fill-remaining-space">\n  \n</span>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/wouter/flowservergui/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ })

});
//# sourceMappingURL=1.js.map