// Simple Custom React Implementation

// Custom render function
function customRender(element, container) {
  const domElement = document.createElement(element.type);

  // If element has props (like style, id, etc.)
  if (element.props) {
    Object.keys(element.props).forEach((prop) => {
      if (prop === "children") return; // skip children here
      domElement[prop] = element.props[prop];
    });
  }

  // Handle children (only text for simplicity)
  if (typeof element.props.children === "string") {
    domElement.textContent = element.props.children;
  }

  container.appendChild(domElement);
}

// Our React-like element
const myElement = {
  type: "h1",
  props: {
    children: "Hello from Custom React!",
    style: "color: blue;"
  }
};

// Call custom render
const root = document.getElementById("root");
customRender(myElement, root);
