import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // Utilise automatiquement le même domaine + port que l'app
  baseURL:
    typeof window === "undefined" ? undefined : window.location.origin,
});


