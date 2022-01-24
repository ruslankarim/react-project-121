import React, { useState } from "react";
import ImageLoader from "react-loading-image"

export default function Item (props) {
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
    <div className="rounded-lg shadow-lg bg-white max-w-sm grid items-end justify-between gap-4">
        <ImageLoader
            src={info.image}
            loading={() => {
                return <div className="flex h-full justify-center items-center">
                    <div className="flex justify-center items-center">
                        <div className="spinner-border animate-spin inline-block w-7 h-7 border-3 text-blue-600 rounded-full" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            }}
            error={() => {
                <div>Error</div>
            }}
        />
      {/*<img className="rounded-t-lg" src={info.image} alt={info.name} />*/}
        <div className="px-3">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{info.name}</h5>
            <p className="text-gray-700 text-base mb-4">
              {info.desc}
            </p>
      </div>
        <div className="grid grid-cols-3 gap-4 px-3 mb-4 ">
            <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
                disabled={total === 0}
                onClick={handleLessClick}
            >
                -
            </button>
            <h3 className="text-center">{total ? total : ""}</h3>
            <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
                onClick={handleMoreClick}>
                +
            </button>
        </div>
    </div>
  );
}
