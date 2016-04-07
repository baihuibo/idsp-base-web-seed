// Created by baihuibo on 16/3/24.
System.register(["annotation"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var annotation_1;
    var Page2Ctrl;
    return {
        setters:[
            function (annotation_1_1) {
                annotation_1 = annotation_1_1;
            }],
        execute: function() {
            Page2Ctrl = (function () {
                function Page2Ctrl($scope) {
                    this.$scope = $scope;
                    this.name = 'page2';
                }
                Page2Ctrl = __decorate([
                    annotation_1.Route({
                        route: "/page2",
                        controllerAs: "T",
                        templateUrl: "scripts/views/page2/page.html"
                    }),
                    annotation_1.Controller, 
                    __metadata('design:paramtypes', [Object])
                ], Page2Ctrl);
                return Page2Ctrl;
            }());
            exports_1("Page2Ctrl", Page2Ctrl);
        }
    }
});
//# sourceMappingURL=Page2Ctrl.js.map