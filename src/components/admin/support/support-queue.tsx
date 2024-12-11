import { Button } from '@/components/ui/button';
import { Clock, Users } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  status: 'online' | 'busy' | 'offline';
  activeTickets: number;
}

export function SupportQueue() {
  const agents: Agent[] = [
    {
      id: '1',
      name: 'Alice Cooper',
      status: 'online',
      activeTickets: 3,
    },
    {
      id: '2',
      name: 'Bob Wilson',
      status: 'busy',
      activeTickets: 5,
    },
    {
      id: '3',
      name: 'Carol Smith',
      status: 'online',
      activeTickets: 2,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'text-green-600';
      case 'busy':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold">Support Queue</h2>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="font-medium">Active Agents</span>
          </div>
          <Button variant="outline" size="sm">Manage Shifts</Button>
        </div>

        <div className="space-y-4">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${getStatusColor(agent.status)}`}
                />
                <div>
                  <p className="font-medium">{agent.name}</p>
                  <p className="text-sm text-gray-600 capitalize">{agent.status}</p>
                </div>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-gray-600">
                  <Clock className="h-4 w-4" />
                  {agent.activeTickets} tickets
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}