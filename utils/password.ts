import { hash, compare } from "bcryptjs";

export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
}

export async function comparePassword(
  password: string,
  hashedPassword: string
) {
  const isMatch = await compare(password, hashedPassword);
  return isMatch;
}
