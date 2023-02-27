import { useEffect, useMemo } from "react";
import { useDogs } from "../../hook/use.dogs";
import { DogStructure } from "../../models/dog.model";
import { DogApiRepo } from "../../services/dog.api.repo";
import "./dogs.css"

export function Dogs() {
  const repo = useMemo(() => new DogApiRepo(), []);
  const { dogs, loadDogs } = useDogs(repo);
  console.log(dogs);

  useEffect(() => {
    loadDogs();
  }, []);

  return (
    <div className="card-container">
      <ul className="card-list">
        {dogs.dogs.map((item: DogStructure) => (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Breed: {item.breed}</p>
            <p>Weight: {item.weight}</p>
            <p>Good boy?: {item.is_good === true ? "yes" : "no"}</p>
          </li>
        ))}
      </ul>
      {/* <Form></Form> */}
    </div>
  );
}
