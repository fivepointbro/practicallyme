webpackJsonp([1],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userpage__ = __webpack_require__(740);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__userpage__["a" /* UserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__userpage__["a" /* UserPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__userpage__["a" /* UserPage */]
            ]
        })
    ], UserPageModule);
    return UserPageModule;
}());

//# sourceMappingURL=userpage.module.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wp_wp__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, wpProvider, loadingCtrl, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.wpProvider = wpProvider;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.id = localStorage.getItem('username');
        this.presentLoading();
        this.pics = this.wpProvider.getMyPics(this.id);
        this.pics.subscribe(function (data) {
            return _this.loader.dismiss();
        });
    }
    UserPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        this.loader.present();
    };
    UserPage.prototype.regularShare = function (url) {
        var file = 'https://practicallyphotography.com/opsec/' + this.id + '/' + url;
        this.socialSharing.share(null, null, file, null).then(function () {
            console.log("regularShare: Success");
        }).catch(function () {
            console.error("regularShare: failed");
        });
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"D:\App Development\Practically_Me\src\pages\userpage\userpage.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Photos</ion-title>    \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let pic of pics | async">\n    <ion-card-content>\n      <ion-card-title>\n      {{ pic.url }}\n      </ion-card-title>\n      <img src=\'https://practicallyphotography.com/opsec/{{ id }}/{{ pic.url }}\'>\n      </ion-card-content>\n      <button ion-button icon-only (click)="regularShare(pic.url)" color="#000000" clear>\n        <ion-icon class="share-icon" name="share" color="#000000"></ion-icon>\n      </button>\n      </ion-card>\n</ion-content>'/*ion-inline-end:"D:\App Development\Practically_Me\src\pages\userpage\userpage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_wp_wp__["a" /* WpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=userpage.js.map

/***/ })

});
//# sourceMappingURL=1.js.map