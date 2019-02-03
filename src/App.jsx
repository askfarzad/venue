import React, {Component} from "react";
import "./resources/styles.css";
import Header from "./resources/components/header_footer/Header";
import Featured from "./resources/components/featured/index";
import VenueInfo from "./resources/components/VenueInfo/index";

class App extends Component {
    render() {
        return (
            <div
                className="App"
                style={{height: "1500px", background: "cornflowerblue"}}
            >
                <Header />
                <Featured />
                <VenueInfo />
            </div>
        );
    }
}

export default App;
