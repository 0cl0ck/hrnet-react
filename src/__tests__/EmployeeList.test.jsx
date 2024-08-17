import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import EmployeeList from "../components/EmployeeList";

const mockStore = configureStore([]);

describe("EmployeeList Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      employees: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          startDate: "2023-01-01",
          department: "IT",
          birthDate: "1990-01-01",
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          zipCode: "12345",
        },
      ],
    });
  });

  test('rend le titre "Current Employees"', () => {
    render(
      <Provider store={store}>
        <Router>
          <EmployeeList />
        </Router>
      </Provider>
    );
    expect(screen.getByText("Current Employees")).toBeInTheDocument();
  });

  test("rend le lien vers la page d'accueil", () => {
    render(
      <Provider store={store}>
        <Router>
          <EmployeeList />
        </Router>
      </Provider>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  test("rend le tableau des employés", () => {
    render(
      <Provider store={store}>
        <Router>
          <EmployeeList />
        </Router>
      </Provider>
    );
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
  });
});
