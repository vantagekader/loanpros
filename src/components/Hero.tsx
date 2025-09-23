import React from 'react';
import { ArrowRight, Calendar, Target, TrendingUp } from 'lucide-react';

interface HeroProps {
  onBookDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookDemo }) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Skip the chase. <span className="text-blue-600">Get real borrowers booked directly to your calendar.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get <span className="text-blue-600">exclusive</span>, interested borrower appointments booked directly onto your calendar. 
                We deliver mortgage-ready prospects who want to talk financing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBookDemo}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="#how-it-works" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg inline-block text-center">
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Calendar Ready</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">300%</div>
                <div className="text-sm text-gray-600">More Pipeline</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">80%</div>
                <div className="text-sm text-gray-600">Less Prospecting</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Your Calendar</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="font-medium text-green-800">2:00 PM - Sarah M.</span>
                    </div>
                    <p className="text-sm text-green-700 mt-1">Pre-qualified • $450K purchase</p>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="font-medium text-blue-800">3:30 PM - Mike R.</span>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">Pre-qualified • $320K refinance</p>
                  </div>
                  
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="font-medium text-purple-800">5:00 PM - Lisa K.</span>
                    </div>
                    <p className="text-sm text-purple-700 mt-1">Pre-qualified • $280K purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Target className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
