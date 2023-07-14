import "./item.css";

const Item = (props) => {
  const handleOnClick = () => {
    const addedItem = {
      name: props.item.name,
      price: props.item.price.formatted,
      priceFractional: props.item.price.fractional,
      id: props.item.uid,
      quantity: 1,
    };
    const isAlredyAdd = props.cart.findIndex(
      (item) => item.name === addedItem.name
    );
    if (isAlredyAdd === -1) {
      props.setCart((prevState) => [...prevState, addedItem]);
    } else {
      const newCart = [...props.cart];
      newCart[isAlredyAdd].quantity += 1;
      props.setCart(newCart);
    }
  };

  return (
    <>
      {props.item.available ? (
        <div className="item" onClick={handleOnClick}>
          <div>
            <h3>{props.item.name}</h3>

            {props.item.description && (
              <p className="description">{props.item.description}</p>
            )}
            <div>
              <p className="price">{props.item.price.formatted}</p>
              {props.item.popular && (
                <p className="icon">
                  <i className="icon-STAR_FILL"></i>Populaire
                </p>
              )}
            </div>
          </div>
          {props.item.image && (
            <img src={props.item.image.url} alt={props.item.image.altText} />
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Item;
