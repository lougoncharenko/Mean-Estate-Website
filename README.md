# Mern Estate
Build a Modern Real Estate Marketplace with react MERN (jwt, redux toolkit).

## Steps I took to complete this project
### Ran the project using Vite and react
1. command to start vite project
```npm create vite@latest```
2. Titled my front-end as client and choose react.
3. Installed tailwind on my Project using this [documentation](https://tailwindcss.com/docs/guides/vite)
4. Ran my project with the following command:
``` npm run dev ```

### Created pages and routes
1. installed react-router-dom ```npm i react-router-dom``` in my client folder
2. Create a home, signup, signin, about and profile page and made them as routes on App.js 
```
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Created a basic header component
1. Styled a log, search bar and some links.

### Create a server
1. installed express
``` npm i express```
2. installed mongoose
```npm i mongoose```

### Connected to a database
1. Create a mongoDB account
[mongoDb website](https://account.mongodb.com/account/login)
2. Set up a cluster called mern-estate
3. connected database to my application
4. created a .env file to hide my link connected to DB

### Created Models, Routes and Controller
1. User model:
```
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);


const User = mongoose.model('User', userSchema);

export default User;
```
auth controller
```
import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup)

export default router;
```

Used insomnia rest to test my API calls
[Link for Insomnia Rest](https://insomnia.rest)
Set up an account test API calls
1. Click on the home icon
2. Click on the + icon and select request collections
3. Name your collections
4. Click on the + icon and select http request
5. select get, post, put and add the api address
6. Add json in the body and send the request.



