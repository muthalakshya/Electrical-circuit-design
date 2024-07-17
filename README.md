# Electrical-circuit-design-lab

 

 
1.	Table of Contents
ACKNOWLEDGMENT	2
PREFACE	3
CERTIFICATE FROM THE COMPANY	4
1.	TABLE OF CONTENTS	5
2.	INTRODUCTION	6
3.	COMPANY/ORGANIZATION OVERVIEW	7
3.1	Company/Organization Technology area	7
3.2	Details about the training guide/mentor at the company/organization.	8
3.3	Address/Contact Information of company/organization and guide.	9
4.	TECHNOLOGY USED IN PROJECT	10
5.	TECHNICAL DETAILS OF PROJECT/STUDY	11
5.1	Architectural Overview	11
5.2	Functional Block Diagram	12
5.3	Functions/Modules Details	13
6.	APPLICATIONS	34
7.	FUTURE WORK	35
8.	CONCLUSION	36
9.	APPENDIX	37
10. REFERENCES …………………………………………………………………… 38


 
2.	Introduction


This report provides an in-depth overview of the work completed during my training at IIT Roorkee Virtual Lab. My primary responsibility was to develop an electric circuit design lab simulation using various web technologies. The aim of this project was to create comprehensive simulations that could be easily understood by individuals from different departments, thereby enhancing their understanding and learning of electric circuit concepts. 
3.	Company/Organization Overview

3.1	Company/Organization Technology area

IIT Roorkee Virtual Lab is an initiative aimed at providing virtual simulations and educational tools to enhance learning in engineering disciplines. The lab specializes in creating interactive, web-based simulations that allow students to experiment and learn in a virtual environment. These simulations cover a wide range of topics, including electrical engineering, mechanical engineering, and computer science, among others. The technology area includes web development, simulation modeling, and educational technology.
















3.2	Details about the training guide/mentor at the company/organization.
  	Training Guide/Mentor: Aakar Saini
Email: aakarsaini@gmail.com
Aakar Saini has extensive experience in the field of web development and educational technologies. His guidance was instrumental in shaping the direction and execution of this project. He provided valuable insights and feedback throughout the development process, ensuring that the simulations met educational standards and were technically accurate.






















3.3	Address/Contact Information of company/ organization and guide.

Company/Organization: IIT Roorkee Virtual Lab
Indian Institute of Technology Roorkee
Roorkee, Uttarakhand 247667, India
Guide: Aakar Saini
Email: aakarsaini@gmail.com

 
4.	Technology used in Project

The project utilized a range of web technologies to create the simulations. These technologies were chosen for their robustness, flexibility, and ease of integration.
•	HTML: Used for structuring the content and layout of the simulations.
•	CSS: Applied for styling the HTML elements to create a visually appealing and user-friendly interface.
•	JavaScript: Utilized for adding interactive features and functionalities to the simulations.
•	jQuery: Simplified JavaScript operations for event handling, animation, and manipulating HTML documents.
•	jsPlumb: Used to create interactive, draggable connections between elements in the simulations, particularly useful for visualizing circuit diagrams.
•	Bootstrap: Provided a responsive and mobile-first design framework to ensure the simulations worked well on various devices.
•	SweetAlert: Integrated to create stylish and customizable alert messages within the simulations.
•	TailwindCSS: A utility-first CSS framework that allowed for rapid and efficient styling of the simulations.
 
5.	Technical Details of Project/Study


5.1	Architectural Overview
The architectural design of the electric circuit design lab simulation was carefully crafted to ensure modularity, scalability, and ease of use. The architecture consists of three primary components: the front-end user interface and the simulation logic. Each component plays a crucial role in the overall functionality and user experience of the simulations.
The front-end user interface was developed using HTML, CSS, and JavaScript, along with frameworks such as Bootstrap and TailwindCSS. This layer provides the visual and interactive elements that users interact with, including buttons, switches, and circuit diagrams. The interface was designed to be intuitive and user-friendly, allowing users to easily navigate and control the simulations.
The simulation logic, implemented using JavaScript and jQuery, handles the core functionalities and interactions within the simulations. This includes the behavior of circuit components, the activation of relays, and the response to user inputs. The use of jsPlumb facilitated the creation of interactive connections between circuit elements, enabling users to visualize and manipulate circuit diagrams in real time.














