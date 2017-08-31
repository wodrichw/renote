webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n  <div class=\"container\">\n    <div class=\"section\">\n      <div class=\"article\">\n        <div class=\"article-head\">\n          <h3>Purpose of Renote</h3>\n        </div>\n        <div class=\"article-body\">\n          <p>\n            When it comes to effectiveness, there is no comparison to handwritten notes. Many well established <a href=\"http://www.npr.org/2016/04/17/474525392/attention-students-put-your-laptops-away\"\n              target=\"_blank\">articles</a> state this to be true. Handwriting notes as opposed to typing them increases creativity,\n            and retention of what is being scribed. However, in an electronic age, it is becoming more difficult to exclusively\n            use pen and paper. This what sparked the idea for Renote.\n            <br>\n            <br> Renote is a webapp that can convert your notes on pen and paper to electronic text.\n          </p>\n        </div>\n      </div>\n\n      <div class=\"article\">\n        <div class=\"article-head\">\n          <h3>How to Use Renote</h3>\n        </div>\n        <div class=\"article-body\">\n          <p>\n            To use Renote, you must first create a Renote account. Once you login, you are able to upload an image (as a jpeg) of your\n            handwritten notes. Renote will then take your image and process it into text. From there, you will have a text\n            file that contains the text from you notes on pen and paper. You have several options for storing your text file.\n            You can store it on your Renote account, download the file, or upload that file to your Google Drive. You can\n            additionally create folders on your Renote account to store your text files in so that you can stay more organized.\n          </p>\n        </div>\n      </div>\n      <div class=\"article\">\n        <div class=\"article-head\">\n          <h3>How Renote Works</h3>\n        </div>\n        <div class=\"article-body\">\n          <p>\n            Renote is able to convert an image of handwriting to electronic text through a technology called <a href=\"https://en.wikipedia.org/wiki/Optical_character_recognition\"\n              target=\"_blank\">optical character recognition</a> (OCR). OCR looks at an image of a letter, and guesses what\n            character it is looking at. This is a difficult thing for computers to do. So to help guess what letters it is\n            looking at, Renote also uses something called a <a href=\"https://en.wikipedia.org/wiki/Artificial_neural_network\"\n              target=\"_blank\">neuronet</a>. A neuronet is a type of machine learning algorithm that is based off how neurons\n            interact with each other in a brain. It allows Renote to learn from the previous data it has looked at. This\n            means that Renote will become more accurate over time.\n          </p>\n        </div>\n        <div class=\"article\">\n          <div class=\"article-head\">\n            <h3>Renote is Build with Angular and Firebase</h3>\n          </div>\n          <div class=\"article-body\">\n            <p>\n              <a href=\"https://en.wikipedia.org/wiki/AngularJS\">Angular</a> is a javascript framework that is created by\n              Google. The cool feature of Angular, is it allows for 2-way data binding. This means that Angular will detect\n              when there is changes in java script files and automatically update the DOM. This makes developing in Angular\n              very simple for DOM interactions.\n              <br>\n              <br> <a href=\"https://en.wikipedia.org/wiki/Firebase\">Firebase</a> is a database service that updates in real\n              time. Firebase provides an API for Angular that allows all cloud data to be synchronized for all clients accessing\n              Renote.\n              <br>\n              <br> Angular and Firebase together form a beautiful symbiotic relationship. The Angular 2-way data binding\n              automatically updates the DOM when there are updates in the module and vice versa. Combine this with the Firebase\n              API that listens for updates in the Angular module and automatically updates the database, and you get a sort\n              of 3-way data binding. Meaning that whenever there is an update in either the DOM, Angular module, or the Firebase\n              database, the other two will automatically be updated as well.\n              <br>\n              <br> Let’s look at how this benefits Renote. Say you just took a picture of your notes converted it to text\n              with Renote on your phone. You then store that text file in a folder on your Renote account. If you also were\n              logged into Renote on you laptop, you would instantly see the added file from your phone, without having to\n              refresh your browser.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__members_members_component__ = __webpack_require__("../../../../../src/app/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__donate_donate_component__ = __webpack_require__("../../../../../src/app/donate/donate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__connect_connect_component__ = __webpack_require__("../../../../../src/app/connect/connect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forum_forum_component__ = __webpack_require__("../../../../../src/app/forum/forum.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










const appROUTES = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'members', component: __WEBPACK_IMPORTED_MODULE_4__members_members_component__["a" /* MembersComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */] },
    { path: 'donate', component: __WEBPACK_IMPORTED_MODULE_7__donate_donate_component__["a" /* DonateComponent */] },
    { path: 'connect', component: __WEBPACK_IMPORTED_MODULE_8__connect_connect_component__["a" /* ConnectComponent */] },
    { path: 'forum', component: __WEBPACK_IMPORTED_MODULE_9__forum_forum_component__["a" /* ForumComponent */] }
];
/* unused harmony export appROUTES */

let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appROUTES)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angulartics2__ = __webpack_require__("../../../../angulartics2/dist/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AppComponent = class AppComponent {
    constructor(angulartics2GoogleAnalytics) {
        this.title = 'Renote';
        this.subtitle = 'Convert Handwriting to Text with Ease!';
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angulartics2__["b" /* Angulartics2GoogleAnalytics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angulartics2__["b" /* Angulartics2GoogleAnalytics */]) === "function" && _a || Object])
], AppComponent);

