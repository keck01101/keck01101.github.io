import React from "react";
import ProjCard from "./ProjCard";
import projectFind from "./projectFind";
import Stack from "react-bootstrap/Stack";
import FeaturedCard from "./FeaturedCard";

class Other extends React.Component {
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
                    <h1>Other Projects</h1>
                </header>
                <div className="App-content">
                    <Stack direction="horizontal" style={{marginLeft:"auto", marginRight:"auto", 
                        display:"flex", alignItems: "flex-start", justifyContent:"center", paddingBottom:"50px", marginTop:"-50px"}} gap={5}>
                        <FeaturedCard name={projectFind(15)[0]} desc={projectFind(15)[1]} pid={15}
                            ></FeaturedCard>
                        <ProjCard name={projectFind(4)[0]} desc={projectFind(4)[1]} img={projectFind(4)[2]} 
                            src={projectFind(4)[3]} pid={4} moreInfo={false}
                            ></ProjCard>
                        <ProjCard name={projectFind(5)[0]} desc={projectFind(5)[1]} src="" pid={5} moreInfo={false}></ProjCard>
                    </Stack>
                </div>
            </div>
        )
    }
}

export default Other;