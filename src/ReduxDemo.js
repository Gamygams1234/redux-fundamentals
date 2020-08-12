import React, { Component } from "react";
import { createStore } from "redux";

class ReduxDemo extends Component {
  render() {
    // step 2 reducer

    const reducer = (state, action) => {
      if (action.type === "ATTACK") {
        return action.payload;
      } else if (action.type === "GREENATTACK") {
        return action.payload;
      }
      return state;
    };

    // step 1 Store
    let store = createStore(reducer, "Peace");

    // step3 Subcribe
    store.subscribe(() => console.log("Store is now", store.getState()));

    // step 4 dispatch action

    store.dispatch({ type: "ATTACK", payload: "Iron Man" });
    store.dispatch({ type: "GREENATTACK", payload: "HULK" });

    return (
      <div>
        <h1>ReduxDemo</h1>
      </div>
    );
  }
}

export default ReduxDemo;
