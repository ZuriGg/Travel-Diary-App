import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./routes/Layout/Layout.jsx";
import Home from "./routes/Home/Home.jsx";
import Login from "./Components/users/Login.jsx";
import Register from "./Components/users/Register.jsx";

import { Profile } from "./Components/users/Profile.jsx";
import { User } from "./Components/users/User.jsx";
import { Entries } from "./Components/entries/Entries.jsx";
import { NewEntry } from "./Components/entries/NewEntry.jsx";
import { useState } from "react";

function App() {
    const [imageEntry, setImageEntry] = useState(null);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home imageEntry={imageEntry} />} />
                    <Route path="users" element={<User />}>
                        <Route path="login" element={<Login />}></Route>
                        <Route path="register" element={<Register />}></Route>
                        <Route path="profile" element={<Profile />}></Route>
                    </Route>
                    <Route path="entries" element={<Entries />}>
                        <Route
                            index
                            element={
                                <NewEntry
                                    imageEntry={imageEntry}
                                    setImageEntry={setImageEntry}
                                />
                            }
                        ></Route>
                        <Route path=":id" element={"dcvevc"}></Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
