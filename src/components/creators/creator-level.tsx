import { Star } from 'lucide-react';

interface CreatorLevel {
  level: number;
  title: string;
  points: number;
  nextLevel: number;
  perks: string[];
}

export function CreatorLevel() {
  const levelData: CreatorLevel = {
    level: 3,
    title: 'Expert Creator',
    points: 2750,
    nextLevel: 3000,
    perks: [
      'Higher commission rates',
      'Priority support',
      'Featured placement',
      'Early access to new features',
    ],
  };

  const progress = (levelData.points / levelData.nextLevel) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Creator Level</h2>
          <p className="text-gray-600">Keep creating to unlock more perks</p>
        </div>
        <div className="flex items-center gap-2">
          <Star className="h-6 w-6 text-yellow-400 fill-current" />
          <span className="text-2xl font-bold">{levelData.level}</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium">{levelData.title}</span>
          <span className="text-gray-600">
            {levelData.points} / {levelData.nextLevel} points
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 rounded-full h-2"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Level Perks</h3>
        <ul className="space-y-2">
          {levelData.perks.map((perk, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              {perk}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}