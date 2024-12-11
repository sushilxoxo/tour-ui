import { Button } from '@/components/ui/button';
import { Mail, Plus, Send } from 'lucide-react';

interface EmailCampaign {
  id: string;
  name: string;
  subject: string;
  segment: string;
  status: 'draft' | 'scheduled' | 'sent';
  sendDate: string;
  stats?: {
    sent: number;
    opened: number;
    clicked: number;
  };
}

export function EmailCampaigns() {
  const campaigns: EmailCampaign[] = [
    {
      id: '1',
      name: 'Spring Break Deals',
      subject: 'Exclusive Spring Break Offers Inside! 🌴',
      segment: 'All Subscribers',
      status: 'sent',
      sendDate: '2024-03-15T10:00:00Z',
      stats: {
        sent: 24500,
        opened: 12250,
        clicked: 3675,
      },
    },
    {
      id: '2',
      name: 'Welcome Series',
      subject: 'Welcome to TravelGo! Start Your Journey',
      segment: 'New Users',
      status: 'scheduled',
      sendDate: '2024-03-22T10:00:00Z',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent':
        return 'text-green-600 bg-green-50';
      case 'scheduled':
        return 'text-blue-600 bg-blue-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Email Campaigns</h2>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Campaign
          </Button>
        </div>
      </div>

      <div className="divide-y">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{campaign.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{campaign.subject}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span>{campaign.segment}</span>
                    <span>
                      {new Date(campaign.sendDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                    campaign.status
                  )}`}
                >
                  {campaign.status}
                </span>
                {campaign.status === 'draft' && (
                  <Button size="sm" className="mt-2">
                    <Send className="h-4 w-4 mr-2" />
                    Send Now
                  </Button>
                )}
              </div>
            </div>

            {campaign.stats && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Sent</p>
                  <p className="text-lg font-semibold">
                    {campaign.stats.sent.toLocaleString()}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Opened</p>
                  <p className="text-lg font-semibold">
                    {((campaign.stats.opened / campaign.stats.sent) * 100).toFixed(1)}%
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Clicked</p>
                  <p className="text-lg font-semibold">
                    {((campaign.stats.clicked / campaign.stats.sent) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}