interface ContainerProps {
    children: React.ReactNode;  // Contenido que se renderiza dentro del contenedor
    className?: string;         // Clases adicionales de Tailwind o CSS
}

export const Container = ({ children, className = "" }: ContainerProps) => {
    return (
        <div
            className={`
        mx-auto           /* Centra el contenedor horizontalmente */
        w-full            /* Ocupa todo el ancho disponible */
        max-w-screen-xl   /* Máximo ancho para pantallas grandes */
        px-4              /* Padding horizontal por defecto (móviles pequeños) */
        sm:px-6           /* Padding en pantallas pequeñas y tablets */
        md:px-10          /* Padding en pantallas medianas (720p) */
        lg:px-14          /* Padding en pantallas grandes (1080p) */
        xl:px-20          /* Padding extra en pantallas muy grandes */
        ${className}      /* Clases extra que se pasen desde fuera */
      `}
        >
            {children}
        </div>
    );
};
