'use client';

import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, Zap, Shield, TrendingUp, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    budget: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-purple-950"></div>
        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[150px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Close Button */}
      <Link href="/">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6" />
        </motion.button>
      </Link>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm backdrop-blur-sm inline-block">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  Limited Slots Available
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
              >
                Launch Your Dream Website in{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  7 Days
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-400 mb-8"
              >
                Get a custom-built, high-converting website that elevates your brand 
                and drives real business results. No templates. No compromises.
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4 mb-8"
              >
                {[
                  { icon: <Zap className="w-5 h-5" />, text: "Lightning-fast performance" },
                  { icon: <TrendingUp className="w-5 h-5" />, text: "Conversion-optimized design" },
                  { icon: <Shield className="w-5 h-5" />, text: "100% custom coded" },
                  { icon: <CheckCircle2 className="w-5 h-5" />, text: "Mobile-first & responsive" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <span className="text-lg">{benefit.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-6 text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>30-Day Money Back</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Free Revisions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Lifetime Support</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative p-8 md:p-10 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-2xl -z-10"></div>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl mb-4">Thank You!</h3>
                    <p className="text-gray-400 text-lg">
                      We've received your request. Our team will reach out within 24 hours 
                      to discuss your project.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-3xl mb-2">Get Started Today</h3>
                    <p className="text-gray-400 mb-8">Fill out the form and we'll be in touch within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
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

                      <div>
                        <label htmlFor="businessType" className="block text-sm mb-2">Business Type *</label>
                        <select
                          id="businessType"
                          name="businessType"
                          required
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-gray-900">Select your business type</option>
                          <option value="ecommerce" className="bg-gray-900">E-Commerce</option>
                          <option value="saas" className="bg-gray-900">SaaS</option>
                          <option value="agency" className="bg-gray-900">Agency</option>
                          <option value="consulting" className="bg-gray-900">Consulting</option>
                          <option value="restaurant" className="bg-gray-900">Restaurant/Hospitality</option>
                          <option value="healthcare" className="bg-gray-900">Healthcare</option>
                          <option value="education" className="bg-gray-900">Education</option>
                          <option value="other" className="bg-gray-900">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm mb-2">Budget Range *</label>
                        <select
                          id="budget"
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-gray-900">Select your budget</option>
                          <option value="5k-10k" className="bg-gray-900">$5,000 - $10,000</option>
                          <option value="10k-25k" className="bg-gray-900">$10,000 - $25,000</option>
                          <option value="25k-50k" className="bg-gray-900">$25,000 - $50,000</option>
                          <option value="50k+" className="bg-gray-900">$50,000+</option>
                        </select>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-5 rounded-xl text-lg font-semibold flex items-center justify-center gap-3 group"
                      >
                        Get Your Website
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </form>
                  </>
                )}
              </div>

              {/* Social Proof */}
              {!submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="mt-8 text-center"
                >
                  <p className="text-sm text-gray-400 mb-4">Trusted by 100+ businesses worldwide</p>
                  <div className="flex justify-center items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10"></div>
                    ))}
                    <span className="text-sm text-gray-400 ml-2">+95 more</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
