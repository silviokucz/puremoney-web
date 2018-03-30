webpackJsonp(["main"],{

/***/ "./node_modules/har-validator/node_modules/ajv/lib recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/har-validator/node_modules/ajv/lib recursive";

/***/ }),

/***/ "./node_modules/har-validator/node_modules/ajv/lib/compile recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/har-validator/node_modules/ajv/lib/compile recursive";

/***/ }),

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/Pages/about-page/about-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Pages/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/Pages/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    return AboutPageComponent;
}());
AboutPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about-page',
        template: __webpack_require__("./src/app/Pages/about-page/about-page.component.html"),
        styles: [__webpack_require__("./src/app/Pages/about-page/about-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutPageComponent);

//# sourceMappingURL=about-page.component.js.map

/***/ }),

/***/ "./src/app/Pages/buy-pmtpage/buy-pmtpage.component.css":
/***/ (function(module, exports) {

module.exports = ".buyPmt{\r\n    width: 60%;\r\n    margin-left: 20%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Pages/buy-pmtpage/buy-pmtpage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n</p>\n<!-- <div class=\"col-md-6 col-md-offset-3\"> -->\n<div class=\"buyPmt\">\n  <h2>Buy Tokens</h2>\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && buy()\" #f=\"ngForm\" novalidate>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !howMany.valid }\">\n      <label for=\"howMany\">Enter Quantity</label>\n      <input class=\"form-control\" type=\"number\" name=\"howMany\" [(ngModel)]=\"model.howMany\"\n             placeholder=\"Enter Quantity\" #howMany=\"ngModel\" id=\"howMany\" required min=\"0.01\">\n      <div *ngIf=\"f.submitted && !howMany.valid\" class=\"help-block\">Quantity is required</div>\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Buy</button>\n      <img *ngIf=\"loading\"\n           src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/Pages/buy-pmtpage/buy-pmtpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyPmtpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyPmtpageComponent = (function () {
    function BuyPmtpageComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.model = { howMany: 0, howMuch: 10, territoryContract: '' };
        this.loading = false;
    }
    BuyPmtpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.userService.user.EvangelistId || _this.userService.user.EvangelistId === 0) {
                _this.router.navigate(['/register-evangelist']);
                return false;
            }
        }, 1000);
    };
    BuyPmtpageComponent.prototype.buy = function () {
        var _this = this;
        if (this.model.howMany <= 0) {
            alert('Quntity cannot be zero');
            return;
        }
        this.model.territoryContract = this.userService.localToken.contractAddress;
        this.userService.buyLocalTokens(this.model.territoryContract, this.model.howMany, this.model.howMuch)
            .then(function (res) {
            console.log(res);
            _this.router.navigate((['/evangelist-home-page']));
            return false;
        })
            .catch(function (error) {
            alert(JSON.stringify(error));
        });
    };
    return BuyPmtpageComponent;
}());
BuyPmtpageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-buy-pmtpage',
        template: __webpack_require__("./src/app/Pages/buy-pmtpage/buy-pmtpage.component.html"),
        styles: [__webpack_require__("./src/app/Pages/buy-pmtpage/buy-pmtpage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], BuyPmtpageComponent);

var _a, _b;
//# sourceMappingURL=buy-pmtpage.component.js.map

/***/ }),

