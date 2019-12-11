(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js ***!
  \************************************************************************************/
/*! exports provided: FontAwesomeModule, FaIconComponent, FaIconService, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeModule", function() { return FontAwesomeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaIconComponent", function() { return FaIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaIconService", function() { return FaIconService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaLayersComponent", function() { return FaLayersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaLayersTextComponent", function() { return FaLayersTextComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaLayersCounterComponent", function() { return FaLayersCounterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FaLayersTextBaseComponent; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Returns if is IconLookup or not.
  @type {?} */
var isIconLookup = function (i) {
    return (/** @type {?} */ (i)).prefix !== undefined && (/** @type {?} */ (i)).iconName !== undefined;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Normalizing icon spec.
  @type {?} */
var faNormalizeIconSpec = function (iconSpec, defaultPrefix) {
    if (defaultPrefix === void 0) { defaultPrefix = 'fas'; }
    if (typeof iconSpec === 'undefined' || iconSpec === null) {
        return null;
    }
    if (isIconLookup(iconSpec)) {
        return iconSpec;
    }
    if (Array.isArray(iconSpec) && (/** @type {?} */ (iconSpec)).length === 2) {
        return { prefix: iconSpec[0], iconName: iconSpec[1] };
    }
    if (typeof iconSpec === 'string') {
        return { prefix: defaultPrefix, iconName: iconSpec };
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var objectWithKey = function (key, value) {
    var _a;
    return (Array.isArray(value) && value.length > 0) || (!Array.isArray(value) && value) ? (_a = {}, _a[key] = value, _a) : {};
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Fontawesome class list.
 * Returns classes array by props.
  @type {?} */
var faClassList = function (props) {
    var _a;
    /** @type {?} */
    var classes = (_a = {
            'fa-spin': props.spin,
            'fa-pulse': props.pulse,
            'fa-fw': props.fixedWidth,
            'fa-border': props.border,
            'fa-li': props.listItem,
            'fa-inverse': props.inverse,
            'fa-layers-counter': props.counter,
            'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
            'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
        },
        _a["fa-" + props.size] = props.size !== null,
        _a["fa-rotate-" + props.rotate] = props.rotate !== null,
        _a["fa-pull-" + props.pull] = props.pull !== null,
        _a);
    return Object.keys(classes)
        .map(function (key) { return (classes[key] ? key : null); })
        .filter(function (key) { return key; });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var faWarnIfIconHtmlMissing = function (iconObj, iconSpec) {
    if (iconSpec && !iconObj) {
        console.error("FontAwesome: Could not find icon with iconName=" + iconSpec.iconName + " and prefix=" + iconSpec.prefix);
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var faWarnIfIconSpecMissing = function (iconSpec) {
    if (!iconSpec) {
        console.error('FontAwesome: Could not find icon. ' +
            "It looks like you've provided a null or undefined icon object to this component.");
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var faNotFoundIconHtml = "<svg class=\"" + _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["config"].replacementClass + "\" viewBox=\"0 0 448 512\"></svg><!--icon not found-->";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FaIconService = /** @class */ (function () {
    function FaIconService() {
        this.defaultPrefix = 'fas';
    }
    FaIconService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ FaIconService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function FaIconService_Factory() { return new FaIconService(); }, token: FaIconService, providedIn: "root" });
    return FaIconService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Fontawesome icon.
 */
var FaIconComponent = /** @class */ (function () {
    function FaIconComponent(sanitizer, iconService) {
        this.sanitizer = sanitizer;
        this.iconService = iconService;
        this.classes = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FaIconComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes) {
            this.updateIconSpec();
            this.updateParams();
            this.updateIcon();
            this.renderIcon();
        }
    };
    /**
     * Updating icon spec.
     * @return {?}
     */
    FaIconComponent.prototype.updateIconSpec = /**
     * Updating icon spec.
     * @return {?}
     */
    function () {
        this.iconSpec = faNormalizeIconSpec(this.iconProp, this.iconService.defaultPrefix);
    };
    /**
     * Updating params by component props.
     * @return {?}
     */
    FaIconComponent.prototype.updateParams = /**
     * Updating params by component props.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classOpts = {
            flip: this.flip,
            spin: this.spin,
            pulse: this.pulse,
            border: this.border,
            inverse: this.inverse,
            listItem: this.listItem,
            size: this.size || null,
            pull: this.pull || null,
            rotate: this.rotate || null,
            fixedWidth: this.fixedWidth
        };
        /** @type {?} */
        var classes = objectWithKey('classes', Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(faClassList(classOpts), this.classes));
        /** @type {?} */
        var mask = objectWithKey('mask', faNormalizeIconSpec(this.mask, this.iconService.defaultPrefix));
        /** @type {?} */
        var parsedTransform = typeof this.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(this.transform) : this.transform;
        /** @type {?} */
        var transform = objectWithKey('transform', parsedTransform);
        this.params = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ title: this.title }, transform, classes, mask, { styles: this.styles, symbol: this.symbol });
    };
    /**
     * Updating icon by params and icon spec.
     * @return {?}
     */
    FaIconComponent.prototype.updateIcon = /**
     * Updating icon by params and icon spec.
     * @return {?}
     */
    function () {
        this.icon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["icon"])(this.iconSpec, this.params);
    };
    /**
     * Rendering icon.
     * @return {?}
     */
    FaIconComponent.prototype.renderIcon = /**
     * Rendering icon.
     * @return {?}
     */
    function () {
        faWarnIfIconSpecMissing(this.iconSpec);
        faWarnIfIconHtmlMissing(this.icon, this.iconSpec);
        this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(this.icon ? this.icon.html.join('\n') : faNotFoundIconHtml);
    };
    FaIconComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'fa-icon',
                    template: "",
                    host: {
                        class: 'ng-fa-icon',
                    }
                }] }
    ];
    /** @nocollapse */
    FaIconComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: FaIconService }
    ]; };
    FaIconComponent.propDecorators = {
        iconProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['icon',] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        spin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        pulse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        mask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        flip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        pull: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        symbol: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        listItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        fixedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        renderedIconHTML: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['innerHTML',] }]
    };
    return FaIconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers.
 */
var FaLayersComponent = /** @class */ (function () {
    function FaLayersComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    FaLayersComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.elementRef.nativeElement, 'fa-layers');
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FaLayersComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('size' in changes) {
            if (changes["size"].currentValue != null) {
                this.renderer.addClass(this.elementRef.nativeElement, "fa-" + changes["size"].currentValue);
            }
            if (changes["size"].previousValue != null) {
                this.renderer.removeClass(this.elementRef.nativeElement, "fa-" + changes["size"].previousValue);
            }
        }
    };
    FaLayersComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'fa-layers',
                    template: "<ng-content select=\"fa-icon, fa-layers-text, fa-layers-counter\"></ng-content>"
                }] }
    ];
    /** @nocollapse */
    FaLayersComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    FaLayersComponent.propDecorators = {
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        fixedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.fa-fw',] }]
    };
    return FaLayersComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Warns if parent component not existing.
  @type {?} */
var faWarnIfParentNotExist = function (parent, parentName, childName) {
    if (!parent) {
        console.error("FontAwesome: " + childName + " should be used as child of " + parentName + " only.");
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var FaLayersTextBaseComponent = /** @class */ (function () {
    function FaLayersTextBaseComponent(parent, sanitizer) {
        this.parent = parent;
        this.sanitizer = sanitizer;
        this.classes = [];
        faWarnIfParentNotExist(this.parent, 'FaLayersComponent', this.constructor.name);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FaLayersTextBaseComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes) {
            this.updateParams();
            this.updateContent();
        }
    };
    /**
     * Updating content by params and content.
     * @return {?}
     */
    FaLayersTextBaseComponent.prototype.updateContent = /**
     * Updating content by params and content.
     * @return {?}
     */
    function () {
        this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(this.renderFontawesomeObject(this.content || '', this.params).html.join('\n'));
    };
    FaLayersTextBaseComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    FaLayersTextBaseComponent.ctorParameters = function () { return [
        { type: FaLayersComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FaLayersComponent; }),] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
    ]; };
    FaLayersTextBaseComponent.propDecorators = {
        renderedHTML: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['innerHTML',] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return FaLayersTextBaseComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers text.
 */
var FaLayersTextComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(FaLayersTextComponent, _super);
    function FaLayersTextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Updating params by component props.
     */
    /**
     * Updating params by component props.
     * @return {?}
     */
    FaLayersTextComponent.prototype.updateParams = /**
     * Updating params by component props.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classOpts = {
            flip: this.flip,
            spin: this.spin,
            pulse: this.pulse,
            border: this.border,
            inverse: this.inverse,
            listItem: this.listItem,
            size: this.size || null,
            pull: this.pull || null,
            rotate: this.rotate || null,
            fixedWidth: this.fixedWidth
        };
        /** @type {?} */
        var classes = objectWithKey('classes', Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(faClassList(classOpts), this.classes));
        /** @type {?} */
        var parsedTransform = typeof this.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(this.transform) : this.transform;
        /** @type {?} */
        var transform = objectWithKey('transform', parsedTransform);
        this.params = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, transform, classes, { title: this.title, styles: this.styles });
    };
    /**
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    FaLayersTextComponent.prototype.renderFontawesomeObject = /**
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    function (content, params) {
        return Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["text"])(content, params);
    };
    FaLayersTextComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'fa-layers-text',
                    template: '',
                    host: {
                        class: 'ng-fa-layers-text'
                    }
                }] }
    ];
    FaLayersTextComponent.propDecorators = {
        spin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        pulse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        flip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        pull: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        listItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        fixedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return FaLayersTextComponent;
}(FaLayersTextBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Fontawesome layers counter.
 */
var FaLayersCounterComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(FaLayersCounterComponent, _super);
    function FaLayersCounterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Updating params by component props.
     */
    /**
     * Updating params by component props.
     * @return {?}
     */
    FaLayersCounterComponent.prototype.updateParams = /**
     * Updating params by component props.
     * @return {?}
     */
    function () {
        this.params = {
            title: this.title,
            classes: this.classes,
            styles: this.styles,
        };
    };
    /**
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    FaLayersCounterComponent.prototype.renderFontawesomeObject = /**
     * @param {?} content
     * @param {?=} params
     * @return {?}
     */
    function (content, params) {
        return Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["counter"])(content, params);
    };
    FaLayersCounterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'fa-layers-counter',
                    template: '',
                    host: {
                        class: 'ng-fa-layers-counter'
                    }
                }] }
    ];
    return FaLayersCounterComponent;
}(FaLayersTextBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FontAwesomeModule = /** @class */ (function () {
    function FontAwesomeModule() {
    }
    FontAwesomeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                    declarations: [
                        FaIconComponent,
                        FaLayersComponent,
                        FaLayersTextComponent,
                        FaLayersCounterComponent,
                    ],
                    exports: [
                        FaIconComponent,
                        FaLayersComponent,
                        FaLayersTextComponent,
                        FaLayersCounterComponent,
                    ],
                },] }
    ];
    return FontAwesomeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1mb250YXdlc29tZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvc2hhcmVkL3V0aWxzL2lzLWljb24tbG9va3VwLnV0aWwudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL3NoYXJlZC91dGlscy9ub3JtYWxpemUtaWNvbi1zcGVjLnV0aWwudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL3NoYXJlZC91dGlscy9vYmplY3Qtd2l0aC1rZXlzLnV0aWwudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL3NoYXJlZC91dGlscy9jbGFzc2xpc3QudXRpbC50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvc2hhcmVkL2Vycm9ycy93YXJuLWlmLWljb24taHRtbC1taXNzaW5nLnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9zaGFyZWQvZXJyb3JzL3dhcm4taWYtaWNvbi1zcGVjLW1pc3NpbmcudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL3NoYXJlZC9lcnJvcnMvbm90LWZvdW5kLWljb24taHRtbC50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvaWNvbi9pY29uLnNlcnZpY2UudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL2ljb24vaWNvbi5jb21wb25lbnQudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL2xheWVycy9sYXllcnMuY29tcG9uZW50LnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9zaGFyZWQvZXJyb3JzL3dhcm4taWYtcGFyZW50LW5vdC1leGlzdC50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvbGF5ZXJzL2xheWVycy10ZXh0LWJhc2UuY29tcG9uZW50LnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9sYXllcnMvbGF5ZXJzLXRleHQuY29tcG9uZW50LnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9sYXllcnMvbGF5ZXJzLWNvdW50ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9mb250YXdlc29tZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJY29uTG9va3VwLCBJY29uUHJvcH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuLyoqXG4gKiBSZXR1cm5zIGlmIGlzIEljb25Mb29rdXAgb3Igbm90LlxuICovXG5leHBvcnQgY29uc3QgaXNJY29uTG9va3VwID0gKGk6IEljb25Qcm9wKTogaSBpcyBJY29uTG9va3VwID0+IHtcbiAgcmV0dXJuICg8SWNvbkxvb2t1cD5pKS5wcmVmaXggIT09IHVuZGVmaW5lZCAmJiAoPEljb25Mb29rdXA+aSkuaWNvbk5hbWUgIT09IHVuZGVmaW5lZDtcbn07XG4iLCJpbXBvcnQgeyBJY29uTG9va3VwLCBJY29uUHJvcCwgSWNvblByZWZpeCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmltcG9ydCB7IGlzSWNvbkxvb2t1cCB9IGZyb20gJy4vaXMtaWNvbi1sb29rdXAudXRpbCc7XG5cbi8qKlxuICogTm9ybWFsaXppbmcgaWNvbiBzcGVjLlxuICovXG5leHBvcnQgY29uc3QgZmFOb3JtYWxpemVJY29uU3BlYyA9IChpY29uU3BlYzogSWNvblByb3AsIGRlZmF1bHRQcmVmaXg6IEljb25QcmVmaXggPSAnZmFzJyk6IEljb25Mb29rdXAgPT4ge1xuXG4gIGlmICh0eXBlb2YgaWNvblNwZWMgPT09ICd1bmRlZmluZWQnIHx8IGljb25TcGVjID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaXNJY29uTG9va3VwKGljb25TcGVjKSkge1xuICAgIHJldHVybiBpY29uU3BlYztcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGljb25TcGVjKSAmJiAoPEFycmF5PHN0cmluZz4+aWNvblNwZWMpLmxlbmd0aCA9PT0gMikge1xuICAgIHJldHVybiB7IHByZWZpeDogaWNvblNwZWNbMF0sIGljb25OYW1lOiBpY29uU3BlY1sxXSB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpY29uU3BlYyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4geyBwcmVmaXg6IGRlZmF1bHRQcmVmaXgsIGljb25OYW1lOiBpY29uU3BlYyB9O1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IG9iamVjdFdpdGhLZXkgPSA8VD4oa2V5OiBzdHJpbmcsIHZhbHVlOiBUKToge1tpZDogc3RyaW5nXTogVH0gPT4ge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDApIHx8ICghQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUpID8geyBba2V5XTogdmFsdWUgfSA6IHt9O1xufTtcbiIsImltcG9ydCB7IEZhUHJvcHMgfSBmcm9tICcuLi9tb2RlbHMvcHJvcHMubW9kZWwnO1xuXG4vKipcbiAqIEZvbnRhd2Vzb21lIGNsYXNzIGxpc3QuXG4gKiBSZXR1cm5zIGNsYXNzZXMgYXJyYXkgYnkgcHJvcHMuXG4gKi9cbmV4cG9ydCBjb25zdCBmYUNsYXNzTGlzdCA9IChwcm9wczogRmFQcm9wcyk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAnZmEtc3Bpbic6IHByb3BzLnNwaW4sXG4gICAgJ2ZhLXB1bHNlJzogcHJvcHMucHVsc2UsXG4gICAgJ2ZhLWZ3JzogcHJvcHMuZml4ZWRXaWR0aCxcbiAgICAnZmEtYm9yZGVyJzogcHJvcHMuYm9yZGVyLFxuICAgICdmYS1saSc6IHByb3BzLmxpc3RJdGVtLFxuICAgICdmYS1pbnZlcnNlJzogcHJvcHMuaW52ZXJzZSxcbiAgICAnZmEtbGF5ZXJzLWNvdW50ZXInOiBwcm9wcy5jb3VudGVyLFxuICAgICdmYS1mbGlwLWhvcml6b250YWwnOiBwcm9wcy5mbGlwID09PSAnaG9yaXpvbnRhbCcgfHwgcHJvcHMuZmxpcCA9PT0gJ2JvdGgnLFxuICAgICdmYS1mbGlwLXZlcnRpY2FsJzogcHJvcHMuZmxpcCA9PT0gJ3ZlcnRpY2FsJyB8fCBwcm9wcy5mbGlwID09PSAnYm90aCcsXG4gICAgW2BmYS0ke3Byb3BzLnNpemV9YF06IHByb3BzLnNpemUgIT09IG51bGwsXG4gICAgW2BmYS1yb3RhdGUtJHtwcm9wcy5yb3RhdGV9YF06IHByb3BzLnJvdGF0ZSAhPT0gbnVsbCxcbiAgICBbYGZhLXB1bGwtJHtwcm9wcy5wdWxsfWBdOiBwcm9wcy5wdWxsICE9PSBudWxsXG4gIH07XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNsYXNzZXMpXG4gICAgLm1hcChrZXkgPT4gKGNsYXNzZXNba2V5XSA/IGtleSA6IG51bGwpKVxuICAgIC5maWx0ZXIoa2V5ID0+IGtleSk7XG59O1xuIiwiaW1wb3J0IHsgSWNvbiwgSWNvbkxvb2t1cCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmV4cG9ydCBjb25zdCBmYVdhcm5JZkljb25IdG1sTWlzc2luZyA9IChpY29uT2JqOiBJY29uLCBpY29uU3BlYzogSWNvbkxvb2t1cCkgPT4ge1xuICBpZiAoaWNvblNwZWMgJiYgIWljb25PYmopIHtcbiAgICBjb25zb2xlLmVycm9yKGBGb250QXdlc29tZTogQ291bGQgbm90IGZpbmQgaWNvbiB3aXRoIGljb25OYW1lPSR7aWNvblNwZWMuaWNvbk5hbWV9IGFuZCBwcmVmaXg9JHtpY29uU3BlYy5wcmVmaXh9YCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBJY29uTG9va3VwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuZXhwb3J0IGNvbnN0IGZhV2FybklmSWNvblNwZWNNaXNzaW5nID0gKGljb25TcGVjOiBJY29uTG9va3VwKSA9PiB7XG4gIGlmICghaWNvblNwZWMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGb250QXdlc29tZTogQ291bGQgbm90IGZpbmQgaWNvbi4gJyArXG4gICAgICBgSXQgbG9va3MgbGlrZSB5b3UndmUgcHJvdmlkZWQgYSBudWxsIG9yIHVuZGVmaW5lZCBpY29uIG9iamVjdCB0byB0aGlzIGNvbXBvbmVudC5gKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmV4cG9ydCBjb25zdCBmYU5vdEZvdW5kSWNvbkh0bWwgPSBgPHN2ZyBjbGFzcz1cIiR7Y29uZmlnLnJlcGxhY2VtZW50Q2xhc3N9XCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PC9zdmc+PCEtLWljb24gbm90IGZvdW5kLS0+YDtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25QcmVmaXggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBGYUljb25TZXJ2aWNlIHtcbiAgZGVmYXVsdFByZWZpeDogSWNvblByZWZpeCA9ICdmYXMnO1xufVxuIiwiaW1wb3J0IHtcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGljb24sXG4gIEljb24sXG4gIHBhcnNlLFxuICBTdHlsZXMsXG4gIFB1bGxQcm9wLFxuICBJY29uUHJvcCxcbiAgU2l6ZVByb3AsXG4gIEZsaXBQcm9wLFxuICBGYVN5bWJvbCxcbiAgVHJhbnNmb3JtLFxuICBJY29uUGFyYW1zLFxuICBJY29uTG9va3VwLFxuICBSb3RhdGVQcm9wXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IGZhTm9ybWFsaXplSWNvblNwZWMgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMvbm9ybWFsaXplLWljb24tc3BlYy51dGlsJztcbmltcG9ydCB7IEZhUHJvcHMgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL3Byb3BzLm1vZGVsJztcbmltcG9ydCB7IG9iamVjdFdpdGhLZXkgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMvb2JqZWN0LXdpdGgta2V5cy51dGlsJztcbmltcG9ydCB7IGZhQ2xhc3NMaXN0IH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzL2NsYXNzbGlzdC51dGlsJztcbmltcG9ydCB7IGZhV2FybklmSWNvbkh0bWxNaXNzaW5nIH0gZnJvbSAnLi4vc2hhcmVkL2Vycm9ycy93YXJuLWlmLWljb24taHRtbC1taXNzaW5nJztcbmltcG9ydCB7IGZhV2FybklmSWNvblNwZWNNaXNzaW5nIH0gZnJvbSAnLi4vc2hhcmVkL2Vycm9ycy93YXJuLWlmLWljb24tc3BlYy1taXNzaW5nJztcbmltcG9ydCB7IGZhTm90Rm91bmRJY29uSHRtbCB9IGZyb20gJy4uL3NoYXJlZC9lcnJvcnMvbm90LWZvdW5kLWljb24taHRtbCc7XG5pbXBvcnQgeyBGYUljb25TZXJ2aWNlIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuXG4vKipcbiAqIEZvbnRhd2Vzb21lIGljb24uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhLWljb24nLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25nLWZhLWljb24nLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEZhSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdpY29uJykgaWNvblByb3A6IEljb25Qcm9wO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZztcbiAgQElucHV0KCkgc3Bpbj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHB1bHNlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbWFzaz86IEljb25Qcm9wO1xuICBASW5wdXQoKSBzdHlsZXM/OiBTdHlsZXM7XG4gIEBJbnB1dCgpIGZsaXA/OiBGbGlwUHJvcDtcbiAgQElucHV0KCkgc2l6ZT86IFNpemVQcm9wO1xuICBASW5wdXQoKSBwdWxsPzogUHVsbFByb3A7XG4gIEBJbnB1dCgpIGJvcmRlcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGludmVyc2U/OiBib29sZWFuO1xuICBASW5wdXQoKSBzeW1ib2w/OiBGYVN5bWJvbDtcbiAgQElucHV0KCkgbGlzdEl0ZW0/OiBib29sZWFuO1xuICBASW5wdXQoKSByb3RhdGU/OiBSb3RhdGVQcm9wO1xuICBASW5wdXQoKSBmaXhlZFdpZHRoPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY2xhc3Nlcz86IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgpIHRyYW5zZm9ybT86IHN0cmluZyB8IFRyYW5zZm9ybTtcblxuICBwdWJsaWMgaWNvbjogSWNvbjtcblxuICBASG9zdEJpbmRpbmcoJ2lubmVySFRNTCcpXG4gIHB1YmxpYyByZW5kZXJlZEljb25IVE1MOiBTYWZlSHRtbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIGljb25TZXJ2aWNlOiBGYUljb25TZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgcGFyYW1zOiBJY29uUGFyYW1zO1xuICBwcml2YXRlIGljb25TcGVjOiBJY29uTG9va3VwO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgdGhpcy51cGRhdGVJY29uU3BlYygpO1xuICAgICAgdGhpcy51cGRhdGVQYXJhbXMoKTtcbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgICAgdGhpcy5yZW5kZXJJY29uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0aW5nIGljb24gc3BlYy5cbiAgICovXG4gIHByaXZhdGUgdXBkYXRlSWNvblNwZWMoKSB7XG4gICAgdGhpcy5pY29uU3BlYyA9IGZhTm9ybWFsaXplSWNvblNwZWModGhpcy5pY29uUHJvcCwgdGhpcy5pY29uU2VydmljZS5kZWZhdWx0UHJlZml4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBwYXJhbXMgYnkgY29tcG9uZW50IHByb3BzLlxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVQYXJhbXMoKSB7XG4gICAgY29uc3QgY2xhc3NPcHRzOiBGYVByb3BzID0ge1xuICAgICAgZmxpcDogdGhpcy5mbGlwLFxuICAgICAgc3BpbjogdGhpcy5zcGluLFxuICAgICAgcHVsc2U6IHRoaXMucHVsc2UsXG4gICAgICBib3JkZXI6IHRoaXMuYm9yZGVyLFxuICAgICAgaW52ZXJzZTogdGhpcy5pbnZlcnNlLFxuICAgICAgbGlzdEl0ZW06IHRoaXMubGlzdEl0ZW0sXG4gICAgICBzaXplOiB0aGlzLnNpemUgfHwgbnVsbCxcbiAgICAgIHB1bGw6IHRoaXMucHVsbCB8fCBudWxsLFxuICAgICAgcm90YXRlOiB0aGlzLnJvdGF0ZSB8fCBudWxsLFxuICAgICAgZml4ZWRXaWR0aDogdGhpcy5maXhlZFdpZHRoXG4gICAgfTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBvYmplY3RXaXRoS2V5KCdjbGFzc2VzJywgWy4uLmZhQ2xhc3NMaXN0KGNsYXNzT3B0cyksIC4uLnRoaXMuY2xhc3Nlc10pO1xuICAgIGNvbnN0IG1hc2sgPSBvYmplY3RXaXRoS2V5KCdtYXNrJywgZmFOb3JtYWxpemVJY29uU3BlYyh0aGlzLm1hc2ssIHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdFByZWZpeCkpO1xuICAgIGNvbnN0IHBhcnNlZFRyYW5zZm9ybSA9IHR5cGVvZiB0aGlzLnRyYW5zZm9ybSA9PT0gJ3N0cmluZycgPyBwYXJzZS50cmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pIDogdGhpcy50cmFuc2Zvcm07XG4gICAgY29uc3QgdHJhbnNmb3JtID0gb2JqZWN0V2l0aEtleSgndHJhbnNmb3JtJywgcGFyc2VkVHJhbnNmb3JtKTtcblxuICAgIHRoaXMucGFyYW1zID0ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAuLi50cmFuc2Zvcm0sXG4gICAgICAuLi5jbGFzc2VzLFxuICAgICAgLi4ubWFzayxcbiAgICAgIHN0eWxlczogdGhpcy5zdHlsZXMsXG4gICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBpY29uIGJ5IHBhcmFtcyBhbmQgaWNvbiBzcGVjLlxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVJY29uKCkge1xuICAgIHRoaXMuaWNvbiA9IGljb24odGhpcy5pY29uU3BlYywgdGhpcy5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcmluZyBpY29uLlxuICAgKi9cbiAgcHJpdmF0ZSByZW5kZXJJY29uKCkge1xuICAgIGZhV2FybklmSWNvblNwZWNNaXNzaW5nKHRoaXMuaWNvblNwZWMpO1xuICAgIGZhV2FybklmSWNvbkh0bWxNaXNzaW5nKHRoaXMuaWNvbiwgdGhpcy5pY29uU3BlYyk7XG5cbiAgICB0aGlzLnJlbmRlcmVkSWNvbkhUTUwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChcbiAgICAgIHRoaXMuaWNvbiA/IHRoaXMuaWNvbi5odG1sLmpvaW4oJ1xcbicpIDogZmFOb3RGb3VuZEljb25IdG1sXG4gICAgKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2l6ZVByb3AgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG4vKipcbiAqIEZvbnRhd2Vzb21lIGxheWVycy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmEtbGF5ZXJzJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJmYS1pY29uLCBmYS1sYXllcnMtdGV4dCwgZmEtbGF5ZXJzLWNvdW50ZXJcIj48L25nLWNvbnRlbnQ+YCxcbn0pXG5leHBvcnQgY2xhc3MgRmFMYXllcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHNpemU/OiBTaXplUHJvcDtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZhLWZ3JylcbiAgZml4ZWRXaWR0aD86IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZmEtbGF5ZXJzJyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCdzaXplJyBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5zaXplLmN1cnJlbnRWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBmYS0ke2NoYW5nZXMuc2l6ZS5jdXJyZW50VmFsdWV9YCk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlcy5zaXplLnByZXZpb3VzVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgZmEtJHtjaGFuZ2VzLnNpemUucHJldmlvdXNWYWx1ZX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogV2FybnMgaWYgcGFyZW50IGNvbXBvbmVudCBub3QgZXhpc3RpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBmYVdhcm5JZlBhcmVudE5vdEV4aXN0ID0gKHBhcmVudDogYW55LCBwYXJlbnROYW1lOiBzdHJpbmcsIGNoaWxkTmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmICghcGFyZW50KSB7XG4gICAgY29uc29sZS5lcnJvcihgRm9udEF3ZXNvbWU6ICR7Y2hpbGROYW1lfSBzaG91bGQgYmUgdXNlZCBhcyBjaGlsZCBvZiAke3BhcmVudE5hbWV9IG9ubHkuYCk7XG4gIH1cbn07XG4iLCJpbXBvcnQge1xuICBJbnB1dCxcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBPcHRpb25hbCxcbiAgT25DaGFuZ2VzLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFN0eWxlcyxcbiAgRm9udGF3ZXNvbWVPYmplY3QsXG4gIFRleHRQYXJhbXNcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgRmFMYXllcnNDb21wb25lbnQgfSBmcm9tICcuL2xheWVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgZmFXYXJuSWZQYXJlbnROb3RFeGlzdCB9IGZyb20gJy4uL3NoYXJlZC9lcnJvcnMvd2Fybi1pZi1wYXJlbnQtbm90LWV4aXN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhTGF5ZXJzVGV4dEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBIb3N0QmluZGluZygnaW5uZXJIVE1MJylcbiAgcHVibGljIHJlbmRlcmVkSFRNTDogU2FmZUh0bWw7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IEZhTGF5ZXJzQ29tcG9uZW50KSkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBwYXJlbnQ6IEZhTGF5ZXJzQ29tcG9uZW50LFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcblxuICAgIGZhV2FybklmUGFyZW50Tm90RXhpc3QodGhpcy5wYXJlbnQsICdGYUxheWVyc0NvbXBvbmVudCcsIHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFyYW1zOiBUZXh0UGFyYW1zO1xuXG4gIEBJbnB1dCgpIHByb3RlY3RlZCBjb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByb3RlY3RlZCB0aXRsZT86IHN0cmluZztcbiAgQElucHV0KCkgcHJvdGVjdGVkIHN0eWxlcz86IFN0eWxlcztcbiAgQElucHV0KCkgcHJvdGVjdGVkIGNsYXNzZXM/OiBzdHJpbmdbXSA9IFtdO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgdGhpcy51cGRhdGVQYXJhbXMoKTtcbiAgICAgIHRoaXMudXBkYXRlQ29udGVudCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBwYXJhbXMgYnkgY29tcG9uZW50IHByb3BzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHVwZGF0ZVBhcmFtcygpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIEZvbnRhd2Vzb21lT2JqZWN0IHVzaW5nIHRoZSBjb250ZW50IGFuZCBwYXJhbXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVuZGVyRm9udGF3ZXNvbWVPYmplY3QoY29udGVudDogc3RyaW5nIHwgbnVtYmVyLCBwYXJhbXM/OiBUZXh0UGFyYW1zKTogRm9udGF3ZXNvbWVPYmplY3Q7XG5cbiAgLyoqXG4gICAqIFVwZGF0aW5nIGNvbnRlbnQgYnkgcGFyYW1zIGFuZCBjb250ZW50LlxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVDb250ZW50KCkge1xuICAgIHRoaXMucmVuZGVyZWRIVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoXG4gICAgICB0aGlzLnJlbmRlckZvbnRhd2Vzb21lT2JqZWN0KHRoaXMuY29udGVudCB8fCAnJywgdGhpcy5wYXJhbXMpLmh0bWwuam9pbignXFxuJylcbiAgICApO1xuICB9XG59XG5cbiIsImltcG9ydCB7XG4gIElucHV0LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgdGV4dCxcbiAgcGFyc2UsXG4gIFRleHQsXG4gIFRleHRQYXJhbXMsXG4gIFNpemVQcm9wLFxuICBGbGlwUHJvcCxcbiAgUHVsbFByb3AsXG4gIFRyYW5zZm9ybSxcbiAgUm90YXRlUHJvcFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgRmFMYXllcnNUZXh0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJzLXRleHQtYmFzZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBGYVByb3BzIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9wcm9wcy5tb2RlbCc7XG5pbXBvcnQgeyBvYmplY3RXaXRoS2V5IH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzL29iamVjdC13aXRoLWtleXMudXRpbCc7XG5pbXBvcnQgeyBmYUNsYXNzTGlzdCB9IGZyb20gJy4uL3NoYXJlZC91dGlscy9jbGFzc2xpc3QudXRpbCc7XG5cbi8qKlxuICogRm9udGF3ZXNvbWUgbGF5ZXJzIHRleHQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhLWxheWVycy10ZXh0JyxcbiAgdGVtcGxhdGU6ICcnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZy1mYS1sYXllcnMtdGV4dCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBGYUxheWVyc1RleHRDb21wb25lbnQgZXh0ZW5kcyBGYUxheWVyc1RleHRCYXNlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBzcGluPzogYm9vbGVhbjtcbiAgQElucHV0KCkgcHVsc2U/OiBib29sZWFuO1xuICBASW5wdXQoKSBmbGlwPzogRmxpcFByb3A7XG4gIEBJbnB1dCgpIHNpemU/OiBTaXplUHJvcDtcbiAgQElucHV0KCkgcHVsbD86IFB1bGxQcm9wO1xuICBASW5wdXQoKSBib3JkZXI/OiBib29sZWFuO1xuICBASW5wdXQoKSBpbnZlcnNlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbGlzdEl0ZW0/OiBib29sZWFuO1xuICBASW5wdXQoKSByb3RhdGU/OiBSb3RhdGVQcm9wO1xuICBASW5wdXQoKSBmaXhlZFdpZHRoPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdHJhbnNmb3JtPzogc3RyaW5nIHwgVHJhbnNmb3JtO1xuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBwYXJhbXMgYnkgY29tcG9uZW50IHByb3BzLlxuICAgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhcmFtcygpIHtcbiAgICBjb25zdCBjbGFzc09wdHM6IEZhUHJvcHMgPSB7XG4gICAgICBmbGlwOiB0aGlzLmZsaXAsXG4gICAgICBzcGluOiB0aGlzLnNwaW4sXG4gICAgICBwdWxzZTogdGhpcy5wdWxzZSxcbiAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXIsXG4gICAgICBpbnZlcnNlOiB0aGlzLmludmVyc2UsXG4gICAgICBsaXN0SXRlbTogdGhpcy5saXN0SXRlbSxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSB8fCBudWxsLFxuICAgICAgcHVsbDogdGhpcy5wdWxsIHx8IG51bGwsXG4gICAgICByb3RhdGU6IHRoaXMucm90YXRlIHx8IG51bGwsXG4gICAgICBmaXhlZFdpZHRoOiB0aGlzLmZpeGVkV2lkdGhcbiAgICB9O1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IG9iamVjdFdpdGhLZXkoJ2NsYXNzZXMnLCBbLi4uZmFDbGFzc0xpc3QoY2xhc3NPcHRzKSwgLi4udGhpcy5jbGFzc2VzXSk7XG4gICAgY29uc3QgcGFyc2VkVHJhbnNmb3JtID0gdHlwZW9mIHRoaXMudHJhbnNmb3JtID09PSAnc3RyaW5nJyA/IHBhcnNlLnRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSkgOiB0aGlzLnRyYW5zZm9ybTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBvYmplY3RXaXRoS2V5KCd0cmFuc2Zvcm0nLCBwYXJzZWRUcmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5wYXJhbXMgPSB7XG4gICAgICAuLi50cmFuc2Zvcm0sXG4gICAgICAuLi5jbGFzc2VzLFxuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBzdHlsZXM6IHRoaXMuc3R5bGVzXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJGb250YXdlc29tZU9iamVjdChjb250ZW50OiBzdHJpbmcsIHBhcmFtcz86IFRleHRQYXJhbXMpIHtcbiAgICByZXR1cm4gdGV4dChjb250ZW50LCBwYXJhbXMpO1xuICB9XG59XG5cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBjb3VudGVyLFxuICBDb3VudGVyLFxuICBDb3VudGVyUGFyYW1zLFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgRmFMYXllcnNUZXh0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJzLXRleHQtYmFzZS5jb21wb25lbnQnO1xuXG4vKipcbiAqIEZvbnRhd2Vzb21lIGxheWVycyBjb3VudGVyLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYS1sYXllcnMtY291bnRlcicsXG4gIHRlbXBsYXRlOiAnJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbmctZmEtbGF5ZXJzLWNvdW50ZXInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRmFMYXllcnNDb3VudGVyQ29tcG9uZW50IGV4dGVuZHMgRmFMYXllcnNUZXh0QmFzZUNvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFVwZGF0aW5nIHBhcmFtcyBieSBjb21wb25lbnQgcHJvcHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlUGFyYW1zKCkge1xuICAgIHRoaXMucGFyYW1zID0ge1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBzdHlsZXM6IHRoaXMuc3R5bGVzLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyRm9udGF3ZXNvbWVPYmplY3QoY29udGVudDogc3RyaW5nIHwgbnVtYmVyLCBwYXJhbXM/OiBDb3VudGVyUGFyYW1zKSB7XG4gICAgcmV0dXJuIGNvdW50ZXIoY29udGVudCwgcGFyYW1zKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEZhTGF5ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcnMvbGF5ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYUxheWVyc1RleHRDb21wb25lbnQgfSBmcm9tICcuL2xheWVycy9sYXllcnMtdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFMYXllcnNDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcnMvbGF5ZXJzLWNvdW50ZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZhSWNvbkNvbXBvbmVudCxcbiAgICBGYUxheWVyc0NvbXBvbmVudCxcbiAgICBGYUxheWVyc1RleHRDb21wb25lbnQsXG4gICAgRmFMYXllcnNDb3VudGVyQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRmFJY29uQ29tcG9uZW50LFxuICAgIEZhTGF5ZXJzQ29tcG9uZW50LFxuICAgIEZhTGF5ZXJzVGV4dENvbXBvbmVudCxcbiAgICBGYUxheWVyc0NvdW50ZXJDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvbnRBd2Vzb21lTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUtBLElBQWEsWUFBWSxHQUFHLFVBQUMsQ0FBVztJQUN0QyxPQUFPLG1CQUFhLENBQUMsR0FBRSxNQUFNLEtBQUssU0FBUyxJQUFJLG1CQUFhLENBQUMsR0FBRSxRQUFRLEtBQUssU0FBUyxDQUFDO0NBQ3ZGLENBQUM7Ozs7OztBQ0xGOzs7QUFLQSxJQUFhLG1CQUFtQixHQUFHLFVBQUMsUUFBa0IsRUFBRSxhQUFpQztJQUFqQyw4QkFBQSxFQUFBLHFCQUFpQztJQUV2RixJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1FBQ3hELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUMxQixPQUFPLFFBQVEsQ0FBQztLQUNqQjtJQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBZ0IsUUFBUSxHQUFFLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQ3ZEO0lBRUQsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7UUFDaEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO0tBQ3REO0NBQ0YsQ0FBQzs7Ozs7OztBQ3hCRixJQUFhLGFBQWEsR0FBRyxVQUFJLEdBQVcsRUFBRSxLQUFROztJQUNwRCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLGFBQUssR0FBQyxHQUFHLElBQUcsS0FBSyxRQUFLLEVBQUUsQ0FBQztDQUMvRyxDQUFDOzs7Ozs7Ozs7O0FDSUYsSUFBYSxXQUFXLEdBQUcsVUFBQyxLQUFjOzs7SUFDeEMsSUFBTSxPQUFPO1lBQ1gsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ3JCLFVBQVUsRUFBRSxLQUFLLENBQUMsS0FBSztZQUN2QixPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDekIsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3pCLE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDM0IsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDbEMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNO1lBQzFFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssTUFBTTs7UUFDdEUsR0FBQyxRQUFNLEtBQUssQ0FBQyxJQUFNLElBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJO1FBQ3pDLEdBQUMsZUFBYSxLQUFLLENBQUMsTUFBUSxJQUFHLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSTtRQUNwRCxHQUFDLGFBQVcsS0FBSyxDQUFDLElBQU0sSUFBRyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUk7WUFDOUM7SUFFRixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3hCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxRQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFDLENBQUM7U0FDdkMsTUFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxHQUFBLENBQUMsQ0FBQztDQUN2QixDQUFDOzs7Ozs7O0FDdkJGLElBQWEsdUJBQXVCLEdBQUcsVUFBQyxPQUFhLEVBQUUsUUFBb0I7SUFDekUsSUFBSSxRQUFRLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxvREFBa0QsUUFBUSxDQUFDLFFBQVEsb0JBQWUsUUFBUSxDQUFDLE1BQVEsQ0FBQyxDQUFDO0tBQ3BIO0NBQ0YsQ0FBQzs7Ozs7OztBQ0pGLElBQWEsdUJBQXVCLEdBQUcsVUFBQyxRQUFvQjtJQUMxRCxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0M7WUFDaEQsa0ZBQWtGLENBQUMsQ0FBQztLQUN2RjtDQUNGLENBQUM7Ozs7OztBQ1BGO0FBRUEsSUFBYSxrQkFBa0IsR0FBRyxrQkFBZSxNQUFNLENBQUMsZ0JBQWdCLDJEQUFxRCxDQUFDOzs7Ozs7QUNGOUg7O1FBS0UscUJBQTRCLEtBQUssQ0FBQzs7O2dCQUZuQyxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7d0JBSGhDOzs7Ozs7Ozs7OztJQ29FRSx5QkFBb0IsU0FBdUIsRUFBVSxXQUEwQjtRQUEzRCxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFSL0UsZUFBOEIsRUFBRSxDQUFDO0tBUWtEOzs7OztJQUtuRixxQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7S0FDRjs7Ozs7SUFLTyx3Q0FBYzs7Ozs7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7OztJQU03RSxzQ0FBWTs7Ozs7O1FBQ2xCLElBQU0sU0FBUyxHQUFZO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUk7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSTtZQUMzQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDNUIsQ0FBQzs7UUFFRixJQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsU0FBUyxXQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBSyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQ3ZGLElBQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7O1FBQ25HLElBQU0sZUFBZSxHQUFHLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7UUFDOUcsSUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsTUFBTSxjQUNULEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxJQUNkLFNBQVMsRUFDVCxPQUFPLEVBQ1AsSUFBSSxJQUNQLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FDcEIsQ0FBQzs7Ozs7O0lBTUksb0NBQVU7Ozs7O1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7SUFNdkMsb0NBQVU7Ozs7O1FBQ2hCLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2Qyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FDNUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsa0JBQWtCLENBQzNELENBQUM7OztnQkFyR0wsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsRUFBRTtvQkFDWixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFlBQVk7cUJBQ3BCO2lCQUNGOzs7O2dCQXBCUSxZQUFZO2dCQVNaLGFBQWE7OzsyQkFjbkIsS0FBSyxTQUFDLE1BQU07d0JBQ1osS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzttQ0FJTCxXQUFXLFNBQUMsV0FBVzs7MEJBakUxQjs7Ozs7OztBQ0FBOzs7O0lBaUJFLDJCQUNVLFVBQ0E7UUFEQSxhQUFRLEdBQVIsUUFBUTtRQUNSLGVBQVUsR0FBVixVQUFVO0tBRW5COzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDcEU7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUNyQixJQUFJLE9BQU8sU0FBTSxZQUFZLElBQUksSUFBSSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFNLE9BQU8sU0FBTSxZQUFjLENBQUMsQ0FBQzthQUMxRjtZQUNELElBQUksT0FBTyxTQUFNLGFBQWEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQU0sT0FBTyxTQUFNLGFBQWUsQ0FBQyxDQUFDO2FBQzlGO1NBQ0Y7S0FDRjs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLGlGQUErRTtpQkFDMUY7Ozs7Z0JBVHNFLFNBQVM7Z0JBQTVELFVBQVU7Ozt1QkFXM0IsS0FBSzs2QkFFTCxLQUFLLFlBQ0wsV0FBVyxTQUFDLGFBQWE7OzRCQWQ1Qjs7Ozs7Ozs7OztBQ0dBLElBQWEsc0JBQXNCLEdBQUcsVUFBQyxNQUFXLEVBQUUsVUFBa0IsRUFBRSxTQUFpQjtJQUN2RixJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBZ0IsU0FBUyxvQ0FBK0IsVUFBVSxXQUFRLENBQUMsQ0FBQztLQUMzRjtDQUNGLENBQUM7Ozs7OztBQ1BGOzs7O0lBMEJFLG1DQUE2RSxNQUF5QixFQUM1RjtRQURtRSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUM1RixjQUFTLEdBQVQsU0FBUztRQVVuQixlQUF3QyxFQUFFLENBQUM7UUFSekMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2pGOzs7OztJQVNELCtDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7S0FDRjs7Ozs7SUFlTyxpREFBYTs7Ozs7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUN4RCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQzlFLENBQUM7OztnQkExQ0wsVUFBVTs7OztnQkFIRixpQkFBaUIsdUJBU1gsTUFBTSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEdBQUEsQ0FBQyxjQUFHLFFBQVE7Z0JBWDNELFlBQVk7OzsrQkFRbEIsV0FBVyxTQUFDLFdBQVc7MEJBV3ZCLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7O29DQXJDUjs7Ozs7Ozs7Ozs7SUNnQzJDQSx5Q0FBeUI7Ozs7Ozs7Ozs7O0lBaUJ4RCw0Q0FBWTs7OztJQUF0Qjs7UUFDRSxJQUFNLFNBQVMsR0FBWTtZQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUk7WUFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzVCLENBQUM7O1FBRUYsSUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLFNBQVMsV0FBTSxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUssSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUN2RixJQUFNLGVBQWUsR0FBRyxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7O1FBQzlHLElBQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLE1BQU0sZ0JBQ04sU0FBUyxFQUNULE9BQU8sSUFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQ3BCLENBQUM7S0FDSDs7Ozs7O0lBRVMsdURBQXVCOzs7OztJQUFqQyxVQUFrQyxPQUFlLEVBQUUsTUFBbUI7UUFDcEUsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzlCOztnQkFwREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxFQUFFO29CQUNaLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsbUJBQW1CO3FCQUMzQjtpQkFDRjs7O3VCQUdFLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7Z0NBNUNSO0VBZ0MyQyx5QkFBeUI7Ozs7Ozs7Ozs7SUNYdEJBLDRDQUF5Qjs7Ozs7Ozs7Ozs7SUFLM0QsK0NBQVk7Ozs7SUFBdEI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztLQUNIOzs7Ozs7SUFFUywwREFBdUI7Ozs7O0lBQWpDLFVBQWtDLE9BQXdCLEVBQUUsTUFBc0I7UUFDaEYsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ2pDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxFQUFFO29CQUNaLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsc0JBQXNCO3FCQUM5QjtpQkFDRjs7bUNBcEJEO0VBcUI4Qyx5QkFBeUI7Ozs7OztBQ3JCdkU7Ozs7Z0JBUUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFO3dCQUNaLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLHdCQUF3QjtxQkFDekI7aUJBQ0Y7OzRCQXRCRDs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/;
var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(nextUniqueId());
  var clipId = "clip-".concat(nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.12.0\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fad', 'fab', 'fa'].indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    delete abstract[0].attributes.id;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    var headers = {};

    if (_typeof(WINDOW.FontAwesomeKitConfig) === 'object' && typeof window.FontAwesomeKitConfig.token === 'string') {
      headers['fa-kit-token'] = WINDOW.FontAwesomeKitConfig.token;
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        title: title,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily) {
      var content = styles.getPropertyValue('content');
      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(content.length === 3 ? content.substr(1, 1) : content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};




/***/ }),

/***/ "./node_modules/ngx-owl-carousel/index.js":
/*!************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var owl_carousel_component_1 = __webpack_require__(/*! ./src/owl-carousel.component */ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js");
var owl_child_component_1 = __webpack_require__(/*! ./src/owl-child.component */ "./node_modules/ngx-owl-carousel/src/owl-child.component.js");
__export(__webpack_require__(/*! ./src/owl-carousel.component */ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js"));
var OwlModule = (function () {
    function OwlModule() {
    }
    OwlModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                owl_carousel_component_1.OwlCarousel, owl_child_component_1.OwlChild
            ],
            exports: [
                owl_carousel_component_1.OwlCarousel
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], OwlModule);
    return OwlModule;
}());
exports.OwlModule = OwlModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/src/owl-carousel.component.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var owl_child_component_1 = __webpack_require__(/*! ./owl-child.component */ "./node_modules/ngx-owl-carousel/src/owl-child.component.js");
var OwlCarousel = (function () {
    function OwlCarousel(differs) {
        this.differs = differs;
        this.carouselClasses = '';
        this.options = {};
    }
    Object.defineProperty(OwlCarousel.prototype, "items", {
        set: function (coll) {
            this._items = coll;
            if (coll && !this.differ) {
                this.differ = this.differs.find(coll).create(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    OwlCarousel.prototype.ngDoCheck = function () {
        if (this.differ) {
            var changes = this.differ.diff(this._items);
            if (changes) {
                var changed_1 = false;
                var changedFn = function () {
                    changed_1 = true;
                };
                changes.forEachAddedItem(changedFn);
                changes.forEachMovedItem(changedFn);
                changes.forEachRemovedItem(changedFn);
                if (changed_1) {
                    this.reInit();
                }
            }
        }
    };
    OwlCarousel.prototype.reInit = function () {
        var _this = this;
        if (this.$owlChild.$owl) {
            this.$owlChild.$owl.css('display', 'none');
        }
        setTimeout(function () {
            _this.$owlChild.destroyOwl();
            if (_this.$owlChild.$owl) {
                var itemLength = _this._items && _this._items.length;
                if (itemLength && itemLength <= _this.$owlChild.currentSlideIndex) {
                    _this.$owlChild.currentSlideIndex = itemLength;
                }
                _this.$owlChild.$owl.css('display', 'block');
            }
            _this.$owlChild.initOwl();
        }, 0);
    };
    OwlCarousel.prototype.refresh = function () {
        this.trigger('refresh.owl.carousel');
    };
    OwlCarousel.prototype.next = function (options) {
        this.trigger('next.owl.carousel', options);
    };
    OwlCarousel.prototype.previous = function (options) {
        this.trigger('prev.owl.carousel', options);
    };
    OwlCarousel.prototype.to = function (options) {
        this.trigger('to.owl.carousel', options);
    };
    OwlCarousel.prototype.trigger = function (action, options) {
        this.$owlChild.trigger(action, options);
    };
    __decorate([
        core_1.ViewChild('owl'), 
        __metadata('design:type', owl_child_component_1.OwlChild)
    ], OwlCarousel.prototype, "$owlChild", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "carouselClasses", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], OwlCarousel.prototype, "items", null);
    OwlCarousel = __decorate([
        core_1.Component({
            selector: 'owl-carousel',
            template: '<owl-carousel-child #owl [ngClass]="carouselClasses" [options]="options" >' +
                '<ng-content></ng-content></owl-carousel-child>',
        }), 
        __metadata('design:paramtypes', [core_1.IterableDiffers])
    ], OwlCarousel);
    return OwlCarousel;
}());
exports.OwlCarousel = OwlCarousel;
//# sourceMappingURL=owl-carousel.component.js.map

/***/ }),

/***/ "./node_modules/ngx-owl-carousel/src/owl-child.component.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/src/owl-child.component.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var OwlChild = (function () {
    function OwlChild(el) {
        this.el = el;
        this.owlClass = true;
        this.options = {};
        if (typeof $ === 'undefined' && typeof jQuery !== 'undefined') {
            $ = jQuery;
        }
    }
    OwlChild.prototype.ngOnInit = function () {
        if ((typeof window !== 'undefined') && $ && typeof $.fn.owlCarousel === 'function') {
            this.$owl = $(this.el.nativeElement);
        }
    };
    OwlChild.prototype.ngAfterViewInit = function () {
        this.initOwl();
    };
    OwlChild.prototype.initOwl = function () {
        var _this = this;
        if (this.$owl) {
            var options = {};
            Object.assign(options, this.options);
            if (this.currentSlideIndex) {
                options.startPosition = this.currentSlideIndex;
            }
            this.$owl.owlCarousel(options);
            this.$owl.on('changed.owl.carousel', function (event) {
                _this.currentSlideIndex = event.item.index;
            });
        }
    };
    OwlChild.prototype.trigger = function (action, options) {
        if (this.$owl) {
            this.$owl.trigger(action, options);
        }
    };
    OwlChild.prototype.ngOnDestroy = function () {
        this.destroyOwl();
        delete this.$owl;
    };
    OwlChild.prototype.destroyOwl = function () {
        if (this.$owl) {
            this.$owl.trigger('destroy.owl.carousel')
                .removeClass('owl-loaded owl-hidden')
                .find('.owl-stage:empty, .owl-item:empty')
                .remove();
        }
    };
    __decorate([
        core_1.HostBinding('class.owl-carousel'), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "owlClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "options", void 0);
    OwlChild = __decorate([
        core_1.Component({
            selector: 'owl-carousel-child',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OwlChild);
    return OwlChild;
}());
exports.OwlChild = OwlChild;
//# sourceMappingURL=owl-child.component.js.map

/***/ }),

/***/ "./src/app/core/services/subscribe.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/subscribe.service.ts ***!
  \****************************************************/
/*! exports provided: SubscribeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeService", function() { return SubscribeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubscribeService = /** @class */ (function () {
    function SubscribeService(http) {
        this.http = http;
    }
    SubscribeService.prototype.subscribe = function (email, type) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server_url + "/analytics/subscriber?k=babycloudlab";
        var data = {
            email: email,
            type: type,
            datetime: new Date().toISOString()
        };
        return this.http.post(url, data);
    };
    SubscribeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SubscribeService);
    return SubscribeService;
}());



/***/ }),

