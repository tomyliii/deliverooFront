import "./categories.css";
import Categorie from "../Categorie/Categorie";

const Categories = (props) => {
  return (
    <section>
      {props.data.layoutNavigation.map((categorie) => {
        return (
          <Categorie
            data={props.data}
            key={categorie.layoutId}
            categorie={categorie}
          />
        );
      })}
    </section>
  );
};

export default Categories;
