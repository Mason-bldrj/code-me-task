import dbConnect from "./app/lib/mongoose";

export async function register() {
  await dbConnect();
}
