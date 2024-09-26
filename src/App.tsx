import ListGroup from "./components/ListGroup";
import TestIcon from "./components/TestIcon";

function App() {
  const items = ["First item", "Second item", "Third item"];
  const headings = "Cities";
  const handleCLick = (item: string) => {
    console.log(item);
  };
  return (
    <div className="container">
      <ListGroup
        items={items}
        heading={headings}
        onSelectedItem={handleCLick}
      />
      <TestIcon></TestIcon>
    </div>
  );
}

export default App;
