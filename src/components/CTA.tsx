import React from 'react';
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react';

interface CTAProps {
  onBookDemo: () => void;
}

const CTA: React.FC<CTAProps> = ({ onBookDemo }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Ready to Fill Your Calendar?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of mortgage professionals who've transformed their business with LoanPros. 
              Start getting qualified appointments in your calendar today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onBookDemo}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              Book Your Demo
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="font-medium">hello@loanpros.com</span>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 border-t border-blue-500/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-1">250+</div>
                <div className="text-blue-200 text-sm">Loan Officers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">$537M+</div>
                <div className="text-blue-200 text-sm">Loans Closed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">95%</div>
                <div className="text-blue-200 text-sm">Client Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">24hr</div>
                <div className="text-blue-200 text-sm">Setup Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;