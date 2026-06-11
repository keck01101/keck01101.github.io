import logo from './logo.svg';
import React from 'react';
import './App.css';
import { ListGroup, Badge, Stack, CardGroup, Modal, Button } from 'react-bootstrap';
import ProjCard from './ProjCard';
import projectFind from './projectFind';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      pid: 0,
    }

    this.desc1 = <div style={{textAlign:"left"}}>
        <p>RipTide Jr is an ISA extension to the existing RipTide architecture which won the "Best Project Award"
          in CMU's Computer Architecture and Systems class (18-742) as judged by members of Apple's CPU team.
        </p>
    </div>

    this.desc2 = <div style={{textAlign:"left"}}>
      <p>As part of the CMU Tapeout of IoT Systems course, I designed a high-speed segmented current-steering DAC. The DAC was awarded a tapeout
        design award as part of the Apple New Silicon Initiative.
      </p>
    </div>

    this.desc3 = <div style={{textAlign:"left"}}>
      <p>The MarioKar system is an alternative RC car control scheme which includes motion controls and haptic feedback.
        The system won best ECE capstone project, and won the CMU College of Engineering
        most engaging project award.
      </p>
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
        <header className="App-header">
          <h1>Nicolas Keck</h1> 
          <h5>Electrical and computer engineering at Carnegie Mellon, space enthusiast, <br />
          embedded, FPGA, computer architecture</h5>
        </header>
        <div className="App-content">
          <Modal size="lg" show={this.state.modalShow} onHide={this.modalClose}>
            <Modal.Header>
              <Modal.Title>{projectFind(this.state.pid)[0]}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{projectFind(this.state.pid)[6]}</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.modalClose}>Close</Button>
            </Modal.Footer>
          </Modal>
          <Badge pill bg="dark" style={{fontSize:"30px"}}>Work Experience</Badge>
          <Stack style={{paddingTop:"30px"}} gap={4}>
            <ListGroup data-bs-theme="dark" className="col-md-5 mx-auto">
              <ListGroup.Item variant="primary">Honeybee Robotics - A Blue Origin Company</ListGroup.Item>
              <ListGroup.Item style={{textAlign:"left"}}>
                <Badge style={{fontSize:"18px"}}>Position Summary</Badge>
                <br></br>
                <ul style={{paddingTop:"5px"}}>
                  <li>Electrical Engineering Intern</li>
                  <li>May 2025 - August 2025</li>
                  <li>Los Angeles, California, USA</li>
                </ul>
                <br></br>
                <Badge bg="success" style={{fontSize:"18px"}}>Accomplishments</Badge>
                <ul style={{paddingTop:"5px"}}>
                  <li>Designed RTL diagram for FPGA-enabled lunar lander camera control card.</li>
                  <li>Created preliminary schematic for camera control card.</li>
                  <li>Redesigned Xilinx reference LVDS to MIPI converter circuit to function in worst-case conditions.</li>
                  <li>Designed and evaluated a discrete Power over Coax filter for a GMSL2 serial link.</li>
                  <li>Brought 3 component radiation test boards from concept to fabrication, and wrote bring-up and test plans for each board.</li>
                  <li>Completed 1 additional layout and 3 additional schematics of radiation test boards before project handoff.</li>
                </ul>
                <br></br>
                <Badge bg="info" style={{fontSize:"18px"}}>Skills Used</Badge>
                <ul style={{paddingTop:"5px"}}>
                  <li>RTL Design</li>
                  <li>Xilinx FPGAs</li>
                  <li>Altium Designer</li>
                  <li>Device Radiation Effects</li>
                  <li>SerDes</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup data-bs-theme="dark" className="col-md-5 mx-auto">
              <ListGroup.Item variant="primary">Parsons Corporation (Fourth Dimension Engineering)</ListGroup.Item>
              <ListGroup.Item style={{textAlign:"left"}}>
                <Badge style={{fontSize:"18px"}}>Position Summary</Badge>
                <br></br>
                <ul style={{paddingTop:"5px"}}>
                  <li>PCB/FPGA Engineering Intern</li>
                  <li>June 2024 - August 2024</li>
                  <li>Columbia, Maryland, USA</li>
                </ul>
                <br></br>
                <Badge bg="success" style={{fontSize:"18px"}}>Accomplishments</Badge>
                <ul style={{paddingTop:"5px"}}>
                  <li>Assisted development of a custom software defined radio device.</li>
                  <li>Designed and wrote VHDL description for an I2C-controlled FPGA to enable and disable RF chains.</li>
                  <li>Verified VHDL description through benchtop testing of FGPA development kit.</li>
                  <li>Wrote microcontroller communication code in C for serial debugging.</li>
                  <li>Designed and laid out a variety of supporting boards for radio device testing
                    (power supply, MCU debug board, thermal testing boards.)</li> 
                  <li>Simulated and tested modified RC networks to optimize power supply performance.</li>
                  <li>Performed a variety of experiments to determine functionality of USB 3.0 Superspeed-only on SoC.</li>
                </ul>
                <br></br>
                <Badge bg="info" style={{fontSize:"18px"}}>Skills Used</Badge>
                <ul style={{paddingTop:"5px"}}>
                  <li>VHDL and Verilog</li>
                  <li>C</li>
                  <li>Altium Designer</li>
                  <li>Buildroot and General Linux Kernel</li>
                  <li>Electronics Testing</li>
                  <li>Atlassian Suite (Jira, Bitbucket, Confluence)</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup data-bs-theme="dark" className="col-md-5 mx-auto">
              <ListGroup.Item variant="primary">Net Zero Technology Center</ListGroup.Item>
              <ListGroup.Item style={{textAlign:"left"}}>
                <Badge style={{fontSize:"18px"}}>Position Summary</Badge>
                <br></br>
                <ul style={{paddingTop:"5px"}}>
                  <li>Project Engineering Intern - Offshore Robotics</li>
                  <li>June 2023 - August 2023</li>
                  <li>Aberdeen, Scotland, UK</li>
                </ul>
                <br></br>
                <Badge bg="success" style={{fontSize:"18px"}}>Accomplishments</Badge>
                <ul style={{paddingTop:"5px"}}>
                  <li>Wrote industry white paper introducing best-practice carbon calculations for robotics usage in the offshore energy industry.</li>
                  <li>Held meetings with professionals from large energy providers such as Total and bp to inform paper writing process.</li>
                  <li>Developed an online carbon calculator with calculations from my paper which can provide energy startups an estimate of annual carbon reduction from their product's deployment.</li>
                  <li>Helped design stricter testing processes for offshore robotic systems to ensure greater reliability when in industrial environments.</li>
                </ul>
                <br></br>
                <Badge bg="info" style={{fontSize:"18px"}}>Skills Used</Badge>
                <ul style={{paddingTop:"5px"}}>
                  <li>ReactJS - Visual Studio Code</li>
                  <li>Technical Paper Writing</li>
                  <li>Familiarity with Offshore Robotics Field</li>
                  <li>Office Suite</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </Stack>
          <br></br>
          <Badge pill bg="dark" style={{fontSize:"30px"}}>Award-Winning Projects</Badge>
          <CardGroup style={{width:"80vw", marginLeft:"auto", marginRight:"auto", paddingTop:"30px", paddingBottom:"50px", alignContent:"center"}}>
            <ProjCard name={projectFind(14)[0]} desc={this.desc1} img={false} src="" pid={14} onPress={this.modalHandle.bind(this)} moreInfo={true}></ProjCard>
            <ProjCard name={projectFind(15)[0]} desc={this.desc2} img={false} src="" pid={15} onPress={this.modalHandle.bind(this)} moreInfo={true}></ProjCard>
            <ProjCard name={projectFind(16)[0]} desc={this.desc3} img={false} src="" pid={16} onPress={this.modalHandle.bind(this)} moreInfo={true}></ProjCard>
          </CardGroup>
        </div>
      </div>
    )
  }
}

export default App;
