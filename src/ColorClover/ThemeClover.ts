import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark"

interface ThemeClover {
    theme: Theme;
    toggleTheme: () => void;
}

export const useThemeClover = create<ThemeClover>()(
    persist(
        (set, get) => ({
            // Inicializa el tema según preferencia del sistema
            theme:
                typeof window !== "undefined" &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light",

            // Función para alternar tema
            toggleTheme: () => {
                const newTheme: Theme = get().theme === "light" ? "dark" : "light";

                if (typeof document !== "undefined") {
                    document.documentElement.classList.toggle(
                        "dark",
                        newTheme === "dark"
                    );
                }

                set({ theme: newTheme });
            },
        }),
        { name: "theme", onRehydrateStorage: () => (state) => {
            if(state?.theme === "dark"){
                document.documentElement.classList.add("dark")
            }else {
                document.documentElement.classList.remove("dark")
            }
        } } // Nombre de la persistencia en localStorage
    )
);
