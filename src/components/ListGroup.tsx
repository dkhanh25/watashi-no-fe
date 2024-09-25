function ListGroup() {
  const items = ["First item", "Second item", "Third item"];
  return (
    <>
      <h1 className="text-3xl font-bold underline"> List</h1>
      {items.length === 0 && <h1>No item found</h1>}
      {items.map((item) => (
        <h1
          key={item}
          className="text-3xl font-bold underline"
          onClick={() => console.log("Clicked " + item.toString())}
        >
          {item}
        </h1>
      ))}
    </>
  );
}

export default ListGroup;
