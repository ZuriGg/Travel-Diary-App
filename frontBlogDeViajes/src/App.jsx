import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./routes/Layout/Layout.jsx";
import Home from "./routes/Home/Home.jsx";
import Login from "./Components/users/Login.jsx";
import Register from "./Components/users/Register.jsx";

import { Profile } from "./Components/users/Profile.jsx";
import { User } from "./Components/users/User.jsx";
//import { Entries } from "./Components/entries/Entries.jsx";
import { NewEntry } from "./Components/entries/NewEntry.jsx";
//import { useState } from "react";
import { EntryCard } from "./routes/entries/EntryCard.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<User />}>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
          <Route path="newEntry" element={<NewEntry />} />
          <Route path="entries/:id" element={<EntryCard />}></Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
