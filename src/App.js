import logo from "./logo.svg";
import "./App.css";
import Fullname from "./compenent/Fullname";
import Address from "./compenent/Address";
import Profileimg from "./compenent/Profileimg";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./App.css";

function App() {
    return ( <
        div className = "App" >
        <
        Card style = {
            { width: "18rem" } } >
        <
        Profileimg / >
        <
        Card.Body >
        <
        Card.Title > { " " } <
        Fullname / > { " " } <
        /Card.Title>{" "} <
        Card.Text > { " " } <
        Address / >
        <
        /Card.Text>{" "} <
        /Card.Body>{" "} <
        /Card>{" "} <
        /div>
    );
}

export default App;