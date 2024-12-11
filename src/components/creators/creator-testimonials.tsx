import { Star } from 'lucide-react';

export function CreatorTestimonials() {
  const testimonials = [
    {
      content:
        "TravelGo has transformed my travel blog into a real business. The AI tools make creating detailed itineraries a breeze, and the earnings have exceeded my expectations.",
      author: "Sarah Chen",
      role: "Travel Blogger",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 5
    },
    {
      content:
        "As a travel photographer, I love how easy it is to share my local expertise. The platform handles all the logistics while I focus on creating unique experiences.",
      author: "Michael Torres",
      role: "Travel Photographer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5
    },
    {
      content:
        "The support from TravelGo has been amazing. Their tools and analytics help me understand what travelers want and optimize my itineraries accordingly.",
      author: "Emma Watson",
      role: "Tour Guide",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Creator Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from travel creators who are already succeeding on our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}