;
var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angulartics2__ = __webpack_require__("../../../../angulartics2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_virtual_scroll__ = __webpack_require__("../../../../angular2-virtual-scroll/dist/virtual-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_virtual_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_virtual_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_data_service__ = __webpack_require__("../../../../../src/app/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__email_pass_form_email_pass_form_component__ = __webpack_require__("../../../../../src/app/email-pass-form/email-pass-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__members_members_component__ = __webpack_require__("../../../../../src/app/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__donate_donate_component__ = __webpack_require__("../../../../../src/app/donate/donate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__connect_connect_component__ = __webpack_require__("../../../../../src/app/connect/connect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__forum_forum_component__ = __webpack_require__("../../../../../src/app/forum/forum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__signup_form_signup_form_component__ = __webpack_require__("../../../../../src/app/signup-form/signup-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__profile_settings_form_profile_settings_form_component__ = __webpack_require__("../../../../../src/app/profile-settings-form/profile-settings-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__inquire_profile_inquire_profile_component__ = __webpack_require__("../../../../../src/app/inquire-profile/inquire-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__chat_box_chat_box_component__ = __webpack_require__("../../../../../src/app/chat-box/chat-box.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//Services

















const FIRECONFIG = {
    apiKey: "AIzaSyDiZ1YBms2zgTNk1jULGT-NpdBsraIhNVo",
    authDomain: "renote-633e0.firebaseapp.com",
    databaseURL: "https://renote-633e0.firebaseio.com",
    projectId: "renote-633e0",
    storageBucket: "renote-633e0.appspot.com",
    messagingSenderId: "325890645640"
};
/* unused harmony export FIRECONFIG */

let AppModule = class AppModule {
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__email_pass_form_email_pass_form_component__["a" /* EmailPassFormComponent */],
            __WEBPACK_IMPORTED_MODULE_16__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_17__members_members_component__["a" /* MembersComponent */],
            __WEBPACK_IMPORTED_MODULE_18__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_20__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_21__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_22__donate_donate_component__["a" /* DonateComponent */],
            __WEBPACK_IMPORTED_MODULE_23__connect_connect_component__["a" /* ConnectComponent */],
            __WEBPACK_IMPORTED_MODULE_25__signup_form_signup_form_component__["a" /* SignupFormComponent */],
            __WEBPACK_IMPORTED_MODULE_24__forum_forum_component__["a" /* ForumComponent */],
            __WEBPACK_IMPORTED_MODULE_26__profile_settings_form_profile_settings_form_component__["a" /* ProfileSettingsFormComponent */],
            __WEBPACK_IMPORTED_MODULE_27__inquire_profile_inquire_profile_component__["a" /* InquireProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_28__chat_box_chat_box_component__["a" /* ChatBoxComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4_angulartics2__["a" /* Angulartics2Module */].forRoot([__WEBPACK_IMPORTED_MODULE_4_angulartics2__["b" /* Angulartics2GoogleAnalytics */]]),
            __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__["ImageUploadModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(FIRECONFIG, 'my-app'),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_angular2_virtual_scroll__["VirtualScrollModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__user_data_service__["a" /* UserDataService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat-box/chat-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#message-list{\n  list-style: none;\n  padding: 0;\n}\n.message{\n  max-width: 400px;\n  background-color:\trgba(0, 188, 185, 0.03); \n  border: 1px solid rgba(0, 188, 185, 0.1);\n  border-radius: 5px;\n  padding: 5px;\n}\n.username{\n  background-color:\trgba(176,176,176,0.3);\n  margin: 5px;\n  padding: 2px;\n  border-radius: 6px;\n}\n.username:hover{\n  cursor: pointer;\n}\n.body{\n  margin-top: 5px;\n  margin-left: 5px;\n  max-width: 360px;\n  word-wrap: break-word;\n}\n.btn{\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-box/chat-box.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Message Board</h2>\n\n<div>\n  <ul id=\"message-list\">\n    <li *ngFor=\"let message of messages | async\" class=\"message\">\n      <div (click)=\"setInquireUser(message.uid)\">\n        <span class=\"username\">{{message.username}}</span>\n        <p class=\"body\">{{message.body}}</p>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<div>\n  <h4>Add a Comment</h4>\n  <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"newMessage\"></textarea>\n  <button type=\"button\" (click)=\"submit()\" class=\"btn btn-seccess\">Submit</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat-box/chat-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_data_service__ = __webpack_require__("../../../../../src/app/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ChatBoxComponent = class ChatBoxComponent {
    constructor(db, uds) {
        this.db = db;
        this.uds = uds;
        this.uid = null;
        this.newMessage = null;
        this.items = ("as;ldfaddiivnoaivdoaidvnaokodfaodoivaodivnaodvinaodivnaodivnadv").split("");
    }
    ngOnInit() {
        this.messages = this.db.list('messages/');
        this.uidObs = this.uds.getUid();
        this.uidObs.subscribe(uid => {
            if (uid != null) {
                this.uid = uid;
                this.db.object('users/' + uid, { preserveSnapshot: true }).subscribe(user => {
                    this.uname = user.val().username;
                });
            }
        });
    }
    setInquireUser(uid) {
        console.log(`inquire uid ${uid}`);
        this.uds.setInquireUid(uid);
    }
    submit() {
        if (this.uid != null && this.newMessage != null) {
            this.messages.push({
                'uid': this.uid,
                'username': this.uname,
                'body': this.newMessage
            });
            this.newMessage = null;
        }
        else {
            console.log('Message not sent correctly');
            console.log(`uid: ${this.uid} message: ${this.newMessage}`);
        }
    }
};
ChatBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat-box',
        template: __webpack_require__("../../../../../src/app/chat-box/chat-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-box/chat-box.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_data_service__["a" /* UserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_data_service__["a" /* UserDataService */]) === "function" && _b || Object])
], ChatBoxComponent);

var _a, _b;
//# sourceMappingURL=chat-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/connect/connect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-form {\n  margin: 2%;\n  padding: 2%;\n  background-color: rgba(0, 188, 185, .1);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/connect/connect.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n  <div class=\"container\">\n    <h2>Connect With the Creator!</h2>\n    <div class=\"row justify-content-md-center\">\n      <div class=\"col-10 login-form\">\n          <form (ngSubmit)=\"onSubmit()\" #connectForm=\"ngForm\">\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"text\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"formData.email\" name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                placeholder=\"awesome@email.com\" #email=\"ngModel\">\n              <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\n                Email is invalid\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"formData.name\" name=\"name\" pattern=\".{4,20}\" placeholder=\"John Doe\"\n                #name=\"ngModel\">\n\n              <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n                Between 4 and 20 characters\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"message\">Message</label>\n              <textarea class=\"form-control\" rows=\"7\" id=\"message\" required [(ngModel)]=\"formData.message\" name=\"message\" pattern=\".{0,600}\"\n                #message=\"ngModel\"></textarea>\n              <div [hidden]=\"message.valid || message.pristine\" class=\"alert alert-danger\">\n                Must be less than 600 characters\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"math\">2 + 2 =</label>\n              <input type=\"text\" class=\"form-control\" id=\"math\" required pattern=\"4\">\n            </div>\n            <button (submitdata)=\"[formData.email, formData.name, formData.message]\" type=\"submit\" class=\"btn btn-seccess\" [disabled]=\"!connectForm.form.valid\">Submit</button>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/connect/connect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_data__ = __webpack_require__("../../../../../src/app/connect/form-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





let ConnectComponent = class ConnectComponent {
    constructor(firebaseApp, db) {
        this.db = db;
        this.formData = new __WEBPACK_IMPORTED_MODULE_1__form_data__["a" /* FormData */]("", "", "", null);
        this.emailMessages = db.list('/emailMessages');
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log("Submit :)");
        this.emailMessages.push({
            'email': this.formData.email,
            'name': this.formData.name,
            'message': this.formData.message
        });
    }
};
ConnectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-connect',
        template: __webpack_require__("../../../../../src/app/connect/connect.component.html"),
        styles: [__webpack_require__("../../../../../src/app/connect/connect.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */])),
    __metadata("design:paramtypes", [typeof (_a = ((_b = (typeof __WEBPACK_IMPORTED_MODULE_4_firebase__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_firebase__).app) && _b).App) === "function" && _a || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object])
], ConnectComponent);

var _b, _a, _c;
//# sourceMappingURL=connect.component.js.map

/***/ }),

/***/ "../../../../../src/app/connect/form-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class FormData {
    constructor(name, email, message, robot) {
        this.name = name;
        this.email = email;
        this.message = message;
        this.robot = robot;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FormData;

//# sourceMappingURL=form-data.js.map

/***/ }),

