import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Person from "./pages/RegisterPerson"
import Business from "./pages/RegisterBusiness"
import Dog from "./pages/RegisterDog"
import Login from "./pages/Login"
import Validar from "./pages/Validar"
import Perfil from  "./pages/Perfil"


function App() {
  return <>
    <Header />
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro/Pessoa" element={<Person />} />
          <Route path="/cadastro/pessoa/juridica" element={<Business />} />
          <Route path="/cadastro/cão" element={<Dog />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Validar" element={<Validar />} />
          <Route path="/Perfil" element={<Perfil />} />
          

        </Routes>
      </BrowserRouter>
    </main>
    <Footer />
  </>
}

export default App