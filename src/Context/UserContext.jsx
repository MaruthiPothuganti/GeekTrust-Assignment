import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const UsersContext = ({ children }) => {
  const userInitialState = {
    products: [],
    cart: []
  };
  const [userState, userDispatch] = useReducer();

  const getProds = async () => {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((response) => response.json())
      .then((jsondata) => console.log(jsondata));
  };

  getProds();

  return <UserContext.Provider>{children}</UserContext.Provider>;
};
