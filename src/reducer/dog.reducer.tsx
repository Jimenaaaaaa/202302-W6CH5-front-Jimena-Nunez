import { createReducer } from "@reduxjs/toolkit";
import { DogStructure } from "../models/dog.model";
import {
  addCreator,
  deleteCreator,
  loadAllCreator,
  loadOneCreator,
  updateCreator,
} from "./dog.actions.creator";

type State = {
  dogs: DogStructure[];
  selectedDog: DogStructure | {};
};

const initialState: State = {
  dogs: [],
  selectedDog: {},
};

export const dogsReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadAllCreator, (state, { payload }) => ({
    dogs: payload,
    selectedDog: state.selectedDog,
  }));

  builder.addCase(loadOneCreator, (state, { payload }) => {
    return {
      ...state,
      selectedDog: payload.id,
    };
  });

  builder.addCase(addCreator, (state, { payload }) => {
    return { ...state, dogs: [...state.dogs, payload] };
  });

  // builder.addCase(deleteCreator, (state, { payload }) => ({

  //   ...state,
  //   dogs: state.dogs.filter((dog) => dog.id !== payload.id),
  // }));

  // Tengo que arreglar el update
  // builder.addCase(updateCreator, (state, { payload }) => ({
  //   ...state,
  //   dogs: state.dogs.map((dog)=>(dog.id === payload.id ? payload : state))
  // }));

  builder.addDefaultCase((state) => state);
});
