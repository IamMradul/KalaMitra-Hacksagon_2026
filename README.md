

<div align="center" style="margin-bottom: 0;">
<img width="983" height="44" alt="Screenshot 2025-09-20 005738" src="https://github.com/user-attachments/assets/6b92c278-0ff9-4487-b904-5bd266fffd83" />

  <img width="225" height="177" alt="Screenshot 2025-09-20 005953" src="https://github.com/user-attachments/assets/e7a7c361-bd9e-44f9-bca7-8f837a51dc26" />

  <div style="margin: 12px 0;">
    <img src="https://img.shields.io/badge/Next.js-15-blue?logo=nextdotjs"/>
    <img src="https://img.shields.io/badge/Supabase-PostgreSQL-green?logo=supabase"/>
    <img src="https://img.shields.io/badge/TailwindCSS-v3-38bdf8?logo=tailwindcss"/>
    <img src="https://img.shields.io/badge/License-MIT-yellow?logo=open-source-initiative"/>
    <img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel"/>
  </div>

  <p style="font-size: 1.1em; color: #dc2626; font-weight: 600; margin-top: 0.5em;">Preserving Tradition, Empowering Artisans ✨</p>
</div>
<div align="center">
  <b>🌐</b> <a href="https://kalaaamitra.vercel.app/" target="_blank">https://kalaaamitra.vercel.app/</a>
</div>


<br>



🌟 <b>KalaMitra</b> is a celebration of heritage and creativity, uniting artisans and art lovers in a vibrant, AI-powered marketplace.<br> <b>Inspired by tradition, built with ❤️ for the artisan spirit.</b>

---


## ✨ Features

### 🔐 Authentication & Role Management    
- <b>Supabase Auth</b> with email/password & Google OAuth
- <b>Role-based access</b>: Buyers and Sellers     <img width="334" height="470" align='right' alt="Screenshot 2025-09-20 012457" src="https://github.com/user-attachments/assets/4afe14f7-1c0b-40ed-bf9d-60d577c6f955" />
- <b>Automatic redirects</b> based on user role
- <b>Protected routes</b> and middleware


### 🧑‍🎨 Seller Features
- <b>Virtual Stall Management</b>: Create and customize your artisan profile 
- <b>Product Management</b>: Add, edit, and delete products
- <b>Auctions</b>: Create and manage live auctions for products
- <b>Reels</b>: Showcase artisan stories and products with short video reels 
- <b>AI Tools</b>: Photo enhancement, story generation, and smart recommendations 
- <b>Public Stall Pages</b>: Shareable stall URLs for customers
- <b>Seller Analytics</b>: Track performance and sales
- <b>Notifications</b>: Real-time updates for bids, sales, and activity


### 🛍️ Buyer Features
- <b>Marketplace Browsing</b>: Discover unique handcrafted items
- <b>Advanced Search & Filtering</b>: Find products by category, name, or description  
- <b>Product Details</b>: Rich product pages with artisan information
- <b>Shopping Cart</b>: Add items and manage quantities <img width="181" height="272" align='right' alt="Screenshot 2025-09-20 010627" src="https://github.com/user-attachments/assets/172a5e74-9b82-4de7-85e7-b48709823ea2" />
- <b>Artisan Discovery</b>: Explore individual seller stalls
- <b>Auctions</b>: Participate in live auctions and place bids
- <b>Leaderboard</b>: See top sellers and trending products   
- <b>Notifications</b>: Real-time updates for bids, purchases, and offers
- <b>Recommendations</b>: AI-powered suggestions for products and artisans     


### 🎭 Cultural Theme & Design
- <b>Warm Earthy Palette</b>: Terracotta, saffron, indigo, and beige colors
- <b>Cultural Patterns</b>: Mandala-inspired backgrounds and textures
- <b>Responsive Design</b>: Mobile-first approach with desktop optimization
- <b>Smooth Animations</b>: Framer Motion for delightful user experience
- <b>Multi-language Support</b>: Built-in translation for Indian languages
- <b>Debug Tools</b>: Integrated debug and translation test pages for developers

---

