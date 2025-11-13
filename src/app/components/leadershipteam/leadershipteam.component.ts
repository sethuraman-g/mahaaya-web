import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-leadershipteam',
  templateUrl: './leadershipteam.component.html',
  styleUrls: ['./leadershipteam.component.scss']
})
export class LeadershipteamComponent implements OnInit {
  leadersData: any[] = [];
  leaderExperienceList: any;
  activeLeader: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // (<any>$(".carousel")).carousel()
    this.leaderInfo();
  }

  leaderInfo() {
    this.leadersData = [
      {
        id: 1,
        leaderName: 'Siva Periasamy',
        image: '/assets/image/img/about/siva.png',
        leaderRole: 'Chief Operating Officer',
        leaderContent:
          'Siva Periasamy, the Founder and President of Numentica who believes passionately in software’s ability to change the world for the better.<br><br> Siva is a Technologist, Entrepreneur and Team Builder with 20+ years of Information Technology experience in IT strategy, Cloud infrastructure, Application Development, Quality Assurance, Project Management, Governance & Information Security.<br><br> He has expertise in designing, developing and maintaining complex, scalable, highly secure and highly available mobile apps and web products.<br><br> Has a proven track record of building large scale high volume systems and building and leading world-class engineering teams.',
      },

      {
        id: 2,
        leaderName: 'Mohan Kumar',
        image: '/assets/image/img/about/mohan.png',
        leaderRole: 'Chief Technology Officer',
        leaderContent:
          'Experienced Chief Technology Officer with a proven track record of driving technological innovation and growth. A visionary leader who has pioneered digital transformations, modernization initiatives, and data-driven strategies.<br><br>Passionate about leveraging Microsoft technologies to solve complex challenges and optimize business operations.<br><br> Co-founder at DataPlatformExperts, CTO at Aage Incorporated, and former Principal Architect at Microsoft.',
        experienceStatus: '',
        leaderExperience:
          "",
      },
      {
        id: 3,
        leaderName: 'Chandramohan',
        image: '/assets/image/img/about/Chandramohan.png',
        leaderRole: 'Director - Data & AI',
        leaderContent:
          `Chandramohan brings nearly two decades of experience designing and leading robust data and analytics platforms that help organizations unlock the full potential of their data.<br><br>
          He has led digital transformation initiatives across financial services, healthcare, and public sector industries, focusing on scalable, secure, and high-performance solutions that drive measurable business outcomes.<br><br>
          At Mahaaya, Chandramohan heads the strategy and execution of modern data architectures. His work integrates cloud technologies, governance frameworks, and advanced analytics to power enterprise-wide decision-making. He is passionate about building high-performing teams and enabling clients to achieve data maturity.<br><br>
          His recent work includes delivering data modernization programs, building unified data lakes and warehouses on Azure, enabling near real-time insights with Power BI, and guiding migrations from legacy to cloud-native platforms. He has deep expertise in data engineering, architecture, and integration, and is well-versed in emerging technologies like data fabric, AI/ML, and Microsoft Purview.<br><br>
          Chandramohan holds a bachelor’s degree in computer science and certifications including Microsoft Certified: Azure Solutions Architect Expert and Azure Data Engineer Associate. Based in Bangalore, he enjoys weekend hikes and exploring new tech with his daughter.`,
      },
      {
        id: 4,
        leaderName: 'Arun Balakrishnan',
        image: '/assets/image/img/about/arun.png',
        leaderRole: 'UI Practise Lead',
        leaderContent:
          'Arun Balakrishnan is UI Practice Lead with 12 years of experience who is passionate about building Internet Applications, Websites using JavaScript, Jquery, CSS3. He is a Certified Adobe Flash Developer. He played a key rolein big teams to complete complex projects on time. Having massive interestin Action script, Adobe Flex, Cold fusion, Rails and NodeJS, he has designed architecture and implemented the project in less than thirty days usingColdFusion.<br><br>He utilized his expertise of JavaScript, CSS skills, frameworks like Angular JS, React JS, Vue JS and created framework to be used for TV applications andfor simple data binding before Angular JS.<br><br>Developed Applications in Node JS using Express Framework, Custom Jquery Plugins and similarly developed a real time flow chart application using SOCKET.IO. He also created a chrome extension for Experian which is widely used to do routine tasks.<br><br>He has vast experience in ColdFusion with a good knowledge in maintaining ColdFusion server and developing ColdFusion web applications. He is notonly experienced in Financial, Media, Telecom domain but also experienced in Ruby on Rails, Node.js, HTML, JQuery, CSS3 and Velocity templates. Experienced in JavaScript optimization, resolving cross browser compatibility issues, in-depth knowledge of Regular Expressions, Native Hybrids Apps using Apache Cordova and Ionic Framework.<br><br>Obtaining good knowledge of Flex, he gained experience in using FlexBuilder IDE, MXML, Action Script, Spark Framework and in Adobe Flash Programming. Managed Production Apache Tomcat servers which hosted Coldfusion. He is proficient in Ajax and have optimized applications using Ajax and JavaScript best practices.',
        experienceStatus: '',
        leaderExperience:
          '',
      },

      {
        id: 5,
        leaderName: 'Siddhartha Roy Chowdhury',
        image: '/assets/image/img/about/SiddharthaRoyChowdhury.png',
        leaderRole: 'Director CRM Consulting',
        leaderContent:
          'Siddhartha is a committed and personable software architect/technologist with a successful track record for realizing business vision through enterprise/application architectures that are tightly aligned with budget and time scales. By combining his detailed technical knowledge with a clear grasp of the wider commercial issues Siddhartha is able to identify and implement practical solutions to real business problems. Siddhartha is a technical architect specializing in Dynamics 365 and the PowerPlatform.',
        experienceStatus: 'Relevant Experience',
        leaderExperienceList: [
          'In-depth expertise in implementing Dynamics 365 CE and PowerPlatfform projects across different industry domains. Lead consulting resource on multiple enterprise level Microsoft CRM implementation projects.',
          'Certified MS Solutions Architect, with a deep understanding of MS technology stack and Azure cloud platforms and services. Skilled in API design & management, security, application development, cloud infrastructure, strategic long-term planning, and developing technology strategies in B2C & B2B environments.',
          'Proven architect and mentor with expertise in communicating across organizational levels and with cross-functional teams.',
          'Worked directly with client technical resources to determine the optimal solution architecture, perform software installation and configure the solution per the requirements/design documentation. Able to develop client relationships and build trust through performance and taking ownership of critical work areas.',
        ],
      },

      {
        id: 6,
        leaderName: 'Vinu Jacob',
        image: '/assets/image/img/about/VinuJacob.jpeg',
        leaderRole: 'Director – Solutions & Consulting',
        leaderContent:
          `Vinu Jacob is a seasoned Travel & Aviation Tech Strategist with over 22 years of global experience driving digital transformation, business growth, and emerging tech adoption across North America and the MEA region.<br><br>
          At Mahaaya, Vinu leads the Solutions & Consulting practice, helping enterprises embrace automation, AI-driven innovation, and disruptive technologies to solve complex business challenges and drive sustainable growth. His approach is rooted in aligning technology with business strategy to optimize revenue, efficiency, and customer experience.<br><br>
          Previously, Vinu headed the global Travel & Aviation Technology practice at Information Dynamics, where he built a client base of over 500 organizations and led strategic partnerships with global players such as Emirates, Qatar Airways, AMEX, and BCD Travel. He also played a pivotal role in setting up regional offices, launching new business applications, and incubating AI-based solutions long before their mainstream adoption.<br><br>
          Vinu is also a startup mentor, having supported a consortium of emerging tech startups in building collaborative frameworks for monetization and delivery. His expertise spans aviation, OTA platforms, SaaS, GTM strategy, strategic alliances, and enterprise consulting.<br><br>
          A mathematics graduate, Vinu is based in Canada and holds permanent residency there. Outside work, he enjoys off-roading, travel, motorbiking, and staying active on the basketball court.`,
      },

      {
        id: 7,
        leaderName: 'Shobana Karthik',
        image: '/assets/image/img/about/shobana.png',
        leaderRole: 'Talent Acquisition Director',
        leaderContent:
          'Shobana Karthik has a Systems engineering background with a decade of experience in the telecommunications industry. Relationship builder with hiring managers and business professionals to ensure both management and candidates have a positive recruitment/staffing experience. Her strengths are in communication and building trusted relationships with candidates and hiring managers in order to attract and hire the top talent needed for success in a role. She also is a homeschool mom and an educator who has vast experience in training and teaching young curious minds. <br><br> Specialties: relationship building, people, account management, recruiting, recruiter management.',
      },
      {
        id: 8,
        leaderName: 'Nicolette Emory',
        image: '/assets/image/img/about/niccolate.png',
        leaderRole: 'BI Practice Lead',
        leaderContent:
          'With over a decade in the analytics arena, Nicolette has honed her expertise in everything from developing data visualizations (ETL, Data Models, Dashboards) to spearheading data strategy and execution (establishing a BI Center of Excellence and orchestrating enterprise-wide training initiatives). Her portfolio boasts collaborations with industry giants like Sony, Experian, Toyota, and most recently, Deloitte. Leveraging her consultative style and expansive experience, Nicolette can elevate the success and ROI of Analytics Tools.',
      },
      {
        id: 9,
        leaderName: 'Laura P Zanella',
        image: '/assets/image/img/about/laura.png',
        leaderRole: 'Power Platform and D365 Lead',
        leaderContent:
          'Possessing a deep expertise in front-end development, Laura exhibits a distinctive knack for fusing design with technology, most notably in her contributions to Power Pages. She has successfully directed an array of Dynamics CRM/Power Platform endeavors across different sectors and thrives in team collaborations, from UX to QA. Laura"s unwavering commitment to excellence, coupled with her meticulous attention to process documentation, has been instrumental in steering our company on a path of consistent growth and success.',
      },
      {
        id: 10,
        leaderName: 'Suresh Tata',
        image: '/assets/image/img/about/suresh.png',
        leaderRole: 'Vice President - Digital Transformation',
        leaderContent:
          `Suresh Tata is Vice President of Global Delivery at Mahaaya, where he leads large-scale Digital Transformation initiatives across Cloud, Data, and AI domains. With over 25 years of experience in the IT industry, he has consistently delivered scalable modern solutions for Fortune 1000 clients across North America, accelerating their journey toward modern architectures and intelligent automation.<br><br>
            Suresh brings a strong foundation in program management, solution architecture, and enterprise consulting. His work has driven measurable impact in Financial Services and Higher Education through differentiated, compliant, and growth-focused digital solutions.<br><br>He is passionate about shaping resilient digital businesses and fostering innovation that improves everyday life at scale.`,
      },
      {
        id: 11,
        leaderName: 'Royce Duong',
        image: '/assets/image/img/about/royce.png',
        leaderRole: 'Account Technology Strategist',
        leaderContent:
          `With experience spanning Wall Street, global enterprises, and high-growth startups, Royce Duong helps organizations gain a competitive edge through smarter data and AI strategies. From managing enterprise software portfolios at Danaher to building AI-driven solutions at Aparavi, he brings a deep understanding of the incentives, risks, and opportunities that shape enterprise technology.`,
      },
      {
        id: 12,
        leaderName: 'Reena Dejgambhir',
        image: '/assets/image/img/about/reena.png',
        leaderRole: 'Business Development Manager',
        leaderContent:
          `Reena Dejgambhir is the Business Development Manager at Mahaaya, where she leads strategic growth, client engagement, and partner initiatives across Data and AI services. With over 15 years of experience spanning business development, education, and operations, she brings a strong focus on relationship-building, process alignment, and execution.<br><br>
          Reena plays an integral role in supporting business strategy and partnerships, ensuring coordination between teams and a smooth client experience. She is certified in several business and process improvement frameworks and is committed to helping organizations realize value through effective collaboration and structured delivery.`,
      },
    ];
  }

  getInfo(data: number) {
    const activeId = this.leadersData?.filter((x: any) => x.id == data);
    this.activeLeader = activeId;
  }

  changeId(data: number, direction: string) {
    if (direction == 'previous') {
      data--;
      this.getInfo(data);
    } else if (direction == 'next') {
      data++;
      this.getInfo(data);
    }
  }


}
