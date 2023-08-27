import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "Installateurs parenaires inscrits": {
    amount: {
      amount: 70,
      price: false,
    },
    tendency: "-2%",
    B2B: undefined,
    B2C: undefined,
  },
  "Abonnements en cours": {
    amount: {
      amount: 261,
      price: true,
    },
    tendency: "2%",
    B2B: undefined,
    B2C: undefined,
    "Nombre d'abonnements": 22,
  },
  "Devis réalisés": {
    amount: {
      amount: 105,

      price: false,
    },
    tendency: "-2%",
    B2B: null,
    B2C: null,
  },
  "Points de charge": {
    amount: {
      amount: 450,
      price: false,
    },
    tendency: "+18%",
    B2B: null,
    B2C: null,
  },
  "Points de charge supervisés": {
    amount: {
      amount: 432,
      price: false,
    },
    tendency: "+18%",
    B2B: null,
    B2C: null,
  },
  "Taux de conversion": {
    amount: {
      amount: 78,
      price: false,
    },
    tendency: "-2%",
    B2B: null,
    B2C: null,
  },
  "Chiffre d'affaire": {
    amount: {
      amount: 26100,
      price: true,
    },
    tendency: "+6%",
    B2B: 12000,
    B2C: 22045,
  },
};

const statisticSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {},
});

export default statisticSlice.reducer;
