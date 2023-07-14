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
            cart={props.cart}
            setCart={props.setCart}
          />
        );
      })}
    </section>
  );
};

export default Categories;
