import React from 'react';

const BlogBodyRenderer = ({ body }) => {
  return (
    <div>
      {body.map((block, index) => {
        switch (block._type) {
          case 'block':
            return <p key={index}>{block.children.map((child) => child.text).join('')}</p>;
          case 'span':
            return <span key={index}>{block.text}</span>;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogBodyRenderer;