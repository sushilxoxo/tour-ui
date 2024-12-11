import { useState } from 'react';
import { Footer } from '@/components/layout/footer';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FAQCategory {
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const faqCategories: FAQCategory[] = [
    {
      title: "Booking & Reservations",
      questions: [
        {
          question: "How do I book an itinerary?",
          answer: "Booking an itinerary is simple: Browse our curated itineraries, select your preferred dates and number of travelers, customize any options, and proceed to checkout. You can pay securely using credit card, PayPal, or other supported payment methods."
        },
        {
          question: "Can I modify my booking after confirmation?",
          answer: "Yes, you can modify your booking up to 30 days before departure. Changes may incur fees depending on the type of modification and the policies of individual service providers."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Some regions may have additional local payment options available."
        }
      ]
    },
    {
      title: "Cancellations & Refunds",
      questions: [
        {
          question: "What is your cancellation policy?",
          answer: "Our cancellation policy varies by booking type: Full refund for cancellations 30+ days before departure (minus processing fees), 50% refund for 15-30 days before departure, and no refund for less than 15 days before departure."
        },
        {
          question: "How long do refunds take to process?",
          answer: "Refunds are typically processed within 5-10 business days. The time it takes for the refund to appear in your account depends on your payment method and financial institution."
        },
        {
          question: "What happens if my trip is affected by COVID-19?",
          answer: "We offer flexible cancellation policies for COVID-19 related issues. If your trip is affected by travel restrictions or health concerns, contact our support team for assistance with rebooking or refunds."
        }
      ]
    },
    {
      title: "Travel Insurance",
      questions: [
        {
          question: "Is travel insurance included?",
          answer: "Basic travel insurance is included with premium bookings. For standard bookings, we strongly recommend purchasing comprehensive travel insurance, which you can add during checkout."
        },
        {
          question: "What does the travel insurance cover?",
          answer: "Our recommended travel insurance covers medical emergencies, trip cancellation/interruption, lost baggage, travel delays, and other common travel risks. Coverage limits vary by plan level."
        }
      ]
    },
    {
      title: "For Creators",
      questions: [
        {
          question: "How do I become a creator?",
          answer: "To become a creator, apply through our creator portal. You'll need to demonstrate your travel expertise, provide examples of your content, and pass our verification process."
        },
        {
          question: "How much can I earn as a creator?",
          answer: "Earnings vary based on your itineraries and bookings. Creators typically earn 10-15% commission on bookings, with top creators earning $2,000+ monthly. Additional earnings are possible through our referral program."
        },
        {
          question: "What tools do creators get?",
          answer: "Creators get access to our AI-powered itinerary builder, analytics dashboard, pricing optimization tools, and marketing resources. We also provide training and support to help you succeed."
        }
      ]
    },
    {
      title: "Technical Support",
      questions: [
        {
          question: "How do I reset my password?",
          answer: "Click the 'Forgot Password' link on the login page, enter your email address, and follow the instructions sent to your email to reset your password."
        },
        {
          question: "What devices/browsers are supported?",
          answer: "Our platform works on all modern browsers (Chrome, Firefox, Safari, Edge) and is fully responsive for mobile devices. For the best experience, we recommend using the latest version of your preferred browser."
        }
      ]
    }
  ];

  const toggleQuestion = (question: string) => {
    setExpandedQuestions(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  const filteredCategories = faqCategories
    .map(category => ({
      ...category,
      questions: category.questions.filter(
        q =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => category.questions.length > 0);

  const displayCategories = selectedCategory
    ? filteredCategories.filter(c => c.title === selectedCategory)
    : filteredCategories;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">How can we help?</h1>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-transparent focus:border-white focus:ring-2 focus:ring-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              !selectedCategory
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All Categories
          </button>
          {faqCategories.map((category) => (
            <button
              key={category.title}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category.title
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category.title)}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-8">
          {displayCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
              <div className="space-y-4">
                {category.questions.map((item) => (
                  <div key={item.question} className="border rounded-lg">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleQuestion(item.question)}
                    >
                      <span className="font-medium">{item.question}</span>
                      {expandedQuestions.includes(item.question) ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                    {expandedQuestions.includes(item.question) && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help 24/7
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Contact Support
            </button>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg border border-blue-600 hover:bg-blue-50">
              Live Chat
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}