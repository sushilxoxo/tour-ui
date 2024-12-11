import { Button } from '@/components/ui/button';
import { AlertCircle, Plane, Building2, MapPin, Shield } from 'lucide-react';
import { useState } from 'react';
import { Modal } from '@/components/ui/modal';

interface TripBookingsProps {
  bookings: any;
}

export function TripBookings({ bookings }: TripBookingsProps) {
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [action, setAction] = useState<'cancel' | 'modify' | null>(null);

  const getCancellationTerms = (type: string) => {
    switch (type) {
      case 'Flight':
        return {
          cancellation: [
            'Full refund if cancelled within 24 hours of booking',
            '80% refund if cancelled 60+ days before departure',
            '50% refund if cancelled 30-59 days before departure',
            'No refund if cancelled less than 30 days before departure'
          ],
          modification: [
            'Free date changes up to 72 hours before departure',
            'Name changes allowed for a fee of $100',
            'Route changes subject to fare difference',
            'Cabin upgrades available when space permits'
          ]
        };
      case 'Hotel':
        return {
          cancellation: [
            'Full refund if cancelled 7+ days before check-in',
            '50% refund if cancelled 3-6 days before check-in',
            'No refund if cancelled within 72 hours of check-in'
          ],
          modification: [
            'Free date changes up to 7 days before check-in',
            'Room upgrades available subject to availability',
            'Additional guests can be added for a fee'
          ]
        };
      case 'Tour':
        return {
          cancellation: [
            'Full refund if cancelled 14+ days before the tour',
            '50% refund if cancelled 7-13 days before the tour',
            'No refund if cancelled within 7 days of the tour'
          ],
          modification: [
            'Date changes allowed up to 72 hours before tour',
            'Guest changes allowed with no fee',
            'Tour time changes subject to availability'
          ]
        };
      default:
        return {
          cancellation: [],
          modification: []
        };
    }
  };

  const handleAction = (booking: any, actionType: 'cancel' | 'modify') => {
    setSelectedBooking(booking);
    setAction(actionType);
    setShowCancelModal(true);
  };

  const handleConfirmAction = () => {
    // Here you would implement the actual cancellation or modification logic
    console.log(`Confirming ${action} for booking:`, selectedBooking);
    setShowCancelModal(false);
    setSelectedBooking(null);
    setAction(null);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Bookings</h2>
        
        <div className="space-y-6">
          {/* Flight */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Plane className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{bookings.flight.details}</h3>
                  <p className="text-sm text-gray-600">Confirmation: {bookings.flight.confirmationNumber}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAction({ ...bookings.flight, type: 'Flight' }, 'cancel')}
                >
                  Cancel
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAction({ ...bookings.flight, type: 'Flight' }, 'modify')}
                >
                  Modify
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Departure</p>
                <p className="font-medium">{bookings.flight.departure.time}</p>
                <p className="text-sm">{bookings.flight.departure.location}</p>
                <p className="text-sm text-gray-600">{bookings.flight.departure.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Arrival</p>
                <p className="font-medium">{bookings.flight.arrival.time}</p>
                <p className="text-sm">{bookings.flight.arrival.location}</p>
                <p className="text-sm text-gray-600">{bookings.flight.arrival.date}</p>
              </div>
            </div>
          </div>

          {/* Hotel */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{bookings.hotel.name}</h3>
                  <p className="text-sm text-gray-600">Confirmation: {bookings.hotel.confirmationNumber}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAction({ ...bookings.hotel, type: 'Hotel' }, 'cancel')}
                >
                  Cancel
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAction({ ...bookings.hotel, type: 'Hotel' }, 'modify')}
                >
                  Modify
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm">
                <span className="text-gray-600">Check-in:</span> {bookings.hotel.checkIn}
              </p>
              <p className="text-sm">
                <span className="text-gray-600">Check-out:</span> {bookings.hotel.checkOut}
              </p>
              <p className="text-sm">
                <span className="text-gray-600">Room Type:</span> {bookings.hotel.roomType}
              </p>
              <p className="text-sm">
                <span className="text-gray-600">Address:</span> {bookings.hotel.address}
              </p>
            </div>
          </div>

          {/* Activities */}
          {bookings.activities.map((activity: any, index: number) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{activity.name}</h3>
                    <p className="text-sm text-gray-600">Confirmation: {activity.confirmationNumber}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAction({ ...activity, type: 'Tour' }, 'cancel')}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAction({ ...activity, type: 'Tour' }, 'modify')}
                  >
                    Modify
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="text-gray-600">Date:</span> {activity.date}
                </p>
                <p className="text-sm">
                  <span className="text-gray-600">Time:</span> {activity.time}
                </p>
                <p className="text-sm">
                  <span className="text-gray-600">Location:</span> {activity.location}
                </p>
              </div>
            </div>
          ))}

          {/* Insurance */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{bookings.insurance.provider}</h3>
                  <p className="text-sm text-gray-600">Policy: {bookings.insurance.policyNumber}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm">
                <span className="text-gray-600">Coverage Type:</span> {bookings.insurance.coverage}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Modal */}
      <Modal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        title={`${selectedBooking?.type} ${action === 'cancel' ? 'Cancellation' : 'Modification'} Terms`}
      >
        {selectedBooking && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-lg mb-4">
                <AlertCircle className="h-5 w-5" />
                <p className="text-sm">Please review the terms carefully before proceeding</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">
                    {action === 'cancel' ? 'Cancellation' : 'Modification'} Terms
                  </h3>
                  <ul className="space-y-2">
                    {getCancellationTerms(selectedBooking.type)[
                      action === 'cancel' ? 'cancellation' : 'modification'
                    ].map((term, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-gray-400" />
                        {term}
                      </li>
                    ))}
                  </ul>
                </div>

                {action === 'modify' && (
                  <div className="space-y-4">
                    <h3 className="font-medium">Modification Options</h3>
                    {selectedBooking.type === 'Flight' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            New Date
                          </label>
                          <input type="date" className="w-full rounded-md border border-gray-300 p-2" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cabin Class
                          </label>
                          <select className="w-full rounded-md border border-gray-300 p-2">
                            <option>Economy</option>
                            <option>Premium Economy</option>
                            <option>Business</option>
                            <option>First</option>
                          </select>
                        </div>
                      </>
                    )}
                    {selectedBooking.type === 'Hotel' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            New Check-in Date
                          </label>
                          <input type="date" className="w-full rounded-md border border-gray-300 p-2" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            New Check-out Date
                          </label>
                          <input type="date" className="w-full rounded-md border border-gray-300 p-2" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Room Type
                          </label>
                          <select className="w-full rounded-md border border-gray-300 p-2">
                            <option>Standard Room</option>
                            <option>Deluxe Room</option>
                            <option>Suite</option>
                          </select>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowCancelModal(false)}
              >
                Back
              </Button>
              <Button
                className="flex-1"
                onClick={handleConfirmAction}
              >
                Confirm {action === 'cancel' ? 'Cancellation' : 'Changes'}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}