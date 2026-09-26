<div align="center">

# ⚡ FITLOG
### *Train with intent. Log every set.*
***Live Link:*** (https://fit-log-psi-nine.vercel.app)

[![Next.js](https://img.shields.io/badge/Next.js-App%20Router-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%2C%20CSS-3.8+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-4.0+-1AD1A5?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>

---

## 📖 Overview

**FitLog** is a modern, mobile-first fitness tracking and workout library application built with **Next.js App Router**, **Tailwind CSS**, and **DaisyUI**. Designed with a striking dark theme and an energetic `#ccff00` lime accent, FitLog separates server-side data fetching from client-side interactivity to deliver an optimized user experience.

---

## ✨ Key Features

- **🏋️‍♂️ Dynamic Workout Library:** Browse workouts seamlessly with instant client-side sorting (by duration, calories, or rating) without redundant server requests.
- **🧭 Smart Active Navigation:** Real-time path tracking using Next.js `usePathname()` to accurately highlight active routes on both desktop navigation bars and mobile components.
- **📋 "My Plan" & Saved Workflows:** Track custom training routines and saved workouts with dedicated interactive state handling.
- **🎨 Custom Dark-Themed UI:** Crafted with a precise dark palette (`#121212`, `neutral-900`) contrasted against vibrant lime accents (`#ccff00`).
- **🛡️ Robust Error Handling & Suspense:** Features custom-built `loading.tsx` states and a tailored `not-found.tsx` (404) error boundary page.

---

## 🏗️ Architecture & Technical Highlights

### The Hybrid Server-Client Pattern
To comply with Next.js App Router rules while enabling client-side state manipulation:
1. **Server-Side Fetching:** The root page (`app/page.tsx`) acts as an async Server Component, fetching data efficiently on the server.
2. **Client-Side Wrapper:** Data is passed down into an interactive Client Component wrapper (`WorkoutCatalog`), enabling lightning-fast state-based filtering and sorting.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18 or higher) installed on your machine.

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abdullahredoan/fit-log.git
   cd fit-log
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🛠️ Built With

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [DaisyUI](https://daisyui.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment:** [Vercel](https://vercel.com/)

---
