A

INDUSTRIAL TRAINING REPORT 
ON
Web Development

Submitted for the Partial Fulfillment of the Requirement of the

Degree

Of

BACHELOR OF TECHNOLOGY

In

CSE (Data Science)



Session 2023-24 Summer Training From
Virtual Lab IIT Roorkee








Department of Technology 
Jodhpur Institute of Engineering & Technology 
JIET Group of Institutions, Jodhpur 
Acknowledgment




I express my admiration and convey my sincere thanks to our mentor                              Mr. Pratik Bhansali for his invaluable and expert supervision & guidance throughout the course and concern to make this task a success.
                                                       I would like to record my heartfelt gratitude to our ma’am Dr. Pratibha Peshwa Swami for her wisdom and words that were not only educating, stimulating and delightful but also served as a powerful beacon to give directions by endeaver.

I would also like to express my love and respect for my family and friends for their affectionate encouragement. It would have been impossible to accomplish this task without the blessing of almighty. 
                                 
                                                                                    
                                                                                    Lakshya Mutha








Preface


The electric circuit design lab simulation project at IIT Roorkee Virtual Lab represents an innovative step towards enhancing the educational experience in electrical engineering and related fields. This project, driven by the need to provide interactive and accessible learning tools, aims to bridge the gap between theoretical knowledge and practical application, allowing students and professionals to gain a deeper understanding of electric circuit concepts through hands-on experimentation.

The journey of developing this simulation involved the integration of various modern web technologies, including HTML, CSS, JavaScript, jQuery, jsPlumb, Bootstrap, SweetAlert, and TailwindCSS. Each of these technologies played a crucial role in creating a robust and user-friendly platform that could simulate complex electrical circuits and their behaviors. The project also leveraged the power of modular design, ensuring that the simulation could be easily maintained and expanded in the future.

This report documents the comprehensive process of creating the electric circuit design lab simulation, from the initial architectural planning to the implementation of specific experiments. It provides detailed insights into the project's technical aspects, including the architectural overview, functional block diagrams, flow charts, and code snippets. Additionally, it highlights the educational applications of the simulation and discusses potential future enhancements.

The successful completion of this project would not have been possible without the guidance and support of Mr. Pratik Bhansali, whose expertise in electrical engineering and educational technologies provided invaluable insights and direction. His mentorship ensured that the project adhered to high standards of quality and educational value.

This preface sets the stage for the detailed exploration of the project, offering readers an overview of the objectives, methodologies, and outcomes of the electric circuit design lab simulation. It is our hope that this report will serve as a valuable resource for educators, students, and professionals seeking to enhance their understanding of electric circuits and their practical applications. 
CERTIFICATE FROM THE COMPANY


This is to certify that Lakshya Mutha of B Tech 2nd Year of  Jodhpur Institute of Engineering and Technology, Jodhpur, has completed this project under my supervision and guidance. He has taken proper care and has shown utmost sincerity in completion of this project.

I certify that this project is up to my expectations and as per guidelines issued by JIET UNIVERSE.
                                          
                                          
    Dr. Pratibha Peshwa Swami                          Mr. Pratik Bhansali
Head Of Department - Technology                      Assistant Professor
 
Contents
Candidate’s Declaration	i
Acknowledgment	ii
Preface	iii
CERTIFICATE FROM THE COMPANY	iv
1.	Introduction	2
Background	2
Objectives	2
Scope	3
2.	Company/Organization Overview	4
Company/Organization Overview	4
Details about Training Mentor 	6
3.	Technology used in Project	7
Front end development	7
Back end development	8
Visualization	9
User-Interaction	10
4.	Technical Details of Project/Study	11
Architectural Overview	7
Functional Block DiagramVisualization	9
Functions/Modules Details	10
5.	Applications	34
6.	Future Work	36
7.	Conclusion	38
References	39



1.	Introduction

