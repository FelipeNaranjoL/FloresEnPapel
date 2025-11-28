import { Container } from "../shared/Container";
import logo from "../../assets/LogoNegro.png";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/Navitems";
import { Copyright } from "../sections/Copyright";

export const Footer = () => {
    return (
        // Footer principal con padding superior y borde redondeado
        <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
            <Container className="pb-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">

                    {/* Parte izquierda: logo + enlaces */}
                    <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2">

                        {/* Logo centrado en móviles */}
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="Clover Logo" className="w-40 h-40" />
                        </div>

                        {/* Enlaces de navegación */}
                        {/* En móviles se muestran en fila, en desktop en columna */}
                        <ul className="flex flex-row md:flex-col flex-wrap justify-center md:justify-start gap-2 w-full text-heading-1">
                            {navItems.map((item, key) => (
                                <NavItem
                                    key={key}
                                    href={item.href}
                                    text={item.text} />
                            ))}
                        </ul>
                        {/* Iconos de contacto */}
                        <div className="flex flex-row gap-4 mt-4">
                            {/* Teléfono */}
                            <a className="flex items-center gap-1 text-heading-1 hover:text-primary transition">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.25a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25v3a2.25 2.25 0 01-2.25 2.25h-.75a11.37 11.37 0 005.25 5.25v-.75a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25v3a2.25 2.25 0 01-2.25 2.25H19.5c-8.284 0-15-6.716-15-15V5.25z" />
                                </svg>
                                +56 9 78614232
                            </a>


                            {/* Correo */}
                            <a className="flex items-center gap-1 text-heading-1 hover:text-primary transition">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4 4-4-4m0-6h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                </svg>
                                mazarelo007@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Parte derecha: Google Maps */}
                    <div className="w-full md:w-1/2 h-64">
                       <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.918666906369!2d-70.74297892385885!3d-33.39857547340192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dff6b4d468f9%3A0x2c55ea6ec8b1c0a6!2sApolo%20XIII%201568%2C%20Cerro%20Navia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1732789447030!5m2!1ses!2scl"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

                    </div>
                </div>
            </Container>
            <Copyright />
        </footer>
        
    );
};