## 🚀 Tech Stack

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15-blue?logo=nextdotjs"/>
  <img src="https://img.shields.io/badge/Supabase-PostgreSQL-green?logo=supabase"/>
  <img src="https://img.shields.io/badge/TailwindCSS-v3-38bdf8?logo=tailwindcss"/>
  <img src="https://img.shields.io/badge/Framer%20Motion-Animation-9cf?logo=framer"/>
  <img src="https://img.shields.io/badge/Lucide-Icons-yellow?logo=lucide"/>
  <img src="https://img.shields.io/badge/TypeScript-Strong%20Typing-blue?logo=typescript"/>      
</div>

- <b>Frontend</b>: Next.js 15 (App Router), TypeScript, TailwindCSS  <img width="220" height="220" align='right' alt="Screenshot 2025-09-20 012802" src="https://github.com/user-attachments/assets/811c092b-f936-4317-9414-9ecf8e9031af" />                       
- <b>Backend</b>: Supabase (PostgreSQL, Auth, Storage)      
- <b>Styling</b>: TailwindCSS with custom cultural theme
- <b>Animations</b>: Framer Motion
- <b>Icons</b>: Lucide React                                                    
- <b>Deployment</b>: Ready for Vercel, Netlify, or any Next.js hosting


---

## 🚀 Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, TailwindCSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Styling**: TailwindCSS with custom cultural theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any Next.js hosting


---

## 📁 Project Structure

```text
KalaMitra/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── api/
│   │   │   ├── auction/
│   │   │   │   ├── route.ts
│   │   │   │   ├── bid/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── cron/
│   │   │   │   │   └── end/
│   │   │   │   │       └── route.ts
│   │   │   │   ├── end/
│   │   │   │   │   └── route.ts
│   │   │   ├── auth/
│   │   │   │   └── google/
│   │   │   │       └── callback/
│   │   │   │           └── route.ts
│   │   │   ├── generate-ad/
│   │   │   │   └── route.ts
│   │   │   ├── leaderboard/
│   │   │   │   └── route.ts
│   │   │   ├── recommendations/
│   │   │   │   └── route.ts
│   │   │   ├── translate/
│   │   │   │   └── route.ts
│   │   ├── auctions/
│   │   │   └── page.tsx
│   │   ├── auth/
│   │   │   ├── signin/
│   │   │   │   └── page.tsx
│   │   │   ├── signup/
│   │   │   │   └── page.tsx
│   │   ├── cart/
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   ├── seller/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── ProfileManager.tsx
│   │   │   │   ├── SellerAnalytics.tsx
│   │   │   │   ├── SellerAuctionsList.tsx
│   │   │   │   └── reels/
│   │   │   │       └── page.tsx
│   │   ├── debug/
│   │   │   └── page.tsx
│   │   ├── leaderboard/
│   │   │   └── page.tsx
│   │   ├── marketplace/
│   │   │   └── page.tsx
│   │   ├── notifications/
│   │   │   └── page.tsx
│   │   ├── product/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   ├── profile/
│   │   │   ├── page.tsx
│   │   │   ├── [user_id]/
│   │   │   │   └── page.tsx
│   │   ├── reels/
│   │   │   └── page.tsx
│   │   ├── stall/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   ├── components/
│   │   ├── AIProductForm.tsx
│   │   ├── AuctionWidget.tsx
│   │   ├── Footer.tsx
│   │   ├── LanguageProvider.tsx
│   │   ├── Leaderboard.tsx
│   │   ├── MotionWrapper.tsx
│   │   ├── Navbar.tsx
│   │   ├── NotificationsList.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── TranslationDebug.tsx
│   │   ├── TranslationTest.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── lib/
│   │   ├── activity.ts
│   │   ├── ai-service.ts
│   │   ├── google-oauth.ts
│   │   ├── i18n.ts
│   │   ├── image-similarity.ts
│   │   ├── supabase.ts
│   │   ├── translate.ts
│   │   └── locales/
│   │       ├── assamese.json
│   │       ├── bengali.json
│   │       ├── bodo.json
│   │       ├── dogri.json
│   │       ├── en.json
│   │       ├── gujarati.json
│   │       ├── hi.json
│   │       ├── kannad.json
│   │       ├── kashmiri.json
│   │       ├── konkani.json
│   │       ├── maithili.json
│   │       ├── malyalam.json
│   │       ├── manipuri.json
│   │       ├── marathi.json
│   │       ├── nepali.json
│   │       ├── oriya.json
│   │       ├── punjabi.json
│   │       ├── sanskrit.json
│   │       ├── santhali.json
│   │       ├── sindhi.json
│   │       ├── tamil.json
│   │       ├── telgu.json
│   │       ├── urdu.json
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
├── eslint.config.mjs
├── GOOGLE_OAUTH_SETUP.md
├── next-env.d.ts
├── next-i18next.config.js
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── vercel.json
```