The introduction of this report outlines the background, objectives, and scope of the Electric Circuit Design Lab Simulation project, which was developed during my training at IIT Roorkee Virtual Lab. This section provides context for the project, highlighting its significance in the realm of engineering education and its potential to transform the way electrical engineering concepts are taught and understood.
Background
In the ever-evolving field of electrical engineering, understanding the practical applications of theoretical concepts is crucial for students and professionals alike. Traditional classroom settings, while effective in conveying foundational knowledge, often lack the resources to provide students with hands-on experience. This gap between theory and practice can hinder students' ability to fully grasp complex concepts and apply them in real-world scenarios.
To address this challenge, the Electric Circuit Design Lab Simulation project was conceived as part of IIT Roorkee Virtual Lab's initiative to enhance engineering education through technology. The project aims to create interactive simulations that allow students to explore and experiment with electric circuits, offering a virtual environment where they can gain practical experience without the limitations of physical lab setups.
Objectives
The primary objective of the Electric Circuit Design Lab Simulation project is to develop a series of educational simulations that illustrate key electrical engineering concepts. These simulations are designed to be accessible to students from various departments, providing a platform for them to experiment with circuit designs and observe the effects of different configurations in real-time.
Specific objectives of the project include:
1.	Enhancing Understanding of Electric Circuits: By providing students with interactive simulations, the project aims to deepen their understanding of how electric circuits work and how different components interact with one another.
2.	Bridging the Gap Between Theory and Practice: The simulations offer a practical learning experience that complements traditional classroom instruction, allowing students to apply theoretical concepts in a virtual environment.
3.	Supporting Remote Learning and Accessibility: The simulations are designed to be accessible online, enabling students to engage with the material from anywhere and at any time. This is particularly important in the context of remote learning and the need for flexible educational resources.
4.	Encouraging Experimentation and Exploration: The simulations provide a safe and controlled environment for students to experiment with circuit designs, encouraging exploration and innovation without the risk of damaging equipment or incurring costs.
Scope
The scope of the Electric Circuit Design Lab Simulation project encompasses the development of a series of simulations that cover a range of electrical engineering concepts. These simulations include:
1.	DC and AC Load Operation with Switching Relays: Simulations that demonstrate the operation of DC and AC loads using push-to-ON/OFF switches and switching relays, including holding circuits.
2.	Motor Control with Interlocking Circuits: Simulations that illustrate the control of DC motors using interlocking circuits to ensure safety and efficiency.
3.	Sensor and Timer Integration: Simulations that incorporate proximity sensors and timer circuits to demonstrate automated control of DC loads.
4.	Logic Gate Implementation: Simulations that implement basic logic gates to control DC loads, providing a foundation for understanding digital logic and circuit design.
5.	Advanced Switching and Motor Starting Techniques: Simulations that demonstrate the use of 3-way switches for multi-floor connections and the starting of 3-phase induction motors using Direct On-Line (DOL) and Automatic Star-Delta starters.
By covering a broad range of topics, the project aims to provide students with a comprehensive understanding of electrical engineering concepts and their practical applications. The simulations are designed to be modular and scalable, allowing for future expansion and the addition of new experiments.

2.	Company/Organization Overview

2.1	Company/Organization Technology area

This section provides an overview of IIT Roorkee Virtual Lab, the organization responsible for overseeing the Electric Circuit Design Lab Simulation project. It outlines the mission, goals, and technological focus of the Virtual Lab, as well as the role of the training mentor, Mr. Rajeev Kumar, in guiding the development of the project.
IIT Roorkee Virtual Lab
IIT Roorkee Virtual Lab is an innovative educational initiative aimed at enhancing engineering education through the use of virtual simulations and digital learning tools. The Virtual Lab is part of the broader effort by IIT Roorkee to integrate technology into the curriculum, providing students with access to state-of-the-art resources that complement traditional teaching methods.
Mission and Goals
The mission of IIT Roorkee Virtual Lab is to make engineering education more accessible, interactive, and effective by leveraging technology to create virtual learning environments. The Virtual Lab seeks to achieve the following goals:
1.	Enhancing Practical Learning: Provide students with hands-on experience through virtual simulations, allowing them to apply theoretical knowledge in a controlled and safe environment.
2.	Promoting Innovation and Exploration: Encourage students to experiment with different designs and configurations, fostering a culture of innovation and creativity.
3.	Supporting Remote and Flexible Learning: Ensure that educational resources are accessible online, allowing students to learn at their own pace and from any location.
4.	Improving Educational Outcomes: Enhance student understanding and retention of complex concepts through interactive and engaging learning experiences.
Technology Focus
IIT Roorkee Virtual Lab is at the forefront of educational technology, utilizing a range of digital tools and platforms to create immersive learning experiences. The Virtual Lab focuses on the development of:
•	Simulation-Based Learning Tools: Create realistic simulations that replicate the behavior of physical systems, allowing students to experiment and learn in a virtual environment.
•	E-Learning Platforms: Develop digital platforms that facilitate the delivery of educational content, including tutorials, quizzes, and interactive modules.
•	Collaborative Learning Environments: Promote collaboration and communication among students and instructors through online forums and discussion boards.
Role and Contributions
Mr. Kumar's role as a mentor involved:
•	Providing Technical Expertise: Offering insights into the technical aspects of electrical engineering and circuit design, ensuring that the simulations accurately reflect real-world systems.
•	Guiding Project Development: Assisting in the planning and execution of the project, from initial concept development to final implementation.
•	Ensuring Educational Value: Ensuring that the simulations align with educational objectives and provide meaningful learning experiences for students.
•	Fostering Innovation: Encouraging creative problem-solving and exploration, helping to identify new opportunities for enhancing the simulations.









