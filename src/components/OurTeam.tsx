import { Team } from "../utils/Team";
import { Container } from "./shared/Container";
import { Paragraph } from "./shared/Paragraph";
import { Title } from "./shared/Title";

export const OurTeam = () => {
    return (
        <Container className="py-2">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="max-w-2xl mx-auto">
                    <Title>Sobre el Artista</Title>
                    <Paragraph>Flores en Papel es el proyecto personal de Juan Marcelo Flores, diseñador gráfico y artista visual. Su trabajo reúne color, memoria y cultura popular latinoamericana, con un fuerte vínculo entre la tradición del papel maché, la calavera mexicana y la sensibilidad chilena.
                        </Paragraph>
                </div>
           <ul className="grid grid-cols-1 place-items-center py-12">

  {Team.map((teamwork) => (
    <li
      key={teamwork.name}
      className="flex flex-col items-center justify-center text-center"
    >

      {/* FOTO CENTRADA */}
      <img
        className="w-45 h-45 rounded-full object-cover shadow-xl mb-4 mx-auto"
        src={teamwork.image}
        alt={teamwork.name}
      />

      {/* NOMBRE */}
      <h3 className="text-2xl font-semibold text-heading-1 tracking-tight">
        {teamwork.name}
      </h3>

      {/* CARGO */}
      <p className="mt-2 text-lg text-heading-6">
        {teamwork.position}
      </p>

    </li>
  ))}
</ul>

            </div>
        </Container>
    );
}