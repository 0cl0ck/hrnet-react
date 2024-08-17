# React Modal Component

A lightweight, customizable modal component for React applications.

## Installation

npm install @hughsawed/react-modal-component

## Usage

```jsx
import React, { useState } from "react";
import Modal from "@hughsawed/react-modal-component";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
}
```

## Props

| Prop     | Type     | Default  | Description                                  |
| -------- | -------- | -------- | -------------------------------------------- |
| isOpen   | boolean  | required | Controls the visibility of the modal         |
| onClose  | function | required | Function to call when the modal should close |
| children | node     | required | Content to be rendered inside the modal      |

## Features

- Lightweight and easy to use
- Customizable content
- Manages body scroll when modal is open
- Accessible (uses appropriate ARIA attributes)
- Closes on outside click

## Styling

The component comes with basic styling. You can override these styles by targeting the following classes:

- \`.blocker\`: The overlay that covers the screen behind the modal
- \`.modal\`: The modal container
- \`.modal-open\`: Applied to the modal when it's visible
- \`.modal-children\`: Wrapper for the modal content
- \`.close-modal\`: The close button

## Development

To run this project locally:

1. Clone the repository
2. Run \`npm install\`
3. Run \`npm start\` to start the development server

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

```

```
