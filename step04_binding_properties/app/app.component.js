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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Name Property';
        this.isActiveB1 = true;
        this.isActiveB2 = false;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<input [value]=\"'Hello ' + name\">\n            <button class=\"btn btn-default\" \n            [class.active]=\"isActiveB1\" [style.color] = \"isActiveB1?'blue':'red'\">\n            button1</button>\n            <button class=\"btn btn-default\" [class.active]=\"isActiveB2\" [style.color] = \"isActiveB2?'blue':'red'\">\n            button2</button>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map