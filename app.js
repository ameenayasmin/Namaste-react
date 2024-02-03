// const heading = React.createElement("h1",{className:"headingone"}, "React makes easy life");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// nested elements in react
const heading = React.createElement("div", {id:"parent"},
React.createElement("div",{id:"div-two"},
React.createElement("p", {}, "I am react")

)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);