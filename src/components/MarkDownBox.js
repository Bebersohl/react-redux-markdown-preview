import React from 'react';
import marked from 'marked';

const MarkDownBox = ({ text, onTextChange }) => {
  let input
  return (
    <div className="container">
      <textarea ref={node => {
          input = node
        }}
        value={text}
        onChange={() => onTextChange(input.value)}
      />
      <div className="output"
        dangerouslySetInnerHTML={{__html: marked(text)}}/>
    </div>
  )
}

export default MarkDownBox
