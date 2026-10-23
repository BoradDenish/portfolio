import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { personalInfo } from '../data/personal';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/SocialIcons';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Prepare email client fallback with encoded parameters
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
      window.open(mailtoLink, '_blank');
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative scroll-mt-24 border-t border-slate-800/60"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Direct Communication"
          title="Get In Touch"
          description="Have an open backend role, a distributed systems challenge, or an IoT integration project? Let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-slate-800 bg-[#0c121e] p-6 space-y-5">
              <h3 className="text-lg font-bold text-white mb-2">
                Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase block">Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase block">Phone / WhatsApp</span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase block">Location</span>
                  <span className="text-sm text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="rounded-xl border border-slate-800 bg-[#0c121e] p-6">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                Professional Networks
              </h4>
              <div className="flex flex-col gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-sm text-slate-300 hover:text-white transition-all group"
                >
                  <span className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub (@BoradDenish)</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400">↗</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-sm text-slate-300 hover:text-white transition-all group"
                >
                  <span className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn (Denish Borad)</span>
                  </span>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-800 bg-[#0c121e] p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Prepared</h3>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you! Your default mail client has opened with your message. If it didn't open automatically, you can reach out directly at:
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-block text-cyan-400 font-mono text-sm underline hover:text-cyan-300"
                  >
                    {personalInfo.email}
                  </a>
                  <div className="pt-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-slate-800 focus:border-cyan-400'
                        }`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-slate-800 focus:border-cyan-400'
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="contact-email-error" className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Backend Developer Role / Consultation"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, architecture requirements, or role..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-colors resize-y ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-800 focus:border-cyan-400'
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    isLoading={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
