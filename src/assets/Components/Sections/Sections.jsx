import "./sections.css";
import Cart from "../Cart/Cart";
import Categories from "../Categories/Categories";

const Sections = (props) => {
  return (
    <section>
      <div className="wrap">
        <Categories
          data={props.data}
          cart={props.cart}
          setCart={props.setCart}
        />
        <Cart cart={props.cart} setCart={props.setCart} />
      </div>
    </section>
  );
};

export default Sections;
