'use client';

import { useTheme, useWidgetSDK } from '@nitrostack/widgets';

export const dynamic = 'force-dynamic';

interface ServiceResult {
  id: string;
  type: 'classroom' | 'faculty';
  name: string;
  location?: string;
  capacity?: number;
  available: boolean;
  time_slot?: string;
  department?: string;
  office?: string;
  office_hours?: string;
}

interface ServiceResultsData {
  query: string;
  results: ServiceResult[];
  total_count: number;
}

export default function ServiceResults() {
  const theme = useTheme();
  const { isReady, getToolOutput } = useWidgetSDK();
  const data = getToolOutput<ServiceResultsData>();

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
          Search Results
        </h2>
        <p style={{ margin: 0, color: mutedColor, fontSize: '14px' }}>
          Query: "{data.query}" • Found {data.total_count} result{data.total_count !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Results Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '16px',
      }}>
        {(data.results ?? []).map((result) => (
          <div
            key={result.id}
            style={{
              background: cardBg,
              border: `1px solid ${borderColor}`,
              borderRadius: '12px',
              padding: '16px',
              transition: 'all 0.2s',
            }}
          >
            {/* Type Badge */}
            <div style={{
              display: 'inline-block',
              padding: '4px 12px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '600',
              marginBottom: '12px',
              background: result.type === 'classroom' ? '#dbeafe' : '#fce7f3',
              color: result.type === 'classroom' ? '#1e40af' : '#be185d',
            }}>
              {result.type === 'classroom' ? '🏫 Classroom' : '👨‍🏫 Faculty'}
            </div>

            {/* Availability Status */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px',
            }}>
              <span style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: result.available ? '#10b981' : '#ef4444',
              }} />
              <span style={{ fontSize: '12px', color: mutedColor }}>
                {result.available ? 'Available' : 'Unavailable'}
              </span>
            </div>

            {/* Name */}
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>
              {result.name}
            </h3>

            {/* Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              {result.type === 'classroom' && (
                <>
                  {result.location && (
                    <div style={{ color: mutedColor }}>
                      📍 <strong>Location:</strong> {result.location}
                    </div>
                  )}
                  {result.capacity && (
                    <div style={{ color: mutedColor }}>
                      👥 <strong>Capacity:</strong> {result.capacity} students
                    </div>
                  )}
                  {result.time_slot && (
                    <div style={{ color: mutedColor }}>
                      🕐 <strong>Available:</strong> {result.time_slot}
                    </div>
                  )}
                </>
              )}

              {result.type === 'faculty' && (
                <>
                  {result.department && (
                    <div style={{ color: mutedColor }}>
                      🏢 <strong>Department:</strong> {result.department}
                    </div>
                  )}
                  {result.office && (
                    <div style={{ color: mutedColor }}>
                      🚪 <strong>Office:</strong> {result.office}
                    </div>
                  )}
                  {result.office_hours && (
                    <div style={{ color: mutedColor }}>
                      🕐 <strong>Office Hours:</strong> {result.office_hours}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Action Button */}
            <button
              style={{
                width: '100%',
                marginTop: '16px',
                padding: '10px',
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
              View Details
            </button>
          </div>
        ))}
      </div>

      {(data.results ?? []).length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '40px 24px',
          color: mutedColor,
        }}>
          <p style={{ fontSize: '16px', margin: 0 }}>No results found for "{data.query}"</p>
        </div>
      )}
    </div>
  );
}
