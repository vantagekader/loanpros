import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Star, User, Building, Calendar, Clock } from 'lucide-react';

interface BookingPageProps {
  onBack: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    loanVolume: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTimeSelect = (time: string) => {
    setFormData({
      ...formData,
      preferredTime: time
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with Go High Level calendar booking logic
    console.log('Form submitted:', formData);
    alert('Demo booking functionality will be connected to Go High Level calendar');
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

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
            
            {/* 
              GHL CALENDAR INTEGRATION INSTRUCTIONS:
              
              1. Replace the form below with your Go High Level calendar embed code
              2. The embed code typically looks like:
                 <iframe src="https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID" 
                         width="100%" 
                         height="600" 
                         frameBorder="0">
                 </iframe>
              
              3. Or if using a script-based embed:
                 <div id="ghl-calendar-widget"></div>
                 <script src="https://widgets.leadconnectorhq.com/loader.js" 
                         data-resources-url="https://widgets.leadconnectorhq.com" 
                         data-widget-id="YOUR_WIDGET_ID">
                 </script>
              
              4. Make sure to:
                 - Replace YOUR_CALENDAR_ID or YOUR_WIDGET_ID with your actual GHL calendar ID
                 - Adjust the height as needed (typically 600-800px works well)
                 - Test the integration to ensure proper functionality
              
              5. The container div below is styled and ready for the GHL embed
            */}
            
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Smith"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Brokerage
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ABC Mortgage"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Loan Volume
                  </label>
                  <select
                    name="loanVolume"
                    value={formData.loanVolume}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select volume</option>
                    <option value="0-5">0-5 loans/month</option>
                    <option value="6-15">6-15 loans/month</option>
                    <option value="16-30">16-30 loans/month</option>
                    <option value="30+">30+ loans/month</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleTimeSelect(time)}
                        className={`p-3 rounded-lg border transition-all duration-200 flex items-center justify-center gap-2 ${
                          formData.preferredTime === time
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                        }`}
                      >
                        <Clock className="w-4 h-4" />
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  Book My Demo
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By booking a demo, you agree to receive follow-up communications from LoanPros.
                </p>
              </form>
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