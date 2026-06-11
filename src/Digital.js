import React from "react";
import ProjCard from "./ProjCard";
import projectFind from "./projectFind";
import Stack from "react-bootstrap/Stack";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FeaturedCard from "./FeaturedCard";

class Digital extends React.Component {
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
                <header className="App-header-projs">
                    <h1>Digital Projects</h1>
                </header>
                <div className="App-content">
                    <Modal show={this.state.modalShow} onHide={this.modalClose}>
                        <Modal.Header>
                            <Modal.Title>{projectFind(this.state.pid)[0]}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{projectFind(this.state.pid)[5]}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <Stack direction="horizontal" style={{marginLeft:"auto", marginRight:"auto", 
                        display:"flex", alignItems: "flex-start", justifyContent:"center", paddingBottom:"0px", marginTop:"-50px"}} gap ={5}>
                        <FeaturedCard name={projectFind(14)[0]} desc={projectFind(14)[1]} src={projectFind(14)[3]}
                            img={projectFind(14)[2]} pid={14} moreInfo={true} onPress={this.modalHandle.bind(this)}></FeaturedCard>
                        <ProjCard name={projectFind(13)[0]} desc={projectFind(13)[1]} src=""
                            pid={13} moreInfo={true} onPress={this.modalHandle.bind(this)}></ProjCard>
                        <ProjCard name={projectFind(12)[0]} desc={projectFind(12)[1]} src={projectFind(12)[3]}
                            img={projectFind(12)[2]} pid={12} moreInfo={false} onPress={this.modalHandle.bind(this)}></ProjCard>
                    </Stack>
                    <Stack direction="horizontal" style={{marginLeft:"auto", marginRight:"auto", 
                        display:"flex", justifyContent:"center", paddingBottom:"0px", marginTop:"-300px"}} gap ={5}>
                            <ProjCard name={projectFind(11)[0]} desc={projectFind(11)[1]} pid={11}
                            style={{marginTop:"340px"}}></ProjCard>
                            <ProjCard name={projectFind(10)[0]} desc={projectFind(10)[1]} src={projectFind(10)[3]}
                                img={projectFind(10)[2]} pid={10} moreInfo={false} onPress={this.modalHandle.bind(this)}
                                style={{marginTop:"110px"}}></ProjCard>
                            <ProjCard name={projectFind(7)[0]} desc={projectFind(7)[1]} src={projectFind(7)[3]}
                                img={projectFind(7)[2]} pid={7} moreInfo={false} onPress={this.modalHandle.bind(this)}></ProjCard>
                    </Stack>
                    <Stack direction="horizontal" style={{marginLeft:"auto", marginRight:"auto", 
                        display:"flex", justifyContent:"center", paddingBottom:"50px", marginTop:"30px"}} gap ={5}>
                            <ProjCard name={projectFind(1)[0]} desc={projectFind(1)[1]} src={projectFind(1)[3]}
                                img={projectFind(1)[2]} pid={1} moreInfo={false} onPress={this.modalHandle.bind(this)}></ProjCard>
                    </Stack>
                </div>
            </div>
        )
    }
}

export default Digital;