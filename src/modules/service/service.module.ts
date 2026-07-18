import { Module } from '@nitrostack/core';
import { ServiceTools } from './service.tools.js';
import { ServiceResources } from './service.resources.js';
import { ServicePrompts } from './service.prompts.js';

@Module({
  name: 'service',
  description: 'TODO: Add description',
  controllers: [ServiceTools, ServiceResources, ServicePrompts],
})
export class ServiceModule {}
