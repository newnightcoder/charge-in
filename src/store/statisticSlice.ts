import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "Installateurs parenaires inscrits": {
    amount: 70,
    tendency: "-2%",
    price: false,
    B2B: undefined,
    B2C: undefined,
  },
  "Abonnements en cours": {
    amount: 261,
    tendency: "2%",
    price: true,
    B2B: undefined,
    B2C: undefined,
    "Nombre d'abonnements": 22,
  },
  "Devis réalisés": {
    amount: 105,
    tendency: "-2%",
    price: false,
    B2B: null,
    B2C: null,
  },
  "Points de charge": {
    amount: 450,
    tendency: "+18%",
    price: false,
    B2B: null,
    B2C: null,
  },
  "Points de charge supervisés": {
    amount: 432,
    tendency: "+18%",
    price: false,
    B2B: null,
    B2C: null,
  },
  "Taux de conversion": {
    amount: 78,
    tendency: "-2%",
    price: false,
    B2B: null,
    B2C: null,
  },
  "Chiffre d'affaire": {
    amount: 26100,
    tendency: "+6%",
    price: true,
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
