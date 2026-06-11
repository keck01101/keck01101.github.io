// Photo Imports
import proj2img from "./Images/ATS.JPG";
import proj3img from "./Images/PitMagic.jpg";
import proj4img from "./Images/Proxylab.JPG";
import proj6img from "./logo.svg";
import proj7img from "./Images/MastermindLab.jpg"
import proj9img from "./Images/STEMnauts-Embedded.jpg"
import proj10img from "./Images/NoC_img.png"
import proj14img from "./Images/riptidejr_img.png"
import proj16img from "./Images/MarioKar.png"

function projectFind(pid) {
    return projects[pid];
}

// Project information - Project 0 exists for debug purposes
const project0 = ["Project 0", "Desc 0", true, "src 0", true, "Modal Body 0"];
// [0] - Project Name
// [1] - Project Description
// [2] - Does project have an image
// [3] - Project image source
// [4] - Does project have extra info?
// [5] - Modal Body
// [6] - Featured projects only - modified modal for home page
const projects = [project0];

// Project 1 - Multplication Coprocessor
const project1 = ["", "", false, "", false];
project1[0] = "Multiplication Coprocessor";
project1[1] = <div>
            <p style={{textAlign:"left"}}>Class project to increase the efficiency of multiplication within a custom class-specific ISA. By modifying the
                ISA hardware description with a dedicated coprocessor, the cycles needed for multiplication were reduced substantially.
            </p>
            <br></br>
            <b>SystemVerilog, Hardware Accelerators</b>
        </div>
projects.push(project1);

// Project 2 - Model Rocket ATS
const project2 = ["", "", false, "", false, ""];
project2[0] = "Model Rocket ATS";
project2[1] = <div><p style={{textAlign:"left"}}>
    The Altitude Targeting System (ATS) is a dynamic airbrake system designed for model rockets which uses real-time barometric and IMU data to estimate the apogee
    of a model rocket, and incrementally deploys fins to reduce or maintain the apogee if it meets or exceeds a target altitude. This system has been incorporated into
    every single NASA USLI competition rocket during my tenure with Carnegie Mellon Rocket Command, achieving an altitude within 2% of target at competition. As Avionics lead,
    I cemented the current architecture of the ATS, which includes a microcontroller and appropriate sensors mounted on a custom PCB.
</p>
<br></br>
<b>Feedback Control Systems, PCB, C++</b>
</div>
project2[2] = true;
project2[3] = proj2img;
project2[4] = true;
project2[5] = <div>
    <p> My specific contributions to the ATS system were:
        <ul>
            <li>Designing the schematic for the 2024 and 2025 iterations of the system</li>
            <li>Deriving the altitiude prediction formula and implementing the formula in code</li>
            <li>Designing and assmembling the 2024 and 2025 systems</li>
            <li>Leading the development of the software for the system</li>
        </ul>
    </p>
    <p>Read more about the ATS by viewing pages 26-53 of our <a href="https://docs.google.com/document/d/1oM8YIvlXnd4Tihm3cBz9seL6nHqRIObyQgPDn4VbbOw/edit?usp=sharing"
        target="_blank" rel="noopener noreferrer">2024 USLI CDR</a></p>
    <p>Or by viewing pages 24-43 of our <a href="https://docs.google.com/document/d/1h_2XGbw-QkjuQz9-J89GFzWsDCityYT5VoQ9ik-TF_8/edit?usp=sharing"
        target="_blank" rel="noopener noreferrer">2025 USLI CDR</a></p>
</div>
projects.push(project2);

// Project 3 - PitMagic Rover
const project3 = ["", "", false, "", false];
project3[0] = "PitMagic Rover";
project3[1] = <div>
    <p style={{textAlign:"left"}}>
        A research project I worked on within CMU's Planetary Robotics Lab to develop a lunar rover to be used to survey lunar craters for identifying ideal locations
        for potential human habitats. As part of my involvement with the project, I developed the control system code for the rover's survey mechanism, using motor encoder 
        feedback to ensure the camera positioning was precise.
    </p>
    <br></br>
    <b>Space Systems, C++, Motor Feedback and Control</b>
</div>
project3[2] = true;
project3[3] = proj3img;
projects.push(project3);

// Project 4 - C proxy
const project4 = ["", "", false, "", false];
project4[0] = "C Proxy";
project4[1] = <div>
    <p style={{textAlign:"left"}}>A class project to develop a proxy server written in C to act as an intermediary for web requests by forwarding web content to clients.
        The proxy includes multi-threading to handle multiple requests simulataneously, as well as a cache to retrieve frequently-requested
        media faster.
    </p>
    <br></br>
    <b>C, Multithreading, Networking</b>
