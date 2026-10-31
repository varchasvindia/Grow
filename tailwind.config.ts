import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#080817", panel: "#101027", pink: "#f04491", aqua: "#10d9cb" } } },
  plugins: []
};
export default config;