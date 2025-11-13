# 🚀 Note-Taker

A place where you can add notes and get detailed descriptions powered by AI.

Your digital notebook, enhanced with intelligence.

![License](https://img.shields.io/github/license/ksamrat224/Note-Taker)
![GitHub stars](https://img.shields.io/github/stars/ksamrat224/Note-Taker?style=social)
![GitHub forks](https://img.shields.io/github/forks/ksamrat224/Note-Taker?style=social)
![GitHub issues](https://img.shields.io/github/issues/ksamrat224/Note-Taker)
![GitHub pull requests](https://img.shields.io/github/issues-pr/ksamrat224/Note-Taker)
![GitHub last commit](https://img.shields.io/github/last-commit/ksamrat224/Note-Taker)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Nextjs](https://img.shields.io/badge/next-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Node.js](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

---

## 🧠 About

**Note-Taker** is a modern web application built with **TypeScript** and **React** that allows users to create, store, and organize notes.  
What sets it apart is its **AI-powered summarization** feature that provides detailed insights and contextual descriptions for each note — enhancing understanding and productivity.

This project aims to provide a seamless, intelligent, and visually appealing note-taking experience. It’s perfect for students, professionals, or anyone who wants to efficiently manage and recall their notes with AI assistance.

Key technologies used include:
- 🟦 **TypeScript** for type safety  
- ⚡ **Next.js** for building the user interface

The app follows a **modular, component-based architecture** on the frontend and uses a **RESTful API** for frontend-backend communication.  
The highlight feature is the **AI-powered summarization** that generates meaningful overviews of your notes.

---

## ✨ Features

- 📝 **Note Creation** – Create and save notes with a simple, intuitive interface  
- 🤖 **AI Summarization** – Automatically generate meaningful summaries and descriptions  
- ⚡ **High Performance** – Optimized for smooth and fast interactions  
- 🎨 **Modern UI/UX** – Clean design focused on user experience  
- 📱 **Responsive Design** – Works beautifully on all screen sizes  
- 🧩 **Extensible** – Modular and easily extendable architecture  

---





## 🚀 Quick Start

Get started in 3 simple steps:

```bash
git clone https://github.com/ksamrat224/Note-Taker.git
cd Note-Taker
npm install && npm start


## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Git

### Option 1: From Source
```bash
# Clone repository
git clone https://github.com/ksamrat224/Note-Taker.git
cd Note-Taker

# Install dependencies
npm install

# Start development server
npm start
```

## 💻 Usage

### Basic Usage
Create a new note by filling out the form and clicking "Save". View the details of a note by clicking on it in the list.

### AI-Powered Summarization
The AI will automatically generate a description for each note after it is saved. This description will be displayed in the note detail view.

## ⚙️ Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://postgres.=
SUPABASE_URL =https://
SUPABASE_ANON_KEY =
NEXT_PUBLIC_BASE_URL =http://localhost:3000
OPENAI_API_KEY=sk-pr
```

## 📁 Project Structure

```
Note-Taker/
├── 📁 src/
│   ├── 📁 components/          # Reusable UI components
│   ├── 📁 pages/              # Application pages
│   ├── 📁 styles/             # CSS/styling files
│   ├── 📄 App.tsx             # Application entry point
│   └── 📄 index.tsx           # React entry point
├── 📁 public/                 # Static assets
├── 📄 .env.example           # Example environment variables
├── 📄 .gitignore             # Git ignore rules
├── 📄 package.json           # Project dependencies
├── 📄 README.md              # Project documentation
└── 📄 LICENSE                # License file
```


### Development Setup
```bash
# Fork and clone the repo
git clone https://github.com/yourusername/Note-Taker.git

# Install dependencies
npm install

# Create a new branch
git checkout -b feature/your-feature-name

# Make your changes and test
npm test # If tests are available

# Commit and push
git commit -m "Description of changes"
git push origin feature/your-feature-name
```



## Testing

Run tests using:

```bash
npm test
```



- 🎨 **Design inspiration**: [Material UI](https://material-ui.com/)
- 📚 **Libraries used**:
  - [React](https://reactjs.org/) - For building the user interface.
  - [TypeScript](https://www.typescriptlang.org/) - For type safety and improved code quality.
