import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CreatorSignupSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm">
        <div className="text-center">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome Aboard!</h2>
          <p className="mt-2 text-lg text-gray-600">
            Your creator account has been successfully created.
          </p>
        </div>

        <div className="space-y-4 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900">Next Steps:</h3>
            <ul className="mt-2 space-y-2 text-blue-800">
              <li className="flex items-start">
                <span className="mr-2">1.</span>
                <span>Complete your creator profile with detailed information</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                <span>Create your first itinerary using our AI-powered tools</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                <span>Connect your payment details to receive earnings</span>
              </li>
            </ul>
          </div>

          <Button className="w-full" asChild>
            <Link to="/creator-dashboard">
              Go to Creator Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}