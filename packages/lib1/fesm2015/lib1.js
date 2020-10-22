import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class Lib1Service {
    constructor() { }
}
Lib1Service.ɵfac = function Lib1Service_Factory(t) { return new (t || Lib1Service)(); };
Lib1Service.ɵprov = ɵɵdefineInjectable({ token: Lib1Service, factory: Lib1Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(Lib1Service, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class Lib1Component {
    constructor() { }
    ngOnInit() {
    }
}
Lib1Component.ɵfac = function Lib1Component_Factory(t) { return new (t || Lib1Component)(); };
Lib1Component.ɵcmp = ɵɵdefineComponent({ type: Lib1Component, selectors: [["lib-lib1"]], decls: 2, vars: 0, template: function Lib1Component_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " lib1 works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(Lib1Component, [{
        type: Component,
        args: [{
                selector: 'lib-lib1',
                template: `
    <p>
      lib1 works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class Lib1Module {
}
Lib1Module.ɵmod = ɵɵdefineNgModule({ type: Lib1Module });
Lib1Module.ɵinj = ɵɵdefineInjector({ factory: function Lib1Module_Factory(t) { return new (t || Lib1Module)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(Lib1Module, { declarations: [Lib1Component], exports: [Lib1Component] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(Lib1Module, [{
        type: NgModule,
        args: [{
                declarations: [Lib1Component],
                imports: [],
                exports: [Lib1Component]
            }]
    }], null, null); })();

/*
 * Public API Surface of lib1
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Lib1Component, Lib1Module, Lib1Service };
//# sourceMappingURL=lib1.js.map
