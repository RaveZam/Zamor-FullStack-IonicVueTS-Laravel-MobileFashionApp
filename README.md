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



Login And Register Screen: 

<div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: flex-start;">
  <img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078668/Login_lvf9cv.png" alt="ZamorLogin" style="width: 45%; max-width: 300px; border-radius: 8px;" />
  <img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078668/Screenshot_2025-05-24_at_17-10-06_Ionic_App_umcrzz.png" alt="ZamorRegister" style="width: 45%; max-width: 300px; border-radius: 8px;" />
</div>

**Register** features Bcrypt for password encryption and Sanctum tokens for handling user sessions.  
**VueTS** handles password salt features manually.

**HomePage** 
<table>
  <tr>
    <td><img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078665/Screenshot_2025-05-24_at_17-11-25_Ionic_App_pn6tar.png" width="200"/></td>
    <td><img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078665/Screenshot_2025-05-24_at_17-11-44_Ionic_App_ngatjd.png" width="200"/></td>
    <td><img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078665/Screenshot_2025-05-24_at_17-11-44_Ionic_App_ngatjd.png" width="200"/></td>
    <td><img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078665/Screenshot_2025-05-24_at_17-11-01_Ionic_App_xfitcu.png" width="200"/></td>
  </tr>
</table>



🛍️ Product Management & Display

    All product data is managed and stored via Laravel, including product details, stock, and available sizes.

    The slider area uses SwiperJS for a sleek, mobile-friendly, and responsive design experience.

    Each product supports:

        🔢 Stock mechanics (real-time quantity tracking)

        📏 Size variations (e.g., S, M, L, XL)

🖼️ Image Hosting

    Initially, Cloudinary was used for hosting all product and UI images.

    Due to inconsistent internet connectivity on campus, images are temporarily stored locally for development and testing.

    
**Cart And Favorites Section** 

<table>
  <tr>
    <td>
      <img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078664/Screenshot_2025-05-24_at_17-12-59_Ionic_App_t70zxf.png" alt="Cart Section" width="200" style="border-radius: 8px;" />
    </td>
    <td>
      <img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078664/Screenshot_2025-05-24_at_17-13-30_Ionic_App_je6mri.png" alt="Favorites Section" width="200" style="border-radius: 8px;" />
    </td>
  </tr>
</table>

    The Cart section features:

        ✅ Simple radio buttons to choose specific items to purchase

        🎯 A select/deselect all option for convenience

    The Favorites section offers:

        🔖 A bookmark-style toggle to save items for future consideration

        🧠 Seamless UX to keep track of desired purchases


  **Transaction Screens from Selecting Address To Payment Methods** 

<table>
  <tr>
    <td>
      <img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078664/Screenshot_2025-05-24_at_17-21-27_Ionic_App_x15ofm.png" alt="Cart Section" width="200" style="border-radius: 8px;" />
    </td>
    <td>
      <img  src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078663/Screenshot_2025-05-24_at_17-21-39_Ionic_App_vdirms.png" alt="Favorites Section" width="200" style="border-radius: 8px;" />
    </td>
    <td>
      <img  src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078663/Screenshot_2025-05-24_at_17-22-00_Ionic_App_cm3zjc.png" alt="Favorites Section" width="200" style="border-radius: 8px;" />
    </td>
    <td>
      <img  src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078664/Screenshot_2025-05-24_at_17-14-26_Ionic_App_hbtchb.png" alt="Favorites Section" width="200" style="border-radius: 8px;" />
    </td>
  </tr>
</table>


🧾 Transaction System

The transaction system features:

    Dynamic Address Handling – Users can input custom delivery addresses at checkout.

    Payment Integration – Supports flexible payment flows.

    Automatic Stock Management – Product stock adjusts in real-time based on orders.

    Order History Tracking – Each user has access to a detailed record of their past transactions to monitor their spending and activity.

## Account Settings Section

This section manages user authentication through Laravel Sanctum tokens, ensuring secure and reliable session handling. Additionally, it incorporates a Remember Me functionality that validates persistent tokens, enabling users to maintain their login state for improved convenience and a seamless experience.

---

### Screenshots

<p align="center">
  <img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078663/Screenshot_2025-05-24_at_17-13-57_Ionic_App_jzqzf4.png" alt="Account Settings 1" width="200" style="margin-right:10px;" />
  <img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078663/Screenshot_2025-05-24_at_17-14-07_Ionic_App_tm6byi.png" alt="Account Settings 2" width="200" style="margin-right:10px;" />
  <img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078663/Screenshot_2025-05-24_at_17-15-16_Ionic_App_cmciqm.png" alt="Account Settings 3" width="200" style="margin-right:10px;" />
  <img src="https://res.cloudinary.com/dcdgu2fxc/image/upload/v1748078663/Screenshot_2025-05-24_at_17-13-57_Ionic_App_jzqzf4.png" alt="Account Settings 4" width="200" />
</p>




## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/zamor-frontend.git
cd zamor-frontend

# Install dependencies
npm install

# Run the app
npm run dev
