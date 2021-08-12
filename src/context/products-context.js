import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import categoryArr, {
  additionalProducts,
} from "../products/additionalProducts";
import { useAuthContext } from "../context/auth-context";
import database from "../firebase/firebase";
import cartItemsReducer from "../reducer/cartItems";
import axios from "axios";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, []);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const originalProducts = res.data;

        // change products categories
        originalProducts.forEach((product) => {
          if (product.id === 1) product.category = categoryArr[1]; // Change a category of bag to accessories
          if (
            product.category === "men's clothing" ||
            product.category === "women's clothing"
          ) {
            product.category = categoryArr[0];
          } else if (product.category === "jewelery") {
            product.category = categoryArr[1];
          }
        });
        const allProducts = originalProducts.concat(additionalProducts);
        console.log(allProducts);
        setProducts(allProducts);
      } catch (err) {
        console.error(`Error happened: ${err}`);
      }
    };
    fetchAPI();
  }, []);

  // set items for logged in user
  useEffect(() => {
    if (user) {
      database.ref(`/users/${user.uid}/cart/`).on("value", (snapshot) => {
        const productsAddedToCart = [];
        snapshot.forEach((childSnapshot) => {
          productsAddedToCart.push({
            firebaseId: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatchCartItems({
          type: "SET_ITEM",
          items: productsAddedToCart,
        });
      });
    }
  }, [user]);

  // set items for unknown user
  useEffect(() => {
    if (localStorage.hasOwnProperty("unknown")) {
      const unknownUsersCartItems = JSON.parse(localStorage.getItem("unknown"));
      dispatchCartItems({
        type: "SET_ITEM",
        items: unknownUsersCartItems,
      });
    }
  }, [user]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        cartItems,
        dispatchCartItems,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => useContext(ProductsContext);

export { useProductsContext, ProductsProvider as default };
