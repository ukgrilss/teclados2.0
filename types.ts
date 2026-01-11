import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PricingBenefit {
  text: string;
  included: boolean;
}
