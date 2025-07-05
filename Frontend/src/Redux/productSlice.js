import { createSlice } from "@reduxjs/toolkit";

// use "useSelector" to get the array
const initialState = {
  selectedproduct:JSON.parse(localStorage.getItem("selectedproduct"))||[],
  selectedproductid:JSON.parse(localStorage.getItem("selectedproductid"))|| [],
};

export const counterSlice = createSlice({
  name: "cartt",
  initialState,
  // action.payload => product From API => القيمة التى بداخل الاقواس
  reducers: {
    addtocart: (state, action) => {
      const selectedwithquantity = { ...action.payload, quantity: 1 };

      state.selectedproduct.push(selectedwithquantity);
      state.selectedproductid.push(action.payload.id)
      localStorage.setItem("selectedproduct",JSON.stringify(state.selectedproduct))
            localStorage.setItem("selectedproductid",JSON.stringify(state.selectedproductid))

    },
    increase: (state, action) => {
      const increasequa = state.selectedproduct.find((item) => {
        return item.id === action.payload.id;
      });
      increasequa.quantity += 1;
      localStorage.setItem("selectedproduct",JSON.stringify(state.selectedproduct))
    },
    decrease: (state, action) => {
      const decreasequantity = state.selectedproduct.find((item) => {
        return item.id === action.payload.id;
      });
      decreasequantity.quantity -= 1;
            localStorage.setItem("selectedproduct",JSON.stringify(state.selectedproduct))

      if (decreasequantity.quantity === 0) {
        const newarr = state.selectedproduct.filter((item) => {
          return item.id !== action.payload.id;
        });
        const newarr2=state.selectedproductid.filter((item) => {
          return item!==action.payload.id;
        }
        )
        state.selectedproduct = newarr;
        state.selectedproductid=newarr2;
                    localStorage.setItem("selectedproduct",JSON.stringify(state.selectedproduct))
                                localStorage.setItem("selectedproductid",JSON.stringify(state.selectedproductid))


      }
    },
    deleteproduct: (state, action) => {
      const deletee = state.selectedproduct.filter((item) => {
        return item.id !== action.payload.id;
      });
        const deleteeId = state.selectedproductid.filter((item) => {
        return item !== action.payload.id;
      });
      state.selectedproduct = deletee;
      state.selectedproductid=deleteeId
                  localStorage.setItem("selectedproduct",JSON.stringify(state.selectedproduct))
            localStorage.setItem("selectedproductid",JSON.stringify(state.selectedproductid))


    },
  },
});

//  دائماً هتنساهااااااااااااااااااااااااااااااااااااااع
export const { deleteproduct, addtocart, increase, decrease } =
  counterSlice.actions;

export default counterSlice.reducer;
