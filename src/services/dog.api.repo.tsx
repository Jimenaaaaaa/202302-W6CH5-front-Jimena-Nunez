import { DogStructure, ProtoDogStructure } from "../models/dog.model";

export interface DogApiRepoStructure {
  loadAll(): Promise<DogStructure[]>;
  loadOne(): Promise<DogStructure>;
  add(): Promise<DogStructure>;
  update(): Promise<DogStructure>;
  delete(): Promise<void>;
}

export class DogApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:3500/dogs/";
  }

  async loadAll(): Promise<DogStructure[]> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as DogStructure[];
    return data;
  }

  async loadOne(id: number): Promise<DogStructure> {
    const resp = await fetch(this.url + id);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as DogStructure;
    return data;
  }

  async add(dog: ProtoDogStructure): Promise<DogStructure> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(dog),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as DogStructure;
    return data;
  }

  async update(dog: ProtoDogStructure): Promise<DogStructure> {
    const resp = await fetch(this.url, {
      method: "PATCH",
      body: JSON.stringify(dog),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as DogStructure;
    return data;
  }

  // Ver como gestiono este.
  async delete(id: number): Promise<void> {
    // const resp = await fetch((this.url + id), {
    //   method: "DELETE",
    //   body: JSON.stringify(dog),
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // });
    // if (!resp.ok)
    //   throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    // const data = (await resp.json()) as DogStructure;
    // return data;
  }
}
