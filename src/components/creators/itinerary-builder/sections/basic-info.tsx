import { Button } from '@/components/ui/button';
import { Camera, Globe, Tag } from 'lucide-react';

interface BasicInfoProps {
  data: {
    title: string;
    description: string;
    destination: string;
    duration: number;
    coverImage: string | null;
    tags: string[];
  };
  onChange: (data: BasicInfoProps['data']) => void;
}

export function BasicInfo({ data, onChange }: BasicInfoProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({ ...data, coverImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Basic Information</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cover Image
          </label>
          <div className="flex items-center gap-4">
            <div className="w-32 h-32 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
              {data.coverImage ? (
                <img
                  src={data.coverImage}
                  alt="Cover"
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
                id="cover-upload"
                onChange={handleImageUpload}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('cover-upload')?.click()}
              >
                Upload Photo
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2.5"
              value={data.title}
              onChange={(e) => onChange({ ...data, title: e.target.value })}
              placeholder="e.g., Tokyo Cultural Experience"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Destination
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                className="w-full pl-10 rounded-md border border-gray-300 p-2.5"
                value={data.destination}
                onChange={(e) => onChange({ ...data, destination: e.target.value })}
                placeholder="e.g., Tokyo, Japan"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            className="w-full rounded-md border border-gray-300 p-2.5"
            rows={4}
            value={data.description}
            onChange={(e) => onChange({ ...data, description: e.target.value })}
            placeholder="Describe your itinerary..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration (days)
          </label>
          <input
            type="number"
            min="1"
            className="w-full rounded-md border border-gray-300 p-2.5"
            value={data.duration}
            onChange={(e) => onChange({ ...data, duration: parseInt(e.target.value) })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tags
          </label>
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                className="pl-10 rounded-md border border-gray-300 p-2.5"
                placeholder="Add a tag"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const value = (e.target as HTMLInputElement).value.trim();
                    if (value && !data.tags.includes(value)) {
                      onChange({ ...data, tags: [...data.tags, value] });
                      (e.target as HTMLInputElement).value = '';
                    }
                  }
                }}
              />
            </div>
            {data.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
              >
                {tag}
                <button
                  type="button"
                  className="hover:text-blue-900"
                  onClick={() => {
                    onChange({
                      ...data,
                      tags: data.tags.filter((_, i) => i !== index),
                    });
                  }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}