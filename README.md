# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community
CardMart
CardMart is a sleek, user-friendly mobile application designed for seamless gift card purchasing. Built with modern frontend technologies, it provides an intuitive interface for browsing, selecting, and buying digital gift cards from various retailers—all from the palm of your hand. Whether you're gifting a loved one or treating yourself, CardMart makes it quick, secure, and hassle-free.
🚀 Features

Browse Gift Cards: Explore a curated selection of popular gift cards (e.g., Amazon, iTunes, Steam) with vibrant previews and details.
Secure Authentication: User login and signup powered by Firebase Auth for protected account management.
Easy Checkout: Integrated payment processing via Paystack for smooth transactions in supported regions.
Responsive Design: Optimized for mobile devices, ensuring a smooth experience on iOS and Android.
Real-Time Updates: Dynamic UI updates for cart management and order confirmations.

This is a frontend-only implementation, focusing on the user interface and client-side logic. Backend integration (e.g., actual gift card fulfillment) can be extended as needed.
🛠 Tech Stack

Frontend Framework: React Native (for cross-platform mobile development)
Authentication: Firebase Authentication
Payments: Paystack SDK
UI Library: React Native Elements or NativeBase for components
Other: TypeScript for type safety, Axios for API calls

📱 Getting Started
Prerequisites

Node.js (v18+)
Yarn or npm
Expo CLI (if using Expo for development)
Firebase project setup
Paystack merchant account

Installation


Clone the repository:
cd CardMart


Install dependencies:
yarn install
# or
npm install


Configure API Keys (Critical Setup):
1. Firebase Configuration:

Navigate to the src/config/ directory (or root if not structured) and locate FirebaseConfig.ts.
Replace the placeholder apiKey with your actual Firebase Auth API key from the Firebase Console 


2.Paystack Integration:

Open src/screens/Payment.tsx (or the relevant payment component file).
Insert your Paystack public key into the initialization code. Ensure you're using the test key for development.
Join our community of developers creating universal apps.
<img width="600" height="1000" alt="Simulator Screenshot - iPhone 11 - 2025-09-21 at 20 57 44" src="https://github.com/user-attachments/assets/43317445-fa43-44df-b6f7-fbfd603b1418" />
<img width="600" height="1000" alt="Simulator Screenshot - iPhone 11 - 2025-09-21 at 20 58 04" src="https://github.com/user-attachments/assets/56afbae1-cc15-4b54-b186-ce533e656995" />
<img width="600" height="1000" alt="Simulator Screenshot - iPhone 11 - 2025-09-21 at 20 58 14" src="https://github.com/user-attachments/assets/d60c16c2-7017-459b-869a-a2ec4949fcaa" />
<img width="600" height="1000" alt="Simulator Screenshot - iPhone 11 - 2025-09-21 at 20 58 22" src="https://github.com/user-attachments/assets/f9cbc641-8510-4cf2-9646-b9cba13343ea" />



- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

- 
