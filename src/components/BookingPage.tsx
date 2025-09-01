import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Star, User, Building, Calendar } from 'lucide-react';

interface BookingPageProps {
  onBack: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits & Social Proof */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                You're One Step Away From
                <span className="text-blue-600 block">Booked Appointments</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join 250+ mortgage professionals who've transformed their business with LoanPros. 
                In just 15 minutes, discover how to fill your calendar with qualified borrowers.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">What You'll Get:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Exclusive Lead Pipeline</h4>
                    <p className="text-gray-600">No shared leads - every appointment is yours alone</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Higher Close Rates</h4>
                    <p className="text-gray-600">Pre-qualified borrowers ready to move forward</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Time Freedom</h4>
                    <p className="text-gray-600">Stop cold calling and focus on closing loans</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "LoanPros completely changed my business. I went from struggling to find leads 
                to having a full calendar of qualified appointments. My income doubled in 6 months."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jennifer Martinez</p>
                  <p className="text-sm text-gray-600">Senior Loan Officer, Pacific Lending</p>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">15min</div>
                <div className="text-sm text-gray-600">Demo Call</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">24hr</div>
                <div className="text-sm text-gray-600">Setup Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="text-center p-8 space-y-2 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Book Your Demo</h2>
              <p className="text-gray-600">Schedule a personalized demo and see LoanPros in action</p>
            </div>
            
            {/* Calendly Embed */}
            <div className="h-[600px]">
              <iframe
                src="https://calendly.com/your-calendly-link/15min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a Demo"
                className="rounded-b-2xl"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Final Tiedowns */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Booked Appointments</h4>
                <p className="text-gray-600">A calendar full of pre-qualified borrowers ready to discuss financing</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Higher Close Rates</h4>
                <p className="text-gray-600">Meet only with motivated borrowers who match your lending criteria</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Scalable Business</h4>
                <p className="text-gray-600">Predictable revenue growth without the stress of constant prospecting</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;