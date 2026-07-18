'use client';

import { useTheme, useWidgetSDK } from '@nitrostack/widgets';

export const dynamic = 'force-dynamic';

interface DashboardData {
  student_id: string;
  events: Array<{ id: string; title: string; time: string; location: string }>;
  attendance: { present: number; absent: number; percentage: number };
  quick_actions: string[];
}

export default function DashboardGrid() {
  const theme = useTheme();
  const { isReady, getToolOutput } = useWidgetSDK();
  const data = getToolOutput<DashboardData>();

  if (!isReady || !data) {
    return (
      <div style={{
        padding: '24px',
        textAlign: 'center',
        color: theme === 'dark' ? '#fff' : '#000',
      }}>
        Loading…
      </div>
    );
  }

  const isDark = theme === 'dark';
  const bgColor = isDark ? '#1a1a1a' : '#ffffff';
  const cardBg = isDark ? '#2d2d2d' : '#f9fafb';
  const textColor = isDark ? '#ffffff' : '#000000';
  const mutedColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const borderColor = isDark ? '#444' : '#e5e7eb';

  return (
    <div style={{
      padding: '24px',
      background: bgColor,
      color: textColor,
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold' }}>
          Dashboard
        </h2>
        <p style={{ margin: 0, color: mutedColor, fontSize: '14px' }}>
          Student ID: {data.student_id}
        </p>
      </div>

      {/* Attendance Status Card */}
      <div style={{
        background: cardBg,
        border: `1px solid ${borderColor}`,
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px',
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
          Attendance Status
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981' }}>
              {data.attendance.present}
            </div>
            <div style={{ fontSize: '12px', color: mutedColor, marginTop: '4px' }}>
              Present
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#ef4444' }}>
              {data.attendance.absent}
            </div>
            <div style={{ fontSize: '12px', color: mutedColor, marginTop: '4px' }}>
              Absent
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3b82f6' }}>
              {data.attendance.percentage}%
            </div>
            <div style={{ fontSize: '12px', color: mutedColor, marginTop: '4px' }}>
              Overall
            </div>
          </div>
        </div>
      </div>

      {/* Events Card */}
      <div style={{
        background: cardBg,
        border: `1px solid ${borderColor}`,
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px',
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
          Today's Events
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {(data.events ?? []).map((event) => (
            <div
              key={event.id}
              style={{
                background: isDark ? '#3d3d3d' : '#f3f4f6',
                border: `1px solid ${borderColor}`,
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontWeight: '600', fontSize: '14px' }}>
                  {event.title}
                </div>
                <div style={{ fontSize: '12px', color: mutedColor, marginTop: '4px' }}>
                  📍 {event.location}
                </div>
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#3b82f6' }}>
                {event.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      {(data.quick_actions ?? []).length > 0 && (
        <div style={{
          background: cardBg,
          border: `1px solid ${borderColor}`,
          borderRadius: '12px',
          padding: '20px',
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
            Quick Actions
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {data.quick_actions.map((action, idx) => (
              <button
                key={idx}
                style={{
                  padding: '10px 16px',
                  background: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'background 0.2s',
                }}
                onMouseOver={(e) => {
                  const btn = e.currentTarget as unknown as { style: { background: string } };
                  btn.style.background = '#2563eb';
                }}
                onMouseOut={(e) => {
                  const btn = e.currentTarget as unknown as { style: { background: string } };
                  btn.style.background = '#3b82f6';
                }}
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