/***/ "./src/app/home/about-intro/about-intro.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/about-intro/about-intro.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about-intro\" class=\"about-reverse\">\r\n  <div class=\"container-fluid pb-5 mb-5 pl-0 pr-0\">\r\n    <div class=\"col-12 col-md-9 mx-auto p-0\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-md-12 col-lg-5\">\r\n          <div class=\"intro-img col-lg-12 col-md-5 col-sm-5 mx-auto float-lg-left\">\r\n            <img src=\"{{ 'HOME.ABOUT-INTRO.ABOUT1.IMG.SRC' | translate }}\"\r\n              alt=\"{{ 'HOME.ABOUT-INTRO.ABOUT1.IMG.ALT' | translate }}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-11 col-md-11 col-lg-7 order-last order-sm-last order-md-last order-lg-last mx-auto\">\r\n          <div class=\"intro-contain\">\r\n            <div>\r\n              <h2>{{ 'HOME.ABOUT-INTRO.ABOUT1.TITLE' | translate }}</h2>\r\n              <p *ngFor=\"let paragraph of paragraphs1\" class=\"text-left text-sm-justify\">{{ paragraph.PARAGRAPH }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row align-items-center pt-5 pb-5\">\r\n        <div class=\"col-md-12 col-lg-5\">\r\n          <div class=\"intro-img col-lg-12 col-md-5 col-sm-5 mx-auto m-lg-0 float-lg-right\">\r\n            <img src=\"{{ 'HOME.ABOUT-INTRO.ABOUT2.IMG.SRC' | translate }}\"\r\n              alt=\"{{ 'HOME.ABOUT-INTRO.ABOUT2.IMG.ALT' | translate }}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-11 col-md-11 col-lg-7 order-last order-sm-last order-md-last order-lg-first mx-auto\">\r\n          <div class=\"intro-contain\">\r\n            <div>\r\n              <h2>{{ 'HOME.ABOUT-INTRO.ABOUT2.TITLE' | translate }}</h2>\r\n              <p *ngFor=\"let paragraph of paragraphs2\" class=\"text-left text-sm-justify\">{{ paragraph.PARAGRAPH }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-md-12 col-lg-5\">\r\n          <div class=\"intro-img col-lg-12 col-md-5 col-sm-5 mx-auto m-lg-0 float-lg-left\">\r\n            <img src=\"{{ 'HOME.ABOUT-INTRO.ABOUT3.IMG.SRC' | translate }}\"\r\n              alt=\"{{ 'HOME.ABOUT-INTRO.ABOUT3.IMG.ALT' | translate }}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-11 col-md-11 col-lg-7 order-last order-sm-last order-md-last order-lg-last mx-auto\">\r\n          <div class=\"intro-contain\">\r\n            <div>\r\n              <h2>{{ 'HOME.ABOUT-INTRO.ABOUT3.TITLE' | translate }}</h2>\r\n              <p *ngFor=\"let paragraph of paragraphs3\" class=\"text-left text-sm-justify\"\r\n                [innerHTML]=\"paragraph.PARAGRAPH \"></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/about-intro/about-intro.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/about-intro/about-intro.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about-intro .row {\n  min-height: 50vh;\n  margin-bottom: -5vh; }\n\n#about-intro .intro-img img {\n  width: 100%; }\n\n@media (max-width: 991px) {\n  .intro-img {\n    padding-top: 50px;\n    padding-bottom: 50px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hYm91dC1pbnRyby9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXGdhem91eWlcXGdpem91eWktc2l0ZS9zcmNcXGFwcFxcaG9tZVxcYWJvdXQtaW50cm9cXGFib3V0LWludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBR0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUp2QjtFQVFNLFdBQVcsRUFBQTs7QUFLakI7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBQSxFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWJvdXQtaW50cm8vYWJvdXQtaW50cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdjb25zdGFudHMnO1xyXG5cclxuI2Fib3V0LWludHJvIHtcclxuICAucm93IHtcclxuICAgIC8vIHBhZGRpbmctdG9wOiAxMHZoO1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IC01dmg7XHJcbiAgfVxyXG4gIC5pbnRyby1pbWd7XHJcbiAgICBpbWd7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmludHJvLWltZ3tcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/about-intro/about-intro.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/about-intro/about-intro.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutIntroComponent", function() { return AboutIntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// 3rd party

var AboutIntroComponent = /** @class */ (function () {
    function AboutIntroComponent(breakpointObserver, translate) {
        var _this = this;
        this.translate = translate;
        this.bError = false;
        this.bMedium = false;
        this.paragraphs1 = [{
                PARAGRAPH: 'Loading...',
            }];
        this.paragraphs2 = [{
                PARAGRAPH: 'Loading...',
            }];
        this.paragraphs3 = [{
                PARAGRAPH: 'Loading...',
            }];
        breakpointObserver.observe('(max-width: 768px)').subscribe(function (result) {
            _this.bMedium = result.matches;
        });
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match('/en|/fr') ? browserLang : 'en');
    }
    AboutIntroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('HOME.ABOUT-INTRO.ABOUT1.DESCRIPTION').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.paragraphs1 = [{
                        PARAGRAPH: 'Cannot get translation!'
                    }];
            }
            else {
                _this.paragraphs1 = res;
            }
        });
        this.translate.get('HOME.ABOUT-INTRO.ABOUT2.DESCRIPTION').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.paragraphs2 = [{
                        PARAGRAPH: 'Cannot get translation!'
                    }];
            }
            else {
                _this.paragraphs2 = res;
            }
        });
        this.translate.get('HOME.ABOUT-INTRO.ABOUT3.DESCRIPTION').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.paragraphs3 = [{
                        PARAGRAPH: 'Cannot get translation!'
                    }];
            }
            else {
                _this.paragraphs3 = res;
            }
        });
    };
    AboutIntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-intro',
            template: __webpack_require__(/*! ./about-intro.component.html */ "./src/app/home/about-intro/about-intro.component.html"),
            styles: [__webpack_require__(/*! ./about-intro.component.scss */ "./src/app/home/about-intro/about-intro.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AboutIntroComponent);
    return AboutIntroComponent;
}());



/***/ }),

/***/ "./src/app/home/about-reverse/about-reverse.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/about-reverse/about-reverse.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section id=\"about\" class=\"about-reverse\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center\">\r\n\r\n      <div class=\"col-11 col-md-12 col-lg-6 mx-auto\" >\r\n        <h2>{{ 'HOME.ABOUT-REVERSE.TITLE' | translate }}</h2>\r\n        <p class=\"caption-about text-left text-sm-justify\" *ngFor=\"let paragraph of paragraphs\">{{ paragraph.PARAGRAPH }}</p>\r\n      </div>\r\n\r\n      <div class=\"col-md-9 col-lg-6 order-first order-md-first order-lg-last mx-auto\">\r\n        <div class=\"about-img\">\r\n          <img class=\"img-fluid\" src=\"assets/images/ecran_phone.png\" alt=\"BabyCloud app\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section> -->\r\n\r\n\r\n<section id=\"about\" class=\"about-reverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-9 mx-auto p-0\">\r\n          <div class=\"row align-items-end\">\r\n          <div class=\"col-11 col-md-12 col-lg-7 mx-auto\" >\r\n            <h2 class=\"phonetics mb-5\">{{ 'HOME.ABOUT-REVERSE.TITLE' | translate }}</h2>\r\n            <p class=\"caption-about text-left text-sm-justify\" *ngFor=\"let paragraph of paragraphs\">{{ paragraph.PARAGRAPH }}</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-9 col-lg-5 order-first order-md-first order-lg-last mx-auto\">\r\n            <div class=\"about-img text-right\">\r\n              <img class=\"img-fluid\" src=\"{{ 'HOME.ABOUT-REVERSE.IMG.SRC' | translate }}\" alt=\"{{ 'HOME.ABOUT-REVERSE.IMG.ALT' | translate }}\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/home/about-reverse/about-reverse.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/home/about-reverse/about-reverse.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-reverse .row {\n  min-height: 50vh; }\n\n.about-reverse .phonetics {\n  font-size: 4em; }\n\n.about-img {\n  text-align: center; }\n\n@media (min-width: 992px) {\n  .about-reverse {\n    padding-top: 20vh; } }\n\n@media (min-width: 991px) {\n  .about-img img {\n    width: 80%; } }\n\n@media (max-width: 991px) {\n  .about-img {\n    padding-top: 50px; }\n  .about-reverse .container {\n    padding-bottom: 50px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hYm91dC1yZXZlcnNlL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcZ2F6b3V5aVxcZ2l6b3V5aS1zaXRlL3NyY1xcYXBwXFxob21lXFxhYm91dC1yZXZlcnNlXFxhYm91dC1yZXZlcnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRVEsZ0JBQWdCLEVBQUE7O0FBRnhCO0VBS00sY0FBYyxFQUFBOztBQUlwQjtFQUNFLGtCQUFrQixFQUFBOztBQUlwQjtFQUNFO0lBQ0EsaUJBQWlCLEVBQUEsRUFDaEI7O0FBR0g7RUFDRTtJQUVJLFVBQVUsRUFBQSxFQUNYOztBQUlMO0VBQ0U7SUFDRSxpQkFBaUIsRUFBQTtFQUVuQjtJQUVJLG9CQUFvQixFQUFBLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hYm91dC1yZXZlcnNlL2Fib3V0LXJldmVyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdjb25zdGFudHMnO1xyXG5cclxuLmFib3V0LXJldmVyc2Uge1xyXG4gICAgLnJvdyB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTB2aDtcclxuICAgIH1cclxuICAgIC5waG9uZXRpY3N7XHJcbiAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWJvdXQtaW1nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgLmFib3V0LXJldmVyc2Uge1xyXG4gIHBhZGRpbmctdG9wOiAyMHZoO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogOTkxcHgpe1xyXG4gIC5hYm91dC1pbWcge1xyXG4gICAgaW1ne1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmFib3V0LWltZ3tcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIH1cclxuICAuYWJvdXQtcmV2ZXJzZXtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/about-reverse/about-reverse.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/about-reverse/about-reverse.component.ts ***!
  \***************************************************************/
/*! exports provided: AboutReverseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutReverseComponent", function() { return AboutReverseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 3rd party

var AboutReverseComponent = /** @class */ (function () {
    function AboutReverseComponent(translate) {
        this.translate = translate;
        this.bError = false;
        this.paragraphs = [{
                PARAGRAPH: 'Loading...',
            }];
    }
    AboutReverseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('HOME.ABOUT-REVERSE.DESCRIPTION').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.paragraphs = [{
                        PARAGRAPH: 'Cannot get translation!'
                    }];
            }
            else {
                _this.paragraphs = res;
            }
        });
    };
    AboutReverseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-reverse',
            template: __webpack_require__(/*! ./about-reverse.component.html */ "./src/app/home/about-reverse/about-reverse.component.html"),
            styles: [__webpack_require__(/*! ./about-reverse.component.scss */ "./src/app/home/about-reverse/about-reverse.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AboutReverseComponent);
    return AboutReverseComponent;
}());



/***/ }),

/***/ "./src/app/home/benefits/benefits.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/benefits/benefits.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"benefits\" class=\"benefits\" *ngIf=\"!bMedium\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-9 mx-auto p-0\">\r\n        <div class=\"row\">\r\n\r\n      <div class=\"col-sm-12 p-0 mt-4 mb-5\">\r\n        <div class=\"text-center\" style=\"text-align: center\">\r\n          <h2 class=\"text-center text-sm-left\">{{ 'HOME.BENEFITS.TITLE' | translate }}</h2>\r\n        </div>\r\n<!--         <div class=\"text-center\">\r\n          <h3 class=\"text-center text-sm-left\">{{ 'HOME.BENEFITS.UNDER_TITLE' | translate }}</h3>\r\n        </div>\r\n -->          <div class=\"d-md-flex d-sm-block\">\r\n            <div class=\"benefit-item col-sm-12 col-md-4\" *ngFor=\"let benefit of benefits\">\r\n              <div class=\"benefit-text\">\r\n                <h3>{{ benefit.DESCRIPTION }}</h3>\r\n              </div>\r\n              <div class=\"benefit-avtar\">\r\n                <img src=\"{{ benefit.IMG.SRC }}\" alt=\"{{ benefit.IMG.ALT }}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/benefits/benefits.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/benefits/benefits.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  --color-title:  #34343C;\n  --color-text: #777777;\n  --color-text-invert: white;\n  --color-background: white;\n  --color-primary: #D9EEF3;\n  --color-primary-variant: #70a2f2;\n  --color-accent: #ffa89c;\n  --color-accent-variant: #396ac5;\n  --color-gray: #f4f4f4;\n  --color-warn: red;\n  --color-ocean: #127e9b;\n  --color-beau: #c2d8e3;\n  --color-bayside: #73cac3;\n  --color-blossom: #fcd2c0;\n  --color-golden: #fcd485;\n  --color-mint: #c5e6da;\n  --text-dark: #076077;\n  --text-medium: #5f707a;\n  --text-light: #c8cbce;\n  --text-white: #ffffff;\n  --background-home-partners: url('/assets/images/backgrounds/partners-default.svg');\n  --background-home-team: url('/assets/images/backgrounds/team.svg');\n  --background-home-team2: url('/assets/images/backgrounds/team2.svg');\n  --background-home-testimonial: url('/assets/images/backgrounds/testimonial.svg');\n  --background-home-newsletter-baby: url('/assets/images/illus/baby-newsletter.png');\n  --background-home-newsletter-clouds: url('/assets/images/illus/clouds-newsletter.png');\n  --background-home-intro: url('/assets/images/illus/baby-reaching.png');\n  --background-home-intro-mobile: url('/assets/images/illus/baby-reaching-mobile.png');\n  --background-construction: url('/assets/images/backgrounds/construction.svg'); }\n\n/* Background elements bouncing */\n\n@-webkit-keyframes movebounce {\n  0% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); }\n  50% {\n    -webkit-transform: translateY(20px);\n            transform: translateY(20px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@keyframes movebounce {\n  0% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); }\n  50% {\n    -webkit-transform: translateY(20px);\n            transform: translateY(20px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@-webkit-keyframes moveleftbounce {\n  0% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  50% {\n    -webkit-transform: translateX(20px);\n            transform: translateX(20px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n@keyframes moveleftbounce {\n  0% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  50% {\n    -webkit-transform: translateX(20px);\n            transform: translateX(20px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n.benefits {\n  padding-top: 10vh;\n  padding-bottom: 10vh; }\n\n.benefit-item {\n  text-align: center !important;\n  padding-top: 2.5vh;\n  padding-bottom: 2.5vh; }\n\n.benefit-item .benefit-avtar {\n    padding-bottom: 2vh; }\n\n.benefit-item .benefit-avtar img {\n      height: 150px;\n      width: 150px;\n      margin: 0 auto; }\n\n.benefit-item .benefit-text {\n    margin: 15px auto;\n    max-width: 275px; }\n\n@media (max-width: 1199px) {\n  .benefits .benefit-avtar img {\n    height: 125px;\n    width: 125px; } }\n\n@media (max-width: 991px) {\n  .benefits .benefit-avtar img {\n    height: 100px;\n    width: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9iZW5lZml0cy9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXGdhem91eWlcXGdpem91eWktc2l0ZS9zcmNcXGFwcFxcY29yZVxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9ob21lL2JlbmVmaXRzL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcZ2F6b3V5aVxcZ2l6b3V5aS1zaXRlL3NyY1xcYXBwXFxjb3JlXFxzY3NzXFxfYW5pbWF0aW9ucy5zY3NzIiwic3JjL2FwcC9ob21lL2JlbmVmaXRzL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcZ2F6b3V5aVxcZ2l6b3V5aS1zaXRlL3NyY1xcYXBwXFxob21lXFxiZW5lZml0c1xcYmVuZWZpdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx1QkFBYztFQUNkLHFCQUFhO0VBQ2IsMEJBQW9CO0VBQ3BCLHlCQUFtQjtFQUNuQix3QkFBZ0I7RUFDaEIsZ0NBQXdCO0VBQ3hCLHVCQUFlO0VBQ2YsK0JBQXVCO0VBQ3ZCLHFCQUFhO0VBQ2IsaUJBQWE7RUFFYixzQkFBYztFQUNkLHFCQUFhO0VBQ2Isd0JBQWdCO0VBQ2hCLHdCQUFnQjtFQUNoQix1QkFBZTtFQUNmLHFCQUFhO0VBRWIsb0JBQVk7RUFDWixzQkFBYztFQUNkLHFCQUFhO0VBQ2IscUJBQWE7RUFFYixrRkFBMkI7RUFDM0Isa0VBQXVCO0VBQ3ZCLG9FQUF3QjtFQUN4QixnRkFBOEI7RUFDOUIsa0ZBQWtDO0VBQ2xDLHNGQUFvQztFQUNwQyxzRUFBd0I7RUFDeEIsb0ZBQStCO0VBQy9CLDZFQUEwQixFQUFBOztBQ2pDOUIsaUNBQUE7O0FBQ0E7RUFDRTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtFQUU1QjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTtFQUU3QjtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQSxFQUFBOztBQVI5QjtFQUNFO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBO0VBRTdCO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBLEVBQUE7O0FBSTlCO0VBQ0U7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7RUFFNUI7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7RUFFN0I7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUEsRUFBQTs7QUFSOUI7RUFDRTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtFQUU1QjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTtFQUU3QjtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQSxFQUFBOztBQ25COUI7RUFFRSxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBS3RCO0VBQ0UsNkJBQTZCO0VBRTdCLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFKdkI7SUFZSSxtQkFBbUIsRUFBQTs7QUFadkI7TUFRTSxhQUFhO01BQ2IsWUFBWTtNQUNaLGNBQWMsRUFBQTs7QUFWcEI7SUFnQkksaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBOztBQUtwQjtFQUNFO0lBR00sYUFBYTtJQUNmLFlBQVksRUFBQSxFQUNYOztBQUtQO0VBQ0U7SUFHTSxhQUFhO0lBQ2YsWUFBWSxFQUFBLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9ob21lL2JlbmVmaXRzL2JlbmVmaXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9sbG93IGFuZ3VsYXIgbWF0ZXJpYWwgdGhlbWUgY2xhc3MgYXBwbGllZCBvbiBib2R5XHJcbi8vIEZvciBtb3IgZGV0YWlscyBjaGVjayBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb2xvci90aGUtY29sb3Itc3lzdGVtLmh0bWwjY29sb3ItdGhlbWUtY3JlYXRpb25cclxuXHJcbi5kZWZhdWx0IHtcclxuICAgIC0tY29sb3ItdGl0bGU6ICAjMzQzNDNDO1xyXG4gICAgLS1jb2xvci10ZXh0OiAjNzc3Nzc3O1xyXG4gICAgLS1jb2xvci10ZXh0LWludmVydDogd2hpdGU7XHJcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjRDlFRUYzO1xyXG4gICAgLS1jb2xvci1wcmltYXJ5LXZhcmlhbnQ6ICM3MGEyZjI7XHJcbiAgICAtLWNvbG9yLWFjY2VudDogI2ZmYTg5YztcclxuICAgIC0tY29sb3ItYWNjZW50LXZhcmlhbnQ6ICMzOTZhYzU7XHJcbiAgICAtLWNvbG9yLWdyYXk6ICNmNGY0ZjQ7XHJcbiAgICAtLWNvbG9yLXdhcm46IHJlZDtcclxuXHJcbiAgICAtLWNvbG9yLW9jZWFuOiAjMTI3ZTliO1xyXG4gICAgLS1jb2xvci1iZWF1OiAjYzJkOGUzO1xyXG4gICAgLS1jb2xvci1iYXlzaWRlOiAjNzNjYWMzO1xyXG4gICAgLS1jb2xvci1ibG9zc29tOiAjZmNkMmMwO1xyXG4gICAgLS1jb2xvci1nb2xkZW46ICNmY2Q0ODU7XHJcbiAgICAtLWNvbG9yLW1pbnQ6ICNjNWU2ZGE7XHJcblxyXG4gICAgLS10ZXh0LWRhcms6ICMwNzYwNzc7XHJcbiAgICAtLXRleHQtbWVkaXVtOiAjNWY3MDdhO1xyXG4gICAgLS10ZXh0LWxpZ2h0OiAjYzhjYmNlO1xyXG4gICAgLS10ZXh0LXdoaXRlOiAjZmZmZmZmO1xyXG5cclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXBhcnRuZXJzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3BhcnRuZXJzLWRlZmF1bHQuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS10ZWFtOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3RlYW0uc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS10ZWFtMjogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy90ZWFtMi5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXRlc3RpbW9uaWFsOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3Rlc3RpbW9uaWFsLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtbmV3c2xldHRlci1iYWJ5OiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2JhYnktbmV3c2xldHRlci5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLW5ld3NsZXR0ZXItY2xvdWRzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2Nsb3Vkcy1uZXdzbGV0dGVyLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtaW50cm86IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvYmFieS1yZWFjaGluZy5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLWludHJvLW1vYmlsZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9iYWJ5LXJlYWNoaW5nLW1vYmlsZS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1jb25zdHJ1Y3Rpb246IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvY29uc3RydWN0aW9uLnN2ZycpO1xyXG59XHJcblxyXG4vLyAubmlnaHQge1xyXG4vLyAgICAgLS1jb2xvci10aXRsZTogIHJlZDtcclxuLy8gICAgIC0tY29sb3ItdGV4dDogcmVkO1xyXG4vLyAgICAgLS1jb2xvci10ZXh0LWludmVydDogd2hpdGU7XHJcbi8vICAgICAtLWNvbG9yLWJhY2tncm91bmQ6IGJsdWU7XHJcbi8vICAgICAtLWNvbG9yLXByaW1hcnk6IDtcclxuLy8gICAgIC0tY29sb3ItcHJpbWFyeS12YXJpYW50OiA7XHJcbi8vICAgICAtLWNvbG9yLWFjY2VudDogO1xyXG4vLyAgICAgLS1jb2xvci1hY2NlbnQtdmFyaWFudDogO1xyXG4vLyAgICAgLS1jb2xvci13YXJuOiA7XHJcblxyXG4vLyAgICAgLS1iYWNrZ3JvdW5kLWhvbWUtcGFydG5lcnM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kcy9wYXJ0bmVycy1uaWdodC5zdmcnKTtcclxuLy8gfVxyXG4iLCJAaW1wb3J0ICdjb25zdGFudHMnO1xyXG5cclxuLyogQmFja2dyb3VuZCBlbGVtZW50cyBib3VuY2luZyAqL1xyXG5Aa2V5ZnJhbWVzIG1vdmVib3VuY2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3ZlbGVmdGJvdW5jZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgfVxyXG59IiwiQGltcG9ydCAnY29uc3RhbnRzJztcclxuQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAnYW5pbWF0aW9ucyc7XHJcblxyXG4uYmVuZWZpdHMge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIHBhZGRpbmctdG9wOiAxMHZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xyXG5cclxufVxyXG5cclxuXHJcbi5iZW5lZml0LWl0ZW0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cclxuICBwYWRkaW5nLXRvcDogMi41dmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIuNXZoO1xyXG5cclxuICAuYmVuZWZpdC1hdnRhciB7XHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgcGFkZGluZy1ib3R0b206IDJ2aDtcclxuICB9XHJcblxyXG4gIC5iZW5lZml0LXRleHQge1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDI3NXB4O1xyXG4gICAgLy8gbWluLWhlaWdodDogNzYuOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogMTE5OXB4KXtcclxuICAuYmVuZWZpdHN7XHJcbiAgICAuYmVuZWZpdC1hdnRhciB7XHJcbiAgICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk5MXB4KXtcclxuICAuYmVuZWZpdHN7XHJcbiAgICAuYmVuZWZpdC1hdnRhciB7XHJcbiAgICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/benefits/benefits.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/benefits/benefits.component.ts ***!
  \*****************************************************/
