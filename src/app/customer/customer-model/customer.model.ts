export interface Customer {
  default_contact: {
    first_name: string;
    last_name: string;
    email: string;

  };

  credit_term: {
    name: string;
  }

  store: {
    name: string
  }
  id: string;
  company_name: string | null;
}

export interface CustomerResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Customer[]
}