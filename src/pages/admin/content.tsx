import { useState } from 'react';
import { ContentStats } from '@/components/admin/content/content-stats';
import { ItineraryManager } from '@/components/admin/content/itinerary-manager';
import { BlogManager } from '@/components/admin/content/blog-manager';
import { ChatbotManager } from '@/components/admin/content/chatbot-manager';
import { ContentCalendar } from '@/components/admin/content/content-calendar';
import { LLMAssistant } from '@/components/admin/content/llm-assistant';

export function ContentPage() {
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-600">Manage itineraries, blog posts, and chatbot content</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ContentStats />
            <ItineraryManager onSelect={setSelectedContent} selected={selectedContent} />
            <BlogManager onSelect={setSelectedContent} selected={selectedContent} />
            <ChatbotManager />
          </div>
          <div className="space-y-8">
            <LLMAssistant />
            <ContentCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}