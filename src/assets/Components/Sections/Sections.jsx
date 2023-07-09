import "./sections.css";
import Cart from "../Cart/Cart";
import Categories from "../Categories/Categories";

const Sections = (props) => {
  return (
    <section>
      <div className="wrap">
        <Categories data={props.data} />
        <Cart />
      </div>
    </section>
  );
};

export default Sections;
