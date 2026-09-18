# TODO: Fix React Router Warnings and Firebase Permissions

## Completed
- [x] Added React Router future flags (`v7_startTransition` and `v7_relativeSplatPath`) to BrowserRouter in App.tsx
- [x] Created firestore.rules file with rules to allow writes to messages collection

## Pending
- [ ] Deploy Firestore rules to Firebase console
  - Go to Firebase Console > Firestore Database > Rules
  - Copy the contents of firestore.rules and paste into the rules editor
  - Click "Publish"
- [ ] Test the contact form to ensure messages can be sent without permission errors
- [ ] Verify that React Router warnings are resolved in the console
