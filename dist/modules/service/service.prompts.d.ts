import { ExecutionContext } from '@nitrostack/core';
/**
 * Service Prompts
 *
 * TODO: Add description
 */
export declare class ServicePrompts {
    helpPrompt(args: Record<string, unknown>, context: ExecutionContext): Promise<{
        role: "user";
        content: {
            type: "text";
            text: string;
        };
    }[]>;
}
//# sourceMappingURL=service.prompts.d.ts.map