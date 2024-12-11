import { useState } from 'react';
import { MarketingStats } from '@/components/admin/marketing/marketing-stats';
import { CampaignList } from '@/components/admin/marketing/campaign-list';
import { UserSegments } from '@/components/admin/marketing/user-segments';
import { LoyaltyPrograms } from '@/components/admin/marketing/loyalty-programs';
import { ABTests } from '@/components/admin/marketing/ab-tests';
import { EmailCampaigns } from '@/components/admin/marketing/email-campaigns';

export function MarketingPage() {
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Marketing & Promotions</h1>
          <p className="text-gray-600">Manage campaigns, promotions, and user engagement</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <MarketingStats />
            <CampaignList onSelectCampaign={setSelectedCampaign} selectedCampaign={selectedCampaign} />
            <ABTests />
            <EmailCampaigns />
          </div>
          <div className="space-y-8">
            <UserSegments />
            <LoyaltyPrograms />
          </div>
        </div>
      </div>
    </div>
  );
}