import React from 'react';
import { Bot, Calendar, Target, Shield, Clock, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Exclusive Leads',
    description: 'Every appointment is yours alone - no shared or recycled leads. Build relationships with borrowers who only know you.'
  },
  {
    icon: Calendar,
    title: 'Direct Calendar Booking',
    description: 'Pre-qualified borrowers book appointments directly onto your calendar - no more phone tag or missed opportunities.'
  },
  {
    icon: Bot,
    title: 'AI-Powered Follow-Up',
    description: 'Our intelligent system nurtures leads with personalized messaging and perfect timing to maximize conversion rates.'
  },
  {
    icon: Target,
    title: 'Targeted Advertising',
    description: 'Precision-targeted campaigns reach borrowers actively seeking mortgage solutions in your market area.'
  },
  {
    icon: Clock,
    title: 'Time-Saving Automation',
    description: 'Eliminate hours of cold calling and lead qualification. Focus on what you do best - closing loans.'
  },
  {
    icon: TrendingUp,
    title: 'Predictable Pipeline',
    description: 'Consistent flow of qualified appointments helps you forecast revenue and scale your business with confidence.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Scale Your Mortgage Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with proven marketing strategies 
            to deliver consistent, high-quality appointments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 bg-white hover:bg-blue-50/30"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;