/*! exports provided: BenefitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsComponent", function() { return BenefitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// 3rd party

var BenefitsComponent = /** @class */ (function () {
    function BenefitsComponent(breakpointObserver, translate) {
        var _this = this;
        this.translate = translate;
        this.bError = false;
        this.bMedium = false;
        // Benefits Carousel
        this.benefits = [{
                DESCRIPTION: 'Loading...',
                IMG: {
                    ALT: '',
                    SRC: ''
                }
            }];
        breakpointObserver.observe('(max-width: 768px)').subscribe(function (result) {
            _this.bMedium = result.matches;
        });
    }
    BenefitsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('HOME.BENEFITS.BENEFIT').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.benefits = [{
                        DESCRIPTION: 'Cannot get translation',
                        IMG: {
                            ALT: '',
                            SRC: ''
                        }
                    }];
            }
            else {
                _this.benefits = res;
            }
        });
    };
    BenefitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-benefits',
            template: __webpack_require__(/*! ./benefits.component.html */ "./src/app/home/benefits/benefits.component.html"),
            styles: [__webpack_require__(/*! ./benefits.component.scss */ "./src/app/home/benefits/benefits.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], BenefitsComponent);
    return BenefitsComponent;
}());



/***/ }),

/***/ "./src/app/home/blog/blog.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/blog/blog.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- blog Section Start -->\r\n<section id=\"blog\" class=\"blog\">\r\n  <div class=\"about-decor\">\r\n    <div class=\"about-circle1\"><img src=\"assets/images/team1.png\" alt=\"\"></div>\r\n    <div class=\"about-circle2\"><img src=\"assets/images/main-banner1.png\" alt=\"\"></div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <h2 class=\"title\">latest <span>blog</span></h2>\r\n      </div>\r\n      <div class=\"col-sm-12\">\r\n        <!-- If images array is dynamically changing pass this array to [items] input -->\r\n        <owl-carousel [options]=\"blogCarousel\" [items]=\"blog\" [carouselClasses]=\"['blog-carousel owl-theme']\">\r\n          <div class=\"blog-item\" *ngFor=\"let bg of blog\">\r\n            <div class=\"blog-block\">\r\n              <div class=\"blog-box\">\r\n                <div class=\"overflow-hidden\"><a [routerLink]=\"'/blog/details'\"><img [src]=\"bg.image\" alt=\"\"></a></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"blog-text\">\r\n              <h6>{{bg.date}}</h6>\r\n              <a [routerLink]=\"'/blog/details'\">\r\n                <h3>{{bg.title}}</h3>\r\n              </a>\r\n              <h5>{{bg.postedBy}}</h5>\r\n            </div>\r\n          </div>\r\n        </owl-carousel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- blog Section End -->\r\n"

/***/ }),

/***/ "./src/app/home/blog/blog.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/blog/blog.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/blog/blog.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/blog/blog.component.ts ***!
  \*********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
        // Blog Carousel
        this.blog = [{
                image: 'assets/images/blog/6.jpg',
                date: '15 jun 2016',
                title: 'Lorem Ipsum has been the industry standard dummy text',
                postedBy: 'posted by johanson let, 15 hits, 30 comment',
            }, {
                image: 'assets/images/blog/7.jpg',
                date: '10 February 2012',
                title: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
                postedBy: 'posted by John Shipmen, 6 hits, 8 comment',
            }, {
                image: 'assets/images/blog/8.jpg',
                date: '12 march 2015',
                title: 'The first line of Lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32.',
                postedBy: 'posted by Mark jkcno, 10 hits, 50 comment',
            }, {
                image: 'assets/images/blog/9.jpg',
                date: '28 December 2017',
                title: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
                postedBy: 'posted by Walo Boni, 9 hits, 4 comment',
            }];
        // Blog Carousel Options
        this.blogCarousel = {
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 5,
                    nav: false,
                },
                600: {
                    items: 1,
                    margin: 0,
                    nav: false,
                },
                768: {
                    items: 2,
                },
                1000: {
                    items: 2
                }
            }
        };
    }
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/home/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/home/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/home/contact-us/contact-us.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/contact-us/contact-us.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Contact Section start -->\r\n<section id=\"contact\" class=\"contact\">\r\n  <div class=\"contact-decor\">\r\n    <div class=\"contact-circle1\"><img src=\"assets/images/main-banner12.png\" alt=\"\"></div>\r\n    <div class=\"contact-circle2\"><img src=\"assets/images/main-banner1.png\" alt=\"\"></div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-lg-8 col-sm-12\">\r\n        <div class=\"contact-us\">\r\n          <div class=\"w-100\">\r\n            <h2 class=\"title\"><span>contact </span>information</h2>\r\n            <form class=\"theme-form\" [formGroup]=\"contactForm\">\r\n              <div class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-md-6 md-fgrup-margin\">\r\n                    <input type=\"text\" name=\"name\" [formControl]=\"contactForm.controls['name']\" class=\"form-control\" autocomplete=\"off\" placeholder=\"your name\" required=\"required\">\r\n                    <div *ngIf=\"contactForm.controls.name.touched && contactForm.controls.name.errors?.required\" class=\"text text-danger\">Name is required</div>\r\n                  </div>\r\n                  <div class=\"col-sm-12 col-md-6\">\r\n                    <input type=\"number\" name=\"phone\" [formControl]=\"contactForm.controls['phone']\" class=\"form-control\" autocomplete=\"off\" placeholder=\"phone\" required=\"required\">\r\n                    <div *ngIf=\"contactForm.controls.phone.touched && contactForm.controls.phone.errors?.required\" class=\"text text-danger\">Phone is required</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"email\" name=\"email\" [formControl]=\"contactForm.controls['email']\" class=\"form-control\" autocomplete=\"off\" id=\"exampleFormControlInput1\" placeholder=\"email address\" required=\"required\">\r\n                <div *ngIf=\"contactForm.controls.email.touched && contactForm.controls.email.errors?.email\" class=\"text text-danger\">Invalid Email</div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <textarea class=\"form-control\" name=\"message\" [formControl]=\"contactForm.controls['message']\" id=\"exampleFormControlTextarea1\" autocomplete=\"off\" rows=\"4\" placeholder=\"message\" required=\"required\"></textarea>\r\n                <div *ngIf=\"contactForm.controls.message.touched && contactForm.controls.message.errors?.required\" class=\"text text-danger\">Message is required</div>\r\n              </div>\r\n              <div class=\"form-button\">\r\n                <button type=\"submit\" [disabled]=\"!contactForm.valid\" class=\"btn btn-custom theme-color\">send</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 d-medium-none-lg\">\r\n        <div class=\"contact-right\">\r\n          <img src=\"assets/images/Contact-info.png\" class=\"img-fluid\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- Contact Section End -->\r\n"

/***/ }),

