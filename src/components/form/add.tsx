import { SyntheticEvent } from "react";
import { ProtoDogStructure } from "../../models/dog.model";

export function Form() {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll("input");
    const newDog: ProtoDogStructure = {
      name: inputs[1].value,
      breed: inputs[2].value,
      weight: Number(inputs[3].value),
      is_good: inputs[4].value as unknown as boolean,
    };
  };

  return (
    <form action="" onSubmit={handleSubmit} id="form" data-testid="form">
      <div className="form-line">
        <label htmlFor="">Name: </label>
        <input type="text" required />
      </div>
      <div className="form-line">
        <label htmlFor="">Breed: </label>
        <input type="text" required />
      </div>
      <div className="form-line">
        <label htmlFor="">Weight: </label>
        <input type="text" required />
      </div>
      <div className="form-line">
        <label htmlFor="">Good boy?: </label>
        <input name="boolean-parameter" type="checkbox" value="true" />
        <input name="boolean-parameter" type="hidden" value="false" />
      </div>
      <div className="button-div">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
}
