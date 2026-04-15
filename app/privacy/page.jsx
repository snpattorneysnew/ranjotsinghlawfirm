'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-amber-400/10 bg-slate-950/95 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center gap-4">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            <ArrowLeft className="text-slate-300" size={24} />
          </Link>
          <h1 className="text-2xl font-bold text-white font-serif">Privacy Policy</h1>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-slate-300 space-y-8">
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-amber-400 font-semibold mb-8">
            Last Updated: March 2025
          </p>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">Introduction</h2>
            <p>
              Singh & Partners LLP ("we," "us," "our," or "firm") is committed to protecting your privacy and ensuring you understand our practices regarding the collection and use of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">1. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-amber-400">Information You Provide Directly</h3>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Name, email address, phone number, and postal address</li>
                  <li>Details about your legal matter or case inquiry</li>
                  <li>Communication preferences and appointment scheduling information</li>
                  <li>Any documents or information provided during consultations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-amber-400">Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Website usage data, page views, and interaction patterns</li>
                  <li>Device information (browser type, operating system, IP address)</li>
                  <li>Cookie data for website functionality and analytics</li>
                  <li>Location information (country/region based on IP)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing legal consultation and services</li>
              <li>Responding to your inquiries and appointment requests</li>
              <li>Communicating important updates about your matter or our services</li>
              <li>Improving our website functionality and user experience</li>
              <li>Analyzing website traffic and performance metrics</li>
              <li>Sending occasional newsletters and legal updates (with your consent)</li>
              <li>Complying with legal obligations and regulatory requirements</li>
            </ul>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">3. Data Protection & Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Encryption of sensitive data transmissions</li>
              <li>Secure server infrastructure and firewalls</li>
              <li>Limited access to personal information (staff with legitimate need only)</li>
              <li>Regular security audits and updates</li>
              <li>Compliance with information security standards</li>
            </ul>
            <p className="mt-4 italic text-slate-400">
              Note: While we strive to protect your information, no transmission over the Internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">4. Data Sharing & Disclosure</h2>
            <p>
              We do <strong>not</strong> sell or rent your personal information to third parties. We may share your information only in these circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Co-counsel:</strong> With other lawyers assisting in your matter</li>
              <li><strong>Opposing counsel:</strong> As required by legal proceedings</li>
              <li><strong>Courts & authorities:</strong> When required by law, court order, or legal process</li>
              <li><strong>Service providers:</strong> Email, hosting, and analytics providers (under confidentiality agreements)</li>
              <li><strong>Professional advisors:</strong> Accountants and consultants supporting our practice</li>
            </ul>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">5. Confidentiality & Attorney-Client Privilege</h2>
            <p>
              Information shared with us is subject to attorney-client privilege and confidentiality obligations. We maintain strict confidentiality of all client communications, documents, and case details. This protection extends beyond the scope of this Privacy Policy and is governed by legal ethics rules and applicable laws.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">6. Cookies & Tracking</h2>
            <p>
              Our website uses cookies for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Essential cookies:</strong> Website functionality and security</li>
              <li><strong>Analytics cookies:</strong> Understanding user behavior and improving services</li>
              <li><strong>Preference cookies:</strong> Remembering your settings</li>
            </ul>
            <p className="mt-4">
              Most browsers allow you to control cookies through their settings. Disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">7. Your Rights & Choices</h2>
            <div className="space-y-3 mt-4">
              <p><strong>Access:</strong> You can request access to your personal information we hold.</p>
              <p><strong>Correction:</strong> Request correction of inaccurate information.</p>
              <p><strong>Deletion:</strong> Request deletion of your information (subject to legal obligations).</p>
              <p><strong>Opt-out:</strong> Unsubscribe from marketing communications anytime.</p>
              <p><strong>Portability:</strong> Request transfer of your data in structured format.</p>
            </div>
            <p className="mt-6 text-amber-400 font-semibold">
              To exercise any of these rights, contact us at: info@snp-legal.com
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">8. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Provide legal services and support your matter</li>
              <li>Comply with legal, accounting, and tax requirements</li>
              <li>Maintain records as required by applicable law and professional standards</li>
              <li>Establish, exercise, or defend legal claims</li>
            </ul>
            <p className="mt-4">
              Case files are typically retained for 5+ years after case closure per professional standards.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">9. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites. We are not responsible for the privacy practices of third-party sites. We encourage you to review their privacy policies before providing your information.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">10. Children's Privacy</h2>
            <p>
              Our website is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we discover such information, we will promptly delete it.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">11. International Users</h2>
            <p>
              Our office is located in India. If you are accessing our website from outside India, you acknowledge that your information will be processed and stored in India subject to Indian privacy laws and our practices.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or applicable laws. We will notify you of material changes by updating the "Last Updated" date and posting the revised policy on our website. Continued use of our website constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-white font-serif">13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="mt-6 p-6 bg-amber-400/5 border border-amber-400/20 rounded-lg">
              <p className="font-semibold text-white mb-3">Singh & Partners LLP</p>
              <p className="mb-2">📧 Email: <span className="text-amber-400">info@snp-legal.com</span></p>
              <p className="mb-2">📞 Phone: <span className="text-amber-400">7004480307</span></p>
              <p className="mb-2">📍 Head office: Above Aman Medical, Mohan Bigha, Dehri, Rohtas, Bihar, India</p>
              <p className="text-sm text-slate-400">Branch offices (BO): Ranchi; Dhanbad; Nagaon, Assam</p>
            </div>
          </section>
        </div>
      </article>

      {/* Footer Navigation */}
      <div className="border-t border-amber-400/10 bg-slate-950/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors font-semibold flex items-center gap-2">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <Link href="/terms" className="text-slate-400 hover:text-amber-400 transition-colors">
            Read Terms & Conditions →
          </Link>
        </div>
      </div>
    </div>
  );
}