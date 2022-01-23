import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./index.css";
import 'tw-elements';

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Shop />
          <div className="flex justify-center items-center mt-12">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => setLogin(false)}>
                  Выйти
              </button>
          </div>
      </>
    );
  } else {
    return (
          <div
              className="bg-indigo-100 py-5 px-6 mb-3 text-base text-indigo-700 inline-flex items-center w-full"
              role="alert">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right"
                   className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512">
                  <path fill="currentColor"
                        d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z">
                  </path>
              </svg>
              Нужно <span className="font-bold text-blue-800 hover:pointer" onClick={() => setLogin(true)}>&nbsp;<a href="#">залогиниться!</a></span>
          </div>
    );
  }
}

render(<App />, document.querySelector("#root"));
