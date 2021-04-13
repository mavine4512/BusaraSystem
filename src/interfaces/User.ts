export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  groups: unknown[];
  device_details: string;
  is_active: true;
  language: string;
  user_timezone: string;
  universe: number;
  access_token: string;
  is_subject: boolean;
  permissions: unknown[];
  referral_code: string;
  name: string;
  project: string | null;
  approver_level: string;
  universe_name: string;
  subject: number;
}
