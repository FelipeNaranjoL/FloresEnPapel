// ============================================================
// Props del componente NavItem
// ============================================================

interface NavItemProps {
    href: string; // URL a la que apunta el enlace
    text: string; // Texto que se mostrará en el enlace
}

// ============================================================
// Componente NavItem
// ============================================================

export const NavItem = ({ href, text }: NavItemProps) => {
    return (
        // Elemento de lista del menú de navegación
        <li>
            {/* Enlace de navegación con efecto hover */}
            <a 
                href={href} 
                className="duration-300 font-medium ease-linear hover:text-primary py-3"
            >
                {text} {/* Texto del item */}
            </a>
        </li>
    );
};
