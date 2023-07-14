import "./main.css";
import Sections from "../Sections/Sections";

const Main = (props) => {
  if (props.cart.length === 0) {
    props.setShowBottomCart(false);
  }

  const quantityitemsInCart = () => {
    let totalQuantity = 0;
    props.cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };
  const addItem = (value) => {
    const itemToRemoveIndex = props.cart.findIndex(
      (item) => item.id === value.id
    );

    const newCart = [...props.cart];
    newCart[itemToRemoveIndex].quantity += 1;
    props.setCart(newCart);
  };

  const subtractItem = (value) => {
    const itemToRemoveIndex = props.cart.findIndex(
      (item) => item.id === value.id
    );
    const newCart = [...props.cart];

    if (value.quantity === 1) {
      newCart.splice(itemToRemoveIndex, 1);
      props.setCart(newCart);
    } else {
      newCart[itemToRemoveIndex].quantity -= 1;
      props.setCart(newCart);
    }
  };
  const itemsPrice = () => {
    let price = 0;
    props.cart.forEach((item) => {
      price += item.priceFractional * item.quantity;
    });
    return price;
  };

  const formatedPrice = (price) => {
    const formatedPrice = price.toString().split("");
    formatedPrice.splice(-2, 0, ",").join("").toString();
    return formatedPrice;
  };

  const totalPrice = () => {
    let price = 250;
    props.cart.forEach((item) => {
      price += item.priceFractional * item.quantity;
    });
    return price;
  };

  const handleShowBottomCart = () => {
    if (props.cart.length !== 0) {
      props.showBottomCart === true
        ? props.setShowBottomCart(false)
        : props.setShowBottomCart(true);
    }
  };
  return (
    <main>
      <section className="wrap">
        <div>
          <h1>{props.data.header.title}</h1>
          <p>{props.data.meta.metatags.descriptionSocial}</p>
        </div>
        <img alt=" restaurant" src={props.data.header.image.url} />
      </section>
      <Sections data={props.data} cart={props.cart} setCart={props.setCart} />
      {props.showBottomCart === false ? (
        <div className={`hidden-cart ${props.cart.length === 0 && " empty"}`}>
          <div onClick={handleShowBottomCart}>
            {props.cart.length !== 0 && (
              <div className="number-of-items">{quantityitemsInCart()} </div>
            )}
            <div>Voir le panier</div>
            {props.cart.length !== 0 && (
              <div>{formatedPrice(totalPrice())} €</div>
            )}
          </div>
        </div>
      ) : (
        <div className="cart-bottom">
          <button onClick={handleShowBottomCart} className="cart-bottom-close">
            <i className="icon-cross"></i>
          </button>
          {props.cart.map((item) => {
            console.log(item);
            return (
              <div key={item.id} className="item-in-cart">
                <div className="item-buttons">
                  <button
                    onClick={() => {
                      subtractItem(item);
                    }}
                  >
                    <i className="icon-minus"></i>
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => {
                      addItem(item);
                    }}
                  >
                    <i className="icon-plus"></i>
                  </button>
                </div>
                <div className="item-info">
                  <p>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </p>
                </div>
              </div>
            );
          })}
          <div className="subtotal">
            <p>
              <span>Sous-Total</span>
              <span>{formatedPrice(itemsPrice())} €</span>
            </p>
            <p>
              <span>Frais de livraison</span>
              <span>2,50 €</span>
            </p>
          </div>
          <div className="total">
            <p>
              <span>Total</span>
              <span>{formatedPrice(totalPrice())} €</span>
            </p>
          </div>
          <button>Valider mon pannier</button>
        </div>
      )}
    </main>
  );
};

export default Main;
