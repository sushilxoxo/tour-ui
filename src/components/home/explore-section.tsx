import { Button } from '@/components/ui/button';
import { ArrowRight, Compass, Globe, Heart, Mountain, Palmtree, Plane, Sparkles, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ExploreCategory {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  link: string;
}

export function ExploreSection() {
  const categories: ExploreCategory[] = [
    {
      title: 'Adventure Trips',
      description: 'Thrilling experiences for adrenaline seekers',
      image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3',
      icon: <Mountain className="h-6 w-6" />,
      link: '/itineraries?category=adventure',
    },
    {
      title: 'Luxury Getaways',
      description: 'Indulgent escapes with premium experiences',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      icon: <Sparkles className="h-6 w-6" />,
      link: '/itineraries?category=luxury',
    },
    {
      title: 'Cultural Immersion',
      description: 'Deep dive into local traditions and heritage',
      image: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db',
      icon: <Globe className="h-6 w-6" />,
      link: '/itineraries?category=cultural',
    },
    {
      title: 'Beach Paradise',
      description: 'Sun-soaked destinations and coastal retreats',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21',
      icon: <Palmtree className="h-6 w-6" />,
      link: '/itineraries?category=beach',
    },
    {
      title: 'Food & Wine',
      description: 'Culinary journeys and gastronomic discoveries',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
      icon: <Utensils className="h-6 w-6" />,
      link: '/itineraries?category=food',
    },
    {
      title: 'Romantic Escapes',
      description: 'Perfect settings for couples and honeymooners',
      image: 'https://images.unsplash.com/photo-1469796466635-455ede028aca',
      icon: <Heart className="h-6 w-6" />,
      link: '/itineraries?category=romantic',
    },
  ];

  const featuredItineraries = [
    {
      title: 'Japanese Culture Explorer',
      location: 'Tokyo, Japan',
      duration: '10 days',
      price: 3999,
      rating: 4.9,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    },
    {
      title: 'Greek Islands Hopping',
      location: 'Greece',
      duration: '12 days',
      price: 4299,
      rating: 4.8,
      reviews: 96,
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077',
    },
    {
      title: 'Moroccan Desert Adventure',
      location: 'Morocco',
      duration: '8 days',
      price: 2899,
      rating: 4.7,
      reviews: 84,
      image: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Explore Amazing Destinations</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover curated itineraries for every type of traveler
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-white mb-2">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <p className="text-white/90">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Itineraries */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Featured Itineraries</h3>
            <Button variant="outline" asChild>
              <Link to="/itineraries">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItineraries.map((itinerary) => (
              <div
                key={itinerary.title}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[16/9]">
                  <img
                    src={itinerary.image}
                    alt={itinerary.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                    ${itinerary.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Compass className="h-4 w-4" />
                    {itinerary.location}
                    <Plane className="h-4 w-4 ml-2" />
                    {itinerary.duration}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{itinerary.title}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="font-medium">{itinerary.rating}</span>
                      <span className="text-gray-600">({itinerary.reviews})</span>
                    </div>
                    <Button size="sm" asChild>
                      <Link to={`/itineraries/${itinerary.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/itineraries">
              Explore All Itineraries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}