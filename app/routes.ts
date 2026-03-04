import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/login", "routes/login.tsx"),
  route("/upload", "routes/upload.tsx"),
  route("/api/upload-image", "routes/api.upload-image.ts"),
  route("/privacy", "routes/privacy.tsx"),
] satisfies RouteConfig;
