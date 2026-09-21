# Aaradhya Nilayam — Housewarming Ceremony Invitation

A pixel-accurate recreation of the **Invitation Nation** Housewarming Ceremony invitation website (`hou001`) built with **React.js**, **Vite**, and **CSS3**.

Assignment for **Code Nimbus Solutions — Front-End Web Development Internship**.

---

## Reference Website
- **Live Demo**: [https://hou001-livedemo.invitationnation.in/#home](https://hou001-livedemo.invitationnation.in/#home)
- **Theme**: Traditional South Indian Housewarming (`hou001`)

---

## Features & Sections Recreated

1. **Preloader / Splash Screen**
   - Rotating sacred green Rangoli animation (`rotate-rangoli 20s infinite linear`).
   - Central Lord Ganesha icon.
   - Smooth auto-dismissal after 3 seconds or on click.

2. **Fixed Header & Navigation**
   - Sticky navigation bar styled in deep temple green (`#243f03`).
   - Home and Gallery navigation tabs with smooth scroll functionality.

3. **Hero Section**
   - Traditional Indian warm ivory gradient background (`linear-gradient(180deg, #fff7db 61.49%, #915c28)`).
   - Hanging marigold floral strings with realistic swaying animations (`hou001-flower-strings`).
   - Animated sacred cows and flanking banana trees (`cowAppearFromLeft`, `cowAppearFromRight`).
   - Rising auspicious Kalash with coconut and mango leaves.
   - Central invitation text: *"Inviting you to The House Warming Ceremony of"*
   - House Name: **Aaradhya Nilayam** in *Marck Script*.
   - Event Date: **6 | September | 2026** in *Marcellus*.
   - Direct action button: **Open in Maps** (linked to Google Maps).
   - Bouncing scroll down indicator.

4. **Countdown Section**
   - Real-time countdown timer ticking toward **September 6, 2026 at 9:45 AM**.
   - Distinct glassmorphic time boxes for **Days**, **Hours**, **Minutes**, and **Seconds** separated by vertical dividers.

5. **Sacred Invitation Message**
   - Rotating Rangoli background around Lord Ganesha.
   - Exact text: *"Together with their families, we cordially invite you to celebrate the housewarming ceremony."*

6. **About Family Section**
   - Ornate floral framing (`famdecoration` / `famdecorationpc`).
   - Family narrative and high-resolution portrait photograph with hover zoom effects.

7. **Location & Venue Section**
   - Destination address card with star decorations and location pin icon.
   - **Open in Maps** and **Contact Host** (`tel:`) action buttons.

8. **Interactive Event Schedule**
   - Left/Right arrow carousel navigation.
   - **Pooja (9:45 AM)**: Featuring the sacred Agni Pooja flame illustration.
   - **Lunch (12:30 PM)**: Featuring the authentic traditional banana leaf feast illustration.
   - Flanking banana trees and ornamental border trim.

9. **Wishes & Guestbook Section**
   - Heartfelt testimonial carousel with corner rangolis and animated ambient light glow.
   - Pre-populated with real community wishes from the live demo.
   - Interactive wish submission form: Name input, character-limited message textarea, AI wish suggestion generator, and validation.
   - Newly submitted wishes immediately appear at the front of the carousel.

10. **Official InvitationNation Footer**
    - Branding: *"housewarming Invitation website by INVITATIONNATION"*
    - Active links: **Report a Problem** (with interactive popup modal), **Contact Support** (`mailto:`), and **Privacy Policy**.
    - Copyright and legal bar.

11. **Floating Action Controls**
    - Fixed bottom-right circular buttons in `#243f03`.
    - Functional background music player playing the instrumental soundtrack (*"Can't Help Falling in Love"*).
    - Quick phone dialer button for the host (+91 6364469555).

---

## Getting Started

### Prerequisites
- Node.js (v18 or newer)
- npm (v9 or newer)

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Deployment (Vercel / Netlify)

### Vercel
1. Push this repository to GitHub.
2. Import the repository in the Vercel dashboard.
3. Select **Vite** as framework preset.
4. Build command: `npm run build`.
5. Output directory: `dist`.

### Netlify
1. Connect repository in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
