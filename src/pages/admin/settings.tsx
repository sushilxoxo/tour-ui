import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { AlertCircle, Globe, Lock, Mail, Server, Settings, Shield } from 'lucide-react';

interface SystemSetting {
  id: string;
  category: string;
  key: string;
  value: string;
  type: 'text' | 'number' | 'boolean' | 'select';
  options?: string[];
  description: string;
  lastUpdated: string;
}

export function SystemSettingsPage() {
  const [settings, setSettings] = useState<SystemSetting[]>([
    {
      id: '1',
      category: 'General',
      key: 'site_name',
      value: 'TravelGo',
      type: 'text',
      description: 'Name of the platform displayed across the site',
      lastUpdated: '2024-03-15',
    },
    {
      id: '2',
      category: 'General',
      key: 'maintenance_mode',
      value: 'false',
      type: 'boolean',
      description: 'Enable maintenance mode to restrict site access',
      lastUpdated: '2024-03-15',
    },
    {
      id: '3',
      category: 'Security',
      key: 'max_login_attempts',
      value: '5',
      type: 'number',
      description: 'Maximum failed login attempts before account lockout',
      lastUpdated: '2024-03-15',
    },
    {
      id: '4',
      category: 'Security',
      key: 'session_timeout',
      value: '30',
      type: 'number',
      description: 'Session timeout in minutes',
      lastUpdated: '2024-03-15',
    },
    {
      id: '5',
      category: 'Email',
      key: 'smtp_host',
      value: 'smtp.example.com',
      type: 'text',
      description: 'SMTP server hostname',
      lastUpdated: '2024-03-15',
    },
    {
      id: '6',
      category: 'Email',
      key: 'smtp_port',
      value: '587',
      type: 'number',
      description: 'SMTP server port',
      lastUpdated: '2024-03-15',
    },
    {
      id: '7',
      category: 'Booking',
      key: 'default_currency',
      value: 'USD',
      type: 'select',
      options: ['USD', 'EUR', 'GBP', 'JPY'],
      description: 'Default currency for prices and payments',
      lastUpdated: '2024-03-15',
    },
    {
      id: '8',
      category: 'Booking',
      key: 'commission_rate',
      value: '15',
      type: 'number',
      description: 'Default commission rate for creators (%)',
      lastUpdated: '2024-03-15',
    },
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState<SystemSetting | null>(null);
  const [editValue, setEditValue] = useState('');

  const categories = Array.from(new Set(settings.map(s => s.category)));

  const handleSave = () => {
    if (!selectedSetting) return;
    const updatedSettings = settings.map(setting =>
      setting.id === selectedSetting.id
        ? {
            ...setting,
            value: editValue,
            lastUpdated: new Date().toISOString().split('T')[0],
          }
        : setting
    );
    setSettings(updatedSettings);
    setIsEditModalOpen(false);
    setSelectedSetting(null);
    setEditValue('');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'General':
        return <Settings className="h-5 w-5" />;
      case 'Security':
        return <Shield className="h-5 w-5" />;
      case 'Email':
        return <Mail className="h-5 w-5" />;
      case 'Booking':
        return <Globe className="h-5 w-5" />;
      default:
        return <Server className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
            <p className="text-gray-600">Configure global platform settings</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {categories.map(category => (
            <div key={category} className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-center gap-2">
                  <div className="text-blue-600">{getCategoryIcon(category)}</div>
                  <h2 className="text-lg font-semibold">{category} Settings</h2>
                </div>
              </div>

              <div className="divide-y">
                {settings
                  .filter(setting => setting.category === category)
                  .map(setting => (
                    <div key={setting.id} className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">{setting.key}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {setting.description}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="text-sm">
                              <span className="text-gray-500">Current value: </span>
                              <code className="bg-gray-100 px-2 py-1 rounded">
                                {setting.value}
                              </code>
                            </div>
                            <div className="text-sm text-gray-500">
                              Last updated: {setting.lastUpdated}
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedSetting(setting);
                            setEditValue(setting.value);
                            setIsEditModalOpen(true);
                          }}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedSetting(null);
          setEditValue('');
        }}
        title="Edit Setting"
      >
        {selectedSetting && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-lg">
              <AlertCircle className="h-5 w-5" />
              <p className="text-sm">
                Changing system settings may affect platform functionality. Please proceed with caution.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {selectedSetting.key}
              </label>
              {selectedSetting.type === 'boolean' ? (
                <select
                  className="w-full rounded-md border border-gray-300 p-2.5"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                >
                  <option value="true">Enabled</option>
                  <option value="false">Disabled</option>
                </select>
              ) : selectedSetting.type === 'select' ? (
                <select
                  className="w-full rounded-md border border-gray-300 p-2.5"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                >
                  {selectedSetting.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={selectedSetting.type === 'number' ? 'number' : 'text'}
                  className="w-full rounded-md border border-gray-300 p-2.5"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              )}
              <p className="mt-2 text-sm text-gray-500">{selectedSetting.description}</p>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setIsEditModalOpen(false);
                  setSelectedSetting(null);
                  setEditValue('');
                }}
              >
                Cancel
              </Button>
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}