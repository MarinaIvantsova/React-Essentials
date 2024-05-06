export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2 title={title}></h2>
      {children}
    </section>
  )
}
