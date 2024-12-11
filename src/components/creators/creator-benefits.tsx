import { Coins, Globe2, LineChart, Shield } from 'lucide-react';

export function CreatorBenefits() {
  const benefits = [
    {
      icon: <Coins className="h-6 w-6" />,
      title: 'Competitive Commission',
      description:
        'Earn up to 15% commission on every booking. Set your own prices and maximize your earnings.',
    },
    {
      icon: <Globe2 className="h-6 w-6" />,
      title: 'Global Reach',
      description:
        'Access a worldwide audience of travelers looking for authentic, curated experiences.',
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: 'Performance Analytics',
      description:
        'Track your success with detailed analytics on views, bookings, and earnings.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Platform',
      description:
        'Focus on creating while we handle payments, customer service, and logistics.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose TravelGo?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join a platform that empowers travel creators to succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}