(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('lib1', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.lib1 = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var Lib1Service = /** @class */ (function () {
        function Lib1Service() {
        }
        return Lib1Service;
    }());
    Lib1Service.ɵfac = function Lib1Service_Factory(t) { return new (t || Lib1Service)(); };
    Lib1Service.ɵprov = i0.ɵɵdefineInjectable({ token: Lib1Service, factory: Lib1Service.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(Lib1Service, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var Lib1Component = /** @class */ (function () {
        function Lib1Component() {
        }
        Lib1Component.prototype.ngOnInit = function () {
        };
        return Lib1Component;
    }());
    Lib1Component.ɵfac = function Lib1Component_Factory(t) { return new (t || Lib1Component)(); };
    Lib1Component.ɵcmp = i0.ɵɵdefineComponent({ type: Lib1Component, selectors: [["lib-lib1"]], decls: 2, vars: 0, template: function Lib1Component_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " lib1 works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(Lib1Component, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-lib1',
                        template: "\n    <p>\n      lib1 works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var Lib1Module = /** @class */ (function () {
        function Lib1Module() {
        }
        return Lib1Module;
    }());
    Lib1Module.ɵmod = i0.ɵɵdefineNgModule({ type: Lib1Module });
    Lib1Module.ɵinj = i0.ɵɵdefineInjector({ factory: function Lib1Module_Factory(t) { return new (t || Lib1Module)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Lib1Module, { declarations: [Lib1Component], exports: [Lib1Component] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(Lib1Module, [{
                type: i0.NgModule,
                args: [{
                        declarations: [Lib1Component],
                        imports: [],
                        exports: [Lib1Component]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of lib1
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Lib1Component = Lib1Component;
    exports.Lib1Module = Lib1Module;
    exports.Lib1Service = Lib1Service;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lib1.umd.js.map
