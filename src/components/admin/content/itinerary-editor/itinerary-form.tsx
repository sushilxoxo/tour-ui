import { Button } from '@/components/ui/button';
import { Camera, Globe, Tag } from 'lucide-react';
import { useState } from 'react';

interface ItineraryFormData {
  title: string;
  description: string;
  destination: string;
  duration: number;
  price: number;
  coverImage: string | null;
  tags: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
}

export function ItineraryForm() {
  const [formData, setFormData] = useState<ItineraryFormData>({
    title: '',
    description: '',
    destination: '',
    duration: 1,
    price: 0,
    coverImage: null,
    tags: [],
    highlights: [''],
    inclusions: [''],
    exclusions: [''],
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, coverImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleArrayInput = (
    field: 'highlights' | 'inclusions' | 'exclusions',
    index: number,
    value: string
  ) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayItem = (field: 'highlights' | 'inclusions' | 'exclusions') => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const removeArrayItem = (
    field: 'highlights' | 'inclusions' | 'exclusions',
    index: number
  ) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: newArray });
  };

  return (
    <form className="space-y-8">
      {/* Basic Information */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6">Basic Information</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Image
            </label>
            <div className="flex items-center gap-4">
              <div className="w-32 h-32 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                {formData.coverImage ? (
                  <img
                    src={formData.coverImage}
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
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
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
                  value={formData.destination}
                  onChange={(e) =>
                    setFormData({ ...formData, destination: e.target.value })
                  }
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
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Describe your itinerary..."
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (days)
              </label>
              <input
                type="number"
                min="1"
                className="w-full rounded-md border border-gray-300 p-2.5"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: parseInt(e.target.value) })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Base Price per Person
              </label>
              <input
                type="number"
                min="0"
                className="w-full rounded-md border border-gray-300 p-2.5"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: parseInt(e.target.value) })
                }
              />
            </div>
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
                      if (value && !formData.tags.includes(value)) {
                        setFormData({
                          ...formData,
                          tags: [...formData.tags, value],
                        });
                        (e.target as HTMLInputElement).value = '';
                      }
                    }
                  }}
                />
              </div>
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    className="hover:text-blue-900"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        tags: formData.tags.filter((_, i) => i !== index),
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

      {/* Highlights */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6">Highlights</h2>
        <div className="space-y-4">
          {formData.highlights.map((highlight, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                className="flex-1 rounded-md border border-gray-300 p-2.5"
                value={highlight}
                onChange={(e) =>
                  handleArrayInput('highlights', index, e.target.value)
                }
                placeholder="Add a highlight"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => removeArrayItem('highlights', index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => addArrayItem('highlights')}
          >
            Add Highlight
          </Button>
        </div>
      </div>

      {/* Inclusions & Exclusions */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Inclusions</h2>
          <div className="space-y-4">
            {formData.inclusions.map((inclusion, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 rounded-md border border-gray-300 p-2.5"
                  value={inclusion}
                  onChange={(e) =>
                    handleArrayInput('inclusions', index, e.target.value)
                  }
                  placeholder="Add an inclusion"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => removeArrayItem('inclusions', index)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => addArrayItem('inclusions')}
            >
              Add Inclusion
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Exclusions</h2>
          <div className="space-y-4">
            {formData.exclusions.map((exclusion, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 rounded-md border border-gray-300 p-2.5"
                  value={exclusion}
                  onChange={(e) =>
                    handleArrayInput('exclusions', index, e.target.value)
                  }
                  placeholder="Add an exclusion"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => removeArrayItem('exclusions', index)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => addArrayItem('exclusions')}
            >
              Add Exclusion
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline">
          Save as Draft
        </Button>
        <Button type="submit">Publish Itinerary</Button>
      </div>
    </form>
  );
}