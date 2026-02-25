'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import {
  ArrowRight,
  ExternalLink,
  Calendar,
  Tag,
  TrendingUp,
  Users,
  Clock,
  Award,
  Zap,
  ShoppingCart,
  Layers,
  Home,
  Dumbbell,
  UtensilsCrossed
} from 'lucide-react';
import { useState } from 'react';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "LuxeStore",
      category: "E-Commerce",
      description: "Premium fashion e-commerce platform with seamless checkout experience and advanced product filtering.",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3MTg5NjMwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      results: {
        conversion: "+150%",
        revenue: "₹2.5M",
        users: "50K+"
      },
      gradient: "from-pink-500 to-rose-600",
      icon: <ShoppingCart className="w-6 h-6" />,
      timeline: "8 weeks",
      year: "2026"
    },
    {
      id: 2,
      title: "DataFlow Pro",
      category: "SaaS",
      description: "Analytics dashboard for business intelligence with real-time data visualization and custom reporting.",
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MTg4NzQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "TypeScript", "D3.js", "AWS"],
      results: {
        conversion: "+200%",
        revenue: "₹5M",
        users: "100K+"
      },
      gradient: "from-blue-500 to-cyan-600",
      icon: <Layers className="w-6 h-6" />,
      timeline: "12 weeks",
      year: "2026"
    },
    {
      id: 3,
      title: "UrbanNest",
      category: "Real Estate",
      description: "Modern real estate platform with virtual tours, property search, and agent management system.",
      image: "https://images.unsplash.com/photo-1687075430355-ed8df51c1670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NzE5NDY2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "Three.js", "PostgreSQL"],
      results: {
        conversion: "+180%",
        revenue: "₹3.8M",
        users: "75K+"
      },
      gradient: "from-purple-500 to-violet-600",
      icon: <Home className="w-6 h-6" />,
      timeline: "10 weeks",
      year: "2025"
    },
    {
      id: 4,
      title: "TasteBuds",
      category: "Restaurant",
      description: "Restaurant booking and online ordering platform with menu management and delivery tracking.",
      image: "https://images.unsplash.com/photo-1682778418768-16081e4470a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzE5MDkyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Firebase", "Maps API"],
      results: {
        conversion: "+220%",
        revenue: "₹1.8M",
        users: "40K+"
      },
      gradient: "from-orange-500 to-red-600",
      icon: <UtensilsCrossed className="w-6 h-6" />,
      timeline: "6 weeks",
      year: "2025"
    },
    {
      id: 5,
      title: "FitLife",
      category: "Health & Fitness",
      description: "Fitness tracking app with workout plans, nutrition guides, and progress monitoring.",
      image: "https://images.unsplash.com/photo-1551763337-e05b91996d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzE5NjIwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React Native", "Redux", "HealthKit"],
      results: {
        conversion: "+165%",
        revenue: "₹2.2M",
        users: "60K+"
      },
      gradient: "from-green-500 to-emerald-600",
      icon: <Dumbbell className="w-6 h-6" />,
      timeline: "9 weeks",
      year: "2025"
    },
    {
      id: 6,
      title: "TaskMaster",
      category: "SaaS",
      description: "Project management tool with team collaboration, time tracking, and advanced reporting features.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzcxODYyNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vue.js", "Laravel", "Redis"],
      results: {
        conversion: "+190%",
        revenue: "₹4.5M",
        users: "85K+"
      },
      gradient: "from-indigo-500 to-purple-600",
      icon: <Layers className="w-6 h-6" />,
      timeline: "11 weeks",
      year: "2026"
    }
  ];

  const categories = ['all', 'E-Commerce', 'SaaS', 'Real Estate', 'Restaurant', 'Health & Fitness'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-black/80 backdrop-blur-lg border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <motion.div 
              className="text-2xl tracking-tight cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Weblex
              </span>
            </motion.div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link href="/portfolio" className="text-white">Portfolio</Link>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-purple-950"></div>
        <motion.div 
          className="absolute top-20 right-0 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[150px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0]
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
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm backdrop-blur-sm">
              Our Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
          >
            Digital Experiences That{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Drive Results
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
          >
            Explore our portfolio of custom websites and applications that have helped businesses grow and succeed.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-12 px-6 bg-gray-900 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/30 transition-all">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    
                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} backdrop-blur-sm flex items-center gap-2`}>
                      {project.icon}
                      <span className="text-sm font-semibold">{project.category}</span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                      <span className="text-sm font-semibold">{project.year}</span>
                    </div>

                    {/* View Project Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2"
                      >
                        View Project
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-3xl mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-6">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                      <div>
                        <div className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent text-2xl font-bold mb-1`}>
                          {project.results.conversion}
                        </div>
                        <div className="text-xs text-gray-400">Conversion</div>
                      </div>
                      <div>
                        <div className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent text-2xl font-bold mb-1`}>
                          {project.results.revenue}
                        </div>
                        <div className="text-xs text-gray-400">Revenue</div>
                      </div>
                      <div>
                        <div className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent text-2xl font-bold mb-1`}>
                          {project.results.users}
                        </div>
                        <div className="text-xs text-gray-400">Users</div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="flex items-center gap-2 mt-4 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Delivered in {project.timeline}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-blue-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-4">
              Results That{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Matter
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Award className="w-8 h-8" />, value: "100+", label: "Projects Completed", gradient: "from-cyan-500 to-blue-600" },
              { icon: <Users className="w-8 h-8" />, value: "50+", label: "Happy Clients", gradient: "from-blue-500 to-purple-600" },
              { icon: <TrendingUp className="w-8 h-8" />, value: "180%", label: "Avg. Growth", gradient: "from-purple-500 to-pink-600" },
              { icon: <Zap className="w-8 h-8" />, value: "99%", label: "Client Satisfaction", gradient: "from-pink-500 to-red-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-4`}>
                  {stat.icon}
                </div>
                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[150px] opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl mb-6">
              Ready to Start Your{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                Project?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's create something extraordinary together.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-12 py-5 rounded-full text-xl font-semibold inline-flex items-center gap-3 group"
              >
                Get in Touch
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
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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
