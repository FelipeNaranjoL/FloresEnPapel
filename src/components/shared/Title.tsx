// Define las props que recibe el componente (contenido a mostrar dentro del título).
interface TitleProps {
    children: React.ReactNode; // Texto o elementos JSX dentro del <h1>.
}

// Componente Title → renderiza un <h1> con estilos responsivos.
export const Title = ({ children }: TitleProps) => {
    return (
        <h1 className="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl">
            {children} {/* Muestra el contenido pasado como hijo */}
        </h1>
    );
};