/***/ "./src/app/home/contact-us/contact-us.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/contact-us/contact-us.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/contact-us/contact-us.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/contact-us/contact-us.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(fb) {
        this.fb = fb;
    }
    // Form Validator
    ContactUsComponent.prototype.ngOnInit = function () {
        this.contactForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/home/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/home/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/home/feature/feature.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/feature/feature.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"feature\" class=\"feature\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center\">\r\n      <div class=\"col-md-5 col-lg-5\" *ngIf=\"!bMobile\">\r\n        <img src=\"{{ steps[activeDesktopImgIndex].IMG.SRC }}\" alt=\"{{ steps[activeDesktopImgIndex].IMG.ALT }}\" class=\"img-fluid\" alt=\"\">\r\n      </div>\r\n      <div class=\"col-sm-10 col-md-7 col-lg-7 mx-auto\">\r\n        <h2 class=\"title text-center text-sm-left\">{{ 'HOME.FEATURE.TITLE' | translate }}</h2>\r\n\r\n        <ng-container *ngIf=\"!bError; else error\">\r\n          <ng-container *ngIf=\"steps.length >= 1; else loading\">\r\n            <mat-accordion>\r\n              <mat-expansion-panel *ngFor=\"let step of steps; let i = index; first as isFirst;\" [expanded]=\"isFirst\" (click)=\"activeDesktopImgIndex = i;\"\r\n              [class.active]=\"(bMobile == false) && (i == activeDesktopImgIndex)\"\r\n              [class.clickable]=\"(bMobile == false) && (i != activeDesktopImgIndex) \">\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                      <span class=\"align-middle\">{{ i + 1 + \". \" + step.NAME }}</span>\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <ng-template matExpansionPanelContent>\r\n                    <div class=\"col-10 mx-auto\" *ngIf=\"bMobile\">\r\n                      <img src=\"{{ steps[activeDesktopImgIndex].IMG.SRC }}\" alt=\"{{ steps[activeDesktopImgIndex].IMG.ALT }}\" class=\"img-fluid\" alt=\"\">\r\n                    </div>\r\n                    <p> {{ step.DESCRIPTION}} </p>\r\n                  </ng-template>\r\n              </mat-expansion-panel>\r\n            </mat-accordion>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<ng-template #loading>\r\n  <p>Loading...</p>\r\n</ng-template>\r\n\r\n<ng-template #error>\r\n  <p>An error occured, cannot get the translation.</p>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/home/feature/feature.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/feature/feature.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  --color-title:  #34343C;\n  --color-text: #777777;\n  --color-text-invert: white;\n  --color-background: white;\n  --color-primary: #D9EEF3;\n  --color-primary-variant: #70a2f2;\n  --color-accent: #ffa89c;\n  --color-accent-variant: #396ac5;\n  --color-gray: #f4f4f4;\n  --color-warn: red;\n  --color-ocean: #127e9b;\n  --color-beau: #c2d8e3;\n  --color-bayside: #73cac3;\n  --color-blossom: #fcd2c0;\n  --color-golden: #fcd485;\n  --color-mint: #c5e6da;\n  --text-dark: #076077;\n  --text-medium: #5f707a;\n  --text-light: #c8cbce;\n  --text-white: #ffffff;\n  --background-home-partners: url('/assets/images/backgrounds/partners-default.svg');\n  --background-home-team: url('/assets/images/backgrounds/team.svg');\n  --background-home-team2: url('/assets/images/backgrounds/team2.svg');\n  --background-home-testimonial: url('/assets/images/backgrounds/testimonial.svg');\n  --background-home-newsletter-baby: url('/assets/images/illus/baby-newsletter.png');\n  --background-home-newsletter-clouds: url('/assets/images/illus/clouds-newsletter.png');\n  --background-home-intro: url('/assets/images/illus/baby-reaching.png');\n  --background-home-intro-mobile: url('/assets/images/illus/baby-reaching-mobile.png');\n  --background-construction: url('/assets/images/backgrounds/construction.svg'); }\n\n#feature {\n  background-image: var(--background-home-testimonial);\n  background-size: cover;\n  position: relative;\n  width: 100vw; }\n\n.row {\n  height: 100vh; }\n\n.clickable {\n  cursor: pointer; }\n\n.active {\n  background-color: var(--color-background); }\n\n.collapsed {\n  background-color: var(--color-background); }\n\n.mat-expansion-panel-header-title {\n  line-height: 1.8em;\n  font-family: 'Open sans', Arial, Helvetica, sans-serif; }\n\n.mat-expansion-panel p {\n  line-height: 1.8em;\n  color: var(--color-text);\n  font-family: 'Open sans', Arial, Helvetica, sans-serif; }\n\n@media (max-width: 1200px) {\n  .feature {\n    padding: 50px 0px; } }\n\n@media (max-width: 992px) {\n  .feature {\n    padding: 50px 0px; } }\n\n@media (max-width: 767px) {\n  .row {\n    height: auto;\n    min-height: 100vh; }\n  .mat-expansion-panel-header {\n    height: auto !important;\n    padding-top: 15px;\n    padding-bottom: 15px; } }\n\n@media (max-width: 575px) {\n  .row {\n    height: auto;\n    min-height: 100vh; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mZWF0dXJlL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcZ2F6b3V5aVxcZ2l6b3V5aS1zaXRlL3NyY1xcYXBwXFxjb3JlXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2hvbWUvZmVhdHVyZS9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXGdhem91eWlcXGdpem91eWktc2l0ZS9zcmNcXGFwcFxcaG9tZVxcZmVhdHVyZVxcZmVhdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHVCQUFjO0VBQ2QscUJBQWE7RUFDYiwwQkFBb0I7RUFDcEIseUJBQW1CO0VBQ25CLHdCQUFnQjtFQUNoQixnQ0FBd0I7RUFDeEIsdUJBQWU7RUFDZiwrQkFBdUI7RUFDdkIscUJBQWE7RUFDYixpQkFBYTtFQUViLHNCQUFjO0VBQ2QscUJBQWE7RUFDYix3QkFBZ0I7RUFDaEIsd0JBQWdCO0VBQ2hCLHVCQUFlO0VBQ2YscUJBQWE7RUFFYixvQkFBWTtFQUNaLHNCQUFjO0VBQ2QscUJBQWE7RUFDYixxQkFBYTtFQUViLGtGQUEyQjtFQUMzQixrRUFBdUI7RUFDdkIsb0VBQXdCO0VBQ3hCLGdGQUE4QjtFQUM5QixrRkFBa0M7RUFDbEMsc0ZBQW9DO0VBQ3BDLHNFQUF3QjtFQUN4QixvRkFBK0I7RUFDL0IsNkVBQTBCLEVBQUE7O0FDaEM5QjtFQUNFLG9EQUFvRDtFQUNwRCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSx5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSxrQkFBa0I7RUFFbEIsc0RBQXNELEVBQUE7O0FBR3hEO0VBRUksa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixzREFBc0QsRUFBQTs7QUFJMUQ7RUFDRTtJQUNFLGlCQUFpQixFQUFBLEVBQ2xCOztBQUdIO0VBQ0U7SUFDRSxpQkFBaUIsRUFBQSxFQUNsQjs7QUFHSDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQixFQUFBO0VBR25CO0lBQ0UsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBQSxFQUNyQjs7QUFHSDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQixFQUFBLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9mZWF0dXJlL2ZlYXR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb2xsb3cgYW5ndWxhciBtYXRlcmlhbCB0aGVtZSBjbGFzcyBhcHBsaWVkIG9uIGJvZHlcclxuLy8gRm9yIG1vciBkZXRhaWxzIGNoZWNrIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL3RoZS1jb2xvci1zeXN0ZW0uaHRtbCNjb2xvci10aGVtZS1jcmVhdGlvblxyXG5cclxuLmRlZmF1bHQge1xyXG4gICAgLS1jb2xvci10aXRsZTogICMzNDM0M0M7XHJcbiAgICAtLWNvbG9yLXRleHQ6ICM3Nzc3Nzc7XHJcbiAgICAtLWNvbG9yLXRleHQtaW52ZXJ0OiB3aGl0ZTtcclxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNEOUVFRjM7XHJcbiAgICAtLWNvbG9yLXByaW1hcnktdmFyaWFudDogIzcwYTJmMjtcclxuICAgIC0tY29sb3ItYWNjZW50OiAjZmZhODljO1xyXG4gICAgLS1jb2xvci1hY2NlbnQtdmFyaWFudDogIzM5NmFjNTtcclxuICAgIC0tY29sb3ItZ3JheTogI2Y0ZjRmNDtcclxuICAgIC0tY29sb3Itd2FybjogcmVkO1xyXG5cclxuICAgIC0tY29sb3Itb2NlYW46ICMxMjdlOWI7XHJcbiAgICAtLWNvbG9yLWJlYXU6ICNjMmQ4ZTM7XHJcbiAgICAtLWNvbG9yLWJheXNpZGU6ICM3M2NhYzM7XHJcbiAgICAtLWNvbG9yLWJsb3Nzb206ICNmY2QyYzA7XHJcbiAgICAtLWNvbG9yLWdvbGRlbjogI2ZjZDQ4NTtcclxuICAgIC0tY29sb3ItbWludDogI2M1ZTZkYTtcclxuXHJcbiAgICAtLXRleHQtZGFyazogIzA3NjA3NztcclxuICAgIC0tdGV4dC1tZWRpdW06ICM1ZjcwN2E7XHJcbiAgICAtLXRleHQtbGlnaHQ6ICNjOGNiY2U7XHJcbiAgICAtLXRleHQtd2hpdGU6ICNmZmZmZmY7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtcGFydG5lcnM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvcGFydG5lcnMtZGVmYXVsdC5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXRlYW06IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvdGVhbS5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXRlYW0yOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3RlYW0yLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtdGVzdGltb25pYWw6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvdGVzdGltb25pYWwuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1uZXdzbGV0dGVyLWJhYnk6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvYmFieS1uZXdzbGV0dGVyLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtbmV3c2xldHRlci1jbG91ZHM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvY2xvdWRzLW5ld3NsZXR0ZXIucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1pbnRybzogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9iYWJ5LXJlYWNoaW5nLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtaW50cm8tbW9iaWxlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2JhYnktcmVhY2hpbmctbW9iaWxlLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbnN0cnVjdGlvbjogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9jb25zdHJ1Y3Rpb24uc3ZnJyk7XHJcbn1cclxuXHJcbi8vIC5uaWdodCB7XHJcbi8vICAgICAtLWNvbG9yLXRpdGxlOiAgcmVkO1xyXG4vLyAgICAgLS1jb2xvci10ZXh0OiByZWQ7XHJcbi8vICAgICAtLWNvbG9yLXRleHQtaW52ZXJ0OiB3aGl0ZTtcclxuLy8gICAgIC0tY29sb3ItYmFja2dyb3VuZDogYmx1ZTtcclxuLy8gICAgIC0tY29sb3ItcHJpbWFyeTogO1xyXG4vLyAgICAgLS1jb2xvci1wcmltYXJ5LXZhcmlhbnQ6IDtcclxuLy8gICAgIC0tY29sb3ItYWNjZW50OiA7XHJcbi8vICAgICAtLWNvbG9yLWFjY2VudC12YXJpYW50OiA7XHJcbi8vICAgICAtLWNvbG9yLXdhcm46IDtcclxuXHJcbi8vICAgICAtLWJhY2tncm91bmQtaG9tZS1wYXJ0bmVyczogdXJsKCcvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmRzL3BhcnRuZXJzLW5pZ2h0LnN2ZycpO1xyXG4vLyB9XHJcbiIsIkBpbXBvcnQgJ2NvbnN0YW50cyc7XHJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4jZmVhdHVyZXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iYWNrZ3JvdW5kLWhvbWUtdGVzdGltb25pYWwpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNsaWNrYWJsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLmNvbGxhcHNlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcclxuICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgLy8gY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgcHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5mZWF0dXJlIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuZmVhdHVyZSB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAucm93e1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG5cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgLnJvd3tcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/feature/feature.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/feature/feature.component.ts ***!
  \***************************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureComponent", function() { return FeatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// 3rd party

var FeatureComponent = /** @class */ (function () {
    function FeatureComponent(breakpointObserver, translate) {
        var _this = this;
        this.translate = translate;
        this.steps = [];
        this.bError = false;
        this.bMobile = false;
        this.bMedium = false;
        this.activeDesktopImgIndex = 0;
        breakpointObserver.observe('(max-width: 767px)').subscribe(function (result) {
            _this.bMobile = result.matches;
        });
        breakpointObserver.observe('(min-width: 768px) and (max-width: 991px)').subscribe(function (result) {
            _this.bMedium = result.matches;
        });
    }
    FeatureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('HOME.FEATURE.STEPS').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
            }
            else {
                _this.steps = res;
            }
        });
    };
    FeatureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feature',
            template: __webpack_require__(/*! ./feature.component.html */ "./src/app/home/feature/feature.component.html"),
            styles: [__webpack_require__(/*! ./feature.component.scss */ "./src/app/home/feature/feature.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], FeatureComponent);
    return FeatureComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Routes
var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-intro></app-intro>\r\n<app-about-reverse></app-about-reverse>\r\n<app-benefits></app-benefits>\r\n<app-about-intro></app-about-intro>\r\n<app-partners></app-partners>\r\n<app-newsletter></app-newsletter>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/home/intro/intro.component.ts");
/* harmony import */ var _research_research_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./research/research.component */ "./src/app/home/research/research.component.ts");
/* harmony import */ var _feature_feature_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feature/feature.component */ "./src/app/home/feature/feature.component.ts");
/* harmony import */ var _screenshot_screenshot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screenshot/screenshot.component */ "./src/app/home/screenshot/screenshot.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./team/team.component */ "./src/app/home/team/team.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/home/blog/blog.component.ts");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./price/price.component */ "./src/app/home/price/price.component.ts");
/* harmony import */ var _benefits_benefits_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./benefits/benefits.component */ "./src/app/home/benefits/benefits.component.ts");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./testimonial/testimonial.component */ "./src/app/home/testimonial/testimonial.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/home/contact-us/contact-us.component.ts");
/* harmony import */ var _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./newsletter/newsletter.component */ "./src/app/home/newsletter/newsletter.component.ts");
/* harmony import */ var _about_reverse_about_reverse_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about-reverse/about-reverse.component */ "./src/app/home/about-reverse/about-reverse.component.ts");
/* harmony import */ var _about_intro_about_intro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./about-intro/about-intro.component */ "./src/app/home/about-intro/about-intro.component.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/home/partners/partners.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/home/privacy/privacy.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./news/news.component */ "./src/app/home/news/news.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/ngx-page-scroll.js");
/* harmony import */ var _privacy_video_video_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./privacy/video/video.component */ "./src/app/home/privacy/video/video.component.ts");
/* harmony import */ var _intro_intro_video_intro_video_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./intro/intro-video/intro-video.component */ "./src/app/home/intro/intro-video/intro-video.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// 3rd party





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                // 3rd party
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_22__["OwlModule"],
                ngx_page_scroll__WEBPACK_IMPORTED_MODULE_23__["NgxPageScrollModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_26__["FontAwesomeModule"]
            ],
            declarations: [
                _partners_partners_component__WEBPACK_IMPORTED_MODULE_19__["PartnersComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"],
                _research_research_component__WEBPACK_IMPORTED_MODULE_7__["ResearchComponent"],
                _feature_feature_component__WEBPACK_IMPORTED_MODULE_8__["FeatureComponent"],
                _screenshot_screenshot_component__WEBPACK_IMPORTED_MODULE_9__["ScreenshotComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"],
                _price_price_component__WEBPACK_IMPORTED_MODULE_12__["PriceComponent"],
                _benefits_benefits_component__WEBPACK_IMPORTED_MODULE_13__["BenefitsComponent"],
                _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_14__["TestimonialComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__["ContactUsComponent"],
                _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_16__["NewsletterComponent"],
                _about_reverse_about_reverse_component__WEBPACK_IMPORTED_MODULE_17__["AboutReverseComponent"],
                _about_intro_about_intro_component__WEBPACK_IMPORTED_MODULE_18__["AboutIntroComponent"],
                _partners_partners_component__WEBPACK_IMPORTED_MODULE_19__["PartnersComponent"],
                _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_20__["PrivacyComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_21__["NewsComponent"],
                _privacy_video_video_component__WEBPACK_IMPORTED_MODULE_24__["VideoComponent"],
                _intro_intro_video_intro_video_component__WEBPACK_IMPORTED_MODULE_25__["IntroVideoComponent"]
            ],
            providers: [],
            entryComponents: [_privacy_video_video_component__WEBPACK_IMPORTED_MODULE_24__["VideoComponent"], _intro_intro_video_intro_video_component__WEBPACK_IMPORTED_MODULE_25__["IntroVideoComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/intro/intro-video/intro-video.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/intro/intro-video/intro-video.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/CHduqryMCAs\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n"

/***/ }),

/***/ "./src/app/home/intro/intro-video/intro-video.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/intro/intro-video/intro-video.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 761px) {\n  iframe {\n    width: 100%;\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9pbnRyby9pbnRyby12aWRlby9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXGdhem91eWlcXGdpem91eWktc2l0ZS9zcmNcXGFwcFxcaG9tZVxcaW50cm9cXGludHJvLXZpZGVvXFxpbnRyby12aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9pbnRyby9pbnRyby12aWRlby9pbnRyby12aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6IDc2MXB4KXtcclxuICBpZnJhbWV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/intro/intro-video/intro-video.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/intro/intro-video/intro-video.component.ts ***!
  \*****************************************************************/
/*! exports provided: IntroVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroVideoComponent", function() { return IntroVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroVideoComponent = /** @class */ (function () {
    function IntroVideoComponent() {
    }
    IntroVideoComponent.prototype.ngOnInit = function () {
    };
    IntroVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro-video',
            template: __webpack_require__(/*! ./intro-video.component.html */ "./src/app/home/intro/intro-video/intro-video.component.html"),
            styles: [__webpack_require__(/*! ./intro-video.component.scss */ "./src/app/home/intro/intro-video/intro-video.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroVideoComponent);
    return IntroVideoComponent;
}());



/***/ }),

/***/ "./src/app/home/intro/intro.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/intro/intro.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"intro\" class=\"intro\">\r\n  <div class=\"container\">\r\n    <div class=\"row d-flex align-content-center\">\r\n      <div class=\"col-md-8 col-lg-8 mx-auto align-self-center text-center\">\r\n        <div class=\"intro-contain\">\r\n          <div>\r\n            <h1 [innerHTML]=\"'HOME.INTRO.CATCHPHRASE' | translate\"></h1>\r\n            \r\n            <div class=\"home-buttons\">\r\n                <button mat-flat-button color=\"accent\" class=\"m2\" [routerLink]=\"'/home'\" href=\"#newsletter\"\r\n                [pageScrollOffset]=\"80\" pageScroll *ngIf=\"!bMobile\">{{ 'HOME.INTRO.BTN' | translate }}</button>\r\n                <!-- <button mat-flat-button color=\"accent\" class=\"m2\" [routerLink]=\"'/home'\" href=\"#newsletter\"\r\n                [pageScrollOffset]=\"80\" pageScroll *ngIf=\"!bMobile\">{{ 'HOME.INTRO.BTN-PLAY' | translate }} &nbsp; <i class=\"fa fa-play-circle fa-lg\"></i></button> -->\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/intro/intro.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/intro/intro.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  --color-title:  #34343C;\n  --color-text: #777777;\n  --color-text-invert: white;\n  --color-background: white;\n  --color-primary: #D9EEF3;\n  --color-primary-variant: #70a2f2;\n  --color-accent: #ffa89c;\n  --color-accent-variant: #396ac5;\n  --color-gray: #f4f4f4;\n  --color-warn: red;\n  --color-ocean: #127e9b;\n  --color-beau: #c2d8e3;\n  --color-bayside: #73cac3;\n  --color-blossom: #fcd2c0;\n  --color-golden: #fcd485;\n  --color-mint: #c5e6da;\n  --text-dark: #076077;\n  --text-medium: #5f707a;\n  --text-light: #c8cbce;\n  --text-white: #ffffff;\n  --background-home-partners: url('/assets/images/backgrounds/partners-default.svg');\n  --background-home-team: url('/assets/images/backgrounds/team.svg');\n  --background-home-team2: url('/assets/images/backgrounds/team2.svg');\n  --background-home-testimonial: url('/assets/images/backgrounds/testimonial.svg');\n  --background-home-newsletter-baby: url('/assets/images/illus/baby-newsletter.png');\n  --background-home-newsletter-clouds: url('/assets/images/illus/clouds-newsletter.png');\n  --background-home-intro: url('/assets/images/illus/baby-reaching.png');\n  --background-home-intro-mobile: url('/assets/images/illus/baby-reaching-mobile.png');\n  --background-construction: url('/assets/images/backgrounds/construction.svg'); }\n\n.intro {\n  background: #faf8f7 var(--background-home-intro);\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center bottom;\n  box-shadow: 0 0 0px rgba(0, 0, 0, 0) !important;\n  min-height: 100vh; }\n\n.intro .row {\n    min-height: 100vh; }\n\n.intro .home-buttons {\n    margin-top: 40px; }\n\n.intro button {\n    margin-top: 10px;\n    padding: 5px 40px;\n    max-width: 70%;\n    background-color: var(--color-bayside);\n    text-transform: uppercase;\n    margin-left: 10px;\n    margin-right: 10px; }\n\n.intro .intro-img img {\n    width: 150%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9pbnRyby9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXGdhem91eWlcXGdpem91eWktc2l0ZS9zcmNcXGFwcFxcY29yZVxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9ob21lL2ludHJvL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcZ2F6b3V5aVxcZ2l6b3V5aS1zaXRlL3NyY1xcYXBwXFxob21lXFxpbnRyb1xcaW50cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx1QkFBYztFQUNkLHFCQUFhO0VBQ2IsMEJBQW9CO0VBQ3BCLHlCQUFtQjtFQUNuQix3QkFBZ0I7RUFDaEIsZ0NBQXdCO0VBQ3hCLHVCQUFlO0VBQ2YsK0JBQXVCO0VBQ3ZCLHFCQUFhO0VBQ2IsaUJBQWE7RUFFYixzQkFBYztFQUNkLHFCQUFhO0VBQ2Isd0JBQWdCO0VBQ2hCLHdCQUFnQjtFQUNoQix1QkFBZTtFQUNmLHFCQUFhO0VBRWIsb0JBQVk7RUFDWixzQkFBYztFQUNkLHFCQUFhO0VBQ2IscUJBQWE7RUFFYixrRkFBMkI7RUFDM0Isa0VBQXVCO0VBQ3ZCLG9FQUF3QjtFQUN4QixnRkFBOEI7RUFDOUIsa0ZBQWtDO0VBQ2xDLHNGQUFvQztFQUNwQyxzRUFBd0I7RUFDeEIsb0ZBQStCO0VBQy9CLDZFQUEwQixFQUFBOztBQ2pDOUI7RUFDRSxnREFBZ0Q7RUFDaEQsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixrQ0FBa0M7RUFDbEMsK0NBQTRDO0VBQzVDLGlCQUFpQixFQUFBOztBQU5uQjtJQVNJLGlCQUFpQixFQUFBOztBQVRyQjtJQWFFLGdCQUFnQixFQUFBOztBQWJsQjtJQWlCSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTs7QUF2QnRCO0lBNEJNLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb2xsb3cgYW5ndWxhciBtYXRlcmlhbCB0aGVtZSBjbGFzcyBhcHBsaWVkIG9uIGJvZHlcclxuLy8gRm9yIG1vciBkZXRhaWxzIGNoZWNrIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL3RoZS1jb2xvci1zeXN0ZW0uaHRtbCNjb2xvci10aGVtZS1jcmVhdGlvblxyXG5cclxuLmRlZmF1bHQge1xyXG4gICAgLS1jb2xvci10aXRsZTogICMzNDM0M0M7XHJcbiAgICAtLWNvbG9yLXRleHQ6ICM3Nzc3Nzc7XHJcbiAgICAtLWNvbG9yLXRleHQtaW52ZXJ0OiB3aGl0ZTtcclxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNEOUVFRjM7XHJcbiAgICAtLWNvbG9yLXByaW1hcnktdmFyaWFudDogIzcwYTJmMjtcclxuICAgIC0tY29sb3ItYWNjZW50OiAjZmZhODljO1xyXG4gICAgLS1jb2xvci1hY2NlbnQtdmFyaWFudDogIzM5NmFjNTtcclxuICAgIC0tY29sb3ItZ3JheTogI2Y0ZjRmNDtcclxuICAgIC0tY29sb3Itd2FybjogcmVkO1xyXG5cclxuICAgIC0tY29sb3Itb2NlYW46ICMxMjdlOWI7XHJcbiAgICAtLWNvbG9yLWJlYXU6ICNjMmQ4ZTM7XHJcbiAgICAtLWNvbG9yLWJheXNpZGU6ICM3M2NhYzM7XHJcbiAgICAtLWNvbG9yLWJsb3Nzb206ICNmY2QyYzA7XHJcbiAgICAtLWNvbG9yLWdvbGRlbjogI2ZjZDQ4NTtcclxuICAgIC0tY29sb3ItbWludDogI2M1ZTZkYTtcclxuXHJcbiAgICAtLXRleHQtZGFyazogIzA3NjA3NztcclxuICAgIC0tdGV4dC1tZWRpdW06ICM1ZjcwN2E7XHJcbiAgICAtLXRleHQtbGlnaHQ6ICNjOGNiY2U7XHJcbiAgICAtLXRleHQtd2hpdGU6ICNmZmZmZmY7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtcGFydG5lcnM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvcGFydG5lcnMtZGVmYXVsdC5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXRlYW06IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvdGVhbS5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXRlYW0yOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3RlYW0yLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtdGVzdGltb25pYWw6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvdGVzdGltb25pYWwuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1uZXdzbGV0dGVyLWJhYnk6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvYmFieS1uZXdzbGV0dGVyLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtbmV3c2xldHRlci1jbG91ZHM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvY2xvdWRzLW5ld3NsZXR0ZXIucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1pbnRybzogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9iYWJ5LXJlYWNoaW5nLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtaW50cm8tbW9iaWxlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2JhYnktcmVhY2hpbmctbW9iaWxlLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbnN0cnVjdGlvbjogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9jb25zdHJ1Y3Rpb24uc3ZnJyk7XHJcbn1cclxuXHJcbi8vIC5uaWdodCB7XHJcbi8vICAgICAtLWNvbG9yLXRpdGxlOiAgcmVkO1xyXG4vLyAgICAgLS1jb2xvci10ZXh0OiByZWQ7XHJcbi8vICAgICAtLWNvbG9yLXRleHQtaW52ZXJ0OiB3aGl0ZTtcclxuLy8gICAgIC0tY29sb3ItYmFja2dyb3VuZDogYmx1ZTtcclxuLy8gICAgIC0tY29sb3ItcHJpbWFyeTogO1xyXG4vLyAgICAgLS1jb2xvci1wcmltYXJ5LXZhcmlhbnQ6IDtcclxuLy8gICAgIC0tY29sb3ItYWNjZW50OiA7XHJcbi8vICAgICAtLWNvbG9yLWFjY2VudC12YXJpYW50OiA7XHJcbi8vICAgICAtLWNvbG9yLXdhcm46IDtcclxuXHJcbi8vICAgICAtLWJhY2tncm91bmQtaG9tZS1wYXJ0bmVyczogdXJsKCcvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmRzL3BhcnRuZXJzLW5pZ2h0LnN2ZycpO1xyXG4vLyB9XHJcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4uaW50cm8ge1xyXG4gIGJhY2tncm91bmQ6ICNmYWY4ZjcgdmFyKC0tYmFja2dyb3VuZC1ob21lLWludHJvKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwcHggcmdiYSgwLDAsMCwwKSAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAucm93IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcbi5ob21lLWJ1dHRvbnN7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweCA0MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYXlzaWRlKTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5pbnRyby1pbWcge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbi8vICAgLmludHJvIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpIHZhcigtLWJhY2tncm91bmQtaG9tZS1pbnRyby1tb2JpbGUpO1xyXG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMCAwcHggcmdiYSgwLDAsMCwwKSAhaW1wb3J0YW50O1xyXG4vLyAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/intro/intro.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/intro/intro.component.ts ***!
  \***********************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_home_intro_intro_video_intro_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/home/intro/intro-video/intro-video.component */ "./src/app/home/intro/intro-video/intro-video.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// 3rd party



var IntroComponent = /** @class */ (function () {
    function IntroComponent(breakpointObserver, translate, dialog) {
        var _this = this;
        this.translate = translate;
        this.dialog = dialog;
        this.bError = false;
        this.bMobile = false;
        this.paragraphs = [{
                PARAGRAPH: 'Loading...',
            }];
        breakpointObserver.observe('(max-width: 767px)').subscribe(function (result) {
            _this.bMobile = result.matches;
        });
    }
    IntroComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(src_app_home_intro_intro_video_intro_video_component__WEBPACK_IMPORTED_MODULE_4__["IntroVideoComponent"], {
            position: { top: '15vh' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/home/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/home/intro/intro.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/home/news/news.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/news/news.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"home-news\" class=\"home-news\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n          <div class=\"col-12 title-area\">\r\n              <h2 class=\"title text-left\">{{ 'PAGES.NEWS.TITLE' | translate }}</h2>\r\n              <p>{{ 'PAGES.NEWS.SUBTITLE' | translate }}</p>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!bMedium; else medium\">\r\n          <div class=\"row col-10 mx-auto\" >\r\n            <ng-container *ngFor=\"let article of articles; let i=index;\">\r\n              <ng-container *ngIf=\"i<3\">\r\n                <div class=\"gallery-item col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 {{ article.FILTER }}\">\r\n                  <mat-card class=\"gallery-card\">\r\n                    <a href=\"{{ article.HREF }}\" target=\"_blank\">\r\n                    <div mat-card-image class=\"news-image\" [style.backgroundImage]=\"'url('+article.IMG.SRC+')'\"></div>\r\n                    <h6>{{ article.HEADLINE }}</h6>\r\n                    <p>{{ article.PUBLISHER }} &nbsp;  {{ article.LANGUAGE }}</p>\r\n                  </a>\r\n                  </mat-card>\r\n                </div>\r\n              </ng-container>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"news-BTN col-10 mx-auto text-center\">\r\n          <button mat-flat-button color=\"accent\" class=\"m2\" [routerLink]=\"'/pages/news'\" href=\"\" >{{ 'PAGES.NEWS.BTN-MORE' | translate }}</button>\r\n        </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<ng-template #medium>\r\n  <ng-container *ngIf=\"!bMobile; else mobile\">\r\n    <div class=\"row col-10 mx-auto\" >\r\n      <ng-container *ngFor=\"let article of articles; let i=index;\">\r\n        <ng-container *ngIf=\"i<2\">\r\n          <div class=\"gallery-item col-6 {{ article.FILTER }}\">\r\n            <mat-card class=\"gallery-card\">\r\n              <a href=\"{{ article.HREF }}\" target=\"_blank\">\r\n              <div mat-card-image class=\"news-image\" [style.backgroundImage]=\"'url('+article.IMG.SRC+')'\"></div>\r\n              <h6>{{ article.HEADLINE }}</h6>\r\n              <p>{{ article.PUBLISHER }} &nbsp;  {{ article.LANGUAGE }}</p>\r\n            </a>\r\n            </mat-card>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n    </div>\r\n  </ng-container>\r\n</ng-template>\r\n\r\n<ng-template #mobile>\r\n      <div class=\"row col-10 mx-auto\" >\r\n        <ng-container *ngFor=\"let article of articles; let i=index;\">\r\n          <ng-container *ngIf=\"i<1\">\r\n            <div class=\"gallery-item col-12 {{ article.FILTER }}\">\r\n              <mat-card class=\"gallery-card\">\r\n                <a href=\"{{ article.HREF }}\" target=\"_blank\">\r\n                <div mat-card-image class=\"news-image\" [style.backgroundImage]=\"'url('+article.IMG.SRC+')'\"></div>\r\n                <h6>{{ article.HEADLINE }}</h6>\r\n                <p>{{ article.PUBLISHER }} &nbsp;  {{ article.LANGUAGE }}</p>\r\n              </a>\r\n              </mat-card>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n      </div>\r\n  </ng-template>\r\n"

/***/ }),

/***/ "./src/app/home/news/news.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/news/news.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  --color-title:  #34343C;\n  --color-text: #777777;\n  --color-text-invert: white;\n  --color-background: white;\n  --color-primary: #D9EEF3;\n  --color-primary-variant: #70a2f2;\n  --color-accent: #ffa89c;\n  --color-accent-variant: #396ac5;\n  --color-gray: #f4f4f4;\n  --color-warn: red;\n  --color-ocean: #127e9b;\n  --color-beau: #c2d8e3;\n  --color-bayside: #73cac3;\n  --color-blossom: #fcd2c0;\n  --color-golden: #fcd485;\n  --color-mint: #c5e6da;\n  --text-dark: #076077;\n  --text-medium: #5f707a;\n  --text-light: #c8cbce;\n  --text-white: #ffffff;\n  --background-home-partners: url('/assets/images/backgrounds/partners-default.svg');\n  --background-home-team: url('/assets/images/backgrounds/team.svg');\n  --background-home-team2: url('/assets/images/backgrounds/team2.svg');\n  --background-home-testimonial: url('/assets/images/backgrounds/testimonial.svg');\n  --background-home-newsletter-baby: url('/assets/images/illus/baby-newsletter.png');\n  --background-home-newsletter-clouds: url('/assets/images/illus/clouds-newsletter.png');\n  --background-home-intro: url('/assets/images/illus/baby-reaching.png');\n  --background-home-intro-mobile: url('/assets/images/illus/baby-reaching-mobile.png');\n  --background-construction: url('/assets/images/backgrounds/construction.svg'); }\n\n.home-news {\n  background-image: var(--background-home-testimonial);\n  background-size: cover;\n  position: relative;\n  width: 100vw;\n  padding-top: 10vh; }\n\n.home-news .title-area {\n    padding-bottom: 30px; }\n\n.home-news .news-BTN {\n    padding-bottom: 50px; }\n\n.home-news button {\n    padding: 5px 40px;\n    max-width: 70%;\n    background-color: var(--color-accent);\n    text-transform: uppercase; }\n\n.gallery-item {\n  margin-bottom: 30px;\n  display: -webkit-box;\n  display: flex; }\n\n.gallery-item img {\n    -o-object-fit: cover !important;\n       object-fit: cover !important; }\n\n.gallery-item p {\n    margin-bottom: 0; }\n\n.gallery-item .news-image {\n    padding-bottom: 100%;\n    background-color: var(--color-primary);\n    background-size: cover;\n    background-position: center; }\n\n.gallery-item .gallery-card {\n    width: 100%; }\n\n.filter-btns {\n  padding-bottom: 30px; }\n\n.mat-card {\n  font-family: 'Open sans', Arial, Helvetica, sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9uZXdzL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcZ2F6b3V5aVxcZ2l6b3V5aS1zaXRlL3NyY1xcYXBwXFxjb3JlXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2hvbWUvbmV3cy9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXGdhem91eWlcXGdpem91eWktc2l0ZS9zcmNcXGFwcFxcaG9tZVxcbmV3c1xcbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHVCQUFjO0VBQ2QscUJBQWE7RUFDYiwwQkFBb0I7RUFDcEIseUJBQW1CO0VBQ25CLHdCQUFnQjtFQUNoQixnQ0FBd0I7RUFDeEIsdUJBQWU7RUFDZiwrQkFBdUI7RUFDdkIscUJBQWE7RUFDYixpQkFBYTtFQUViLHNCQUFjO0VBQ2QscUJBQWE7RUFDYix3QkFBZ0I7RUFDaEIsd0JBQWdCO0VBQ2hCLHVCQUFlO0VBQ2YscUJBQWE7RUFFYixvQkFBWTtFQUNaLHNCQUFjO0VBQ2QscUJBQWE7RUFDYixxQkFBYTtFQUViLGtGQUEyQjtFQUMzQixrRUFBdUI7RUFDdkIsb0VBQXdCO0VBQ3hCLGdGQUE4QjtFQUM5QixrRkFBa0M7RUFDbEMsc0ZBQW9DO0VBQ3BDLHNFQUF3QjtFQUN4QixvRkFBK0I7RUFDL0IsNkVBQTBCLEVBQUE7O0FDaEM5QjtFQUNFLG9EQUFvRDtFQUNwRCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFMbkI7SUFRSSxvQkFBb0IsRUFBQTs7QUFSeEI7SUFXSSxvQkFBb0IsRUFBQTs7QUFYeEI7SUFjSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHFDQUFxQztJQUNyQyx5QkFBeUIsRUFBQTs7QUFJN0I7RUFFSSxtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhLEVBQUE7O0FBSGpCO0lBT00sK0JBQTZCO09BQTdCLDRCQUE2QixFQUFBOztBQVBuQztJQVdNLGdCQUFnQixFQUFBOztBQVh0QjtJQWVNLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLDJCQUEyQixFQUFBOztBQWxCakM7SUFzQk0sV0FBVyxFQUFBOztBQUtqQjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLHNEQUFzRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb2xsb3cgYW5ndWxhciBtYXRlcmlhbCB0aGVtZSBjbGFzcyBhcHBsaWVkIG9uIGJvZHlcclxuLy8gRm9yIG1vciBkZXRhaWxzIGNoZWNrIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL3RoZS1jb2xvci1zeXN0ZW0uaHRtbCNjb2xvci10aGVtZS1jcmVhdGlvblxyXG5cclxuLmRlZmF1bHQge1xyXG4gICAgLS1jb2xvci10aXRsZTogICMzNDM0M0M7XHJcbiAgICAtLWNvbG9yLXRleHQ6ICM3Nzc3Nzc7XHJcbiAgICAtLWNvbG9yLXRleHQtaW52ZXJ0OiB3aGl0ZTtcclxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNEOUVFRjM7XHJcbiAgICAtLWNvbG9yLXByaW1hcnktdmFyaWFudDogIzcwYTJmMjtcclxuICAgIC0tY29sb3ItYWNjZW50OiAjZmZhODljO1xyXG4gICAgLS1jb2xvci1hY2NlbnQtdmFyaWFudDogIzM5NmFjNTtcclxuICAgIC0tY29sb3ItZ3JheTogI2Y0ZjRmNDtcclxuICAgIC0tY29sb3Itd2FybjogcmVkO1xyXG5cclxuICAgIC0tY29sb3Itb2NlYW46ICMxMjdlOWI7XHJcbiAgICAtLWNvbG9yLWJlYXU6ICNjMmQ4ZTM7XHJcbiAgICAtLWNvbG9yLWJheXNpZGU6ICM3M2NhYzM7XHJcbiAgICAtLWNvbG9yLWJsb3Nzb206ICNmY2QyYzA7XHJcbiAgICAtLWNvbG9yLWdvbGRlbjogI2ZjZDQ4NTtcclxuICAgIC0tY29sb3ItbWludDogI2M1ZTZkYTtcclxuXHJcbiAgICAtLXRleHQtZGFyazogIzA3NjA3NztcclxuICAgIC0tdGV4dC1tZWRpdW06ICM1ZjcwN2E7XHJcbiAgICAtLXRleHQtbGlnaHQ6ICNjOGNiY2U7XHJcbiAgICAtLXRleHQtd2hpdGU6ICNmZmZmZmY7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtcGFydG5lcnM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvcGFydG5lcnMtZGVmYXVsdC5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXRlYW06IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvdGVhbS5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXRlYW0yOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3RlYW0yLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtdGVzdGltb25pYWw6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvdGVzdGltb25pYWwuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1uZXdzbGV0dGVyLWJhYnk6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvYmFieS1uZXdzbGV0dGVyLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtbmV3c2xldHRlci1jbG91ZHM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvY2xvdWRzLW5ld3NsZXR0ZXIucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1pbnRybzogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9iYWJ5LXJlYWNoaW5nLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtaW50cm8tbW9iaWxlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2JhYnktcmVhY2hpbmctbW9iaWxlLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbnN0cnVjdGlvbjogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9jb25zdHJ1Y3Rpb24uc3ZnJyk7XHJcbn1cclxuXHJcbi8vIC5uaWdodCB7XHJcbi8vICAgICAtLWNvbG9yLXRpdGxlOiAgcmVkO1xyXG4vLyAgICAgLS1jb2xvci10ZXh0OiByZWQ7XHJcbi8vICAgICAtLWNvbG9yLXRleHQtaW52ZXJ0OiB3aGl0ZTtcclxuLy8gICAgIC0tY29sb3ItYmFja2dyb3VuZDogYmx1ZTtcclxuLy8gICAgIC0tY29sb3ItcHJpbWFyeTogO1xyXG4vLyAgICAgLS1jb2xvci1wcmltYXJ5LXZhcmlhbnQ6IDtcclxuLy8gICAgIC0tY29sb3ItYWNjZW50OiA7XHJcbi8vICAgICAtLWNvbG9yLWFjY2VudC12YXJpYW50OiA7XHJcbi8vICAgICAtLWNvbG9yLXdhcm46IDtcclxuXHJcbi8vICAgICAtLWJhY2tncm91bmQtaG9tZS1wYXJ0bmVyczogdXJsKCcvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmRzL3BhcnRuZXJzLW5pZ2h0LnN2ZycpO1xyXG4vLyB9XHJcbiIsIkBpbXBvcnQgJ2NvbnN0YW50cyc7XHJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4uaG9tZS1uZXdzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iYWNrZ3JvdW5kLWhvbWUtdGVzdGltb25pYWwpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwYWRkaW5nLXRvcDogMTB2aDtcclxuXHJcbiAgLnRpdGxlLWFyZWF7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgLm5ld3MtQlROe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA1cHggNDBweDtcclxuICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG59XHJcblxyXG4uZ2FsbGVyeS1pdGVtXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50IDtcclxuICAgIH1cclxuXHJcbiAgICBwe1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5uZXdzLWltYWdle1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZ2FsbGVyeS1jYXJke1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5maWx0ZXItYnRuc3tcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm1hdC1jYXJke1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/news/news.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/news/news.component.ts ***!
  \*********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// 3rd party


var NewsComponent = /** @class */ (function () {
    function NewsComponent(breakpointObserver, translate, dialog) {
        var _this = this;
        this.translate = translate;
        this.dialog = dialog;
        this.bError = false;
        this.bMobile = false;
        this.bMedium = false;
        this.articles = [{
                IMG: {
                    ALT: '',
                    SRC: ''
                },
                HEADLINE: 'Loading',
                PUBLISHER: 'Loading...',
                HREF: 'Loading...',
                FILTER: 'Loading...',
                LANGUAGE: 'Loading...'
            }];
        breakpointObserver.observe('(max-width: 767px)').subscribe(function (result) {
            _this.bMobile = result.matches;
        });
        breakpointObserver.observe('(max-width: 991px)').subscribe(function (result) {
            _this.bMedium = result.matches;
        });
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('PAGES.NEWS.ARTICLES').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.articles = [{
                        HEADLINE: 'An error occured',
                        PUBLISHER: 'Cannot get translation',
                        HREF: 'Cannot get translation',
                        FILTER: 'Cannot get translation',
                        LANGUAGE: 'Cannot get translation',
                        IMG: {
                            ALT: '',
                            SRC: ''
                        }
                    }];
            }
            else {
                _this.articles = res;
            }
        });
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/home/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/home/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/home/newsletter/newsletter.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/newsletter/newsletter.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"newsletter\" class=\"container\">\r\n  <div class=\"row pt-5 pb-5\">\r\n    <div class=\"col-11 col-md-9 mx-auto\">\r\n      <div class=\"row d-flex align-items-center\">\r\n\r\n        <div class=\"col-8 col-md-5 mx-auto mail-image\">\r\n            <img src=\"{{ 'HOME.NEWSLETTER.IMG.SRC'| translate }}\" alt=\"{{ 'HOME.NEWSLETTER.IMG.ALT' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-11 col-md-7\">\r\n\r\n    <div class=\"newsletter-info mx-auto\">\r\n      <div>\r\n        <h2 class=\"title text-center text-md-left md-margin-top\">{{ 'HOME.NEWSLETTER.CATCHPHRASE' | translate }}</h2>\r\n        <p\r\n          class=\"text-center text-md-left newsletter-description\" [innerHTML]=\"'HOME.NEWSLETTER.DESCRIPTION' | translate\"></p>\r\n      </div>\r\n      <div class=\"row ml-auto ml-md-0 mt-5\">\r\n          <a  class=\"mx-md-0 mx-auto\" href=\"{{ 'HOME.NEWSLETTER.HREF' | translate }}\"><button mat-flat-button color=\"primary\">{{ 'HOME.NEWSLETTER.BTN-SEND' | translate }}</button></a>\r\n        </div>\r\n        <div class=\"mx-md-0 mx-auto disclaimer text-justify mt-3\"><p>{{ 'HOME.NEWSLETTER.DISCLAIMER' | translate }}</p></div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n</div>\r\n</div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/newsletter/newsletter.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/newsletter/newsletter.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#newsletter {\n  min-height: 90vh;\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  background-position: center bottom, center top;\n  background-color: var(--color-mint);\n  margin: 0px;\n  width: 100vw;\n  max-width: none; }\n  #newsletter .newsletter-info {\n    max-width: 450px !important;\n    margin: 0;\n    padding: 0; }\n  #newsletter .newsletter-info-success {\n    max-width: 550px !important;\n    margin: 0;\n    padding: 0; }\n  #newsletter .newsletter-info-success h3 {\n      text-transform: none; }\n  #newsletter .disclaimer {\n    margin: 0;\n    margin-top: 15px;\n    width: 300px;\n    padding: 0; }\n  #newsletter .disclaimer p {\n      font-size: 0.5em;\n      line-height: auto; }\n  .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  button {\n  padding: 5px 40px;\n  text-transform: uppercase; }\n  ::ng-deep #newsletter .mat-form-field .mat-form-field-flex {\n  background-color: var(--color-background);\n  width: 300px; }\n  .mail-image img {\n  width: 100%; }\n  @media screen and (max-width: 575px) {\n  .mat-form-field {\n    margin-top: 0px !important;\n    margin-bottom: 0px !important; }\n  .input-buttons {\n    margin: 20px 0px; }\n  #newsletter {\n    padding-top: 3rem;\n    padding-bottom: 3rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9uZXdzbGV0dGVyL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcZ2F6b3V5aVxcZ2l6b3V5aS1zaXRlL3NyY1xcYXBwXFxob21lXFxuZXdzbGV0dGVyXFxuZXdzbGV0dGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBRWhCLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsOENBQThDO0VBRTlDLG1DQUFtQztFQUNuQyxXQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWUsRUFBQTtFQVZuQjtJQWFNLDJCQUEyQjtJQUMzQixTQUFRO0lBQ1IsVUFBUyxFQUFBO0VBZmY7SUFtQk0sMkJBQTJCO0lBQzNCLFNBQVE7SUFDUixVQUFTLEVBQUE7RUFyQmY7TUF1QlEsb0JBQW9CLEVBQUE7RUF2QjVCO0lBNkJNLFNBQVE7SUFDUixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVMsRUFBQTtFQWhDZjtNQWtDUSxnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUE7RUFLekI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7RUFHM0I7RUFDRSxpQkFBaUI7RUFHakIseUJBQXlCLEVBQUE7RUFHM0I7RUFHTSx5Q0FBeUM7RUFDekMsWUFBWSxFQUFBO0VBS2xCO0VBRUksV0FBVyxFQUFBO0VBSWY7RUFTSTtJQUNFLDBCQUEwQjtJQUMxQiw2QkFBNkIsRUFBQTtFQUcvQjtJQUNFLGdCQUFnQixFQUFBO0VBR2xCO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQixFQUFBLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9uZXdzbGV0dGVyL25ld3NsZXR0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmV3c2xldHRlciB7XHJcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gICAgLy8gYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob21lLW5ld3NsZXR0ZXItYmFieSksIHZhcigtLWJhY2tncm91bmQtaG9tZS1uZXdzbGV0dGVyLWNsb3Vkcyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tLCBjZW50ZXIgdG9wO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1pbnQpO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1heC13aWR0aDogbm9uZTtcclxuXHJcbiAgICAubmV3c2xldHRlci1pbmZve1xyXG4gICAgICBtYXgtd2lkdGg6IDQ1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjowO1xyXG4gICAgICBwYWRkaW5nOjA7XHJcbiAgICB9XHJcblxyXG4gICAgLm5ld3NsZXR0ZXItaW5mby1zdWNjZXNze1xyXG4gICAgICBtYXgtd2lkdGg6IDU1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjowO1xyXG4gICAgICBwYWRkaW5nOjA7XHJcbiAgICAgIGgze1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5kaXNjbGFpbWVye1xyXG4gICAgICBtYXJnaW46MDtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICBwYWRkaW5nOjA7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHBhZGRpbmc6IDVweCA0MHB4O1xyXG4gIC8vIG1heC13aWR0aDogNzAlO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAjbmV3c2xldHRlcntcclxuICAgIC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtZmxleHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tYWlsLWltYWdle1xyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC8vICNuZXdzbGV0dGVye1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvbWUtbmV3c2xldHRlci1jbG91ZHMpO1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxuICAgIC8vICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWJ1dHRvbnN7XHJcbiAgICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI25ld3NsZXR0ZXJ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/newsletter/newsletter.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/newsletter/newsletter.component.ts ***!
  \*********************************************************/
/*! exports provided: NewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function() { return NewsletterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_subscribe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/subscribe.service */ "./src/app/core/services/subscribe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// 3rd party


var NewsletterComponent = /** @class */ (function () {
    function NewsletterComponent(_fb, translate, subService) {
        this._fb = _fb;
        this.translate = translate;
        this.subService = subService;
        this.bError = false;
        this.profileTypes = [];
        this.userSubscribed = false;
        this.errorWhileSubbing = false;
        this.contactForm = this._fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
        });
    }
    NewsletterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('HOME.NEWSLETTER.PROFILES').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
            }
        });
    };
    NewsletterComponent.prototype.sendForm = function () {
        var _this = this;
        console.log(this.contactForm.value);
        if (this.contactForm.valid) {
            var subForm = this.contactForm.value;
            // this is wrong but i couldn't fix it when i needed to.
            this.subService.subscribe(subForm['email'], subForm['email']).subscribe(function (data) {
                console.info('Successfully subscribed');
                _this.userSubscribed = true;
            }, function (error) {
                console.info('Error While Subbing');
                _this.errorWhileSubbing = true;
            });
        }
    };
    NewsletterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newsletter',
            template: __webpack_require__(/*! ./newsletter.component.html */ "./src/app/home/newsletter/newsletter.component.html"),
            styles: [__webpack_require__(/*! ./newsletter.component.scss */ "./src/app/home/newsletter/newsletter.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _core_services_subscribe_service__WEBPACK_IMPORTED_MODULE_3__["SubscribeService"]])
    ], NewsletterComponent);
    return NewsletterComponent;
}());



