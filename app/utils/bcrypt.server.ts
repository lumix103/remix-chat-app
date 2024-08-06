import { db } from "~/utils/db.server";
import bcrypt from "bcryptjs";

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

export async function validateUser(username: string, password: string) {
  const user = await db.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) {
    return false;
  }

  const match = await bcrypt.compare(password, user.password);

  return match;
}
