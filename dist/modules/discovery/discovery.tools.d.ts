import { ExecutionContext } from '@nitrostack/core';
/**
 * Discovery Tools
 */
export declare class DiscoveryTools {
    getDashboard(input: {
        student_id: string;
    }, context: ExecutionContext): Promise<{
        student_id: string;
        events: {
            id: string;
            title: string;
            time: string;
            location: string;
        }[];
        attendance: {
            present: number;
            absent: number;
            percentage: number;
        };
        quick_actions: string[];
    }>;
}
//# sourceMappingURL=discovery.tools.d.ts.map