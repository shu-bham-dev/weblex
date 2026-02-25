'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import {
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Code2,
  ShoppingCart,
  Layers,
  Palette,
  RefreshCw,
  Settings,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Rocket,
  Target,
  Users,
  Star
} from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            className="text-2xl tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Weblex
            </span>
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>
          <Link href="/get-your-website">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-medium"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section - Full Viewport WOW */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-purple-950"></div>
          <motion.div 
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500 rounded-full blur-[150px] opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -100, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-32 h-32 border-2 border-purple-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Hero Content */}
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm backdrop-blur-sm">
              Premium Web Development
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight"
          >
            <span className="block mb-4">We Don't Build</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Websites.
            </span>
            <span className="block mt-4">We Build Digital</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Experiences.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Custom web development that converts visitors into customers. 
            Built for performance, designed for impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/get-your-website">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 group"
              >
                Get Your Website
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/20 backdrop-blur-sm px-10 py-5 rounded-full text-lg font-semibold hover:border-white/40 transition-colors"
            >
              See Our Work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section - Artistic Split */}
      <section id="about" className="relative py-32 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-cyan-400 text-sm tracking-wider uppercase mb-4 block">About Weblex</span>
              <h2 className="text-5xl md:text-6xl mb-6 leading-tight">
                Where <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Innovation</span> Meets <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Craftsmanship</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We don't follow templates. We create digital experiences that push boundaries, 
                drive results, and set new standards in web development.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Code2 className="w-6 h-6" />, text: "100% Custom Development" },
                  { icon: <Zap className="w-6 h-6" />, text: "Performance Optimization" },
                  { icon: <Layers className="w-6 h-6" />, text: "Scalable Architecture" },
                  { icon: <Target className="w-6 h-6" />, text: "Business-Focused Solutions" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 text-cyan-400"
                  >
                    {item.icon}
                    <span className="text-white">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3MTg3Njc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern workspace"
                  className="w-full h-full object-cover mix-blend-luminosity"
                />
              </div>
              <motion.div
                className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Creative Cards */}
      <section id="services" className="relative py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-cyan-400 text-sm tracking-wider uppercase mb-4 block">Services</span>
            <h2 className="text-5xl md:text-7xl mb-6">
              What We <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Create</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Custom Website Development",
                description: "Bespoke websites built from scratch, tailored to your brand and business goals.",
                gradient: "from-cyan-500 to-blue-600"
              },
              {
                icon: <ShoppingCart className="w-8 h-8" />,
                title: "E-Commerce Development",
                description: "High-converting online stores with seamless shopping experiences.",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "SaaS Application Development",
                description: "Scalable web applications designed for growth and performance.",
                gradient: "from-purple-500 to-pink-600"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "UI/UX Design",
                description: "Beautiful interfaces that users love, backed by data and psychology.",
                gradient: "from-pink-500 to-red-600"
              },
              {
                icon: <RefreshCw className="w-8 h-8" />,
                title: "Website Redesign",
                description: "Transform outdated websites into modern digital experiences.",
                gradient: "from-cyan-500 to-teal-600"
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Maintenance & Optimization",
                description: "Keep your website fast, secure, and performing at its best.",
                gradient: "from-violet-500 to-purple-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-4 transition-all">
                  <span className="text-sm">Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Weblex - Zigzag Layout */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-gray-900 via-black to-blue-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-cyan-400 text-sm tracking-wider uppercase mb-4 block">Why Choose Us</span>
            <h2 className="text-5xl md:text-7xl mb-6">
              The <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Weblex</span> Difference
            </h2>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                icon: <Code2 className="w-12 h-12" />,
                title: "100% Custom Code",
                description: "No templates, no shortcuts. Every line of code is written specifically for your project.",
                gradient: "from-cyan-500 to-blue-600"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Fast Loading Speed",
                description: "Optimized for performance with lightning-fast load times that keep users engaged.",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "SEO Optimized",
                description: "Built with search engines in mind to ensure maximum visibility and organic traffic.",
                gradient: "from-purple-500 to-pink-600"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Conversion-Focused",
                description: "Every element is designed to guide visitors towards taking action and becoming customers.",
                gradient: "from-pink-500 to-red-600"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Secure & Scalable",
                description: "Enterprise-grade security and architecture that grows with your business.",
                gradient: "from-cyan-500 to-teal-600"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Ongoing Support",
                description: "Dedicated support team ready to help you whenever you need assistance.",
                gradient: "from-violet-500 to-purple-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-8 rounded-3xl bg-gradient-to-br ${item.gradient}`}
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-4xl mb-4">{item.title}</h3>
                  <p className="text-xl text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Creative Grid */}
      <section id="portfolio" className="relative py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-cyan-400 text-sm tracking-wider uppercase mb-4 block">Portfolio</span>
            <h2 className="text-5xl md:text-7xl mb-6">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                category: "Online Store",
                image: "https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcxODUzODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                title: "SaaS Dashboard",
                category: "Web Application",
                image: "https://images.unsplash.com/photo-1649698145660-d30f91023b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzcxODQxNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                title: "Corporate Website",
                category: "Business Site",
                image: "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG9mZmljZSUyMHNwYWNlfGVufDF8fHx8MTc3MTg3Njc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                title: "Portfolio Site",
                category: "Creative Showcase",
                image: "https://images.unsplash.com/photo-1771013304699-dda30119b3bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwYWJzdHJhY3QlMjBibHVlfGVufDF8fHx8MTc3MTg3Njc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-cyan-400 text-sm mb-2 block">{project.category}</span>
                  <h3 className="text-3xl">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Artistic Timeline */}
      <section id="process" className="relative py-32 px-6 bg-gradient-to-br from-blue-950 via-black to-purple-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-cyan-400 text-sm tracking-wider uppercase mb-4 block">Our Process</span>
            <h2 className="text-5xl md:text-7xl mb-6">
              From Idea to <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Launch</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 hidden md:block"></div>
            
            {[
              {
                step: "01",
                title: "Strategy",
                description: "We dive deep into your business goals, target audience, and competitive landscape to craft a winning strategy.",
                icon: <Target className="w-8 h-8" />
              },
              {
                step: "02",
                title: "Design",
                description: "Our designers create stunning, user-centric interfaces that align with your brand and captivate your audience.",
                icon: <Palette className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Development",
                description: "Our developers bring designs to life with clean, efficient code and cutting-edge technologies.",
                icon: <Code2 className="w-8 h-8" />
              },
              {
                step: "04",
                title: "Testing",
                description: "Rigorous quality assurance ensures your website works flawlessly across all devices and browsers.",
                icon: <CheckCircle2 className="w-8 h-8" />
              },
              {
                step: "05",
                title: "Launch",
                description: "We deploy your website to production and monitor performance to ensure a smooth launch.",
                icon: <Rocket className="w-8 h-8" />
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {phase.step}
                  </span>
                  <h3 className="text-4xl mb-4 mt-2">{phase.title}</h3>
                  <p className="text-gray-400 text-lg">{phase.description}</p>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2"
                >
                  {phase.icon}
                </motion.div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-cyan-400 text-sm tracking-wider uppercase mb-4 block">Testimonials</span>
            <h2 className="text-5xl md:text-7xl mb-6">
              What Our Clients <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                text: "Weblex transformed our online presence. The website they built is not just beautiful, it's a conversion machine.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Founder, StyleHub",
                text: "Working with Weblex was a game-changer. They understood our vision and delivered beyond expectations.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Director, GrowthCo",
                text: "The attention to detail and commitment to excellence is unmatched. Our traffic has doubled since launch.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-6">{testimonial.text}</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[150px] opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[150px] opacity-20"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl mb-8">
              Ready to Build Something <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">Extraordinary?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's create a digital experience that sets you apart from the competition.
            </p>
            <Link href="/get-your-website">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-12 py-6 rounded-full text-xl font-semibold inline-flex items-center gap-3 group"
              >
                Get Your Website
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Weblex
                </span>
              </div>
              <p className="text-gray-400">
                Premium web development for ambitious businesses.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Web Development</li>
                <li className="hover:text-white transition-colors cursor-pointer">E-Commerce</li>
                <li className="hover:text-white transition-colors cursor-pointer">SaaS Development</li>
                <li className="hover:text-white transition-colors cursor-pointer">UI/UX Design</li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">About</li>
                <li className="hover:text-white transition-colors cursor-pointer">Portfolio</li>
                <li className="hover:text-white transition-colors cursor-pointer">Process</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Twitter</li>
                <li className="hover:text-white transition-colors cursor-pointer">LinkedIn</li>
                <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
                <li className="hover:text-white transition-colors cursor-pointer">Dribbble</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Weblex Web Development. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
