import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../rtk/slices/product-slice";
import { addToCart } from "../rtk/slices/cart-slice";

function Card() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  let allProducts = products.map((ele) => {
    return (
      <div className="col " key={ele.id}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={ele.image}
            className="card-img-top"
            alt="..."
            style={{ height: "300px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{ele.title.slice(0, 20)}</h5>
            <p className="card-text">{ele.description.slice(0, 90)}</p>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToCart(ele))}
            >
              Add to card
            </button>
          </div>
        </div>
      </div>
    );
  });
  return <>{allProducts}</>;
}
export default Card;
