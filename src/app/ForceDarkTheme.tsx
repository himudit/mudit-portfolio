'use client';
import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ForceDarkTheme() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        if (!localStorage.getItem("theme")) {
            setTheme("dark");
        }
    }, []);

    return null;
}
