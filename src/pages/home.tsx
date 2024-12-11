import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/home/hero-section';
import { ExploreSection } from '@/components/home/explore-section';
import { Globe, Shield, Users } from 'lucide-react';

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <ExploreSection />

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose TravelGo</h2>
            <p className="mt-4 text-xl text-gray-600">
              We make travel planning simple, secure, and unforgettable
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-lg bg-blue-600 p-3">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">Expert-Curated Itineraries</h3>
              <p className="mt-2 text-gray-600">
                Handpicked destinations and experiences from travel experts and influencers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-lg bg-blue-600 p-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">Secure Booking</h3>
              <p className="mt-2 text-gray-600">
                Book with confidence knowing your payments and personal information are protected.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-lg bg-blue-600 p-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">24/7 Support</h3>
              <p className="mt-2 text-gray-600">
                Get assistance anytime with our dedicated customer support team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What Travelers Say</h2>
            <p className="mt-4 text-xl text-gray-600">
              Real experiences from our community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The local insights made our trip truly special. We discovered places we'd never have found on our own.",
                author: "Sarah Chen",
                location: "Tokyo Adventure",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              },
              {
                quote: "Seamless planning and amazing recommendations. Our Paris trip was perfect thanks to TravelGo!",
                author: "Michael Torres",
                location: "Paris Getaway",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              },
              {
                quote: "The attention to detail in our itinerary was impressive. Every day was perfectly planned.",
                author: "Emma Watson",
                location: "Bali Explorer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}