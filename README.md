# 🚲 VIT CycleShare

**VIT CycleShare** is a full‑stack web and mobile application built for students of **VIT Vellore**, enabling them to easily **rent and share bicycles** across campus. It provides a fast, affordable, and eco‑friendly way to get around the sprawling university grounds.

## 🎨 Frontend

- **Framework:** Next.js (React)
  - **Server‑Side Rendering (SSR):** Pre‑renders key pages (map view, station list) for faster load and SEO.
  - **Client‑Side Navigation:** Uses React Router and dynamic routing for seamless transitions between “Reserve,” “History,” and “Profile” screens.
  - **State Management:** Redux Toolkit to manage user auth state, bike availability, and ride session data.
  - **UI Components:** Built with Tailwind CSS and shadcn/ui for cards, modals, and responsive layouts.
- **Mapping & Geolocation:**  
  - Integrates Mapbox GL JS to display real‑time bike locations and station markers.  
  - Uses browser Geolocation API to center the map on the user’s current position.
- **QR Code Scanner:**  
  - Implements `react-qr-reader` to scan and validate bicycle QR codes for unlocking.

## ⚙️ Backend

- **Runtime & Framework:** Node.js with Express.js  
  - **RESTful API:** Endpoints for user authentication, bike reservation, station status, and ride history.  
  - **WebSocket (Socket.IO):** Pushes live updates on bike availability and session timers to connected clients.
- **Database:** MongoDB (hosted via Atlas)  
  - Collections for `users`, `stations`, `bikes`, and `rides`.  
  - Mongoose ODM for schema definitions and data validation.
- **Authentication & Security:**  
  - JWT‑based token authentication, stored in secure HTTP‑only cookies.  
  - Passwords hashed with bcrypt.  
  - Rate limiting and Helmet middleware for basic API hardening.
- **DevOps & Deployment:**  
  - Dockerized services for frontend and backend.  
  - CI/CD pipeline on GitHub Actions to run tests, build Docker images, and deploy to AWS Elastic Beanstalk.

## 📱 Features

- 🗺️ **Live Cycle Map:** Interactive campus map showing all active bicycles and docking stations.  
- 🔓 **QR Code Unlocking:** Securely unlock bikes via in‑app QR scanning tied to your VIT student account.  
- ⏱️ **Ride Tracking & Billing:** Tracks start/end times, calculates fare automatically, and allows in‑app payments.  
- ⚙️ **Maintenance Reporting:** Submit issues (flat tire, broken lock) with photo uploads—alerts maintenance team instantly.  
- 🧠 **Smart Station Suggestions:** Recommends nearby stations based on real‑time usage patterns and historical data.

---

> 🧪 Built by VIT students, for VIT students. Contributions welcome—see [CONTRIBUTING.md](./CONTRIBUTING.md) for details!  
