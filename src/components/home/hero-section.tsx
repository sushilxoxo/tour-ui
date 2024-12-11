import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Search, Plane, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from '@/components/ui/modal';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm your travel planning assistant. Tell me about your dream trip and I'll help you find the perfect itinerary.",
    },
  ]);
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/itineraries?search=${encodeURIComponent(searchQuery)}`);
  };

  const popularDestinations = [
    'Paris', 'Tokyo', 'New York', 'Bali'
  ];

  const handleAISubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    setAiMessages([...aiMessages, { type: 'user', content: userInput }]);

    // Simulate AI response
    setTimeout(() => {
      let response = "Based on your interests, I recommend checking out our curated itineraries for cultural experiences in historic cities. Would you like me to show you some specific options?";
      setAiMessages((prev) => [...prev, { type: 'bot', content: response }]);
    }, 1000);

    setUserInput('');
  };

  return (
    <section className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
          alt="Travel Adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Your next adventure begins here
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover expertly curated travel experiences from local guides and creators.
            From hidden gems to iconic destinations, find your perfect journey.
          </p>

          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search destinations, themes, or activities..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" size="lg">
                Search
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
                onClick={() => setShowAIAssistant(true)}
              >
                <Sparkles className="h-5 w-5 mr-2" />
                AI Assistant
              </Button>
            </div>
          </form>

          <div className="flex gap-4 mb-8">
            <Button
              size="lg"
              className="group bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <Link to="/itineraries">
                <Search className="h-5 w-5 mr-2" />
                Browse All
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
              asChild
            >
              <Link to="/flights">
                <Plane className="h-5 w-5 mr-2" />
                Book Flights
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="h-5 w-5" />
              <span>Popular destinations:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularDestinations.map((destination) => (
                <Link
                  key={destination}
                  to={`/itineraries?destination=${encodeURIComponent(destination)}`}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  {destination}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showAIAssistant}
        onClose={() => setShowAIAssistant(false)}
        title="AI Travel Assistant"
      >
        <div className="h-[400px] flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4">
            {aiMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.type === 'bot' && (
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <Sparkles className="h-5 w-5 text-blue-600" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleAISubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 rounded-md border border-gray-300 p-2 text-sm"
                placeholder="Ask me anything about your trip..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <Button type="submit">Send</Button>
            </div>
          </form>
        </div>
      </Modal>
    </section>
  );
}