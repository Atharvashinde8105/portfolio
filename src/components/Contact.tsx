import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_c8ipi36", // ✅ Your Service ID
        "template_zmqi1e9", // ✅ Your Template ID
        templateParams,
        "n1WrONaBhDhxREHKN" // ✅ Your Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email send error:", error);
      toast({
        title: "Failed to send message.",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ashinde12@stevens.edu",
      href: "mailto:ashinde12@stevens.edu",
      color: "text-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (646) 584-5923",
      href: "tel:+16465845923",
      color: "text-green-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "atharva-shinde-6765a5350",
      href: "https://linkedin.com/in/atharva-shinde-6765a5350",
      color: "text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Atharvashinde8105",
      href: "https://github.com/Atharvashinde8105",
      color: "text-gray-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Jersey, USA",
      href: null,
      color: "text-red-500",
    },
  ];

  const subjects = [
    "General Inquiry",
    "Job Opportunity",
    "Collaboration",
    "Consulting",
    "Speaking Engagement",
    "Other",
  ];

  return (
    <section id="contact" className="py-20"> 
    {/* //bg-secondary/30 */}
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss cybersecurity challenges, opportunities, or
            collaboration? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for a cybersecurity professional, have a
                project in mind, or just want to discuss the latest in
                cybersecurity, I'm always open to meaningful conversations.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={info.label}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className={`p-3 rounded-xl bg-secondary ${info.color} group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="w-5 h-5 text-current" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={
                              info.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Availability */}
              <div className="mt-8 p-4 bg-primary/10 rounded-xl border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">
                    Currently Available
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Open to full-time opportunities, internships, and freelance
                  projects in cybersecurity.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                    placeholder="Tell me about your project, opportunity, or what you'd like to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Response Time:</strong> I typically respond within
                  24-48 hours. For urgent matters, feel free to reach out via
                  phone or LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              Usually responds within a few hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
