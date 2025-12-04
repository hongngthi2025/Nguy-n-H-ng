export type ViewState = 'home' | 'assessment' | 'assessment-result' | 'expert-profile';

export interface AssessmentAnswers {
  industry: 'manufacturing' | 'service' | '';
  co2Tracking: 'yes' | 'no' | 'dont_know';
  energySource: 'renewable' | 'grid' | 'mixed' | 'dont_know';
  wasteManagement: 'certified' | 'local' | 'none' | 'dont_know';
  financialAudit: 'yes' | 'no' | 'dont_know';
  complianceOfficer: 'yes' | 'no' | 'dont_know';
}

export interface ExpertProfile {
  id: string;
  name: string;
  title: string;
  image: string;
  experienceYears: number;
  projectsCompleted: number;
  ratePerHour: number;
  badges: ('verified' | 'degree' | 'nda')[];
  keywords: string[];
  bio: string;
  packages: { title: string; price: string; desc: string }[];
  caseStudies: { problem: string; solution: string; result: string }[];
}

export interface GapAnalysis {
  issue: string;
  solution: string;
  estimatedCost: string;
  urgency: 'high' | 'medium' | 'low';
}

export interface AssessmentResultData {
  score: number;
  summary: string;
  gaps: GapAnalysis[];
}