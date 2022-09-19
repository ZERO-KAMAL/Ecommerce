import { createSlice } from "@reduxjs/toolkit";

//for the popup toast message
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

//createslice feature is that we can muted state directly
//createslice create action and reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  //basically function which is used to muted function and it is pure function also ite change data inside
  reducers: {
    addToCart(state, action) {
      //Redux:
      //using findindex to check the item that we already have same item or not
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      //condition
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`Increased ${action.payload.title} cart quantity `, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title} added to cart`, {
          position: "bottom-left",
        });
      }

      //add our data to the local storage so that when refresh the site , state should remian same
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {
      //making array empty
      state.cartItems = [];
      toast.error(`Cart cleared`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      //callback fxn and initial fxn

      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          //total cart product value is the output
          const itemTotal = price * cartQuantity;

          //add that value to the initial value every time state is altered
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          //initial value
          total: 0,
          quantity: 0,
        }
      );
      //passing the cureent value of total and quantity
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    // remove(state, action) {
    //   return state.filter((item) => item.id !== action.payload);
    // },
    // decreaseCart(state,action){
    //   const itemIndex = state.item
    // }
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  clearCart,
  getTotals
} = cartSlice.actions;
export default cartSlice.reducer;
