import React from "react";
import ReactDOM from "react-dom/client";

/***
 * Parcel-
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Clearing out code(remove console in dist)
 * what is the most heaviest thing in website - images medias
 * Dev and Production build
 * Super Fast Build algorithm
 * Caching while development
 * compression
 * compatible with older browser
 * HTTPS on dev
 * consitent hashing algo
 * Zero config
 * port numbeer handled by parcel
 * Package manager handles Transitive dependencies(a package dependent of which some dependencies which also dependent on other dependencies)
 * Tree shaking (removing unwanted code)
 */

const heading = React.createElement(
  "h1",
  {
    style: {
      fontSize: "20px",
    },
    key: "h1",
  },
  "Hello World!"
);

const heading2 = React.createElement(
  "h1",
  {
    style: {
      fontSize: "30px",
    },
    key: "h2",
  },
  "Hello World! from Webpack sdsd"
);

const Container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

const Container2 = () => {
  return React.createElement("h1", null);
};

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
root.render(Container);
