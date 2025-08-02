import React from "react";
import ProjCard from "./ProjCard";
import FeaturedCard from "./FeaturedCard";
import projectFind from "./projectFind";
import Stack from "react-bootstrap/Stack";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Hardware extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            pid: 0,
        }
        this.featured_desc = <div>
            <p>Class project to increase the efficiency of multiplication within a custom class-specific ISA. By modifying the
                ISA hardware description with a dedicated coprocessor, the cycles needed for multiplication was reduced by 80-90%.
            </p>
            <br></br>
            <p>Skills: SystemVerilog, FPGA, ISAs, Computer Architecture</p>
        </div>
        this.ats_feasability_desc = <div>
            <p>
            As part of my role as the Avionics design lead for Carnegie Mellon Rocket Command, I did a feasability study on whether or not to 
            begin using FPGAs instead of microcontrollers for control of our competition rocket's altitude targeting system. After considering 
            the tradeoffs, I decided to continue using microcontrollers due to the easier implementation of more-complex algorithms, and also due 
            to the FPGA speed benefits being largely bottlenecked by sensor communication protocol speed.
            </p>
            <br></br>
            <p>Skills: FPGA Timing Analysis, Protocol Timing Analysis, Technical Writing</p>
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
                    <h1>Hardware Projects</h1>
                </header>
                <div className="App-content">
                    <Stack direction="horizontal" style={{marginLeft:"auto", marginRight:"auto", 
                        display:"flex", justifyContent:"center", paddingBottom:"50px"}} gap={5}>
                        <ProjCard name={projectFind(7)[0]} desc={projectFind(7)[1]} img={projectFind(7)[2]}
                        src={projectFind(7)[3]} pid={7} moreInfo={false} style={{width:"20rem",
                            marginLeft:"auto", marginRight:"auto", paddingTop:"20px"}}></ProjCard> 
                        <FeaturedCard name={projectFind(1)[0]} desc={this.featured_desc} src="" pid={1} moreInfo={true}
                            onPress={this.modalHandle.bind(this)}></FeaturedCard>
                        <ProjCard name={projectFind(8)[0]} desc={this.ats_feasability_desc} src="" pid={8} moreInfo={true}
                            onPress={this.modalHandle.bind(this)}></ProjCard>
                    </Stack>
                </div>
            </div>
        )
    }
}

export default Hardware;