</div>
project4[2] = true;
project4[3] = proj4img;
projects.push(project4);

// Project 5 - Malloc
const project5 = ["", "", false, ""];
project5[0] = "Custom Malloc Implementation";
project5[1] = <div>
    <p style={{textAlign:"left"}}>
        An educational project to rewrite C's malloc function to gain a better understanding of tracking and allocating memory. I started 
        by explicitly tracking both free and allocated blocks, before switching to an implicit tracking method where only free blocks were
        accounted for. In order to improve performance, I optimized block header and footer sizes while also implementing coallescing to
        prevent fragmentation. Finally, I implemented segregated tracking of certain free block sizes which was sufficient to reach my 
        performance goals.
    </p>
    <br></br>
    <b>C, Memory Management</b>
</div>
projects.push(project5);

// Project 6 - Website
const project6 = ["", "", false, ""];
project6[0] = "This Website!"
project6[1] = <div>
    <p style={{textAlign:"left"}}>
        I created this website not only to serve as a digital portfolio for some of my cooler work, but also to demonstrate
        some of my front-end programming abilities. This website is built using ReactJS in conjunction with React Bootstrap, and uses props
        to manage and render many components of the site, such as these project cards. By creating more-generic components and then passing
        data to them when necessary, I am able to re-use a lot of code and expand the website quickly. Developing the initial build of the 
        site took around a week, with the majority of that time dedicated to writeups.
    </p>
    <br></br>
    <p>React, JavaScript, Node, Web Design</p>
</div>
project6[2] = true;
project6[3] = proj6img;
projects.push(project6);

// Project 7 - Mastermind
const project7 = ["", "", false, ""];
project7[0] = "Mastermind";
project7[1] = <div>
    <p style={{textAlign:"left"}}>
        This was a project to create a description of the game mastermind in SystemVerilog to be run on FPGA. The game was played via debug 
        board inputs and was displayed on a monitor using a VGA interface. The game logic mimicked that of a proper arcade machine, requring 
        the user input "money" (simulated with button presses) to start the game, and then allowing the user to input guesses with debug 
        board switches. The game would provide feedback on each user's guess over VGA, until the player either guessed the code phrase or
        lost the game.
    </p>
    <br></br>
    <b>SystemVerilog, VGA</b>
</div>
project7[2] = true;
project7[3] = proj7img;
projects.push(project7);

// Project 8 - PRISM
const project8 = ["", "", false, ""];
project8[0] = "PRISM Rover";
project8[1] = <div>
    <p style={{textAlign:"left"}}>
        For this project, I was part of a team of students tasked with supporting a proposal for NASA's PRISM solicitation. Our proposed experiment was to drive a certain 
        distance away from the landing site in order to analyze undistrubted lunar regolith for the first time. The majority of my work for the project was focused on determining 
        the feasability of our rover design, as the proposal had a strict mass limit of 15kg; hence I primarily worked on estimating the mass of the instrument, and the mass of a
        suitable embedded subsystem for the rover.
    </p>
    <br></br>
    <b>Space Systems, Embedded Design</b>
</div>
projects.push(project8);

// Project 9 - STEMnauts
const project9 = ["", "", false, ""];
project9[0] = "STEMnauts";
project9[1] = <div>
    <p style={{textAlign:"left"}}>
        STEMnauts are small embedded systems designed for the 2023 iteration of NASA USLI which recorded g load data throughout the flight 
        of our competition rocket. These systems were designed to see if human survivability criteria (in terms of g forces) were being met throughout the 
        flight. Each individual STEMnaut included a high G and low G accelerometer, and an SD card for data logging. After the flight, the g force data was 
        able to be analyzed against NASA survivability criteria to determine whether the rocket's landing was succesful.
    </p>
    <br></br>
    <b>PCB, C++</b>
</div>
project9[2] = true;
project9[3] = proj9img;
project9[4] = true;
project9[5] = <div>
    <p>Find out more about the design of the STEMnauts by viewing pages 109 to 115 of our <a href="https://docs.google.com/document/d/1oM8YIvlXnd4Tihm3cBz9seL6nHqRIObyQgPDn4VbbOw/edit?usp=sharing"
            target="_blank" rel="noopener noreferrer">2024 USLI CDR</a>
    </p>
</div>
projects.push(project9);

