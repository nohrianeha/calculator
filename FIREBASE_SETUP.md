# Firebase Authentication Setup Guide

This guide will help you set up Firebase Authentication with Google Sign-In for the Calculator App.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or select an existing project
3. Follow the setup wizard:
   - Enter a project name
   - (Optional) Enable Google Analytics
   - Click **"Create project"**

## Step 2: Enable Google Authentication

1. In your Firebase project, go to **Authentication** in the left sidebar
2. Click **"Get started"** if you haven't enabled Authentication yet
3. Click on the **"Sign-in method"** tab
4. Click on **"Google"** from the list of providers
5. Toggle **"Enable"** to turn on Google Sign-In
6. Enter a **Project support email** (your email)
7. Click **"Save"**

## Step 3: Register Your Web App

1. In Firebase Console, click the **gear icon** (⚙️) next to "Project Overview"
2. Select **"Project settings"**
3. Scroll down to the **"Your apps"** section
4. Click the **Web icon** (`</>`) to add a web app
5. Register your app:
   - Enter an app nickname (e.g., "Calculator App")
   - (Optional) Check "Also set up Firebase Hosting"
   - Click **"Register app"**

## Step 4: Get Your Firebase Configuration

After registering your app, Firebase will show you a configuration object. It will look like this:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## Step 5: Update firebase-config.js

1. Open `firebase-config.js` in the Calculatorapp folder
2. Replace the placeholder values with your actual Firebase configuration:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

## Step 6: Configure Authorized Domains (if needed)

If you're testing locally or deploying to a custom domain:

1. Go to **Authentication** > **Settings** > **Authorized domains**
2. Add your domain (e.g., `localhost` for local testing, or your custom domain)

**Note:** `localhost` is already authorized by default for development.

## Step 7: Test the Application

1. Open `index.html` in your browser
2. You should see a "Sign in with Google" button
3. Click it and complete the Google sign-in process
4. After signing in, the calculator should appear

## Troubleshooting

### Error: "auth/unauthorized-domain"
- Make sure your domain is added to the authorized domains list in Firebase Console
- For local testing, `localhost` should work by default

### Error: "auth/popup-blocked"
- Make sure pop-ups are not blocked in your browser
- Try using a different browser or allow pop-ups for this site

### Error: "auth/operation-not-allowed"
- Make sure Google Sign-In is enabled in Firebase Console
- Go to Authentication > Sign-in method > Google and verify it's enabled

### Configuration not working
- Double-check that all values in `firebase-config.js` are correct
- Make sure there are no extra spaces or quotes
- Verify you're using the correct project's configuration

## Security Notes

⚠️ **Important:** The Firebase configuration in `firebase-config.js` contains public keys that are safe to expose in client-side code. However, make sure you:

1. Set up Firebase Security Rules properly
2. Don't expose your Firebase Admin SDK keys
3. Configure authorized domains to prevent unauthorized access

## Additional Resources

- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Google Sign-In Setup](https://firebase.google.com/docs/auth/web/google-signin)
- [Firebase Console](https://console.firebase.google.com/)

