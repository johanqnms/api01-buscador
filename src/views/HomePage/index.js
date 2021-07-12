import "./homepage.css";
const Homepage = async() => {
  const view = `
          <div class="container--homepage">
            <div class="search">
              <h1 class="search--title">Buscador</h1>
              <input class="search--input" type="text">
              <div class="search--buttons">   
                <button class="search--button">Consultar</button>
              </div>
            </div>
        </div>
      `;
  return view;
};
export default Homepage;
