import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, clear } from "../rtk/slices/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const product = cart.map((ele) => {
    return (
      <tr key={ele.id}>
        <th scope="row">{ele.id}</th>
        <td>{ele.title}</td>
        <td>
          <img
            className=""
            src={ele.image}
            alt={ele.title}
            style={{ width: "100px", height: "100px" }}
          />
        </td>
        <td>{ele.price} $</td>
        <td>{ele.quantity}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(deleteFromCart(ele))}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  const totalPrice = cart.reduce((acc, current, index, arr) => {
    return (acc += current.price * current.quantity);
  }, 0);

  return (
    <div className="cart-content pt-5">
      <div className="container pt-3">
        <h3>Your Added Products</h3>
        <button className="btn btn-info" onClick={() => dispatch(clear())}>
          Clear All
        </button>
        <h4>total price {totalPrice.toFixed(2)} $</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Img</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{product}</tbody>
        </table>
      </div>
    </div>
  );
}
export default Cart;
