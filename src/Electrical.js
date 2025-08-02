import React from "react";
import ProjCard from "./ProjCard";
import projectFind from "./projectFind";

class Electrical extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            pid: 0,
        }
    }

    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Work in Progress!</h1>
                    <h4>Please come back later</h4>
                </header>
            </div>
        )
    }
}

export default Electrical;