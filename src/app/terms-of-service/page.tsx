import React from 'react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-400">Last Updated: February 26, 2026</p>
        </div>

        <div className="space-y-8">
          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using the Weblex Web Development website ("Website") and services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not access or use our Website or Services.
            </p>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the updated Terms on this page. Your continued use of the Website after such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">2. Description of Services</h2>
            <p className="text-gray-300 mb-4">
              Weblex Web Development provides web design, development, and digital marketing services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Custom website design and development</li>
              <li>E-commerce website solutions</li>
              <li>Website maintenance and support</li>
              <li>Search engine optimization (SEO) services</li>
              <li>Digital marketing and advertising campaigns</li>
              <li>Content creation and management</li>
            </ul>
            <p className="text-gray-300 mt-4">
              All services are provided on a project basis as outlined in individual service agreements or proposals.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">3. User Responsibilities</h2>
            <p className="text-gray-300 mb-4">
              When using our Services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Not use the Services for any illegal or unauthorized purpose</li>
              <li>Not interfere with or disrupt the integrity or performance of the Services</li>
              <li>Not attempt to gain unauthorized access to any part of the Services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">4. Payment Terms</h2>
            <p className="text-gray-300 mb-4">
              All services require payment as specified in your service agreement. Payment terms may include:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Deposit requirements before work begins</li>
              <li>Milestone payments for larger projects</li>
              <li>Final payment upon project completion</li>
              <li>Recurring payments for ongoing services</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Late payments may result in suspension of services and may be subject to late fees. All prices are in Indian Rupees (₹) unless otherwise specified.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">5. Intellectual Property</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-300">Client Materials</h3>
            <p className="text-gray-300 mb-4">
              You retain ownership of all content, materials, and intellectual property that you provide to us for your project ("Client Materials"). By providing Client Materials, you grant us a license to use them solely for the purpose of providing the Services.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-300">Our Work</h3>
            <p className="text-gray-300 mb-4">
              Upon full payment, you will receive ownership of the final deliverables as specified in your service agreement. We retain the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Use the work in our portfolio and marketing materials</li>
              <li>Reuse non-client-specific code, templates, and techniques</li>
              <li>Retain ownership of our proprietary tools, frameworks, and methodologies</li>
            </ul>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">6. Project Timeline and Revisions</h2>
            <p className="text-gray-300 mb-4">
              Project timelines will be established in your service agreement. We will make reasonable efforts to meet agreed-upon deadlines, but we are not liable for delays caused by:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Client delays in providing required materials or feedback</li>
              <li>Third-party service delays</li>
              <li>Unforeseen technical issues</li>
              <li>Force majeure events</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Each project includes a specified number of revision rounds. Additional revisions may incur extra charges.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">7. Cancellation and Refund Policy</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-300">Cancellation by Client</h3>
            <p className="text-gray-300 mb-4">
              You may cancel a project at any time by providing written notice. Cancellation fees may apply based on work completed:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>If cancelled before work begins: Full refund of any deposit</li>
              <li>If cancelled during development: Payment for work completed plus cancellation fee</li>
              <li>If cancelled after completion: No refund</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-300">Cancellation by Weblex</h3>
            <p className="text-gray-300">
              We reserve the right to cancel a project for reasons including non-payment, violation of these Terms, or inability to meet project requirements. In such cases, we will refund any payments for work not yet completed.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">8. Disclaimer of Warranties</h2>
            <p className="text-gray-300 mb-4">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE BY LAW, WEEBLEX DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-300">
              We do not warrant that the Services will be uninterrupted, error-free, or completely secure. You acknowledge that there are risks inherent in internet connectivity that could result in loss of your privacy, confidential information, and data.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">9. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WEEBLEX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES</li>
              <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES</li>
              <li>ANY CONTENT OBTAINED FROM THE SERVICES</li>
              <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Our total liability for any claims under these Terms shall not exceed the amount you paid us for the Services in the six months preceding the claim.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">10. Indemnification</h2>
            <p className="text-gray-300">
              You agree to indemnify, defend, and hold harmless Weblex and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Services, your violation of these Terms, or your infringement of any intellectual property or other rights of any third party.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">11. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-300 mb-4">
              Any dispute arising out of or relating to these Terms shall be resolved through good faith negotiations between the parties. If such negotiations fail, the dispute shall be submitted to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996.
            </p>
            <p className="text-gray-300">
              The arbitration shall take place in New Delhi, India, and shall be conducted in English. The decision of the arbitrator shall be final and binding on both parties.
            </p>
          </section>

          <section className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-orange-300">12. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For any questions about these Terms of Service, please contact us:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong>Email:</strong> legal@weblex.xyz</li>
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
              href="/privacy-policy" 
              className="px-6 py-3 bg-gray-800 rounded-full font-semibold hover:bg-gray-700 transition"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}