import { Paragraph } from "../shared/Paragraph";

// Props que recibe cada servicio
interface ServiceProps {
    title: string;            // Título del servicio
    description: string;      // Descripción del servicio
    icon: React.ReactNode;    // Icono representativo (SVG o componente)
}

// Componente para mostrar un servicio individual
export const Service = ({ title, description, icon }: ServiceProps) => {
    return (
        <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-border shadow-lg shadow-box-shadow relative overflow-hidden">
            
            {/* Icono del servicio */}
            <div className="rounded-xl bg-body p-3 text-heading-1 w-max relative">
                {icon}
            </div>

            {/* Título y descripción */}
            <div className="mt-6 space-y-4 relative">
                <h2 className="text-lg md:text-xl font-semibold text-heading-2">{title}</h2>
                <Paragraph>{description}</Paragraph>
            </div>
        </div>
    );
};
