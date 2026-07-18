import { ExecutionContext } from '@nitrostack/core';
/**
 * Service Tools
 *
 * Search and manage campus services
 */
export declare class ServiceTools {
    searchServices(input: {
        query: string;
    }, context: ExecutionContext): Promise<{
        query: string;
        results: ({
            id: string;
            type: string;
            name: string;
            location: string;
            capacity: number;
            available: boolean;
            time_slot: string;
            department?: undefined;
            office?: undefined;
            office_hours?: undefined;
        } | {
            id: string;
            type: string;
            name: string;
            department: string;
            available: boolean;
            office: string;
            office_hours: string;
            location?: undefined;
            capacity?: undefined;
            time_slot?: undefined;
        })[];
        total_count: number;
    }>;
    submitComplaint(input: {
        subject: string;
        description: string;
        building: string;
        category: string;
    }, context: ExecutionContext): Promise<{
        success: boolean;
        ticket_id: string;
        subject: string;
        building: string;
        category: string;
        status: string;
        message: string;
    }>;
}
//# sourceMappingURL=service.tools.d.ts.map