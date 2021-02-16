import React from "react";
import "./searchbar.css";

export default function Searchbar() {
  return (
    <form>
      <div className="form-row justify-content-center">
        <div className="col">
          <input
            type="search"
            className="searchbar"
            placeholder="Where to next?"
            autocomplete="off"
          />
        </div>
      </div>
    </form>
  );
}