/***/ "./src/app/Pages/change-password/change-password.component.css":
/***/ (function(module, exports) {

module.exports = ".changePassword{\r\n  width: 60%;\r\n  margin-left: 20%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Pages/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n</p>\n<!-- <div class=\"col-md-6 col-md-offset-3\"> -->\n<div class=\"changePassword\">\n  <h2>Change Password</h2>\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && changePassword()\" #f=\"ngForm\" novalidate>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n      <label for=\"oldPassword\">Password</label>\n      <input type=\"password\" class=\"form-control \" name=\"oldPassword\" [(ngModel)]=\"model.OldPassword \"\n             placeholder=\"Old Password\" #oldPassword=\"ngModel\" id=\"oldPassword\"  required/>\n      <div *ngIf=\"f.submitted && !oldPassword.valid\" class=\"help-block\">Old Password is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control \" name=\"password\" [(ngModel)]=\"model.NewPassword \"\n             placeholder=\"New Password\" #password=\"ngModel\" id=\"password\"  required/>\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !confirmPassword.valid }\">\n      <label for=\"confirmPassword\">Confirm Password</label>\n      <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [(ngModel)]=\"model.confirmPassword\"\n             placeholder=\"Confirm Password\" #confirmPassword=\"ngModel\" id=\"confirmPassword\"  required/>\n      <div *ngIf=\"f.submitted && !confirmPassword.valid\" class=\"help-block\">Confirm Password is required</div>\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Submit</button>\n      <img *ngIf=\"loading\"\n           src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n      <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/Pages/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.model = { OldPassword: '', NewPassword: '', ConfirmPassword: '' };
        this.loading = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.changePassword = function () {
        var _this = this;
        this.loading = true;
        this.userService.changePassword(this.model)
            .then(function (data) {
            _this.router.navigate(['/login']);
            return false;
        }, function (error) {
            alert(error._body);
            _this.loading = false;
        });
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-change-password',
        template: __webpack_require__("./src/app/Pages/change-password/change-password.component.html"),
        styles: [__webpack_require__("./src/app/Pages/change-password/change-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], ChangePasswordComponent);

var _a, _b;
//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ "./src/app/Pages/contact-page/contact-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Pages/contact-page/contact-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/Pages/contact-page/contact-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactPageComponent = (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    return ContactPageComponent;
}());
ContactPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact-page',
        template: __webpack_require__("./src/app/Pages/contact-page/contact-page.component.html"),
        styles: [__webpack_require__("./src/app/Pages/contact-page/contact-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactPageComponent);

//# sourceMappingURL=contact-page.component.js.map

/***/ }),

/***/ "./src/app/Pages/evangelist-home-page/evangelist-home-page.component.css":
/***/ (function(module, exports) {

module.exports = ".Evangelist{\r\n  width: 60%;\r\n  margin-left: 20%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Pages/evangelist-home-page/evangelist-home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n</p>\n<!-- <div class=\"col-md-6 col-md-offset-3\"> -->\n<div class=\"Evangelist\">\n  <h2>Evangelist</h2>\n\n  Evangelist\n<pre>{{getEvangelist() | json}}</pre>\n<hr>\nLocal Token\n<pre>{{getLocalToken() | json}}</pre>\n<hr>\nToken Balance\n<pre>{{tokenBalance | json}}</pre>\n</div>\n"

/***/ }),

/***/ "./src/app/Pages/evangelist-home-page/evangelist-home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvangelistHomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EvangelistHomePageComponent = (function () {
    function EvangelistHomePageComponent(userService) {
        this.userService = userService;
        this.tokenBalance = {};
    }
    EvangelistHomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getTokenBalance();
        }, 5000);
    };
    EvangelistHomePageComponent.prototype.getEvangelist = function () {
        return this.userService.evangelist;
    };
    EvangelistHomePageComponent.prototype.getLocalToken = function () {
        return this.userService.localToken;
    };
    EvangelistHomePageComponent.prototype.getTokenBalance = function () {
        var _this = this;
        this.userService.getTokenBalance(this.userService.localToken.contractAddress, this.userService.evangelist.ethAddress)
            .then(function (res) {
            _this.tokenBalance = JSON.parse(res._body);
        })
            .catch(function (error) {
            alert(error);
        });
    };
    return EvangelistHomePageComponent;
}());
EvangelistHomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-evangelist-home-page',
        template: __webpack_require__("./src/app/Pages/evangelist-home-page/evangelist-home-page.component.html"),
        styles: [__webpack_require__("./src/app/Pages/evangelist-home-page/evangelist-home-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], EvangelistHomePageComponent);

var _a;
//# sourceMappingURL=evangelist-home-page.component.js.map

/***/ }),

/***/ "./src/app/Pages/forgot-password/forgot-password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Pages/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  forgot-password works!\n</p>\n"

/***/ }),

/***/ "./src/app/Pages/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-forgot-password',
        template: __webpack_require__("./src/app/Pages/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__("./src/app/Pages/forgot-password/forgot-password.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ForgotPasswordComponent);

//# sourceMappingURL=forgot-password.component.js.map

/***/ }),

/***/ "./src/app/Pages/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = ".textOver {\r\n  margin-top: -150px;\r\n  opacity: 1;\r\n  text-align: center;\r\n  color: white;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  line-height: 1.1em;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  letter-spacing: 3px;\r\n  margin-bottom: .5em;\r\n}\r\n\r\n.parag {\r\n  word-wrap: break-word;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  line-height: 1.8em;\r\n  font-size: 14px;\r\n  text-transform: none;\r\n  text-decoration: none;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n\r\n  width: auto !important;\r\n  display: table;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n  <img src=\"../../../assets/images/homePagePicture.jpg\" style=\"vertical-align: middle; width:60%;\">\n</div>\n<div class=\"textOver\">\n  <h1 class=\"page-title\">Ethereum Evangelist Network</h1>\n  <div class=\"page-description\"></div>\n</div>\n<div style=\"text-align: center; margin-top: 150px;\">\n  <h2>Ethereum Evangelism?</h2>\n  <p class=\"parag\">\n    In a nutshell, you sell the idea of accepting ethers to your local groceries, shops, vendors, and others. You\n    demonstrate the easiest-to-use Point of Sale (POS) app to prospects, install the POS app to the vendor's smartphone,\n    sit back, relax, and enjoy the incoming transaction fees (in ethers, no less) ...\n  </p>\n\n  <p class=\"parag\">\n    Universal Pure Money Tokens (PMT) allows you to participate in Ethereum evangelism without using much capital.How\n    else can you start a business with just US$300? That's all you need to get into this opportunity, although a larger\n    investment can improve your chances of success.(Stay tuned. We are still working out the details. If you want\n    updates in your inbox and you haven't signed up yet, simply click the refresh button to get the signup screen.)\n  </p>\n\n  <h2>Take Action</h2>\n  <p class=\"parag\">\n    Join us now! Your evangelism starts by purchasing universal evangelist tokens. These universal tokens are usable\n    anywhere, and grant you the right to be an Ethereum Evangelist in your area. You can purchase them on our website\n    right now.\n  </p>\n</div>\n<br>\n\n"

/***/ }),

