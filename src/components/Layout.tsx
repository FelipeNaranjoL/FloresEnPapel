// Importaciones necesarias
//------------------------------------------------------------
// importar seccion de Navbar
import { Navbar } from "./elements/Navbar";
// importar seccion de Footer
import { Footer } from "./elements/Footer"; 
// importar funciones de react 
import { useEffect } from "react";

interface LayoutProps {
    title: string;              // Prop "title" obligatoria, de tipo string
    children: React.ReactNode;  // Prop "children", que puede ser cualquier nodo React (texto, JSX, componentes, etc.)
}

// ============================================================
// Definición del componente Layout
// ============================================================

export const Layout = ({title, children}: LayoutProps) => {

    // useEffect se ejecuta cada vez que cambia la prop "title"
    // Su función es actualizar el título de la pestaña del navegador dinámicamente
    useEffect(() => {
        document.title = title;
    }, [title]);

    // Renderizado del layout principal
    return (
        <>
            {/* Barra de navegación superior */}
            <Navbar/>

            {/* Contenido principal de la página */}
            <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
                {children}
            </main>

            {/* Pie de página */}
            <Footer/>
        </>
    );
};