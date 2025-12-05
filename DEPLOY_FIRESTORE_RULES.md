# Deploy Firestore Security Rules

Your Firestore security rules have been created in `firestore.rules`. You need to deploy them to Firebase for them to take effect.

## Option 1: Deploy via Firebase Console (Easiest)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **REDACTED_FIREBASE_PROJECT_ID**
3. Click on **Firestore Database** in the left sidebar
4. Click on the **Rules** tab
5. Copy the contents of `firestore.rules` file
6. Paste it into the rules editor
7. Click **Publish**

## Option 2: Deploy via Firebase CLI

If you have Firebase CLI installed:

```bash
# Install Firebase CLI (if not already installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy rules
firebase deploy --only firestore:rules
```

## What These Rules Do

- ✅ **Authenticated users** can read/write their own user document (`users/{uid}`)
- ✅ **Authenticated users** can read/write their own cart (`users/{uid}/cart/current`)
- ✅ **Authenticated users** can read/write their own orders (`users/{uid}/orders`)
- ✅ **Anonymous users** can read/write session carts (`carts/{sessionId}`)
- ✅ **Authenticated users** can add themselves to the mailing list (`Mailing List`)

## Important Notes

- After deploying, wait a few seconds for the rules to propagate
- Test by signing up a new account - the permission errors should be gone
- If you still see errors, check the Firebase Console for any rule validation errors

