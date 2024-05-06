import { useState } from 'react'
import { EXAMPLES } from '../data-with-examples'
import TabButton from '../TabButton/TabButton'
import Section from '../Section'
import Tabs from '../Tabs/Tabs'

export default function Examples() {
  const [selectedTopic, setselectedTopic] = useState()

  function handleSelect(content) {
    setselectedTopic(content)
  }
  let tabContent = <p>Please select a button</p>

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
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
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  )
}
