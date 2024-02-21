export interface Login {
  email: string;
  password: string;
  grant_type: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}