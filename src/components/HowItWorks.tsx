import React from 'react';
import { Search, MessageSquare, Calendar, Handshake } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Targeted Advertising',
    description: 'We launch precision-targeted campaigns to reach borrowers actively seeking mortgage solutions in your market.',
    step: '01'
  },
  {
    icon: MessageSquare,
    title: 'AI-Driven Qualification',
    description: 'Our AI system engages prospects with proven funnels, qualifying them based on your specific criteria.',
    step: '02'
  },
  {
    icon: Calendar,
    title: 'Direct Booking',
    description: 'Qualified borrowers book appointments directly onto your calendar through our seamless booking system.',
    step: '03'
  },
  {
    icon: Handshake,
    title: 'Close More Loans',
    description: 'Meet with pre-qualified, motivated borrowers ready to discuss financing and close more deals.',
    step: '04'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How LoanPros Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process transforms your lead generation from reactive to proactive, 
            delivering consistent results you can count on.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-200 transform translate-x-4 -translate-y-1/2 z-0"></div>
              )}
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                {/* Step number */}
                <div className="absolute -top-4 left-8 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                
                <div className="mb-6 pt-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;