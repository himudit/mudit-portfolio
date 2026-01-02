'use client';
import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ForceDarkTheme() {
    const { setTheme } = useTheme();

    useEffect(() => {
        if (!localStorage.getItem("theme")) {
            setTheme("dark");
        }
    }, [setTheme]);

    return null;
}
