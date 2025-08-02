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
    this.desc1 = <div>
      <p>Class project to increase the efficiency of multiplication within a custom class-specific ISA. By modifying the
        ISA hardware description with a dedicated coprocessor, the cycles needed for multiplication was reduced by 80-90%.
      </p>
      <br></br>
      <p>Skills: SystemVerilog, FPGA, ISAs, Computer Architecture</p>
    </div>
    this.desc2 = <div>
      <p>Project within Carnegie Mellon Rocket Command to develop an altitude targeting system (ATS) for our 2023 and 2024 
        NASA USLI competition rockets. The developed ATS uses a microcontroller to read altitude and velocity data from sensors when
        the rocket is in flight. Altitude and velocity measurements are used to estimate the apex height of the rocket, and if the estimate
        exceeds the targeted altitude, fins are dynamically deployed to slow the rocket down.
      </p>
      <br></br>
      <p>Skills: Feedback Control Systems, Embedded C++, I2C/SPI Communication</p>
    </div>
    this.desc3 = <div>
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
        <header className="App-header">
          <h1>Nicolas Keck</h1> 
          <h5>Electrical and computer engineering at Carnegie Mellon, space enthusiast, <br />
          embedded/hardware engineer</h5>
        </header>
        <div className="App-content">
          <Modal show={this.state.modalShow} onHide={this.modalClose}>
            <Modal.Header>
              <Modal.Title>{projectFind(this.state.pid)[0]}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{projectFind(this.state.pid)[1]}</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.modalClose}>Close</Button>
            </Modal.Footer>
          </Modal>
          <Badge pill bg="dark" style={{fontSize:"30px"}}>Work Experience</Badge>
          <Stack style={{paddingTop:"30px"}} gap={4}>
            <ListGroup data-bs-theme="dark" className="col-md-5 mx-auto">
              <ListGroup.Item variant="primary">Parsons Corporation (Fourth Dimension Engineering)</ListGroup.Item>
              <ListGroup.Item style={{textAlign:"left"}}>
                <Badge style={{fontSize:"18px"}}>Position Summary</Badge>
                <br></br>
                <ul style={{paddingTop:"5px"}}>
                  <li>Embedded/PCB Engineering Intern</li>
                  <li>June 2024 - August 2024</li>
                  <li>Columbia, Maryland, USA</li>
                </ul>
                <br></br>
                <Badge bg="success" style={{fontSize:"18px"}}>Accomplishments</Badge>
                <ul style={{paddingTop:"5px"}}>
                  <li>Helped develop a custom software defined radio device</li>
                  <li>Wrote VHDL description for CPLD/FPGA for RF front end board control</li>
                  <li>Wrote microcontroller communication code in C for serial debugging</li>
                  <li>Designed and laid out a variety of supporting boards for radio device testing
                    (power supply, MCU debug board, thermal testing boards)</li> 
                  <li>Simulated and tested modified RC networks to optimize power supply performance</li>
                  <li>Performed a variety of experiments to determine functionality of USB 3.0 Superspeed-only on SoC</li>
                  <li>Worked on creating standardized internal Altium component library</li> 
                </ul>
                <br></br>
                <Badge bg="info" style={{fontSize:"18px"}}>Skills Used</Badge>
                <ul style={{paddingTop:"5px"}}>
                  <li>VHDL and Verilog - Lattice Diamond</li>
                  <li>C - Eclipse</li>
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
          <Badge pill bg="dark" style={{fontSize:"30px"}}>Featured Projects</Badge>
          <CardGroup style={{width:"80vw", marginLeft:"auto", marginRight:"auto", paddingTop:"30px", paddingBottom:"50px", alignContent:"center"}}>
            <ProjCard name="Multiplication Coprocessor" desc={this.desc1} img={false} src="" pid={1} onPress={this.modalHandle.bind(this)} moreInfo={true}></ProjCard>
            <ProjCard name="Model Rocket ATS" desc={this.desc2} img={false} src="" pid={2} onPress={this.modalHandle.bind(this)} moreInfo={true}></ProjCard>
            <ProjCard name="PitMagic Rover" desc={this.desc3} img={false} src="" pid={0} moreInfo={true}></ProjCard>
          </CardGroup>
        </div>
      </div>
    )
  }
}

export default App;
