# Setting Up API Keys

## Google Gemini API Key Setup

### Step 1: Get Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"** or **"Get API Key"**
4. Select or create a Google Cloud project
5. Copy the generated API key

### Step 2: Set Up Environment Variable

#### For Local Development:

1. Create a `.env` file in the root directory (if it doesn't exist):
   ```bash
   touch .env
   ```

2. Add your Gemini API key to the `.env` file:
   ```
   GEMINI_API_KEY=your-actual-api-key-here
   ```

3. Make sure `.env` is in your `.gitignore` (it should be already)

4. Restart your server:
   ```bash
   npm run dev
   ```

#### For Render Deployment:

1. Go to your Render dashboard
2. Select your service
3. Go to **Environment** tab
4. Click **"Add Environment Variable"**
5. Add:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Your actual API key
6. Click **"Save Changes"**
7. Redeploy your service

### Step 3: Verify It's Working

Test the chat endpoint:
```bash
# After logging in and creating a session
POST http://localhost:3001/chat/sessions/YOUR_SESSION_ID/messages
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "message": "Hello"
}
```

You should get a response from the AI instead of an API key error.

---

## Other Required Environment Variables

### MongoDB URI
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database-name
```

### JWT Secret
Generate a random string:
```bash
# On Linux/Mac
openssl rand -base64 32

# Or use an online generator
```
Then set:
```
JWT_SECRET=your-generated-secret-here
```

### Inngest Keys (Optional for local dev)
```
INNGEST_SIGNING_KEY=your-signing-key
INNGEST_EVENT_KEY=your-event-key
```

---

## Troubleshooting

### Error: "API key not valid"
- Make sure you copied the entire API key (no spaces)
- Verify the key is correct in your `.env` file
- Restart your server after adding the key
- Check that `.env` file is being loaded (make sure `dotenv.config()` is called)

### Error: "GEMINI_API_KEY is not set"
- Check that `.env` file exists in the root directory
- Verify the variable name is exactly `GEMINI_API_KEY`
- Make sure there are no quotes around the value in `.env`
- Restart your server

### For Render:
- Make sure you added the environment variable in Render dashboard
- Check that you saved the changes
- Trigger a new deployment after adding the variable

---

## Example .env File

```env
# MongoDB
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/ai-therapy

# JWT
JWT_SECRET=my-super-secret-jwt-key-12345

# Gemini API
GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Server
PORT=3001
NODE_ENV=development

# Inngest (optional)
INNGEST_SIGNING_KEY=your-key-here
INNGEST_EVENT_KEY=your-key-here
```
