import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleMoreClick() {
    setTotal(total + 1);
  }

  function handleLessClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <img className="rounded-t-lg" src={info.image} alt={info.name} />
      <div className="item-info">
        <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{info.name}</h5>
            <p className="text-gray-700 text-base mb-4">
              {info.desc}
            </p>
        </div>
      </div>
        <div className="flex flex-row pl-7 pr-7 pb-5">
            <button
                className="basis-1/4 border-2 rounded-full shadow-md"
                disabled={total === 0}
                onClick={handleLessClick}
            >
                -
            </button>
            <h3 className="basis-1/2 text-center">{total ? total : ""}</h3>
            <button className="basis-1/4 border-2 rounded-full shadow-md" onClick={handleMoreClick}>
                +
            </button>
        </div>
    </div>
  );
}
