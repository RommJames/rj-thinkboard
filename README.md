# 🧠 RJ Thinkboard

A full-stack note-taking and idea management application built with the MERN stack. Thinkboard lets you capture, organize, and manage your thoughts and notes through a clean, responsive interface.

## 📋 Project Description

RJ Thinkboard is a modern web application that provides a simple and intuitive platform for creating and managing notes or "thoughts." It features a decoupled frontend and backend architecture, rate limiting via Upstash Redis to protect the API, and a responsive UI powered by Tailwind CSS and DaisyUI.

## 🛠️ Technologies Used

### Frontend
| Technology | Description |
|---|---|
| [React 19](https://react.dev/) | UI component library |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [Axios](https://axios-http.com/) | HTTP client for API requests |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [DaisyUI](https://daisyui.com/) | Tailwind CSS component library |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React Hot Toast](https://react-hot-toast.com/) | Notifications and toast alerts |
| [Vite](https://vitejs.dev/) | Frontend build tool and dev server |

### Backend
| Technology | Description |
|---|---|
| [Node.js](https://nodejs.org/) | JavaScript runtime environment |
| [Express](https://expressjs.com/) | Web application framework |
| [MongoDB](https://www.mongodb.com/) | NoSQL database |
| [Mongoose](https://mongoosejs.com/) | MongoDB object modeling for Node.js |
| [Upstash Redis](https://upstash.com/) | Serverless Redis for rate limiting |
| [@upstash/ratelimit](https://github.com/upstash/ratelimit) | Rate limiting middleware |
| [dotenv](https://github.com/motdotla/dotenv) | Environment variable management |
| [cors](https://github.com/expressjs/cors) | Cross-origin resource sharing middleware |
| [Nodemon](https://nodemon.io/) | Auto-restart dev server on file changes |

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Upstash Redis account (for rate limiting)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RommJames/rj-thinkboard.git
   cd rj-thinkboard
   ```

2. **Install all dependencies and build the frontend**
   ```bash
   npm run build
   ```

3. **Configure environment variables**

   Create a `.env` file in the `backend/` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   PORT=5000
   ```

4. **Start the application**
   ```bash
   npm start
   ```

### Development

To run the frontend and backend in development mode separately:

```bash
# Backend (from /backend directory)
npm run dev

# Frontend (from /frontend directory)
npm run dev
```

## 📁 Project Structure

```
rj-thinkboard/
├── backend/
│   └── src/
│       └── server.js       # Express server entry point
├── frontend/
│   ├── src/                # React application source
│   ├── public/             # Static assets
│   └── index.html          # HTML entry point
└── package.json            # Root scripts for build & start
```