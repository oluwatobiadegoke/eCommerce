import "next-auth";

declare module "next-auth" {
  export interface User {
    email?: string | null | undefined;
    password?: string | null | undefined;
    userId?: string | null | undefined | unknown;
  }

  export interface Session {
    user: User;
  }
}
