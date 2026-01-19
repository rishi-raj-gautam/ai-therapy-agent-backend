# Deployment Guide: Hosting on Render

This guide will walk you through deploying your AI Therapy Agent Backend to Render step by step.

## Prerequisites

- A GitHub account (or GitLab/Bitbucket)
- A Render account (sign up at https://render.com)
- Your code pushed to a Git repository

## Step-by-Step Deployment Instructions

### Step 1: Prepare Your Code

1. **Commit all your changes** to Git:
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   ```

2. **Push to your repository** (GitHub/GitLab/Bitbucket):
   ```bash
   git push origin main
   ```

### Step 2: Create a Render Account

1. Go to https://render.com
2. Click **"Get Started for Free"** or **"Sign Up"**
3. Sign up using GitHub (recommended) or email
4. Verify your email if required

### Step 3: Create a New Web Service

1. In your Render dashboard, click **"New +"** button
2. Select **"Web Service"**
3. Connect your Git repository:
   - If using GitHub, click **"Connect GitHub"** and authorize Render
   - Select your repository: `ai-therapist-agent-backend-main`
   - Click **"Connect"**

### Step 4: Configure Your Service

Fill in the following settings:

**Basic Settings:**
- **Name**: `ai-therapy-agent-backend` (or your preferred name)
- **Region**: Choose closest to your users (e.g., `Oregon (US West)`)
- **Branch**: `main` (or your default branch)
- **Root Directory**: Leave empty (or `.` if needed)
- **Runtime**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Plan**: Select **Free** (or upgrade if needed)

**Advanced Settings (Optional):**
- If you created `render.yaml`, Render will auto-detect it
- Otherwise, use the settings above

### Step 5: Set Environment Variables

Click on **"Environment"** tab and add the following variables:

**Required Variables:**

1. **NODE_ENV**
   - Value: `production`

2. **PORT**
   - Value: `10000` (Render automatically sets this, but you can specify)

3. **MONGODB_URI**
   - Value: Your MongoDB connection string
   - Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/database-name`
   - Get this from MongoDB Atlas or your MongoDB provider

4. **INNGEST_SIGNING_KEY**
   - Value: Your Inngest signing key
   - Get from: https://app.inngest.com/env/[your-env]/manage/signing-key
   - This is required for Inngest to sync your functions

5. **INNGEST_EVENT_KEY** (Optional but recommended)
   - Value: Your Inngest event key
   - Used for sending events to Inngest

6. **GEMINI_API_KEY**
   - Value: Your Google Gemini API key
   - Get from: https://makersuite.google.com/app/apikey

**Additional Variables (if needed):**

7. **JWT_SECRET** (if you use JWT authentication)
   - Value: A secure random string
   - Generate with: `openssl rand -base64 32`

8. **Any other environment variables** your app requires

**To add each variable:**
- Click **"Add Environment Variable"**
- Enter the key name
- Enter the value
- Click **"Save Changes"**

### Step 6: Deploy

1. Scroll down and click **"Create Web Service"**
2. Render will start building your application
3. You can watch the build logs in real-time
4. The build process will:
   - Install dependencies (`npm install`)
   - Build TypeScript (`npm run build`)
   - Start your server (`npm start`)

### Step 7: Verify Deployment

1. **Wait for deployment to complete** (usually 2-5 minutes)
2. **Check the logs** for any errors:
   - Look for "Server is running" message
   - Check for MongoDB connection success
   - Verify Inngest endpoint is available

3. **Test your endpoints:**
   - Health check: `https://your-app-name.onrender.com/health`
   - Inngest endpoint: `https://your-app-name.onrender.com/api/inngest`

### Step 8: Configure Inngest Dashboard

1. Go to your Inngest dashboard: https://app.inngest.com
2. Navigate to your app settings
3. Update the **SDK URL** to your Render URL:
   - `https://your-app-name.onrender.com/api/inngest`
4. Click **"Save"** or **"Sync"**
5. Your functions should now sync successfully!

### Step 9: Test Your Deployment

1. **Test the health endpoint:**
   ```bash
   curl https://your-app-name.onrender.com/health
   ```
   Should return: `{"status":"ok","message":"Server is running"}`

2. **Test Inngest sync:**
   - Go to Inngest dashboard
   - Check if your functions appear
   - Try triggering a test event

## Troubleshooting

### Build Fails

**Issue**: Build command fails
**Solution**: 
- Check build logs in Render dashboard
- Ensure TypeScript compiles without errors
- Verify all dependencies are in `package.json`

### Server Won't Start

**Issue**: Application crashes on start
**Solution**:
- Check runtime logs in Render dashboard
- Verify all environment variables are set
- Ensure MongoDB connection string is correct
- Check that PORT is set correctly

### Inngest Not Syncing

**Issue**: Functions don't appear in Inngest dashboard
**Solution**:
- Verify `INNGEST_SIGNING_KEY` is set correctly
- Check that your Render URL is accessible publicly
- Update SDK URL in Inngest dashboard to your Render URL
- Check Render logs for Inngest-related errors

### MongoDB Connection Fails

**Issue**: Cannot connect to MongoDB
**Solution**:
- Verify `MONGODB_URI` is correct
- Check MongoDB Atlas IP whitelist (add `0.0.0.0/0` for Render)
- Ensure MongoDB credentials are correct

### CORS Issues

**Issue**: Frontend can't connect to backend
**Solution**:
- Update CORS configuration in `src/index.ts` to allow your frontend domain
- Add your frontend URL to CORS origins

## Render Free Tier Limitations

- **Spins down after 15 minutes** of inactivity
- **Takes 30-60 seconds** to wake up after spin-down
- **Limited resources** (512MB RAM)
- Consider upgrading to **Starter Plan ($7/month)** for:
  - Always-on service
  - More resources
  - Better performance

## Updating Your Deployment

1. **Make changes** to your code
2. **Commit and push** to your repository:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```
3. **Render automatically deploys** the new version
4. **Monitor the deployment** in Render dashboard

## Useful Render Dashboard Features

- **Logs**: View real-time application logs
- **Metrics**: Monitor CPU, memory, and request metrics
- **Events**: View deployment history
- **Settings**: Update environment variables, change plan, etc.

## Security Best Practices

1. **Never commit** `.env` files to Git
2. **Use strong secrets** for JWT_SECRET and API keys
3. **Rotate API keys** regularly
4. **Enable MongoDB authentication**
5. **Use HTTPS** (Render provides this automatically)

## Support

- **Render Docs**: https://render.com/docs
- **Render Support**: https://render.com/support
- **Inngest Docs**: https://www.inngest.com/docs

---

**Your app will be available at**: `https://your-app-name.onrender.com`

Replace `your-app-name` with the actual name you chose in Step 4.