/***/ }),

/***/ "./src/app/home/partners/partners.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/partners/partners.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"partners\" class=\"partners\">\r\n  <div class=\"container-fluid pt-5 pb-5\">\r\n    <div class=\"col-12 col-md-9 pt-5 pb-5 mx-auto\">\r\n      <div class=\"row align-items-center\">\r\n\r\n        <div class=\"col-6 col-md-4 mx-auto best-ribbon\">\r\n          <img src=\"{{ 'HOME.PARTNERS.IMG.SRC' | translate }}\" alt=\"{{ 'HOME.PARTNERS.IMG.ALT' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-12 col-md-8 mx-auto\">\r\n          <h2 class=\"title text-center text-md-left md-margin-top\">{{ 'HOME.PARTNERS.TITLE' | translate }}</h2>\r\n          <p class=\"text-center text-md-left newsletter-description\">{{ 'HOME.PARTNERS.DESCRIPTION' | translate }}</p>\r\n\r\n          <div class=\"text-center text-md-left\">\r\n            <a [routerLink]=\"'/pages/about-us'\">\r\n              <button mat-flat-button color=\"accent\">{{ 'HOME.PARTNERS.BTN' | translate }}</button>\r\n            </a>\r\n          </div>\r\n      </div>\r\n\r\n\r\n\r\n        <div class=\"col-12 mx-auto mt-5\">\r\n          <div class=\"d-flex justify-content-around align-items-center flex-wrap\"\r\n            *ngIf=\"(supports$ | async) as supports; else loading\">\r\n            <div class=\"partner-item\" *ngFor=\"let support of supports\">\r\n              <img src=\"{{ support.IMG.SRC }}\" alt=\"{{ support.IMG.ALT}}\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n\r\n<ng-template #loading>\r\n  <p>Loading...</p>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/home/partners/partners.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/partners/partners.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  --color-title:  #34343C;\n  --color-text: #777777;\n  --color-text-invert: white;\n  --color-background: white;\n  --color-primary: #D9EEF3;\n  --color-primary-variant: #70a2f2;\n  --color-accent: #ffa89c;\n  --color-accent-variant: #396ac5;\n  --color-gray: #f4f4f4;\n  --color-warn: red;\n  --color-ocean: #127e9b;\n  --color-beau: #c2d8e3;\n  --color-bayside: #73cac3;\n  --color-blossom: #fcd2c0;\n  --color-golden: #fcd485;\n  --color-mint: #c5e6da;\n  --text-dark: #076077;\n  --text-medium: #5f707a;\n  --text-light: #c8cbce;\n  --text-white: #ffffff;\n  --background-home-partners: url('/assets/images/backgrounds/partners-default.svg');\n  --background-home-team: url('/assets/images/backgrounds/team.svg');\n  --background-home-team2: url('/assets/images/backgrounds/team2.svg');\n  --background-home-testimonial: url('/assets/images/backgrounds/testimonial.svg');\n  --background-home-newsletter-baby: url('/assets/images/illus/baby-newsletter.png');\n  --background-home-newsletter-clouds: url('/assets/images/illus/clouds-newsletter.png');\n  --background-home-intro: url('/assets/images/illus/baby-reaching.png');\n  --background-home-intro-mobile: url('/assets/images/illus/baby-reaching-mobile.png');\n  --background-construction: url('/assets/images/backgrounds/construction.svg'); }\n\n.partners {\n  background-color: var(--color-beau); }\n\n.partners .partner-item {\n    margin: 25px; }\n\n.partners .partner-item img {\n      width: 6vw;\n      height: auto;\n      min-width: 40px; }\n\n.partners .partner-description {\n    border-bottom: 1px solid var(--color-text);\n    padding: 10px 30px; }\n\n.partners button {\n    padding: 5px 40px;\n    background-color: var(--color-ocean);\n    text-transform: uppercase; }\n\n.partners .best-ribbon img {\n    width: 100%; }\n\n@media screen and (max-width: 575px) {\n  .partners .partner-item {\n    margin: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYXJ0bmVycy9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXGdhem91eWlcXGdpem91eWktc2l0ZS9zcmNcXGFwcFxcY29yZVxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9ob21lL3BhcnRuZXJzL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcZ2F6b3V5aVxcZ2l6b3V5aS1zaXRlL3NyY1xcYXBwXFxob21lXFxwYXJ0bmVyc1xccGFydG5lcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx1QkFBYztFQUNkLHFCQUFhO0VBQ2IsMEJBQW9CO0VBQ3BCLHlCQUFtQjtFQUNuQix3QkFBZ0I7RUFDaEIsZ0NBQXdCO0VBQ3hCLHVCQUFlO0VBQ2YsK0JBQXVCO0VBQ3ZCLHFCQUFhO0VBQ2IsaUJBQWE7RUFFYixzQkFBYztFQUNkLHFCQUFhO0VBQ2Isd0JBQWdCO0VBQ2hCLHdCQUFnQjtFQUNoQix1QkFBZTtFQUNmLHFCQUFhO0VBRWIsb0JBQVk7RUFDWixzQkFBYztFQUNkLHFCQUFhO0VBQ2IscUJBQWE7RUFFYixrRkFBMkI7RUFDM0Isa0VBQXVCO0VBQ3ZCLG9FQUF3QjtFQUN4QixnRkFBOEI7RUFDOUIsa0ZBQWtDO0VBQ2xDLHNGQUFvQztFQUNwQyxzRUFBd0I7RUFDeEIsb0ZBQStCO0VBQy9CLDZFQUEwQixFQUFBOztBQ2pDOUI7RUFDSSxtQ0FBa0MsRUFBQTs7QUFEdEM7SUFJUSxZQUFZLEVBQUE7O0FBSnBCO01BT1ksVUFBVTtNQUNWLFlBQVk7TUFDWixlQUFlLEVBQUE7O0FBVDNCO0lBZVEsMENBQTBDO0lBQzFDLGtCQUFrQixFQUFBOztBQWhCMUI7SUFvQk0saUJBQWlCO0lBRWpCLG9DQUFvQztJQUNwQyx5QkFBeUIsRUFBQTs7QUF2Qi9CO0lBNEJRLFdBQVcsRUFBQTs7QUFLbkI7RUFDRTtJQUdJLFlBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wYXJ0bmVycy9wYXJ0bmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbGxvdyBhbmd1bGFyIG1hdGVyaWFsIHRoZW1lIGNsYXNzIGFwcGxpZWQgb24gYm9keVxyXG4vLyBGb3IgbW9yIGRldGFpbHMgY2hlY2sgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvdGhlLWNvbG9yLXN5c3RlbS5odG1sI2NvbG9yLXRoZW1lLWNyZWF0aW9uXHJcblxyXG4uZGVmYXVsdCB7XHJcbiAgICAtLWNvbG9yLXRpdGxlOiAgIzM0MzQzQztcclxuICAgIC0tY29sb3ItdGV4dDogIzc3Nzc3NztcclxuICAgIC0tY29sb3ItdGV4dC1pbnZlcnQ6IHdoaXRlO1xyXG4gICAgLS1jb2xvci1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC0tY29sb3ItcHJpbWFyeTogI0Q5RUVGMztcclxuICAgIC0tY29sb3ItcHJpbWFyeS12YXJpYW50OiAjNzBhMmYyO1xyXG4gICAgLS1jb2xvci1hY2NlbnQ6ICNmZmE4OWM7XHJcbiAgICAtLWNvbG9yLWFjY2VudC12YXJpYW50OiAjMzk2YWM1O1xyXG4gICAgLS1jb2xvci1ncmF5OiAjZjRmNGY0O1xyXG4gICAgLS1jb2xvci13YXJuOiByZWQ7XHJcblxyXG4gICAgLS1jb2xvci1vY2VhbjogIzEyN2U5YjtcclxuICAgIC0tY29sb3ItYmVhdTogI2MyZDhlMztcclxuICAgIC0tY29sb3ItYmF5c2lkZTogIzczY2FjMztcclxuICAgIC0tY29sb3ItYmxvc3NvbTogI2ZjZDJjMDtcclxuICAgIC0tY29sb3ItZ29sZGVuOiAjZmNkNDg1O1xyXG4gICAgLS1jb2xvci1taW50OiAjYzVlNmRhO1xyXG5cclxuICAgIC0tdGV4dC1kYXJrOiAjMDc2MDc3O1xyXG4gICAgLS10ZXh0LW1lZGl1bTogIzVmNzA3YTtcclxuICAgIC0tdGV4dC1saWdodDogI2M4Y2JjZTtcclxuICAgIC0tdGV4dC13aGl0ZTogI2ZmZmZmZjtcclxuXHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1wYXJ0bmVyczogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9wYXJ0bmVycy1kZWZhdWx0LnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtdGVhbTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy90ZWFtLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtdGVhbTI6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvdGVhbTIuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS10ZXN0aW1vbmlhbDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy90ZXN0aW1vbmlhbC5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLW5ld3NsZXR0ZXItYmFieTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9iYWJ5LW5ld3NsZXR0ZXIucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1uZXdzbGV0dGVyLWNsb3VkczogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9jbG91ZHMtbmV3c2xldHRlci5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLWludHJvOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2JhYnktcmVhY2hpbmcucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1pbnRyby1tb2JpbGU6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvYmFieS1yZWFjaGluZy1tb2JpbGUucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtY29uc3RydWN0aW9uOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2NvbnN0cnVjdGlvbi5zdmcnKTtcclxufVxyXG5cclxuLy8gLm5pZ2h0IHtcclxuLy8gICAgIC0tY29sb3ItdGl0bGU6ICByZWQ7XHJcbi8vICAgICAtLWNvbG9yLXRleHQ6IHJlZDtcclxuLy8gICAgIC0tY29sb3ItdGV4dC1pbnZlcnQ6IHdoaXRlO1xyXG4vLyAgICAgLS1jb2xvci1iYWNrZ3JvdW5kOiBibHVlO1xyXG4vLyAgICAgLS1jb2xvci1wcmltYXJ5OiA7XHJcbi8vICAgICAtLWNvbG9yLXByaW1hcnktdmFyaWFudDogO1xyXG4vLyAgICAgLS1jb2xvci1hY2NlbnQ6IDtcclxuLy8gICAgIC0tY29sb3ItYWNjZW50LXZhcmlhbnQ6IDtcclxuLy8gICAgIC0tY29sb3Itd2FybjogO1xyXG5cclxuLy8gICAgIC0tYmFja2dyb3VuZC1ob21lLXBhcnRuZXJzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2hvbWUvYmFja2dyb3VuZHMvcGFydG5lcnMtbmlnaHQuc3ZnJyk7XHJcbi8vIH1cclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5wYXJ0bmVycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLWJlYXUpO1xyXG5cclxuICAgIC5wYXJ0bmVyLWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMjVweDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDZ2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIC8vIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnRuZXItZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci10ZXh0KTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogNXB4IDQwcHg7XHJcbiAgICAgIC8vIG1heC13aWR0aDogNzAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vY2Vhbik7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLmJlc3QtcmliYm9ue1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAucGFydG5lcnMge1xyXG5cclxuICAgIC5wYXJ0bmVyLWl0ZW0ge1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/partners/partners.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/partners/partners.component.ts ***!
  \*****************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 3rd party

var PartnersComponent = /** @class */ (function () {
    function PartnersComponent(translate) {
        this.translate = translate;
        this.supports$ = this.translate.get('HOME.PARTNERS.SUPPORTS');
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    PartnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partners',
            template: __webpack_require__(/*! ./partners.component.html */ "./src/app/home/partners/partners.component.html"),
            styles: [__webpack_require__(/*! ./partners.component.scss */ "./src/app/home/partners/partners.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], PartnersComponent);
    return PartnersComponent;
}());



/***/ }),

/***/ "./src/app/home/price/price.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/price/price.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Price Section start-->\r\n<section id=\"price\" class=\"price\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- If images array is dynamically changing pass this array to [items] input -->\r\n        <owl-carousel [options]=\"pricingCarousel\" [items]=\"price\" [carouselClasses]=\"['price-carousel owl-theme']\">\r\n          <div class=\"price-item\" *ngFor=\"let prices of price\">\r\n            <div class=\"price-block\">\r\n              <div class=\"price-type\">\r\n                <h2>{{prices.type}}</h2>\r\n              </div>\r\n              <div class=\"mrp\">\r\n                <h6 class=\"user-type\">{{prices.title}}</h6>\r\n                <div class=\"price-devide\"></div>\r\n                <h2>{{prices.price}}</h2>\r\n                <h6 class=\"price-year\">{{prices.duration}}</h6>\r\n                <div class=\"price-devide\"></div>\r\n              </div>\r\n              <ul class=\"price-feature\" [innerHTML]=\"prices.feature\"></ul>\r\n              <a [routerLink]=\"'/demo'\" class=\"btn btn-custom theme-color\" role=\"button\">Select Plan</a>\r\n            </div>\r\n          </div>\r\n        </owl-carousel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- Price Section End -->\r\n"

/***/ }),

/***/ "./src/app/home/price/price.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/price/price.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJpY2UvcHJpY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/price/price.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/price/price.component.ts ***!
  \***********************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PriceComponent = /** @class */ (function () {
    // DomSanitizer for safe html content.
    function PriceComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        // Pricing Carousel
        this.price = [{
                type: 'basic',
                title: 'Only the basic features',
                price: '$50',
                duration: 'per year',
                feature: this._sanitizer.bypassSecurityTrustHtml('<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>'),
            }, {
                type: 'Standard',
                title: 'Take it to the next level',
                price: '$100',
                duration: 'per year',
                feature: this._sanitizer.bypassSecurityTrustHtml('<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>'),
            }, {
                type: 'Custom',
                title: 'Our biggest plan',
                price: '$150',
                duration: 'per year',
                feature: this._sanitizer.bypassSecurityTrustHtml('<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>'),
            }];
        // Pricing Carousel Options
        this.pricingCarousel = {
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    margin: 0
                },
                600: {
                    items: 1,
                    dots: true,
                    margin: 0,
                },
                768: {
                    items: 2,
                    dots: true,
                },
                992: {
                    items: 3,
                },
                1000: {
                    items: 3
                }
            }
        };
    }
    PriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-price',
            template: __webpack_require__(/*! ./price.component.html */ "./src/app/home/price/price.component.html"),
            styles: [__webpack_require__(/*! ./price.component.scss */ "./src/app/home/price/price.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "./src/app/home/privacy/privacy.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/privacy/privacy.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"privacy\" class=\"privacy\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center\">\r\n      <div class=\"col-md-12 col-lg-6 order-first order-md-first\" *ngIf=\"!bMobile\">\r\n        <div class=\"privacy-img col-lg-10 col-m-10 col-sm-7 mx-auto\">\r\n          <!-- <img class=\"img-fluid\" src=\"assets/images/icon/lock.png\" alt=\"learning path\"> -->\r\n          <!-- <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/CKsTnXPO8KM\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> -->\r\n          <img src=\"assets/images/icon/lock.png\" class=\"img-fluid play-btn\" (click)=\"openDialog()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-11 col-md-12 col-lg-6 mx-auto\" >\r\n        <div class=\"privacy-contain\">\r\n          <div>\r\n            <h2 class=\"text-left\">{{ 'HOME.PRIVACY.CATCHPHRASE' | translate }}</h2>\r\n            <p *ngFor=\"let paragraph of paragraphs\"  class=\"text-left text-sm-justify\">{{ paragraph.PARAGRAPH }}</p>\r\n          </div>\r\n            <button mat-flat-button color=\"accent\" class=\"m2\" (click)=\"openDialog()\">{{ 'HOME.PRIVACY.VIDEO-BTN' | translate }} &nbsp; <i class=\"fa fa-play-circle fa-lg\"></i></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/privacy/privacy.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/privacy/privacy.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".privacy .row {\n  padding-top: 10vh;\n  padding-bottom: 10vh;\n  min-height: 50vh; }\n\n.privacy .mat-dialog-container {\n  padding: 0 !important; }\n\n.privacy button {\n  background-color: var(--color-accent);\n  text-transform: uppercase; }\n\n#mat-dialog-1 {\n  padding: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcml2YWN5L0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcZ2F6b3V5aVxcZ2l6b3V5aS1zaXRlL3NyY1xcYXBwXFxob21lXFxwcml2YWN5XFxwcml2YWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBQTs7QUFKcEI7RUFRSSxxQkFBb0IsRUFBQTs7QUFSeEI7RUFZSSxxQ0FBcUM7RUFDckMseUJBQXlCLEVBQUE7O0FBSzdCO0VBQ0UscUJBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2NvbnN0YW50cyc7XHJcblxyXG4ucHJpdmFjeSB7XHJcbiAgLnJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTB2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHZoO1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxuICB9XHJcblxyXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuI21hdC1kaWFsb2ctMXtcclxuICBwYWRkaW5nOjAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/privacy/privacy.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/privacy/privacy.component.ts ***!
  \***************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_home_privacy_video_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/home/privacy/video/video.component */ "./src/app/home/privacy/video/video.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// 3rd party



var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent(breakpointObserver, translate, dialog) {
        var _this = this;
        this.translate = translate;
        this.dialog = dialog;
        this.bError = false;
        this.bMobile = false;
        this.paragraphs = [{
                PARAGRAPH: 'Loading...',
            }];
        breakpointObserver.observe('(max-width: 720px)').subscribe(function (result) {
            _this.bMobile = result.matches;
        });
    }
    PrivacyComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(src_app_home_privacy_video_video_component__WEBPACK_IMPORTED_MODULE_4__["VideoComponent"], {
            position: { top: '15vh' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    PrivacyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('HOME.PRIVACY.DESCRIPTION').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.paragraphs = [{
                        PARAGRAPH: 'Cannot get translation!'
                    }];
            }
            else {
                _this.paragraphs = res;
            }
        });
    };
    PrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/home/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.scss */ "./src/app/home/privacy/privacy.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/home/privacy/video/video.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/privacy/video/video.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Q242Prg0AyM\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n"

/***/ }),

