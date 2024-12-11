import { Lightbulb, PenTool, Share2, Wallet } from 'lucide-react';

export function CreatorHowItWorks() {
  const steps = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Share Your Expertise',
      description:
        'Use our AI-powered tools to transform your travel knowledge into detailed itineraries.',
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: 'Create & Customize',
      description:
        'Design unique experiences with our itinerary builder. Add your personal touches and recommendations.',
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: 'Publish & Promote',
      description:
        'Share your itineraries on our marketplace and your social channels to reach more travelers.',
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: 'Earn & Grow',
      description:
        'Earn commission on every booking. Build your reputation and grow your travel business.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Start earning in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-100" />
              )}
              <div className="bg-blue-50 p-6 rounded-lg relative">
                <div className="absolute -top-3 left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  {step.icon}
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}