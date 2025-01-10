/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Akhil's Portfolio",
  description:
    "A free-spirited and passionate software engineer who thrives on challenges, loves dancing, and takes joy in creating impactful products.",
  og: {
    title: "Akhil Bojedlas Portfolio",
    type: "website",
    url: "http://akhilbojedla.com/",
  },
};

//Home Page
const greeting = {
  title: "Akhil Bojedla",
  logo_name: "Akhilling",
  nickname: "akhilling_life",
  subTitle:
    "A free-spirited and passionate software engineer who thrives on challenges, loves dancing, and takes joy in creating impactful products.",
  resumeLink:
    "https://drive.google.com/file/d/1fu-3JHlUpOApSDqQcAmBg-6wK3uOwoZK/view?usp=sharing",
  portfolio_repository: "https://github.com/akhilbojedla/masterPortfolio",
  githubProfile: "https://github.com/akhilbojedla",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/akhilbojedla",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/akhilbojedla/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:bojedla.akhil@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/AkhilBojedla",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/try__love_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Design and Build Resilient Backend Systems: Proficient in creating highly scalable and fault-tolerant backend systems using Java, Kotlin, Golang, Python, and Node.js",
        "⚡ Simplifying Complex Technical Challenges: Skilled in designing simple, scalable solutions for intricate technical problems",
        "⚡ Mastery of Backend Frameworks: Expertise in leveraging frameworks like Spring Boot, Express, Flask, and Ktor to develop robust applications",
        "⚡ Database System Expertise: Proficient in working with database systems such as PostgreSQL, MySQL, DynamoDB, and Cassandra for efficient data management",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "catppuccin:kotlin",
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "devicon:spring-wordmark",
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "logos:kafka",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "devicon:docker-wordmark",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python",
        },
        {
          skillName: "Postgres",
          fontAwesomeClassname: "devicon-plain:postgresql-wordmark",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "devicon:angularjs",
        },
      ],
    },
    {
      title: "Leading Tech Teams",
      fileName: "TeamsImg",
      skills: [
        "⚡ Technical Expertise: Deep understanding of programming, system architecture, and technology trends to guide the team",
        "⚡ Team Leadership: Ability to mentor developers, resolve conflicts, and ensure smooth collaboration",
        "⚡ Project Management: Skilled in prioritizing tasks, meeting deadlines, and delivering high-quality solutions",
        "⚡ Problem Solving: Quick decision-making and creative thinking to tackle technical and organizational challenges",
      ],
      softwareSkills: [
        /* 
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
 */
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/bytecodehq/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/akhil_bojedla",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/giddy_joy_40",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/akhilbojedla",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Amity School of Engineering & Technology",
      subtitle:
        "Bachelor of Technology (B.Tech.) in Electronics and Communications Engineering",
      logo_path: "amity_university.png",
      alt_name: "Amity",
      duration: "2011 - 2015",
      descriptions: [
        "⚡ Bachelors degree in Electronics and communications Engineering where I learned basis of Electronics, Micro controllers, Programming etc",
        "⚡ Apart from this, I have done courses on Java, C, C++ and Web development",
      ],
      website_link: "https://www.amity.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Technical Team Communication",
      subtitle: "- University of Oxford",
      logo_path: "oxford_logo.jpeg",
      certificate_link:
        "https://certificates.conted.ox.ac.uk/0e1fc7a7-80a1-45a8-8101-2e92b03ca861#acc.TtYmWqwu",
      alt_name: "Oxford University",
      color_code: "#061A50",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Experienced Software Engineer with nearly a decade in IT, starting as a QA Engineer in 2016 and transitioning to full-stack development. Now a Lead Engineer, I drive impactful solutions and foster collaborative, innovative teams.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Lead Software Engineer",
          company: "N26",
          company_url: "https://n26.com/en-eu",
          logo_path: "n26_logo.webp",
          duration: "Nov 2024 - Present",
          location: "Berlin, Germany",
          description:
            "Redesigned the app’s Home screen to a modular architecture, boosting user engagement with N26’s offerings; built a transactions presentation platform to streamline payment services integration and display transactions seamlessly; developed an internal tool to automate transaction test data generation, significantly improving developer productivity; authored multiple RFCs to drive innovation and align stakeholders; and honed leadership skills by managing development teams and collaborating effectively with stakeholders.",
          color: "#000000",
        },
        {
          title: "Senior Software Engineer",
          company: "N26",
          company_url: "https://n26.com/en-eu",
          logo_path: "n26_logo.webp",
          duration: "Sep 2020 - Nov 2024",
          location: "Berlin, Germany",
          description: "",
          color: "#000000",
        },
        {
          title: "Software Engineer",
          company: "N26",
          company_url: "https://n26.com/en-eu",
          logo_path: "n26_logo.webp",
          duration: "Mar 2019 - Sep 2020",
          location: "Berlin, Germany",
          description: "",
          color: "#000000",
        },
        {
          title: "Full Stack Developer",
          company: "OneDirect - CX Management Firm",
          company_url: "https://www.onedirect.in/",
          logo_path: "onedirect.png",
          duration: "May 2017 - Jan 2019",
          location: "Bengaluru, India",
          description:
            "As a Full Stack Engineer for a CRM-focused startup, I was responsible for designing and developing end-to-end features, from scalable backend systems to intuitive frontend interfaces. I collaborated closely with cross-functional teams to deliver user-centric solutions, optimize system performance, and ensure seamless integration of core functionalities.",
          color: "#0879bf",
        },
        {
          title: "Quality Assurance Engineer",
          company: "Misys",
          company_url: "https://www.finastra.com/",
          logo_path: "misys_logo.jpeg",
          duration: "Jan 2016 - May 2017",
          location: "Bengaluru, India",
          description:
            "As an Associate Quality Engineer, I designed and developed various testing tools to enhance the quality assurance process and created a platform to integrate all Misys products seamlessly. Additionally, I developed a custom testing framework for Internet banking applications on mobile devices by setting up a local device farm and managing device sharing to execute automated test suites efficiently.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Advanced Telecom Technologies",
          company: "BSNL",
          company_url: "https://bsnl.co.in/",
          logo_path: "bsnl_logo.webp",
          duration: "May 2022 - Aug 2022",
          location: "Vijayawada, India",
          description:
            "My responsibilities included monitoring Phone lines in couple of Zones, report any inconsistencies, and assit engineers in Fixing issues.",
          color: "#000000",
        },
      ],
    },
    /* {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    }, */
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "error-handling-with-spring-webflux",
      name: "Exception handling — Spring WebFlux",
      createdAt: "2019-10-10T00:00:00Z",
      description:
        "A short and concise article about handling erros in Spring Webflux",
      url:
        "https://medium.com/@akhil.bojedla/exception-handling-spring-webflux-b11647d8608",
    },
    {
      id: "kafka-consumer-control",
      name: "Start, Stop, Pause and Resume Spring Kafka consumer at runtime",
      createdAt: "2022-10-23T00:00:00Z",
      description:
        "Article describing how one can control Kafka consumer during runtime",
      url:
        "https://medium.com/@akhil.bojedla/start-stop-pause-and-resume-spring-kafka-consumer-at-runtime-45b44b9be44b",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "akhil_bojedla.jpeg",
    description:
      "Feel free to reach out through any of the channels below! I’m your go-to person for backend development, Kafka, Postgres, tech leadership, and basically anything tech—except maybe fixing your Wi-Fi (but hey, I can try!).",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://akhilbojedla.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Berlin, Germany",
    locality: "Berlin",
    country: "Germany",
    region: "Berlin",
    postalCode: "12043",
    streetAddress: "Berlin",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/TbcmRR3V4wRJqfRe8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
