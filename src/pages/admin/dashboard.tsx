import { AdminStats } from '@/components/admin/dashboard/admin-stats';
import { BookingChart } from '@/components/admin/dashboard/booking-chart';
import { SystemHealth } from '@/components/admin/dashboard/system-health';
import { ComplianceAlerts } from '@/components/admin/dashboard/compliance-alerts';
import { QuickActions } from '@/components/admin/dashboard/quick-actions';
import { RevenueMetrics } from '@/components/admin/dashboard/revenue-metrics';
import { AffiliateMetrics } from '@/components/admin/dashboard/affiliate-metrics';
import { UserAnalytics } from '@/components/admin/dashboard/user-analytics';
import { AffiliateCharts } from '@/components/admin/dashboard/affiliate-charts';

export function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Platform overview and key metrics</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <AdminStats />
            <BookingChart />
            <UserAnalytics />
            <AffiliateCharts />
            <RevenueMetrics />
            <AffiliateMetrics />
          </div>
          <div className="space-y-8">
            <SystemHealth />
            <ComplianceAlerts />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}