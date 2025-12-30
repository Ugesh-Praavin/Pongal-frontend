import { forwardRef } from 'react';

const PosterView = forwardRef<HTMLDivElement, { result: any }>(
  ({ result }, ref) => {
    const { persona, recommendations, finance, student } = result;

    const strengths = persona.strengths.slice(0, 4);
    const centre = recommendations.centres[0];
    const club = recommendations.clubs[0];
    const financeTip = finance?.advice?.[0];

    const shortDescription =
      persona.description.split('.').slice(0, 2).join('.').trim() + '.';

    return (
      <div
        ref={ref}
        style={{
          width: '1080px',
          height: '1920px',
          backgroundColor: '#ffffff',
          borderRadius: '28px',
          overflow: 'hidden',
          fontFamily: 'Poppins, sans-serif',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: '56px 40px',
            background: '#ffffff',
            color: '#111827',
            textAlign: 'center',
            borderBottom: '2px solid #f3f4f6',
          }}
        >
          {/* College Logo Placeholder */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#f3f4f6',
                border: '2px solid #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#9ca3af',
                }}
              >
                Logo
              </span>
            </div>
          </div>

          <h1 style={{ fontSize: '52px', fontWeight: 800, marginBottom: '8px', color: '#111827' }}>
            🌾 {persona.title}
          </h1>
          <p style={{ fontSize: '22px', color: '#6b7280', fontWeight: 500 }}>
            Pongal Tech Persona
          </p>
        </div>

        {/* ID STRIP */}
        <div
          style={{
            textAlign: 'center',
            fontSize: '22px',
            fontWeight: 600,
            padding: '24px',
            color: '#4b5563',
            backgroundColor: '#f9fafb',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          {student.name} • {student.department} • Year {student.year}
        </div>

        {/* BODY */}
        <div
          style={{
            padding: '64px 80px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              textAlign: 'center',
              fontSize: '28px',
              lineHeight: 1.7,
              marginBottom: '56px',
              color: '#374151',
              fontStyle: 'italic',
              fontWeight: 400,
            }}
          >
            "{shortDescription}"
          </p>

          {/* STRENGTHS */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontSize: '32px', fontWeight: 700, color: '#111827', marginBottom: '32px' }}>
              💪 Strengths
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                justifyContent: 'center',
              }}
            >
              {strengths.map((s: string) => (
                <span
                  key={s}
                  style={{
                    background: '#f0fdf4',
                    color: '#166534',
                    padding: '14px 26px',
                    borderRadius: '12px',
                    fontSize: '20px',
                    fontWeight: 600,
                    border: '1px solid #bbf7d0',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CENTRE */}
          <MiniCard title="🏛 Centre" value={centre} bg="#fff7ed" />

          {/* CLUB */}
          <MiniCard title="🎭 Club" value={club} bg="#f0fdf4" />

          {/* FINANCE */}
          {financeTip && (
            <div
              style={{
                marginTop: '40px',
                padding: '36px',
                background: '#f0fdf4',
                borderRadius: '20px',
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 700,
                color: '#166534',
                border: '2px solid #bbf7d0',
              }}
            >
              💰 Smart Money Tip
              <div style={{ marginTop: '16px', fontWeight: 500, fontSize: '22px', lineHeight: 1.5 }}>
                {financeTip}
              </div>
            </div>
          )}

          {/* FLEX SPACER — THIS IS THE KEY */}
          <div style={{ flexGrow: 1 }} />
        </div>

        {/* FOOTER */}
        <div
          style={{
            fontSize: '18px',
            textAlign: 'center',
            padding: '40px',
            color: '#9ca3af',
            borderTop: '1px solid #e5e7eb',
            backgroundColor: '#f9fafb',
          }}
        >
          🌾 Pongal Tech Fest • Your Tech Journey
        </div>
      </div>
    );
  }
);

export default PosterView;

/* Helper */
function MiniCard({
  title,
  value,
  bg,
}: {
  title: string;
  value?: string;
  bg: string;
}) {
  if (!value) return null;

  return (
    <div
      style={{
        background: bg,
        padding: '32px',
        borderRadius: '16px',
        marginTop: '24px',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 700,
        border: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      {title}
      <div style={{ marginTop: '14px', fontWeight: 600, fontSize: '22px', color: '#374151' }}>
        {value}
      </div>
    </div>
  );
}
