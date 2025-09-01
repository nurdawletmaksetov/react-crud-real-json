import { createContext, useState } from "react";
import { api } from "../api/api";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    async function login({ phone, password }) {
        try {
            const { data, status } = await api.post("/auth/login", { phone, password });
            if (status === 200) {
                setIsAuth(true);
                localStorage.setItem("access_token", data.data.access_token);
                localStorage.setItem("refresh_token", data.data.refresh_token);
            } else {
                alert("Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed");
        }
    }

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
    };

    async function getMe() {
        const token = localStorage.getItem("access_token");
        if (token) {
            try {
                const { status } = await api.get("/auth/get-me", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (status === 200) {
                    setIsAuth(true);
                }
            } catch (error) {
                console.error("GetMe error:", error);
            }
        }
    }

    return (
        <AuthContext.Provider value={{ isAuth, logout, login, getMe }}>
            {children}
        </AuthContext.Provider>
    );
};
