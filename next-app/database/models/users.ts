import { z } from "zod";

// User Schema
const UserSchema = z.object({
  username: z.string().max(10, { message: "Username must be at most 10 characters long" }),
  name: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(5, { message: "Password must be at least 5 characters long" }),
  phone: z.string().length(10, { message: "Phone number must be 10 digits long" }),
  address: z.string().optional(),
  image: z.string().optional()
});

// Infer the TypeScript type from the schema
type User = z.infer<typeof UserSchema>;

export default UserSchema;