/***/ "../../../../../src/app/donate/donate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/donate/donate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n  <div class=\"container\">\n    <div class=\"donation-message\">\n      <h2>Support Renote</h2>\n      <p>\n        Renote encourages you to offer donations to show your support. Renote offers services for free, which is only possible through\n        public donations. Each donation supports the developers at Renote who work hard to maintain and progress the site.\n      </p>\n    </div>\n    <div class=\"paypal-plugin\">\n      <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\n        <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n        <input type=\"hidden\" name=\"hosted_button_id\" value=\"7AEFBK6TAKMAA\">\n        <input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">\n        <img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/donate/donate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let DonateComponent = class DonateComponent {
    constructor() { }
    ngOnInit() {
    }
};
DonateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-donate',
        template: __webpack_require__("../../../../../src/app/donate/donate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/donate/donate.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DonateComponent);

//# sourceMappingURL=donate.component.js.map

/***/ }),

/***/ "../../../../../src/app/email-pass-form/email-pass-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email-pass-form/email-pass-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form (ngSubmit)=\"onSubmit()\" #emailPassForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"text\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"model.email\" name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n        placeholder=\"\" #email=\"ngModel\">\n      <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\n        Email is invalid\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pass\">Password</label>\n      <input class=\"form-control\" id=\"pass\" required type=\"password\" [(ngModel)]=\"model.pass\" name=\"pass\" pattern=\".{8,20}\" placeholder=\"\"\n        #pass=\"ngModel\">\n      <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\n        Between 8 and 20 characters\n      </div>\n    </div>\n    <button (submitdata)=\"[model.email, model.pass, model.username]\" type=\"submit\" class=\"btn btn-seccess\" [disabled]=\"!emailPassForm.form.valid\">Submit</button>\n    <div *ngIf=\"submitted \">\n      <p>Email: {{model.email}} Pass: {{model.pass}}</p>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/email-pass-form/email-pass-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_data__ = __webpack_require__("../../../../../src/app/email-pass-form/form-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPassFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let EmailPassFormComponent = class EmailPassFormComponent {
    constructor() {
        this.submitted = false;
        this.showpassword = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__form_data__["a" /* FormData */]("", "");
        this.formdata = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onSubmit() {
        this.submitted = true;
        this.formdata.next(this.model);
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], EmailPassFormComponent.prototype, "formdata", void 0);
EmailPassFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-email-pass-form',
        template: __webpack_require__("../../../../../src/app/email-pass-form/email-pass-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-pass-form/email-pass-form.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EmailPassFormComponent);

var _a;
//# sourceMappingURL=email-pass-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/email-pass-form/form-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class FormData {
    constructor(email, pass) {
        this.email = email;
        this.pass = pass;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FormData;

//# sourceMappingURL=form-data.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul class=\"nav\">\n    <li class=\"nav-item\" *ngFor=\"let link of links\">\n      <a class=\"nav-link active\" target=\"_blank\" href=\"{{link}}\">{{generateLinkTitle(link)}}</a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

const classLinks = [
    'http://doghousepolitics.com/',
    'http://save-cmlc.org/',
    'http://www.hellolorem.com/',
    'http://bourn.jonahgeorge.com/',
    'http://cookingtutorials.net/',
    'http://endeolion.com/'
];
let FooterComponent = class FooterComponent {
    constructor() {
        this.links = classLinks;
    }
    ngOnInit() {
    }
    generateLinkTitle(link) {
        var title = link.slice(7, -5);
        return title;
    }
};
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/forum/forum.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user{\n  margin: 3px;\n}\n.user:hover{\n  background-color:\trgba(0, 188, 185, 0.07); \n  border: 1px solid rgba(0, 188, 185, 0.1);\n  cursor: pointer;\n}\n.btn{\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forum/forum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-8\">\n        <app-chat-box></app-chat-box>\n      </div>\n      <div class=\"col-4\">\n        <div *ngIf=\"seeProfile\">\n          <button type=\"text\" (click)=\"doneInquiring()\" class=\"btn btn-seccess\">Back</button>\n          <app-inquire-profile></app-inquire-profile>\n        </div>\n        <div *ngIf=\"!seeProfile\">\n          <h4>Online Users</h4>\n          <div *ngFor=\"let user of users | async\" class=\"user\">\n            <span (click)=\"checkoutProfile(user.$key)\">\n                  {{user.username}}\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/forum/forum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data_service__ = __webpack_require__("../../../../../src/app/user-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ForumComponent = class ForumComponent {
    constructor(db, ud) {
        this.db = db;
        this.ud = ud;
        this.ukeys = [];
        this.seeProfile = false;
    }
    ngOnInit() {
        this.users = this.db.list('users/');
        this.inquireUid = this.ud.getInquireUid();
        this.inquireUid.subscribe(uid => {
            if (uid != null) {
                this.seeProfile = true;
            }
        });
    }
    checkoutProfile(uid) {
        if (uid != null) {
            this.ud.setInquireUid(uid);
            this.seeProfile = true;
        }
    }
    doneInquiring() {
        this.seeProfile = false;
        this.ud.setInquireUid(null);
    }
};
ForumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forum',
        template: __webpack_require__("../../../../../src/app/forum/forum.component.html"),
        styles: [__webpack_require__("../../../../../src/app/forum/forum.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_data_service__["a" /* UserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_data_service__["a" /* UserDataService */]) === "function" && _b || Object])
], ForumComponent);

var _a, _b;
//# sourceMappingURL=forum.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  background-color:\trgba(0, 188, 185, 1);\n\n}\n\n.selectable:hover{\n background:rgba(255,255,255, 0.75);\n border-radius: 10px; \n}\n\n#subheader {\n  font-size: 100%;\n}\n#profile-card{\n  margin-right: 80px;\n}\n.dispName{\n  cursor: pointer;\n}\n.dispName:hover{\n  background:rgba(255,255,255, 0.75);\n  border-radius: 10px; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded body\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" routerLink=\"about\">\n    <h1>Renote</h1>\n    <h2 id=\"subheader\">Convert handwriting to text with ease!</h2>\n  </a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li *ngFor=\"let link of linksL\" class=\"nav-item active selectable\">\n        <a class=\"nav-link\" routerLink=\"{{link[0]}}\" routerLinkActive=\"active\">{{link[1]}}</a>\n      </li>\n    </ul>\n\n    <div *ngIf=\"!loggedIn\" class=\"selectable\">\n      <a routerLink=\"login\" class=\"nav-link\"  style=\"color: black\">signup or signin</a>\n    </div>\n\n    <div *ngIf=\"loggedIn\" class=\"navbar\" id=\"navbarText\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li *ngFor=\"let link of linksR\" class=\"nav-item active selectable\">\n          <a class=\"nav-link\" routerLink=\"{{link[0]}}\" routerLinkActive=\"active\">{{link[1]}}</a>\n        </li>\n        <li>\n          <div class=\"dropdown right-text\" id=\"profile-card\">\n            <a class=\"nav-link dropdown-toggle selectable dispName\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\" style=\"color: black\"> \n              {{dispName}}\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n              <a class=\"dropdown-item\" routerLink=\"profile\">Your Profile</a>\n              <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n            </div>\n          </div>\n        </li>\n      </ul>\n\n\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_service__ = __webpack_require__("../../../../../src/app/user-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const navLinksLeft = [
    ['about', 'About'],
    ['donate', 'Donate'],
    ['connect', 'Connect'],
    ['forum', 'Community Message Board'],
    ['login', 'Check Out Renote']
];
const navLinksRight = [
    ['members', 'Convert']
];
let HeaderComponent = class HeaderComponent {
    constructor(db, router, afAuth, udService) {
        this.db = db;
        this.router = router;
        this.afAuth = afAuth;
        this.udService = udService;
        this.linksL = navLinksLeft;
        this.linksR = navLinksRight;
        this.loggedIn = false;
        this.dispName = 'Profile';
        this.uid = udService.getUid();
        this.uid.subscribe(uid => {
            db.object(`users/${uid}/username`, { preserveSnapshot: true }).subscribe(snap => {
                if (snap.val() != null) {
                    this.dispName = snap.val();
                    this.loggedIn = true;
                }
                else {
                    this.dispName = 'Profile';
                    this.loggedIn = false;
                }
            });
        });
    }
    logout() {
        this.udService.setUid('null');
        this.afAuth.auth.signOut();
        this.router.navigateByUrl('login');
    }
};
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_data_service__["a" /* UserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_data_service__["a" /* UserDataService */]) === "function" && _d || Object])
], HeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/inquire-profile/inquire-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inquire-profile/inquire-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n  <div class=\"container\">\n    <div *ngIf=\"askUname\" class=\"uname\">\n      <h5>{{askUname}}</h5>\n    </div>\n    <div *ngIf=\"askBio\" class=\"bio\">\n      {{askBio}}\n    </div>\n    <div *ngIf=\"!askBio\" class=\"bio\">\n      {{askUname}} has no bio to show.\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/inquire-profile/inquire-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_data_service__ = __webpack_require__("../../../../../src/app/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InquireProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let InquireProfileComponent = class InquireProfileComponent {
    constructor(db, ud) {
        this.db = db;
        this.ud = ud;
        this.askBio = null;
        this.askUname = null;
    }
    ngOnInit() {
        this.inquireUid = this.ud.getInquireUid();
        this.inquireUid.subscribe(uid => {
            if (uid != undefined && uid != null) {
                this.db.object('users/' + uid, { preserveSnapshot: true }).subscribe(snap => {
                    this.askBio = snap.val().bio;
                    this.askUname = snap.val().username;
                });
            }
        });
    }
};
InquireProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inquire-profile',
        template: __webpack_require__("../../../../../src/app/inquire-profile/inquire-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/inquire-profile/inquire-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_data_service__["a" /* UserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_data_service__["a" /* UserDataService */]) === "function" && _b || Object])
], InquireProfileComponent);

