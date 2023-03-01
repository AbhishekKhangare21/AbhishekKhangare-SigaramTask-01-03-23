import { useEffect, useRef, useState } from "react";

const Box = () => {
  const [RedBoxId, setRedBoxId] = useState(1);
  const previousValue = useRef(null);

  useEffect(() => {
    previousValue.current = RedBoxId;
  }, [RedBoxId]);

  const handleClick = (id) => {
    setRedBoxId(id);
  };

  return (
    <div className="box_cotainer">
      {[...Array(16)].map((_, id) => {
        return (
          <div
            className={
              RedBoxId === id || previousValue.current === id
                ? "red_box"
                : "blue_box"
            }
            onClick={() => handleClick(id)}
          ></div>
        );
      })}
    </div>
  );
};

export default Box;
