import { createAction } from "@reduxjs/toolkit";
import { DogStructure } from "../models/dog.model";
import { dogActions } from "./dog.actions.types";

export const loadAllCreator = createAction<DogStructure[]>(dogActions.load);
export const loadOneCreator = createAction<DogStructure>(dogActions.loadOne);
export const updateCreator = createAction<DogStructure>(dogActions.update);
export const addCreator = createAction<DogStructure>(dogActions.add);
export const deleteCreator = createAction(dogActions.delete);
