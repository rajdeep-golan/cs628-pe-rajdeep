import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>RAJDEEP SINGH GOLAN</h1>
        <p>rajdeepgolan@gmail.com 8972143147 | rsgolan | rajdeep-golan</p>
        <p>SOFTWARE DEVELOPMENT ENGINEER</p>
      </header>

      <section className="section summary">
        <h2>SUMMARY</h2>
        <p>With 4+ years of software developer as a profession, I am a tech enthusiast with a charismatic flair for new technology, who would not let his foot dawn when it comes to innovating ways of sustaining and thriving with the advanced technological market.</p>
        <p>A motivated, self-reliant and intellectual strive constantly adds up to interpersonal skills. Having complex problem solving skills.</p>
        <p>I have a proven track record of managing large scale software engineering projects to support cloud deployments and integrations</p>
      </section>

      <section className="section employment">
        <h2>EMPLOYMENT</h2>
        {/* TCG LivingSpaces */}
        <h3>TCG LivingSpaces, Senior Software Engineer, Mumbai</h3>
        <p>May 2023 - Present</p> {/* Inferred as current role based on other dates */}
        <ul>
          <li>Pioneered the frontend development efforts using Flutter, crafting seamless and intuitive user interfaces.</li>
          <li>Implemented cutting-edge features resulting in a 150% surge in user retention, solidifying gigaProfile's position as a leader in the industry.</li>
          <li>Spearheaded the development of APIs using Nest.JS for gigaProfile, a comprehensive platform revolutionising a user profile.</li>
          <li>Built the entire backend infrastructure from scratch, ensuring robustness and scalability.</li>
          <li>Achieved a staggering increase of 200% in API response time optimization, leading to enhanced user experience and engagement.</li>
          <li>Served as a pivotal figure in the team, assuming the dual role of Team Lead and Scrum Master.</li>
          <li>Guided the agile development process with precision, facilitating efficient collaboration and ensuring timely project deliveries.</li>
          <li>Led a team of 8 developers, achieving a 30% increase in productivity through streamlined workflows and effective task delegation.</li>
          <li>Championed a test-driven development approach, enforcing rigorous code review practices and maintaining a code coverage of 95%.</li>
          <li>This meticulous approach resulted in a 50% reduction in post-release bugs, bolstering gigaProfile's reputation for reliability and stability.</li>
          <li>Implemented agile methodologies to drive continuous improvement, resulting in a 40% reduction in time-to-market for new features.</li>
          <li>Actively contributed to the development of innovative solutions, fostering a culture of creativity and ingenuity within the team.</li>
        </ul>

        {/* Amazon */}
        <h3>Amazon, Software Development Engineer, Bengaluri</h3>
        <p>May 2022 - May 2023</p>
        <ul>
          <li>Spearheaded on developing the system software and applications for Amazon's FireTV.</li>
          <li>Introduced a new feature Hotel Mode in the FireTV which increased the customer acquisition by 8%.</li>
          <li>Designed the algorithm for shortcut TV input mapping and used optimum data structures and implemented in Java (Android) to build the system for long term use which could be reused for any country, being an integral part for the release of new device in Japan.</li>
          <li>Created the algorithm for MultiRoomMusic with latency &lt; 10ms to integrate FireTV with Alexa devices.</li>
          <li>Enhanced the OutOfBox experience for the first time users, like parental controls which was implemented in other European devices, decreasing the wait time.</li>
          <li>Navigated the team as an IC and helped resolve bugs critical severity on-call</li>
        </ul>

        {/* Just Bike Services */}
        <h3>Just Bike Services, Software Developer, Kolkata</h3>
        <p>July 2020 - Apr. 2022</p>
        <ul>
          <li>Built APIs on Spring Boot MVC and Java Structs, NET and various micro services like cart, payment, discovery service binding data with MySQL.</li>
          <li>Created the software for android & iOS using Flutter which accepts booking, payment gateway, credit sales and the manages the back office work for Self Riding Bike Rental Service.</li>
          <li>Serving more than 100k customers with a DAU of 300+.</li>
          <li>Took a lead role in the detailed design of the transformed Payments ecosystem from a technology, process, integration and data design perspective</li>
          <li>Built Offline Search Engine for file system which enhances discoverability, a tool which can be installed on any device to fetch the files even in terabytes data space within a couple of seconds increasing the overall performance of the software by 25% using Angular.</li>
          <li>Developed a cross browser extension for posts, meetings to increase internal employee relations. Technology used: Python, VueJS, ElasticSearch.</li>
          <li>inculcated many innovative features thus propelling the acquisition of 50% more users hence enhancing sales by 2600K in 7-month timeline.</li>
          <li>Enhanced existing feature, thus increased the user retention rate by 40%.</li>
          <li>Fixed bugs for the live project in Support Phase involving the Message Protocols and Integration.</li>
        </ul>
      </section>

      <section className="section internships">
        <h2>INTERNSHIPS</h2>
        {/* GeeksforGeeks */}
        <h3>GeeksforGeeks, Professur DSA, Bangalore</h3>
        <ul>
          <li>Developed and delivered engaging lectures, tutorials, and practice sessions, catering to the needs of both novice learners and advanced practitioners.</li>
        </ul>

        {/* Nomura RI Fintech */}
        <h3>Nomura RI Fintech, Software Development Intern</h3>
        <p>Doc 2019 Apr. 2020</p>
        <p>Kolkata</p>
        <ul>
          <li>Worked on Spring Boot MVC framework and micro services and MySQL for building various APIs for Capital Market post trade software and built various JUnit test-coses for the test automation.</li>
        </ul>

        {/* TATA Steel */}
        <h3>TATA Steel, Software Development Intern</h3>
        <p>May 2018 July 2015</p> {/* Note: Review dates here as they appear reverse chronological */}
        <ul>
          <li>Successfully built the tracking system for the safe transfer of Long Metal Products from one hub to other.</li>
          <li>The vehicles were monitored by handheld devices and phone calls, which was replaced by the desktop application.</li>
          <li>Technologies used - VB.net, ASPX.net and MSSQL.</li>
        </ul>

        {/* CampusHaat */}
        <h3>CampusHaat - IIT Kanpur, Mobile Development Intern</h3>
        <p>May 2019 July 2019</p>
        <ul>
          <li>Enhanced the existing Ul of the Campus Haat app using neumorphism.</li>
          <li>Used DART for their new project on Flutter which is a platform for Alumni and Students to interact and bring the most from each other.</li>
        </ul>
      </section>

      <section className="section projects">
        <h2>PROJECTS</h2>
        {/* Touristii */}
        <h3>Touristii <small>(Jan. 2022)</small></h3>
        <p>Designed and Implemented an algorithm to find the nearest guide in your proximity, Deployed in a Mobile (Android - JAVA & IOS-Swift | application, it serves as a complete travel manager with APIs created in Spring Boot and MongoDB.</p>

        {/* 360° Virtual Tour */}
        <h3>360° Virtual Tour of college <small>(Sept. 2019)</small></h3>
        <p>Mimicked real world (Sikkim Manipal Institute of Technology) by computer generated environment and engaged all the senses of people using Virtual Reality using Python.</p>

        {/* Maalik */}
        <h3>Maalik <small>(Apr. 2019)</small></h3>
        <p>A B2C2B model complete manager for any business profile allowing customers to call for their necessities and the business owners to manage their orders and inventory.</p>

        {/* FarmBid */}
        <h3>FarmBid <small>(Feb. 2018)</small></h3>
        <p>Designed and implemented an interface for Merchants to bid on farmers' crops so that farmers profit more & crops don't go waste for iOS and Android.</p>
      </section>

      <section className="section education">
        <h2>EDUCATION</h2>
        <h3>Sikkim Manipal Institute of Technology</h3>
        <p>B.Tech Computer Science</p>
        <p>CGPA: 9.2</p>
        <p>2016-2020</p>
        <h3>Loyola School</h3>
        <p>10th: 94%, 12th: 90%</p>
        <p>2002-2015</p>
      </section>

      <section className="section skills">
        <h2>SKILLS</h2>
        <ul>
          <li>FLUTTER, JAVA, .NET, ANGULAR, GIT, KOTLIN, SPRING MVC, NESTJS, KUBERNETES, MYSQL, SPRING BOOT, JAVASCRIPT, DSA, UNITY3D, ML, AI, GERRIT, POSTMAN, MONGODB, ANDROID, IOS</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;