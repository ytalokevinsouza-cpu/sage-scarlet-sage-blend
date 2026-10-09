import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const shots = [
  { src: "/media/hero.jpg", alt: "Focus at Home Focus System" },
  { src: "/media/demo.webp", alt: "Hands-on activity video" },
  { src: "/media/inside-v2.jpg", alt: "What's inside the workbook" },
  { src: "/media/bonuses.jpg", alt: "Free bonuses" },
  { src: "/media/sheets.jpg", alt: "Printable activity sheets" },
  { src: "/media/child.jpg", alt: "Child doing a focus activity" },
  { src: "/media/lifestyle.jpg", alt: "Kids working at the table" },
  { src: "/media/play.jpg", alt: "Screen-free play" },
  { src: "/media/compare-v2.jpg", alt: "Before and after" },
  { src: "/media/reviews.jpg", alt: "Parent reviews" },
  { src: "/media/bundle.jpg", alt: "Activity bundle" },
  { src: "/media/pack.jpg", alt: "Focus at Home pack" },
  { src: "/media/activity.jpg", alt: "Hands-on activity" },
];

const plans = [
  {
    id: "focus",
    name: "Focus at Home Focus System",
    meta: "1 system · +100 activities",
    extra: "",
    was: "$49.99",
    now: "$29.99",
    save: "Save 40%",
    best: false,
  },
  {
    id: "emotions",
    name: "Focus + Emotional Intelligence",
    meta: "2 systems · +300 activities",
    extra: "Everything in Focus System, plus Emotional Intelligence",
    was: "$89.99",
    now: "$44.99",
    save: "Save 50%",
    best: false,
  },
  {
    id: "full",
    name: "Full Learning System",
    meta: "5 systems · +600 activities",
    extra: "",
    was: "$174.99",
    now: "$69.99",
    save: "Save 60%",
    best: true,
  },
] as const;

const quotes = [
  {
    text: "Best purchase I’ve made for my child. She went from frustration to finishing everything with a smile.",
    name: "Lauren M.",
    photo: "/media/lifestyle.jpg",
  },
  {
    text: "I thought nothing would work… but in just a few days, my child went from constant frustration to calm, focused and actually enjoying learning!",
    name: "Lilly S.",
    photo: "/media/child.jpg",
  },
  {
    text: "My child struggled to focus… now he actually asks to do these activities every day. I’ve never seen him this motivated.",
    name: "Sarah F.",
    photo: "/media/activity.jpg",
  },
];

const included = [
  ["📘", "Focus & Attention Activities"],
  ["📗", "Memory Building Activities"],
  ["📙", "Shapes & Patterns"],
  ["📕", "Logical Sequences"],
  ["📒", "Tracing & Fine Motor Skills"],
  ["📓", "Colors & Matching"],
  ["⬛", "Hand-Eye Coordination"],
  ["🌀", "100% Screen-Free Activities"],
  ["✨", "+ ALL bonus gifts included FREE (today only!)"],
];

const faqs = [
  ["How do I receive the product?", "Right after your purchase, you’ll get instant access to download everything. No waiting, no shipping — you can start today."],
  ["What age is this for?", "Focus at Home works best for children ages 3 to 14. The activities are progressive, so they easily adapt to your child’s level."],
  ["Do I need teaching experience or special knowledge?", "Not at all. Everything is designed to be simple, guided, and easy to follow. Any parent can use it."],
  ["What if my child is very active or easily distracted?", "Perfect — that’s exactly who this was made for. Focus at Home helps kids channel their energy while building focus step by step."],
  ["How long before I see results?", "Most parents notice changes in 3–7 days: better focus, less frustration, improved memory, and more calm behavior. Every child is different."],
  ["Do I need screens or internet?", "No. Once downloaded, everything is 100% printable and completely screen-free."],
  ["How many times can I use the activities?", "As many times as you want. You get lifetime access, so you can reprint everything anytime."],
  ["Will this help if my child has ADHD or learning difficulties?", "Many parents of children who struggle with focus report good results because the activities are short, engaging, and not overwhelming. This is not a medical treatment. It is a support tool."],
  ["Can I use it for more than one child?", "Yes. You buy it once and can use it with all your kids."],
];

