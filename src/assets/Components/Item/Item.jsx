import "./item.css";

const Item = (props) => {
  return (
    <>
      {props.item.available ? (
        <div className="item">
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
