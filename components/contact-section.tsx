"use client";

import { useState } from "react";
import { CheckCircle2, Send, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/tpslegacy@yahoo.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: formData.subject,
            _captcha: "false",
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const data = await response.json().catch(() => null);
        setErrorMessage(
          data?.message ||
            "There was an issue sending your inquiry. Please try again."
        );
      }
    } catch {
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      label: "GENERAL INQUIRIES",
      value: "tpslegacy@yahoo.com",
      icon: Mail,
    },
    {
      label: "DESIGN CONSULTATION",
      value: "ladtanish2005@gmail.com",
      icon: Mail,
    },
    {
      label: "DIRECT PHONE",
      value: "+91 8976301959 / +91 9920748812",
      icon: Phone,
    },
    {
      label: "SHOWROOM HOURS",
      value: "Mon – Sat: 10:00 – 20:00 IST",
      icon: Clock,
    },
  ];

  const socialIcons = [
    { label: "IG", name: "Instagram", href: "https://instagram.com/tapasa_2026" },
    { label: "LI", name: "LinkedIn", href: "https://linkedin.com" },
    { label: "PI", name: "Pinterest", href: "https://pinterest.com" },
    { label: "WA", name: "WhatsApp", href: "https://wa.me/918976301959" },
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-[#161616] py-20 scroll-mt-12 border-t border-neutral-800">
      <div className="relative font-light z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <h2 className="text-[#C9A84C] tracking-widest text-xs uppercase mb-3 font-medium">
            GET IN TOUCH
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-baseline gap-3 mb-4">
            <h3 className="text-4xl lg:text-5xl font-light text-white font-serif">
              Enhance your
            </h3>
            <p className="text-4xl lg:text-5xl font-light italic text-[#C9A84C] font-serif">
              Living Spaces
            </p>
          </div>
          <p className="text-gray-400 text-base max-w-2xl font-light leading-relaxed">
            Whether you are furnishing a single bespoke sanctuary or an entire private residence, our design atelier is ready to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Form Section */}
          <div className="bg-[#1c1c1c] p-8 md:p-10 border border-neutral-800 rounded-sm shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-500">
                <CheckCircle2 className="mx-auto text-emerald-400" size={54} />
                <h4 className="text-2xl font-serif text-white">Inquiry Received</h4>
                <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to TAPASA. A senior design concierge will review your vision and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 bg-[#C9A84C] text-black text-xs uppercase tracking-widest font-semibold hover:bg-amber-400 transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <div>
                  <label className="text-[#C9A84C] text-xs tracking-widest block mb-2 font-medium">
                    NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Arjun Mehta"
                    className="w-full bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 py-3 px-4 focus:outline-none focus:border-[#C9A84C] transition text-sm rounded-none"
                  />
                </div>

                <div>
                  <label className="text-[#C9A84C] text-xs tracking-widest block mb-2 font-medium">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="arjun@example.com"
                    className="w-full bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 py-3 px-4 focus:outline-none focus:border-[#C9A84C] transition text-sm rounded-none"
                  />
                </div>

                <div>
                  <label className="text-[#C9A84C] text-xs tracking-widest block mb-2 font-medium">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Custom furniture / Living room curation"
                    className="w-full bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 py-3 px-4 focus:outline-none focus:border-[#C9A84C] transition text-sm rounded-none"
                  />
                </div>

                <div>
                  <label className="text-[#C9A84C] text-xs tracking-widest block mb-2 font-medium">
                    MESSAGE / PROJECT DETAILS
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your spaces, preferred timbers, or timeline..."
                    rows={4}
                    className="w-full bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 py-3 px-4 focus:outline-none focus:border-[#C9A84C] transition text-sm resize-none rounded-none"
                  />
                </div>

                {errorMessage && (
                  <p className="text-rose-400 text-xs tracking-wide">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#B89A40] text-neutral-950 font-semibold tracking-widest py-4 px-10 text-xs uppercase transition duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "SENDING INQUIRY..."
                  ) : (
                    <>
                      <span>SEND INQUIRY</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8 lg:pl-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="border-l-2 border-[#C9A84C]/50 pl-4 py-1">
                    <p className="text-[#C9A84C] text-xs tracking-widest mb-1 uppercase font-medium flex items-center gap-2">
                      <IconComponent size={14} />
                      {item.label}
                    </p>
                    <p className="text-white text-base font-light">{item.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-neutral-800">
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-4 font-medium">
                FOLLOW OUR ARTISANAL JOURNEY
              </p>
              <div className="flex gap-4">
                {socialIcons.map((icon) => (
                  <a
                    key={icon.label}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={icon.name}
                    className="w-12 h-12 border border-neutral-700 flex items-center justify-center text-gray-300 hover:text-black hover:bg-[#C9A84C] hover:border-[#C9A84C] transition duration-300 text-xs tracking-widest font-semibold"
                  >
                    {icon.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-neutral-900/60 border border-neutral-800 text-xs text-gray-400 space-y-2">
              <p className="text-white font-medium">Custom Architectural Commissions:</p>
              <p className="leading-relaxed">
                For commercial hospitality projects, boutique hotels, or luxury residential developments, please specify your project timeline in the message field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
