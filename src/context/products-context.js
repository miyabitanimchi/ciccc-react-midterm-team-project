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
  const { user } = useAuthContext();
  const [products, setProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(null);
  const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, []);

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
        // console.log(allProducts);
        setProducts(allProducts);
      } catch (err) {
        console.error(`Error happened: ${err}`);
      }
    };
    fetchAPI();
  }, []);

  const refreshQuantity = (cartContents) => {
    if (cartContents && cartContents.length !== 0) {
      let qty = 0;
      cartContents.forEach((productData) => {
        qty += productData.quantity;
      });
      setCartQuantity(qty);
    } else {
      setCartQuantity(null);
    }
  };

  useEffect(() => {
    // set items for logged in user
    if (user) {
      database
        .ref(`/users/${user.uid}/cart/`)
        .once("value")
        .then((snapshot) => {
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
      // set items for unknown user
    } else if (localStorage.hasOwnProperty("unknown") && user === null) {
      const unknownUsersCartItems = JSON.parse(localStorage.getItem("unknown"));
      dispatchCartItems({
        type: "SET_ITEM",
        items: unknownUsersCartItems,
      });
    }
    refreshQuantity(cartItems);
  }, [user]);

  useEffect(() => {
    if (user === null) {
      localStorage.removeItem("unknown");
      localStorage.setItem("unknown", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        cartItems,
        dispatchCartItems,
        cartQuantity,
        refreshQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => useContext(ProductsContext);

export { useProductsContext, ProductsProvider as default };