// Project 10 - Network on Chip
const project10 = ["", "", false, ""];
project10[0] = "Network on Chip";
project10[1] = <div>
    <p style={{textAlign:"left"}}>
        A project to design a simple network on chip (NoC) topology. The project involved designing and implementing both the nodes and routers
        for the network in SystemVerilog. Testbenches would send packets through the network via the nodes, and routers would be responsible for routing
        packets correctly, quickly, and fairly. Outbound queues in the routers were used to ease routing congestion, and a round-robin mechanism was
        implemented to ensure fairness.
    </p>
    <br></br>
    <b>SystemVerilog, VCS</b>
</div>
project10[2] = true;
project10[3] = proj10img;
projects.push(project10);

// Project 11 - USB
const project11 = ["", "", false, ""];
project11[0] = "USB Protocol Engine";
project11[1] = <div>
    <p style={{textAlign:"left"}}>
        A class project to implement a host protocol engine supporting the majority of the USB2.0 standard. The host supports both IN and OUT transactions, 
        and performs necessary protocol handling steps such as error processing, retrying, and timeout handling. At the bitstream level, the host performs 
        bit stuffing, NRZI encoding, and CRC generation. The host was implemented in SystemVerilog and was tested using a VCS testbench.
    </p>
    <br></br>
    <b>SystemVerilog, USB2.0 Standard, VCS</b>
</div>
projects.push(project11);

// Project 12 - RISC-V Core
const project12 = ["", "", false, ""];
project12[0] = "RISC-V Core";
project12[1] = <div>
    <p style={{textAlign:"left"}}>
        CMU's Introduction to Computer Architecture course culminates in a CPU design challenge, where each group is tasked with designing "the best" RISC-V core
        they can; cores are evaluated based on their perf (MIPS) and their efficiency (MIPS/W). My group achieved 2nd place out of 34 groups for efficiency, and 
        managed to create a pareto-optimal design. Our design included a 7-stage in-order pipeline with forwarding, a BTB for branch prediction, and an L1 cache. 
        The majority of our efficiency gain came from our custom cache, which split cache lines into data arrays and a tag array. By only utilizing dual-ported SRAMs
        within our tag array, we achieved a 67% reduction in static power without any performance penalty.
    </p>
    <br></br>
    <b>RISC-V, Architectural Tradeoffs, Cache Design</b>
</div>
projects.push(project12);

// Project 13 - Keckologger
const project13 = ["", "", false, "", false, ""];
project13[0] = "Keckologger - FPGA Flight Computer";
project13[1] = <div>
    <p style={{textAlign:"left"}}>
        The Keckologger is a novel FPGA-only flight computer designed for use in model rockets. The entire system from the PCB design to the RTL was designed by me, and 
        the system is currently in the testing phase. The Keckologger offers all the functionality of high-end model rocket flight computers: real-time telemetry over radio, 
        GPS tracking, data logging to an SD card, and automatic main and drogue parachute deployment. In order to ensure accurate altitude readings when approaching the sound
        barrier, the system implements a Kalman filter to combine barometer and accelerometer readings. In limited manufacturing runs, the Keckologger costs around $150 per unit,
        which is half the price of comparable flight computers on the market.
    </p>
    <br></br>
    <b>SystemVerilog, PCB, Kalman Filters, GPS, APRS</b>
</div>
project13[4] = true;
project13[5] = <div>
    <p>The preliminary Keckologger prototype board has been fabricated and assembled, and is currently undergoing evaluation. The prototype board was designed
        with design for test principles in mind, allowing for the major features of the flight computer to be tested in tandem or seperately with ease. 
    </p>
    <p>All design documentation and files are available on the project's <a href="https://github.com/keck01101/keckologger/tree/main"
    target="_blank" rel="noopener noreferrer">GitHub Page</a></p>
</div>
projects.push(project13);

// Project 14 - RipTideJr
const project14 = ["", "", false, "", false, "", ""];
project14[0] = "RipTide Jr";
project14[1] = <div>
    <p style={{textAlign:"left"}}>
        RipTide Jr is an extension of the pre-existing RipTide spatial dataflow architecture which aims to maintain performance as RipTide's memory size (and hence latency) scales. 
        RipTide Jr defines two new compiler-inserted prefetching instructions which are directly placed on the dataflow fabric. RipTide Jr was evaluated by modifying RipTide's compiler 
        and C++ simulator. With a moderate cache size, RipTide Jr sees a geomean 5% speedup overall, and up to 100% speedup on certain workloads compared to RipTide. This project was recognized
        as the best project in CMU's Computer Architecture and Systems class by members of Apple's CPU team. 
    </p>
    <br></br>
    <b>Microarchitectural Modeling, C++, Computer Architecture Research</b>
