import { Button } from '@/components/ui/button';
import { Clock, ExternalLink } from 'lucide-react';

interface Application {
  id: string;
  name: string;
  website: string;
  email: string;
  status: 'pending' | 'approved' | 'rejected';
  appliedAt: string;
}

export function AffiliateApplications() {
  const applications: Application[] = [
    {
      id: '1',
      name: 'Global Nomads',
      website: 'globalnomads.com',
      email: 'partner@globalnomads.com',
      status: 'pending',
      appliedAt: '2024-03-19T10:30:00Z',
    },
    {
      id: '2',
      name: 'Travel Insights',
      website: 'travelinsights.com',
      email: 'hello@travelinsights.com',
      status: 'pending',
      appliedAt: '2024-03-18T15:45:00Z',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold">Pending Applications</h2>
      </div>
      <div className="divide-y">
        {applications.map((application) => (
          <div key={application.id} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium">{application.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <a
                    href={`https://${application.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    {application.website}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  {new Date(application.appliedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button size="sm" className="w-full">
                Approve
              </Button>
              <Button size="sm" variant="outline" className="w-full">
                Reject
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}