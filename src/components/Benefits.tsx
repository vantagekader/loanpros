import React from 'react';
import { CheckCircle, DollarSign, Clock, Users, BarChart3, Zap } from 'lucide-react';

interface BenefitsProps {
  onBookDemo: () => void;
}

const benefits = [
  {
    icon: DollarSign,
    title: 'Increase Revenue',
    description: 'Close 3x more loans with a consistent pipeline of qualified borrowers.',
    metric: '300% ROI Average'
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Eliminate cold calling and lead qualification. Focus on closing deals.',
    metric: '20+ Hours/Week Saved'
  },
  {
    icon: Users,
    title: 'Exclusive Appointments',
    description: 'Every lead is yours alone - no competition from other loan officers.',
    metric: '100% Exclusive'
  },
  {
    icon: BarChart3,
    title: 'Predictable Results',
    description: 'Consistent appointment flow helps you forecast and scale your business.',
    metric: '70+% Show Rate'
  }
];

const Benefits: React.FC<BenefitsProps> = ({ onBookDemo }) => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Transform Your Mortgage Business
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stop wasting time on unqualified leads and start building a predictable, 
                scalable mortgage business with LoanPros.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">No More Cold Calling</h4>
                  <p className="text-gray-600">Every appointment is with a warm, interested borrower.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Pre-Qualified Prospects</h4>
                  <p className="text-gray-600">Meet only with borrowers who meet your lending criteria.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Scalable System</h4>
                  <p className="text-gray-600">Grow your business without proportionally increasing your workload.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={onBookDemo}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Zap className="w-5 h-5" />
              Start Growing Today
            </button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  {benefit.description}
                </p>
                
                <div className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full inline-block">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;