//Componentes
import Header from "../components/Header";
import Nav from "../components/Nav";

//Views
import Homepage from "../views/HomePage";

const router = async () => {

    //Components
    const header = document.querySelector('.header');
    header.innerHTML = await Header();
    const nav = document.querySelector('.nav');
    nav.innerHTML = await Nav();
    
    //Views
    const homepage = document.querySelector('.container');
    homepage.innerHTML = await Homepage();
}

export default router;