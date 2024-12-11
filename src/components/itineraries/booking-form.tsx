import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown, ChevronUp, Users } from 'lucide-react';
import { useState } from 'react';

interface BookingFormProps {
  price: number;
  onSubmit: (data: BookingFormData) => void;
}

export interface BookingFormData {
  startDate: string;
  guests: number;
  specialRequests: string;
}

export function BookingForm({ price, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    startDate: '',
    guests: 2,
    specialRequests: '',
  });
  const [showBreakdown, setShowBreakdown] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const basePrice = price * formData.guests;
  const serviceFee = Math.round(basePrice * 0.10); // 10% service fee
  const taxRate = 0.08; // 8% tax
  const tax = Math.round(basePrice * taxRate);
  const totalPrice = basePrice + serviceFee + tax;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Start Date
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="date"
            required
            className="pl-10 w-full rounded-md border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Guests
        </label>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <select
            className="pl-10 w-full rounded-md border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Special Requests
        </label>
        <textarea
          className="w-full rounded-md border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          rows={3}
          placeholder="Any dietary requirements or special requests?"
          value={formData.specialRequests}
          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
        />
      </div>

      <div className="border-t pt-4">
        <button
          type="button"
          className="flex items-center justify-between w-full mb-4 text-sm text-gray-600 hover:text-gray-900"
          onClick={() => setShowBreakdown(!showBreakdown)}
        >
          <span>Price Details</span>
          {showBreakdown ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {showBreakdown && (
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between">
              <span>Base Price ({formData.guests} {formData.guests === 1 ? 'guest' : 'guests'})</span>
              <span>${basePrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Service Fee</span>
              <span>${serviceFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toLocaleString()}</span>
            </div>
            <div className="border-t pt-2 font-medium">
              <div className="flex justify-between">
                <span>Total</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-600">Total Price</p>
            <p className="text-2xl font-bold">${totalPrice.toLocaleString()}</p>
            <p className="text-sm text-gray-600">for {formData.guests} guests</p>
          </div>
        </div>
        <Button type="submit" className="w-full">Confirm Booking</Button>
      </div>
    </form>
  );
}