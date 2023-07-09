import "./main.css";
import Sections from "../Sections/Sections";

const Main = (props) => {
  return (
    <main>
      <section className="wrap">
        <div>
          <h1>{props.data.header.title}</h1>
          <p>{props.data.meta.metatags.descriptionSocial}</p>
        </div>
        <img alt="image du restaurant" src={props.data.header.image.url} />
      </section>
      <Sections data={props.data}></Sections>
      <div className="hidden-cart">
        <button>Valider mon panier</button>
      </div>
    </main>
  );
};

export default Main;
