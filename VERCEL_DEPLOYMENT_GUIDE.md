# Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

### 1. **Install Dependencies**
Run locally first to ensure everything builds:
```bash
cd portfolio-app
npm install
npm run build
```

### 2. **Set Up Environment Variables in Vercel**

Go to **Vercel Dashboard → Your Project → Settings → Environment Variables** and add:

#### **Email Configuration (Gmail)**
```
EMAIL_USER = your_email@gmail.com
EMAIL_PASS = your_gmail_app_password
```

**To get Gmail App Password:**
1. Enable 2FA on your Google Account
2. Go to: https://myaccount.google.com/apppasswords
3. Select "Mail" and "Windows Computer" (or your platform)
4. Copy the generated 16-character password
5. Use that as `EMAIL_PASS`

#### **Google Sheets Configuration**
```
GOOGLE_SHEET_ID = abc123xyz456... (from your spreadsheet URL)
GOOGLE_SERVICE_ACCOUNT_EMAIL = service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

**To set up Google Sheets:**
1. Create a Google Cloud Project
2. Enable Sheets API
3. Create a Service Account
4. Download the JSON key file
5. Copy the email and private key to Vercel environment variables
6. Share your Google Sheet with that service account email

### 3. **Deploy to Vercel**

**Option A: Connect GitHub**
1. Push your code to GitHub
2. Go to Vercel.com → New Project
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Add the Environment Variables (see step 2)
6. Click Deploy

**Option B: Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel
```

### 4. **Test the Deployed Site**

After deployment:
1. Visit your site
2. Try the contact form
3. Check that:
   - ✅ Form submits without errors
   - ✅ Email is sent to your inbox
   - ✅ Data appears in Google Sheets

### 5. **Common Issues & Solutions**

#### **Contact Form Not Working**
- Check Vercel logs: Settings → Function Logs
- Verify environment variables are set
- Check EMAIL_PASS is correct (16-char app password)

#### **Google Sheets Not Updating**
- Verify GOOGLE_SERVICE_ACCOUNT_EMAIL has access to the sheet
- Check GOOGLE_PRIVATE_KEY includes full key with \n
- Ensure GOOGLE_SHEET_ID is correct

#### **Cold Start Issues**
- API routes may be slow on first request
- This is normal; subsequent requests are faster
- Consider upgrading to Vercel Pro for faster startup

### 6. **Environment Variables Format**

**For GOOGLE_PRIVATE_KEY in Vercel UI:**
- Paste the entire multi-line key as-is
- Vercel will handle the escaping
- Make sure it starts with `-----BEGIN PRIVATE KEY-----`

### 7. **Monitoring**

After deployment:
- Go to **Vercel Dashboard → Analytics** to monitor performance
- Check **Function Logs** if forms aren't working
- Use **Monitoring** tab to track errors

---

## ✅ All Components Ready for Vercel:

- ✅ Next.js App Router (Route Handlers)
- ✅ Framer Motion animations
- ✅ Tailwind CSS styling
- ✅ Nodemailer email (Gmail)
- ✅ Google Sheets integration
- ✅ serverless functions for APIs
- ✅ Environment variable support

**Your site should work perfectly on Vercel once env variables are configured! 🚀**