function Home() {
  const [shot, setShot] = useState(0);
  const [planId, setPlanId] = useState<(typeof plans)[number]["id"]>("full");
  const [club, setClub] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [ordered, setOrdered] = useState(false);
  const [quote, setQuote] = useState(0);
  const touchX = useRef<number | null>(null);

  const plan = plans.find((item) => item.id === planId) ?? plans[2];
  const title = club ? `${plan.name} + Brain Games Club` : plan.name;

  function buyNow() {
    setOrdered(false);
    setCartOpen(true);
  }

  return (
    <main>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>Trusted by 27,114+ Families | Save 50% Off Today</span>
          ))}
        </div>
      </div>

      <header className="topbar">
        <a className="logo-link" href="#top">
          <img src="/media/logo.jpg" alt="Focus at Home" />
        </a>
      </header>

      <div className="page" id="top">
        <section className="product">
          <div className="gallery">
            <div
              className="stage"
              onTouchStart={(event) => {
                touchX.current = event.changedTouches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                if (touchX.current == null) return;
                const dx = (event.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
                if (dx < -40) setShot((n) => (n + 1) % shots.length);
                if (dx > 40) setShot((n) => (n + shots.length - 1) % shots.length);
                touchX.current = null;
              }}
            >
              <img src={shots[shot].src} alt={shots[shot].alt} />
              <button className="stage-nav prev" aria-label="Previous image" onClick={() => setShot((n) => (n + shots.length - 1) % shots.length)}>
                <ChevronLeft size={22} />
              </button>
              <button className="stage-nav next" aria-label="Next image" onClick={() => setShot((n) => (n + 1) % shots.length)}>
                <ChevronRight size={22} />
              </button>
            </div>
            <div className="thumbs">
              <button className="nav-arrow" aria-label="Previous thumbnail" onClick={() => setShot((n) => (n + shots.length - 1) % shots.length)}>
                <ChevronLeft size={16} />
              </button>
              <div className="thumb-scroller">
                {shots.map((item, index) => (
                  <button
                    key={item.src}
                    className={index === shot ? "thumb active" : "thumb"}
                    onClick={() => setShot(index)}
                    aria-label={`Open media ${index + 1}`}
                  >
                    <img src={item.src} alt="" />
                  </button>
                ))}
              </div>
              <button className="nav-arrow" aria-label="Next thumbnail" onClick={() => setShot((n) => (n + 1) % shots.length)}>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div>
            <div className="loved">
              <Star size={16} fill="currentColor" />
              <span>Loved by 10,500+ customers</span>
              <span className="faces" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </span>
            </div>
            <h1 className="product-title">Focus at Home +100 Activities to Boost Attention, Focus, and Learning</h1>
            <ul className="benefits">
              <li><span className="check"><Check size={12} /></span><span>Helps your child <b>stay focused and finish activities</b> instead of giving up halfway.</span></li>
              <li><span className="check"><Check size={12} /></span><span>Reduces frustration and daily struggles, turning “I can’t” moments into <b>confidence and pride</b>.</span></li>
              <li><span className="check"><Check size={12} /></span><span>Creates calmer playtime after school or before bed, <b>without screens or arguments</b>.</span></li>
              <li><span className="check"><Check size={12} /></span><span>Ideal for kids who are easily distracted, restless, or seem <b>“in their own world”</b>.</span></li>
              <li><span className="check"><Check size={12} /></span><span>Builds real-life skills parents worry about: <b>attention, patience, and self-control</b>.</span></li>
              <li><span className="check"><Check size={12} /></span><span>Feels like play to your child while you know they’re <b>learning and training their focus</b>.</span></li>
              <li><span className="check"><Check size={12} /></span><span>Only 10 minutes a day: a simple, realistic routine for parents who want to <b>see real change</b>.</span></li>
            </ul>

            <article className="quote">
              <img src="/media/alejandra.png" alt="Alejandra R." />
              <div>
                <span className="who">Alejandra R. <span className="stars">★★★★★</span></span>
                <p>“Focus at Home has been a blessing for my child. I see him more focused, more confident, and even excited to learn. I never imagined something so simple could make such a big difference in our afternoons. I truly recommend it from the heart.”</p>
              </div>
            </article>

            <p className="kicker">LIMITED TIME OFFER · INSTANT ACCESS BY EMAIL</p>
            <div className="offers" id="offers">
              {plans.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`offer${item.best ? " best" : ""}${planId === item.id ? " selected" : ""}`}
                  onClick={() => setPlanId(item.id)}
                >
                  {item.best ? <div className="ribbon">★ Best Seller · Loved by Parents & Teachers</div> : null}
                  <div className="offer-head">
                    <div>
                      <h3>{item.name}</h3>
                      <p className="meta">{item.meta}</p>
                      {item.extra ? <p className="meta">{item.extra}</p> : null}
                    </div>
                    <span className="radio" aria-hidden="true" />
                  </div>
                  <div className="price-row">
                    <s>{item.was}</s>
                    <b>{item.now}</b>
                    <span className="save">{item.save}</span>
                  </div>
                  {item.best ? (
                    <div className="pills">
                      {["5 Systems Included", "Focus", "Emotions", "Math", "Reading", "Life Skills", "Lifetime Access", "Free Updates", "+600 Activities", "100% Screen-Free"].map((pill) => (
                        <span key={pill}>{pill}</span>
                      ))}
                    </div>
                  ) : null}
                </button>
              ))}
            </div>

            <label className="addon">
              <input type="checkbox" checked={club} onChange={(event) => setClub(event.target.checked)} />
              <span>
                <b>Add the Brain Games Club and save 67%</b>
                <br />
                New printable brain games in your inbox every month · Cancel anytime
              </span>
            </label>
            <button className="buy" type="button" onClick={buyNow}>BUY NOW</button>
            <div className="trustline">Instant Download • Print & Go • Lifetime Access</div>
            <div className="perks">
              <div><div className="perk-icon"><Zap size={16} /></div>Instant Access</div>
              <div><div className="perk-icon"><FileText size={16} /></div>Printable Digital PDF</div>
              <div><div className="perk-icon"><Users size={16} /></div>10,500+ Happy Families</div>
            </div>
          </div>
        </section>

        <section className="block">
          <h2><span className="emoji" aria-hidden="true">🧠</span> Imagine if your child could achieve this in just 10 minutes a day…</h2>
          <div className="card">
            <ul>
              <li>Focus faster without screens, yelling or frustration</li>
              <li>Finish homework without crying or saying “I can’t”</li>
              <li>Manage emotions without meltdowns</li>
              <li>Learn faster and remember more</li>
              <li>Build patience, calm and self-control</li>
              <li>Play while stimulating their brain (100% screen-free)</li>
            </ul>
            <p><b>That’s exactly what Focus at Home does for them.</b></p>
          </div>
        </section>

        <section className="block">
          <img className="shot" src="/media/inside-v2.jpg" alt="What's inside Focus at Home" />
          <h2>Why does Focus at Home work so fast?</h2>
          <ul className="checks">
            <li>✓ Designed using Montessori-based principles</li>
            <li>✓ Stimulates the 5 key areas of the brain</li>
            <li>✓ Short but powerful exercises</li>
            <li>✓ Simple, step-by-step progression</li>
            <li>✓ Perfect for active or easily distracted kids</li>
            <li>✓ 100% screen-free</li>
            <li>✓ Visible results in just days</li>
          </ul>
          <p><b>Every activity is designed to activate cognitive skills that school doesn’t teach… but your child truly needs.</b></p>
        </section>

        <section className="block">
          <h2>Before vs After Focus at Home</h2>
          <img className="shot" src="/media/compare-v2.jpg" alt="With and without Focus at Home" />
          <table className="compare">
            <thead>
              <tr>
                <th>With Focus at Home</th>
                <th>Without Focus at Home</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Better focus & calm", "Gives up halfway"],
                ["Finishes tasks faster", "Needs constant reminders"],
                ["Stronger memory & understanding", "Forgets the next step"],
                ["Activities that actually engage them", "Bored in minutes"],
                ["More confidence and motivation", "“I can’t” every afternoon"],
              ].map(([good, bad]) => (
                <tr key={good}>
                  <td className="good">{good}</td>
                  <td className="bad">{bad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="block" id="reviews">
          <h2>What other parents are saying</h2>
          <article className="slide">
            <div className="slide-photo">
              <img src={quotes[quote].photo} alt="" />
              <span className="quote-bubble" aria-hidden="true">”</span>
            </div>
            <span className="stars gold">★★★★★</span>
            <p>{quotes[quote].text}</p>
            <p className="who">{quotes[quote].name}</p>
          </article>
          <div className="pager">
            <button
              className="icon-btn"
              aria-label="Previous review"
              onClick={() => setQuote((n) => (n + quotes.length - 1) % quotes.length)}
            >
              <ChevronLeft size={16} />
            </button>
            {quote + 1} / {quotes.length}
            <button
              className="icon-btn"
              aria-label="Next review"
              onClick={() => setQuote((n) => (n + 1) % quotes.length)}
            >
              <ChevronRight size={16} />
            </button>
          </div>
          <img className="shot" src="/media/reviews.jpg" alt="Parent comments" />
        </section>

        <section className="block" id="included">
          <h2>Everything your child gets with Focus at Home</h2>
          <p className="lead"><b>Over 100 activities included:</b></p>
          <img className="shot" src="/media/sheets.jpg" alt="Activity pages" />
          <div className="included">
            {included.map(([icon, label]) => (
              <div key={label}>
                <span className="item-emoji" aria-hidden="true">{icon}</span>
                {icon === "✨" ? <b>{label}</b> : label}
              </div>
            ))}
          </div>
          <img className="shot shot-gap" src="/media/bonuses.jpg" alt="Free bonuses included today" />
          <p><b>+ All bonus gifts included free (today only)</b></p>
        </section>

        <section className="block">
          <h2>Special offer — today only</h2>
          <div className="card">
            <p>Get Focus at Home + 10 free bonuses before the price goes back up.</p>
            <p>Instant access<br />100+ printable activities<br />10 bonus resources<br />Lifetime use</p>
            <p><b>Your child’s brain is developing every second… every day matters.</b></p>
            <button className="buy" type="button" onClick={buyNow}>BUY NOW</button>
          </div>
        </section>

        <section className="block">
          <h2>Why choose Focus at Home</h2>
          <div className="why-grid">
            <article><h3>Visible results in weeks</h3><p>Improve focus and concentration with short daily practice.</p></article>
            <article><h3>Memory boost</h3><p>Activities that strengthen retention and understanding.</p></article>
            <article><h3>Save time and money</h3><p>Printable activities you can use anywhere.</p></article>
            <article><h3>Simple and effective</h3><p>Just 10 minutes a day.</p></article>
          </div>
        </section>

        <section className="block faq" id="faq">
          <h2>Frequently Asked Questions</h2>
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </section>

        <section className="block" id="guarantee">
          <div className="guarantee">
            <img src="/media/logo.jpg" alt="" />
            <p className="kicker">INSTANT ACCESS · LOVED BY 10,000+ PARENTS</p>
            <h2>100% Peace of Mind Guarantee</h2>
            <p>Try Focus at Home for 7 days. If you don’t see a difference, we’ll give you your money back. No risk. No questions asked.</p>
            <button className="buy" type="button" onClick={buyNow}>BUY NOW</button>
          </div>
        </section>

        <footer className="foot">
          <p className="copy">© 2026 Focus at Home</p>
        </footer>
      </div>

      {cartOpen ? (
        <>
          <button className="drawer-bg" aria-label="Close" onClick={() => setCartOpen(false)} />
          <aside className="drawer right sheet">
            <button className="icon-btn" aria-label="Close" onClick={() => setCartOpen(false)}><X size={20} /></button>
            <h2>Buy now</h2>
            {ordered ? (
              <p><b>You’re in.</b> {title} at {plan.now} — the download link goes to the email you entered.</p>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setOrdered(true);
                }}
              >
                <p><b>{title}</b></p>
                <p>{plan.now}</p>
                <label>Name<input name="name" required /></label>
                <label>Email for instant access<input type="email" name="email" required /></label>
                <button className="buy" type="submit">BUY NOW</button>
              </form>
            )}
          </aside>
        </>
      ) : null}
    </main>
  );
}
