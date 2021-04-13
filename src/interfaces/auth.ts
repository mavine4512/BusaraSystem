export interface Auth {
  scope: string;
  refresh_token: string;
  access_token: string;
  token_type: string;
  expires_in: number;
  permissions: unknown[];
}

export interface LoginForm {
  username: string;
  password: string;
  grant_type?: string;
  client_id?: string;
  client_secret?: string;
}
