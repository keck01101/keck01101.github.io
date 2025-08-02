import React from "react";
import ProjCard from "./ProjCard";
import FeaturedCard from "./FeaturedCard";
import projectFind from "./projectFind";
import Stack from "react-bootstrap/Stack";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Embedded extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            pid: 0,
        }
        this.featured1 = <div>
            <p>Project within Carnegie Mellon Rocket Command to develop an altitude targeting system (ATS) for our 2023 and 2024 
                NASA USLI competition rockets. The developed ATS uses a microcontroller to read altitude and velocity data from sensors when
                the rocket is in flight. Altitude and velocity measurements are used to estimate the apex height of the rocket, and if the estimate
                exceeds the targeted altitude, fins are dynamically deployed to slow the rocket down.
            </p>
            <br></br>
            <p>Skills: Feedback Control Systems, Embedded C++, I2C/SPI Communication</p>
        </div>
        this.featured2 = <div>
            <p>Internal CMU research project to develop a lunar rover to be used to survey lunar craters for identifying ideal locations
                for potential human habitats. My role on the project has been to develop the control code for the mechanical movement of the onboard
                cameras for the rover prototype.
            </p>
            <br></br>
            <p>Skills: Embedded C++, PWM Motor Control, Motor Encoder Feedback</p>
        </div>
    }

    modalHandle(newPid) {
        this.setState({pid: newPid});
        this.setState({modalShow: true});
    }

    modalClose = () => {
        this.setState({modalShow: false});
    }

    render () {
        return (
            <div className="App">
                <Modal show={this.state.modalShow} onHide={this.modalClose}>
                    <Modal.Header>
                        <Modal.Title>{projectFind(this.state.pid)[0]}</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>{projectFind(this.state.pid)[1]}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <header className="App-header-projs">
                    <h1>Embedded Projects</h1>
                </header>
                <div className="App-content">
                    <Stack direction="horizontal" style={{marginLeft:"auto", marginRight:"auto", 
                        display:"flex", justifyContent:"center", paddingBottom:"50px"}} gap={5}> 
                        <FeaturedCard name={projectFind(3)[0]} desc={this.featured2} img={projectFind(3)[2]}
                            src={projectFind(3)[3]} pid={3} moreInfo={true} onPress={this.modalHandle.bind(this)}
                            style={{width:"18rem", marginLeft:"auto", marginRight:"auto", paddingTop:"20px"}}></FeaturedCard>
                        <FeaturedCard name={projectFind(2)[0]} desc={this.featured1} img={projectFind(2)[2]} 
                            src={projectFind(2)[3]} pid={2} moreInfo={true} onPress={this.modalHandle.bind(this)}
                            style={{width:"22rem", marginLeft:"auto", marginRight:"auto", paddingTop:"20px"}}></FeaturedCard> 
                        <ProjCard name={projectFind(9)[0]} desc={projectFind(9)[1]} img={projectFind(9)[2]}
                            src={projectFind(9)[3]} pid={9} moreInfo={false} style={{width:"18rem",
                            marginLeft:"auto", marginRight:"auto", paddingTop:"20px"}}></ProjCard>
                    </Stack>
                </div>
            </div>
        )
    }
}

export default Embedded;