var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ToolDecorator as Tool, z, Injectable, Widget } from '@nitrostack/core';
/**
 * Service Tools
 *
 * Search and manage campus services
 */
let ServiceTools = class ServiceTools {
    async searchServices(input, context) {
        // Mock search results for classrooms and faculty
        const results = [
            {
                id: 'room_101',
                type: 'classroom',
                name: 'Room 101 - Computer Lab',
                location: 'Building A, Floor 1',
                capacity: 30,
                available: true,
                time_slot: '2026-07-18 10:00 - 12:00',
            },
            {
                id: 'room_205',
                type: 'classroom',
                name: 'Room 205 - Lecture Hall',
                location: 'Building B, Floor 2',
                capacity: 100,
                available: true,
                time_slot: '2026-07-18 14:00 - 16:00',
            },
            {
                id: 'faculty_001',
                type: 'faculty',
                name: 'Dr. Sarah Johnson',
                department: 'Computer Science',
                available: true,
                office: 'Building A, Room 301',
                office_hours: '2026-07-18 15:00 - 17:00',
            },
            {
                id: 'faculty_002',
                type: 'faculty',
                name: 'Prof. Michael Chen',
                department: 'Mathematics',
                available: true,
                office: 'Building C, Room 102',
                office_hours: '2026-07-18 10:00 - 12:00',
            },
        ];
        return {
            query: input.query,
            results,
            total_count: results.length,
        };
    }
    async submitComplaint(input, context) {
        const ticketId = `TKT-${Date.now()}`;
        return {
            success: true,
            ticket_id: ticketId,
            subject: input.subject,
            building: input.building,
            category: input.category,
            status: 'submitted',
            message: `Your complaint has been submitted successfully. Ticket ID: ${ticketId}`,
        };
    }
};
__decorate([
    Tool({
        name: 'search-services',
        description: 'Search for available classrooms, faculty members, and other campus services',
        inputSchema: z.object({
            query: z.string().describe('Search query for classrooms, faculty, or services'),
        }),
    }),
    Widget({ route: 'service-results' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ServiceTools.prototype, "searchServices", null);
__decorate([
    Tool({
        name: 'submit-complaint',
        description: 'Submit a complaint or maintenance request about campus facilities',
        inputSchema: z.object({
            subject: z.string().describe('Complaint subject or title'),
            description: z.string().describe('Detailed description of the complaint'),
            building: z.string().describe('Building or location where the issue is'),
            category: z.string().describe('Category: maintenance, facilities, safety, other'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ServiceTools.prototype, "submitComplaint", null);
ServiceTools = __decorate([
    Injectable()
], ServiceTools);
export { ServiceTools };
//# sourceMappingURL=service.tools.js.map