import React from "react";
import ProjCard from "./ProjCard";
import projectFind from "./projectFind";
import Stack from "react-bootstrap/Stack";

class Software extends React.Component {
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
                <header className="App-header-projs">
                    <h1>Software Projects</h1>
                </header>
                <div className="App-content">
                    <Stack direction="horizontal" style={{marginLeft:"auto", marginRight:"auto", 
                        display:"flex", justifyContent:"center", paddingBottom:"50px"}} gap={5}>
                        <ProjCard name={projectFind(4)[0]} desc={projectFind(4)[1]} img={projectFind(4)[2]} 
                            src={projectFind(4)[3]} pid={4} moreInfo={false}
                            style={{width:"20rem", marginLeft:"auto", marginRight:"auto",
                            paddingTop:"20px"}}></ProjCard>
                        <ProjCard name={projectFind(5)[0]} desc={projectFind(5)[1]} src="" pid={5} moreInfo={false}></ProjCard>
                        <ProjCard name={projectFind(6)[0]} desc={projectFind(6)[1]} 
                            src={projectFind(6)[3]} img={projectFind(6)[2]} pid={6} 
                            moreInfo={false} style={{width:"15rem", marginLeft:"auto", 
                            marginRight:"auto"}}></ProjCard>
                    </Stack>
                </div>
            </div>
        )
    }
}

export default Software;