/***/ "./src/app/home/privacy/video/video.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/privacy/video/video.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 761px) {\n  iframe {\n    width: 100%;\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcml2YWN5L3ZpZGVvL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcZ2F6b3V5aVxcZ2l6b3V5aS1zaXRlL3NyY1xcYXBwXFxob21lXFxwcml2YWN5XFx2aWRlb1xcdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJpdmFjeS92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6IDc2MXB4KXtcclxuICBpZnJhbWV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/privacy/video/video.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/privacy/video/video.component.ts ***!
  \*******************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/home/privacy/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.scss */ "./src/app/home/privacy/video/video.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/home/research/research.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/research/research.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"research\" class=\"research\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center\">\r\n      <div class=\"col-11 col-md-12 col-lg-6 mx-auto\">\r\n        <div>\r\n          <h2 class=\"title text-left\">{{ 'HOME.RESEARCH.TITLE' | translate }}</h2>\r\n          <p class=\"caption-research text-left text-sm-justify\" *ngFor=\"let paragraph of paragraphs\">{{ paragraph.PARAGRAPH }}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-10 col-md-8  col-lg-6 mx-auto\">\r\n        <img src=\"assets/images/illus/support-science.png\" class=\"img-fluid\" alt=\"support science\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/research/research.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/research/research.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".research .row {\n  min-height: 80vh; }\n\n@media (max-width: 991px) {\n  .research {\n    padding-bottom: 50px;\n    padding-top: 25px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yZXNlYXJjaC9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXGdhem91eWlcXGdpem91eWktc2l0ZS9zcmNcXGFwcFxcaG9tZVxccmVzZWFyY2hcXHJlc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZ0JBQWdCLEVBQUE7O0FBS3hCO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsaUJBQWlCLEVBQUEsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Jlc2VhcmNoL3Jlc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc2VhcmNoIHtcclxuICAgIC5yb3cge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgLnJlc2VhcmNoe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/research/research.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/research/research.component.ts ***!
  \*****************************************************/
/*! exports provided: ResearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchComponent", function() { return ResearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 3rd party

var ResearchComponent = /** @class */ (function () {
    function ResearchComponent(translate) {
        this.translate = translate;
        this.bError = false;
        this.paragraphs = [{
                PARAGRAPH: 'Loading...',
            }];
    }
    ResearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('HOME.RESEARCH.DESCRIPTION').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.paragraphs = [{
                        PARAGRAPH: 'Cannot get translation!'
                    }];
            }
            else {
                _this.paragraphs = res;
            }
        });
    };
    ResearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-research',
            template: __webpack_require__(/*! ./research.component.html */ "./src/app/home/research/research.component.html"),
            styles: [__webpack_require__(/*! ./research.component.scss */ "./src/app/home/research/research.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ResearchComponent);
    return ResearchComponent;
}());



/***/ }),

/***/ "./src/app/home/screenshot/screenshot.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/screenshot/screenshot.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Screenshot Section SStart -->\r\n<section id=\"screenshot\" class=\"screenshot padding-top-bottom\">\r\n  <div class=\"screenshot-decor\">\r\n    <div class=\"screenshot-circle1\"><img src=\"assets/images/feature-circle-two.png\" alt=\"feature-circle-two\"></div>\r\n    <div class=\"screenshot-circle2\"><img src=\"assets/images/feature-circle.png\" alt=\"feature-circle\"></div>\r\n    <div class=\"screenshot-circle3\"><img src=\"assets/images/main-banner1.png\" alt=\"feature-circle-three\"></div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 \">\r\n        <div class=\"screenshot-contain1\">\r\n          <img class=\"mobile-light-left\" src=\"assets/images/light.png\" alt=\"light\">\r\n          <img class=\"mob-mocup img-fluid\" src=\"assets/images/screenshot-mob.png\" alt=\"screenshot-mob\">\r\n          <img class=\"mobile-light-right\" src=\"assets/images/light-right.png\" alt=\"light-right\">\r\n          <!-- If images array is dynamically changing pass this array to [items] input -->\r\n          <owl-carousel [options]=\"carouselOptions\" [items]=\"carouselImages\" [carouselClasses]=\"['screenshot-carousel owl-theme']\">\r\n            <div *ngFor=\"let screenshot of carouselImages\">\r\n              <div class=\"screenshot-item\"><img [src]=\"screenshot.image\" alt=\"app\"></div>\r\n            </div>\r\n          </owl-carousel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- Screenshot Section End -->\r\n"

/***/ }),

/***/ "./src/app/home/screenshot/screenshot.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/screenshot/screenshot.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2NyZWVuc2hvdC9zY3JlZW5zaG90LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/screenshot/screenshot.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/screenshot/screenshot.component.ts ***!
  \*********************************************************/
/*! exports provided: ScreenshotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenshotComponent", function() { return ScreenshotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScreenshotComponent = /** @class */ (function () {
    function ScreenshotComponent() {
        // Carousel Images  
        this.carouselImages = [{
                image: 'assets/images/app/1.jpg',
            }, {
                image: 'assets/images/app/2.jpg',
            }, {
                image: 'assets/images/app/3.jpg',
            }, {
                image: 'assets/images/app/4.jpg',
            }, {
                image: 'assets/images/app/5.jpg',
            }, {
                image: 'assets/images/app/6.jpg',
            }, {
                image: 'assets/images/app/7.jpg',
            }, {
                image: 'assets/images/app/8.jpg',
            }, {
                image: 'assets/images/app/9.jpg',
            }, {
                image: 'assets/images/app/10.jpg',
            }, {
                image: 'assets/images/app/11.jpg',
            }, {
                image: 'assets/images/app/12.jpg',
            }];
        // Carousel Options
        this.carouselOptions = {
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            center: true,
            autoplay: true,
            autoplayTimeout: 8000,
            responsive: {
                0: {
                    items: 2,
                },
                767: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
                1200: {
                    items: 5
                }
            }
        };
    }
    ScreenshotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-screenshot',
            template: __webpack_require__(/*! ./screenshot.component.html */ "./src/app/home/screenshot/screenshot.component.html"),
            styles: [__webpack_require__(/*! ./screenshot.component.scss */ "./src/app/home/screenshot/screenshot.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ScreenshotComponent);
    return ScreenshotComponent;
}());



/***/ }),

/***/ "./src/app/home/team/team.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/team/team.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"team\" class=\"team\">\r\n  <div class=\"container\">\r\n    <div class=\"row \">\r\n      <div class=\"col-12\">\r\n        <h2 class=\"title text-center text-sm-left\">{{ 'HOME.TEAM.TITLE' | translate }}</h2>\r\n      </div>\r\n      <div class=\"col-12 mx-auto\">\r\n        <div>\r\n          <owl-carousel [options]=\"teamCarousel\" [items]=\"members\" [carouselClasses]=\"['owl-theme']\">\r\n            <div class=\"team-item\" *ngFor=\"let member of members\">\r\n              <div class=\"team-avtar\">\r\n                <img src=\"{{ member.IMG.SRC }}\" alt=\"{{ member.IMG.ALT }}\">\r\n              </div>\r\n              <div class=\"team-text\">\r\n                <h4 class=\"team-name\">{{ member.NAME }}</h4>\r\n                <p>{{ member.DESCRIPTION }}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"team-item\">\r\n              <div class=\"team-avtar\">\r\n                <img src=\"{{ 'HOME.TEAM.EVERYONE.IMG.SRC' | translate }}\" alt=\"{{ 'HOME.TEAM.EVERYONE.IMG.ALT' | translate }}\">\r\n              </div>\r\n              <div class=\"team-text\">\r\n                <h4 class=\"team-name\">{{ 'HOME.TEAM.EVERYONE.TITLE' | translate }}</h4>\r\n                <a [routerLink]=\"'/pages/team'\">\r\n                  <button mat-flat-button color=\"accent\">{{ 'HOME.TEAM.EVERYONE.BTN-TEAM' | translate }}</button>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </owl-carousel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/team/team.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/team/team.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  --color-title:  #34343C;\n  --color-text: #777777;\n  --color-text-invert: white;\n  --color-background: white;\n  --color-primary: #D9EEF3;\n  --color-primary-variant: #70a2f2;\n  --color-accent: #ffa89c;\n  --color-accent-variant: #396ac5;\n  --color-gray: #f4f4f4;\n  --color-warn: red;\n  --color-ocean: #127e9b;\n  --color-beau: #c2d8e3;\n  --color-bayside: #73cac3;\n  --color-blossom: #fcd2c0;\n  --color-golden: #fcd485;\n  --color-mint: #c5e6da;\n  --text-dark: #076077;\n  --text-medium: #5f707a;\n  --text-light: #c8cbce;\n  --text-white: #ffffff;\n  --background-home-partners: url('/assets/images/backgrounds/partners-default.svg');\n  --background-home-team: url('/assets/images/backgrounds/team.svg');\n  --background-home-team2: url('/assets/images/backgrounds/team2.svg');\n  --background-home-testimonial: url('/assets/images/backgrounds/testimonial.svg');\n  --background-home-newsletter-baby: url('/assets/images/illus/baby-newsletter.png');\n  --background-home-newsletter-clouds: url('/assets/images/illus/clouds-newsletter.png');\n  --background-home-intro: url('/assets/images/illus/baby-reaching.png');\n  --background-home-intro-mobile: url('/assets/images/illus/baby-reaching-mobile.png');\n  --background-construction: url('/assets/images/backgrounds/construction.svg'); }\n\n/* Background elements bouncing */\n\n@-webkit-keyframes movebounce {\n  0% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); }\n  50% {\n    -webkit-transform: translateY(20px);\n            transform: translateY(20px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@keyframes movebounce {\n  0% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); }\n  50% {\n    -webkit-transform: translateY(20px);\n            transform: translateY(20px); }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@-webkit-keyframes moveleftbounce {\n  0% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  50% {\n    -webkit-transform: translateX(20px);\n            transform: translateX(20px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n@keyframes moveleftbounce {\n  0% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  50% {\n    -webkit-transform: translateX(20px);\n            transform: translateX(20px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n.team {\n  background-image: var(--background-home-team);\n  width: 100vw;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  padding: 100px 0px; }\n\n.team .team-circle1 {\n    position: absolute;\n    top: auto;\n    left: 100px;\n    bottom: 300px; }\n\n.team .team-circle2 {\n    position: absolute;\n    top: auto;\n    left: 180px;\n    bottom: 180px; }\n\n.team .team-circle3 {\n    position: absolute;\n    top: auto;\n    left: 0;\n    bottom: -150px; }\n\n.team .title {\n    padding-top: 50px; }\n\n.team button {\n    background-color: var(--color-accent);\n    text-transform: uppercase; }\n\n.team-item {\n  background-color: var(--color-background);\n  text-align: center;\n  padding: 30px; }\n\n.team-item .team-avtar img {\n    height: 170px;\n    width: 170px;\n    border-radius: 100%;\n    margin: 0 auto; }\n\n.team-item .team-name {\n    margin: 15px 0px; }\n\n.team-item .team-text p {\n    margin-bottom: 0; }\n\n.team-circle3 {\n  -webkit-animation: movebounce 3.9s linear infinite;\n          animation: movebounce 3.9s linear infinite; }\n\n.team-circle2 {\n  -webkit-animation: movebounce 3s linear infinite;\n          animation: movebounce 3s linear infinite; }\n\n.team-circle1 {\n  -webkit-animation: movebounce 2.8s linear infinite;\n          animation: movebounce 2.8s linear infinite; }\n\n@media (max-width: 1199px) and (min-width: 992px) {\n  .team-item p {\n    min-height: 5.4em; } }\n\n@media (min-width: 1200px) {\n  .team-name {\n    min-height: 2.5em; }\n  .team {\n    background-image: var(--background-home-team2); } }\n\n@media (min-width: 0px) {\n  ::ng-deep .owl-stage {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap; }\n  ::ng-deep .owl-item {\n    display: -webkit-box;\n    display: flex; }\n  .team-item {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90ZWFtL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcZ2F6b3V5aVxcZ2l6b3V5aS1zaXRlL3NyY1xcYXBwXFxjb3JlXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2hvbWUvdGVhbS9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXGdhem91eWlcXGdpem91eWktc2l0ZS9zcmNcXGFwcFxcY29yZVxcc2Nzc1xcX2FuaW1hdGlvbnMuc2NzcyIsInNyYy9hcHAvaG9tZS90ZWFtL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcZ2F6b3V5aVxcZ2l6b3V5aS1zaXRlL3NyY1xcYXBwXFxob21lXFx0ZWFtXFx0ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksdUJBQWM7RUFDZCxxQkFBYTtFQUNiLDBCQUFvQjtFQUNwQix5QkFBbUI7RUFDbkIsd0JBQWdCO0VBQ2hCLGdDQUF3QjtFQUN4Qix1QkFBZTtFQUNmLCtCQUF1QjtFQUN2QixxQkFBYTtFQUNiLGlCQUFhO0VBRWIsc0JBQWM7RUFDZCxxQkFBYTtFQUNiLHdCQUFnQjtFQUNoQix3QkFBZ0I7RUFDaEIsdUJBQWU7RUFDZixxQkFBYTtFQUViLG9CQUFZO0VBQ1osc0JBQWM7RUFDZCxxQkFBYTtFQUNiLHFCQUFhO0VBRWIsa0ZBQTJCO0VBQzNCLGtFQUF1QjtFQUN2QixvRUFBd0I7RUFDeEIsZ0ZBQThCO0VBQzlCLGtGQUFrQztFQUNsQyxzRkFBb0M7RUFDcEMsc0VBQXdCO0VBQ3hCLG9GQUErQjtFQUMvQiw2RUFBMEIsRUFBQTs7QUNqQzlCLGlDQUFBOztBQUNBO0VBQ0U7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7RUFFNUI7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7RUFFN0I7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUEsRUFBQTs7QUFSOUI7RUFDRTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtFQUU1QjtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTtFQUU3QjtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQSxFQUFBOztBQUk5QjtFQUNFO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBO0VBRTdCO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBLEVBQUE7O0FBUjlCO0VBQ0U7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7RUFFNUI7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7RUFFN0I7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUEsRUFBQTs7QUNuQjlCO0VBQ0UsNkNBQTZDO0VBQzdDLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFOcEI7SUFTSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhLEVBQUE7O0FBWmpCO0lBZUksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYSxFQUFBOztBQWxCakI7SUFxQkksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsY0FBYyxFQUFBOztBQXhCbEI7SUE0QkksaUJBQWlCLEVBQUE7O0FBNUJyQjtJQW1DSSxxQ0FBcUM7SUFDckMseUJBQXlCLEVBQUE7O0FBSzdCO0VBQ0UseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBSGY7SUFPTSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7O0FBVnBCO0lBZUksZ0JBQWdCLEVBQUE7O0FBZnBCO0lBb0JNLGdCQUFnQixFQUFBOztBQU10QjtFQUNFLGtEQUEwQztVQUExQywwQ0FBMEMsRUFBQTs7QUFHNUM7RUFDRSxnREFBd0M7VUFBeEMsd0NBQXdDLEVBQUE7O0FBRzFDO0VBQ0Usa0RBQTBDO1VBQTFDLDBDQUEwQyxFQUFBOztBQUc1QztFQUNFO0lBRUksaUJBQW1CLEVBQUEsRUFDcEI7O0FBSUw7RUFDRTtJQUNFLGlCQUFpQixFQUFBO0VBR25CO0lBQ0UsOENBQThDLEVBQUEsRUFDL0M7O0FBSUg7RUFDRTtJQUdFLG9CQUFhO0lBQWIsYUFBYTtJQUliLGVBQWUsRUFBQTtFQUdqQjtJQUdFLG9CQUFhO0lBQWIsYUFBYSxFQUFBO0VBRWY7SUFDRSxXQUFXLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9sbG93IGFuZ3VsYXIgbWF0ZXJpYWwgdGhlbWUgY2xhc3MgYXBwbGllZCBvbiBib2R5XHJcbi8vIEZvciBtb3IgZGV0YWlscyBjaGVjayBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb2xvci90aGUtY29sb3Itc3lzdGVtLmh0bWwjY29sb3ItdGhlbWUtY3JlYXRpb25cclxuXHJcbi5kZWZhdWx0IHtcclxuICAgIC0tY29sb3ItdGl0bGU6ICAjMzQzNDNDO1xyXG4gICAgLS1jb2xvci10ZXh0OiAjNzc3Nzc3O1xyXG4gICAgLS1jb2xvci10ZXh0LWludmVydDogd2hpdGU7XHJcbiAgICAtLWNvbG9yLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjRDlFRUYzO1xyXG4gICAgLS1jb2xvci1wcmltYXJ5LXZhcmlhbnQ6ICM3MGEyZjI7XHJcbiAgICAtLWNvbG9yLWFjY2VudDogI2ZmYTg5YztcclxuICAgIC0tY29sb3ItYWNjZW50LXZhcmlhbnQ6ICMzOTZhYzU7XHJcbiAgICAtLWNvbG9yLWdyYXk6ICNmNGY0ZjQ7XHJcbiAgICAtLWNvbG9yLXdhcm46IHJlZDtcclxuXHJcbiAgICAtLWNvbG9yLW9jZWFuOiAjMTI3ZTliO1xyXG4gICAgLS1jb2xvci1iZWF1OiAjYzJkOGUzO1xyXG4gICAgLS1jb2xvci1iYXlzaWRlOiAjNzNjYWMzO1xyXG4gICAgLS1jb2xvci1ibG9zc29tOiAjZmNkMmMwO1xyXG4gICAgLS1jb2xvci1nb2xkZW46ICNmY2Q0ODU7XHJcbiAgICAtLWNvbG9yLW1pbnQ6ICNjNWU2ZGE7XHJcblxyXG4gICAgLS10ZXh0LWRhcms6ICMwNzYwNzc7XHJcbiAgICAtLXRleHQtbWVkaXVtOiAjNWY3MDdhO1xyXG4gICAgLS10ZXh0LWxpZ2h0OiAjYzhjYmNlO1xyXG4gICAgLS10ZXh0LXdoaXRlOiAjZmZmZmZmO1xyXG5cclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXBhcnRuZXJzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3BhcnRuZXJzLWRlZmF1bHQuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS10ZWFtOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3RlYW0uc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS10ZWFtMjogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy90ZWFtMi5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXRlc3RpbW9uaWFsOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3Rlc3RpbW9uaWFsLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtbmV3c2xldHRlci1iYWJ5OiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2JhYnktbmV3c2xldHRlci5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLW5ld3NsZXR0ZXItY2xvdWRzOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2Nsb3Vkcy1uZXdzbGV0dGVyLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtaW50cm86IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvYmFieS1yZWFjaGluZy5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLWludHJvLW1vYmlsZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9iYWJ5LXJlYWNoaW5nLW1vYmlsZS5wbmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1jb25zdHJ1Y3Rpb246IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvY29uc3RydWN0aW9uLnN2ZycpO1xyXG59XHJcblxyXG4vLyAubmlnaHQge1xyXG4vLyAgICAgLS1jb2xvci10aXRsZTogIHJlZDtcclxuLy8gICAgIC0tY29sb3ItdGV4dDogcmVkO1xyXG4vLyAgICAgLS1jb2xvci10ZXh0LWludmVydDogd2hpdGU7XHJcbi8vICAgICAtLWNvbG9yLWJhY2tncm91bmQ6IGJsdWU7XHJcbi8vICAgICAtLWNvbG9yLXByaW1hcnk6IDtcclxuLy8gICAgIC0tY29sb3ItcHJpbWFyeS12YXJpYW50OiA7XHJcbi8vICAgICAtLWNvbG9yLWFjY2VudDogO1xyXG4vLyAgICAgLS1jb2xvci1hY2NlbnQtdmFyaWFudDogO1xyXG4vLyAgICAgLS1jb2xvci13YXJuOiA7XHJcblxyXG4vLyAgICAgLS1iYWNrZ3JvdW5kLWhvbWUtcGFydG5lcnM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kcy9wYXJ0bmVycy1uaWdodC5zdmcnKTtcclxuLy8gfVxyXG4iLCJAaW1wb3J0ICdjb25zdGFudHMnO1xyXG5cclxuLyogQmFja2dyb3VuZCBlbGVtZW50cyBib3VuY2luZyAqL1xyXG5Aa2V5ZnJhbWVzIG1vdmVib3VuY2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3ZlbGVmdGJvdW5jZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgfVxyXG59IiwiQGltcG9ydCAnY29uc3RhbnRzJztcclxuQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAnYW5pbWF0aW9ucyc7XHJcblxyXG4udGVhbSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tYmFja2dyb3VuZC1ob21lLXRlYW0pO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDEwMHB4IDBweDtcclxuXHJcbiAgLnRlYW0tY2lyY2xlMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuICAgIGJvdHRvbTogMzAwcHg7XHJcbiAgfVxyXG4gIC50ZWFtLWNpcmNsZTIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgbGVmdDogMTgwcHg7XHJcbiAgICBib3R0b206IDE4MHB4O1xyXG4gIH1cclxuICAudGVhbS1jaXJjbGUzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xNTBweDtcclxuICB9XHJcblxyXG4gIC50aXRsZXtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIC8vIHBhZGRpbmc6IDVweCA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnRlYW0taXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcblxyXG4gIC50ZWFtLWF2dGFyIHtcclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGVhbS1uYW1lIHtcclxuICAgIG1hcmdpbjogMTVweCAwcHg7XHJcbiAgfVxyXG5cclxuICAudGVhbS10ZXh0e1xyXG4gICAgcHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4udGVhbS1jaXJjbGUzIHtcclxuICBhbmltYXRpb246IG1vdmVib3VuY2UgMy45cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi50ZWFtLWNpcmNsZTIge1xyXG4gIGFuaW1hdGlvbjogbW92ZWJvdW5jZSAzcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi50ZWFtLWNpcmNsZTEge1xyXG4gIGFuaW1hdGlvbjogbW92ZWJvdW5jZSAyLjhzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogMTE5OXB4KSBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAudGVhbS1pdGVtIHtcclxuICAgIHB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEuOGVtKjM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAudGVhbS1uYW1lIHtcclxuICAgIG1pbi1oZWlnaHQ6IDIuNWVtO1xyXG4gIH1cclxuXHJcbiAgLnRlYW17XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iYWNrZ3JvdW5kLWhvbWUtdGVhbTIpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6MHB4KXtcclxuICA6Om5nLWRlZXAgLm93bC1zdGFnZSB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5vd2wtaXRlbXtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLnRlYW0taXRlbXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/team/team.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/team/team.component.ts ***!
  \*********************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 3rd party

