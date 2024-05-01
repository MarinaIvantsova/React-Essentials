import { useState } from 'react'
import { EXAMPLES, CORE_CONCEPTS } from './data-with-examples'
import CoreConcept from './CoreConcept/CoreConcept'

import TabButton from './TabButton/TabButton'
function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>Fundamental React concepts you will need for almost any app you are going to build!</p>
    </header>
  )
}
function App() {
  const [selectedTopic, setselectedTopic] = useState()

  function handleSelect(content) {
    setselectedTopic(content)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelected={() => handleSelect('components')}>
              {EXAMPLES.components.title}
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelected={() => handleSelect('jsx')}>
              {EXAMPLES.jsx.title}
            </TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelected={() => handleSelect('props')}>
              {EXAMPLES.props.title}
            </TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelected={() => handleSelect('state')}>
              {EXAMPLES.state.title}
            </TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
