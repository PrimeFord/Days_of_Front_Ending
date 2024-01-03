// !! IMPORTANT README:
import React from "https://esm.sh/react@17.0.1";
import ReactDOM from "https://esm.sh/react-dom@17.0.1";
import { marked } from "https://esm.sh/marked";
import { createRoot } from "react-dom/client";

marked.setOptions({
  breaks: true,
});
const renderer = new marked.Renderer();

// components App
const defaultText =
  "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

function App() {
  const [text, setText] = React.useState(defaultText);
  return (
    <div id="wrapper">
      <h1>MarkDown Code Preview</h1>
      <p>
        Review marked text form: paste/edit the text area and vire result in
        preview section
      </p>
      <div id="box">
        <div className="editorWrap">
          <p>
            {/* <i fas fa-pen></i> */}
            Editor
          </p>
          <textarea
            id="editor"
            type="text"
            placeholder={"Edit/Paste marked code form in the text area"}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>
        <div class="previewWrap">
          <p>
            {/* <i fas fa-pen></i> */}
            Previewer
          </p>
          <Preview markdown={text} />
        </div>
      </div>
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
    ></div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
console.log("mww");