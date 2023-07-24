import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    ticketNumberOne: 12.99,
    ticketNumberTwo: 12.33,
    ticketOneCount: 1,
    ticketTwoCount: 1,
  };
  
  const CheckoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
      increment: (state, action) => {
        const { ticketNumber } = action.payload;
        if (ticketNumber === "TicketNumberOne" && state.ticketOneCount < 5) {
           
          state.ticketOneCount += 1;
        }
        if (ticketNumber === "TicketNumberTwo" && state.ticketTwoCount < 3) {
          state.ticketTwoCount += 1;
        }
      },
      decrement: (state, action) => {
        const { ticketNumber } = action.payload;
        if (ticketNumber === "TicketNumberOne" && state.ticketOneCount > 1) {
          state.ticketOneCount -= 1;
        }
        if ( ticketNumber === "TicketNumberTwo" &&state.ticketTwoCount > 1) {
          state.ticketTwoCount -= 1;
        }
      },
    },
  });

export const { increment, decrement } = CheckoutSlice.actions;

export default CheckoutSlice.reducer;