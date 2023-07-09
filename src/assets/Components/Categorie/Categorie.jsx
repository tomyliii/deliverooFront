import "./categorie.css";
import Items from "../Items/Items";

const Categorie = (props) => {
  const itemsArray = props.data.items.filter(
    (item) => item.categoryId === props.categorie.layoutId
  );

  return (
    <section>
      {itemsArray.length !== 0 ? (
        <div className="categorie">
          <h2>{props.categorie.label}</h2>
          <Items
            items={itemsArray}
            data={props.data}
            categorie={props.categorie}
          />
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Categorie;
