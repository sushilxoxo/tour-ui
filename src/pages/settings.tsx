import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth-context';
import { Camera, Bell, Lock, Globe, CreditCard, UserCircle } from 'lucide-react';

export function SettingsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: UserCircle },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'preferences', label: 'Preferences', icon: Globe },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your account preferences and settings</p>
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
                  <h2 className="text-lg font-semibold mb-6">Profile Information</h2>
                  
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
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue={user?.firstName}
                          className="w-full rounded-md border border-gray-300 p-2.5"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue={user?.lastName}
                          className="w-full rounded-md border border-gray-300 p-2.5"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        className="w-full rounded-md border border-gray-300 p-2.5"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        rows={4}
                        className="w-full rounded-md border border-gray-300 p-2.5"
                        placeholder="Tell us about yourself..."
                      />
                    </div>

                    <div>
                      <Button type="submit">Save Changes</Button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-6">Notification Preferences</h2>
                  <div className="space-y-4">
                    {[
                      'New trip recommendations',
                      'Price alerts',
                      'Booking confirmations',
                      'Travel tips and updates',
                      'Marketing communications',
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
                  </form>
                </div>
              )}

              {activeTab === 'preferences' && (
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-6">Travel Preferences</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Currency
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