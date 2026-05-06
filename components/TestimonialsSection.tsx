// =============================================
// TESTIMONIALS SECTION — WinnerCreativeAds
// =============================================
// HOW TO ADD THIS TO YOUR WEBSITE:
// 1. Copy this entire file into your project:
//    📁 components → TestimonialsSection.tsx
// 2. Open your app/page.tsx
// 3. Import at the top: import TestimonialsSection from '@/components/TestimonialsSection'
// 4. Paste <TestimonialsSection /> above your pricing section
// 5. Save → Commit → Push → Done!
// =============================================

const reviews = [
  {
    initials: "JR",
    name: "james_ryan",
    country: "🇺🇸 United States",
    time: "2 weeks ago",
    color: "#7ab3e8",
    bg: "#1a2030",
    text: "Started with just one product ad to test — honestly didn't expect much for the price. But the quality completely blew me away. Immediately upgraded to the premium package for my whole store. Best investment I've made for my dropshipping business. The pricing is unbelievably reasonable for what you get!",
  },
  {
    initials: "SK",
    name: "sarah_k",
    country: "🇦🇺 Australia",
    time: "3 weeks ago",
    color: "#6db86d",
    bg: "#1a2e1a",
    text: "To be honest I wasn't happy with the first version — it wasn't quite what I had in mind. But the team was incredibly patient and gave revision after revision without any complaint until I was 100% satisfied. That level of honesty and dedication is rare. Fully trusted, highly recommended!",
  },
  {
    initials: "DM",
    name: "david_m",
    country: "🇨🇦 Canada",
    time: "1 month ago",
    color: "#b87ab8",
    bg: "#2a1e2a",
    text: "Fast, professional and super creative. The ad for my pet store looked like it was produced by a big agency. An even better hook was suggested than what I requested. Sales went up 40% in the first week. 10/10!",
  },
  {
    initials: "LB",
    name: "lucas_b",
    country: "🇬🇧 United Kingdom",
    time: "1 month ago",
    color: "#c8b86d",
    bg: "#2a2a18",
    text: "My Shopify store was getting traffic but zero conversions. The ad creative was rebuilt completely and the difference was night and day. CPM dropped, CTR tripled. The algorithm knowledge here is seriously on another level.",
  },
  {
    initials: "AT",
    name: "alex_t",
    country: "🇺🇸 United States",
    time: "3 weeks ago",
    color: "#6db86d",
    bg: "#1a2e1a",
    text: "The ad went absolutely crazy — 800k views and my store sold out completely. Never seen results like this before. Already ordering again for the next product. This is the real deal.",
  },
  {
    initials: "ER",
    name: "emma_r",
    country: "🇦🇺 Australia",
    time: "1 month ago",
    color: "#7ab3e8",
    bg: "#1a2030",
    text: "Got 2.3M views on TikTok overnight and my product sold out completely. Never had results like this with any other video editor. Ordering again next week without question!",
  },
  {
    initials: "MK",
    name: "mike_k",
    country: "🇩🇪 Germany",
    time: "2 weeks ago",
    color: "#e87a7a",
    bg: "#2a1e1e",
    text: "I was skeptical at first because of how low the price is — usually cheap means low quality. But I was completely wrong. The communication was top notch throughout the whole process, super responsive and always kept me updated. Delivery was on time and the final ad was exactly what I needed. Will be a long term client for sure.",
  },
  {
    initials: "NP",
    name: "noah_p",
    country: "🇳🇱 Netherlands",
    time: "3 weeks ago",
    color: "#6db8b8",
    bg: "#1e2a2a",
    text: "Ordered for my home decor store and got back a video that genuinely stopped me from scrolling when I watched it myself. That's when I knew it would work. Ran it on Meta with a $10/day budget and got 3 sales on the first day. Crazy ROI. Definitely ordering the scale package next.",
  },
  {
    initials: "OT",
    name: "olivia_t",
    country: "🇫🇷 France",
    time: "1 month ago",
    color: "#b87ab8",
    bg: "#2a1e2a",
    text: "What I appreciate most is the transparency. When I asked questions I got honest straight answers — no overselling, no fake promises. Just real quality work delivered on time. My beauty product ad performed way beyond my expectations. This team genuinely cares about the results.",
  },
  {
    initials: "RT",
    name: "ryan_t",
    country: "🇬🇧 United Kingdom",
    time: "2 months ago",
    color: "#7ab3e8",
    bg: "#1a2030",
    text: "Third order and still impressed every single time. Consistent quality, fast turnaround and the best customer service I've had on any freelance platform. The ads just convert — simple as that. If you're on the fence just try the starter package. You won't regret it.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "80px 20px",
        fontFamily: "inherit",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: "#666",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Client feedback
          </p>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 500,
              color: "#fff",
              marginBottom: "10px",
              lineHeight: 1.3,
            }}
          >
            Some of our satisfied customers
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#666",
              marginBottom: "16px",
            }}
          >
            Real experiences from dropshippers around the world
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ color: "#f5c400", fontSize: "18px", letterSpacing: "3px" }}>
              ★★★★★
            </span>
            <span style={{ fontSize: "14px", color: "#888" }}>
              5.0 average rating
            </span>
          </div>
        </div>

        {/* Reviews List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                background: "#141414",
                border: "0.5px solid #2a2a2a",
                borderRadius: "16px",
                padding: "18px 20px",
              }}
            >
              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {/* Avatar */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: r.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: r.color,
                      flexShrink: 0,
                    }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#fff",
                        margin: 0,
                      }}
                    >
                      {r.name}
                    </p>
                    <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
                      {r.country} · {r.time}
                    </p>
                  </div>
                </div>
                <span
                  style={{ color: "#f5c400", fontSize: "14px", fontWeight: 500 }}
                >
                  ★ 5.0
                </span>
              </div>

              {/* Review text */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#aaa",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                "{r.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ fontSize: "13px", color: "#555", marginBottom: "16px" }}>
            Join 500+ happy dropshippers worldwide
          </p>
          <a
            href="https://wa.me/923213953018"
            style={{
              display: "inline-block",
              background: "#fff",
              color: "#000",
              fontSize: "14px",
              fontWeight: 500,
              padding: "12px 28px",
              borderRadius: "999px",
              textDecoration: "none",
            }}
          >
            Get your winner ad →
          </a>
        </div>

      </div>
    </section>
  );
}
