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
 * Discovery Tools
 */
let DiscoveryTools = class DiscoveryTools {
    async getDashboard(input, context) {
        return {
            student_id: input.student_id,
            events: [
                { id: '1', title: 'Math Lecture', time: '10:00 AM', location: 'Room 101' },
                { id: '2', title: 'Physics Lab', time: '2:00 PM', location: 'Lab A' }
            ],
            attendance: { present: 18, absent: 2, percentage: 90 },
            quick_actions: ['View Attendance', 'Book Library', 'Find Faculty']
        };
    }
};
__decorate([
    Tool({
        name: 'get-dashboard',
        description: 'Fetch dashboard data including events, attendance, and quick actions for a student',
        inputSchema: z.object({
            student_id: z.string().describe('The student ID'),
        }),
    }),
    Widget({ route: 'dashboard-grid' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DiscoveryTools.prototype, "getDashboard", null);
DiscoveryTools = __decorate([
    Injectable()
], DiscoveryTools);
export { DiscoveryTools };
//# sourceMappingURL=discovery.tools.js.map