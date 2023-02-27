import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useDogs } from "../../hook/use.dogs";
import { DogApiRepo } from "../../services/dog.api.repo";

export function Header() {

  return (
    <>
      <h1>PERRITOS</h1>
      <nav>
        <ul>
          <Link to={`/detail/add`}></Link>
          <li>Crear un nuevo perrito</li>
        </ul>
      </nav>
    </>
  );
}
