import { Button } from '@/components/ui/button';
import { BarChart2, Plus } from 'lucide-react';

interface Test {
  id: string;
  name: string;
  status: 'running' | 'completed' | 'draft';
  variants: {
    name: string;
    traffic: number;
    conversions: number;
  }[];
  startDate: string;
  endDate: string;
}

export function ABTests() {
  const tests: Test[] = [
    {
      id: '1',
      name: 'Homepage Hero Layout',
      status: 'running',
      variants: [
        { name: 'Control', traffic: 5000, conversions: 250 },
        { name: 'Variant A', traffic: 4850, conversions: 290 },
      ],
      startDate: '2024-03-15',
      endDate: '2024-03-29',
    },
    {
      id: '2',
      name: 'Booking Flow',
      status: 'completed',
      variants: [
        { name: 'Control', traffic: 4200, conversions: 210 },
        { name: 'Variant A', traffic: 4150, conversions: 245 },
      ],
      startDate: '2024-03-01',
      endDate: '2024-03-14',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
        return 'text-green-600 bg-green-50';
      case 'completed':
        return 'text-blue-600 bg-blue-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">A/B Tests</h2>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Test
          </Button>
        </div>
      </div>

      <div className="divide-y">
        {tests.map((test) => (
          <div key={test.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{test.name}</h3>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                      test.status
                    )}`}
                  >
                    {test.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {test.startDate} - {test.endDate}
                </p>
              </div>
              <Button variant="outline" size="sm">
                <BarChart2 className="h-4 w-4 mr-2" />
                View Results
              </Button>
            </div>

            <div className="space-y-4">
              {test.variants.map((variant) => (
                <div key={variant.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{variant.name}</span>
                    <span>
                      {((variant.conversions / variant.traffic) * 100).toFixed(1)}%
                      conversion rate
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${(variant.conversions / variant.traffic) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{variant.traffic.toLocaleString()} visitors</span>
                    <span>{variant.conversions.toLocaleString()} conversions</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}