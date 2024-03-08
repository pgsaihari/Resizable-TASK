// src/ResizableLayout.js
import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import './ResizableLayout.css';

const ResizableComponent = ({ id, content }) => (
  <div className="component">
    <h2>Component {id}</h2>
    <p>{content}</p>
  </div>
);

const ResizableLayout = () => {
  const containerWidth = window.innerWidth - 20; // Adjusted for gap and borders
  const initialBoxWidth = Math.min(containerWidth / 3, 300);
  const [boxWidths, setBoxWidths] = useState([initialBoxWidth, initialBoxWidth, initialBoxWidth]);

  const handleResize = (index, _, { size }) => {
    const remainingWidth = containerWidth - size.width;
    const updatedWidths = [...boxWidths];
    updatedWidths[index] = size.width;

    // Distribute the remaining space among other resizable boxes
    const numBoxes = updatedWidths.length;
    const distributeWidth = remainingWidth / (numBoxes - 1);

    for (let i = 0; i < numBoxes; i++) {
      if (i !== index) {
        updatedWidths[i] = distributeWidth;
      }
    }

    setBoxWidths(updatedWidths);
  };

  return (
    <div className="container">
      {[1, 2, 3].map((id, index) => (
        <ResizableBox
          key={id}
          width={boxWidths[index]}
          height={window.innerHeight - 20} // Adjusted for gap and borders
          maxConstraints={[containerWidth / 3, window.innerHeight - 20]}
          minConstraints={[200, window.innerHeight - 20]}
          onResize={(e, data) => handleResize(index, e, data)}
          className="resizable-box"
        >
          <ResizableComponent id={id} content="Some content goes here." />
        </ResizableBox>
      ))}
    </div>
  );
};

export default ResizableLayout;
