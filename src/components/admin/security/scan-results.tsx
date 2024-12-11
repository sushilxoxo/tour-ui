import { Button } from '@/components/ui/button';
import { SecurityScan } from '@/types/security';
import { getVulnerabilityColor } from '@/lib/security';
import { AlertCircle, CheckCircle, Shield, XCircle } from 'lucide-react';

interface ScanResultsProps {
  scan: SecurityScan | null;
  isScanning: boolean;
  onClose: () => void;
}

export function ScanResults({ scan, isScanning, onClose }: ScanResultsProps) {
  if (isScanning) {
    return (
      <div className="p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
        <h3 className="text-lg font-medium">Running Security Scan...</h3>
        <p className="text-gray-600 mt-2">This may take a few minutes</p>
      </div>
    );
  }

  if (!scan) return null;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Shield className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Scan Summary */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getStatusIcon(scan.status)}
          <span className="font-medium capitalize">{scan.status}</span>
        </div>
        <div className="text-sm text-gray-600">
          Duration: {scan.duration}
        </div>
      </div>

      {/* Scan Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(scan.metrics).map(([key, value]) => (
          <div key={key} className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 capitalize">
              {key.replace(/_/g, ' ')}
            </p>
            <p className="text-2xl font-bold mt-1">{value}</p>
          </div>
        ))}
      </div>

      {/* Vulnerabilities */}
      {scan.vulnerabilities.length > 0 && (
        <div>
          <h3 className="font-medium mb-4">Detected Vulnerabilities</h3>
          <div className="space-y-4">
            {scan.vulnerabilities.map((vulnerability) => (
              <div
                key={vulnerability.id}
                className={`border rounded-lg p-4 ${getVulnerabilityColor(
                  vulnerability.severity
                )}`}
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-medium capitalize">
                          {vulnerability.type}
                        </span>
                        <span className="text-sm ml-2 capitalize">
                          ({vulnerability.severity} severity)
                        </span>
                      </div>
                      <span className="text-sm">
                        Affects: {vulnerability.affected}
                      </span>
                    </div>
                    <p className="text-sm mb-2">{vulnerability.description}</p>
                    <p className="text-sm font-medium">
                      Recommendation: {vulnerability.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <Button onClick={onClose}>Close Results</Button>
      </div>
    </div>
  );
}