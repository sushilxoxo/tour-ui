export interface SecurityScan {
  id: string;
  timestamp: string;
  status: 'running' | 'completed' | 'failed';
  duration: string;
  vulnerabilities: SecurityVulnerability[];
  metrics: {
    endpoints_scanned: number;
    vulnerabilities_found: number;
    critical_issues: number;
    scan_coverage: number;
  };
}

export interface SecurityVulnerability {
  id: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  type: string;
  description: string;
  recommendation: string;
  affected: string;
}