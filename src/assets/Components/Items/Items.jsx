import "./items.css";
import Item from "../Item/Item";

const Items = (props) => {
  return (
    <div className="items">
      {props.items.map((item) => {
        return <Item item={item} data={props.data} key={item.id} />;
      })}
    </div>
  );
};

export default Items;
