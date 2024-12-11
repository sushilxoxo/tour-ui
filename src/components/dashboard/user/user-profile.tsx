import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth-context';
import { Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export function UserProfile() {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Profile</h2>
        <Button variant="outline" size="sm" asChild>
          <Link to="/settings">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={user?.avatar}
          alt={`${user?.firstName} ${user?.lastName}`}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-medium">{`${user?.firstName} ${user?.lastName}`}</h3>
          <p className="text-sm text-gray-600">{user?.email}</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Member Since</p>
            <p className="font-medium">March 2024</p>
          </div>
          <div>
            <p className="text-gray-600">Trips Taken</p>
            <p className="font-medium">3</p>
          </div>
          <div>
            <p className="text-gray-600">Reviews</p>
            <p className="font-medium">5</p>
          </div>
          <div>
            <p className="text-gray-600">Travel Points</p>
            <p className="font-medium">1,250</p>
          </div>
        </div>
      </div>
    </div>
  );
}