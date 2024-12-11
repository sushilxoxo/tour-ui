import { Button } from '@/components/ui/button';
import { CreatorBenefits } from '@/components/creators/creator-benefits';
import { CreatorHowItWorks } from '@/components/creators/creator-how-it-works';
import { CreatorTestimonials } from '@/components/creators/creator-testimonials';
import { CreatorStats } from '@/components/creators/creator-stats';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CreatorOnboardingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Turn Your Travel Expertise Into Income
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Join TravelGo as a creator and monetize your travel knowledge. Create curated
                itineraries, share your expertise, and earn commission on every booking.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/creator-signup">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0"
                alt="Travel Creator"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white text-gray-900 p-6 rounded-lg shadow-xl">
                <p className="text-2xl font-bold mb-2">$2,500+</p>
                <p className="text-gray-600">Average monthly earnings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CreatorStats />
      <CreatorBenefits />
      <CreatorHowItWorks />
      <CreatorTestimonials />

      {/* CTA Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of travel creators and start earning from your expertise today.
            No upfront costs, just your valuable knowledge.
          </p>
          <Button size="lg" asChild>
            <Link to="/creator-signup">
              Become a Creator
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}