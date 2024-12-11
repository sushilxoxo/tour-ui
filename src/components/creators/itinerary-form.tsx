import { Button } from '@/components/ui/button';
import { Camera, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface ItineraryFormData {
  title: string;
  description: string;
  destination: string;
  duration: number;
  price: number;
  coverImage: string | null;
  components: {
    type: 'flight' | 'hotel' | 'activity' | 'transport';
    title: string;
    description: string;
    price: number;
    details: Record<string, string>;
  }[];
  activities: {
    day: number;
    title: string;
    items: {
      type: 'accommodation' | 'activity' | 'breakfast' | 'dinner';
      time: string;
      title: string;
      description: string;
    }[];
  }[];
}

export function ItineraryForm() {
  const [formData, setFormData] = useState<ItineraryFormData>({
    title: '',
    description: '',
    destination: '',
    duration: 1,
    price: 0,
    coverImage: null,
    components: [],
    activities: [],
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

  const addDay = () => {
    setFormData({
      ...formData,
      activities: [
        ...formData.activities,
        {
          day: formData.activities.length + 1,
          title: '',
          items: [],
        },
      ],
    });
  };

  const addComponent = (type: 'flight' | 'hotel' | 'activity' | 'transport') => {
    setFormData({
      ...formData,
      components: [
        ...formData.components,
        {
          type,
          title: '',
          description: '',
          price: 0,
          details: {},
        },
      ],
    });
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
                placeholder="e.g., Romantic Paris Getaway"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 p-2.5"
                value={formData.destination}
                onChange={(e) =>
                  setFormData({ ...formData, destination: e.target.value })
                }
                placeholder="e.g., Paris, France"
              />
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
        </div>
      </div>

      {/* Components */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Components</h2>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => addComponent('flight')}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Flight
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => addComponent('hotel')}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Hotel
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => addComponent('activity')}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Activity
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => addComponent('transport')}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Transport
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {formData.components.map((component, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium capitalize">{component.type}</h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const newComponents = [...formData.components];
                    newComponents.splice(index, 1);
                    setFormData({ ...formData, components: newComponents });
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  className="rounded-md border border-gray-300 p-2.5"
                  value={component.title}
                  onChange={(e) => {
                    const newComponents = [...formData.components];
                    newComponents[index].title = e.target.value;
                    setFormData({ ...formData, components: newComponents });
                  }}
                  placeholder="Title"
                />
                <input
                  type="number"
                  className="rounded-md border border-gray-300 p-2.5"
                  value={component.price}
                  onChange={(e) => {
                    const newComponents = [...formData.components];
                    newComponents[index].price = parseInt(e.target.value);
                    setFormData({ ...formData, components: newComponents });
                  }}
                  placeholder="Price"
                />
              </div>

              <textarea
                className="w-full rounded-md border border-gray-300 p-2.5"
                value={component.description}
                onChange={(e) => {
                  const newComponents = [...formData.components];
                  newComponents[index].description = e.target.value;
                  setFormData({ ...formData, components: newComponents });
                }}
                placeholder="Description"
                rows={2}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Day by Day Itinerary */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Day by Day Itinerary</h2>
          <Button type="button" variant="outline" onClick={addDay}>
            <Plus className="h-4 w-4 mr-1" />
            Add Day
          </Button>
        </div>

        <div className="space-y-6">
          {formData.activities.map((day, dayIndex) => (
            <div key={dayIndex} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Day {day.day}</h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const newActivities = [...formData.activities];
                    newActivities.splice(dayIndex, 1);
                    setFormData({ ...formData, activities: newActivities });
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <input
                type="text"
                className="w-full rounded-md border border-gray-300 p-2.5 mb-4"
                value={day.title}
                onChange={(e) => {
                  const newActivities = [...formData.activities];
                  newActivities[dayIndex].title = e.target.value;
                  setFormData({ ...formData, activities: newActivities });
                }}
                placeholder="Day Title"
              />

              <div className="space-y-4">
                {day.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="rounded-md border border-gray-300 p-2.5"
                      value={item.time}
                      onChange={(e) => {
                        const newActivities = [...formData.activities];
                        newActivities[dayIndex].items[itemIndex].time = e.target.value;
                        setFormData({ ...formData, activities: newActivities });
                      }}
                      placeholder="Time"
                    />
                    <select
                      className="rounded-md border border-gray-300 p-2.5"
                      value={item.type}
                      onChange={(e) => {
                        const newActivities = [...formData.activities];
                        newActivities[dayIndex].items[itemIndex].type = e.target.value as any;
                        setFormData({ ...formData, activities: newActivities });
                      }}
                    >
                      <option value="accommodation">Accommodation</option>
                      <option value="activity">Activity</option>
                      <option value="breakfast">Breakfast</option>
                      <option value="dinner">Dinner</option>
                    </select>
                    <input
                      type="text"
                      className="rounded-md border border-gray-300 p-2.5"
                      value={item.title}
                      onChange={(e) => {
                        const newActivities = [...formData.activities];
                        newActivities[dayIndex].items[itemIndex].title = e.target.value;
                        setFormData({ ...formData, activities: newActivities });
                      }}
                      placeholder="Title"
                    />
                    <textarea
                      className="rounded-md border border-gray-300 p-2.5"
                      value={item.description}
                      onChange={(e) => {
                        const newActivities = [...formData.activities];
                        newActivities[dayIndex].items[itemIndex].description = e.target.value;
                        setFormData({ ...formData, activities: newActivities });
                      }}
                      placeholder="Description"
                      rows={2}
                    />
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const newActivities = [...formData.activities];
                    newActivities[dayIndex].items.push({
                      type: 'activity',
                      time: '',
                      title: '',
                      description: '',
                    });
                    setFormData({ ...formData, activities: newActivities });
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Activity
                </Button>
              </div>
            </div>
          ))}
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