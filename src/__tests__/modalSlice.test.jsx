import modalReducer, { openModal, closeModal } from "../store/modalSlice";

describe("modalSlice", () => {
  test("doit gérer l'état initial", () => {
    expect(modalReducer(undefined, { type: "unknown" })).toEqual({
      isOpen: false,
    });
  });

  test("doit gérer openModal", () => {
    const previousState = { isOpen: false };
    expect(modalReducer(previousState, openModal())).toEqual({ isOpen: true });
  });

  test("doit gérer closeModal", () => {
    const previousState = { isOpen: true };
    expect(modalReducer(previousState, closeModal())).toEqual({
      isOpen: false,
    });
  });
});