var _a, _b;
//# sourceMappingURL=inquire-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#login-container {\n  background-color: rgba(0, 188, 185, .1);\n  margin: 2%;\n  padding: 2%;\n}\n\n#google-btn{\n  position: relative;\n  float: right;\n  margin: 0 0 0 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n  <div class=\"container\">\n    <h1>Login</h1>\n    <div class=\"row justify-content-md-center\">\n      <div id=\"login-container\" class=\"col-7\">\n        <app-email-pass-form (formdata)=\"setEmailpass($event)\"></app-email-pass-form>\n        <button id=\"google-btn\" class=\"btn btn-seccess\" (click)=\"loginGoogle()\">Login with Google </button>\n      </div>\n    </div>\n    <button class=\"btn btn-seccess\" (click)=\"signup()\">Sign Up</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_service__ = __webpack_require__("../../../../../src/app/user-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let LoginComponent = class LoginComponent {
    constructor(afAuth, router, udService) {
        this.afAuth = afAuth;
        this.router = router;
        this.udService = udService;
        this.user = afAuth.authState;
        this.userInit = this.user;
        this.afAuth.authState.subscribe(auth => {
            if (auth) {
                this.udService.setUid(auth.uid);
                this.router.navigateByUrl('/members');
            }
        });
    }
    setEmailpass(formdata) {
        this.model = formdata;
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithEmailAndPassword(this.model.email, this.model.pass);
        this.afAuth.auth.onAuthStateChanged(auth => {
            if (auth) {
                this.udService.setUid(auth.uid);
                this.router.navigateByUrl('/members');
            }
        });
    }
    loginGoogle() {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
        this.afAuth.auth.onAuthStateChanged(auth => {
            if (auth) {
                this.udService.setUid(auth.uid);
                this.router.navigateByUrl('/members');
            }
        });
    }
    signup() {
        this.router.navigateByUrl('/signup');
    }
    logout() {
        this.afAuth.auth.signOut();
    }
};
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_data_service__["a" /* UserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_data_service__["a" /* UserDataService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/members/members.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/members.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n  <div class=\"container\">\n    <image-upload [max]=\"100\" [buttonCaption]=\"'Select Images!'\" [dropBoxMessage]=\"'Drop your images here!'\" (onFileUploadFinish)=\"imageUploaded($event)\"\n      (onRemove)=\"imageRemoved($event)\" (isPending)=\"disableSendButton($event)\"></image-upload>\n\n    <button class=\"btn btn-seccess\" (click)=\"logout()\">Logout</button>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/members.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_data_service__ = __webpack_require__("../../../../../src/app/user-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let MembersComponent = class MembersComponent {
    constructor(udService, afAuth, router, db) {
        this.udService = udService;
        this.afAuth = afAuth;
        this.router = router;
        this.db = db;
        this.afAuth.authState.subscribe(auth => {
            if (auth != null) {
                udService.setUid(auth.uid);
                this.users = db.list('users/', { preserveSnapshot: true });
                this.users.subscribe(snaps => {
                    let keys = [];
                    snaps.forEach(snap => {
                        keys.push(snap.key);
                    });
                    function findKeys(key) {
                        return key == auth.uid;
                    }
                    if (keys.find(findKeys) == undefined) {
                        db.object('users/' + auth.uid).update({
                            username: auth.displayName,
                            email: auth.email,
                            profile_picture: auth.photoURL
                        });
                    }
                });
            }
        });
    }
    ngOnInit() { }
    logout() {
        this.udService.setUid('null');
        this.afAuth.auth.signOut();
        this.router.navigateByUrl('login');
    }
    imageUploaded(event) {
        const storageRef = this.storage.ref().child('images/temp.jpg');
        storageRef.put(event.file).then(function (snapshot) {
            console.log('Uploaded a blob or file!');
        });
    }
};
MembersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-members',
        template: __webpack_require__("../../../../../src/app/members/members.component.html"),
        styles: [__webpack_require__("../../../../../src/app/members/members.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_data_service__["a" /* UserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_data_service__["a" /* UserDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _d || Object])
], MembersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=members.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile-settings-form/profile-settings-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile-settings-form/profile-settings-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <form [formGroup]=\"nameBioForm\" (ngSubmit)=\"update($event)\">\n    <input formControlName=\"username\" type=\"email\" placeholder=\"Your email\">\n    <input formControlName=\"\" type=\"password\" placeholder=\"Your password\">\n    <button type=\"submit\">Log in</button>\n  </form>\n  <!--\n  <form (ngSubmit)=\"onSubmit()\" #profileSettingsForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" required [(ngModel)]=\"model.username\" name=\"username\" placeholder=model.username pattern=\".{1,40}\" #username=\"ngModel\">\n\n      <div *ngIf=\"!checkUname(model.username)\" class=\"alert alert-danger\">\n        Username is taken\n      </div>\n      <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">\n        Between 1 and 40 Characters\n      </div>\n    </div>\n    <div class=\"input-box\">\n      <h4>Bio</h4>\n      <textarea class=\"form-control\" [(ngModel)]=\"model.bio\" name=\"bio\" class=\"form-control\" name=\"bio\" #bio=\"ngModel\" rows=\"7\"></textarea>\n    </div>\n    <div class=\"input-box table\">\n      <table>\n        <tr>\n          <td>\n            <button (submitdata)=\"[model.username, model.bio]\" type=\"submit\" class=\"btn btn-seccess\" type=\"button\" [disabled]=\"!profileSettingsForm.form.valid || !checkUname(model.username)\">Update Profile</button>\n          </td>\n          <td>\n            <div *ngIf=\"confirmUpdate\" id=\"success\">\n              <p>✓</p>\n            </div>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </form>\n\n\n  <form (ngSubmit)=\"onSubmit()\" #passwordForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"pass\">Password</label>\n      <input class=\"form-control\" id=\"pass\" required type=\"password\" [(ngModel)]=\"model.pass\" name=\"pass\" pattern=\".{8,40}\" #pass=\"ngModel\">\n      <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\n        Between 8 and 40 characters\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passConf\">Confirm Password</label>\n      <input class=\"form-control\" id=\"passConf\" required [(ngModel)]=\"model.passConf\" type=\"password\" name=\"passConf\" #passConf=\"ngModel\">\n      <div [hidden]=\"matchPass(model.pass, model.passConf) || passConf.pristine\" class=\"alert alert-danger\">\n        Must match password\n      </div>\n    </div>\n    <div class=\"input-box table\">\n      <table>\n        <tr>\n          <td>\n            <button (submitdata)=\"[model.pass]\" type=\"submit\" class=\"btn btn-seccess\" type=\"button\" [disabled]=\"!passwordForm.form.valid\">Update Password</button>\n          </td>\n          <td>\n            <div *ngIf=\"confirmUpdate\" id=\"success\">\n              <p>✓</p>\n            </div>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </form>\n  -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile-settings-form/profile-settings-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_data_service__ = __webpack_require__("../../../../../src/app/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileSettingsFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





class ProfileFormData {
    constructor(username, bio) { }
}
let ProfileSettingsFormComponent = class ProfileSettingsFormComponent {
    constructor(db, af, us, fb) {
        this.db = db;
        this.af = af;
        this.us = us;
        this.fb = fb;
        this.submitted = false;
        this.showpassword = false;
        this.model = null;
        this.nameBioForm = null;
        this.prevUname = "";
        this.prevEmail = "";
        this.nameCheck = true;
        this.emailCheck = true;
        this.formdata = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        us.getUid().subscribe(uid => {
            if (uid != null) {
                db.object('users/' + uid).subscribe(user => {
                    console.log(`username: ${user.username}, bio: ${user.bio}`);
                    this.model = new ProfileFormData(user.username, user.bio);
                    this.nameBioForm = fb.group({
                        name: [user.username, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required],
                        bio: [user.bio, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required]
                    });
                });
            }
        });
    }
    matchPass(pswd, pswdConf) {
        if (pswd == pswdConf) {
            return true;
        }
        else {
            return false;
        }
    }
    checkEmail(email) {
        if (email !== this.prevEmail && email.length <= 40 && email.length > 0 && email != null) {
            this.prevEmail = email;
            this.db.object('users/', {
                preserveSnapshot: true
            }).subscribe(snaps => {
                let emailTaken = false;
                snaps.forEach(snap => {
                    console.log(`uname: ${email} username: ${snap.val().email}`);
                    if (email === snap.val().email) {
                        emailTaken = true;
                        return;
                    }
                });
                console.log('\n');
                this.emailCheck = !emailTaken;
            });
        }
        return this.emailCheck;
    }
    checkUname(uname) {
        if (uname != null && uname !== this.prevUname && uname.length <= 40 && uname.length > 0) {
            this.prevUname = uname;
            this.db.object('users/', {
                preserveSnapshot: true
            }).subscribe(snaps => {
                let nametaken = false;
                snaps.forEach(snap => {
                    console.log(`uname: ${uname} username: ${snap.val().username}`);
                    if (uname === snap.val().username) {
                        nametaken = true;
                    }
                });
                console.log('\n');
                this.nameCheck = !nametaken;
            });
        }
        return this.nameCheck;
    }
    submitNameBio() {
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ProfileSettingsFormComponent.prototype, "formdata", void 0);
ProfileSettingsFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile-settings-form',
        template: __webpack_require__("../../../../../src/app/profile-settings-form/profile-settings-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile-settings-form/profile-settings-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__user_data_service__["a" /* UserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_data_service__["a" /* UserDataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */]) === "function" && _e || Object])
], ProfileSettingsFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile-settings-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".attribute-container{\n  border: 2px solid lightblue;\n  max-width: 500px;\n  margin: 2%;\n  border-radius: 5px;\n}\n\n#success{\n    font-size: 162%;\n    color: white;\n    background-color: #4BB543;\n    border-radius: 100%;\n    padding: 0px 7px 0px 10px;\n    margin: 0 0 -17px 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n  <div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"col-6\">\n        <div class=\"input-box\">\n          <h4>Name</h4>\n          <input type=\"text\" class=\"form-control\" pattern=\".{1,40}\"  [(ngModel)]=\"checkname\">\n          <div *ngIf=\"!checkUname(checkname)\" class=\"alert alert-danger\">\n            Username is taken\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <h4>Bio</h4>\n          <textarea class=\"form-control\" rows=\"7\" [(ngModel)]=\"bio\"></textarea>\n        </div>\n        <div class=\"input-box table\">\n          <tr>\n            <td>\n              <button class=\"btn btn-seccess\" type=\"button\" (click)=\"updateProfileData()\" [disabled]=\"!checkUname(checkname)\">Update Profile</button>\n            </td>\n            <td>\n              <div *ngIf=\"confirmUpdate\" id=\"success\">\n                <p>✓</p>\n              </div>\n            </td>\n          </tr>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_data_service__ = __webpack_require__("../../../../../src/app/user-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







