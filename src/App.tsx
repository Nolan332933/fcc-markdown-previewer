import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  // Default Markdown content
  const [markdownText, setMarkdownText] = useState(`
# Welcome to my Markdown Previewer!

## Subheading
### Smaller Subheading

This is some **bold text**, and this is *italic text*.

You can also write inline code: \`<div>Hello World</div>\`.

\`\`\`
// Code block example
function greet() {
  console.log("Hello, World!");
}
\`\`\`

> Blockquote example!

- Item 1
- Item 2
- Item 3

Here is an [example link](https://www.freecodecamp.org).

And finally, an image:
![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
  `);

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div className="container">
        {/* Textarea for Markdown input */}
        <textarea
          id="editor"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
        ></textarea>
        {/* Div for Markdown rendering */}
        <div id="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
