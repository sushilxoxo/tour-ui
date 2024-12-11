import { Button } from '@/components/ui/button';
import { Search, Plus, Edit2, Eye, Trash2, Tag } from 'lucide-react';
import { useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  status: 'published' | 'draft' | 'review';
  author: string;
  category: string;
  tags: string[];
  publishDate: string;
  views: number;
}

interface BlogManagerProps {
  onSelect: (id: string) => void;
  selected: string | null;
}

export function BlogManager({ onSelect, selected }: BlogManagerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts] = useState<BlogPost[]>([
    {
      id: '1',
      title: '10 Hidden Gems in Tokyo',
      excerpt: 'Discover the lesser-known spots in Japan\'s bustling capital...',
      status: 'published',
      author: 'Emily Chen',
      category: 'Destinations',
      tags: ['Japan', 'Tokyo', 'Travel Tips'],
      publishDate: '2024-03-20T10:30:00Z',
      views: 2450,
    },
    {
      id: '2',
      title: 'Ultimate Paris Travel Guide',
      excerpt: 'Everything you need to know about visiting the City of Light...',
      status: 'draft',
      author: 'Sophie Martin',
      category: 'Guides',
      tags: ['France', 'Paris', 'Travel Guide'],
      publishDate: '',
      views: 0,
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'text-green-600 bg-green-50';
      case 'draft':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Blog Posts</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search posts..."
                className="pl-10 rounded-md border border-gray-300 p-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </div>
        </div>
      </div>

      <div className="divide-y">
        {posts.map((post) => (
          <div
            key={post.id}
            className={`p-6 hover:bg-gray-50 ${
              selected === post.id ? 'bg-blue-50' : ''
            }`}
            onClick={() => onSelect(post.id)}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-medium">{post.title}</h3>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                      post.status
                    )}`}
                  >
                    {post.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>By {post.author}</span>
                  <span>{post.category}</span>
                  {post.status === 'published' && (
                    <span>
                      Published {new Date(post.publishDate).toLocaleDateString()}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Edit2 className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>

            {post.status === 'published' && (
              <div className="mt-4 text-sm text-gray-600">
                <span className="font-medium">{post.views.toLocaleString()}</span> views
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}