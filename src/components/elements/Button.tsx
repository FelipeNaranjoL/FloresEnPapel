// ============================================================
// Props del componente Button
// ============================================================

interface ButtonProps {
    className?: string;           // Clases CSS opcionales adicionales
    children: React.ReactNode;    // Contenido dentro del botón (texto o elementos)
    onClick?: () => void;         // Función que se ejecuta al hacer clic
}

// ============================================================
// Componente Button
// ============================================================

export const Button = ({ onClick, children, className = "" }: ButtonProps) => {
    return (
        // Botón con estilos base + clases personalizadas
        <button 
            onClick={onClick} 
            className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent bg-black dark:bg-white dark:text-black ${className}`}
        >
            {children}
        </button>
    );
};
