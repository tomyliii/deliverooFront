import "./cart.css";

const Cart = (props) => {
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
    console.log("LAAAAAAAAAAAAAAA", itemToRemoveIndex);
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
  return (
    <>
      <aside className={props.cart.length === 0 ? "empty-cart" : "cart"}>
        <button>Valider mon panier</button>
        {props.cart.length !== 0 ? (
          <div className="cart-details">
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
          </div>
        ) : (
          <div className="empty-cart-txt">{"Votre panier est vide"}</div>
        )}
      </aside>
      <div className="hidden-cart">
        <div>
          <div className="number-of-items">{props.cart.length} </div>
          <div>Voir le panier</div>
          <div>{formatedPrice(totalPrice())} €</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
