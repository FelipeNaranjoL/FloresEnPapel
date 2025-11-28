import { Paragraph } from "../shared/Paragraph";

// Props del componente Info
interface InfoProps{
    title: string;               // Título de la tarjeta
    description: string;         // Descripción debajo del título
    children?: React.ReactNode;  // (Opcional) Ícono o contenido extra
};

// Tarjeta informativa con ícono, título y descripción
export const Info = ({title,description,children}:InfoProps ) => {
    return (
        // Contenedor: padding, borde, fondo y sombra
        <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-border shadow-lg shadow-box-shadow relative overflow-hidden">
            {/* Área para el ícono (children) */}
            {/* NOTE: "bg-gray" no es una clase válida de Tailwind (revisa si debería ser bg-gray-300/100, etc.) */}
            <div className="rounded-xl bg-body p-3 text-heading-1 w-max relative">{children}</div>

            {/* Título de la tarjeta */}
            <h2 className=" pt-3 text-heading-2 w-max relative font-semibold md:text-xl">{title}</h2>

            {/* Descripción usando el componente Paragraph */}
            <Paragraph>{description}</Paragraph>
        </div>
    );
}
