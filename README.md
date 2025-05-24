# 👗 Zamor Mobile Fashion App — Frontend

**Zamor** is a modern, mobile-first fashion e-commerce app built using **Vue 3** and **Ionic Vue**. It delivers a seamless and stylish shopping experience while communicating with a Laravel API backend via **Sanctum-authenticated REST APIs**. Images are managed and displayed through **Cloudinary**.

---

## 🚀 Features

- 📱 Responsive Mobile UI with Ionic Components  
- 🔐 Authentication with Laravel Sanctum  
- 🧾 View & Search Fashion Products  
- 🛒 Add to Cart & Manage Orders  
- ☁️ Cloudinary Image Integration  
- ⚡ Fast, smooth, and modern design

---

## 🛠️ Tech Stack

- **Vue 3 + Vite**
- **Ionic Vue**
- **Tailwind CSS**
- **Vue Router**
- **Pinia (State Management)**
- **Axios**
- **Cloudinary (via API)**
- **Laravel Sanctum (via Backend)**

---

![ZamorUI](https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744620438/tommyposterlong_q5cvyu.jpg) 

Login And Register Screen: 

<div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: flex-start;">
  <img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078668/Login_lvf9cv.png" alt="ZamorLogin" style="width: 45%; max-width: 300px; border-radius: 8px;" />
  <img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078668/Screenshot_2025-05-24_at_17-10-06_Ionic_App_umcrzz.png" alt="ZamorRegister" style="width: 45%; max-width: 300px; border-radius: 8px;" />
</div>

**Register** features Bcrypt for password encryption and Sanctum tokens for handling user sessions.  
**VueTS** handles password salt features manually.


## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/zamor-frontend.git
cd zamor-frontend

# Install dependencies
npm install

# Run the app
npm run dev
