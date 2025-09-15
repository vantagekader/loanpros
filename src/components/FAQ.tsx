import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How are your leads different from other lead generation companies?",
    answer: "Our leads are exclusive to you - no sharing with other loan officers. We use AI-powered qualification to ensure appointments are with pre-qualified borrowers who meet your specific criteria. Plus, they book directly onto your calendar, eliminating phone tag and missed opportunities."
  },
  {
    question: "What types of borrowers do you generate leads for?",
    answer: "We generate leads for all types of mortgage needs including purchase loans, refinances, cash-out refinances, and investment property loans. Our AI system qualifies borrowers based on credit score, income, debt-to-income ratio, and loan amount to ensure they meet your lending criteria."
  },
  {
    question: "How quickly can I start receiving appointments?",
    answer: "Loan officers typically start receiving qualified appointments within a few weeks of campaign launch. We need time to set up your targeted campaigns, create your booking system, and begin the lead nurturing process. The exact timeline depends on your market and target criteria."
  },
  {
    question: "What's the typical show rate for appointments?",
    answer: "Our show rates are significantly higher than industry standards. This is because our AI qualification process ensures only genuinely interested, pre-qualified borrowers book appointments. We also send automated reminders and confirmations to maximize attendance."
  },
  {
    question: "How much does the service cost?",
    answer: "Our pricing is customized based on your market, loan volume goals, and specific requirements. We offer flexible packages to fit different business sizes and budgets. Most clients see a strong return on investment. We'll provide a detailed cost analysis during your demo call."
  },
  {
    question: "Do you work with loan officers in all states?",
    answer: "Yes, we work with licensed mortgage professionals nationwide. Our digital marketing approach allows us to target borrowers in any state or specific geographic area you serve. We'll customize campaigns based on your licensing and service areas."
  },
  {
    question: "What information do you provide about each lead?",
    answer: "Before each appointment, you'll receive a detailed lead profile including: contact information, loan type needed, estimated loan amount, credit score range, employment status, timeline to close, and any specific questions or concerns they have about financing."
  },
  {
    question: "How do you ensure lead quality?",
    answer: "We use a multi-step qualification process: targeted advertising to reach active borrowers, AI-powered chatbots for initial screening, phone verification for high-intent prospects, and calendar booking only after full qualification. This ensures you only meet with serious, qualified borrowers."
  },
  {
    question: "Can I customize the types of leads I receive?",
    answer: "Absolutely! We customize everything based on your preferences: loan amounts, credit score minimums, property types, geographic areas, loan purposes (purchase vs. refinance), and even specific borrower demographics. Your campaigns are tailored to your ideal client profile."
  },
  {
    question: "What happens if a lead doesn't show up for their appointment?",
    answer: "We automatically follow up with no-shows to attempt rescheduling. We work with you to address any attendance issues and optimize your campaign performance. Our goal is to ensure you get quality conversations with interested borrowers."
  },
  {
    question: "How do you track and report on campaign performance?",
    answer: "You'll receive detailed reports showing: number of leads generated, appointment booking rates, show rates, lead sources, and performance metrics. We also provide access to your campaign dashboard for transparency and real-time insights."
  },
  {
    question: "Is there a contract or minimum commitment?",
    answer: "We offer flexible contract options including both month-to-month and longer-term agreements. Many clients choose longer commitments to allow time for campaign optimization and better results. We'll discuss the best option for your business during our consultation."
  },
  {
    question: "What if I'm not satisfied with the lead quality?",
    answer: "We're committed to your success and will work closely with you to optimize campaign performance. If you're not satisfied with lead quality, we'll make adjustments to improve results. Our success depends on your success, so we're dedicated to delivering value."
  },
  {
    question: "Do you provide any training or support?",
    answer: "Yes! We provide comprehensive onboarding including: campaign setup, calendar integration, lead handling best practices, conversion optimization tips, and ongoing account management. You'll have a dedicated account manager for support and strategy."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

      {/* FAQ Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our mortgage lead generation service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA at bottom of FAQ */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is here to help. Book a demo to get personalized answers about how LoanPros can transform your mortgage business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://book.loanpros.io" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Book Your Demo
              </a>
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="font-medium">(850) 750-9281</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"></path>
                  </svg>
                  <span className="font-medium">hello@loanpros.io</span>
                </div>
              </div>
            </div>
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

export default FAQ;