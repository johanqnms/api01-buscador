import "./search.css";

export default () => {
    const view = `
    <div class="search">
        <h1 class="search--title">Buscador</h1>
        <input class="search--input" id="search--input">
        <div class="search--buttons">   
        <a href="#results"><button class="search--button" id="search">Consultar</button></a>
        </div>
    </div>`

    document.addEventListener('click', () => {
            const userSearch = document.getElementById("search--input").value;
            localStorage.setItem('userSearch',userSearch);
            }); 

    return view;
}