/***/ "./src/app/Pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = (function () {
    function HomePageComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        if (this.userService.evangelist) {
            this.router.navigate(['/evangelist-home-page']);
            return false;
        }
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("./src/app/Pages/home-page/home-page.component.html"),
        styles: [__webpack_require__("./src/app/Pages/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], HomePageComponent);

var _a, _b;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "./src/app/Pages/how-it-works-page/how-it-works-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Pages/how-it-works-page/how-it-works-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  how-it-works-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/Pages/how-it-works-page/how-it-works-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowItWorksPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowItWorksPageComponent = (function () {
    function HowItWorksPageComponent() {
    }
    HowItWorksPageComponent.prototype.ngOnInit = function () {
    };
    return HowItWorksPageComponent;
}());
HowItWorksPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-how-it-works-page',
        template: __webpack_require__("./src/app/Pages/how-it-works-page/how-it-works-page.component.html"),
        styles: [__webpack_require__("./src/app/Pages/how-it-works-page/how-it-works-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HowItWorksPageComponent);

//# sourceMappingURL=how-it-works-page.component.js.map

/***/ }),

/***/ "./src/app/Pages/login-page/login-page.component.css":
/***/ (function(module, exports) {

module.exports = ".loginForm {\r\n  width: 60%;\r\n  margin-left: 20%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Pages/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p></p>\n<!-- <div class=\"col-md-6 col-md-offset-3 loginForm\"> -->\n<div class=\"loginForm\">\n  <h2>Login</h2>\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"modelLogin.username\" #username=\"ngModel\"\n             required/>\n      <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"modelLogin.password\" #password=\"ngModel\"\n             required/>\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n      <img *ngIf=\"loading\"\n           src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n      <a [routerLink]=\"['/register-user']\" class=\"btn btn-link\">Register</a>\n      <a [routerLink]=\"['/forgot-password']\" class=\"btn btn-link\">Forgot Password</a>\n    </div>\n  </form>\n</div>\n<br>\n\n"

/***/ }),

/***/ "./src/app/Pages/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = (function () {
    function LoginPageComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.modelLogin = {};
        this.loading = false;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        // reset login status
        this.userService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginPageComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.userService.login(this.modelLogin.username, this.modelLogin.password)
            .then(function (data) {
            _this.userService.getUserInfo()
                .then(function (info) {
                if (_this.userService.user.EvangelistId !== 0) {
                    _this.userService.refresh();
                    _this.router.navigate(['/evangelist-home-page']);
                    return false;
                }
                else {
                    _this.router.navigate([_this.returnUrl]);
                    return false;
                }
            })
                .catch(function (error) {
                alert(JSON.stringify(error));
                _this.loading = false;
                _this.modelLogin = {};
            });
        }, function (error) {
            alert(JSON.stringify(error));
            _this.loading = false;
            _this.modelLogin = {};
        });
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-login-page',
        template: __webpack_require__("./src/app/Pages/login-page/login-page.component.html"),
        styles: [__webpack_require__("./src/app/Pages/login-page/login-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], LoginPageComponent);

var _a, _b, _c;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "./src/app/Pages/mission-page/mission-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Pages/mission-page/mission-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Mission Statement......\n</p>\n"

/***/ }),

/***/ "./src/app/Pages/mission-page/mission-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissionPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MissionPageComponent = (function () {
    function MissionPageComponent() {
    }
    MissionPageComponent.prototype.ngOnInit = function () {
    };
    return MissionPageComponent;
}());
MissionPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mission-page',
        template: __webpack_require__("./src/app/Pages/mission-page/mission-page.component.html"),
        styles: [__webpack_require__("./src/app/Pages/mission-page/mission-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MissionPageComponent);

//# sourceMappingURL=mission-page.component.js.map

/***/ }),

