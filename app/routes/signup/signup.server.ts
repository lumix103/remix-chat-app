import { db } from "~/utils/db.server";
import * as bcrypt from "bcrypt";

export async function createUser(username: string, password: string) {
  const saltRounds = 10;

  try {
    await db.user.create({
      data: {
        username: username,
        password: await bcrypt.hash(password, saltRounds),
      },
    });
  } catch (error) {
    return false;
  }

  return true;
}
