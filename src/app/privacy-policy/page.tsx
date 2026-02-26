import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400">Last Updated: February 26, 2026</p>
        </div>

        <div className="space-y-8">
          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              Welcome to Weblex Web Development ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-300">
              If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at <span className="text-orange-400">privacy@weblex.xyz</span>.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-300">Personal Information</h3>
            <p className="text-gray-300 mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li>Register on our website or express interest in obtaining information about our services</li>
              <li>Fill out contact forms, request quotes, or participate in promotions</li>
              <li>Contact us for customer support or inquiries</li>
              <li>Subscribe to our newsletter or marketing communications</li>
            </ul>
            <p className="text-gray-300 mb-4">
              The personal information we collect may include:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li>Name, email address, phone number, and business details</li>
              <li>City, state, and country of residence</li>
              <li>Business type and website requirements</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-300">Automatically Collected Information</h3>
            <p className="text-gray-300">
              When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-2">
              <li>IP address, browser type, and operating system</li>
              <li>Referring URLs and pages visited</li>
              <li>Time and date of visits, and time spent on pages</li>
              <li>Clickstream data and navigation patterns</li>
            </ul>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">3. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect for various business purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>To provide, operate, and maintain our website and services</li>
              <li>To process your requests, transactions, and payments</li>
              <li>To send you marketing and promotional communications (with your consent)</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our website, services, and user experience</li>
              <li>To comply with legal obligations and protect against fraudulent activities</li>
              <li>To display personalized advertisements through platforms like Meta (Facebook) and Google Ads</li>
            </ul>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
            </p>
            <p className="text-gray-300 mb-4">
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functionality Cookies:</strong> Allow the website to remember choices you make</li>
              <li><strong>Advertising Cookies:</strong> Used to deliver relevant ads and measure ad performance</li>
            </ul>
            <p className="text-gray-300 mt-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">5. Third-Party Services and Advertising</h2>
            <p className="text-gray-300 mb-4">
              We use third-party services for analytics, advertising, and payment processing. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-300">Meta (Facebook) and Google Ads</h3>
            <p className="text-gray-300 mb-4">
              We use Meta Pixel and Google Ads tracking to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li>Measure the effectiveness of our advertising campaigns</li>
              <li>Deliver targeted ads to users who have visited our website</li>
              <li>Optimize our advertising spend and reach relevant audiences</li>
              <li>Analyze user behavior and conversion patterns</li>
              <li>Create custom audiences for remarketing campaigns</li>
              <li>Track conversions and optimize ad delivery</li>
            </ul>
            <p className="text-gray-300 mb-4">
              These platforms may use cookies, pixels, and similar technologies to collect data about your interactions with our website and other websites. The data collected may include:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li>Pages visited and time spent on our website</li>
              <li>Actions taken (form submissions, button clicks, etc.)</li>
              <li>Device information and browser type</li>
              <li>IP address and general location data</li>
              <li>Referral sources and campaign attribution</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3 text-gray-300">Opting Out of Personalized Advertising</h3>
            <p className="text-gray-300 mb-4">
              You have several options to control personalized advertising:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li>
                <strong>Meta (Facebook):</strong> Visit Facebook's Ad Preferences page at{' '}
                <a href="https://www.facebook.com/adpreferences" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  facebook.com/adpreferences
                </a>{' '}
                to manage your ad settings
              </li>
              <li>
                <strong>Google Ads:</strong> Visit Google's Ad Settings at{' '}
                <a href="https://adssettings.google.com" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  adssettings.google.com
                </a>{' '}
                to control personalized ads
              </li>
              <li>
                <strong>Digital Advertising Alliance:</strong> Opt out of interest-based advertising from participating companies at{' '}
                <a href="https://optout.aboutads.info" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  optout.aboutads.info
                </a>
              </li>
              <li>
                <strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or alert you when cookies are being sent. Check your browser settings for more information.
              </li>
            </ul>
            <p className="text-gray-300">
              Please note that opting out of personalized advertising does not mean you will stop seeing ads altogether. You will still see ads, but they may be less relevant to your interests.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">6. Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">7. Your Privacy Rights</h2>
            <p className="text-gray-300 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>The right to access, update, or delete your personal information</li>
              <li>The right to rectify inaccurate or incomplete information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to restrict processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="text-gray-300 mt-4">
              To exercise these rights, please contact us at <span className="text-orange-400">privacy@weblex.xyz</span>.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">8. Children's Privacy</h2>
            <p className="text-gray-300">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-gray-300">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">10. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong>Email:</strong> privacy@weblex.xyz</li>
              <li><strong>Phone:</strong> +91-7007592373</li>
              <li><strong>Address:</strong> Weblex Web Development, New Delhi</li>
            </ul>
          </section>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link 
              href="/" 
              className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold hover:opacity-90 transition"
            >
              Back to Home
            </Link>
            <Link 
              href="/terms-of-service" 
              className="px-6 py-3 bg-gray-800 rounded-full font-semibold hover:bg-gray-700 transition"
            >
              View Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}