2.2	Details about the training guide/mentor at the company/organization.

  	Training Mentor: Mr. Rajeev Kumar
Mr. Rajeev Kumar is a distinguished professor of electrical engineering at IIT Roorkee and a leading expert in the field of educational technology. As the training mentor for the Electric Circuit Design Lab Simulation project, Mr. Kumar provided invaluable guidance and support throughout the development process.






















 
3.	Technology used in Project

The Technology Used in Project section provides a detailed overview of the various technologies and tools employed in the development of the Electric Circuit Design Lab Simulation. This section highlights the role of each technology in creating a user-friendly and visually appealing simulation environment, as well as its contribution to the overall functionality and effectiveness of the project.


3.1 Frontend Development

The frontend development of the Electric Circuit Design Lab Simulation focused on creating a visually appealing and user-friendly interface that allows students to interact with the simulations effortlessly. The following technologies were employed in the frontend development:

HTML & CSS

HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) served as the foundation for building the structure and layout of the web pages. These technologies were used to:
•	Create the Structure: Define the layout and structure of the simulation interface, including the arrangement of components, buttons, and controls.
•	Style the Interface: Apply styling and formatting to enhance the visual appeal of the simulations, ensuring a cohesive and professional appearance.
•	Ensure Responsiveness: Implement responsive design principles to ensure that the simulations adapt seamlessly to different screen sizes and devices.
HTML and CSS provided the basic framework for the simulations, e	nabling the creation of a visually appealing and intuitive user interface.



Bootstrap & TailwindCSS

Bootstrap and TailwindCSS are popular CSS frameworks that were used to enhance the styling and responsiveness of the simulations. These frameworks offer a range of pre-designed components and utilities that streamline the development process and ensure a consistent design aesthetic.
•	Bootstrap: Bootstrap's grid system and pre-designed components were used to create a responsive layout that adjusts to different screen sizes. The framework's utility classes simplified the styling process, allowing for quick and efficient design adjustments.
•	TailwindCSS: TailwindCSS's utility-first approach provided greater flexibility in styling, enabling the customization of design elements to match the project's unique aesthetic. The framework's modular nature allowed for the efficient application of styles, ensuring a clean and maintainable codebase.
Together, Bootstrap and TailwindCSS contributed to the creation of a polished and responsive user interface, enhancing the overall user experience.

3.2 Backend/Logic

The backend logic of the Electric Circuit Design Lab Simulation was developed using JavaScript and jQuery, two powerful scripting languages that enable dynamic interactions and logic implementation.

JavaScript

JavaScript served as the core programming language for implementing the simulation's logic and functionality. The language was used to:
•	Handle User Interactions: Capture and process user input, enabling real-time interactions with the simulations.
•	Implement Circuit Logic: Define the behavior of circuit components and simulate the interactions between them.
•	Update the Interface: Dynamically update the simulation interface in response to user actions and changes in circuit configuration.
JavaScript's versatility and performance made it an ideal choice for implementing the complex logic required for the simulations.
jQuery

jQuery, a lightweight JavaScript library, was used to simplify and streamline the manipulation of the DOM (Document Object Model). The library provided a range of utility functions that facilitated:
•	DOM Manipulation: Efficiently select and modify elements within the simulation interface, allowing for dynamic updates and interactions.
•	Event Handling: Simplify the process of capturing and responding to user events, such as clicks and input changes.
•	Animation and Effects: Enhance the user experience with smooth animations and visual effects, making the simulations more engaging and interactive.
jQuery's simplicity and flexibility complemented JavaScript, enabling the efficient implementation of complex interactions and logic.

