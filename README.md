# EasyShop - Modern E-commerce Platform
[![GitHub Profile](https://img.shields.io/badge/GitHub-iemafzalhassan-blue?logo=github&style=flat)](https://github.com/iemafzalhassan)
![Docker Image](https://img.shields.io/github/forks/iemafzalhassan/easyshop)
[![Stars](https://img.shields.io/github/stars/iemafzalhassan/easyshop)](https://github.com/iemafzalhassan/easyshop)
![GitHub last commit](https://img.shields.io/github/last-commit/iemafzalhassan/easyshop?color=red)

<p align="center">
  <img src="public/logo.svg" alt="EasyShop Logo" width="200"/>
</p>

A modern e-commerce platform built with Next.js 14, featuring server-side rendering, real-time updates, and a seamless shopping experience.

## 🚀 Quick Start Guide

Hi there! 👋 Let's get EasyShop running on your computer. Don't worry if you're new to coding - we'll go through this step by step!

### 1. First Things First - What You Need

Before we start, make sure you have these programs installed on your computer:

- **Node.js** (Version 18 or newer)
  - To check if you have it: Open terminal/command prompt and type `node -v`
  - If not installed: Download from [Node.js website](https://nodejs.org)
  - Pick the "LTS" version - it's the most stable one!

- **MongoDB** (Your database)
  - To check: Type `mongod --version` in terminal
  - If not installed:
    1. Download from [MongoDB website](https://www.mongodb.com/try/download/community)
    2. Follow the installation wizard
    3. For Windows: MongoDB comes with Compass (a nice visual tool) automatically
    4. For Mac: You might want to install MongoDB Compass separately

### 2. Getting the Code

1. **Download the Project**
   ```bash
   # Open terminal and run:
   git clone https://github.com/iemafzalhassan/easyshop.git
   cd easyshop
   ```

2. **Install Project Tools**
   ```bash
   # This might take a few minutes
   npm install
   ```

### 3. Setting Up Your Secret Settings (.env)

1. Create a new file called `.env` in the main project folder
2. Copy this into your `.env` file:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/easyshop

   # Authentication
   JWT_SECRET=your-super-secret-key-change-this
   
   # App Settings
   NEXT_PUBLIC_API_URL=http://localhost:3000
   NODE_ENV=development
   ```

### 4. Setting Up the Database

1. **Start MongoDB**
   - Windows: MongoDB should be running as a service
   - Mac/Linux:
     ```bash
     # In a new terminal
     mongod
     ```

2. **Load Sample Data (Optional)**
   ```bash
   # This will add some example products and categories
   npm run migrate
   ```

### 5. Start the Project! 🎉

```bash
# Run this in your terminal
npm run dev
```

Now open your web browser and go to: `http://localhost:3000`

You should see the EasyShop homepage! 🎊

## 🛠️ Common Problems & Solutions

### Can't Start the Project?
- Make sure MongoDB is running
- Check if port 3000 is free (close other apps that might use it)
- Try `npm install` again

### Database Connection Issues?
1. Open MongoDB Compass
2. Click "New Connection"
3. Paste: `mongodb://localhost:27017`
4. Click "Connect"
5. You should see "easyshop" database

### Login Not Working?
1. Clear your browser cookies
2. Make sure your `.env` file has the correct settings
3. Try registering a new account

## 📱 Features

- 🌙 Dark/Light Mode
- 🛍️ Shopping Cart
- 🔍 Product Search
- 👤 User Profiles
- 📱 Mobile Friendly
- 🛒 Order Management
- ❤️ Wishlist
- 🔒 Secure Authentication

## 🏗️ Project Structure

```
easyshop/
├── src/
│   ├── app/           # Pages and API routes
│   ├── components/    # Reusable UI components
│   ├── lib/          # Utilities and configurations
│   └── styles/       # CSS and styling
├── public/           # Static files (images, etc.)
└── package.json      # Project dependencies
```

## 🤝 Need Help?

- 📖 Check our [Issues](https://github.com/iemafzalhassan/easyshop/issues) page
- 💬 Ask in our [Discussions](https://github.com/iemafzalhassan/easyshop/discussions)
- 📧 Contact: [support@easyshop.com](mailto:support@easyshop.com)

## 🌟 Contributing

We love help! Here's how you can contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

---

Made with <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20on%20Fire.png" alt="Heart on Fire" width="25" height="25" /> by [iemafzalhassan](https://github.com/iemafzalhassan)
