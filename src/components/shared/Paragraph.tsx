// Definimos las props que acepta el componente
interface ParagraphProps {
    children: React.ReactNode;  // Contenido dentro del párrafo (texto o elementos)
    className?: string;         // Clases extra opcionales
}

// Componente funcional Paragraph
export const Paragraph = ({ children, className = "" }: ParagraphProps) => {
    return (
        // <p> con estilos por defecto + clases personalizadas
        <p className={`text-heading-3 md:text-lg ${className}`}>{children}</p>
    );
};