var TeamComponent = /** @class */ (function () {
    function TeamComponent(translate) {
        this.translate = translate;
        this.bError = false;
        // Team Carousel
        this.members = [{
                NAME: 'Loading',
                DESCRIPTION: 'Loading...',
                IMG: {
                    ALT: '',
                    SRC: ''
                }
            }];
        // Team Carousel Options
        this.teamCarousel = {
            loop: false,
            margin: 30,
            nav: false,
            dots: true,
            autoWidth: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 50,
                },
                576: {
                    items: 1,
                    margin: 50,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1000: {
                    items: 3,
                }
            }
        };
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('HOME.TEAM.MEMBERS').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.members = [{
                        NAME: 'An error occured',
                        DESCRIPTION: 'Cannot get translation',
                        IMG: {
                            ALT: 'ERROR',
                            SRC: ''
                        }
                    }];
            }
            else {
                _this.members = res;
            }
        });
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/home/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/home/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/home/testimonial/testimonial.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/testimonial/testimonial.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"testimonial\" class=\"testimonial\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <h2 class=\"testimonial-title text-center text-sm-left\">{{ 'HOME.TESTIMONIAL.TITLE' | translate }}</h2>\r\n      </div>\r\n      <div class=\"col-sm-12\">\r\n        <owl-carousel [options]=\"testimonialCarousel\" [items]=\"testimonials\" [carouselClasses]=\"['testimonial-carousel owl-theme col-sm-12']\">\r\n          <div class=\"testimonial-item\" *ngFor=\"let testimonial of testimonials\">\r\n            <div class=\"testimonial-block col-lg-8 mx-auto d-md-flex align-items-center\">\r\n              <div class=\"testimonial-avtar col-md-4 col-lg-4\">\r\n                <img class=\"mx-auto\" src=\"{{ testimonial.IMG.SRC }}\" alt=\"{{ testimonial.IMG.ALT }}\">\r\n              </div>\r\n              <div class=\"testimonial-text col-md-8 col-lg-8\">\r\n                <h1>&ldquo;</h1>\r\n                <p>{{ testimonial.CITATION }}</p>\r\n                <h1>&rdquo;</h1>\r\n                <h4>{{ testimonial.NAME }}</h4>\r\n                <p>{{ testimonial.LOCATION }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </owl-carousel>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/testimonial/testimonial.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/testimonial/testimonial.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".default {\n  --color-title:  #34343C;\n  --color-text: #777777;\n  --color-text-invert: white;\n  --color-background: white;\n  --color-primary: #D9EEF3;\n  --color-primary-variant: #70a2f2;\n  --color-accent: #ffa89c;\n  --color-accent-variant: #396ac5;\n  --color-gray: #f4f4f4;\n  --color-warn: red;\n  --color-ocean: #127e9b;\n  --color-beau: #c2d8e3;\n  --color-bayside: #73cac3;\n  --color-blossom: #fcd2c0;\n  --color-golden: #fcd485;\n  --color-mint: #c5e6da;\n  --text-dark: #076077;\n  --text-medium: #5f707a;\n  --text-light: #c8cbce;\n  --text-white: #ffffff;\n  --background-home-partners: url('/assets/images/backgrounds/partners-default.svg');\n  --background-home-team: url('/assets/images/backgrounds/team.svg');\n  --background-home-team2: url('/assets/images/backgrounds/team2.svg');\n  --background-home-testimonial: url('/assets/images/backgrounds/testimonial.svg');\n  --background-home-newsletter-baby: url('/assets/images/illus/baby-newsletter.png');\n  --background-home-newsletter-clouds: url('/assets/images/illus/clouds-newsletter.png');\n  --background-home-intro: url('/assets/images/illus/baby-reaching.png');\n  --background-home-intro-mobile: url('/assets/images/illus/baby-reaching-mobile.png');\n  --background-construction: url('/assets/images/backgrounds/construction.svg'); }\n\n.testimonial-carousel.owl-theme .owl-dots .owl-dot.active span {\n  background: #18e7d3;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #18e7d3), to(#19d0de));\n  background: linear-gradient(to bottom, #18e7d3 0, #19d0de 100%);\n  width: 25px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.testimonial-carousel.owl-theme .owl-nav [class*=owl-]:hover {\n  background: none; }\n\n.testimonial-carousel.owl-carousel button.owl-prev {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  left: -170px; }\n\n.testimonial-carousel.owl-carousel button.owl-next {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  right: -170px; }\n\n.testimonial-carousel button:focus {\n  outline: 0; }\n\n.testimonial {\n  margin-top: 0;\n  align-content: center; }\n\n.testimonial-decor .testi-circle1 {\n  position: absolute;\n  left: 247px;\n  bottom: 160px; }\n\n.testimonial-decor .testi-circle2 {\n  position: absolute;\n  left: 50px;\n  top: auto;\n  bottom: 0px; }\n\n.testimonial-title {\n  padding-top: 25px;\n  margin-bottom: -85px; }\n\n.testimonial-item {\n  padding-top: 125px; }\n\n.testimonial-block {\n  padding: 25px 50px 25px 50px; }\n\n.testimonial-avtar img {\n  border-radius: 100%;\n  height: 100px;\n  width: 100px; }\n\n.testimonial-text {\n  text-align: left; }\n\n.testimonial-text h4 {\n    text-align: right; }\n\n.testimonial-text h5 {\n    text-align: right; }\n\n.testimonial-text h1 {\n    font-size: 4em;\n    line-height: 0;\n    font-family: 'Catamaran', sans-serif; }\n\n.testimonial-text h1:first-child {\n      text-align: left;\n      margin-bottom: -30px;\n      padding-top: 50px;\n      margin-left: -40px; }\n\n.testimonial-text h1:last-of-type {\n      text-align: right;\n      margin-right: -40px; }\n\n.testimonial-text p {\n    margin-left: 0px; }\n\n.testimonial-text p:last-of-type {\n      text-align: right; }\n\n@media (min-width: 991px) {\n  ::ng-deep .testimonial-carousel {\n    width: 100vw; }\n  ::ng-deep #testimonial .owl-carousel .owl-stage-outer {\n    overflow: visible; } }\n\n@media (min-width: 768px) {\n  ::ng-deep .testimonial-carousel {\n    width: 100vw; }\n  ::ng-deep #testimonial .owl-carousel .owl-stage-outer {\n    overflow: visible; }\n  .testimonial {\n    padding: 50px; }\n  .testimonial-title {\n    padding-top: 50px; }\n  .testimonial-block {\n    padding: 50px; }\n  .testimonial-avtar {\n    padding-right: 60px; }\n    .testimonial-avtar img {\n      height: 150px;\n      width: 150px; }\n  .testimonial-text h1:first-child {\n    margin-left: 0px; }\n  .testimonial-text p {\n    margin-left: 40px; }\n  .testimonial-block {\n    box-shadow: 0 0 65px 0 rgba(170, 170, 170, 0.25); } }\n\n@media (max-width: 991px) {\n  .testimonial {\n    padding-top: 25px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90ZXN0aW1vbmlhbC9DOlxcVXNlcnNcXERFTExcXERlc2t0b3BcXEdhem91eWlcXGdhem91eWlcXGdpem91eWktc2l0ZS9zcmNcXGFwcFxcY29yZVxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9ob21lL3Rlc3RpbW9uaWFsL0M6XFxVc2Vyc1xcREVMTFxcRGVza3RvcFxcR2F6b3V5aVxcZ2F6b3V5aVxcZ2l6b3V5aS1zaXRlL3NyY1xcYXBwXFxob21lXFx0ZXN0aW1vbmlhbFxcdGVzdGltb25pYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvdGVzdGltb25pYWwvQzpcXFVzZXJzXFxERUxMXFxEZXNrdG9wXFxHYXpvdXlpXFxnYXpvdXlpXFxnaXpvdXlpLXNpdGUvc3JjXFxhcHBcXGNvcmVcXHNjc3NcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHVCQUFjO0VBQ2QscUJBQWE7RUFDYiwwQkFBb0I7RUFDcEIseUJBQW1CO0VBQ25CLHdCQUFnQjtFQUNoQixnQ0FBd0I7RUFDeEIsdUJBQWU7RUFDZiwrQkFBdUI7RUFDdkIscUJBQWE7RUFDYixpQkFBYTtFQUViLHNCQUFjO0VBQ2QscUJBQWE7RUFDYix3QkFBZ0I7RUFDaEIsd0JBQWdCO0VBQ2hCLHVCQUFlO0VBQ2YscUJBQWE7RUFFYixvQkFBWTtFQUNaLHNCQUFjO0VBQ2QscUJBQWE7RUFDYixxQkFBYTtFQUViLGtGQUEyQjtFQUMzQixrRUFBdUI7RUFDdkIsb0VBQXdCO0VBQ3hCLGdGQUE4QjtFQUM5QixrRkFBa0M7RUFDbEMsc0ZBQW9DO0VBQ3BDLHNFQUF3QjtFQUN4QixvRkFBK0I7RUFDL0IsNkVBQTBCLEVBQUE7O0FDaEM5QjtFQUdRLG1CQ3VCd0I7RUR0QnhCLGdHQUFzRjtFQUF0RiwrREFBc0Y7RUFDdEYsV0FBVztFQUNYLGlDQUF5QjtFQUF6Qix5QkFBeUIsRUFBQTs7QUFOakM7RUFTUSxnQkFBZ0IsRUFBQTs7QUFUeEI7RUFjUSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE1BQU07RUFDTixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFuQnBCO0VBc0JRLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBOztBQTNCckI7RUFnQ00sVUFBVSxFQUFBOztBQUloQjtFQUNNLGFBQWE7RUFDYixxQkFBcUIsRUFBQTs7QUFHdkI7RUFFSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFKakI7RUFPSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXLEVBQUE7O0FBTWY7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsNEJBQTZCLEVBQUE7O0FBTS9CO0VBR0ksbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBSWhCO0VBRUUsZ0JBQWdCLEVBQUE7O0FBRmxCO0lBS0ksaUJBQWlCLEVBQUE7O0FBTHJCO0lBU0ksaUJBQWlCLEVBQUE7O0FBVHJCO0lBYUksY0FBYztJQUNkLGNBQWM7SUFDZCxvQ0FBb0MsRUFBQTs7QUFmeEM7TUFrQk0sZ0JBQWdCO01BQ2hCLG9CQUFvQjtNQUNwQixpQkFBaUI7TUFDakIsa0JBQWtCLEVBQUE7O0FBckJ4QjtNQXlCTSxpQkFBaUI7TUFDakIsbUJBQW1CLEVBQUE7O0FBMUJ6QjtJQStCSSxnQkFBZ0IsRUFBQTs7QUEvQnBCO01BaUNNLGlCQUFpQixFQUFBOztBQU96QjtFQUNFO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxpQkFBZ0IsRUFBQSxFQUNqQjs7QUFJSDtFQUNFO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxpQkFBZ0IsRUFBQTtFQUlsQjtJQUNFLGFBQWEsRUFBQTtFQUdmO0lBQ0UsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxhQUFhLEVBQUE7RUFLZjtJQUNFLG1CQUFtQixFQUFBO0lBRHJCO01BR0ksYUFBYTtNQUNiLFlBQVksRUFBQTtFQUloQjtJQUtNLGdCQUFnQixFQUFBO0VBTHRCO0lBVUksaUJBQWlCLEVBQUE7RUFJckI7SUFDRSxnREM5SjZDLEVBQUEsRUQrSjlDOztBQUdIO0VBQ0U7SUFDRSxpQkFBaUIsRUFBQSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdGVzdGltb25pYWwvdGVzdGltb25pYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb2xsb3cgYW5ndWxhciBtYXRlcmlhbCB0aGVtZSBjbGFzcyBhcHBsaWVkIG9uIGJvZHlcclxuLy8gRm9yIG1vciBkZXRhaWxzIGNoZWNrIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL3RoZS1jb2xvci1zeXN0ZW0uaHRtbCNjb2xvci10aGVtZS1jcmVhdGlvblxyXG5cclxuLmRlZmF1bHQge1xyXG4gICAgLS1jb2xvci10aXRsZTogICMzNDM0M0M7XHJcbiAgICAtLWNvbG9yLXRleHQ6ICM3Nzc3Nzc7XHJcbiAgICAtLWNvbG9yLXRleHQtaW52ZXJ0OiB3aGl0ZTtcclxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNEOUVFRjM7XHJcbiAgICAtLWNvbG9yLXByaW1hcnktdmFyaWFudDogIzcwYTJmMjtcclxuICAgIC0tY29sb3ItYWNjZW50OiAjZmZhODljO1xyXG4gICAgLS1jb2xvci1hY2NlbnQtdmFyaWFudDogIzM5NmFjNTtcclxuICAgIC0tY29sb3ItZ3JheTogI2Y0ZjRmNDtcclxuICAgIC0tY29sb3Itd2FybjogcmVkO1xyXG5cclxuICAgIC0tY29sb3Itb2NlYW46ICMxMjdlOWI7XHJcbiAgICAtLWNvbG9yLWJlYXU6ICNjMmQ4ZTM7XHJcbiAgICAtLWNvbG9yLWJheXNpZGU6ICM3M2NhYzM7XHJcbiAgICAtLWNvbG9yLWJsb3Nzb206ICNmY2QyYzA7XHJcbiAgICAtLWNvbG9yLWdvbGRlbjogI2ZjZDQ4NTtcclxuICAgIC0tY29sb3ItbWludDogI2M1ZTZkYTtcclxuXHJcbiAgICAtLXRleHQtZGFyazogIzA3NjA3NztcclxuICAgIC0tdGV4dC1tZWRpdW06ICM1ZjcwN2E7XHJcbiAgICAtLXRleHQtbGlnaHQ6ICNjOGNiY2U7XHJcbiAgICAtLXRleHQtd2hpdGU6ICNmZmZmZmY7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtcGFydG5lcnM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvcGFydG5lcnMtZGVmYXVsdC5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXRlYW06IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvdGVhbS5zdmcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob21lLXRlYW0yOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL3RlYW0yLnN2ZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtdGVzdGltb25pYWw6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvdGVzdGltb25pYWwuc3ZnJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1uZXdzbGV0dGVyLWJhYnk6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvYmFieS1uZXdzbGV0dGVyLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtbmV3c2xldHRlci1jbG91ZHM6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaWxsdXMvY2xvdWRzLW5ld3NsZXR0ZXIucG5nJyk7XHJcbiAgICAtLWJhY2tncm91bmQtaG9tZS1pbnRybzogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbGx1cy9iYWJ5LXJlYWNoaW5nLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvbWUtaW50cm8tbW9iaWxlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lsbHVzL2JhYnktcmVhY2hpbmctbW9iaWxlLnBuZycpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbnN0cnVjdGlvbjogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9jb25zdHJ1Y3Rpb24uc3ZnJyk7XHJcbn1cclxuXHJcbi8vIC5uaWdodCB7XHJcbi8vICAgICAtLWNvbG9yLXRpdGxlOiAgcmVkO1xyXG4vLyAgICAgLS1jb2xvci10ZXh0OiByZWQ7XHJcbi8vICAgICAtLWNvbG9yLXRleHQtaW52ZXJ0OiB3aGl0ZTtcclxuLy8gICAgIC0tY29sb3ItYmFja2dyb3VuZDogYmx1ZTtcclxuLy8gICAgIC0tY29sb3ItcHJpbWFyeTogO1xyXG4vLyAgICAgLS1jb2xvci1wcmltYXJ5LXZhcmlhbnQ6IDtcclxuLy8gICAgIC0tY29sb3ItYWNjZW50OiA7XHJcbi8vICAgICAtLWNvbG9yLWFjY2VudC12YXJpYW50OiA7XHJcbi8vICAgICAtLWNvbG9yLXdhcm46IDtcclxuXHJcbi8vICAgICAtLWJhY2tncm91bmQtaG9tZS1wYXJ0bmVyczogdXJsKCcvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmRzL3BhcnRuZXJzLW5pZ2h0LnN2ZycpO1xyXG4vLyB9XHJcbiIsIkBpbXBvcnQgJ2NvbnN0YW50cyc7XHJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4udGVzdGltb25pYWwtY2Fyb3VzZWwge1xyXG4gICAgJi5vd2wtdGhlbWUge1xyXG4gICAgICAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHNwYW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcl9icmlnaHRfdHVycXVvaXNlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRjb2xvcl9icmlnaHRfdHVycXVvaXNlIDAsICRjb2xvcl9zY29vdGVyIDEwMCUpO1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgIH1cclxuICAgICAgLm93bC1uYXYgW2NsYXNzKj1vd2wtXTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5vd2wtY2Fyb3VzZWwgYnV0dG9uIHtcclxuICAgICAgJi5vd2wtcHJldiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGxlZnQ6IC0xNzBweDtcclxuICAgICAgfVxyXG4gICAgICAmLm93bC1uZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcmlnaHQ6IC0xNzBweDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLnRlc3RpbW9uaWFsIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXN0aW1vbmlhbC1kZWNvciB7XHJcbiAgICAgIC50ZXN0aS1jaXJjbGUxIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMjQ3cHg7XHJcbiAgICAgICAgYm90dG9tOiAxNjBweDtcclxuICAgICAgfVxyXG4gICAgICAudGVzdGktY2lyY2xlMiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAudGVzdGltb25pYWwtdGl0bGV7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtODVweDtcclxuICAgIH1cclxuXHJcbiAgICAudGVzdGltb25pYWwtaXRlbXtcclxuICAgICAgcGFkZGluZy10b3A6IDEyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXN0aW1vbmlhbC1ibG9jayB7XHJcbiAgICAgIHBhZGRpbmc6IDI1cHggNTBweCAyNXB4IDUwcHggO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIC50ZXN0aW1vbmlhbC1hdnRhciB7XHJcbiAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50ZXN0aW1vbmlhbC10ZXh0IHtcclxuXHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICBoNHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaDV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ2F0YW1hcmFuJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpsYXN0LW9mLXR5cGV7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBwe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgJjpsYXN0LW9mLXR5cGV7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICBAbWVkaWEobWluLXdpZHRoOiA5OTFweCl7XHJcbiAgICA6Om5nLWRlZXAgLnRlc3RpbW9uaWFsLWNhcm91c2VsIHtcclxuICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAjdGVzdGltb25pYWwgLm93bC1jYXJvdXNlbCAub3dsLXN0YWdlLW91dGVyIHtcclxuICAgICAgb3ZlcmZsb3c6dmlzaWJsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICA6Om5nLWRlZXAgLnRlc3RpbW9uaWFsLWNhcm91c2VsIHtcclxuICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAjdGVzdGltb25pYWwgLm93bC1jYXJvdXNlbCAub3dsLXN0YWdlLW91dGVyIHtcclxuICAgICAgb3ZlcmZsb3c6dmlzaWJsZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnRlc3RpbW9uaWFsIHtcclxuICAgICAgcGFkZGluZzogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGVzdGltb25pYWwtdGl0bGV7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXN0aW1vbmlhbC1ibG9jayB7XHJcbiAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAudGVzdGltb25pYWwtYXZ0YXIge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRlc3RpbW9uaWFsLXRleHQge1xyXG5cclxuICAgICAgaDF7XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50ZXN0aW1vbmlhbC1ibG9jayB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA2NXB4IDAgJGNvbG9yX3NpbHZlcl9jaGFsaWNlXzI1O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhKG1heC13aWR0aDogOTkxcHgpe1xyXG4gICAgLnRlc3RpbW9uaWFse1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIH1cclxuICB9XHJcbiIsIi8vIFRPRE8gcmVtb3ZlIHRoZXNlIHByb2dyZXNzaXZseSwgdG9vIGNvbXBsaWNhdGVkLiBTdGljayB0byA1IG1haW4gY29sb3JzICsgQW5ndWxhciBtYXRlcmlhbCBjdXN0b20gdGhlbWVcclxuXHJcbi8vY29sb3JzXHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRncmF5OiAjZWVlO1xyXG4kYmxhY2s6ICMwMDA7XHJcbiRjb2xvcl9ib25fam91cjogcmdiYSgyMjQsIDIyNCwgMjI0LCAxKTtcclxuJGNvbG9yX2Jvbl9qb3VyXzYwOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuNik7XHJcbiRjb2xvcl9jYXJhcnJhOiByZ2JhKDIzNiwgMjM2LCAyMzYsIDEpO1xyXG4kY29sb3JfY2FyYXJyYV82MDogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjYpO1xyXG4kY29sb3JfY2FyYXJyYV8xMTogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjExKTtcclxuJGNvbG9yX2Jvbl9qb3VyOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDEpO1xyXG4kY29sb3JfdHdpbGlnaHRfYmx1ZTogI2YzZmZmZDtcclxuJGNvbG9yX3R1bmRvcmE6ICM0NDQ0NDQ7XHJcbiRjb2xvcl90YXBhOiAjNzc3Nzc3O1xyXG4kY29sb3JfYmxhY2tfaGF6ZTogI2Y3ZjdmNztcclxuJGNvbG9yX21vdW50YWluX21pc3Q6ICM5OTk7XHJcbiRjb2xvcl9taW5lX3NoYWZ0OiAjMzMzO1xyXG4kY29sb3JfYWx0bzogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4kY29sb3JfZ2FsbGVyeTogI2VlZWVlZTtcclxuJGJsYWNrXzEzOiByZ2JhKDAsIDAsIDAsIDAuMTMpO1xyXG4kY29sb3JfZ3JheV9udXJzZTogcmdiYSgyMzIsIDIzMiwgMjMyLCAxKTtcclxuJHdpbGRfc2FuZF8xMDA6IHJnYmEoMjQ0LCAyNDQsIDI0NCwgMSk7XHJcbiRjb2xvcl9tZXJjdXJ5OiAjZTZlNmU2O1xyXG4kYmxhY2tfNTogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuJGNvbG9yX3NpbHZlcl9jaGFsaWNlXzI1OiByZ2JhKDE3MCwgMTcwLCAxNzAsIDAuMjUpO1xyXG4kY29sb3Jfc2lsdmVyX2NoYWxpY2VfMTU6IHJnYmEoMTcwLCAxNzAsIDE3MCwgMC4xNSk7XHJcbiRjb2xvcl9zaWx2ZXJfY2hhbGljZTogI2FhYWFhYTtcclxuXHJcbiRjb2xvcl9icmlnaHRfdHVycXVvaXNlOiAjMThlN2QzO1xyXG4kY29sb3Jfc2Nvb3RlcjogIzE5ZDBkZTtcclxuJGNvbG9yX3R1cnF1b2lzZTogIzJiZDRkZjtcclxuJGNvbG9yX2N5YW5fYXF1YTogIzIxZWRmZjtcclxuJGNvbG9yX3BpY3Rvbl9ibHVlOiAjMmNjNmZmO1xyXG5cclxuJGNvbG9yX3NwcmluZ19ncmVlbjogIzIwZjk4YTtcclxuJGNvbG9yX2NhcmliYmVhbl9ncmVlbjogIzExZDg5YztcclxuJGNvbG9yX3R1cnF1b2lzZV9ibHVlOiAjNTlmN2RmO1xyXG5cclxuJGNvbG9yX2NoYXJsb3R0ZTogI2IzZjlmYjtcclxuJGNvbG9yX2phdmE6ICMxNGJkYjQ7XHJcblxyXG4vL290aGVyIGNvbG9yc1xyXG4kYm9yZGVyX2dyYXk6ICNkZGRkZGQ7XHJcblxyXG4vL3VybHNcclxuJHVybF8wOiB1cmwoL2Fzc2V0cy9pbWFnZXMvbGFubmQtYmcucG5nKTtcclxuJHVybF8xOiB1cmwoL2Fzc2V0cy9pbWFnZXMvc2NyZWVuMS5wbmcpO1xyXG4kdXJsXzI6IHVybCgvYXNzZXRzL2ltYWdlcy8xLnBuZyk7XHJcbiR1cmxfMzogdXJsKC9hc3NldHMvaW1hZ2VzL2hvbWUyL2hvbWUyLXNsaWRlci5wbmcpO1xyXG4kdXJsXzQ6IHVybCgvYXNzZXRzL2ltYWdlcy9ob21lMy9ob21lMy1zbGlkZXIucG5nKTtcclxuJHVybF81OiB1cmwoL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcucG5nKTtcclxuJHVybF82OiB1cmwoL2Fzc2V0cy9pbWFnZXMvZmVhdHVyZS1iZy5wbmcpO1xyXG4kdXJsXzc6IHVybCgvYXNzZXRzL2ltYWdlcy9zY3JlZW5zaG90LWJnLnBuZyk7XHJcbiR1cmxfODogdXJsKC9hc3NldHMvaW1hZ2VzL3RlYW0tYmcucG5nKTtcclxuJHVybF85OiB1cmwoL2Fzc2V0cy9pbWFnZXMvdGVhbS1pbWctYmcucG5nKTtcclxuJHVybF8xMDogdXJsKC9hc3NldHMvaW1hZ2VzL3ByaWNlLnBuZyk7XHJcbiR1cmxfMTE6IHVybCgvYXNzZXRzL2ltYWdlcy9wcmljZS1iZy5wbmcpO1xyXG4kdXJsXzEyOiB1cmwoL2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWwtYmcucG5nKTtcclxuJHVybF8xMzogdXJsKC9hc3NldHMvaW1hZ2VzL1Rlc3RpbW9uaWFsLnBuZyk7XHJcbiR1cmxfMTQ6IHVybCgvYXNzZXRzL2ltYWdlcy9Db250YWN0LnBuZyk7XHJcblxyXG4lZXh0ZW5kXzEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDFlbTtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBjb2xvcjogJGNvbG9yX21vdW50YWluX21pc3Q7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4lZXh0ZW5kXzIge1xyXG4gIGhlaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogLTRweCAwIDAgLTRweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvcl90YXBhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiVleHRlbmRfMyB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTY1JSwgMCk7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/testimonial/testimonial.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/testimonial/testimonial.component.ts ***!
  \***********************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 3rd party

var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent(translate) {
        this.translate = translate;
        this.bError = false;
        this.testimonials = [{
                IMG: {
                    ALT: '',
                    SRC: ''
                },
                CITATION: 'Loading...',
                LOCATION: '',
                NAME: 'Loading...'
            }];
        // Testimonial Carousel Options
        this.testimonialCarousel = {
            loop: true,
            // autoplay:true,
            // autoplayTimeout:5000,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: false,
            // navClass: ['owl-prev', 'owl-next'],
            // navText: ['<img src="assets/images/back.png">', '<img src="assets/images/next.png">'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                    margin: 150,
                },
                991: {
                    items: 1,
                    margin: 150,
                },
                1000: {
                    items: 1,
                    margin: 150,
                },
                1600: {
                    items: 1,
                    margin: 450,
                }
            }
        };
    }
    TestimonialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('HOME.TESTIMONIAL.TESTIMONIES').subscribe(function (res) {
            if (typeof (res) === 'string') {
                _this.bError = true;
                _this.testimonials = [{
                        IMG: {
                            ALT: '',
                            SRC: ''
                        },
                        CITATION: 'Cannot get translation',
                        LOCATION: '',
                        NAME: 'An error occured'
                    }];
            }
            else {
                _this.testimonials = res;
            }
        });
    };
    TestimonialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonial',
            template: __webpack_require__(/*! ./testimonial.component.html */ "./src/app/home/testimonial/testimonial.component.html"),
            styles: [__webpack_require__(/*! ./testimonial.component.scss */ "./src/app/home/testimonial/testimonial.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], TestimonialComponent);
    return TestimonialComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map