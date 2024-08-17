import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../components/Modal";

describe("Modal Component", () => {
  test("ne s'affiche pas quand isOpen est false", () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        Test Content
      </Modal>
    );
    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
    expect(screen.queryByText("Close")).not.toBeInTheDocument();
  });

  test("s'affiche quand isOpen est true", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        Test Content
      </Modal>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  test("appelle onClose quand le bouton Close est cliqué", () => {
    const mockOnClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        Test Content
      </Modal>
    );
    fireEvent.click(screen.getByText("Close"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("applique la classe modal-open quand isOpen est true", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        Test Content
      </Modal>
    );
    expect(screen.getByRole("dialog")).toHaveClass("modal-open");
  });

  test("propage le contenu enfant", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <p>Test Child Content</p>
      </Modal>
    );
    expect(screen.getByText("Test Child Content")).toBeInTheDocument();
  });

  test("appelle onClose quand on clique en dehors de la modale", () => {
    const mockOnClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        Test Content
      </Modal>
    );
    fireEvent.click(screen.getByTestId("modal-blocker"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