/***/ "./src/app/Pages/register-evangelist-page/register-evangelist-page.component.css":
/***/ (function(module, exports) {

module.exports = ".registerEvangelist {\r\n  width: 60%;\r\n  margin-left: 20%;\r\n}\r\n\r\n.label1{\r\n  font-weight: 700;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Pages/register-evangelist-page/register-evangelist-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n</p>\n<!-- <div class=\"col-md-6 col-md-offset-3\"> -->\n<div class=\"registerEvangelist\">\n  <h2>Register Evangelist</h2>\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\n      <label for=\"firstName\">First Name</label>\n      <input class=\"form-control\" type=\"text\" name=\"firstName\" [(ngModel)]=\"evangelist.firstName\"\n             placeholder=\"First Name\" #firstName=\"ngModel\" id=\"firstName\" required>\n      <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\n      <label for=\"lastName\">Last Name</label>\n      <input class=\"form-control\" type=\"text\" name=\"lastName\" [(ngModel)]=\"evangelist.lastName\"\n             placeholder=\"Last Name\" #lastName=\"ngModel\" id=\"lastName\" required>\n      <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !ethAddress.valid }\">\n      <label for=\"ethAddress\">Ethereum Address</label>\n      <input class=\"form-control\" type=\"text\" name=\"ethAddress\" [(ngModel)]=\"evangelist.ethAddress\"\n             placeholder=\"Ethereum Address\" #ethAddress=\"ngModel\" id=\"ethAddress\" required>\n      <div *ngIf=\"f.submitted && !ethAddress.valid\" class=\"help-block\">Ethereum Address is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !street1.valid }\">\n      <label for=\"street1\">Street Address 1</label>\n      <input class=\"form-control\" type=\"text\" name=\"street1\" [(ngModel)]=\"evangelist.geoAddress.street1\"\n             placeholder=\"Street Address 1\" #street1=\"ngModel\" id=\"street1\" required>\n      <div *ngIf=\"f.submitted && !street1.valid\" class=\"help-block\">Street Address 1 is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !street2.valid }\">\n      <label for=\"street2\">Street Address 2</label>\n      <input class=\"form-control\" type=\"text\" name=\"street2\" [(ngModel)]=\"evangelist.geoAddress.street2\"\n             placeholder=\"Street Address 2\" #street2=\"ngModel\" id=\"street2\">\n      <div *ngIf=\"f.submitted && !street2.valid\" class=\"help-block\">Street Address 2 is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !city.valid }\">\n      <label for=\"city\">City</label>\n      <input class=\"form-control\" type=\"text\" name=\"city\" [(ngModel)]=\"evangelist.geoAddress.city\"\n             placeholder=\"City\" #city=\"ngModel\" id=\"city\" required>\n      <div *ngIf=\"f.submitted && !city.valid\" class=\"help-block\">City is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !stateOrProvince.valid }\">\n      <label for=\"stateOrProvince\">State or Province</label>\n      <input class=\"form-control\" type=\"text\" name=\"stateOrProvince\" [(ngModel)]=\"evangelist.geoAddress.stateOrProvince\"\n             placeholder=\"State or Province\" #stateOrProvince=\"ngModel\" id=\"stateOrProvince\" required>\n      <div *ngIf=\"f.submitted && !stateOrProvince.valid\" class=\"help-block\">State or Province is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !zip.valid }\">\n      <label for=\"zip\">Zip</label>\n      <input class=\"form-control\" type=\"text\" name=\"zip\" [(ngModel)]=\"evangelist.geoAddress.zip\"\n             placeholder=\"Zip\" #zip=\"ngModel\" id=\"zip\" required>\n      <div *ngIf=\"f.submitted && !zip.valid\" class=\"help-block\">Zip is required</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !country.valid }\">\n      <label for=\"country\">Country</label>\n      <input class=\"form-control\" type=\"text\" name=\"country\" [(ngModel)]=\"evangelist.geoAddress.country\"\n             placeholder=\"Country\" #country=\"ngModel\" id=\"country\" required>\n      <div *ngIf=\"f.submitted && !country.valid\" class=\"help-block\">Country is required</div>\n    </div>\n\n    <!--<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !localToken.valid }\">-->\n      <!--<label for=\"localToken\">Local Token</label>-->\n      <!--<select id=\"localToken\" name=\"localToken\" class=\"form-control custom-select\"  [(ngModel)]=\"evangelist.contractAddress\"-->\n              <!--#localToken=\"ngModel\" required>-->\n        <!--<option value=\"\">Choose...</option>-->\n        <!--<option *ngFor=\"let localToken of localTokens\" value=\"{{localToken.contractAddress}}\">{{localToken.localityCode}}</option>-->\n      <!--</select>-->\n      <!--<div *ngIf=\"f.submitted && !localToken.valid\" class=\"help-block\">Must choose a local token</div>-->\n    <!--</div>-->\n\n\n    <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n      <img *ngIf=\"loading\"\n           src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/Pages/register-evangelist-page/register-evangelist-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterEvngelistPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_evangelist___ = __webpack_require__("./src/models/evangelist .ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_geoAddress__ = __webpack_require__("./src/models/geoAddress.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_geoAddressGeoCode__ = __webpack_require__("./src/models/geoAddressGeoCode.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterEvngelistPageComponent = (function () {
    function RegisterEvngelistPageComponent(route, router, userService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.localTokens = [];
        this.evangelist = new __WEBPACK_IMPORTED_MODULE_3__models_evangelist___["a" /* Evangelist */]();
        this.evangelist.geoAddress = new __WEBPACK_IMPORTED_MODULE_4__models_geoAddress__["a" /* GeoAddress */]();
        this.evangelist.geoAddress.geoCode = new __WEBPACK_IMPORTED_MODULE_5__models_geoAddressGeoCode__["a" /* GeoAddressGeoCode */]();
        this.userService.getLocalTokens()
            .then(function (res) {
            var list = JSON.parse(res._body);
            list.forEach(function (item) {
                _this.localTokens.push(item);
            });
        });
    }
    RegisterEvngelistPageComponent.prototype.ngOnInit = function () {
    };
    RegisterEvngelistPageComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        if (this.evangelist.geoAddress.street2 === undefined) {
            this.evangelist.geoAddress.street2 = '';
        }
        if (this.evangelist.geoAddress.country === undefined) {
            this.evangelist.geoAddress.country = '';
        }
        this.userService.createEvangelist(this.evangelist)
            .then(function (data) {
            _this.router.navigate(['/']);
            return false;
        }, function (error) {
            alert((error.statusText || error) + error);
            _this.loading = false;
        });
    };
    return RegisterEvngelistPageComponent;
}());
RegisterEvngelistPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register-page',
        template: __webpack_require__("./src/app/Pages/register-evangelist-page/register-evangelist-page.component.html"),
        styles: [__webpack_require__("./src/app/Pages/register-evangelist-page/register-evangelist-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], RegisterEvngelistPageComponent);

var _a, _b, _c;
//# sourceMappingURL=register-evangelist-page.component.js.map

/***/ }),

/***/ "./src/app/Pages/register-user-page/register-user-page.component.css":
/***/ (function(module, exports) {

module.exports = ".registerUser{\r\n    width: 60%;\r\n    margin-left: 20%;\r\n}"

/***/ }),

/***/ "./src/app/Pages/register-user-page/register-user-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n</p>\n<!-- <div class=\"col-md-6 col-md-offset-3\"> -->\n<div class=\"registerUser\">\n  <h2>Register User</h2>\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n    <label for=\"email\">Email</label>\n    <input type=\"text \" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.Email\"\n           placeholder=\"Email\" #email=\"ngModel\" id=\"email\"  required/>\n    <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control \" name=\"password\" [(ngModel)]=\"model.password \"\n           placeholder=\"Password\" #password=\"ngModel\" id=\"password\"  required/>\n    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !confirmPassword.valid }\">\n    <label for=\"confirmPassword\">Confirm Password</label>\n    <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [(ngModel)]=\"model.confirmPassword\"\n           placeholder=\"Confirm Password\" #confirmPassword=\"ngModel\" id=\"confirmPassword\"  required/>\n    <div *ngIf=\"f.submitted && !confirmPassword.valid\" class=\"help-block\">Confirm Password is required</div>\n  </div>\n  <div class=\"form-group\">\n    <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n    <img *ngIf=\"loading\"\n         src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n    <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n  </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/Pages/register-user-page/register-user-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterUserPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("./src/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterUserPageComponent = (function () {
    function RegisterUserPageComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
    }
    RegisterUserPageComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.createUser(this.model)
            .then(function (data) {
            _this.router.navigate(['/login']);
            return false;
        }, function (error) {
            alert(error._body);
            _this.loading = false;
        });
    };
    return RegisterUserPageComponent;
}());
RegisterUserPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register-user-page',
        template: __webpack_require__("./src/app/Pages/register-user-page/register-user-page.component.html"),
        styles: [__webpack_require__("./src/app/Pages/register-user-page/register-user-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], RegisterUserPageComponent);

var _a, _b;
//# sourceMappingURL=register-user-page.component.js.map

/***/ }),

