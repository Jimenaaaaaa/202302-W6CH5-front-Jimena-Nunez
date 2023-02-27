/* eslint-disable testing-library/no-unnecessary-act */
import { configureStore } from "@reduxjs/toolkit";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { DogStructure } from "../../models/dog.model";
import { dogsReducer } from "../../reducer/dog.reducer";
import { Dogs } from "./dogs";

describe("Given the dogs component", () => {
  const mockStore = configureStore({
    reducer: { dogs: dogsReducer },
    preloadedState: {
      dogs: {
        dogs: [
          {
            id: 2,
            name: "c",
            breed: "d",
            weight: 1,
            is_good: false,
          },
        ],
        selectedDog: {} as DogStructure,
      },
    },
  });

  // eslint-disable-next-line testing-library/no-render-in-setup
  render(
    <Provider store={mockStore}>
      <Dogs></Dogs>
    </Provider>
  );

  describe("When it is rendered", () => {
    test("Then it should the component card", () => {
      const element = screen.getByText(/Name:/);
      expect(element).toBeInTheDocument();
    });
  });
});
