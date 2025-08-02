// Photo Imports
import proj2img from "./ATS.JPG";
import proj3img from "./PitMagic.jpg";
import proj4img from "./Proxylab.JPG";
import proj6img from "./logo.svg";
import proj7img from "./MastermindLab.jpg"
import proj9img from "./STEMnauts-Embedded.jpg"

function projectFind(pid) {
    return projects[pid];
}

// Project information - Project 0 exists for debug purposes
const project0 = ["Project 0", "Desc 0", true, "src 0"];
const projects = [project0];

// Project 1 - Multplication Coprocessor
const project1 = ["", "", false, ""];
project1[0] = "Multiplication Coprocessor";
project1[1] = <div>
    <h4>Testing line 1</h4>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</div>
projects.push(project1);

// Project 2 - Model Rocket ATS
const project2 = ["", "", false, ""];
project2[0] = "Model Rocket ATS";
project2[1] = <div>
    <p>Temporary</p>
</div>
project2[2] = true;
project2[3] = proj2img;
projects.push(project2);

// Project 3 - PitMagic Rover
const project3 = ["", "", false, ""];
project3[0] = "PitMagic Rover";
project3[1] = <div>
    <p>Temporary</p>
</div>
project3[2] = true;
project3[3] = proj3img;
projects.push(project3);

// Project 4 - C proxy
const project4 = ["", "", false, ""];
project4[0] = "C Proxy";
project4[1] = <div>
    <p>A class project to develop a proxy server written in C to act as an intermediary for web requests by forwarding web content to clients.
        The proxy includes multi-threading to handle multiple requests simulataneously, as well as a cache to retrieve frequently-requested
        media faster.
    </p>
    <br></br>
    <p>Skills: C, Multithreading, Mutexes, Protocols, Networking</p>
</div>
project4[2] = true;
project4[3] = proj4img;
projects.push(project4);

// Project 5 - Malloc
const project5 = ["", "", false, ""];
project5[0] = "Custom Malloc Implementation";
project5[1] = <div>
    <p>
        An educational project to rewrite C's malloc function to gain a better understanding of tracking and allocating memory. I started 
        by explicitly tracking both free and allocated blocks, before switching to an implicit tracking method where only free blocks were
        accounted for. In order to improve performance, I optimized block header and footer sizes while also implementing coallescing to
        prevent fragmentation. Finally, I implemented segregated tracking of certain free block sizes which was sufficient to reach my 
        performance goals.
    </p>
    <br></br>
    <p>Skils: C, Memory Management, Data Structures, Computer Systems</p>
</div>
projects.push(project5);

// Project 6 - Website
const project6 = ["", "", false, ""];
project6[0] = "This Website!"
project6[1] = <div>
    <p>
        I created this website not only to serve as a digital portfolio for some of my cooler work, but also to demonstrate
        some of my front-end programming abilities. This website is built using ReactJS in conjunction with React Bootstrap, and uses props
        to manage and render many components of the site, such as these project cards. By creating more-generic components and then passing
        data to them when necessary, I am able to re-use a lot of code and expand the website quickly. Developing the initial build of the 
        site took around a week, with the majority of that time dedicated to writeups.
    </p>
    <br></br>
    <p>Skills: React, JavaScript, Node, Web Design</p>
</div>
project6[2] = true;
project6[3] = proj6img;
projects.push(project6);

// Project 7 - Mastermind
const project7 = ["", "", false, ""];
project7[0] = "Mastermind";
project7[1] = <div>
    <p>
        This was a project to create a description of the game mastermind in SystemVerilog to be run on FPGA. The game was played via debug 
        board inputs and was displayed on a monitor using a VGA interface. The FPGA was supposed to mimick the hardware of an arcade machine, 
        so the user would first need to put in an appropriate amount of "money" to begin playing the game. The user would then proceed through the 
        game, attempting to guess the secret pattern and receiving feedback for each guess. The most difficult part of this project was 
        actually creating the grading hardware description, as the logic for perfect and imperfect matches would often interfere and was 
        not easily simplifiable into a boolean statement.
    </p>
    <br></br>
    <p>Skills: SystemVerilog, ModelSim, VGA Interfacing</p>
</div>
project7[2] = true;
project7[3] = proj7img;
projects.push(project7);

// Project 8 - ATS FPGA Feasability Study
const project8 = ["", "", false, ""];
project8[0] = "ATS FPGA Feasability Study";
project8[1] = <div>
    <p>
        As part of my role as the Avionics design lead for Carnegie Mellon Rocket Command, I did a feasability study on whether or not to 
        begin using FPGAs instead of microcontrollers for control of our competition rocket's altitude targeting system. After considering 
        the tradeoffs, I decided to continue using microcontrollers due to the easier implementation of more-complex algorithms, and also due 
        to the FPGA speed benefits being largely bottlenecked by sensor communication protocol speed.
    </p>
    <br></br>
    <p>Skills: FPGA Timing Analysis, Protocol Timing Analysis, Technical Writing</p>
    </div>
projects.push(project8);

// Project 9 - STEMnauts
const project9 = ["", "", false, ""];
project9[0] = "STEMnauts - Embedded Design";
project9[1] = <div>
    <p>
        Part of NASA's 2024 iteration of their University Student Launch Competition involved designing a system which would deploy 
        from our rocket at around 500ft and then land without the use of the parachute. Part of the criteria for a succesful landing was whether certain 
        survivability characteristics were met, and it was necessary to design 4 "STEMnauts" which incorporated these characteristics into our 
        design. Our team decided that it was easiest to make our STEMnauts some form of embedded system, each of which would record g load
        throughout the flight and save logged data for later analysis. Our final design included a Seeed microcontroller, a high-g accelerometer,
        an SD card reader, and an external battery for each STEMnaut. Each Seeed used I2C to communicate with the external accelerometer (the 
        Seeeds also have a low-g internal accelerometer), and SPI to store data on the SD Card. On competition day, the STEMnauts were succesful 
        in recording flight data, but the ejection of an SD card on landing led to some data loss for one of our STEMnauts.
    </p>
    <br></br>
    <p>Skills: Arduino IDE, I2C, SPI, Minituarized Data Logging Devices</p>
</div>
project9[2] = true;
project9[3] = proj9img;
projects.push(project9);

export default projectFind;