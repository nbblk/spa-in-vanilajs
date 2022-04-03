import "./styles.css";

function hello() {
    let textNode = document. createTextNode("Hello World"); 
    document.body.appendChild(textNode);
}

hello();