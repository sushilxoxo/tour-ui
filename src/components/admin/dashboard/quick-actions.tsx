import { Button } from '@/components/ui/button';
import { Settings, UserPlus, Lock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function QuickActions() {
  const actions = [
    {
      label: 'Manage Roles',
      icon: <UserPlus className="h-5 w-5" />,
      href: '/admin/roles',
    },
    {
      label: 'System Settings',
      icon: <Settings className="h-5 w-5" />,
      href: '/admin/settings',
    },
    {
      label: 'Security',
      icon: <Lock className="h-5 w-5" />,
      href: '/admin/security',
    },
    {
      label: 'Site Config',
      icon: <Globe className="h-5 w-5" />,
      href: '/admin/config',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant="outline"
            className="flex items-center gap-2"
            asChild
          >
            <Link to={action.href}>
              {action.icon}
              {action.label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}