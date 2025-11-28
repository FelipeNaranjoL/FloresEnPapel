import { Container } from "../shared/Container";
import agencia from "../../assets/agencia.jpg";
import { Info } from "../Cards/Info";

// Sección "About Us"
export const AbousUs = () => {
    return (
        <section id="about-us">
            <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">

                {/* Imagen ilustrativa */}
                <div className="w-full md:w5/12 lg:w-1/2">
                    <div className="w-full h-80 sm:h-96 relative">
                        <img
                            src={agencia}
                            alt="Our mission"
                            className="w-full h-full object-cover rounded-3xl shadow-lg relativez-10"
                        />
                    </div>
                </div>

                {/* Contenido de texto */}
                <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
                    {/* Tarjetas de información */}
                    <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                        <Info title="Misión"
                        description="Crear piezas artísticas en papel maché y pintura que conecten con historias personales y tradiciones latinoamericanas. Cada obra busca llevar color, memoria e identidad a los espacios cotidianos, manteniendo siempre un trabajo completamente hecho a mano.">
                            {/* Icono */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 sm:w-5 sm:h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                />
                            </svg>
                        </Info>

                        <Info title="Visión"
                        description='"Quiero mostrar al mundo la versatilidad y creatividad de mi trabajo, compartiendo piezas únicas que combinan distintos estilos y técnicas. Mi visión es que cada persona pueda descubrir en mis obras el valor de lo hecho a mano, lo auténtico y lo profundamente personal'>
                            {/* Icono */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 sm:w-5 sm:h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                />
                            </svg>
                        </Info>
                    </div>
                </div>
            </Container>
        </section>
    );
}
