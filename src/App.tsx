// Importaciones necesarias
//------------------------------------------------------------
// importar seccion de Services
import { Services } from "./components/sections/Services"
// importar seccion de Layout
import { Layout } from "./components/Layout" 
// importar seccion de Hero
import { Hero } from "./components/sections/Hero"
import { AbousUs } from "./components/sections/AbousUs"
import { Pricing } from "./components/sections/Pricing"
import { OurTeam } from "./components/OurTeam"
import { Copyright } from "./components/sections/Copyright"



function App() {
  // titulo de la pagina, en este caso Clover
  return <Layout title= "Flores en Papel">
    <Hero/>
    <AbousUs/>
    <Services/>
    <Pricing/>
    <OurTeam/>
  </Layout>
}

export default App