</div>
project14[2] = true;
project14[3] = proj14img;
project14[4] = true;
project14[5] = <div>
    <p> My specific contributions to RipTide Jr:
        <ul>
            <li>Rewriting RipTide's simulator to support a unified L1 cache</li>
            <li>Adding direct and indirect prefetching instructions to the simulator</li>
            <li>Rewring simulation event scheduling to handle self-scheduling instructions</li>
            <li>Evaluating RipTide Jr's speedup</li>
        </ul>
    </p>
    <p>Read more regarding RipTide Jr's implementation and evaluation by 
        viewing the <a href="https://drive.google.com/file/d/16lL9rPuujvR1TQ7ILLb8xe8E_5AU2bKo/view?usp=sharing" 
        target="_blank" rel="noopener noreferrer">RipTide Jr Paper</a></p>
    <p>View the <a href="https://docs.google.com/presentation/d/1iL9_AQnUhDu1Rn7-sA4XsUWvaWv7bpCHbPTzgDm-wjw/edit?usp=sharing"
     target="_blank" rel="noopener noreferrer">RipTide Jr Final Presentation</a></p>
</div>
project14[6] = <div>
    <b>Project overview:</b>
    <p style={{textAlign:"left"}}>
        RipTide Jr is an extension of the pre-existing RipTide spatial dataflow architecture which aims to maintain performance as RipTide's memory size (and hence latency) scales. 
        RipTide Jr defines two new compiler-inserted prefetching instructions which are directly placed on the dataflow fabric. RipTide Jr was evaluated by modifying RipTide's compiler 
        and C++ simulator. With a moderate cache size, RipTide Jr sees a geomean 5% speedup overall, and up to 100% speedup on certain workloads compared to RipTide. This project was recognized
        as the best project in CMU's Computer Architecture and Systems class by members of Apple's CPU team. 
    </p>
    <br></br>
    <p> <b>My specific contributions to RipTide Jr:</b>
        <ul>
            <li>Rewriting RipTide's simulator to support a unified L1 cache</li>
            <li>Adding direct and indirect prefetching instructions to the simulator</li>
            <li>Rewring simulation event scheduling to handle self-scheduling instructions</li>
            <li>Evaluating RipTide Jr's speedup</li>
        </ul>
    </p>
    <p>Read more regarding RipTide Jr's implementation and evaluation by 
        viewing the <a href="https://drive.google.com/file/d/16lL9rPuujvR1TQ7ILLb8xe8E_5AU2bKo/view?usp=sharing" 
        target="_blank" rel="noopener noreferrer">RipTide Jr Paper</a></p>
    <p>View the <a href="https://docs.google.com/presentation/d/1iL9_AQnUhDu1Rn7-sA4XsUWvaWv7bpCHbPTzgDm-wjw/edit?usp=sharing"
     target="_blank" rel="noopener noreferrer">RipTide Jr Final Presentation</a></p>
</div>
projects.push(project14);

// Project 15 - Tapeout
const project15 = ["", "", false, "", false, "", ""];
project15[0] = "High Speed DAC Tapeout";
project15[1] = <div>
    <p style={{textAlign:"left"}}>
        As part of 18-620 (Design, Integration, and Tapeout of IoT Systems), I designed and taped out an 8-bit segmented current steering DAC. The DAC uses 5+3 bit segmentation to trade off between 
        good monotonicity and small thermometer segment layout size. The DAC was simulated both pre- and post-layout to determine its operating limitations.</p>
        <p style={{textAlign:"left"}}>Measured DAC parameters:
            <ul>
                <li>Frequency: 124.3MHz</li>
                <li>DNL: &lt;0.1LSB</li>
                <li>INL: &lt;0.25LSB</li>
                <li>SFDR: &gt;54.1dBc</li>
            </ul>
        </p>
     <p style={{textAlign:"left"}}>This project was awarded a tapeout design award from the Apple New Silicon Initiative. A redacted final presentation is available on request.</p>
    <br></br>
    <b>High-speed Analogue, Cadence, Segmented DAC</b>
</div>
project15[2] = true;
project15[6] = <div>
    <b>Project overview:</b>
    <p style={{textAlign:"left"}}>
        As part of 18-620 (Design, Integration, and Tapeout of IoT Systems), I designed and taped out an 8-bit segmented current steering DAC. The DAC uses 5+3 bit segmentation to trade off between 
        good monotonicity and small thermometer segment layout size. The DAC was simulated both pre- and post-layout to determine its operating limitations.</p>
        <p style={{textAlign:"left"}}>Measured DAC parameters:
            <ul>
                <li>Frequency: 124.3MHz</li>
                <li>DNL: &lt;0.1LSB</li>
                <li>INL: &lt;0.25LSB</li>
                <li>SFDR: &gt;54.1dBc</li>
            </ul>
        </p>
     <p style={{textAlign:"left"}}>This project was awarded a tapeout design award from the Apple New Silicon Initiative. <b>A redacted final presentation is available on request</b>.</p>