5.2	Functional Block Diagram
The functional block diagram provides a detailed view of the main components and their interactions within the electric circuit design lab simulation. This diagram highlights the key functional blocks, including the user interface, control logic, sensors, relays, and loads. Each block is responsible for a specific aspect of the simulation, working together to create a cohesive and interactive learning experience.
The user interface block encompasses all the visual and interactive elements that users engage with. This includes buttons, switches, and circuit diagrams, which are implemented using HTML, CSS, and JavaScript. The control logic block, primarily managed by JavaScript and jQuery, handles the behavior of circuit components and the response to user inputs. It ensures that the simulation accurately reflects the intended operations of the electric circuits.
The sensor block represents various input devices, such as proximity sensors and timers, that detect and respond to environmental conditions. These sensors are crucial for experiments that involve automatic detection and control. The relay block includes the components that manage the flow of current to different loads, based on user inputs and control logic. Relays play a key role in switching and controlling electrical loads within the simulations.
The load block represents the devices being powered by the circuits, including DC and AC loads, motors, and other electrical components. The functional block diagram illustrates how these blocks interact and exchange data, providing a comprehensive overview of the simulation's workflow and operations.









5.3	Functions/Modules Details
	
Experiment 1: To operate DC and AC load with Push to ON & OFF Switch and a Switching Relay
Description: This experiment simulates the operation of DC and AC loads using a push-button switch and a relay. When the switch is pressed, the relay activates, allowing current to flow to the load. This basic operation demonstrates the fundamental concept of controlling electrical loads with a switch.
Key Modules:
•	Push Button Switch: Detects user input and toggles the relay.
•	Relay: Controls the flow of current to the load based on the switch state.
•	DC and AC Loads: Represent the devices being powered by the relay.
Flow Chart:
 
Fig 1.  Circuit Diagram of exp -1
 
Fig 2.  Simulation of exp -1





Experiment 2: To operate DC and AC load with Push to ON & OFF switch and a Switching Relay with holding circuit

Description: This experiment builds on the previous one by adding a holding circuit. The holding circuit ensures that the load remains powered even after the switch is released until the circuit is manually broken. This is useful in applications where the load needs to stay on after the initial activation.
Key Modules:
•	Push Button Switch
•	Holding Circuit: Maintains the relay's state until manually reset.
•	Relay
•	DC and AC Loads
Flow Chart:
 
Fig 3.  Circuit Diagram of exp -2

 
Fig 4.  Simulation of exp -2




Experiment 3: To operate a DC motor in forward and reverse direction with two switching relays with interlocking circuit
Description: This simulation demonstrates how to control the direction of a DC motor using two relays with an interlocking circuit. The interlocking circuit prevents both relays from being activated simultaneously, avoiding short circuits and ensuring safe operation.
Key Modules:
•	Two Relays: Control the motor direction (forward and reverse).
•	Interlocking Circuit: Ensures that only one relay is active at a time.
•	DC Motor: The load being controlled.
Flow Chart:

 
Fig 5.  Circuit Diagram of exp -3
 
Fig 6.  Simulation of exp -3




Experiment 4: To operate a DC load using a proximity sensor and timer circuit
Description: This experiment simulates the use of a proximity sensor to detect the presence of an object and a timer circuit to control the duration for which the load remains powered. This is commonly used in automatic lighting and similar applications.
Key Modules:
•	Proximity Sensor: Detects objects and triggers the timer.
•	Timer Circuit: Controls the duration of load activation.
•	Relay
•	DC Load

Flow Chart:
 
Fig 7.  Circuit Diagram of exp -4

 
Fig 8.  Simulation of exp -4






Experiment 5: To operate a DC load using a proximity sensor and counter circuit
Description: Similar to the previous experiment, this simulation uses a proximity sensor but adds a counter circuit to keep track of the number of times the sensor is activated. This can be used in counting applications such as entry or exit monitoring.
Key Modules:
•	Proximity Sensor
•	Counter Circuit: Tracks the number of activations.
•	Relay
•	DC Load

Flow Chart:
 
Fig 9.  Circuit Diagram of exp -5

 
Fig 10.  Simulation of exp -5




Experiment 6: To implement all logic gates and operate the DC load with Push to ON & OFF switch and a switching relay
Description: This experiment demonstrates the use of basic logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) to control a DC load with a push-button switch and a relay. It provides an understanding of how logic gates can be used in practical circuits.
Key Modules:
•	Logic Gates: Perform logical operations based on input states.
•	Push Button Switch
•	Relay
•	DC Load

