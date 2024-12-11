import { Button } from '@/components/ui/button';
import { Camera, Globe, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

export const EXPERTISE_OPTIONS = [
  'Adventure Travel',
  'Luxury Travel',
  'Budget Travel',
  'Solo Travel',
  'Family Travel',
  'Food & Culinary',
  'Cultural Experiences',
  'Photography Tours',
  'Sustainable Travel',
  'Digital Nomad',
  'Wellness Travel',
];

export const LANGUAGE_OPTIONS = [
  'English',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Japanese',
  'Mandarin',
  'Korean',
  'Arabic',
  'Hindi',
];

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  website: string;
  instagram: string;
  youtube: string;
  bio: string;
  expertise: string[];
  languages: string[];
  avatar: string | null;
}

interface CreatorSignupFormProps {
  formData: FormData;
  errors: Partial<FormData>;
  step: number;
  onUpdateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function CreatorSignupForm({
  formData,
  errors,
  step,
  onUpdateFormData,
  onNext,
  onBack,
  onSubmit,
}: CreatorSignupFormProps) {
  const toggleExpertise = (expertise: string) => {
    onUpdateFormData({
      expertise: formData.expertise.includes(expertise)
        ? formData.expertise.filter((e) => e !== expertise)
        : [...formData.expertise, expertise],
    });
  };

  const toggleLanguage = (language: string) => {
    onUpdateFormData({
      languages: formData.languages.includes(language)
        ? formData.languages.filter((l) => l !== language)
        : [...formData.languages, language],
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdateFormData({ avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {step === 1 && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                className={`w-full rounded-md border ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                } p-2.5 focus:border-blue-500 focus:ring-blue-500`}
                value={formData.firstName}
                onChange={(e) =>
                  onUpdateFormData({ firstName: e.target.value })
                }
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                className={`w-full rounded-md border ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                } p-2.5 focus:border-blue-500 focus:ring-blue-500`}
                value={formData.lastName}
                onChange={(e) =>
                  onUpdateFormData({ lastName: e.target.value })
                }
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className={`w-full rounded-md border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } p-2.5 focus:border-blue-500 focus:ring-blue-500`}
              value={formData.email}
              onChange={(e) => onUpdateFormData({ email: e.target.value })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              className={`w-full rounded-md border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } p-2.5 focus:border-blue-500 focus:ring-blue-500`}
              value={formData.password}
              onChange={(e) =>
                onUpdateFormData({ password: e.target.value })
              }
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Picture
            </label>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                {formData.avatar ? (
                  <img
                    src={formData.avatar}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Camera className="h-8 w-8 text-gray-400" />
                )}
              </div>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="avatar-upload"
                  onChange={handleFileUpload}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('avatar-upload')?.click()}
                >
                  Upload Photo
                </Button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              className={`w-full rounded-md border ${
                errors.bio ? 'border-red-500' : 'border-gray-300'
              } p-2.5 focus:border-blue-500 focus:ring-blue-500`}
              rows={4}
              value={formData.bio}
              onChange={(e) => onUpdateFormData({ bio: e.target.value })}
              placeholder="Tell us about your travel experience and expertise..."
            />
            {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Areas of Expertise
            </label>
            <div className="grid grid-cols-2 gap-2">
              {EXPERTISE_OPTIONS.map((expertise) => (
                <button
                  key={expertise}
                  type="button"
                  className={`p-2 rounded-md text-sm ${
                    formData.expertise.includes(expertise)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => toggleExpertise(expertise)}
                >
                  {expertise}
                </button>
              ))}
            </div>
            {errors.expertise && (
              <p className="text-red-500 text-sm mt-1">{errors.expertise}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Languages
            </label>
            <div className="grid grid-cols-2 gap-2">
              {LANGUAGE_OPTIONS.map((language) => (
                <button
                  key={language}
                  type="button"
                  className={`p-2 rounded-md text-sm ${
                    formData.languages.includes(language)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => toggleLanguage(language)}
                >
                  {language}
                </button>
              ))}
            </div>
            {errors.languages && (
              <p className="text-red-500 text-sm mt-1">{errors.languages}</p>
            )}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="url"
                className="pl-10 w-full rounded-md border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-blue-500"
                placeholder="https://your-website.com"
                value={formData.website}
                onChange={(e) =>
                  onUpdateFormData({ website: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instagram Handle
            </label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                className="pl-10 w-full rounded-md border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-blue-500"
                placeholder="@username"
                value={formData.instagram}
                onChange={(e) =>
                  onUpdateFormData({ instagram: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              YouTube Channel
            </label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                className="pl-10 w-full rounded-md border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-blue-500"
                placeholder="youtube.com/channel/..."
                value={formData.youtube}
                onChange={(e) =>
                  onUpdateFormData({ youtube: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-between">
        {step > 1 && (
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
        )}
        {step < 3 ? (
          <Button type="button" onClick={onNext}>
            Next
          </Button>
        ) : (
          <Button type="submit">Complete Signup</Button>
        )}
      </div>
    </form>
  );
}