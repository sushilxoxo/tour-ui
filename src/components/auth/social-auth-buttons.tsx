import { Button } from '@/components/ui/button';
import { Apple, Chrome, Facebook } from 'lucide-react';

interface SocialAuthButtonsProps {
  onGoogleClick: () => void;
  onAppleClick: () => void;
  onFacebookClick: () => void;
  isLoading?: boolean;
}

export function SocialAuthButtons({
  onGoogleClick,
  onAppleClick,
  onFacebookClick,
  isLoading = false,
}: SocialAuthButtonsProps) {
  return (
    <div className="space-y-3">
      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={onGoogleClick}
        disabled={isLoading}
      >
        <Chrome className="h-5 w-5 mr-2" />
        Continue with Google
      </Button>
      
      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={onAppleClick}
        disabled={isLoading}
      >
        <Apple className="h-5 w-5 mr-2" />
        Continue with Apple
      </Button>

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={onFacebookClick}
        disabled={isLoading}
      >
        <Facebook className="h-5 w-5 mr-2" />
        Continue with Facebook
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with email</span>
        </div>
      </div>
    </div>
  );
}