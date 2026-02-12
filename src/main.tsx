import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    document.body.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: sans-serif; text-align: center; padding: 20px;">
      <h1 style="color: #e11d48;">Configuration Error</h1>
      <p>Missing Supabase environment variables.</p>
      <p>Please add <strong>VITE_SUPABASE_URL</strong> and <strong>VITE_SUPABASE_ANON_KEY</strong> to your Vercel/Lovable project settings.</p>
    </div>
  `;
} else {
    createRoot(document.getElementById("root")!).render(<App />);
}
