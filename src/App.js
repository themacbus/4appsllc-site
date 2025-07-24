import React from "react";
import { FadeInSection } from "./components/FadeInSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-white text-black min-h-screen scroll-smooth">
      <Navbar />

      {/* Hero */}
      <FadeInSection>
        <section className="min-h-screen flex items-center justify-center px-6 py-10" id="hero">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
  AI Compliance & Strategic Readiness
</h1>
<p className="text-lg md:text-xl mb-6">
  Guiding Agencies Through EO 14110, M-25-21, and M-25-22 — From Policy to Practice
</p>
            <a
              href="mailto:info@4appsllc.com"
              className="bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-darkPurple transition"
            >
              Let’s Talk
            </a>
          </div>
        </section>
      </FadeInSection>

      {/* Who We Are */}
      <FadeInSection>
        <section className="bg-white text-black py-10 px-6" id="who-we-are">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-base md:text-lg mb-4">
              4APPS LLC is a woman- and veteran-owned strategic advisory firm delivering modern,
              compliant solutions to federal agencies navigating artificial intelligence policy,
              workforce training, and governance.
            </p>
            <p className="text-sm md:text-base">
              With over two decades of government experience, we understand the urgency, complexity,
              and leadership support required to meet today’s AI mandates.
            </p>
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <span className="bg-primary text-white px-3 py-1 rounded-full font-medium shadow text-sm">
                Veteran-Owned
              </span>
              <span className="bg-primary text-white px-3 py-1 rounded-full font-medium shadow text-sm">
                Woman-Owned
              </span>
              <span className="bg-primary text-white px-3 py-1 rounded-full font-medium shadow text-sm">
                Small Business
              </span>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* What We Do */}
      <FadeInSection>
        <section className="bg-white text-black py-10 px-6" id="what-we-do">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-primary text-white p-5 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-2"> AI Governance Toolkit</h3>
                <ul className="list-disc list-inside space-y-1 text-xs md:text-sm">
                  <li>Use Case Inventory Template</li>
                  <li>Risk & Impact Assessment Templates</li>
                  <li>Public Disclosure Framework</li>
                  <li>AI Strategy Template (Customizable)</li>
                </ul>
              </div>
              <div className="bg-primary text-white p-5 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-2">🎓 Executive Training</h3>
                <ul className="list-disc list-inside space-y-1 text-xs md:text-sm">
                  <li>Live workshops for CIOs, CDAOs, CAIOs</li>
                  <li>Plain-language AI policy training</li>
                  <li>Tool walkthroughs (agency’s tech)</li>
                  <li>Executive AI Playbook included</li>
                </ul>
              </div>
              <div className="bg-primary text-white p-5 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-2"> Strategic Advisory</h3>
                <ul className="list-disc list-inside space-y-1 text-xs md:text-sm">
                  <li>Setting up the CAIO function</li>
                  <li>AI audit prep & OMB reporting</li>
                  <li>AI project alignment</li>
                  <li>Optional 30–60 day coaching</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* What Sets Us Apart */}
      <FadeInSection>
        <section className="bg-darkPurple text-white py-10 px-6" id="what-sets-us-apart">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Sets Us Apart</h2>
            <ul className="space-y-3 text-base md:text-lg">
              <li>✔️ Deep expertise in federal agency operations and compliance</li>
              <li>✔️ No jargon — we teach AI in plain English</li>
              <li>✔️ Policy-driven, not hype-driven</li>
              <li>✔️ Veteran- and woman-owned; we serve with purpose</li>
              <li>✔️ Packages start at $25K — we deliver fast ROI</li>
            </ul>
          </div>
        </section>
      </FadeInSection>

    

      {/* Contact Section */}
      <FadeInSection>
        <section className="bg-primary text-white py-10 px-6" id="contact">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Compliant, Fast?</h2>
            <p className="mb-6 text-lg">
              Let’s talk — no need to hire a full-time CAIO.
            </p>
            <a
              href="mailto:info@4appsllc.com"
              className="bg-white text-primary font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-darkPurple hover:text-white transition"
            >
              Contact Us
            </a>
            <p className="mt-4 text-sm text-white/80">
              Based in Chesapeake, VA | Serving clients nationwide
            </p>
          </div>
        </section>
      </FadeInSection>
            {/* Pricing Page Section */}
      <FadeInSection>
        <section className="bg-white text-black py-10 px-6" id="pricing">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Fractional CAIO Engagements
            </h2>
            <p className="text-lg md:text-xl text-center mb-10">
              We offer time-bound, high-impact Fractional CAIO (Chief AI Officer) engagements
              designed to align your agency with Executive Order 14110 and implementing memoranda
              M-25-21 and M-25-22. Our packages ensure policy compliance, increase workforce
              readiness, and unlock innovation — all within 4–6 months.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold mb-4"> Agency Engagement Tiers</h3>
            <div className="overflow-x-auto mb-10">
              <table className="min-w-full border border-gray-300 text-sm md:text-base">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-2 border">Agency Size</th>
                    <th className="px-4 py-2 border">Engagement Scope</th>
                    <th className="px-4 py-2 border">Duration</th>
                    <th className="px-4 py-2 border">Total Cost</th>
                    <th className="px-4 py-2 border">Per Person Avg</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">Small (≤50 staff)</td>
                    <td className="px-4 py-2 border">Full implementation support, workforce training, risk registry, policy alignment, and roadmap</td>
                    <td className="px-4 py-2 border">4 months</td>
                    <td className="px-4 py-2 border">$175,000</td>
                    <td className="px-4 py-2 border">~$3,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Mid-size (51–250 staff)</td>
                    <td className="px-4 py-2 border">Scaled roadmap + workshop clusters, embedded advisory support, CAIO transition framework</td>
                    <td className="px-4 py-2 border">5 months</td>
                    <td className="px-4 py-2 border">$350,000</td>
                    <td className="px-4 py-2 border">~$1,400</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Large (251–999 staff)</td>
                    <td className="px-4 py-2 border">Departmental coordination, executive strategy, governance model, audit readiness</td>
                    <td className="px-4 py-2 border">6 months</td>
                    <td className="px-4 py-2 border">$650,000</td>
                    <td className="px-4 py-2 border">~$650–$2,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Enterprise (1,000+ staff)</td>
                    <td className="px-4 py-2 border">Enterprise-wide strategy, digital workforce alignment, real-world problem labs, cross-agency scalability</td>
                    <td className="px-4 py-2 border">6 months</td>
                    <td className="px-4 py-2 border">Starting at $1.25M</td>
                    <td className="px-4 py-2 border">Custom pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold mb-4"> All Packages Include:</h3>
            <ul className="list-disc list-inside space-y-2 mb-10 text-base md:text-lg">
              <li> EO 14110 / M-25-21 / M-25-22 compliance implementation</li>
              <li> Live AI literacy training for all levels of staff</li>
              <li> AI use case inventory & risk registry creation</li>
              <li> Governance model & CAIO onboarding roadmap</li>
              <li> Gap analysis & internal policy audit</li>
              <li> Leadership briefings + agency-tailored AI strategy</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-semibold mb-4">📞 Schedule a Discovery Call</h3>
            <p className="mb-2 text-lg">
              Let’s discuss your agency’s needs and readiness.
            </p>
            <p className="text-lg"> <a href="mailto:info@4appsllc.com" className="text-primary underline">info@4appsllc.com</a></p>
            <p className="text-lg"> <a href="tel:2284241394" className="text-primary underline">228-424-1394</a></p>
          </div>
        </section>
      </FadeInSection>

    </div>
  );
}

export default App;
