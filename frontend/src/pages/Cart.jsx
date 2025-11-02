import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_TO_CART } from "../features/CartSlice";
import NoProductInCart from "../components/cart/NoProductInCart";
import { REMOVING_TO_CART_totalPrice } from "../features/TotalPriceOfCartSlice";

const Cart = () => {
  const productInCart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch();

  // const totalPrice = productInCart
  //   .reduce((preProduct, currProduct) => {
  //     return (
  //       preProduct +
  //       (currProduct.price -
  //         (currProduct.price * currProduct.discountPercentage) / 100)
  //     );
  //   }, 0)
  //   .toFixed(2);

  console.log(productInCart);
  return productInCart.length === 0 ? (
    <NoProductInCart />
  ) : (
    <div className="container my-5">
      {/* Progress Steps */}
      <div className="text-center mb-4">
        <h5>
          <strong className="text-decoration-underline text-dark">
            SHOPPING CART
          </strong>{" "}
          → CHECKOUT → ORDER COMPLETE
        </h5>
      </div>

      {/* Free Shipping Notice */}
      <div className="border p-3 mb-4 rounded">
        {totalPrice > 200 ? (
          <p style={{ color: "#198754", fontSize: "18px" }}>
            You are ready for a free shipping
          </p>
        ) : (
          <p className="mb-2">
            Add{" "}
            <span className="text-danger fw-bold">
              ${(200 - (totalPrice > 200 ? 200 : totalPrice)).toFixed(2)}
            </span>{" "}
            to cart and get free shipping!
          </p>
        )}

        <div className="progress" style={{ height: "5px" }}>
          <div
            className={`progress-bar ${
              totalPrice > 200 ? "bg-success" : "bg-danger"
            }`}
            role="progressbar"
            style={{
              width: `${totalPrice && (totalPrice / 200) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="row">
        {/* Left: Product Table */}
        <div className="col-md-8">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {productInCart.map((product) => {
                return (
                  <tr>
                    <td className="d-flex align-items-center">
                      <button
                        className="btn btn-sm btn-outline-danger me-3"
                        onClick={() => {
                          dispatch(REMOVE_TO_CART(product));
                          dispatch(REMOVING_TO_CART_totalPrice(product));
                        }}
                      >
                        ✕
                      </button>
                      <img
                        src={product.thumbnail}
                        alt="Product"
                        className="me-3 rounded"
                        style={{ width: "80px", height: "80px" }}
                      />
                      <div>
                        <p className="mb-0 fw-semibold">{product.title}</p>
                      </div>
                    </td>
                    <td>
                      $
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                    </td>
                    <td>
                      <div className="input-group" style={{ width: "120px" }}>
                        <button className="btn btn-outline-secondary">-</button>
                        <input
                          type="text"
                          className="form-control text-center"
                          min={1}
                          value={1}
                          readOnly
                          id="productQuantity"
                        />
                        <button className="btn btn-outline-secondary">+</button>
                      </div>
                    </td>
                    <td className="fw-semibold text-danger">
                      $
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Coupon Section */}
          <div className="d-flex mt-4">
            <input
              type="text"
              placeholder="Coupon code"
              className="form-control me-2"
              style={{ maxWidth: "250px" }}
            />
            <button className="btn btn-primary me-3">Apply Coupon</button>
            <button className="btn btn-outline-secondary">Update Cart</button>
          </div>
        </div>

        {/* Right: Cart Totals */}
        <div className="col-md-4">
          <div className="border rounded p-4">
            <h5 className="mb-4 fw-bold">CART TOTALS</h5>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-3">
              <span className="fw-bold">Total</span>
              <span className="fw-bold text-danger">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button className="btn btn-primary w-100 py-2">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