</div>
projects.push(project15);

// Project 16 - MarioKar
const project16 = ["", "", false, "", false, "", ""];
project16[0] = "MarioKar";
project16[1] = <div>
    <p style={{textAlign:"left"}}>
        The MarioKar system is an alternative RC car control scheme which uses motion controls and haptic feedback to provide a unique RC car driving experience. The system has an intuitive control scheme, 
        allowing it to be picked up as readily as a traditional controller. As part of this project, I designed the PCBs for our modified RC car and our glove controller. The glove controller communicates IMU gesture
        data to the RC car using Bluetooth Low Energy, which will then steer and accelerate accordingly; the car communicates onboard IMU data back to the glove, which is then fed into the glove's haptic motor controller 
        to provide the haptic feedback. This project was recognized as the first place project for the Fall 2025 ECE Capstone cohort as judged by Apple engineers, and was awarded the "Most Engaging Project Award" across the
        entire CMU College of Engineering.
    </p>
    <br></br>
    <b>FreeRTOS, Bluetooth Low Energy, Haptic Feedback, PCB</b>
</div>
project16[2] = true;
project16[3] = proj16img;
project16[4] = true;
project16[5] = <div>
    <p> My specific contributions to MarioKar:
        <ul>
            <li>Electronic parts selection for both the car and controller</li>
            <li>Designing and assembling PCBs for both the car and controller</li>
            <li>Creating a testing plan for the system</li>
            <li>Performing incremental and final testing of the system</li>
        </ul>
    </p>
    <p>See more regarding the project by viewing the <a href="https://course.ece.cmu.edu/~ece500/projects/f25-teama6/wp-content/uploads/sites/389/2025/12/FinalPresentation.pdf"
        target="_blank" rel="noopener noreferrer">Mario Kar Final Presentation</a></p>
</div>
project16[6] = <div>
    <b>Project overview:</b>
    <p style={{textAlign:"left"}}>
        The MarioKar system is an alternative RC car control scheme which uses motion controls and haptic feedback to provide a unique RC car driving experience. The system has an intuitive control scheme, 
        allowing it to be picked up as readily as a traditional controller. As part of this project, I designed the PCBs for our modified RC car and our glove controller. The glove controller communicates IMU gesture
        data to the RC car using Bluetooth Low Energy, which will then steer and accelerate accordingly; the car communicates onboard IMU data back to the glove, which is then fed into the glove's haptic motor controller 
        to provide the haptic feedback. This project was recognized as the first place project for the Fall 2025 ECE Capstone cohort as judged by Apple engineers, and was awarded the "Most Engaging Project Award" across the
        entire CMU College of Engineering.
    </p>
    <br></br>
    <p> <b>My specific contributions to MarioKar:</b>
        <ul>
            <li>Electronic parts selection for both the car and controller</li>
            <li>Designing and assembling PCBs for both the car and controller</li>
            <li>Creating a testing plan for the system</li>
            <li>Performing incremental and final testing of the system</li>
        </ul>
    </p>
    <p>See more regarding the project by viewing the <a href="https://course.ece.cmu.edu/~ece500/projects/f25-teama6/wp-content/uploads/sites/389/2025/12/FinalPresentation.pdf"
        target="_blank" rel="noopener noreferrer">Mario Kar Final Presentation</a></p>
</div>
projects.push(project16);

// Project 17 - Circumnav rover
const project17 = ["", "", false, ""];
project17[0] = "Circumnav Rover";
project17[1] = <div>
    <p style={{textAlign:"left"}}>
        Circumnav was a NASA Innovative Advanced Concepts (NIAC) proposal to design a rover capable of circumnavigating the moon. As the embedded team lead for the project, I was responsible for designing the rover's embedded system architecture
        to ensure that rover could succesfully navigate autonomously and localize itself properly. To achieve the circumnavigation succesfully, the rover would need to travel during the lunar day at a rate of 11kmh, essentially outracing nightfall. 
        Assuming the LNSS would not be available to the rover, we proposed a localization system which used IMU data in conjunction with occasional star tracker readings to maintain accurate localization. To reduce radiation risk, we proposed a dual-redundancy
        system for our autonomy hardware, which would provide error detection in the case one board failed.
    </p>
    <br></br>
    <b>Space Systems, Radiation Effects, Localization</b>
</div>
projects.push(project17);

export default projectFind;