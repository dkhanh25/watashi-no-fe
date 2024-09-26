import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

export default function ListGroup({ items, heading, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1 className={"text-3xl font-bold underline "}> {heading}</h1>

      {items.length === 0 && <h1>No item found</h1>}

      {items.map((item, index) => (
        <h1
          key={item}
          className={
            selectedIndex === index
              ? "text-3xl font-bold underline"
              : "text-3xl"
          }
          onClick={() => {
            setSelectedIndex(index);
            onSelectedItem(item);
          }}
        >
          {item}
        </h1>
      ))}
    </>
  );
}
