import { defineConfig } from 'vite'

const configure = (() => {
  const devMode = process.env.NODE_ENV === "development";
  return <T>(devVal: T, prodVal: T): T => {
    return devMode ? devVal : prodVal;
  };
})();

// https://vitejs.dev/config/
export default defineConfig({
  // Base directory compiled files will be served from
  base: configure("/", "/ccac-office-map/"),
  build: {
    sourcemap: configure(true, false),
    minify: configure<"terser" | boolean>(false, "terser"),
  }
})
