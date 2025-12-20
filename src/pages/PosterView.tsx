import { forwardRef } from 'react';

const PosterView = forwardRef<HTMLDivElement, { result: any }>(
  ({ result }, ref) => {
    const { persona, recommendations, finance, student } = result;

    const strengths = persona.strengths.slice(0, 4);
    const centre = recommendations.centres[0];
    const club = recommendations.clubs[0];
    const financeTip = finance?.advice?.[0];

    const shortDescription =
      persona.description
        .split('.')
        .slice(0, 2)
        .join('.')
        .trim() + '.';

    return (
      <div
        ref={ref}
        style={{
          width: '1080px',
          height: '1920px',
          backgroundColor: '#ffffff',
          borderRadius: '48px',
          overflow: 'hidden',
          fontFamily: 'Poppins, sans-serif',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: '40px 32px',
            background: 'linear-gradient(135deg,#f97316,#fbbf24)',
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '44px', fontWeight: 800 }}>
            🌾 {persona.title}
          </h1>
          <p style={{ fontSize: '20px', opacity: 0.95 }}>
            Pongal Tech Persona
          </p>
        </div>

        {/* STUDENT INFO */}
        <div
          style={{
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 600,
            padding: '18px',
            color: '#374151',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          {student.name} • {student.department} • Year {student.year}
        </div>

        {/* BODY */}
        <div
          style={{
            padding: '48px',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {/* DESCRIPTION */}
          <p
            style={{
              textAlign: 'center',
              fontSize: '26px',
              lineHeight: 1.6,
              color: '#4b5563',
              fontStyle: 'italic',
            }}
          >
            “{shortDescription}”
          </p>

          {/* STRENGTHS */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '26px', fontWeight: 700 }}>
              💪 Strengths
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              {strengths.map((s: string) => (
                <span
                  key={s}
                  style={{
                    background: '#ecfeff',
                    color: '#0369a1',
                    padding: '14px 24px',
                    borderRadius: '999px',
                    fontSize: '20px',
                    fontWeight: 700,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CENTRE */}
          <InfoCard
            title="🏛 Centre"
            value={centre}
            bg="#fff7ed"
          />

          {/* CLUB */}
          <InfoCard
            title="🎭 Club"
            value={club}
            bg="#f0fdf4"
          />

          {/* FINANCE */}
          {financeTip && (
            <div
              style={{
                padding: '28px',
                background:
                  'linear-gradient(135deg,#d1fae5,#a7f3d0)',
                borderRadius: '28px',
                textAlign: 'center',
                fontSize: '22px',
                fontWeight: 700,
                color: '#065f46',
              }}
            >
              💰 Smart Money Tip
              <div style={{ marginTop: '12px', fontWeight: 600 }}>
                {financeTip}
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div
          style={{
            fontSize: '18px',
            textAlign: 'center',
            padding: '24px',
            color: '#6b7280',
            borderTop: '1px dashed #e5e7eb',
          }}
        >
          🌾 Pongal Tech Fest • Your Tech Journey
        </div>
      </div>
    );
  }
);

export default PosterView;

/* ---------- Helper Card ---------- */

function InfoCard({
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
        padding: '28px',
        borderRadius: '28px',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 700,
      }}
    >
      {title}
      <div style={{ marginTop: '12px', fontWeight: 600 }}>
        {value}
      </div>
    </div>
  );
}
