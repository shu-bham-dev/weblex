'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export default function GlobalFooter() {
  return (
    <footer className="relative py-16 px-6 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl mb-4">
              <Link href="/">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Weblex
                </span>
              </Link>
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
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/get-your-website" className="hover:text-white transition-colors">
                  Get Your Website
                </Link>
              </li>
              <li>
                <Link href="/offer" className="hover:text-white transition-colors">
                  Special Offer
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="mb-4">Connect</h4>
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
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Weblex Web Development. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}