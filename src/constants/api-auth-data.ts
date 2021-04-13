export const apiAuthData = {
  grant_type: process.env.REACT_APP_GRANT_TYPE,
  client_id: process.env.REACT_APP_CLIENT_ID,
  client_secret: process.env.REACT_APP_SECRET_KEY,
};

export const auth_token = process.env.REACT_APP_AUTH_TOKEN_NAME ?? '';
export const refresh_token =
  process.env.REACT_APP_REFRESH_AUTH_TOKEN_NAME ?? '';
