import { Button } from '@/components/ui/button';
import { DashboardStats } from '@/components/dashboard/dashboard-stats';
import { ItineraryList } from '@/components/dashboard/itinerary-list';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { EarningsChart } from '@/components/dashboard/earnings-chart';
import { CreatorLevel } from '@/components/creators/creator-level';
import { CreatorAchievements } from '@/components/creators/creator-achievements';
import { CreatorRewards } from '@/components/creators/creator-rewards';
import { PenSquare, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CreatorDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Creator Dashboard</h1>
            <p className="text-gray-600">Welcome back, Emily Chen</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link to="/creator/settings">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </Button>
            <Button asChild>
              <Link to="/creator/new-itinerary">
                <PenSquare className="h-4 w-4 mr-2" />
                Create New Itinerary
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <DashboardStats />
          </div>
          <div>
            <CreatorLevel />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Earnings Overview</h2>
              <EarningsChart />
            </div>
            <ItineraryList />
            <CreatorAchievements />
          </div>
          <div className="space-y-8">
            <RecentActivity />
            <CreatorRewards />
          </div>
        </div>
      </div>
    </div>
  );
}