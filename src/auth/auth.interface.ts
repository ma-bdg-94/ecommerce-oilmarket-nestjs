export interface AuthRegister {
  id?: string;
  firstName: string;
  lastName: string;
  birthdate: Date;
  phone: string;
  email: string;
  password: string;
  active?: boolean;
  deleted?: boolean;
  blocked?: boolean
}

export interface AuthRegister {
    id?: string;
    firstName: string;
    lastName: string;
    birthdate: Date;
    phone: string;
    email: string;
    password: string;
    active?: boolean;
    deleted?: boolean;
    blocked?: boolean
  }
