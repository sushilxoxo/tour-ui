import { Button } from '@/components/ui/button';
import { Award, Gift, Plus } from 'lucide-react';

interface Program {
  id: string;
  name: string;
  type: string;
  members: number;
  rewards: number;
  status: 'active' | 'draft';
}

export function LoyaltyPrograms() {
  const programs: Program[] = [
    {
      id: '1',
      name: 'TravelGo Elite',
      type: 'Points Program',
      members: 12450,
      rewards: 450,
      status: 'active',
    },
    {
      id: '2',
      name: 'Referral Rewards',
      type: 'Referral Program',
      members: 8240,
      rewards: 320,
      status: 'active',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Loyalty Programs</h2>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Program
          </Button>
        </div>
      </div>

      <div className="divide-y">
        {programs.map((program) => (
          <div key={program.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{program.name}</h3>
                  <p className="text-sm text-gray-600">{program.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">
                  {program.members.toLocaleString()} members
                </p>
                <div className="flex items-center justify-end gap-1 text-sm text-gray-600">
                  <Gift className="h-4 w-4" />
                  {program.rewards} rewards claimed
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}