/***/ "./src/app/UI/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/UI/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<hr>\n<a href=\"../assets/documents/2018.02.12 AGR Terms and Conditions.pdf\" target=\"_blank\">Terms and Conditions</a>\n&nbsp;&nbsp;&nbsp;\n<a href=\"../assets/documents/2018.02.12 Privacy Policy .pdf\" target=\"_blank\">Privacy Policy</a>\n<br>\n<h2>PARTNERS</h2>\n"

/***/ }),

/***/ "./src/app/UI/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("./src/app/UI/footer/footer.component.html"),
        styles: [__webpack_require__("./src/app/UI/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/UI/nav-bar/nav-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".topNav {\r\n\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.nav-item {\r\n  display: block;\r\n  float: left;\r\n\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  height: 24px;\r\n  letter-spacing: 1px;\r\n  line-height: 22.4px;\r\n  list-style-image: none;\r\n  list-style-position: outside;\r\n  list-style-type: none;\r\n  position: relative;\r\n  text-align: center;\r\n\r\n  text-transform: uppercase;\r\n  margin-left: 30px;\r\n}\r\n\r\n.nav-item a {\r\n  text-decoration: none;\r\n\r\n}\r\n\r\n.nav-item a:hover {\r\n  border-bottom: 2px solid #000;\r\n  color: black;\r\n}\r\n\r\n.nav-item a:visited {\r\n\r\n  color: black;\r\n}\r\n\r\n.line {\r\n  width: 210px;\r\n  height: 2px;\r\n  margin-top: 10px;\r\n  background-color: black;\r\n  color: black;\r\n  border: 0 none;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/UI/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"topNav\">\n\n  <ul>\n\n    <li class=\"nav-item\">\n      <hr class=\"line\">\n    </li>\n    <li class=\"nav-item\">\n      <a [routerLink]=\"['/mission']\" #mission>Mission</a>\n    </li>\n    <li class=\"nav-item\">\n      <a [routerLink]=\"['/how-it-works']\" #howItWorks>How it works</a>\n    </li>\n    <li class=\"nav-item\">\n      <a [routerLink]=\"['/about']\" #about>About</a>\n    </li>\n    <li class=\"nav-item\">\n      <a [routerLink]=\"['/contact']\" #contact>Contact</a>\n    </li>\n    <li class=\"nav-item\">\n      <a [routerLink]=\"['/pmt']\" #pmt>Buy PMT</a>\n    </li>\n    <li class=\"nav-item\">\n      <hr class=\"line\">\n    </li>\n  </ul>\n  <div class=\"page-divider\"></div>\n</div>\n<br>\n<br>\n"

/***/ }),

/***/ "./src/app/UI/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var url = window.location.href;
        if (url.indexOf('mission') !== -1) {
            this.missionElement.nativeElement.style = 'border-bottom: 2px solid #000;';
        }
        else if (url.indexOf('how-it-works') !== -1) {
            this.howItWorksElement.nativeElement.style = 'border-bottom: 2px solid #000;';
        }
        else if (url.indexOf('about') !== -1) {
            this.aboutElement.nativeElement.style = 'border-bottom: 2px solid #000;';
        }
        else if (url.indexOf('contact') !== -1) {
            this.contactElement.nativeElement.style = 'border-bottom: 2px solid #000;';
        }
        else if (url.indexOf('pmt') !== -1) {
            this.pmtElement.nativeElement.style = 'border-bottom: 2px solid #000;';
        }
    };
    return NavBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('mission'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], NavBarComponent.prototype, "missionElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('howItWorks'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], NavBarComponent.prototype, "howItWorksElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('about'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object)
], NavBarComponent.prototype, "aboutElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('contact'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object)
], NavBarComponent.prototype, "contactElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('pmt'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _e || Object)
], NavBarComponent.prototype, "pmtElement", void 0);
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav-bar',
        template: __webpack_require__("./src/app/UI/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("./src/app/UI/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pages_login_page_login_page_component__ = __webpack_require__("./src/app/Pages/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Pages_buy_pmtpage_buy_pmtpage_component__ = __webpack_require__("./src/app/Pages/buy-pmtpage/buy-pmtpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Pages_contact_page_contact_page_component__ = __webpack_require__("./src/app/Pages/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pages_about_page_about_page_component__ = __webpack_require__("./src/app/Pages/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Pages_how_it_works_page_how_it_works_page_component__ = __webpack_require__("./src/app/Pages/how-it-works-page/how-it-works-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Pages_mission_page_mission_page_component__ = __webpack_require__("./src/app/Pages/mission-page/mission-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Pages_home_page_home_page_component__ = __webpack_require__("./src/app/Pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Pages_register_evangelist_page_register_evangelist_page_component__ = __webpack_require__("./src/app/Pages/register-evangelist-page/register-evangelist-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Pages_register_user_page_register_user_page_component__ = __webpack_require__("./src/app/Pages/register-user-page/register-user-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Pages_forgot_password_forgot_password_component__ = __webpack_require__("./src/app/Pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Pages_change_password_change_password_component__ = __webpack_require__("./src/app/Pages/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Pages_evangelist_home_page_evangelist_home_page_component__ = __webpack_require__("./src/app/Pages/evangelist-home-page/evangelist-home-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '',
        children: [
            {
                path: '', component: __WEBPACK_IMPORTED_MODULE_7__Pages_home_page_home_page_component__["a" /* HomePageComponent */]
            }, {
                path: 'mission', component: __WEBPACK_IMPORTED_MODULE_6__Pages_mission_page_mission_page_component__["a" /* MissionPageComponent */]
            }, {
                path: 'how-it-works', component: __WEBPACK_IMPORTED_MODULE_5__Pages_how_it_works_page_how_it_works_page_component__["a" /* HowItWorksPageComponent */]
            }, {
                path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__Pages_about_page_about_page_component__["a" /* AboutPageComponent */]
            }, {
                path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__Pages_contact_page_contact_page_component__["a" /* ContactPageComponent */]
            }, {
                path: 'pmt', component: __WEBPACK_IMPORTED_MODULE_2__Pages_buy_pmtpage_buy_pmtpage_component__["a" /* BuyPmtpageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]]
            },
        ]
    },
    {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__Pages_login_page_login_page_component__["a" /* LoginPageComponent */]
    },
    {
        path: 'forgot-password', component: __WEBPACK_IMPORTED_MODULE_12__Pages_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
    },
    {
        path: 'change-password', component: __WEBPACK_IMPORTED_MODULE_13__Pages_change_password_change_password_component__["a" /* ChangePasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'register-user', component: __WEBPACK_IMPORTED_MODULE_11__Pages_register_user_page_register_user_page_component__["a" /* RegisterUserPageComponent */]
    },
    {
        path: 'register-evangelist', component: __WEBPACK_IMPORTED_MODULE_10__Pages_register_evangelist_page_register_evangelist_page_component__["a" /* RegisterEvngelistPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'evangelist-home-page', component: __WEBPACK_IMPORTED_MODULE_14__Pages_evangelist_home_page_evangelist_home_page_component__["a" /* EvangelistHomePageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.allPages {\r\n\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: 300;\r\n  font-style: normal;\r\n  line-height: 1.8em;\r\n  font-size: 14px;\r\n  text-transform: none;\r\n  text-decoration: none;\r\n\r\n  background-image: none;\r\n  background-position: top left;\r\n  background-size: auto;\r\n  background-attachment: scroll;\r\n  background-repeat: repeat;\r\n  background-color: white;\r\n  color: #5c5c5c;\r\n\r\n  margin: 30px;\r\n  padding: 10px;\r\n  display: block;\r\n  border: 2px solid black;\r\n}\r\n\r\n.logo a {\r\n  color: #343434;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n  line-height: 1.6em;\r\n  font-size: 60px;\r\n  text-transform: none;\r\n  text-decoration: none;\r\n  letter-spacing: 0px;\r\n  width: 100%;\r\n  text-align: center;\r\n  margin: 0;\r\n  display: inline-block;\r\n\r\n  -webkit-margin-before: 0.67em;\r\n  -webkit-margin-after: 0.67em;\r\n  -webkit-margin-start: 0px;\r\n  -webkit-margin-end: 0px;\r\n}\r\n\r\n.login {\r\n  float: right;\r\n  margin-top: 20px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.login a {\r\n  text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"allPages\">\n\n  <div *ngIf=\"getUser() === null\" class=\"login\">\n    <a [routerLink]=\"['/login']\">\n      <button type=\"button\" class=\"btn btn-primary\">Login</button>\n    </a>\n    <br>\n    <a [routerLink]=\"['/register-user']\">Register</a>\n  </div>\n  <div *ngIf=\"getUser() !== null\" class=\"login\">\n    <div class=\"btn-group\">\n      <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\" id=\"dropdownMenuButton\" >\n        {{getUser().Email}}\n      </button>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" [routerLink]=\"['/change-password']\">&nbsp;Change Password</a>\n        <a *ngIf=\"getUser().EvangelistId === 0\" class=\"dropdown-item\" [routerLink]=\"['/register-evangelist']\">&nbsp;Register as Evangelist</a>\n        <div class=\"dropdown-divider\"><hr></div>\n        <a class=\"dropdown-item\" href=\"\" (click)=\"logout()\">&nbsp;Logout</a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"logo\">\n    <a [routerLink]=\"['/']\">{{title}}</a>\n  </div>\n\n  <app-nav-bar></app-nav-bar>\n  <br>\n  <router-outlet></router-outlet>\n\n  <app-footer></app-footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.title = 'Pure Money Tech';
    }
    AppComponent.prototype.getUser = function () {
        return this.userService.user;
    };
    AppComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/']);
        return false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Pages_home_page_home_page_component__ = __webpack_require__("./src/app/Pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__UI_nav_bar_nav_bar_component__ = __webpack_require__("./src/app/UI/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Pages_mission_page_mission_page_component__ = __webpack_require__("./src/app/Pages/mission-page/mission-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Pages_how_it_works_page_how_it_works_page_component__ = __webpack_require__("./src/app/Pages/how-it-works-page/how-it-works-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Pages_about_page_about_page_component__ = __webpack_require__("./src/app/Pages/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Pages_contact_page_contact_page_component__ = __webpack_require__("./src/app/Pages/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Pages_buy_pmtpage_buy_pmtpage_component__ = __webpack_require__("./src/app/Pages/buy-pmtpage/buy-pmtpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__UI_footer_footer_component__ = __webpack_require__("./src/app/UI/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Pages_login_page_login_page_component__ = __webpack_require__("./src/app/Pages/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Pages_register_evangelist_page_register_evangelist_page_component__ = __webpack_require__("./src/app/Pages/register-evangelist-page/register-evangelist-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Pages_register_user_page_register_user_page_component__ = __webpack_require__("./src/app/Pages/register-user-page/register-user-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Pages_forgot_password_forgot_password_component__ = __webpack_require__("./src/app/Pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Pages_change_password_change_password_component__ = __webpack_require__("./src/app/Pages/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Pages_evangelist_home_page_evangelist_home_page_component__ = __webpack_require__("./src/app/Pages/evangelist-home-page/evangelist-home-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__Pages_home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__UI_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__Pages_mission_page_mission_page_component__["a" /* MissionPageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__Pages_how_it_works_page_how_it_works_page_component__["a" /* HowItWorksPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__Pages_about_page_about_page_component__["a" /* AboutPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__Pages_contact_page_contact_page_component__["a" /* ContactPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__Pages_buy_pmtpage_buy_pmtpage_component__["a" /* BuyPmtpageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__UI_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__Pages_login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__Pages_register_evangelist_page_register_evangelist_page_component__["a" /* RegisterEvngelistPageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__Pages_register_user_page_register_user_page_component__["a" /* RegisterUserPageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__Pages_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_20__Pages_change_password_change_password_component__["a" /* ChangePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_21__Pages_evangelist_home_page_evangelist_home_page_component__["a" /* EvangelistHomePageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var token = localStorage.getItem('accessToken');
        if (token) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("./src/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.user = null;
        this.evangelist = null;
        this.localToken = {};
        this.baseUrl = 'https://api.puremoney.tech/api/v1/';
        // Set the configuration settings
        this.credentials = {
            client: {
                id: 'someMachineId',
                secret: 'machineSecret'
            },
            auth: {
                tokenHost: 'https://api.puremoney.tech',
                tokenPath: '/token'
            }
        };
        this.oauth2 = __webpack_require__("./node_modules/simple-oauth2/index.js").create(this.credentials);
        this.prepareHeaders();
        this.refresh();
    }
    UserService.prototype.prepareHeaders = function () {
        var token = JSON.parse(localStorage.getItem('accessToken'));
        if (token) {
            this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
            this.user.Email = token.token.userName;
            this.httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token.token.access_token
                })
            };
        }
    };
    UserService.prototype.refresh = function () {
        var _this = this;
        if (this.httpOptions) {
            this.getUserInfo()
                .then(function () {
                _this.getEvangelistById(_this.user.EvangelistId)
                    .then(function () {
                    _this.getLocalTokens()
                        .then(function (res) {
                        var list = JSON.parse(res._body);
                        list.forEach(function (tk) {
                            if (tk.localityCode === _this.evangelist.geoAddress.geoTerritory) {
                                _this.localToken = tk;
                            }
                        });
                    });
                });
            });
        }
    };
    UserService.prototype.login = function (username, password) {
        var _this = this;
        var tokenConfig = {
            username: username,
            password: password
        };
        if (username === null || password === null) {
            return Promise.reject('Please type username and password.');
        }
        else {
            tokenConfig.username = username;
            tokenConfig.password = password;
            return this.oauth2.ownerPassword
                .getToken(tokenConfig)
                .then(function (result) {
                var accessToken = _this.oauth2.accessToken.create(result);
                localStorage.setItem("accessToken", JSON.stringify(accessToken));
                console.log('accessToken in storage: ', localStorage.getItem("accessToken"));
                _this.prepareHeaders();
                _this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
                _this.user.Email = accessToken.token.userName;
                return accessToken;
            }, function (err) {
                console.log('access token error ', err);
                return Promise.reject(JSON.stringify(err));
            });
        }
    };
    UserService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('accessToken');
        this.user = null;
        this.evangelist = null;
    };
    UserService.prototype.createEvangelist = function (evangelist) {
        var _this = this;
        return this.getGeoCode(evangelist.geoAddress.street1 + "\n    " + evangelist.geoAddress.street2 + "\n    " + evangelist.geoAddress.city + "\n    " + evangelist.geoAddress.stateOrProvince + "\n    " + evangelist.geoAddress.zip + "\n    " + evangelist.geoAddress.country)
            .then(function (result) {
            var res = JSON.parse(result._body);
            evangelist.geoAddress.geoCode.latitude = res.resourceSets[0].resources[0].point.coordinates[0];
            evangelist.geoAddress.geoCode.longitude = res.resourceSets[0].resources[0].point.coordinates[1];
            evangelist.geoAddress.geoTerritory = res.resourceSets[0].resources[0].address.locality + ' ' +
                res.resourceSets[0].resources[0].address.adminDistrict + ' ' +
                res.resourceSets[0].resources[0].address.adminDistrict2 + ' ' +
                res.resourceSets[0].resources[0].address.countryRegion;
            _this.evangelist = evangelist;
            _this.evangelist.id = 0;
            _this.evangelist.status = 0;
            return _this.http.post(_this.baseUrl + 'database/evangelist', evangelist, _this.httpOptions)
                .toPromise()
                .then(function (res1) {
                // assign id to current user
                var ev = JSON.parse(res1._body);
                _this.evangelist.id = ev.id;
                _this.evangelist.status = ev.status;
                _this.user.EvangelistId = ev.id;
            })
                .catch(function (error) {
                console.log(error);
                _this.evangelist = null;
            });
        })
            .catch(function (error) {
            console.log(error);
            _this.evangelist = null;
        });
    };
    UserService.prototype.getEvangelistById = function (id) {
        var _this = this;
        return this.http.get(this.baseUrl + ("database/evangelist/id/" + id), this.getHttpOptions())
            .toPromise()
            .then(function (res) {
            _this.evangelist = JSON.parse(res._body);
        });
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl + 'Account/Register', user)
            .toPromise()
            .then();
    };
    UserService.prototype.buyLocalTokens = function (territoryContract, howMany, howMuch) {
        var body = {
            'territoryContract': territoryContract,
            'howMany': howMany
        };
        var data = {
            territoryContract: territoryContract,
            howMany: howMany,
            howMuch: 10.00
        };
        var qrystring = Object.keys(data)
            .map(function (key) { return key + '=' + encodeURIComponent(data[key]); })
            .join('&');
        var url = this.baseUrl + 'contracts/localtoken/buylocaltokens?' + qrystring;
        console.log('buy tokens url ', url);
        return this.http.put(url, body, this.getHttpOptions())
            .toPromise()
            .then();
    };
    UserService.prototype.getTokenBalance = function (territoryContract, account) {
        var data = {
            territoryContract: territoryContract,
            account: account
        };
        var qrystring = Object.keys(data)
            .map(function (key) { return key + '=' + encodeURIComponent(data[key]); })
            .join('&');
        var url = this.baseUrl + 'contracts/localtoken/gettokenbalance?' + qrystring;
        console.log('gettokenbalance url ', url);
        return this.http.get(url, this.getHttpOptions())
            .toPromise()
            .then();
    };
    UserService.prototype.changePassword = function (model) {
        return this.http.post(this.baseUrl + 'Account/ChangePassword', model)
            .toPromise()
            .then();
    };
    UserService.prototype.getUserInfo = function () {
        var _this = this;
        return this.http.get(this.baseUrl + 'account/userinfo', this.getHttpOptions())
            .toPromise()
            .then(function (res) {
            _this.user = JSON.parse(res._body);
        });
    };
    UserService.prototype.getLocalTokens = function () {
        return this.http.get(this.baseUrl + 'contracts/localtoken/list', this.getHttpOptions())
            .toPromise()
            .then();
    };
    UserService.prototype.getHttpOptions = function () {
        var token = JSON.parse(localStorage.getItem('accessToken'));
        if (token) {
            var httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token.token.access_token
                })
            };
            return httpOptions;
        }
        return null;
    };
    UserService.prototype.getGeoCode = function (address) {
        var url = "http://dev.virtualearth.net/REST/v1/Locations?addressLine=" + address + "     &$format=responseFormat&key=Al4qJqLS1IDCpE1RjEDvwjK2FzLnffLx2kp3fWEgO_9dExPJgTjaZRNMSC0KF1AH";
        return this.http.get(url)
            .toPromise();
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./src/models/evangelist .ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Evangelist; });
var Evangelist = (function () {
    function Evangelist() {
    }
    return Evangelist;
}());

//# sourceMappingURL=evangelist .js.map

/***/ }),

/***/ "./src/models/geoAddress.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoAddress; });
var GeoAddress = (function () {
    function GeoAddress() {
    }
    return GeoAddress;
}());

//# sourceMappingURL=geoAddress.js.map

/***/ }),

/***/ "./src/models/geoAddressGeoCode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoAddressGeoCode; });
var GeoAddressGeoCode = (function () {
    function GeoAddressGeoCode() {
    }
    return GeoAddressGeoCode;
}());

//# sourceMappingURL=geoAddressGeoCode.js.map

/***/ }),

/***/ "./src/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map