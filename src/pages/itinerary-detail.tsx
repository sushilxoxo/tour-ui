import { BookingForm, BookingFormData } from '@/components/itineraries/booking-form';
import { DayByDay } from '@/components/itineraries/day-by-day';
import { ItineraryHeader } from '@/components/itineraries/itinerary-header';
import { ItineraryOverview } from '@/components/itineraries/itinerary-overview';
import { TripComponents } from '@/components/itineraries/trip-components';
import { Modal } from '@/components/ui/modal';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

// Mock data - would be replaced with API call
const MOCK_ITINERARY = {
  id: '1',
  title: 'Romantic Paris Getaway',
  description: 'Experience the magic of Paris with this carefully curated 5-day romantic itinerary that combines iconic landmarks, hidden gems, and unforgettable dining experiences.',
  destination: 'Paris, France',
  duration: 5,
  price: 2499,
  imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
  creator: {
    name: 'Emily Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  tags: ['romantic', 'culture', 'food'],
  rating: 4.8,
  reviewCount: 124,
  activities: [
    {
      day: 1,
      title: 'Arrival & Welcome Dinner',
      items: [
        {
          type: 'activity',
          time: '15:00',
          title: 'Check-in at Hotel',
          description: 'Arrive at the luxurious Le Marais hotel, perfectly located in the heart of Paris.',
        },
        {
          type: 'activity',
          time: '17:00',
          title: 'Evening Seine River Cruise',
          description: 'Enjoy a romantic sunset cruise along the Seine River with champagne.',
        },
        {
          type: 'dinner',
          time: '20:00',
          title: 'Welcome Dinner at L\'Arpège',
          description: 'Three Michelin star dining experience with a special tasting menu.',
        },
      ],
    },
    {
      day: 2,
      title: 'Icons of Paris',
      items: [
        {
          type: 'breakfast',
          time: '09:00',
          title: 'Breakfast at Café de Flore',
          description: 'Start your day at this iconic Parisian café with fresh pastries and coffee.',
        },
        {
          type: 'activity',
          time: '11:00',
          title: 'Eiffel Tower Visit',
          description: 'Skip-the-line access to the summit with panoramic views of Paris.',
        },
        {
          type: 'activity',
          time: '15:00',
          title: 'Louvre Museum Tour',
          description: 'Private guided tour of the world\'s largest art museum.',
        },
      ],
    },
  ],
  components: [
    {
      id: 'flight-1',
      type: 'flight',
      title: 'Round-trip Flight',
      description: 'Direct flights with Air France',
      price: 800,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
      details: {
        'Outbound': 'JFK → CDG, 7:30 PM - 9:00 AM',
        'Return': 'CDG → JFK, 11:30 AM - 2:00 PM',
        'Class': 'Economy',
        'Airline': 'Air France'
      },
      alternatives: [
        {
          id: 'flight-2',
          title: 'Business Class Upgrade',
          description: 'Air France Business Class',
          price: 2800,
          image: 'https://images.unsplash.com/photo-1540339832862-326119e4ad68',
          details: {
            'Outbound': 'JFK → CDG, 7:30 PM - 9:00 AM',
            'Return': 'CDG → JFK, 11:30 AM - 2:00 PM',
            'Class': 'Business',
            'Airline': 'Air France'
          },
          priceDifference: 2000
        }
      ]
    },
    {
      id: 'hotel-1',
      type: 'hotel',
      title: 'Le Marais Boutique Hotel',
      description: '4-star hotel in central Paris',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
      details: {
        'Room Type': 'Deluxe Double',
        'View': 'City View',
        'Breakfast': 'Included',
        'Location': 'Le Marais District'
      },
      alternatives: [
        {
          id: 'hotel-2',
          title: 'Ritz Paris',
          description: 'Luxury 5-star palace hotel',
          price: 2500,
          image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
          details: {
            'Room Type': 'Junior Suite',
            'View': 'Garden View',
            'Breakfast': 'Included',
            'Location': 'Place Vendôme'
          },
          priceDifference: 1300
        }
      ]
    },
    {
      id: 'transport-1',
      type: 'transport',
      title: 'Private Airport Transfers',
      description: 'Round-trip luxury car service',
      price: 200,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2',
      details: {
        'Vehicle': 'Mercedes E-Class',
        'Type': 'Private Transfer',
        'Duration': '45 minutes per way'
      }
    }
  ]
};

export function ItineraryDetailPage() {
  const { id } = useParams();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [currentItinerary, setCurrentItinerary] = useState(MOCK_ITINERARY);

  const handleBook = () => {
    setIsBookingModalOpen(true);
  };

  const handleBookingSubmit = (data: BookingFormData) => {
    console.log('Booking submitted:', { itineraryId: id, ...data });
    setIsBookingModalOpen(false);
  };

  const handleComponentChange = (oldComponentId: string, newComponentId: string) => {
    const updatedComponents = currentItinerary.components.map(component => {
      if (component.id === oldComponentId) {
        const newComponent = component.alternatives?.find(alt => alt.id === newComponentId);
        if (newComponent) {
          return {
            ...newComponent,
            alternatives: [
              {
                ...component,
                priceDifference: -newComponent.priceDifference
              }
            ]
          };
        }
      }
      return component;
    });

    setCurrentItinerary({
      ...currentItinerary,
      components: updatedComponents,
      price: updatedComponents.reduce((total, component) => total + component.price, 0)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ItineraryHeader itinerary={currentItinerary} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <TripComponents
              components={currentItinerary.components}
              onComponentChange={handleComponentChange}
            />
            <DayByDay activities={currentItinerary.activities} />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ItineraryOverview itinerary={currentItinerary} onBook={handleBook} />
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title="Book Your Trip"
      >
        <BookingForm price={currentItinerary.price} onSubmit={handleBookingSubmit} />
      </Modal>
    </div>
  );
}