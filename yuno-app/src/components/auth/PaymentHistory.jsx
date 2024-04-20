import React, { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "../localStorage";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase-config";
import Wrapper from "../../Style/PaymentHistory";
import Header from "../layout/Header";
import NavBarMobile from "../layout/NavBarMobile";
const PaymentHistory = () => {
  const users = getUserFromLocalStorage();
  const [orders, setOrders] = useState([]);
  const ordersCollectionRef = collection(db, "orders");

  useEffect(() => {
    const fetchOrders = async () => {
      if (!users) return; // Ensure users is not null or undefined

      const q = query(ordersCollectionRef, where("uid", "==", users.uid));
      const querySnapshot = await getDocs(q);

      const ordersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(ordersData);
    };

    fetchOrders();
  }, []); // Add users to the dependency array
  console.log(orders);
  return (
    <>
      <Header />
      <Wrapper>
        <div className="order-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Address</th>
                <th>Product</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>{order.address}</td>
                  <td>
                    {order.product.map((product, index) => (
                      <div
                        key={index}
                        className="product-item"
                        style={{ display: "flex" }}
                      >
                        <div>
                          <img
                            src={product.productImage}
                            width={50}
                            height={50}
                            alt={product.productName}
                          />
                        </div>
                        <div>
                          <p className="product-details">
                            {product.productName}
                          </p>
                          <p className="product-details">
                            Sale Price: {product.salePrice}$
                          </p>
                          <p className="product-details">
                            Amount: {product.amount}
                          </p>
                        </div>
                      </div>
                    ))}
                  </td>
                  <td>{order.total}$</td>
                  <td>
                    {order.status === "pending" ? (
                      <p>Pending</p>
                    ) : (
                      <p>Pending</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Wrapper>
      <NavBarMobile />
    </>
  );
};

export default PaymentHistory;
