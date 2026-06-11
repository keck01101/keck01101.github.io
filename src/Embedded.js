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
                        <Modal.Body>{projectFind(this.state.pid)[5]}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <header className="App-header-projs">
                    <h1>Embedded Projects</h1>
                </header>
                <div className="App-content">
                    <Stack direction="horizontal" style={{marginLeft:"auto", marginRight:"auto", 
                        display:"flex", alignItems:"flex-start", justifyContent:"center", paddingBottom:"0px", marginTop:"-50px"}} gap={5}> 
                            <FeaturedCard name={projectFind(16)[0]} desc={projectFind(16)[1]} src={projectFind(16)[3]}
                                img={projectFind(16)[2]} pid={16} moreInfo={true} onPress={this.modalHandle.bind(this)}></FeaturedCard>
                            <ProjCard name={projectFind(2)[0]} desc={projectFind(2)[1]} src={projectFind(2)[3]}
                                img={projectFind(2)[2]} pid={2} moreInfo={true} onPress={this.modalHandle.bind(this)}></ProjCard>
                            <ProjCard name={projectFind(9)[0]} desc={projectFind(9)[1]} src={projectFind(9)[3]}
                                img={projectFind(9)[2]} pid={9} moreInfo={true} onPress={this.modalHandle.bind(this)}></ProjCard>
                    </Stack>
                    <Stack direction="horizontal" style={{marginLeft:"auto", marginRight:"auto", 
                        display:"flex", alignItems:"flex-start", justifyContent:"center", paddingBottom:"50px", marginTop:"-160px"}} gap={5}>
                        <ProjCard name={projectFind(8)[0]} desc={projectFind(8)[1]} src={projectFind(8)[3]}
                                img={projectFind(8)[2]} pid={8} moreInfo={false} onPress={this.modalHandle.bind(this)}
                                style={{marginTop:"200px"}}></ProjCard>
                        <ProjCard name={projectFind(3)[0]} desc={projectFind(3)[1]} src={projectFind(3)[3]}
                                img={projectFind(3)[2]} pid={3} moreInfo={false} onPress={this.modalHandle.bind(this)}></ProjCard>
                        <ProjCard name={projectFind(17)[0]} desc={projectFind(17)[1]} src={projectFind(17)[3]}
                                img={projectFind(17)[2]} pid={17} moreInfo={false} onPress={this.modalHandle.bind(this)}
                                style={{marginTop:"50px"}}></ProjCard>
                    </Stack>
                </div>
            </div>
        )
    }
}

export default Embedded;