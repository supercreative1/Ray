import { Inngest } from "inngest";

// Create a client to send and receive events for local development
export const inngest = new Inngest({ 
  id: "vibe-development",
  // Ensure we're in local development mode
  baseUrl: process.env.NODE_ENV === "development" ? "http://localhost:8288" : undefined
});
