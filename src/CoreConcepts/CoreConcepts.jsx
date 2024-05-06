import CoreConcept from '../CoreConcept/CoreConcept'
import { CORE_CONCEPTS } from '../data-with-examples'
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept>
        ))}
      </ul>
    </section>
  )
}
