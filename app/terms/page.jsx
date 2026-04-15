'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-amber-400/10 bg-slate-950/95 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center gap-4">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            <ArrowLeft className="text-slate-300" size={24} />
          </Link>
          <h1 className="text-2xl font-bold text-white font-serif">Terms & Conditions</h1>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-slate-300 space-y-8">
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-amber-400 font-semibold mb-8">
            Last Updated: March 2025
          </p>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">1. Agreement to Terms</h2>
            <p>
              By accessing and using the website of Singh & Partners LLP ("website," "site," "our," "we," "us") and engaging with our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">2. Use License & Website Access</h2>
            <p>
              Singh & Partners LLP grants you a non-exclusive, non-transferable, limited license to access and use our website for lawful purposes. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Reproduce, duplicate, copy, or sell any content without written permission</li>
              <li>Attempt to gain unauthorized access to our systems or services</li>
              <li>Transmit viruses, malware, or any code intended to damage systems</li>
              <li>Engage in spam, harassment, or abusive behavior</li>
              <li>Use our website for illegal purposes or in violation of any laws</li>
              <li>Impersonate any person or entity</li>
              <li>Scrape or automate data collection without permission</li>
            </ul>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">3. No Legal Advice Disclaimer</h2>
            <p>
              The information provided on this website, including articles, blogs, and general content, is for informational purposes only and does not constitute legal advice. Information on this site:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Should not be used as a substitute for professional legal consultation</li>
              <li>Does not establish an attorney-client relationship</li>
              <li>May not reflect the most current legal developments</li>
              <li>Is general in nature and may not apply to your specific situation</li>
            </ul>
            <p className="mt-4 font-semibold text-amber-400">
              For legal advice specific to your situation, please schedule a paid consultation with one of our attorneys.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">4. Attorney-Client Relationship</h2>
            <p>
              An attorney-client relationship is created only when:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>You have a signed engagement letter with our firm</li>
              <li>We have agreed in writing to represent you</li>
              <li>You have provided compensation or engaged our paid services</li>
            </ul>
            <p className="mt-4">
              Simply contacting us through the website or booking a preliminary consultation does not create an attorney-client relationship unless explicitly confirmed in writing.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">5. Appointment Booking & Consultation</h2>
            <div className="space-y-3 mt-4">
              <p><strong>Scheduling:</strong> Appointment bookings are subject to availability and confirmation by our office.</p>
              <p><strong>Cancellation:</strong> Cancellations must be made 24 hours in advance for a full credit toward future services.</p>
              <p><strong>Fees:</strong> Consultation fees are as discussed during booking and must be paid prior to service delivery (unless payment plan is agreed).</p>
              <p><strong>Preliminary Consultation:</strong> A preliminary consultation may be provided at no cost at our discretion, but this is not legal advice and does not create representation.</p>
            </div>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">6. Fees & Payment Terms</h2>
            <p>
              Our fee structure will be clearly outlined in your engagement letter or quote. Payment terms include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Hourly rates, fixed fees, or contingency arrangements (as agreed)</li>
              <li>Retainer deposits as advance payment for services</li>
              <li>Reimbursable expenses for court fees, filing costs, and third-party services</li>
              <li>Interest on overdue payments as per engagement agreement</li>
            </ul>
            <p className="mt-4">
              Invoices are due within 30 days unless otherwise specified. Overdue payments may result in suspension of services.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">7. Confidentiality & Privilege</h2>
            <p>
              Once we formally represent you, all communications are protected by attorney-client privilege and confidentiality obligations. We will not disclose your information except:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>As required by law, court order, or legal process</li>
              <li>With your written consent</li>
              <li>To other counsel assisting in your matter</li>
              <li>To defend against professional liability claims</li>
            </ul>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SINGH & PARTNERS LLP AND ITS PARTNERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunity</li>
              <li>Damage from unauthorized access or viruses</li>
              <li>Any damages arising from use of or inability to use our website or services</li>
            </ul>
            <p className="mt-4">
              This limitation applies even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">9. Disclaimers</h2>
            <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-bold text-amber-400">"As Is" Basis</h3>
                <p>Our website and services are provided "as is" without warranties of any kind, express or implied.</p>
              </div>
              <div>
                <h3 className="font-bold text-amber-400">No Guarantee of Results</h3>
                <p>We cannot guarantee outcomes in legal matters. Past results do not guarantee future outcomes.</p>
              </div>
              <div>
                <h3 className="font-bold text-amber-400">Website Availability</h3>
                <p>We do not guarantee uninterrupted access to our website or that it will be without faults. We reserve the right to modify or discontinue services without notice.</p>
              </div>
              <div>
                <h3 className="font-bold text-amber-400">Third-Party Content</h3>
                <p>We are not responsible for content from external websites, links, or third-party resources.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">10. Intellectual Property Rights</h2>
            <p>
              All content on our website—including text, graphics, logos, images, articles, and software—is owned by or licensed to Singh & Partners LLP and protected by copyright and intellectual property laws. You may not reproduce, modify, or distribute this content without written permission.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">11. User-Generated Content</h2>
            <p>
              Any information, documents, or communications you submit to us become our property and may be used for case management, billing, and legal proceedings. Do not submit information you wish to keep confidential unless you intend to engage our services.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">12. Conflict of Interest</h2>
            <p>
              Singh & Partners LLP cannot represent you if doing so creates a conflict of interest with our existing clients or matters. We will notify you promptly if a conflict exists and we cannot take your matter.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">13. Professional Standards & Ethics</h2>
            <p>
              Our practice is governed by:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Bar Council of India Rules of Professional Conduct</li>
              <li>Advocates Act, 1961</li>
              <li>Rules of various High Courts and Tribunals</li>
              <li>Applicable state and national laws</li>
            </ul>
            <p className="mt-4">
              Our advocates are subject to the professional conduct rules applicable to their enrolment and we adhere to applicable ethics requirements.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">14. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Singh & Partners LLP, its partners, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Your use of our website or services in violation of these terms</li>
              <li>Your infringement of third-party rights</li>
              <li>Your violation of applicable laws</li>
              <li>Any false or misleading information you provide</li>
            </ul>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">15. Termination of Services</h2>
            <p>
              We reserve the right to terminate representation if:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>You fail to pay fees as agreed</li>
              <li>You fail to follow our legal advice or court orders</li>
              <li>Our representation would violate professional ethics rules</li>
              <li>Communication becomes ineffective or hostile</li>
              <li>The engagement is no longer viable</li>
            </ul>
            <p className="mt-4">
              Upon termination, we will provide reasonable notice and cooperate in transitioning your matter to new counsel.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">16. Dispute Resolution</h2>
            <p>
              Any dispute arising from these terms or our services shall be:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Governed by the laws of Bihar, India</li>
              <li>Subject to exclusive jurisdiction of courts in Patna</li>
              <li>Resolved through negotiation, mediation, or litigation as appropriate</li>
            </ul>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">17. Modifications to Terms</h2>
            <p>
              We may modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of updated terms. We encourage you to review these terms periodically for changes.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">18. Severability</h2>
            <p>
              If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect, and the invalid provision shall be modified to the minimum extent necessary to make it valid.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">19. Entire Agreement</h2>
            <p>
              These Terms and Conditions, together with our Privacy Policy and any signed engagement letter, constitute the entire agreement between you and Singh & Partners LLP regarding our services and supersede all prior negotiations and agreements.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">20. Contact & Questions</h2>
            <p>
              For questions about these Terms and Conditions, or to address concerns:
            </p>
            <div className="mt-6 p-6 bg-amber-400/5 border border-amber-400/20 rounded-lg">
              <p className="font-semibold text-white mb-3">Singh & Partners LLP</p>
              <p className="mb-2">📧 Email: <span className="text-amber-400">info@snp-legal.com</span></p>
              <p className="mb-2">📞 Phone: <span className="text-amber-400">7004480307</span></p>
              <p className="mb-2">📍 Head office: Above Aman Medical, Mohan Bigha, Dehri, Rohtas, Bihar, India</p>
              <p className="text-sm text-slate-400">Branch offices (BO): Ranchi; Dhanbad; Nagaon, Assam</p>
              <p className="mt-4 text-sm">Hours: Monday - Saturday, 10:30 AM - 7:30 PM IST</p>
            </div>
          </section>

          <section className="space-y-4 pt-8 border-t border-amber-400/20">
            <p className="text-sm text-slate-400 italic">
              By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
            </p>
          </section>
        </div>
      </article>

      {/* Footer Navigation */}
      <div className="border-t border-amber-400/10 bg-slate-950/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors font-semibold flex items-center gap-2">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <Link href="/privacy" className="text-slate-400 hover:text-amber-400 transition-colors">
            Read Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}