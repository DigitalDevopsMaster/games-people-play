import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  nombre: '',
  genero: '',
  puntosInfluencia: 0,
  puntosCastigo: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.nombre = action.payload.nombre;
      state.genero = action.payload.genero;
    },
    setPuntos: (state, action) => {
      state.puntosInfluencia = action.payload.puntosInfluencia;
      state.puntosCastigo = action.payload.puntosCastigo;
    },
  },
});

export const { setUser, setPuntos } = userSlice.actions;

export default userSlice.reducer;
