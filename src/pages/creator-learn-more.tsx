import { Button } from '@/components/ui/button';
import { Footer } from '@/components/layout/footer';
import { ArrowRight, Award, BarChart, BookOpen, DollarSign, Globe2, Lightbulb, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CreatorLearnMorePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Share Your Travel Expertise
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Join our community of travel creators and turn your passion for travel into a thriving business.
              Share your unique experiences and earn while helping others explore the world.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/creator-signup">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Earning Potential</h2>
            <p className="mt-4 text-xl text-gray-600">
              Multiple revenue streams to maximize your earnings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <DollarSign className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Commission</h3>
              <p className="text-gray-600 mb-4">Earn up to 15% commission on every booking</p>
              <p className="text-2xl font-bold text-blue-600">$500-$2000</p>
              <p className="text-sm text-gray-500">Average per booking</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Referrals</h3>
              <p className="text-gray-600 mb-4">Additional earnings from referred creators</p>
              <p className="text-2xl font-bold text-blue-600">$200</p>
              <p className="text-sm text-gray-500">Per successful referral</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Award className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bonuses</h3>
              <p className="text-gray-600 mb-4">Performance-based monthly bonuses</p>
              <p className="text-2xl font-bold text-blue-600">Up to $1000</p>
              <p className="text-sm text-gray-500">Monthly bonus potential</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Tools & Support</h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Lightbulb className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Assistant</h3>
              <p className="text-gray-600">
                Create detailed itineraries with our AI-powered tools
              </p>
            </div>
            <div className="text-center">
              <BarChart className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600">
                Track performance and optimize your offerings
              </p>
            </div>
            <div className="text-center">
              <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Training</h3>
              <p className="text-gray-600">
                Access exclusive creator education resources
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <p className="text-gray-600">
                24/7 dedicated creator support team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Requirements</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Globe2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Travel Experience</h3>
                  <p className="text-gray-600">
                    Demonstrate expertise in specific destinations or travel niches
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Social Following</h3>
                  <p className="text-gray-600">
                    Active social media presence in travel-related content
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Verification</h3>
                  <p className="text-gray-600">
                    Pass our verification process to ensure quality standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of successful travel creators and start earning from your expertise
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/creator-signup">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}