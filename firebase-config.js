// Firebase configuration for the hosted budget app (project: grayum-budget).
//
// These web-config values are public project identifiers, not secrets;
// access control lives in firestore.rules / storage.rules plus the
// two-email allowlist below.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAWItNYnrqfkKktp-yW9Gf39EaSrbC916k",
  authDomain: "grayum-budget.firebaseapp.com",
  projectId: "grayum-budget",
  storageBucket: "grayum-budget.firebasestorage.app",
  messagingSenderId: "379391539395",
  appId: "1:379391539395:web:7aba5ece43b3252ff04a76"
};

// The only two accounts allowed into this budget. Enforced in the UI
// (non-listed users see an invite-only screen and no listeners attach)
// AND in firestore.rules / storage.rules (server-side, email-verified).
window.ALLOWLIST_EMAILS = [
  "mrgrayum@gmail.com",
  "stephanie.grayum@gmail.com"
];
