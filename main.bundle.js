webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-default{\r\n    background: rgba(14, 14, 161, 0.837);\r\n}\r\np{\r\n    color: blue;\r\n}\r\nh1{\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <h1>INTERNSHIP</h1>\n            <div class=\"nav navbar-nav navbar-right\">\n              <button class=\"btn btn-primary\" (click)=\"onlogin()\">Login</button>\n              <!--p>If you alredy rigistered press signup button to enter</p>-->\n              <button class=\"btn btn-primary\" (click)=\"onsignup()\">signup</button>\n            </div>\n            </div>\n           \n        </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n        <p> For Registration press login</p> <p>If you alredy Registered press sign to signup</p>\n        </div>\n        </div>\n        <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n        <!--button class=\"btn btn-primary\" (click)=\"onlogin()\">Login</button>\n        <br><br>\n        <p>If you alredy rigistered press signup button to enter</p>\n        <button class=\"btn btn-primary\" (click)=\"onsignup()\">signup</button>-->\n        </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <!--app-form></app-form>-->\n                <router-outlet></router-outlet>\n              </div>\n              </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {FormGroup} from '@angular/forms';
//import { OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
//import { Validators } from '@angular/forms';
//import { FormArray } from '@angular/forms';
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    /* genders = ['male','female'];
     signup: FormGroup;
     ngOnInit(){
      /* this.signup = new FormGroup({
         'username':new FormControl(null,Validators.required),
         'email':new FormControl(null,[Validators.required,Validators.email]),
         'gender': new FormControl('male'),
         'hobbies':new FormArray([])
       });
     }
    /* onsubmit(){
       console.log(this.signup);
       this.signup.reset();
     }
     onadd(){
       const countrol = new FormControl(null,Validators.required);
       (<FormArray>this.signup.get('hobbies')).push(countrol);
     }*/
    AppComponent.prototype.onlogin = function () {
        this.router.navigate(['/form']);
    };
    AppComponent.prototype.onsignup = function () {
        this.router.navigate(['./home']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_form_component__ = __webpack_require__("../../../../../src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_5__form_form_component__["a" /* FormComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/form/form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched{\r\n    border: 1px solid red;\r\n}\r\nspan{\r\n    color: red;\r\n}\r\nh1{\r\n    text-align: center;\r\n    color: blue;\r\n}\r\n.navbar-default{\r\n    background: palevioletred;\r\n}\r\n.container{\r\n    background: url(\"https://i.pinimg.com/originals/77/28/93/772893b05282ae98ea8c6604f0e1e540.jpg\");\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <h1>Registration Form</h1>\n      </div>\n    </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n          <form [formGroup]=\"signup\" (ngSubmit)=\"onsubmit()\">\n            <div class=\"form-group\">\n              <label for=\"username\">Username</label>\n              <input type=\"text\" placeholder=\"Enter name\"\n              id=\"username\"\n              formControlName=\"username\"\n              class=\"form-control\">\n              <span\n              *ngIf=\"!signup.get('username').valid && signup.get('username').touched\" \n              class=\"help-block\">Please enter valid name</span>  \n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"text\" placeholder=\"Enter-email\"\n              id=\"email\"\n              formControlName=\"email\"\n              class=\"form-control\">\n              <span\n              *ngIf=\"!signup.get('email').valid && signup.get('email').touched\" \n              class=\"help-block\">Please enter valid Email</span>  \n            </div>\n            <div class=\"form-group\">\n              <label for=\"age\">Age</label>\n              <input type=\"text\" placeholder=\"Enter Age\"\n              id=\"age\"\n              formControlName=\"age\"\n              class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"place\">Place</label>\n                <input type=\"text\" placeholder=\"Enter Place\"\n                id=\"place\"\n                formControlName=\"place\"\n                class=\"form-control\">\n              </div>\n            <h3>\n              Gender\n            </h3>\n            <div class=\"radio\" *ngFor=\"let gender of genders\">\n              <label>\n                <input type=\"radio\"\n                formControlName=\"gender\"\n                [value]=\"gender\">{{gender}}\n              </label>\n            </div>\n            <div formArrayName=\"hobbies\">\n              <h2>Enter Hobbies</h2>\n              <button class=\"btn btn-default\" type=\"button\" (click)=\"onadd()\">Add hobbies</button>\n              <div class=\"form-group\"\n              *ngFor=\"let hobbyControl of signup.get('hobbies').controls; let i = index\">\n              <input type=\"text\" class=\"form-control\" [formControlName]=\"i\">\n            </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" size=\"50px\" placeholder=\"Enter Password\"\n                id=\"password\"\n                formControlName=\"password\"\n                class=\"form-control\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"cpassword\">Confirm password</label>\n                  <input type=\"password\" size=\"50px\" placeholder=\"Re-Entre password\"\n                  id=\"cpassword\"\n                  formControlName=\"cpassword\"\n                  class=\"form-control\">\n                </div>\n            <span\n            *ngIf=\" signup.valid  && !signup.touched \" \n            class=\"help-block\">Choose your option</span>  \n            <br><hr>\n            <button class=\"btn btn-primary\" type=\"submit\"(click)=\"onadd()\">submit</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  \n\n"

/***/ }),

/***/ "../../../../../src/app/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormComponent = (function () {
    function FormComponent() {
        this.genders = ['male', 'female'];
    }
    FormComponent.prototype.ngOnInit = function () {
        this.signup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]),
            'gender': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('male'),
            'age': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null),
            'place': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null),
            'hobbies': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]([]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null),
            'cpassword': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null)
        });
    };
    FormComponent.prototype.onsubmit = function () {
        console.log(this.signup);
        this.signup.reset();
    };
    FormComponent.prototype.onadd = function () {
        var control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.signup.get('hobbies').push(control);
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("../../../../../src/app/form/form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/form/form.component.css")]
        })
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>You are Rigesterd successfullly</h2>\n\n<br><hr>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n<div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" placeholder=\"Enter name\"\n    id=\"username\"\n    formControlName=\"username\"\n    class=\"form-control\">\n    <!--span\n    *ngIf=\"!signup.get('username').valid && signup.get('username').touched\" \n    class=\"help-block\">Please enter valid name</span> --> \n  </div>\n  <!--div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" placeholder=\"Enter-email\"\n    id=\"email\"\n    formControlName=\"email\"\n    class=\"form-control\">\n    <span\n    *ngIf=\"!signup.get('email').valid && signup.get('email').touched\" \n    class=\"help-block\">Please enter valid Email</span>  \n  </div>-->\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" size=\"50px\" placeholder=\"Enter Password\"\n    id=\"password\"\n    formControlName=\"password\"\n    class=\"form-control\">\n  </div>\n  <button class=\"btn btn-primary\" type=\"submit\" (click)=\"onsubmit()\">submit</button>\n  </div>\n  </div>\n \n  "

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onsubmit = function () {
        this.router.navigate(['/login']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<br><br>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n<p>\n  login works!\n</p>\n<button class=\"btn btn-primary\" (click)=\"onlogout()\">logout</button>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onlogout = function () {
        this.router.navigate(['./form']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map