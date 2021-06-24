declare namespace Express {
  export interface Request {
    userId: number;
    userName: string;
    userEmail: string;
    userIsAdm: boolean;
  }
}
