'use client';

import { motion } from 'motion/react';
import {
  CheckCircle2,
  Sparkles,
  Zap,
  Clock,
  Shield,
  Star,
  TrendingUp,
  Users,
  Phone,
  AlertCircle,
  Award,
  Globe,
  Mail,
  MessageCircle,
  Search,
  Share2,
  Gift
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function OfferLandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    businessType: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  // Countdown Timer - 24 hours from now
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gray-950 text-white overflow-hidden">
      {/* Sticky Mobile CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-orange-600 to-red-600 shadow-2xl md:hidden"
      >
        <a href="#form">
          <button className="w-full py-4 bg-white text-orange-600 rounded-xl font-bold text-lg">
            Book My Website for ₹4,999
          </button>
        </a>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-orange-950/30 to-gray-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[150px] opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Limited Time Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 px-6 py-3 bg-red-600 rounded-full text-sm font-semibold"
          >
            <AlertCircle className="w-5 h-5" />
            LIMITED TIME OFFER - ONLY 12 SLOTS LEFT
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          >
            Launch Your Business Online in{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              7 Days
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">
              – Just{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                ₹4,999
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            Limited-time offer for serious business owners who want real growth.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="text-orange-400 text-sm mb-3 font-semibold tracking-wider">
              ⏰ OFFER CLOSES IN:
            </div>
            <div className="flex justify-center gap-3 md:gap-6">
              {[
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                    <div className="text-3xl md:text-5xl font-bold">
                      {String(item.value).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <a href="#form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-600 px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-orange-500/50 transition-shadow"
              >
                Claim This Offer Now
              </motion.button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Done-For-You Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Limited Slots Available</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Form (Formspree) */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-orange-950/20 to-red-950/20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950 border border-orange-500/30 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-center">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Quick Inquiry
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-8">
              Have questions? Send us a quick message and we'll get back to you within 24 hours.
            </p>
            
            <form
              action="https://formspree.io/f/mpqjkrav"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="quick-name" className="block text-sm mb-2 text-gray-300">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="quick-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors text-white text-lg"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="quick-phone" className="block text-sm mb-2 text-gray-300">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="quick-phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors text-white text-lg"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="quick-city" className="block text-sm mb-2 text-gray-300">
                  City *
                </label>
                <input
                  type="text"
                  id="quick-city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors text-white text-lg"
                  placeholder="Your city"
                />
              </div>

              <div>
                <label htmlFor="quick-businessType" className="block text-sm mb-2 text-gray-300">
                  Business Type *
                </label>
                <select
                  id="quick-businessType"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors text-white text-lg appearance-none cursor-pointer"
                >
                  <option value="" className="bg-gray-900">Select your business type</option>
                  <option value="retail" className="bg-gray-900">Retail Shop</option>
                  <option value="medical" className="bg-gray-900">Doctor/Clinic</option>
                  <option value="consultant" className="bg-gray-900">Consultant</option>
                  <option value="realestate" className="bg-gray-900">Real Estate</option>
                  <option value="coach" className="bg-gray-900">Coach/Trainer</option>
                  <option value="restaurant" className="bg-gray-900">Restaurant/Cafe</option>
                  <option value="startup" className="bg-gray-900">Startup</option>
                  <option value="other" className="bg-gray-900">Other</option>
                </select>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 rounded-xl text-lg font-bold shadow-xl hover:shadow-orange-500/50 transition-shadow"
              >
                Send Inquiry
              </motion.button>
              
              <p className="text-center text-sm text-gray-500">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="relative py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl mb-4">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Succeed Online
              </span>
            </h2>
            <p className="text-xl text-gray-400">Worth ₹25,000+ — Today Only ₹4,999</p>
          </motion.div>

          {/* Price Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-r from-orange-600/10 to-red-600/10 border border-orange-500/30"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <div className="text-sm text-gray-400 mb-1">Regular Website Cost:</div>
                <div className="text-3xl line-through text-gray-500">₹15,000 – ₹30,000</div>
              </div>
              <div className="text-4xl text-orange-400">→</div>
              <div className="text-center md:text-right">
                <div className="text-sm text-orange-400 mb-1">Today's Price:</div>
                <div className="text-4xl md:text-5xl font-bold text-orange-400">₹4,999</div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Free Domain (1 Year)",
                description: "Professional .com or .in domain included",
                free: true,
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Free Maintenance",
                description: "Keep your site running smoothly, always",
                free: true,
                gradient: "from-red-500 to-pink-500"
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "Basic SEO Setup",
                description: "Get found on Google by local customers",
                gradient: "from-orange-500 to-yellow-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Google My Business Setup",
                description: "Appear in local Google searches & maps",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "WhatsApp Chat Integration",
                description: "Let customers reach you instantly",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Business Email Setup",
                description: "Professional email: you@yourbusiness.com",
                gradient: "from-purple-500 to-violet-500"
              },
              {
                icon: <Share2 className="w-8 h-8" />,
                title: "Social Media Integration",
                description: "Connect all your social media profiles",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast Loading Speed",
                description: "Optimized for mobile and desktop",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: "And Much More",
                description: "Contact form, image gallery, testimonials",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-2xl bg-gray-800 border border-gray-700 hover:border-orange-500/50 transition-all"
              >
                {benefit.free && (
                  <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    FREE
                  </div>
                )}
                
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-4`}>
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Offer Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-950 via-orange-950/20 to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-8">
              Why Your Business{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Needs This Now
              </span>
            </h2>
            
            <div className="space-y-6 text-left text-lg text-gray-300">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white">Most businesses are losing customers daily.</strong> Every day without a website, potential customers are going to your competitors instead.
                </span>
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-3"
              >
                <Search className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white">Customers search online before buying.</strong> 97% of people search online to find local businesses. Are they finding you?
                </span>
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <TrendingUp className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white">If you don't have a website, you're invisible.</strong> In 2026, a business without a website loses trust and credibility instantly.
                </span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="relative py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Perfect For
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Local Shops",
              "Doctors",
              "Consultants",
              "Real Estate Agents",
              "Coaches",
              "Startups",
              "Restaurants",
              "Small Business Owners"
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-orange-600/10 to-red-600/10 border border-orange-500/30 text-center font-semibold"
              >
                {type}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="font-bold">100+ Businesses Served</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Trusted by Business Owners{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Across India
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Rajesh Kumar",
                business: "Kumar Electronics, Delhi",
                text: "My shop sales increased by 40% after getting the website. Customers now find me on Google easily!",
                rating: 5
              },
              {
                name: "Dr. Priya Sharma",
                business: "Dental Clinic, Mumbai",
                text: "Professional website at such an affordable price. Now patients can book appointments online.",
                rating: 5
              },
              {
                name: "Amit Patel",
                business: "Real Estate, Ahmedabad",
                text: "Best investment for my business. The WhatsApp integration brings me 10+ inquiries daily!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-900 border border-gray-800"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.business}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 5 Star Rating Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-orange-400 text-orange-400" />
              ))}
            </div>
            <p className="text-2xl font-semibold text-gray-300">
              Rated 5/5 by 100+ Happy Customers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-red-950/30 via-gray-950 to-orange-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 rounded-full mb-8 text-lg font-bold">
              <Clock className="w-6 h-6" />
              TIME IS RUNNING OUT
            </div>

            <h2 className="text-4xl md:text-5xl mb-8">
              Only{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                12 Slots Left
              </span>
              {' '}in This Offer Window
            </h2>

            {/* Countdown Timer Repeat */}
            <div className="mb-8">
              <div className="flex justify-center gap-4 md:gap-6">
                {[
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                      <div className="text-3xl md:text-5xl font-bold">
                        {String(item.value).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 mt-2">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-xl text-gray-300">
              <p className="flex items-center justify-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-500" />
                <span>We can only take limited projects to maintain quality</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <AlertCircle className="w-6 h-6 text-orange-500" />
                <span>Once slots are filled, the price returns to ₹15,000</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Capture Form Section */}
      <section id="form" className="relative py-20 px-4 bg-gray-950">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="text-center p-12 bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-3xl">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl md:text-4xl mb-4">Slot Reserved Successfully! 🎉</h3>
                <p className="text-xl text-gray-300 mb-4">
                  Thank you for booking! We'll call you within 30 minutes to discuss your website.
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 rounded-full">
                  <Phone className="w-5 h-5" />
                  <span>Expect our call soon</span>
                </div>
              </div>
            ) : (
              <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-orange-600/10 to-red-600/10 border-2 border-orange-500">
                <h2 className="text-3xl md:text-4xl mb-4 text-center">
                  Book Your Website for{' '}
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    ₹4,999
                  </span>
                </h2>
                <p className="text-center text-gray-400 mb-8">
                  Fill the form below to reserve your slot
                </p>

                <form
                  action="https://formspree.io/f/mpqjkrav"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors text-white text-lg"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2 text-gray-300">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors text-white text-lg"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm mb-2 text-gray-300">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors text-white text-lg"
                      placeholder="Your city"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessType" className="block text-sm mb-2 text-gray-300">
                      Business Type *
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      required
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors text-white text-lg appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-gray-900">Select your business type</option>
                      <option value="retail" className="bg-gray-900">Retail Shop</option>
                      <option value="medical" className="bg-gray-900">Doctor/Clinic</option>
                      <option value="consultant" className="bg-gray-900">Consultant</option>
                      <option value="realestate" className="bg-gray-900">Real Estate</option>
                      <option value="coach" className="bg-gray-900">Coach/Trainer</option>
                      <option value="restaurant" className="bg-gray-900">Restaurant/Cafe</option>
                      <option value="startup" className="bg-gray-900">Startup</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-5 rounded-xl text-xl font-bold shadow-2xl hover:shadow-orange-500/50 transition-shadow"
                  >
                    Book My Website for ₹4,999
                  </motion.button>

                  <p className="text-center text-sm text-gray-400 flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    We'll call you within 30 minutes
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-orange-950/30 via-red-950/30 to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
              Your Competitors Are{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Already Online.
              </span>
              <br />
              Are You?
            </h2>

            {/* Final Countdown */}
            <div className="mb-8">
              <div className="flex justify-center gap-3 md:gap-6">
                {[
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-4 md:p-6 min-w-[70px] md:min-w-[90px]">
                      <div className="text-2xl md:text-4xl font-bold">
                        {String(item.value).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 mt-2">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <a href="#form">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(249, 115, 22, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-600 px-12 py-6 rounded-full text-2xl font-bold shadow-2xl"
              >
                Secure My Spot Now
              </motion.button>
            </a>

            <p className="mt-8 text-gray-400">
              Don't miss out on this limited-time opportunity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2026 Weblex Web Development. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
