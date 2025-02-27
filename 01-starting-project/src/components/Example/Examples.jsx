import TabButtons from "../../components/TabButtons/TabButtons";
import { useState } from "react";
import { EXAMPLES } from "../../data";

export default function Examples() {
  const [clickedTopic, setClickedTopic] = useState();

  function handleClick(clickedButton) {
    setClickedTopic(clickedButton);
  }

  let tabContent = <p>Please Choose a Topic.</p>;

  if (clickedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[clickedTopic].title}</h3>
        <p>{EXAMPLES[clickedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[clickedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButtons
          isActive={clickedTopic === "components"}
          onClick={() => handleClick("components")}
        >
          Components
        </TabButtons>
        <TabButtons
          isActive={clickedTopic === "jsx"}
          onClick={() => handleClick("jsx")}
        >
          JSX
        </TabButtons>
        <TabButtons
          isActive={clickedTopic === "props"}
          onClick={() => handleClick("props")}
        >
          Props
        </TabButtons>
        <TabButtons
          isActive={clickedTopic === "state"}
          onClick={() => handleClick("state")}
        >
          State
        </TabButtons>
      </menu>
      {tabContent}
    </section>
  );
}
