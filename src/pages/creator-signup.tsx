import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreatorSignupForm, FormData } from '@/components/creators/creator-signup-form';
import { SocialAuthButtons } from '@/components/auth/social-auth-buttons';

export function CreatorSignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    website: '',
    instagram: '',
    youtube: '',
    bio: '',
    expertise: [],
    languages: [],
    avatar: null,
  });

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleGoogleSignup = async () => {
    try {
      // Implement Google Sign-in logic here
      console.log('Google signup clicked');
      // On success:
      navigate('/creator-signup-success');
    } catch (error) {
      console.error('Google signup failed:', error);
    }
  };

  const handleAppleSignup = async () => {
    try {
      // Implement Apple Sign-in logic here
      console.log('Apple signup clicked');
      // On success:
      navigate('/creator-signup-success');
    } catch (error) {
      console.error('Apple signup failed:', error);
    }
  };

  const handleFacebookSignup = async () => {
    try {
      // Implement Facebook Sign-in logic here
      console.log('Facebook signup clicked');
      // On success:
      navigate('/creator-signup-success');
    } catch (error) {
      console.error('Facebook signup failed:', error);
    }
  };

  const validateStep = (currentStep: number) => {
    const newErrors: Partial<FormData> = {};

    if (currentStep === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.password) newErrors.password = 'Password is required';
      else if (formData.password.length < 8)
        newErrors.password = 'Password must be at least 8 characters';
    }

    if (currentStep === 2) {
      if (!formData.bio) newErrors.bio = 'Bio is required';
      if (formData.expertise.length === 0) newErrors.expertise = 'Select at least one expertise';
      if (formData.languages.length === 0) newErrors.languages = 'Select at least one language';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      try {
        // Implement form submission logic here
        console.log('Form submitted:', formData);
        // On success:
        navigate('/creator-signup-success');
      } catch (error) {
        console.error('Form submission failed:', error);
        // Handle error appropriately
      }
    }
  };

  const handleUpdateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Become a Creator</h1>
            <p className="text-gray-600 mt-2">Share your travel expertise with the world</p>
          </div>

          {step === 1 && (
            <div className="mb-8">
              <SocialAuthButtons
                onGoogleClick={handleGoogleSignup}
                onAppleClick={handleAppleSignup}
                onFacebookClick={handleFacebookSignup}
              />
            </div>
          )}

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      i <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {i}
                  </div>
                  {i < 3 && (
                    <div
                      className={`w-24 h-1 ${
                        i < step ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Account</span>
              <span>Profile</span>
              <span>Social</span>
            </div>
          </div>

          <CreatorSignupForm
            formData={formData}
            errors={errors}
            step={step}
            onUpdateFormData={handleUpdateFormData}
            onNext={handleNext}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}