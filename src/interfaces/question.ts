import { Options } from './options';

export interface Question {
  field_length: number;
  detail: string;
  cash_compensation: number;
  is_mandatory: boolean;
  modified: string;
  is_active: boolean;
  is_enabled: boolean;
  description: string;
  validation_rule: string;
  default: string;
  error_message: string;
  id: number;
  column_match: string;
  sort_order: number;
  estimated_time: number;
  type: string;
  is_visible: boolean;
  text: string;
  q_options: Options[];
  is_unique: boolean;
  is_unique_with: unknown[];
  created: string;
  widget: string;
  airtime_compensation: number;
  has_skip: boolean;
  extras: unknown;
  uploads: unknown[];
}
