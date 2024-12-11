import { Button } from '@/components/ui/button';
import { Search, Calendar, Target, Edit2, Trash2, Plus } from 'lucide-react';
import { useState } from 'react';

interface Campaign {
  id: string;
  name: string;
  type: 'banner' | 'deal' | 'seasonal';
  status: 'active' | 'scheduled' | 'ended';
  startDate: string;
  endDate: string;
  target: string;
  performance: {
    impressions: number;
    clicks: number;
    conversions: number;
    revenue: number;
  };
}

interface CampaignListProps {
  onSelectCampaign: (id: string) => void;
  selectedCampaign: string | null;
}

export function CampaignList({ onSelectCampaign, selectedCampaign }: CampaignListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [campaigns] = useState<Campaign[]>([
    {
      id: '1',
      name: 'Summer Travel Sale',
      type: 'seasonal',
      status: 'active',
      startDate: '2024-06-01',
      endDate: '2024-08-31',
      target: 'All Users',
      performance: {
        impressions: 45000,
        clicks: 3200,
        conversions: 450,
        revenue: 125000,
      },
    },
    {
      id: '2',
      name: 'Early Bird Discount',
      type: 'deal',
      status: 'scheduled',
      startDate: '2024-04-01',
      endDate: '2024-04-15',
      target: 'New Users',
      performance: {
        impressions: 0,
        clicks: 0,
        conversions: 0,
        revenue: 0,
      },
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50';
      case 'scheduled':
        return 'text-blue-600 bg-blue-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'seasonal':
        return 'text-purple-600 bg-purple-50';
      case 'deal':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Marketing Campaigns</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search campaigns..."
                className="pl-10 rounded-md border border-gray-300 p-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Campaign
            </Button>
          </div>
        </div>
      </div>

      <div className="divide-y">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className={`p-6 hover:bg-gray-50 ${
              selectedCampaign === campaign.id ? 'bg-blue-50' : ''
            }`}
            onClick={() => onSelectCampaign(campaign.id)}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-medium">{campaign.name}</h3>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                      campaign.status
                    )}`}
                  >
                    {campaign.status}
                  </span>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getTypeColor(
                      campaign.type
                    )}`}
                  >
                    {campaign.type}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {campaign.startDate} - {campaign.endDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="h-4 w-4" />
                    {campaign.target}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Edit2 className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>

            {campaign.status === 'active' && (
              <div className="mt-4 grid grid-cols-4 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Impressions</p>
                  <p className="text-lg font-semibold">
                    {campaign.performance.impressions.toLocaleString()}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Clicks</p>
                  <p className="text-lg font-semibold">
                    {campaign.performance.clicks.toLocaleString()}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Conversions</p>
                  <p className="text-lg font-semibold">
                    {campaign.performance.conversions.toLocaleString()}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Revenue</p>
                  <p className="text-lg font-semibold">
                    ${campaign.performance.revenue.toLocaleString()}
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