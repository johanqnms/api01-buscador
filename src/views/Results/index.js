import "./results.css";
import getData from "../../utils/getData";


const Results = async() => {
    const animes = await getData();
    const view = `
    <div class="container--results">
        <h1>Resultados de la búsqueda</h1>
        <div class="container--results-grid">
        ${animes.results.map( anime => `
            <div class="item-container">
                <div class="result-title">${anime.title}</div>
                <div class="result-img"><img src="${anime.image_url}"></div>
                <div class="result-episodes">Episodios: ${anime.episodes}</div>
                <div class="result-type">Tipo: ${anime.type}</div>
            </div>
        `).join('')}
        </div>
    </div>`;
    return view;
}

export default Results;