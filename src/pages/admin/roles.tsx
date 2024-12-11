import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { Edit2, Plus, Shield, Trash2, User } from 'lucide-react';

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  usersCount: number;
}

export function RolesPage() {
  const [roles, setRoles] = useState<Role[]>([
    {
      id: '1',
      name: 'Admin',
      description: 'Full system access and control',
      permissions: ['all'],
      usersCount: 5,
    },
    {
      id: '2',
      name: 'Creator',
      description: 'Can create and manage itineraries',
      permissions: ['create_itinerary', 'edit_itinerary', 'view_analytics'],
      usersCount: 128,
    },
    {
      id: '3',
      name: 'Support',
      description: 'Customer service and booking management',
      permissions: ['view_bookings', 'manage_support', 'view_users'],
      usersCount: 24,
    },
    {
      id: '4',
      name: 'User',
      description: 'Standard user access',
      permissions: ['book_itinerary', 'view_itinerary'],
      usersCount: 15420,
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    permissions: [] as string[],
  });

  const allPermissions = [
    { id: 'all', label: 'Full Access' },
    { id: 'create_itinerary', label: 'Create Itineraries' },
    { id: 'edit_itinerary', label: 'Edit Itineraries' },
    { id: 'view_analytics', label: 'View Analytics' },
    { id: 'view_bookings', label: 'View Bookings' },
    { id: 'manage_support', label: 'Manage Support' },
    { id: 'view_users', label: 'View Users' },
    { id: 'book_itinerary', label: 'Book Itineraries' },
    { id: 'view_itinerary', label: 'View Itineraries' },
  ];

  const handleAddRole = () => {
    const newRole: Role = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      permissions: formData.permissions,
      usersCount: 0,
    };
    setRoles([...roles, newRole]);
    setIsAddModalOpen(false);
    setFormData({ name: '', description: '', permissions: [] });
  };

  const handleEditRole = () => {
    if (!selectedRole) return;
    const updatedRoles = roles.map((role) =>
      role.id === selectedRole.id
        ? {
            ...role,
            name: formData.name,
            description: formData.description,
            permissions: formData.permissions,
          }
        : role
    );
    setRoles(updatedRoles);
    setIsEditModalOpen(false);
    setSelectedRole(null);
    setFormData({ name: '', description: '', permissions: [] });
  };

  const handleDeleteRole = (roleId: string) => {
    setRoles(roles.filter((role) => role.id !== roleId));
  };

  const RoleModal = ({ isEdit = false }) => (
    <Modal
      isOpen={isEdit ? isEditModalOpen : isAddModalOpen}
      onClose={() => {
        if (isEdit) {
          setIsEditModalOpen(false);
          setSelectedRole(null);
        } else {
          setIsAddModalOpen(false);
        }
        setFormData({ name: '', description: '', permissions: [] });
      }}
      title={`${isEdit ? 'Edit' : 'Add'} Role`}
    >
      <form onSubmit={(e) => {
        e.preventDefault();
        if (isEdit) {
          handleEditRole();
        } else {
          handleAddRole();
        }
      }}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role Name
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2.5"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              className="w-full rounded-md border border-gray-300 p-2.5"
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Permissions
            </label>
            <div className="space-y-2">
              {allPermissions.map((permission) => (
                <label key={permission.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.permissions.includes(permission.id)}
                    onChange={(e) => {
                      const newPermissions = e.target.checked
                        ? [...formData.permissions, permission.id]
                        : formData.permissions.filter((p) => p !== permission.id);
                      setFormData({ ...formData, permissions: newPermissions });
                    }}
                    className="rounded text-blue-600"
                  />
                  {permission.label}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              if (isEdit) {
                setIsEditModalOpen(false);
                setSelectedRole(null);
              } else {
                setIsAddModalOpen(false);
              }
              setFormData({ name: '', description: '', permissions: [] });
            }}
          >
            Cancel
          </Button>
          <Button type="submit">
            {isEdit ? 'Save Changes' : 'Create Role'}
          </Button>
        </div>
      </form>
    </Modal>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Manage Roles</h1>
            <p className="text-gray-600">Create and manage user roles and permissions</p>
          </div>
          <Button onClick={() => setIsAddModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Role
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="grid grid-cols-1 divide-y">
            {roles.map((role) => (
              <div key={role.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      {role.name === 'Admin' ? (
                        <Shield className="h-6 w-6 text-blue-600" />
                      ) : (
                        <User className="h-6 w-6 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{role.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{role.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm text-gray-500">
                          {role.usersCount} users
                        </span>
                        •
                        <span className="text-sm text-gray-500">
                          {role.permissions.length} permissions
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedRole(role);
                        setFormData({
                          name: role.name,
                          description: role.description,
                          permissions: role.permissions,
                        });
                        setIsEditModalOpen(true);
                      }}
                    >
                      <Edit2 className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    {role.name !== 'Admin' && role.name !== 'User' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteRole(role.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RoleModal isEdit={false} />
      <RoleModal isEdit={true} />
    </div>
  );
}