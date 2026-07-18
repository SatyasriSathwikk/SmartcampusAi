var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nitrostack/core';
import { ServiceTools } from './service.tools.js';
import { ServiceResources } from './service.resources.js';
import { ServicePrompts } from './service.prompts.js';
let ServiceModule = class ServiceModule {
};
ServiceModule = __decorate([
    Module({
        name: 'service',
        description: 'TODO: Add description',
        controllers: [ServiceTools, ServiceResources, ServicePrompts],
    })
], ServiceModule);
export { ServiceModule };
//# sourceMappingURL=service.module.js.map