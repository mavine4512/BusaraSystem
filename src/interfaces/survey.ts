import { Page } from './page';

interface Creator {
  name: string;
  email: string;
}

export interface Survey {
  locations: unknown[];
  forms: [
    {
      can_make_payments: boolean;
      has_consent: boolean;
      pages: Page[];
      depth: number;
      name: string;
      gateway: number;
      creator: Creator;
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
      universe: number;
      visibility: string;
      id: number;
      sort_order: number;
      estimated_time: number;
      type: string;
      airtime_compensation: number;
      expected_views: number;
      valid_to: string;
      created: string;
      no_of_views: number;
      show_description: boolean;
      cash_compensation: number;
      survey_estimated_time: number;
      is_special: boolean;
      survey_airtime_compensation: number;
    }
  ];
}

export interface SurveyForm {
  full_name: string;
  phone_number: string;
  gender: string;
  airtime_image: string;
  cash_image: string;
}
