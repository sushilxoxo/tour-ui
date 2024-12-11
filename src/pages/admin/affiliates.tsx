import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { AffiliateList } from '@/components/admin/affiliates/affiliate-list';
import { AffiliateStats } from '@/components/admin/affiliates/affiliate-stats';
import { AffiliateApplications } from '@/components/admin/affiliates/affiliate-applications';
import { AffiliatePayouts } from '@/components/admin/affiliates/affiliate-payouts';
import { Plus } from 'lucide-react';

export function AffiliatesPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Affiliate Management</h1>
            <p className="text-gray-600">Manage affiliate partners and programs</p>
          </div>
          <Button onClick={() => setIsAddModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Affiliate
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <AffiliateStats />
            <AffiliateList />
            <AffiliatePayouts />
          </div>
          <div>
            <AffiliateApplications />
          </div>
        </div>
      </div>
    </div>
  );
}