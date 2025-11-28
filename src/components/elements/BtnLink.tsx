// ============================================================
// Props del componente BtnLink
// ============================================================

interface BtnLinkProps {
    href: string;       // URL a la que apunta el botón
    text: string;       // Texto que se mostrará dentro del botón
    className?: string; // Clases CSS opcionales adicionales
}

// ============================================================
// Componente BtnLink
// ============================================================

export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
    return (
        // Enlace estilizado como botón
        <a 
            href={href} 
            className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 cursor-pointer transform transition duration-300 ${className}`}
        >
            {/* Texto del botón, siempre visible encima de cualquier efecto */}
            <span className="relative z-10 text-white">
                {text}
            </span>
        </a>
    );
};
