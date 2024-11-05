export interface IUserLogin {
    email: string;
    password: string
}

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber:string,
    role:string,
    confirmPassword:string
}
export interface IUsers {
    id: number;
    fullName: string;
    department: string;
    email: string;
    phone: string;
    leaveIssuer: string;
  }
  