# Mother Kelley's Home Cooking • Web App 🍳

> **Conversion-focused, mobile-first web application designed and built for Mother Kelley's Home Cooking in Texarkana, Arkansas.**

![Mother Kelley's Southern Home Cooking](https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80)

---

## 📍 About The Restaurant
* **Business:** Mother Kelley's Home Cooking
* **Location:** 822 W 7th St, Texarkana, AR 71854
* **Phone:** [(870) 216-0302](tel:+18702160302)
* **Hours:** Monday – Friday, 10:30 AM – 2:50 PM (Closed Weekends)
* **Reputation:** **4.8 Stars** across 550+ verified Google Reviews
* **Specialty:** Authentic Southern Comfort & Daily Plate Lunch Specials

---

## ✨ Features & Architecture

* **🎯 Conversion-First Hero Section:**
  * Displays verified 4.8★ Google badge & review count.
  * Real-time open/closed status badge based on Arkansas US Central Time (`America/Chicago`).
  * Direct 1-tap **"Call for Takeout"** primary CTA button.
  * Direct navigation to directions & daily specials.
* **📅 Interactive Weekly Specials Showcase:**
  * Dynamic Monday–Friday schedule (defaults to today's special).
  * Highlights rotating entrées: Meatloaf, Beef Tips & Rice, Chicken Fried Steak, Pork Chops, and Fried Chicken & Dumplings.
  * Recommended vegetable pairings with scratch Hot Water Cornbread.
* **📋 Filterable Southern Menu with Live Search:**
  * Categorized tabs: Mains, Southern Sides, Scratch Breads, Homemade Desserts, Cold Drinks.
  * Instant real-time search by ingredient or dish name.
* **⚡ Interactive Plate Builder & Takeout Assistant:**
  * Allows diners to pick 1 Entrée + 2 or 3 Sides + Bread.
  * Calculates real-time total.
  * Copies pre-formatted order summary to clipboard for seamless phone call ordering.
* **⭐ Social Proof & Google Reviews:**
  * Real diner quotes highlighting fork-tender chicken fried steak, sweet tea, and warm Southern hospitality.
* **🗺️ Location, Directions & Parking Guide:**
  * Embedded Google Map with turn-by-turn navigation link.
  * Practical instructions for parking and avoiding peak lunch rush times.
* **📱 Fixed Mobile Sticky Bottom Bar (`< 768px`):**
  * Instant thumb-friendly dual CTA: **"Call Now to Order"** & **"Get Directions"**.

---

## 🛠️ Tech Stack

* **Framework:** React 19 + Vite 8
* **Styling:** Tailwind CSS v4
* **Icons:** Lucide React
* **Typography:** Fraunces / Playfair Display & Plus Jakarta Sans

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18+)
* npm (v9+)

### Installation
```bash
# Clone the repository
git clone https://github.com/<your-username>/mother-kelley-home-cooking.git

# Navigate into the project folder
cd mother-kelley-home-cooking

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory ready for deployment on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

---

## 📄 License
MIT License. Created for Mother Kelley's Home Cooking pitch presentation.
