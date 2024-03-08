// src/ResizableLayout.js
import React from 'react';
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
  const containerHeight = window.innerHeight - 20; // Adjusted for gap and borders

  return (
    <div className="container">
      <ResizableBox
        width={Math.min(containerWidth / 3, 300)} // Initial width (1/3 of the container)
        height={containerHeight}
        maxConstraints={[containerWidth / 3, containerHeight]}
        minConstraints={[200, containerHeight]}
        className="resizable-box"
      >
        <ResizableComponent id={1} content="Some content goes here." />
      </ResizableBox>
      <ResizableBox
        width={Math.min(containerWidth / 3, 300)}
        height={containerHeight}
        maxConstraints={[containerWidth / 3, containerHeight]}
        minConstraints={[200, containerHeight]}
        className="resizable-box"
      >
        <ResizableComponent id={2} content="Some content goes here." />
      </ResizableBox>
      <ResizableBox
        width={Math.min(containerWidth / 3, 300)}
        height={containerHeight}
        maxConstraints={[containerWidth / 3, containerHeight]}
        minConstraints={[200, containerHeight]}
        className="resizable-box"
      >
        <ResizableComponent id={3} content="Some content goes here." />
      </ResizableBox>
    </div>
  );
};

export default ResizableLayout;
