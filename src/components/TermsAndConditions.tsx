import React from 'react';
import { ArrowLeft, FileText, Shield, MessageSquare, Phone, Mail } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img 
                  src="/LoanprosWhitebackgroundbluetextSNIPPED.png" 
                  alt="LoanPros" 
                  className="h-16 w-auto"
                />
              </a>
            </div>
            <a 
              href="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Terms and Conditions Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-lg text-gray-600">
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using LoanPros services, you agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                LoanPros provides AI-powered mortgage lead generation services to licensed mortgage professionals. 
                Our services include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Targeted digital marketing campaigns to attract potential borrowers</li>
                <li>AI-powered lead qualification and nurturing systems</li>
                <li>Direct calendar booking for pre-qualified appointments</li>
                <li>Exclusive lead delivery to participating mortgage professionals</li>
                <li>Performance tracking and reporting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Eligibility and Requirements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use our services, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Be a licensed mortgage professional in good standing</li>
                <li>Comply with all applicable federal, state, and local laws and regulations</li>
                <li>Maintain appropriate professional licenses and certifications</li>
                <li>Provide accurate and current information about your business</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Terms</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lead Quality and Exclusivity</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Leads provided are exclusive to you and not shared with other loan officers</li>
                <li>We use reasonable efforts to qualify leads, but cannot guarantee loan approval or closing</li>
                <li>Lead quality may vary based on market conditions and campaign performance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment and Billing</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Services are billed according to your agreed-upon pricing plan</li>
                <li>Payment is due according to the terms specified in your service agreement</li>
                <li>Late payments may result in service suspension</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                LoanPros SMS Messaging Terms
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Program Description</h3>
                <p className="text-blue-800 leading-relaxed">
                  By opting into our SMS messaging program, you will receive text messages related to appointment 
                  confirmations, reminders, service updates, and important communications about your LoanPros account. 
                  Messages may include booking confirmations, schedule changes, and relevant business updates.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cancellation and Opt-Out</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can cancel the SMS service at any time. Simply text "STOP" to the shortcode. Upon sending "STOP," 
                we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive 
                SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Help and Support</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you experience issues with the messaging program, reply with the keyword HELP for more assistance, 
                or reach out directly to hello@loanpros.io.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Carrier Information</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Carriers are not liable for delayed or undelivered messages</li>
                <li>Message and data rates may apply for messages sent to you from us and to us from you</li>
                <li>Message frequency varies based on your account activity and preferences</li>
                <li>For questions about your text plan or data plan, contact your wireless provider</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                For privacy-related inquiries, please refer to our <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">privacy policy</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                LoanPros provides marketing and lead generation services. We do not guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Specific number of leads or appointments</li>
                <li>Loan approval or closing rates</li>
                <li>Revenue or business outcomes</li>
                <li>Continuous service availability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance and Professional Responsibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Complying with all applicable mortgage lending laws and regulations</li>
                <li>Maintaining professional licensing and continuing education requirements</li>
                <li>Following fair lending practices and anti-discrimination laws</li>
                <li>Properly disclosing all required information to borrowers</li>
                <li>Handling all customer data in accordance with privacy laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate services with appropriate notice as specified in your service agreement. 
                Upon termination, you will remain responsible for any outstanding payments and must cease using 
                our proprietary systems and processes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be communicated via email 
                or through our website. Continued use of our services after changes constitutes acceptance of 
                the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-600" />
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms and Conditions, please contact us:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-700">hello@loanpros.io</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-700">(850) 750-9281</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="/loanpros main logo blue background SNIPPED.png" 
              alt="LoanPros" 
              className="h-12 w-auto mx-auto mb-4"
            />
            <p className="text-gray-400">
              © 2025 LoanPros. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;