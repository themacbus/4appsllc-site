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
              AI Compliance & Strategy Solutions
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Helping You Navigate M-25-21 & M-25-22 with Confidence
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
                <h3 className="text-xl font-bold mb-2">🧰 AI Governance Toolkit</h3>
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
                <h3 className="text-xl font-bold mb-2">🧭 Strategic Advisory</h3>
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

      {/* Core Offerings */}
      <FadeInSection>
        <section className="bg-white text-black py-10 px-6" id="core-offerings">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Core Offerings</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="border border-primary p-5 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-2">AI Compliance Starter Kit</h3>
                <p className="mb-1 text-sm md:text-base">Templates, strategy draft, and email support</p>
                <p className="font-bold text-darkPurple">$25,000+</p>
              </div>
              <div className="border border-primary p-5 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-2">Full Implementation Package</h3>
                <p className="mb-1 text-sm md:text-base">Includes toolkit + workshops + 30-day support</p>
                <p className="font-bold text-darkPurple">$85,000–$135,000</p>
              </div>
              <div className="border border-primary p-5 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-2">CIO/CDAO Training Add-On</h3>
                <p className="mb-1 text-sm md:text-base">Executive briefings, tool demos, and playbooks</p>
                <p className="font-bold text-darkPurple">$15,000–$25,000</p>
              </div>
              <div className="border border-primary p-5 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-2">Ongoing Advisory Subscription</h3>
                <p className="mb-1 text-sm md:text-base">Monthly compliance and training support</p>
                <p className="font-bold text-darkPurple">$5,000/month</p>
              </div>
            </div>
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
    </div>
  );
}

export default App;