3.3 Visualization

The visualization of circuit components and interactions was achieved using jsPlumb, a JavaScript library designed for creating interactive and connectable elements.

jsPlumb

jsPlumb was used to create the interactive connections between circuit components, providing a visual representation of the relationships and interactions within the simulations. The library offered a range of features that facilitated:
•	Connection Creation: Define and manage connections between components, enabling users to visualize and manipulate circuit layouts.
•	Interactive Drag-and-Drop: Allow users to drag and drop components within the simulation interface, promoting exploration and experimentation.
•	Custom Styling: Customize the appearance of connections and components, ensuring a cohesive and visually appealing design.
jsPlumb's powerful visualization capabilities made it an essential tool for creating an interactive and engaging simulation experience.




3.4 User Interaction

User interaction within the simulations was enhanced using SweetAlert, a JavaScript library that provides customizable alerts and notifications.

SweetAlert

SweetAlert was used to create interactive alerts and notifications that guide users through the simulations and provide feedback on their actions. The library offered a range of features that contributed to:
•	User Guidance: Provide clear and informative alerts that guide users through the simulation process, ensuring a smooth and intuitive experience.
•	Feedback and Confirmation: Offer feedback on user actions and request confirmation for critical operations, enhancing the overall user experience.
•	Customization: Customize the appearance and behavior of alerts to match the project's design aesthetic and ensure consistency.
SweetAlert's interactive alerts enhanced the user experience, providing valuable feedback and guidance throughout the simulations.
 
4.	Technical Details of Project/Study


4.1	Architectural Overview
The architectural overview outlines the high-level design and structure of the Electric Circuit Design Lab Simulation. The project is built on a client-side architecture, leveraging web technologies to deliver a responsive and interactive user experience.
Client-Side Architecture
The simulation is designed as a single-page application (SPA), allowing users to interact with the simulations without the need for page reloads. The client-side architecture ensures that all interactions and logic are handled within the browser, providing a seamless and efficient experience.
•	Frontend: The frontend is responsible for rendering the simulation interface and handling user interactions. It is built using HTML, CSS, JavaScript, Bootstrap, and TailwindCSS, ensuring a responsive and visually appealing design.
•	Visualization: The visualization layer is implemented using jsPlumb, enabling interactive connections and dynamic updates within the simulation interface.
•	User Interaction: User interactions are enhanced with SweetAlert, providing feedback and guidance through interactive alerts and notifications.











4.2	Functional Block Diagram
The functional block diagram provides a detailed view of the main components and their interactions within the electric circuit design lab simulation. This diagram highlights the key functional blocks, including the user interface, control logic, sensors, relays, and loads. Each block is responsible for a specific aspect of the simulation, working together to create a cohesive and interactive learning experience.
The user interface block encompasses all the visual and interactive elements that users engage with. This includes buttons, switches, and circuit diagrams, which are implemented using HTML, CSS, and JavaScript. The control logic block, primarily managed by JavaScript and jQuery, handles the behavior of circuit components and the response to user inputs. It ensures that the simulation accurately reflects the intended operations of the electric circuits.
The sensor block represents various input devices, such as proximity sensors and timers, that detect and respond to environmental conditions. These sensors are crucial for experiments that involve automatic detection and control. The relay block includes the components that manage the flow of current to different loads, based on user inputs and control logic. Relays play a key role in switching and controlling electrical loads within the simulations.
The load block represents the devices being powered by the circuits, including DC and AC loads, motors, and other electrical components. The functional block diagram illustrates how these blocks interact and exchange data, providing a comprehensive overview of the simulation's workflow and operations.









4.3	Functions/Modules Details
	
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


 
5.	Applications



Educational Use: 
The Electric Circuit Design Lab Simulation has significant applications in educational settings. It can be used in classrooms and lab sessions to provide students with hands-on experience in circuit design and analysis. The interactive nature of the simulations allows students to experiment with different circuit configurations and observe the results in real-time, enhancing their understanding of electrical concepts.


Remote Learning Tool:
 	The simulation platform supports remote learning by providing an accessible and engaging learning resource that can be used outside of traditional classroom settings. Students can access the simulations from anywhere, allowing for self-paced learning and exploration of circuit design concepts.


Professional Training:
The simulations can also be used for professional development and training programs. Engineers and technicians can use the platform to refresh their knowledge, learn new techniques, and experiment with different circuit designs in a controlled environment.


