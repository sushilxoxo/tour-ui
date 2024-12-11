import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth-context';
import { Camera, Bell, Lock, Globe, CreditCard, UserCircle, DollarSign, BookOpen, Share2 } from 'lucide-react';

export function CreatorSettingsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Creator Profile', icon: UserCircle },
    { id: 'earnings', label: 'Earnings & Payouts', icon: DollarSign },
    { id: 'itineraries', label: 'Itinerary Settings', icon: BookOpen },
    { id: 'social', label: 'Social Links', icon: Share2 },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'preferences', label: 'Preferences', icon: Globe },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Creator Settings</h1>
          <p className="text-gray-600">Manage your creator profile and preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm">
              {activeTab === 'profile' && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-6">Creator Profile</h2>
                  
                  <div className="mb-8">
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <img
                          src={user?.avatar}
                          alt={`${user?.firstName} ${user?.lastName}`}
                          className="w-24 h-24 rounded-full"
                        />
                        <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                          <Camera className="h-4 w-4" />
                        </button>
                      </div>
                      <div>
                        <h3 className="font-medium">{`${user?.firstName} ${user?.lastName}`}</h3>
                        <p className="text-sm text-gray-600">{user?.email}</p>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Display Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your creator display name"
                          className="w-full rounded-md border border-gray-300 p-2.5"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          placeholder="City, Country"
                          className="w-full rounded-md border border-gray-300 p-2.5"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        rows={4}
                        className="w-full rounded-md border border-gray-300 p-2.5"
                        placeholder="Tell travelers about your expertise and experience..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Areas of Expertise
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          'Adventure Travel',
                          'Luxury Travel',
                          'Budget Travel',
                          'Cultural Experiences',
                          'Food & Culinary',
                          'Photography Tours',
                          'Wellness Travel',
                          'Digital Nomad',
                        ].map((expertise) => (
                          <label key={expertise} className="flex items-center gap-2">
                            <input type="checkbox" className="rounded text-blue-600" />
                            <span>{expertise}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Languages
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          'English',
                          'Spanish',
                          'French',
                          'German',
                          'Italian',
                          'Japanese',
                          'Mandarin',
                          'Hindi',
                        ].map((language) => (
                          <label key={language} className="flex items-center gap-2">
                            <input type="checkbox" className="rounded text-blue-600" />
                            <span>{language}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Button type="submit">Save Changes</Button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'earnings' && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-6">Earnings & Payouts</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Available Balance</p>
                        <p className="text-2xl font-bold text-gray-900">$2,450.00</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Pending Earnings</p>
                        <p className="text-2xl font-bold text-gray-900">$850.00</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Total Earned</p>
                        <p className="text-2xl font-bold text-gray-900">$12,450.00</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-4">Payout Method</h3>
                      <select className="w-full rounded-md border border-gray-300 p-2.5 mb-4">
                        <option>Bank Transfer (ACH)</option>
                        <option>PayPal</option>
                        <option>Stripe</option>
                      </select>
                      <Button>Set Up Payout Method</Button>
                    </div>

                    <div>
                      <h3 className="font-medium mb-4">Payout Schedule</h3>
                      <select className="w-full rounded-md border border-gray-300 p-2.5">
                        <option>Weekly</option>
                        <option>Bi-weekly</option>
                        <option>Monthly</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'itineraries' && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-6">Itinerary Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Default Pricing Strategy
                      </label>
                      <select className="w-full rounded-md border border-gray-300 p-2.5">
                        <option>Fixed Price</option>
                        <option>Dynamic Pricing</option>
                        <option>Seasonal Pricing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Booking Window
                      </label>
                      <select className="w-full rounded-md border border-gray-300 p-2.5">
                        <option>1 month in advance</option>
                        <option>2 months in advance</option>
                        <option>3 months in advance</option>
                        <option>6 months in advance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cancellation Policy
                      </label>
                      <select className="w-full rounded-md border border-gray-300 p-2.5">
                        <option>Flexible</option>
                        <option>Moderate</option>
                        <option>Strict</option>
                      </select>
                    </div>

                    <div>
                      <Button>Save Settings</Button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'social' && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-6">Social Links</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        placeholder="https://your-website.com"
                        className="w-full rounded-md border border-gray-300 p-2.5"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Instagram
                      </label>
                      <input
                        type="text"
                        placeholder="@username"
                        className="w-full rounded-md border border-gray-300 p-2.5"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        YouTube
                      </label>
                      <input
                        type="text"
                        placeholder="Channel URL"
                        className="w-full rounded-md border border-gray-300 p-2.5"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        TikTok
                      </label>
                      <input
                        type="text"
                        placeholder="@username"
                        className="w-full rounded-md border border-gray-300 p-2.5"
                      />
                    </div>

                    <div>
                      <Button type="submit">Save Links</Button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-6">Notification Preferences</h2>
                  <div className="space-y-4">
                    {[
                      'New bookings',
                      'Booking cancellations',
                      'Reviews and ratings',
                      'Questions from travelers',
                      'Payout notifications',
                      'Creator program updates',
                      'Marketing opportunities',
                    ].map((item) => (
                      <label key={item} className="flex items-center gap-3">
                        <input type="checkbox" className="rounded text-blue-600" />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button>Save Preferences</Button>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-6">Security Settings</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full rounded-md border border-gray-300 p-2.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full rounded-md border border-gray-300 p-2.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full rounded-md border border-gray-300 p-2.5"
                      />
                    </div>
                    <div>
                      <Button type="submit">Update Password</Button>
                    </div>

                    <div className="pt-6 border-t">
                      <h3 className="font-medium mb-4">Two-Factor Authentication</h3>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'preferences' && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-6">Preferences</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Default Currency
                      </label>
                      <select className="w-full rounded-md border border-gray-300 p-2.5">
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                        <option>GBP (£)</option>
                        <option>JPY (¥)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Language
                      </label>
                      <select className="w-full rounded-md border border-gray-300 p-2.5">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timezone
                      </label>
                      <select className="w-full rounded-md border border-gray-300 p-2.5">
                        <option>Pacific Time (PT)</option>
                        <option>Mountain Time (MT)</option>
                        <option>Central Time (CT)</option>
                        <option>Eastern Time (ET)</option>
                      </select>
                    </div>
                    <div>
                      <Button>Save Preferences</Button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'payment' && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-6">Payment Methods</h2>
                  <div className="space-y-4 mb-6">
                    <div className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <span className="text-sm font-medium">VISA</span>
                        </div>
                        <div>
                          <p className="font-medium">•••• 4242</p>
                          <p className="text-sm text-gray-600">Expires 12/24</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Remove</Button>
                    </div>
                  </div>
                  <Button>Add Payment Method</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}