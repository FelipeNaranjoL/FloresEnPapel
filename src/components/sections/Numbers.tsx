import { Container } from "../shared/Container";

// Componente que muestra cifras destacadas
export const Numbers = () => {
    return (
        <section className="relative mt-12 md:mt-16">
            {/* Contenedor principal centrado */}
            <Container className="flex justify-center align-center">
                {/* Caja con estilo y grilla para los números */}
                <div className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4">
                    
                    {/* Item 1 */}
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">+30</h2>
                        <p className="mt-2 text-heading-3">Años explorando el papel maché y la pintura como lenguaje visual.</p>
                    </div>

                    {/* Item 2 */}
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">+200</h2>
                        <p className="mt-2 text-heading-3">Obras originales entre calaveras, retratos y piezas gráficas únicas.</p>
                    </div>

                    {/* Item 3 */}
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">+50</h2>
                        <p className="mt-2 text-heading-3">Encargos personalizados creados en diálogo con quienes los solicitan.</p>
                    </div>

                    {/* Item 4 */}
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">+9</h2>
                        <p className="mt-2 text-heading-3">Colecciones temáticas desarrolladas a partir de la cultura latinoamericana.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
