import { BarChart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BookingChart() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold">Booking Volume</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 Days
          </Button>
        </div>
      </div>
      
      <div className="h-64 flex items-center justify-center text-gray-500">
        Chart will be implemented with a charting library based on requirements
      </div>
    </div>
  );
}