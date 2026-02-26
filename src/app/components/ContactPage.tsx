'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Twitter,
  Linkedin,
  Instagram,
  Github
} from 'lucide-react';
import { useState } from 'react';
import GlobalHeader from './GlobalHeader';
import GlobalFooter from './GlobalFooter';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Global Header */}
      <GlobalHeader />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-blue-950"></div>
        <motion.div 
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[150px] opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm backdrop-blur-sm inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Let's Talk
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
          >
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
          >
            Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl mb-6">
                  Get in{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Touch
                  </span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  We typically respond within 24 hours. For urgent inquiries, please call us directly.
                </p>
              </motion.div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    title: "Email Us",
                    content: "hello@weblex.xyz",
                    link: "mailto:hello@weblex.xyz",
                    gradient: "from-cyan-500 to-blue-600"
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: "Call Us",
                    content: "+91 70075 92373",
                    link: "tel:+917007592373",
                    gradient: "from-purple-500 to-pink-600"
                  },
                  {
                    icon: <MessageCircle className="w-6 h-6" />,
                    title: "WhatsApp",
                    content: "+91 70075 92373",
                    link: "https://wa.me/917007592373",
                    gradient: "from-green-500 to-emerald-600"
                  },
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: "Visit Us",
                    content: "New Delhi, India",
                    link: null,
                    gradient: "from-orange-500 to-red-600"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/30 transition-all group cursor-pointer"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{item.title}</div>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-lg font-medium group-hover:text-cyan-400 transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <div className="text-lg font-medium">{item.content}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="pt-6"
              >
                <h3 className="text-sm text-gray-400 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <Twitter className="w-5 h-5" />, link: "#" },
                    { icon: <Linkedin className="w-5 h-5" />, link: "#" },
                    { icon: <Instagram className="w-5 h-5" />, link: "#" },
                    { icon: <Github className="w-5 h-5" />, link: "#" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 flex items-center justify-center transition-all"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative p-8 md:p-10 rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-2xl -z-10"></div>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl md:text-4xl mb-4">Thank You!</h3>
                    <p className="text-gray-400 text-lg max-w-md mx-auto">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-3xl mb-2">Send Us a Message</h3>
                    <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you soon.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm mb-2">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors"
                            placeholder="John Smith"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm mb-2">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm mb-2">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors"
                            placeholder="+91 98765 43210"
                          />
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-sm mb-2">Company Name</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="service" className="block text-sm mb-2">Service Interested In *</label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-gray-900">Select a service</option>
                            <option value="web-development" className="bg-gray-900">Custom Website Development</option>
                            <option value="ecommerce" className="bg-gray-900">E-Commerce Development</option>
                            <option value="saas" className="bg-gray-900">SaaS Application</option>
                            <option value="uiux" className="bg-gray-900">UI/UX Design</option>
                            <option value="redesign" className="bg-gray-900">Website Redesign</option>
                            <option value="maintenance" className="bg-gray-900">Maintenance & Support</option>
                            <option value="other" className="bg-gray-900">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="budget" className="block text-sm mb-2">Project Budget</label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-gray-900">Select budget range</option>
                            <option value="5k-10k" className="bg-gray-900">$5,000 - $10,000</option>
                            <option value="10k-25k" className="bg-gray-900">$10,000 - $25,000</option>
                            <option value="25k-50k" className="bg-gray-900">$25,000 - $50,000</option>
                            <option value="50k-100k" className="bg-gray-900">$50,000 - $100,000</option>
                            <option value="100k+" className="bg-gray-900">$100,000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm mb-2">Project Details *</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-5 rounded-xl text-lg font-semibold flex items-center justify-center gap-3 group"
                      >
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to our Privacy Policy and Terms of Service.
                      </p>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="aspect-[21/9] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                <h3 className="text-2xl mb-2">New Delhi, India</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Common{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Most projects take 6-12 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation."
              },
              {
                q: "Do you offer ongoing support after launch?",
                a: "Yes! We provide maintenance packages and ongoing support to ensure your website continues to perform at its best."
              },
              {
                q: "What is your pricing structure?",
                a: "Our pricing is project-based and depends on your specific requirements. We'll provide a detailed quote after understanding your needs."
              },
              {
                q: "Can you help with content and copywriting?",
                a: "Absolutely! We can help with content strategy, copywriting, and all aspects of your website's content."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
              >
                <h3 className="text-xl mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <GlobalFooter />
    </div>
  );
}