let ProfileComponent = class ProfileComponent {
    constructor(firebaseApp, afAuth, router, db, userServ) {
        this.afAuth = afAuth;
        this.router = router;
        this.db = db;
        this.userServ = userServ;
        this.checkname = "";
        this.nameCheck = true;
        this.prevUname = "";
        this.confirmUpdate = false;
        this.afAuth.authState.subscribe(auth => {
            if (auth) {
                this.user = auth;
                this.database = firebaseApp.database();
                const dbRef = this.database.ref('users/' + this.user.uid);
                userServ.setUid(auth.uid);
                dbRef.child('bio').on('value', snap => {
                    this.bio = snap.val();
                });
                dbRef.child('username').on('value', snap => {
                    this.username = snap.val();
                    this.checkname = this.username;
                });
            }
        });
    }
    checkUname(uname) {
        if (uname === this.username) {
            this.nameCheck = true;
        }
        if (uname !== this.prevUname && uname.length <= 40 && uname.length > 0 && uname != null) {
            this.nameCheck = true;
            this.prevUname = uname;
            this.db.object('users/', {
                preserveSnapshot: true
            }).subscribe(snaps => {
                let nametaken = false;
                snaps.forEach(snap => {
                    if (uname === snap.val().username) {
                        this.nameCheck = false;
                    }
                });
            });
        }
        return this.nameCheck;
    }
    updateProfileData() {
        return __awaiter(this, void 0, void 0, function* () {
            this.db.object('users/' + this.user.uid).update({ bio: this.bio });
            this.db.object('users/' + this.user.uid).update({ username: this.checkname });
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            this.confirmUpdate = true;
            yield sleep(1000);
            this.confirmUpdate = false;
        });
    }
};
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* FirebaseApp */])),
    __metadata("design:paramtypes", [typeof (_a = ((_b = (typeof __WEBPACK_IMPORTED_MODULE_5_firebase__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_firebase__).app) && _b).App) === "function" && _a || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__user_data_service__["a" /* UserDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__user_data_service__["a" /* UserDataService */]) === "function" && _f || Object])
], ProfileComponent);

