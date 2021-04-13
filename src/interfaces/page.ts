import { Section } from './section';

export interface Page {
  can_make_payments: boolean;
  has_consent: boolean;
  depth: number;
  name: string;
  gateway: unknown;
  numchild: number;
  modified: string;
  is_active: boolean;
  node_type: string;
  survey_cash_compensation: number;
  is_primary: boolean;
  valid_from: string;
  status: string;
  description: string;
  path: string;
  universe: null;
  visibility: string;
  id: number;
  sort_order: number;
  type: string;
  sections: Section[];
  valid_to: string;
  created: string;
  show_description: boolean;
  survey_estimated_time: number;
  is_special: boolean;
  survey_airtime_compensation: number;
}
