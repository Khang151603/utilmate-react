
function Product() {
  return (
    <div>this is product</div>
  )
}

function ReactJsx() {

  const expression1 = 1 + 1;
  const renderUser = (
    <div>
      Name: tony <br />
      Age: 18 <br />
    </div>
  )

  return (
    <div>
      <h1>ReactJsx</h1> <br />
      <b>Expression1:</b> {expression1} <br />
      <b>Expression2:</b> {1 + 3} <br />
      <b>Render JSX:</b> {renderUser} <br />
      <b>Render Product</b> <Product />
    </div>
  )
}

export default ReactJsx