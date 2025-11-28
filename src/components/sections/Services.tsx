import { services } from "../../utils/Services-data";
import { Service } from "../Cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

// Componente que renderiza la sección de servicios
export const Services = () => {
    return (
        <section id="services">
            <Container className="space-y-10 md:space-y-12">

                {/* Título y descripción de la sección */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <Title>Nuestros servicios.</Title>
                    <Paragraph>
                       En Flores en Papel, los servicios se organizan en torno a la creación de obras originales y encargos personalizados. Trabajamos cada pieza de forma manual, combinando distintas técnicas de pintura y papel maché para dar vida a calaveras, animales y composiciones gráficas que pueden adaptarse a distintos espacios y necesidades.
                    </Paragraph>
                </div>

                {/* Lista de servicios con flexbox */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 place-items-stretch">
  {services.map((service, i) => (
    <div
      key={i}
      className="flex flex-col justify-between min-h-[380px] p-8 rounded-3xl border border-gray-300 shadow-lg"
    >
      {/* Icono */}
      <div className="mb-4 text-blue-600">{service.icon}</div>

      {/* Título */}
      <h3 className="text-xl font-semibold text-heading-1 mb-4">
        {service.title}
      </h3>

      {/* Descripción */}
      <p className="text-base leading-7 text-gray-700">
        {service.description}
      </p>
    </div>
  ))}
</div>

            </Container>
        </section>
    );
};