Flow Chart:
 
Fig 11.  Circuit Diagram of exp -6
 
Fig 12.  Simulation of exp -6


Experiment 7: To design a logic for a 3-Way Switch connecting 3-floors with a single load
Description: This simulation shows how to control a single load from three different switches located on different floors. It involves designing a logic circuit that allows the load to be controlled from any switch, providing flexibility and convenience.
Key Modules:
•	Three-Way Switches: Allow control from multiple locations.
•	Logic Circuit: Ensures correct operation of the switches.
•	Relay
•	Load

Flow Chart:
 
Fig 13.  Circuit Diagram of exp -7

 
Fig 14.  Simulation of exp -7

Fig 15. PLC   Ladder Logic of exp -7

















Experiment 8: To design a logic for starting a 3-phase Induction Motor by Direct on-Line (DOL) Starter
Description: This experiment simulates the logic for starting a 3-phase induction motor using a Direct on-Line (DOL) starter, which applies full voltage directly to the motor terminals. This is a common method for starting motors in industrial applications.
Key Modules:
•	DOL Starter: Directly connects the motor to the power supply.
•	Relay
•	3-Phase Induction Motor

Flow Chart:
 
Fig 16.  Circuit Diagram of exp -8

 
Fig 17.  Simulation of exp -8
Fig 18. PLC   Ladder Logic of exp -8














Experiment 9: To design a logic for starting a 3-phase Induction Motor by Automatic Star-Delta Starter
Description: This simulation demonstrates the use of an automatic star-delta starter to reduce the starting current of a 3-phase induction motor. The motor starts in star configuration and then switches to delta configuration to handle the full load.
Key Modules:
•	Star-Delta Starter: Controls the motor start sequence, transitioning from star to delta configuration.
•	Relays
•	3-Phase Induction Motor

Flow Chart:
  
Fig 19.  Circuit Diagram of exp -9
 
Fig 20.  Simulation of exp -9

Fig 21. PLC   Ladder Logic of exp -9


 
6.	Applications


The simulations created during this project have several practical applications:
•	Educational Tool: These simulations serve as an excellent resource for teaching and learning electric circuit concepts in engineering courses.
•	Training Programs: They can be used in technical training programs to provide hands-on experience without the need for physical components.
•	Self-Learning: Hobbyists and professionals can use these simulations to enhance their understanding and skills in electric circuit design and operation.
•	Remote Learning: The web-based nature of these simulations makes them accessible for remote learning, providing an interactive platform for students and educators.
 
7.	Future Work

Future enhancements and potential directions for this project include:
•	Expanding Experiment Library: Adding more advanced and diverse experiments to cover a broader range of topics.
•	Interactive Elements: Increasing the interactivity of simulations by adding more dynamic and user-responsive features.
•	Analytics and Feedback: Integrating detailed analytics to track user interactions and provide feedback for improved learning outcomes.
•	Virtual Reality Integration: Exploring the use of virtual reality to create an even more immersive learning experience.
•	Multi-User Collaboration: Enabling multiple users to interact with the simulations simultaneously for collaborative learning and problem-solving.
 
8.	Conclusion


The training at IIT Roorkee Virtual Lab provided a valuable opportunity to develop educational simulations using advanced web technologies. These simulations will significantly aid in the understanding of electric circuit design and operation, making the learning process more interactive and accessible to a wide range of users. The project successfully achieved its objectives and laid the foundation for future enhancements and expansions. 
9.	Appendix




















































 
10.	References

	Darren Ashby, "Circuit Design: Know It All", Newnes, 1st Edition, 2008

	 Allan R. Hambley, "Electrical Engineering: Principles and Applications", Pearson, 7th Edition, 2017

	 Sung-Mo Kang and Yusuf Leblebici, "CMOS Digital Integrated Circuits: Analysis and Design", McGraw-Hill Education, 4th Edition, 2014

	Bob Dobkin and Jim Williams, "Analog Circuit Design: A Tutorial Guide to Applications and Solutions", Newnes, 1st Edition, 2012

	Charles K. Alexander and Matthew N.O. Sadiku, "Fundamentals of Electric Circuits", McGraw-Hill Education, 6th Edition, 2016
