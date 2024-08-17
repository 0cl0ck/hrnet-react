import employeesReducer, { addEmployee } from "../store/employeesSlice";

describe("employeesSlice", () => {
  test("doit gérer l'état initial", () => {
    expect(employeesReducer(undefined, { type: "unknown" })).toEqual([]);
  });

  test("doit gérer addEmployee", () => {
    const initialState = [];
    const newEmployee = { firstName: "John", lastName: "Doe" };
    const action = addEmployee(newEmployee);
    const newState = employeesReducer(initialState, action);
    expect(newState).toEqual([newEmployee]);
  });

  test("doit ajouter plusieurs employés", () => {
    const initialState = [{ firstName: "John", lastName: "Doe" }];
    const newEmployee = { firstName: "Jane", lastName: "Smith" };
    const action = addEmployee(newEmployee);
    const newState = employeesReducer(initialState, action);
    expect(newState).toEqual([...initialState, newEmployee]);
  });
});
