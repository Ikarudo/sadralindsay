# Security notes

## Environment variables

Firebase client settings and EmailJS identifiers are loaded from **environment variables** (see `.env.example`). Never commit `.env.local` or paste real values into issues or documentation.

- **Local development**: copy `.env.example` → `.env.local` and fill in values from the Firebase console and EmailJS dashboard.
- **GitHub Actions**: add the same variables as **repository secrets** (Settings → Secrets and variables → Actions) using the names in `.env.example` (e.g. `NEXT_PUBLIC_FIREBASE_API_KEY`, …). The deploy workflow passes them into the build step.

## If credentials were ever committed to Git

Removing them from the latest commit **does not remove them from Git history**. Anyone with a clone may still see old blobs until history is rewritten.

Recommended response:

1. **Treat the values as exposed** and **rotate** where possible:
   - **Firebase / Google Cloud**: restrict the web API key (HTTP referrer restrictions), consider rotating keys per [Google’s guidance](https://support.google.com/cloud/answer/6158862), and review Firebase Authentication / Firestore rules.
   - **EmailJS**: rotate or regenerate keys in the EmailJS dashboard if you are concerned about abuse.
2. **Optional — purge history**: use tools such as [`git filter-repo`](https://github.com/newren/git-filter-repo) or [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) to remove sensitive files from all commits, then **force-push** (this rewrites history; coordinate with anyone else using the repo).

## Client-side `NEXT_PUBLIC_*` variables

Values prefixed with `NEXT_PUBLIC_` are embedded in the browser bundle. That matches how Firebase Web SDK and EmailJS public keys are meant to be used, but you should still **restrict** Firebase API keys in Google Cloud and keep **Firestore security rules** deployed and tested (`DEPLOY_FIRESTORE_RULES.md`).
