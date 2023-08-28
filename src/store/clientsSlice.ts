import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clients: [
    {
      prenom: "Charles",
      nom: "Dupont",
      borne: 2,
      devis: null,
      etape: 1,
    },
    {
      prenom: "David",
      nom: "Dubois",
      borne: 2,
      devis: null,
      etape: 2,
    },
    {
      prenom: "Marie",
      nom: "Carton",
      borne: 2,
      devis: null,
      etape: 3,
    },
    {
      prenom: "José",
      nom: "Rae",
      borne: 2,
      devis: null,
      etape: 4,
    },
    {
      prenom: "Vincent",
      nom: "Garcia",
      borne: 2,
      devis: null,
      etape: 1,
    },
    {
      prenom: "Davide",
      nom: "Bois",
      borne: 2,
      devis: null,
      etape: 2,
    },
    {
      prenom: "Maria",
      nom: "Cartani",
      borne: 2,
      devis: null,
      etape: 3,
    },
    {
      prenom: "Joséphine",
      nom: "Rallet",
      borne: 2,
      devis: null,
      etape: 4,
    },
    {
      prenom: "Carlos",
      nom: "Pont",
      borne: 2,
      devis: null,
      etape: 1,
    },
    {
      prenom: "Dave",
      nom: "Charrière",
      borne: 2,
      devis: null,
      etape: 2,
    },
    {
      prenom: "Jeanne",
      nom: "Aton",
      borne: 2,
      devis: null,
      etape: 3,
    },
    {
      prenom: "Osias",
      nom: "Vallée",
      borne: 2,
      devis: null,
      etape: 4,
    },
    {
      prenom: "Greg",
      nom: "Bollet",
      borne: 2,
      devis: null,
      etape: 1,
    },
    {
      prenom: "Phil",
      nom: "Barnum",
      borne: 2,
      devis: null,
      etape: 2,
    },
    {
      prenom: "Marion",
      nom: "Capriati",
      borne: 2,
      devis: null,
      etape: 3,
    },
    {
      prenom: "Kim",
      nom: "Kardash",
      borne: 2,
      devis: null,
      etape: 4,
    },
  ],
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
});

export default clientsSlice.reducer;
