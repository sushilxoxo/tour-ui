import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { AlertCircle, Lock, Shield, Users, Activity, RefreshCw, Search, Clock } from 'lucide-react';
import { SecurityScan } from '@/types/security';
import { runSecurityScan } from '@/lib/security';
import { ScanResults } from '@/components/admin/security/scan-results';

interface SecurityMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  status: 'good' | 'warning' | 'critical';
  icon: React.ReactNode;
}

interface SecurityLog {
  id: string;
  type: 'auth' | 'system' | 'api' | 'user';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: string;
  details: {
    ip?: string;
    user?: string;
    action?: string;
    location?: string;
    [key: string]: string | undefined;
  };
}

export function SecurityPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLog, setSelectedLog] = useState<SecurityLog | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [currentScan, setCurrentScan] = useState<SecurityScan | null>(null);

  const metrics: SecurityMetric[] = [
    {
      label: 'Failed Login Attempts',
      value: '24',
      change: '-12%',
      trend: 'down',
      status: 'good',
      icon: <Lock className="h-5 w-5" />,
    },
    {
      label: 'Active Sessions',
      value: '1,245',
      change: '+5%',
      trend: 'up',
      status: 'warning',
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: 'API Requests',
      value: '45K',
      change: '+8%',
      trend: 'up',
      status: 'good',
      icon: <Activity className="h-5 w-5" />,
    },
    {
      label: 'Security Score',
      value: '92/100',
      change: '+3',
      trend: 'up',
      status: 'good',
      icon: <Shield className="h-5 w-5" />,
    },
  ];

  const logs: SecurityLog[] = [
    {
      id: '1',
      type: 'auth',
      severity: 'high',
      message: 'Multiple failed login attempts detected',
      timestamp: '2024-03-20T10:30:00Z',
      details: {
        ip: '192.168.1.1',
        attempts: '5',
        user: 'john.doe@example.com',
        location: 'New York, US',
      },
    },
    {
      id: '2',
      type: 'system',
      severity: 'critical',
      message: 'Unusual system resource usage detected',
      timestamp: '2024-03-20T10:15:00Z',
      details: {
        cpu: '95%',
        memory: '87%',
        duration: '15 minutes',
      },
    },
    {
      id: '3',
      type: 'api',
      severity: 'medium',
      message: 'Rate limit exceeded for API endpoint',
      timestamp: '2024-03-20T10:00:00Z',
      details: {
        endpoint: '/api/bookings',
        client: 'mobile-app',
        requests: '150/min',
      },
    },
  ];

  const handleRunScan = async () => {
    setIsScanning(true);
    setIsScanModalOpen(true);
    try {
      const results = await runSecurityScan();
      setCurrentScan(results);
    } catch (error) {
      console.error('Security scan failed:', error);
    } finally {
      setIsScanning(false);
    }
  };

  const filteredLogs = logs.filter(
    (log) =>
      log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-600 bg-red-50';
      case 'high':
        return 'text-orange-600 bg-orange-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-blue-600 bg-blue-50';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'auth':
        return <Lock className="h-5 w-5" />;
      case 'system':
        return <Activity className="h-5 w-5" />;
      case 'api':
        return <RefreshCw className="h-5 w-5" />;
      default:
        return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Security Center</h1>
            <p className="text-gray-600">Monitor and manage platform security</p>
          </div>
          <Button onClick={handleRunScan}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Run Security Scan
          </Button>
        </div>

        {/* Security Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div className={`text-${metric.status === 'good' ? 'blue' : 'yellow'}-600`}>
                  {metric.icon}
                </div>
                <div
                  className={`text-sm ${
                    metric.trend === 'up'
                      ? metric.status === 'good'
                        ? 'text-green-600'
                        : 'text-red-600'
                      : metric.status === 'good'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {metric.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-gray-600 text-sm">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Security Logs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Security Logs</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search logs..."
                  className="pl-10 rounded-md border border-gray-300 p-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="divide-y">
            {filteredLogs.map((log) => (
              <div
                key={log.id}
                className="p-6 hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  setSelectedLog(log);
                  setIsDetailsModalOpen(true);
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${getSeverityColor(log.severity)}`}>
                    {getTypeIcon(log.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span
                          className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(
                            log.severity
                          )}`}
                        >
                          {log.severity.toUpperCase()}
                        </span>
                        <h3 className="font-medium mt-1">{log.message}</h3>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {new Date(log.timestamp).toLocaleString()}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {Object.entries(log.details)
                        .slice(0, 2)
                        .map(([key, value]) => (
                          <span key={key} className="mr-4">
                            {key}: <span className="font-medium">{value}</span>
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Scan Results Modal */}
      <Modal
        isOpen={isScanModalOpen}
        onClose={() => {
          if (!isScanning) {
            setIsScanModalOpen(false);
            setCurrentScan(null);
          }
        }}
        title="Security Scan Results"
      >
        <ScanResults
          scan={currentScan}
          isScanning={isScanning}
          onClose={() => {
            setIsScanModalOpen(false);
            setCurrentScan(null);
          }}
        />
      </Modal>

      {/* Log Details Modal */}
      <Modal
        isOpen={isDetailsModalOpen}
        onClose={() => {
          setIsDetailsModalOpen(false);
          setSelectedLog(null);
        }}
        title="Security Log Details"
      >
        {selectedLog && (
          <div className="space-y-4">
            <div
              className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(
                selectedLog.severity
              )}`}
            >
              {selectedLog.severity.toUpperCase()}
            </div>

            <div>
              <h3 className="font-medium mb-2">{selectedLog.message}</h3>
              <p className="text-sm text-gray-600">
                {new Date(selectedLog.timestamp).toLocaleString()}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium mb-2">Event Details</h4>
              <div className="space-y-2">
                {Object.entries(selectedLog.details).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 text-sm">
                    <span className="text-gray-600 capitalize">{key.replace('_', ' ')}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={() => {
                  setIsDetailsModalOpen(false);
                  setSelectedLog(null);
                }}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}