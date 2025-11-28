import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

// importa las imágenes de las colecciones
import Foto1 from "../../assets/foto1.jpg";
import Foto2 from "../../assets/foto2.jpg";
import Foto3 from "../../assets/foto3.jpg";


// Tus 3 colecciones (puedes editar nombres e imágenes)
// Tus 3 colecciones (puedes editar nombres e imágenes)
const collections = [
    {
        title: "Colección 1",
        image: Foto1,
        bestValue: true,
    },
    {
        title: "Colección 2",
        image: Foto2,
        bestValue: false,
    },
    {
        title: "Colección 3",
        image: Foto3,
        bestValue: false,
    },
];



export const Pricing = () => {
    return (
        <section id="pricing" className="py-5">
            {/* Encabezado */}
            <Container className="text-center">
                <Title>Colecciones</Title>
                <Paragraph className="mt-4" children={undefined}>
                    
                </Paragraph>
            </Container>

            {/* Lista de colecciones */}
            <Container className="mt-12">
                <div className="flex flex-wrap justify-center gap-8">

                    {collections.map((item, i) => (
                        <div key={i} className="w-full md:w-[30%]">

                            {/* Contenedor con borde degradado */}
                            <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                                <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow p-8 flex flex-col h-full relative">

                                  
                                    {/* Título */}
                                    <h3 className="text-2xl font-semibold text-heading-1 text-center mb-4">
                                        {item.title}
                                    </h3>

                                    {/* Imagen */}
                                    <div className="w-full h-56 overflow-hidden rounded-xl">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </Container>
        </section>
    );
};

export default Pricing;
