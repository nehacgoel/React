import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML-like syntax or XML-like syntax 
//(transpiled before it reaches JS engine) - PARCEL - Babel

// JSX => React.createElement => object => HTMLElement(render on browser)

//React Element
const jsxHeading = ( <h1 id="heading" className="head" tabIndex="1"> 
    Hello World
    </h1>
)


//React Functional Component => It's a javascript function which return react element or we can say JSX code

const HeadingComponent = () => {
    return <h1 className="heading1">Hello React Functional Component</h1>;
}

//another way to write above code and most used
const HeadingComponent2 = () => <h1 className="heading2">Hello World 2nd Component</h1>;

//multiline code with ()

//Component Composition => component inside another component
const HeadingComponent3 = () => (
    <div id="container">
        <HeadingComponent/>
        <HeadingComponent2/>
        <h1 className="heading">Hello World 3rd Component</h1>
    </div>
);


console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

root.render(<HeadingComponent3/>);