var _b, _a, _c, _d, _e, _f;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup-form/signup-form-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SignupFormData {
    constructor(email, pass, username, passConf) {
        this.email = email;
        this.pass = pass;
        this.username = username;
        this.passConf = passConf;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SignupFormData;

//# sourceMappingURL=signup-form-data.js.map

/***/ }),

/***/ "../../../../../src/app/signup-form/signup-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup-form/signup-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form (ngSubmit)=\"onSubmit()\" #emailPassForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" required [(ngModel)]=\"model.username\" name=\"username\" pattern=\".{1,40}\"\n        placeholder=\"\" #username=\"ngModel\">\n\n      <div *ngIf=\"!checkUname(model.username)\" class=\"alert alert-danger\">\n        Username is taken\n      </div>\n      <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">\n        Between 1 and 40 Characters\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"text\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"model.email\" name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n        placeholder=\"\" #email=\"ngModel\">\n      <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\n        Email is invalid\n      </div>\n      <div *ngIf=\"!checkEmail(model.email)\" class=\"alert alert-danger\">\n        Email is taken\n      </div>\n    </div>\n    <div class=\"form-group\"> \n      <label for=\"pass\">Password</label>\n      <input class=\"form-control\" id=\"pass\" required type=\"password\" [(ngModel)]=\"model.pass\" name=\"pass\" pattern=\".{8,40}\" placeholder=\"\"\n        #pass=\"ngModel\">\n      <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\n        Between 8 and 40 characters\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passConf\">Confirm Password</label>\n      <input class=\"form-control\" id=\"passConf\" required [(ngModel)]=\"model.passConf\" type=\"password\" name=\"passConf\" placeholder=\"\"\n        #passConf=\"ngModel\">\n      <div [hidden]=\"matchPass(model.pass, model.passConf) || passConf.pristine\" class=\"alert alert-danger\">\n        Must match password\n      </div>\n    </div>\n\n    <button (submitdata)=\"[model.email, model.pass, model.username]\" type=\"submit\" class=\"btn btn-seccess\" [disabled]=\"!emailPassForm.form.valid ||!matchPass(model.pass, model.passConf) || !checkUname(model.username)\">Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup-form/signup-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_form_data__ = __webpack_require__("../../../../../src/app/signup-form/signup-form-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SignupFormComponent = class SignupFormComponent {
    constructor(db) {
        this.db = db;
        this.submitted = false;
        this.showpassword = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__signup_form_data__["a" /* SignupFormData */]("", "", "", "");
        this.prevUname = "";
        this.prevEmail = "";
        this.nameCheck = true;
        this.emailCheck = true;
        this.formdata = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    matchPass(pswd, pswdConf) {
        if (pswd == pswdConf) {
            return true;
        }
        else {
            return false;
        }
    }
    checkEmail(email) {
        if (email !== this.prevEmail && email.length <= 40 && email.length > 0 && email != null) {
            this.prevEmail = email;
            this.db.object('users/', {
                preserveSnapshot: true
            }).subscribe(snaps => {
                let emailTaken = false;
                snaps.forEach(snap => {
                    console.log(`uname: ${email} username: ${snap.val().email}`);
                    if (email === snap.val().email) {
                        emailTaken = true;
                        return;
                    }
                });
                console.log('\n');
                this.emailCheck = !emailTaken;
            });
        }
        return this.emailCheck;
    }
    checkUname(uname) {
        if (uname !== this.prevUname && uname.length <= 40 && uname.length > 0 && uname != null) {
            this.prevUname = uname;
            this.db.object('users/', {
                preserveSnapshot: true
            }).subscribe(snaps => {
                let nametaken = false;
                snaps.forEach(snap => {
                    console.log(`uname: ${uname} username: ${snap.val().username}`);
                    if (uname === snap.val().username) {
                        nametaken = true;
                    }
                });
                console.log('\n');
                this.nameCheck = !nametaken;
            });
        }
        return this.nameCheck;
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SignupFormComponent.prototype, "formdata", void 0);
SignupFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup-form',
        template: __webpack_require__("../../../../../src/app/signup-form/signup-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup-form/signup-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], SignupFormComponent);

var _a, _b;
//# sourceMappingURL=signup-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#signup-container {\n  background-color: rgba(0, 188, 185, .1);\n  margin: 2%;\n  padding: 2%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n  <div class=\"container\">\n    <h1>Sign Up</h1>\n    <div class=\"row justify-content-md-center\">\n      <div class=\"col-7\" id=\"signup-container\">\n        <app-signup-form (formdata)=\"setEmailpass($event)\"></app-signup-form>\n      </div>\n    </div>\n    <button class=\"btn btn-seccess\" (click)=\"backToLogin()\">Back</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SignupComponent = class SignupComponent {
    constructor(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    ngOnInit() {
    }
    setEmailpass(formdata) {
        this.model = formdata;
        this.afAuth.auth.createUserWithEmailAndPassword(this.model.email, this.model.pass);
        this.afAuth.auth.onAuthStateChanged(auth => {
            if (auth) {
                this.router.navigateByUrl('/members');
            }
        });
    }
    backToLogin() {
        this.router.navigateByUrl('/login');
    }
};
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let UserDataService = class UserDataService {
    constructor(af) {
        this.af = af;
        this.uid = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.inquireUid = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    setUid(uid) { this.uid.next(uid); }
    getUid() { return this.uid.asObservable(); }
    setInquireUid(uid) { this.inquireUid.next(uid); }
    getInquireUid() { return this.inquireUid.asObservable(); }
    resetAuth() {
        this.af.authState.subscribe(user => {
            if (user) {
                this.uid.next(user.uid);
            }
        });
    }
};
UserDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
], UserDataService);

var _a;
//# sourceMappingURL=user-data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map