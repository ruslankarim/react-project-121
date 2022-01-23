import React, {useEffect, useState} from "react";
import Item from "./Item.js";
import "./index.css";
import useFetch from "./useFetch";

export default function Shop() {
  const [items, setItems] = useState([]);

  const {get, loader} = useFetch()

  useEffect(() => {
    (async () => {
      const data = await get("https://covid-shop-mcs.herokuapp.com/");
      setItems(data);
      console.log(data);
    })();
  }, []);

  console.log(loader)

  return (
      loader ?
          <div className="flex h-full justify-center items-center">
              <div className="flex justify-center items-center">
                  <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 text-blue-600 rounded-full" role="status">
                      <span className="visually-hidden">Loading...</span>
                  </div>
              </div>
          </div>  :
          <div className="container pt-4 mx-auto">
              <div className="flex gap-4">
                  {items.map((item) => (
                      <Item key={item.id} info={item} />
                  ))}
              </div>
          </div>
  )
}

