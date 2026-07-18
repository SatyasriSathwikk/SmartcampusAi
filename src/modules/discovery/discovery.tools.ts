import { ToolDecorator as Tool, z, ExecutionContext, Injectable, Widget } from '@nitrostack/core';

/**
 * Discovery Tools
 */
@Injectable()
export class DiscoveryTools {
  @Tool({
    name: 'get-dashboard',
    description: 'Fetch dashboard data including events, attendance, and quick actions for a student',
    inputSchema: z.object({
      student_id: z.string().describe('The student ID'),
    }),
  })
  @Widget({ route: 'dashboard-grid' })
  async getDashboard(input: { student_id: string }, context: ExecutionContext) {
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
}
