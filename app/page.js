'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const LawFirmLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const contactEmail = 'info@snp-legal.com';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - integrate with your backend
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setFormOpen(false);
  };

  const services = [
    { icon: '⚖️', title: 'Taxation Law', desc: 'Expert GST & Income Tax guidance for individuals and corporations' },
    { icon: '💼', title: 'Commercial Disputes', desc: 'Strategic resolution of complex business conflicts' },
    { icon: '💰', title: 'Recovery Suits', desc: 'Efficient debt recovery and financial claim settlements' },
    { icon: '🏷️', title: 'Trademark & IPR', desc: 'Intellectual property protection and enforcement' },
    { icon: '📜', title: 'Constitutional Writs', desc: 'High Court writs and constitutional remedies' },
  ];

  const claimsServices = [
    { icon: '🚗', title: 'Motor Vehicle Accident Claims', desc: 'Representation and documentation for accident-related compensation and disputes' },
    { icon: '📋', title: 'Insurance Claims', desc: 'Policy disputes, repudiation, and settlement support across insurers' },
    { icon: '🤝', title: 'Other Claims', desc: 'Contractual, consumer, and miscellaneous civil claims tailored to your matter' },
  ];

  /** SEO-oriented practice areas: local (Bihar / Dehri–Rohtas) + widely searched India-wide terms */
  const otherServicesLocalKeywords = [
    'Advocate in Dehri-on-Sone & Rohtas',
    'Lawyer near Sasaram & Bihar Sharif',
    'Patna High Court lawyer & representation',
    'District court civil & criminal matters Rohtas',
    'GST lawyer Bihar & tax appeals',
    'Property & land dispute lawyer Dehri-on-Sone',
    'Recovery suit & money decree execution Bihar',
    'Family court & matrimonial lawyer near Rohtas',
    'Legal notice drafting in Hindi & English',
    'Empanelled advocates for corporate & regulatory matters',
    'Constitutional writs & public interest litigation support',
    'Commercial dispute lawyer Patna & Delhi circuits',
    'Trademark opposition & IPR enforcement Bihar',
    'Income tax scrutiny & assessment appeals',
    'NI Act Section 138 cheque bounce cases',
  ];

  const otherServicesIndiaKeywords = [
    'Divorce & mutual consent legal process',
    'Anticipatory bail & regular bail lawyer',
    'Consumer forum & consumer court complaints',
    'RERA & real estate project disputes',
    'Arbitration, mediation & ADR lawyer',
    'Startup incorporation & compliance India',
    'Employment & labour law disputes',
    'Will, succession & estate planning',
    'NCLT insolvency & corporate restructuring',
    'Cyber crime FIR & online fraud defence',
    'Court marriage & registration documentation',
    'Customs, excise & indirect tax litigation',
    'Power of attorney & affidavit services',
    'NDA, MSAs & commercial contract review',
    'Supreme Court SLP & special leave petitions',
  ];

  /** Visible marquee labels only */
  const marqueeVisibleTerms = [
    'Guidance & advisory',
    'Litigation',
    'Corporate matters',
    'Criminal cases',
    'Civil cases',
    'Property matters',
    'Family matters',
    'Divorce',
    'Arbitration',
    'Notice drafting',
    'Contract drafting',
    'Documentation',
    'Due diligence',
    'Trademark',
    'Copyright',
    'Patent',
    'Compliance',
    'Consultancy',
    'Court representation',
    'Bail',
  ];

  const marqueeLegacySeoText = [
    'Bihar & local searches (Dehri, Rohtas, Patna High Court).',
    'Widely searched across India.',
    ...otherServicesLocalKeywords,
    ...otherServicesIndiaKeywords,
  ].join(' ');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg border-b border-amber-400/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center min-h-[5.5rem] md:min-h-[6.25rem] py-3">
            {/* Logo + firm name */}
            <a href="#home" className="flex items-center gap-3 sm:gap-4 flex-shrink-0 group cursor-pointer text-left">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
                <Image
                  src="/lawlogo.jpeg"
                  alt="Singh & Partners LLP"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="min-w-0">
                <p className="text-white font-serif font-bold text-base sm:text-lg md:text-3xl leading-tight tracking-tight">
                  Singh & Partners LLP
                </p>
                <p className="text-amber-400/90 text-[11px] sm:text-xs md:text-xl font-medium tracking-wide mt-0.5 md:mt-1">
                  Advocates & Solicitors
                </p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-3 py-2 text-lg font-bold text-slate-300 hover:text-amber-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </div>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setFormOpen(true)}
                className="hidden sm:inline-block px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-105"
              >
                Book Appointment
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-slate-300 hover:text-amber-400 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-amber-400/10 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
              {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-2 text-slate-300 hover:text-amber-400 hover:bg-amber-400/5 rounded transition-all duration-300">
                  {item}
                </a>
              ))}
              <button onClick={() => setFormOpen(true)} className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-semibold rounded-lg">
                Book Appointment
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-96 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-96 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full backdrop-blur-sm">
            <p className="text-amber-400 text-sm font-semibold tracking-widest">ADVOCATES & SOLICITORS</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-serif tracking-tight">
            Legal Excellence <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">Delivered with Integrity</span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Singh & Partners LLP provides trusted legal solutions for taxation, commercial disputes, intellectual property, and high court litigation with unwavering commitment to excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setFormOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold rounded-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Book a service consultation
            </button>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-amber-400/50 text-amber-400 font-bold rounded-lg hover:bg-amber-400/10 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full" />
              Empanelled Lawyers
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full" />
              High Court & Supreme Court Experience
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full" />
              Since 2024
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-amber-400/50" size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <Image
                src="/Ranjot_Singh_and_Associates_office_image.webp"
                alt="Singh & Partners LLP office"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 border-2 border-amber-400/30 rounded-2xl" />
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div>
                <p className="text-amber-400 text-sm font-bold tracking-widest mb-4">WHO WE ARE</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
                  Trusted Legal Partners Since 2024
                </h2>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed">
                Singh & Partners LLP (LLPIN: ACU-4874) is a legal practice with its head office in Dehri, Rohtas, Bihar. We focus on taxation law, commercial disputes, intellectual property, and court representation, with an emphasis on clear communication and practical outcomes.
              </p>

              <p className="text-slate-400 leading-relaxed">
                The firm works with clients across jurisdictions and coordinates matters before courts and forums as appropriate for each case.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-amber-400/20">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-amber-400">7+</p>
                  <p className="text-slate-400 text-sm">Empanelled professionals</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-amber-400">250+</p>
                  <p className="text-slate-400 text-sm">Cases involved</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-amber-400 leading-tight">Since 2024</p>
                  <p className="text-slate-400 text-sm mt-1">Established</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-amber-400">100%</p>
                  <p className="text-slate-400 text-sm">Client satisfaction</p>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-3">
                {['Honourable Supreme Court', 'Jharkhand High Court', 'Bihar High Court', 'Tribunals & other departments', 'Corporate Law'].map((badge) => (
                  <span key={badge} className="px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder — brief, factual */}
      <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-y border-amber-400/10 bg-slate-950/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-white font-serif mb-4">Founder</h2>
          <p className="text-slate-300 leading-relaxed">
            Singh & Partners LLP was founded by <span className="text-white font-medium">Ranjot Singh</span>. The firm is built around his leadership and experience in litigation and advisory work.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-amber-400/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-bold tracking-widest mb-4">EXPERTISE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
              Comprehensive Legal Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We assist clients before the Honourable Supreme Court, Jharkhand High Court, Bihar High Court, tribunals, and other departments, alongside specialized work in taxation, commercial law, intellectual property, and constitutional remedies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-xl border border-amber-400/10 bg-gradient-to-br from-amber-400/5 to-transparent hover:border-amber-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer transform hover:-translate-y-2"
              >
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/0 via-amber-400/0 to-amber-400/0 group-hover:from-amber-400/20 group-hover:via-amber-400/10 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 origin-left">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Claims */}
          <div id="claims" className="mt-20 scroll-mt-28">
            <div className="text-center mb-12">
              <p className="text-amber-400 text-sm font-bold tracking-widest mb-4">CLAIMS</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white font-serif">Claims</h3>
              <p className="text-slate-400 max-w-2xl mx-auto mt-4">
                Support for accident, insurance, and related civil claims
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {claimsServices.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-8 rounded-xl border border-amber-400/10 bg-gradient-to-br from-amber-400/5 to-transparent hover:border-amber-400/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3 font-serif">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Bar */}
          <div className="mt-16 p-8 rounded-xl border border-amber-400/30 bg-gradient-to-r from-amber-400/10 to-transparent">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white font-serif mb-2">Need Legal Assistance?</h3>
                <p className="text-slate-300">Book a service consultation with our advocates</p>
              </div>
              <button
                onClick={() => setFormOpen(true)}
                className="px-8 py-3 bg-amber-400 text-slate-950 font-bold rounded-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Book a service consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Other Services — local + pan-India search terms (marquee for crawlable on-page text) */}
      <section
        id="other-services"
        aria-label="Our other legal services and practice areas"
        className="relative py-16 md:py-24 px-0 sm:px-6 lg:px-8 overflow-hidden border-y border-amber-400/10 bg-slate-950/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <p className="text-amber-400 text-sm font-bold tracking-widest mb-4">PRACTICE REACH</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
            Our Other Services
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Clients find us for taxation, commercial disputes, and high court work—and we regularly advise on the kinds of matters people search for across Bihar and India. The lines below reflect common legal needs we help with; contact us to discuss your specific case.
          </p>
        </div>

        <div className="relative space-y-4 rounded-xl overflow-hidden">
          {/* Legacy SEO copy + old section labels: same fg/bg so it blends; remains in HTML */}
          <div
            className="pointer-events-none select-none absolute inset-0 z-0 bg-slate-950 px-4 py-6 text-slate-950 text-sm leading-relaxed"
            aria-hidden="true"
          >
            {marqueeLegacySeoText}
          </div>

          <div className="relative z-10 space-y-4">
            <div className="marquee-mask relative">
              <div className="marquee-track flex w-max gap-x-10 items-center py-3 px-4 text-slate-300 text-sm md:text-base">
                {[...marqueeVisibleTerms, ...marqueeVisibleTerms].map((label, i) => (
                  <span key={`vis-a-${i}`} className="inline-flex items-center shrink-0">
                    <span className="text-amber-400/90 mr-2" aria-hidden>
                      ✦
                    </span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="marquee-mask relative">
              <div className="marquee-track marquee-track-reverse flex w-max gap-x-10 items-center py-3 px-4 text-slate-300 text-sm md:text-base">
                {[...marqueeVisibleTerms, ...marqueeVisibleTerms].map((label, i) => (
                  <span key={`vis-b-${i}`} className="inline-flex items-center shrink-0">
                    <span className="text-amber-400/90 mr-2" aria-hidden>
                      ✦
                    </span>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-400/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Cards */}
            <div className="group p-8 rounded-xl border border-amber-400/20 hover:border-amber-400/50 bg-gradient-to-br from-amber-400/5 to-transparent hover:bg-amber-400/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-amber-400/20">
                  <Phone size={24} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Call Us</p>
                  <p className="text-white font-semibold">7004480307</p>
                </div>
              </div>
            </div>

            <div className="group p-8 rounded-xl border border-amber-400/20 hover:border-amber-400/50 bg-gradient-to-br from-amber-400/5 to-transparent hover:bg-amber-400/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-amber-400/20">
                  <Mail size={24} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white font-semibold text-sm break-all">{contactEmail}</p>
                </div>
              </div>
            </div>

            <div className="group p-8 rounded-xl border border-amber-400/20 hover:border-amber-400/50 bg-gradient-to-br from-amber-400/5 to-transparent hover:bg-amber-400/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-amber-400/20">
                  <MapPin size={24} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Head office</p>
                  <p className="text-white font-semibold text-sm">Dehri, Rohtas, Bihar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Hours */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden border-2 border-amber-400/20 h-96">
              <iframe
                title="Singh & Partners LLP — Dehri head office location"
                src="https://maps.google.com/maps?q=Above+Aman+Medical%2C+Mohan+Bigha%2C+Dehri%2C+Rohtas%2C+Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

<div className="space-y-10 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-xl border border-amber-400/20">

  {/* Office Hours */}
  <div>
    <h3 className="text-2xl font-bold text-white font-serif mb-5 tracking-wide">
      Office Hours
    </h3>

    <div className="space-y-4 text-sm">
      <div className="flex justify-between items-center bg-slate-800/60 px-4 py-3 rounded-lg">
        <span className="text-slate-300">Monday - Saturday</span>
        <span className="text-amber-400 font-semibold">10:30 AM - 7:30 PM</span>
      </div>

      <div className="flex justify-between items-center bg-slate-800/60 px-4 py-3 rounded-lg">
        <span className="text-slate-300">Sunday</span>
        <span className="text-slate-500">Closed</span>
      </div>

      <p className="text-xs text-slate-400 pt-4 border-t border-amber-400/20 leading-relaxed">
        For urgent matters, please call{" "}
        <span className="text-amber-400 font-semibold">+91 7004480307</span> for emergency consultation availability.
      </p>
    </div>
  </div>

  {/* Address Section */}
  <div>
    <h3 className="text-2xl font-bold text-white font-serif mb-5 tracking-wide">
      Address
    </h3>

    {/* Head Office */}
    <div className="mb-6 p-4 rounded-xl bg-slate-800/50 border border-amber-400/10">
      <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
        Head Office — Dehri
      </p>
      <p className="text-slate-300 leading-relaxed text-sm">
        Above Aman Medical, Mohan Bigha<br />
        Dehri, Rohtas, Bihar, India
      </p>
    </div>

    {/* Branch Offices */}
    <div>
      <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
        Branch Offices
      </p>

      <div className="grid gap-4 sm:grid-cols-2">

        <div className="p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition border border-slate-700">
          <p className="text-white font-semibold">Ranchi</p>
          <p className="text-slate-400 text-sm">+91 8210713303</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition border border-slate-700">
          <p className="text-white font-semibold">Dhanbad</p>
          <p className="text-slate-400 text-sm">+91 7808221442</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition border border-slate-700 sm:col-span-2">
          <p className="text-white font-semibold">Nagaon, Assam</p>
          <p className="text-slate-400 text-sm">+91 8804900965</p>
        </div>

      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Blog/Articles Teaser */}
      <section id="blog" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm font-bold tracking-widest mb-4">INSIGHTS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
              Legal Updates & Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'GST Compliance Guide 2024', category: 'Taxation', date: 'Mar 2025' },
              { title: 'Trademark Registration Process', category: 'IPR', date: 'Mar 2025' },
              { title: 'High Court Litigation Strategies', category: 'Litigation', date: 'Mar 2025' },
            ].map((article, idx) => (
              <div key={idx} className="group p-6 rounded-xl border border-amber-400/10 hover:border-amber-400/30 bg-gradient-to-br from-amber-400/5 to-transparent hover:bg-amber-400/10 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-amber-400/20 text-amber-400 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="text-slate-400 text-xs">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm mt-3">Read detailed insights on recent developments...</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#blog" className="inline-block px-6 py-3 border-2 border-amber-400 text-amber-400 font-bold rounded-lg hover:bg-amber-400 hover:text-slate-950 transition-all duration-300">
              View All Articles
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-amber-400/10 bg-slate-950/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Singh & Partners LLP</h4>
              <p className="text-slate-400 text-sm">Advocates & Solicitors - Trusted Legal Solutions</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Taxation Law</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Commercial Disputes</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">IPR & Trademarks</a></li>
                <li><a href="#claims" className="hover:text-amber-400 transition-colors">Claims</a></li>
                <li><a href="#other-services" className="hover:text-amber-400 transition-colors">Our Other Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-amber-400 transition-colors">Terms & Conditions</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <p className="text-slate-400 text-sm mb-3">📞 7004480307</p>
              <p className="text-slate-400 text-sm break-all">📧 {contactEmail}</p>
            </div>
          </div>

          <div className="border-t border-amber-400/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>© 2024 Singh & Partners LLP. All rights reserved. | LLPIN: ACU-4874</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Appointment Form Modal */}
      {formOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-slate-950 border-2 border-amber-400/30 rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in scale-in duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white font-serif">Book Appointment</h2>
              <button
                onClick={() => setFormOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-amber-400/20 rounded-lg text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-amber-400/20 rounded-lg text-white focus:border-amber-400 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-amber-400/20 rounded-lg text-white focus:border-amber-400 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Inquiry Details</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-amber-400/20 rounded-lg text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none transition-colors duration-300 resize-none h-24"
                  placeholder="Describe your legal matter..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-105 mt-6"
              >
                Send Appointment Request
              </button>

              <p className="text-xs text-slate-400 text-center pt-4">
                We'll contact you within 24 hours to confirm your appointment.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917004480307"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 p-4 bg-green-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
      >
        <MessageCircle size={24} />
      </a>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slide-in-from-top-2 {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-in {
          animation: fade-in 0.3s ease-out;
        }

        .fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .slide-in-from-top-2 {
          animation: slide-in-from-top-2 0.3s ease-out;
        }

        .scale-in {
          animation: scale-in 0.3s ease-out;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: #fbbf24;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #f59e0b;
        }

        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .marquee-mask {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }

        .marquee-track {
          animation: marquee-scroll 70s linear infinite;
        }

        .marquee-track-reverse {
          animation: marquee-scroll 85s linear infinite reverse;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track,
          .marquee-track-reverse {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 100%;
            width: 100% !important;
            row-gap: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LawFirmLanding;
