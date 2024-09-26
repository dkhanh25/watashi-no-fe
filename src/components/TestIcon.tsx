import { useState } from "react";

export default function TestIcon() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <button
        className={liked ? "text-red-700 underline" : "underline-offset-auto"}
        onClick={() => {
          setLiked(!liked);
        }}
      >
        Button
      </button>
    </>
  );
}
