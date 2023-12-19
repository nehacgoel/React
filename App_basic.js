import React from "react";
import ReactDOM from "react-dom/client";


// ----create a html element---------
     // React.createElement => object => HTMLElement(render on browser)
const heading = React.createElement(
    "h1", 
    {id: "heading", xyz: "abc"}, 
    "Hello World from React"
);
//heading is a object here.
console.log(heading) // object



//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);



//---- nested html structure -------

const parent1 = React.createElement("div", {id: "parent"}, 
                    React.createElement("div", {id: "child"},
                        React.createElement("h1", {}, "Hi, I am a h1 tag..")));

    // what if h1 and h2 are sibling. it will be an array

const parent = React.createElement("div", {id: "parent"}, 
        [
            React.createElement("div", {id: "child1"},
            [ React.createElement("h1", {}, "Hi, I am a h1 tag.."),
            React.createElement("h2", {}, "Hi, I am a h2 tag..")]),

            React.createElement("div", {id: "child2"},
            [ React.createElement("h1", {}, "Hi, I am a h1 tag.."),
            React.createElement("h2", {}, "Hi, I am a h2 tag..")])
        ]
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//---------------- 1st episode ----------------------