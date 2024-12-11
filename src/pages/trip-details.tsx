import { Button } from '@/components/ui/button';
import { TripHeader } from '@/components/trips/trip-header';
import { TripItinerary } from '@/components/trips/trip-itinerary';
import { TripBookings } from '@/components/trips/trip-bookings';
import { TripDocuments } from '@/components/trips/trip-documents';
import { useParams } from 'react-router-dom';

export function TripDetailsPage() {
  const { id } = useParams();
  
  // Mock trip data - would come from API in real app
  const trip = {
    id: '1',
    title: 'Paris Getaway',
    status: 'confirmed',
    date: 'Apr 15 - Apr 20, 2024',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    bookings: {
      flight: {
        type: 'Flight',
        details: 'United Airlines UA123',
        departure: {
          date: 'Apr 15, 2024',
          time: '10:30 AM',
          location: 'JFK Airport',
        },
        arrival: {
          date: 'Apr 15, 2024',
          time: '10:30 PM',
          location: 'Charles de Gaulle Airport',
        },
        confirmationNumber: 'UA123456',
      },
      hotel: {
        type: 'Hotel',
        name: 'Le Grand Hotel Paris',
        checkIn: 'Apr 15, 2024',
        checkOut: 'Apr 20, 2024',
        address: '123 Rue de Rivoli, 75001 Paris',
        roomType: 'Deluxe Double Room',
        confirmationNumber: 'HB789012',
      },
      activities: [
        {
          type: 'Tour',
          name: 'Skip-the-Line Eiffel Tower Tour',
          date: 'Apr 16, 2024',
          time: '10:00 AM',
          location: 'Eiffel Tower',
          confirmationNumber: 'ET345678',
        },
        {
          type: 'Tour',
          name: 'Louvre Museum Guided Tour',
          date: 'Apr 17, 2024',
          time: '2:00 PM',
          location: 'Louvre Museum',
          confirmationNumber: 'LM901234',
        },
      ],
      insurance: {
        type: 'Insurance',
        provider: 'World Nomads',
        policyNumber: 'WN567890',
        coverage: 'Premium Protection',
        documents: ['policy.pdf', 'coverage-details.pdf'],
      },
    },
    documents: [
      {
        name: 'Flight Tickets',
        type: 'pdf',
        size: '2.4 MB',
        url: '#',
      },
      {
        name: 'Hotel Reservation',
        type: 'pdf',
        size: '1.8 MB',
        url: '#',
      },
      {
        name: 'Travel Insurance',
        type: 'pdf',
        size: '3.1 MB',
        url: '#',
      },
      {
        name: 'Tour Vouchers',
        type: 'pdf',
        size: '1.2 MB',
        url: '#',
      },
    ],
    itinerary: [
      {
        day: 1,
        date: 'Apr 15, 2024',
        title: 'Arrival & Welcome',
        items: [
          {
            time: '10:30 PM',
            title: 'Arrival at Charles de Gaulle Airport',
            type: 'transport',
          },
          {
            time: '11:30 PM',
            title: 'Check-in at Le Grand Hotel Paris',
            type: 'accommodation',
          },
        ],
      },
      {
        day: 2,
        date: 'Apr 16, 2024',
        title: 'Eiffel Tower & City Exploration',
        items: [
          {
            time: '9:00 AM',
            title: 'Breakfast at Hotel',
            type: 'meal',
          },
          {
            time: '10:00 AM',
            title: 'Eiffel Tower Tour',
            type: 'activity',
          },
          {
            time: '2:00 PM',
            title: 'Seine River Cruise',
            type: 'activity',
          },
          {
            time: '7:00 PM',
            title: 'Dinner at Le Jules Verne',
            type: 'meal',
          },
        ],
      },
      // Additional days...
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TripHeader trip={trip} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <TripItinerary itinerary={trip.itinerary} />
            <TripBookings bookings={trip.bookings} />
          </div>
          <div>
            <TripDocuments documents={trip.documents} />
          </div>
        </div>
      </div>
    </div>
  );
}