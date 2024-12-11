import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

interface TripDocumentsProps {
  documents: any[];
}

export function TripDocuments({ documents }: TripDocumentsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Travel Documents</h2>
      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">{doc.name}</p>
                <p className="text-sm text-gray-600">{doc.size}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}