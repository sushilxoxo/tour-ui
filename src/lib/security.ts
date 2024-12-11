import { SecurityScan, SecurityVulnerability } from '@/types/security';

// Mock security scan function - would be replaced with actual security scanning service
export async function runSecurityScan(): Promise<SecurityScan> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        status: 'completed',
        duration: '45 seconds',
        vulnerabilities: [
          {
            id: '1',
            severity: 'high',
            type: 'authentication',
            description: 'Weak password policy detected',
            recommendation: 'Enforce stronger password requirements',
            affected: 'User Authentication System',
          },
          {
            id: '2',
            severity: 'medium',
            type: 'configuration',
            description: 'Session timeout not properly configured',
            recommendation: 'Set appropriate session timeout values',
            affected: 'Session Management',
          },
          {
            id: '3',
            severity: 'low',
            type: 'ssl',
            description: 'SSL certificate expiring soon',
            recommendation: 'Renew SSL certificate',
            affected: 'HTTPS Configuration',
          },
        ],
        metrics: {
          endpoints_scanned: 156,
          vulnerabilities_found: 3,
          critical_issues: 1,
          scan_coverage: 98,
        },
      });
    }, 2000);
  });
}

export function getVulnerabilityColor(severity: string): string {
  switch (severity.toLowerCase()) {
    case 'critical':
      return 'text-red-700 bg-red-50 border-red-200';
    case 'high':
      return 'text-red-600 bg-red-50 border-red-200';
    case 'medium':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'low':
      return 'text-blue-600 bg-blue-50 border-blue-200';
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200';
  }
}