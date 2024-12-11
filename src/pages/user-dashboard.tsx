import { UserProfile } from '@/components/dashboard/user/user-profile';
import { UpcomingTrips } from '@/components/dashboard/user/upcoming-trips';
import { SavedItineraries } from '@/components/dashboard/user/saved-itineraries';
import { RecentActivity } from '@/components/dashboard/user/recent-activity';
import { useAuth } from '@/context/auth-context';

export function UserDashboardPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.firstName}!</h1>
            <p className="text-gray-600">Manage your trips and discover new destinations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <UpcomingTrips />
            <SavedItineraries />
          </div>
          <div className="space-y-8">
            <UserProfile />
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
}