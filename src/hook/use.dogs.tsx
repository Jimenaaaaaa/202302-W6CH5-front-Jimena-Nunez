// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

import * as ac from "../reducer/dog.actions.creator";
import { DogStructure } from "../models/dog.model";
import { DogApiRepo } from "../services/dog.api.repo";

export function useDogs(repo: DogApiRepo) {
  const dogs = useSelector((state: RootState) => state.dogs);
  const dispatch = useDispatch<AppDispatch>();

  const loadDogs = async () => {
    try {
      const data = await repo.loadAll();
      dispatch(ac.loadAllCreator(data));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const loadDog = async (id: DogStructure["id"]) => {
    try {
      const data = await repo.loadOne(Number(id));
      dispatch(ac.loadOneCreator(data));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const addDog = async (dog: DogStructure) => {
    try {
      const newDog = await repo.add(dog);
      dispatch(ac.addCreator(newDog));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateDog = async (dog: DogStructure) => {
    try {
      const finalJoke = await repo.update(dog);
      dispatch(ac.updateCreator(finalJoke));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteDog = async (id: DogStructure["id"]) => {
    try {
      repo.delete(id);
      dispatch(ac.deleteCreator());
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    dogs,
    loadDogs,
    loadDog,
    updateDog,
    addDog,
    deleteDog,
  };
}