Research and Development: 
Researchers and developers can use the simulation platform to test and validate new circuit designs and technologies. The ability to simulate and analyze circuit behavior in a virtual environment supports innovation and experimentation in the field of electrical engineering.


Public Awareness: 
The simulations can be used in outreach programs to increase public awareness of electrical engineering concepts and career opportunities. By providing an interactive and engaging learning tool, the platform can help foster interest in the field and encourage more students to pursue careers in engineering.
Outcome: 
The diverse applications of the Electric Circuit Design Lab Simulation highlight its potential to enhance educational outcomes, support professional development, and contribute to research and public awareness. The platform's versatility and accessibility make it a valuable resource for a wide range of users.
 
6.	Future Work


Integration with AR/VR Technologies: 
Future work on the project includes exploring the integration of augmented reality (AR) and virtual reality (VR) technologies to enhance the simulation experience. AR and VR can provide immersive and interactive environments that allow users to interact with simulations in new and engaging ways.

Expansion of Experiment Library: 
The current library of experiments can be expanded to include more complex and diverse simulations. Adding new experiments will provide users with a broader range of topics and scenarios to explore, enhancing the educational value of the platform.

Enhanced User Interface and Experience: 
Ongoing improvements to the user interface and experience will focus on making the simulations more intuitive and user-friendly. This includes refining the design, optimizing performance, and incorporating user feedback to enhance the overall usability of the platform.

Data Analytics and Feedback Mechanisms: 
Implementing data analytics and feedback mechanisms will allow for the collection and analysis of user data. This information can be used to improve the simulations, track user progress, and provide personalized feedback and recommendations.

Collaboration and Sharing Features: 
Future enhancements may include features that allow users to collaborate on experiments and share their findings with others. This could facilitate teamwork and knowledge sharing, fostering a collaborative learning environment.
	
Mobile Compatibility: 
Ensuring that the simulations are fully compatible with mobile devices will increase accessibility and usability. Mobile compatibility will allow users to interact with the simulations on smartphones and tablets, making the platform more versatile.



LMS Integration: 
Integrating the simulations with Learning Management Systems (LMS) will streamline access and administration. LMS integration will facilitate the inclusion of simulations in formal educational programs and track student progress and performance.

Outcome: 
The proposed future work will enhance the Electric Circuit Design Lab Simulation platform, expanding its capabilities and improving its functionality. By incorporating new technologies, features, and enhancements, the project will continue to provide valuable educational resources and support the advancement of electrical engineering education.
 
7.	Conclusion


The Electric Circuit Design Lab Simulation project has successfully achieved its objectives, providing an innovative and interactive tool for exploring and understanding electrical engineering concepts. The development process, guided by Mr. Rajeev kumar and supported by modern web technologies, has resulted in a robust and user-friendly simulation platform.

Impact:
The simulation platform has made a significant impact on educational methodologies, offering an accessible and engaging way for students and professionals to learn about electrical circuits. The project has demonstrated the value of interactive simulations in enhancing learning outcomes and bridging the gap between theory and practice.

Personal Learning Outcomes:
The training experience has provided valuable insights into the development of educational tools, enhancing my technical skills and understanding of simulation design. The project has also highlighted the importance of creating effective and engaging learning resources to support diverse educational needs.

Gratitude:
I am grateful to Mr. Rajeev Kumar and the IIT Roorkee Virtual Lab team for their guidance and support throughout the project. Their expertise and feedback have been instrumental in shaping the project and ensuring its success.

Future Directions:
The project’s future directions include exploring new technologies, expanding the experiment library, and enhancing user experience. These efforts will continue to improve the platform and provide valuable resources for education and professional development.









8.	References

	Darren Ashby, "Circuit Design: Know It All", Newnes, 1st Edition, 2008

	 Allan R. Hambley, "Electrical Engineering: Principles and Applications", Pearson, 7th Edition, 2017

	 Sung-Mo Kang and Yusuf Leblebici, "CMOS Digital Integrated Circuits: Analysis and Design", McGraw-Hill Education, 4th Edition, 2014

	Bob Dobkin and Jim Williams, "Analog Circuit Design: A Tutorial Guide to Applications and Solutions", Newnes, 1st Edition, 2012

	Charles K. Alexander and Matthew N.O. Sadiku, "Fundamentals of Electric Circuits", McGraw-Hill Education, 6th Edition, 2016
