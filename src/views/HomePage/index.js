import "./homepage.css";
import Search from "../../components/Search";

export default () => {
  const view = `
        <div class="container--homepage">
        ${Search()}
        </div>
      `;
      return view;
};