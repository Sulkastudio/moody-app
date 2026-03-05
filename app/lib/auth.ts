import { betterAuth } from "better-auth";
import { admin, oAuthProxy, organization } from "better-auth/plugins";
import { pool } from "./db";

export const auth = betterAuth({
  database: pool,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    admin(),
    organization(),
    oAuthProxy(),
  ],
});