---

## 🎯 Usage



### 👩‍🎨 For Artisans (Sellers)
1. <b>Sign up</b> as a Seller <img width="320" height="283" align='right' alt="Screenshot 2025-09-20 012059" src="https://github.com/user-attachments/assets/0b54d0aa-9f8e-466c-8165-788bc9c7e169" />
2. <b>Create your virtual stall</b> with bio and profile image
3. <b>Add products</b> with titles, categories, descriptions, and prices  
4. <b>Manage your inventory</b> and view analytics from the seller dashboard
5. <b>Share your stall</b> with customers using the public URL
6. <b>Create and manage auctions</b> for your products
7. <b>Showcase reels</b> to tell your artisan story
8. <b>Receive notifications</b> for bids, sales, and activity
9. <b>Leverage AI tools</b> for product recommendations, photo enhancement, and story generation
10. <b>Access multi-language support</b> for wider reach

### 🛍️ For Art Lovers (Buyers) 
1. <b>Sign up</b> as a Buyer  <img width="200" height="200" align='right' alt="Screenshot 2025-09-20 014235" src="https://github.com/user-attachments/assets/1e774aca-59b8-4901-9e6f-93cd9d10d783" />
2. <b>Browse the marketplace</b> for unique handcrafted items
3. <b>Search and filter</b> products by category or keywords
4. <b>View product details</b> and artisan information
5. <b>Add items to cart</b> and manage your shopping list
6. <b>Participate in live auctions</b> and place bids
7. <b>Watch reels</b> to discover artisan stories
8. <b>Get notifications</b> for bids, purchases, and offers
9. <b>Receive smart AI-powered recommendations</b> for products and artisans
10. <b>Use multi-language support</b> for a personalized experience


---

## 🤖 AI Features

KalaMitra is powered by advanced AI capabilities: <img width="208" height="202" align='left' alt="Screenshot 2025-09-20 013733" src="https://github.com/user-attachments/assets/bd81c756-6f71-4361-abc5-e5312058c665" />


- <b>AI Photo Enhancement</b>: Instantly improve product images
- <b>AI Story Generation</b>: Automated product storytelling
- <b>Smart Recommendations</b>: ML-powered suggestions for buyers and sellers
- <b>Image Recognition</b>: Automatic product categorization

All AI features are fully implemented and ready to use!




<br>


## 🎨 Customization

### 🎨 Colors & Theme
<p align="center">
  <img src="https://img.shields.io/badge/Primary-Orange--500-f97316?style=flat-square"/>
  <img src="https://img.shields.io/badge/Secondary-Red--600-dc2626?style=flat-square"/>
  <img src="https://img.shields.io/badge/Accent-Amber--500-f59e0b?style=flat-square"/>
</p>

KalaMitra uses a warm, earthy palette and mandala-inspired backgrounds for a unique, culturally-rich experience. All styles are managed via TailwindCSS and custom global styles.


---

## 🚀 Deployment

KalaMitra is ready for deployment on Vercel, Netlify, Railway, or any platform supporting Next.js.


---

## 🤝 Contributing

We welcome contributions! Please open issues or pull requests for improvements.


---

## 📄 License

MIT License




<p align="center">
  <b>Preserving Tradition, Empowering Artisans ✨</b>
</p>

