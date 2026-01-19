import { Inngest } from "inngest";

// Initialize the Inngest client
export const inngest = new Inngest({
  id: "ai-therapy-agent",
  // Signing key is required for syncing functions to Inngest dashboard (production)
  // For local development with Inngest Dev Server, this is optional
  // Get this from your Inngest dashboard: https://app.inngest.com/env/[your-env]/manage/signing-key
  signingKey: process.env.INNGEST_SIGNING_KEY || process.env.INNGEST_EVENT_KEY,
  // Event key is used for sending events (optional, can be separate from signing key)
  eventKey: process.env.INNGEST_EVENT_KEY,
});

// Export the functions array (this will be populated by the functions.ts file)
export const functions: any[] = [];
