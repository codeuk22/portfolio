import cyber from "./images/cybernews.png";
import mahaveer from "./images/mahaveer.png";
import crew from "./images/crewrental.png"
import universal from "./images/universal.png"
import snappy from "./images/snappy.png";
import codex from "./images/codex.png";
import pixis from "./images/pixis.png"
import weather from "./images/weather.png";
import nike from "./images/nike.png";
import simon from "./images/simon.png";
import alexa from "./images/alexa.png";
import meme from "./images/memes.jpg"

export const Bio = {
  name: "Rohit Kumar",
  roles: [
    "Full Stack Developer @Relinns Technologies",
  ],
  description:
    "I am a full-stack developer with over 2 years of experience at Relinns Technologies, where I played a key role in developing cutting-edge websites and software solutions. In my role, I was responsible for both the admin panel and advisor panel of the website, and I also managed AWS server deployments. Additionally, I gained experience as a React Intern at IMMWIT Pvt Ltd. My skillset includes proficiency in React, React Native, Node.js, and MongoDB",
  github: "https://github.com/codeuk22",
  resume:
    "https://drive.google.com/file/d/1WEMckTvJXr9gRjQjionw8bDDNlVSDkqz/view?usp=sharing",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "React Native",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      // {
      //   name: "Next Js",
      //   image:
      //     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      // },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },

    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },

      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      // {
      //   name: "Postgresql",
      //   image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      // },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },

    ],
  },
  {
    title: "Cloud Services",
    skills: [
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      {
        name: "AWS",
        image: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102017/logo_0.png?17TK91b1B6OvV2MFrCLfukw1c8oEaNr6&itok=vsanFiUj",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Vercel",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAAD09PT6+voEBAT5+fkICAgNDQ2/v7/w8PDz8/Pt7e0QEBB3d3fk5OQoKCjS0tKcnJzd3d1DQ0NfX19JSUmlpaWvr6+AgIBZWVmDg4NPT0/FxcVoaGgkJCQdHR25ubk8PDwxMTEz/HPtAAAEAUlEQVR4nO3bDVOjMBAGYJZNQj+lxdrTau/U//8jbxNEsFUKNh2SzPt4d9Ob0Zu8F2AJYbMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsb2l2bmqQdyMxKN3Z/JarKlG1FLtJeE89m544qqlCMy6yPtcp1uRJ29ENFs6mHc0vyeFD0sph7GDe3JKEPbqYdxE1IodLZckZGv1VI+p3cuavm9JmXRWj7nUw/IN3urVhHJMWoU2YqR3p2NBNrJhbSQL6Ld1KO5Bc5mJOegPUqNrRjJTWHGUila9/P0EmbbTkBDf6Yejn93pRT7RqHKu6kH5N3aXkc/51DR49QD8smW90pmsJ1D+3mT0jpRkjyR6s6hJHxKKKEEmdmAnTk0cmczq290UsBa31PnGHUZZY2hk7mvYakUkkipbj75yzaVgJm++3syg/XV5t9dMhEfqTDnCRUdph6YL5uzdHXZN7ZiJOG5ewp2I9Lz1EPzQM601++n0JE1RuwVQ2eLt56ED/PYy75UvH1PQKJ99FWfZU3Rp1xGPIf10A/flMJWvcaI+N6GbaU4L4WdhLZi6FjvwbU9w36qFA1j1xg60nPR7aXZR099AWXB8ZLFOod23CWZ3oRqpeg92stpnvO2J1xrG+sDcJ0t+ytFI9o1Bl+oFK1o1xg/rClOKbWKb43BH0+fikFzaOw+RmxXGzve1/5i35nEeuc7qsuN2zsrL9TC9ihVVGaR1UT77tNe5mbYHNr9tr19UWPqYY+R88LuhQ6aQ7e3T4vobr/Xg6avFd0+xmY1MiFVUw95HD4OLPaNgo5xHaWvFxZN5wlNPO9KuXdIy+5u4UAlx1IxOBtRKRp2v20/9ciHW7r9s1EJ3ffP43hio+3Tp7GnYf0Dj7EcppW7Exs5h+4HqihePc15N3L6Wk9RJJRK8c1e2qB5jOTt2vxt/En4kdDQWwx339vfBpSSUcTwdm3+y3R1RKI87Mtpzjx2TXHqwEE/0OChT596bIKeRNtPca1j0LsYejZy0XTOuH2MELmFga0UVyZU9J6H2cHnhrT9xaLpNKHrxwgwoNtLmxdDH5H2JlT2yWl4Ee3/+uHCXtqwhIYOAeZzfWnVleHqhIWcikF28LH2UCkaQXbw1Z13vgS5xnCdd34E2sG3H7iXNiRhaB18Tedd4SkghdfB99l55ylgcB18beedL8F18LnOu7HPgPsE18HnOu/UacPBFYLr4PvaeedLUB18w959GieoDr4vnXe+BNXBt/Z5HW2YgHa+r3/69JNQ3pXSi3m+yH1z/+jU0W6KA3oTjG/ytg8HdEtzo8rMAVV8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz/4DvI0hODn6aTMAAAAASUVORK5CYII=",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },


      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      },
      {
        name: "Figma",
        image:
          "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://ik.imagekit.io/ats/icons/logo.png",
    role: "Fullstack Web Developer ",
    company: "Relinns Technologies Pvt. Ltd.",
    companyLink: "https://relinns.com",
    date: "Jan 2024 - Present",
    desc:
      " 🔯 Developed (2) admin and client panels , Advertisers can publish links (160+live) and marketing content , 🔯 Node.js Managing backend functionality 30% load decrease MongoDB database NoSQL for data management response time under 2 seconds 🔯 Deployment on AWS EC2 40% for faster , scalable performance via CI/CD pileline",
    skills: [
      " User Experience UX",
      "AWS",
      "EC2",
      "React Js",
      "Nginx",
      "JavaScript",
      "Node Js",
    ],
  },
  {
    id: 1,
    img: "https://play-lh.googleusercontent.com/kZ4FIJUT3xUYWwJBJFzSgBxwSSzbF6xF0X0mASK38f3TOyuhDkMscGFkNgw-Fn-mQeY",
    role: "DevOps & Fullstack Web Developer ",
    company: "Affworld Technologies Pvt. Ltd.",
    companyLink: "https://affworld.in",
    date: "Aug 2023 - Dec 2023",
    desc:
      " 🔯 Developed (2) admin and client panels , Advertisers can publish links (160+live) and marketing content , 🔯 Node.js Managing backend functionality 30% load decrease MongoDB database NoSQL for data management response time under 2 seconds 🔯 Deployment on AWS EC2 40% for faster , scalable performance via CI/CD pileline",
    skills: [
      " User Experience UX",
      "AWS",
      "EC2",
      "React Js",
      "Nginx",
      "JavaScript",
      "Node Js",
    ],
  },
  {
    id: 2,
    img: "https://play-lh.googleusercontent.com/kZ4FIJUT3xUYWwJBJFzSgBxwSSzbF6xF0X0mASK38f3TOyuhDkMscGFkNgw-Fn-mQeY",
    role: "Frontend React Intern",
    company: "Affworld Technologies Pvt. Ltd.",
    date: "August 2022 - July 2023",
    desc: " 🔯 Working under senior software developers add features like notification, email marketing and frontend responsiveness to mobile version using tailwind css and material UI",
    skills: [
      "ReactJS",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
    ]
  },
  {
    id: 4,
    img: "https://media.licdn.com/dms/image/C560BAQHmEdZu7foVRw/company-logo_200_200/0/1519876731644?e=2147483647&v=beta&t=mRw0OTbqcISn159X6uqH3PPdZFfiKM4FKLfB-TGKVIs",
    role: "Summer Intern | Certificate",
    company: "IMMWIT Pvt. Ltd.",
    date: "June 2022 - August 2022",
    desc: " 🔯 Simplified login and registration with Google Authentication, reducing registration time to 3 seconds (60% decrease) 🔯 Enhanced website speed by 20% through cart feature implementation using Context API hooks in an e-commerce project  🔯 Ensured site responsiveness across devices using (2) Bootstrap and Chakra UI librar",
    skills: [
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "AWS",
      "MongoDB",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/ta/6/68/PTU_logo.jpg",
    school: "IK Gujral Punjab Technical University Kapurthala, Punjab",
    date: "Oct 2020 - July 2024",
    grade: "8.18 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at IK Gujral Punjab Technical University. I have completed 7 semesters and have a CGPA of 8.18. I have taken courses in Data Structures, Algorithms,Computer Networks Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at PTU Main Campus, where I am learning and working on exciting projects with a team of talented developers.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://upsharidwar.com/images/logo.png",
    school: "Udaishwar Public School",
    date: "Apr 2019 - July 2020",
    grade: "89.80%",
    desc: "I completed my class 12 high school education at Udaishwar Public School, where I studied Science with Computer Science.",
    degree: "CBSE(XII), Science with Maths",
  },
  {
    id: 2,
    img: "https://upsharidwar.com/images/logo.png",
    school: "Udaishwar Public School",
    date: "Apr 2013 - Apr 2019",
    grade: "9 CGPA",
    desc: "I completed my class 10 education at Udaishwar Public School, where I studied Science with Computer Application.",
    degree: "CBSE(X), Science",
  },
];

export const projects = [

  {
    id: 10,
    title: "Pixis-Ai",
    date: "Jun 2023 - Jul 2023",
    description:
      "PIXIS AI is an image generation app powered by the DALL-E OpenAI API, producing high-quality images with over 90% accuracy. It delivers stunningly accurate and impressive performance consistently.😉.",
    image: pixis,
    tags: ["React Native", "JavaScript", "Axios", "Dall-E", "Node"],
    category: "Web app",
    github: "https://github.com/laxmikant007/Pixis",
    webapp: "https://pixis-ai-01a6.onrender.com",
    member: [
      {
        name: "Rohit Kumar",
        img: "https://static-assets-v2.s3.us-east-2.amazonaws.com/uploads/1740827845311_WhatsApp%20Image%202025-02-18%20at%2010.26.15%20AM.jpeg",
        linkedin: "https://linkedin.com/in/rohit-kumar-1328a8203/",
        github: "https://github.com/codeuk22",
      }
    ],

  },
  {
    id: 90,
    title: "Bharat Mall",
    date: "Aug 2023 - Sept 2023",
    description:
      " 🔯 Strengthened security with JWT auth implementation; cutting unauthorized access by 30% 🔯Streamlined admin panel; reducing workload by 20 %.🔯Increased transactions speed by 25% through Braintree and Razorpay integration",
    image: mahaveer,
    tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Razorpay",
      "Braintree",
      "JWT Token",
      "Google Auth",
      "Context-API",
    ],
    category: "web app",
    github: "https://github.com/codeuk22/Rental-Ecommerce",
    webapp: "https://vall-mart.vercel.app/",
    member: [
      {
        name: "Laxmiaknt Saraswat",
        img: "https://static-assets-v2.s3.us-east-2.amazonaws.com/uploads/1740827845311_WhatsApp%20Image%202025-02-18%20at%2010.26.15%20AM.jpeg",
        linkedin: "https://linkedin.com/in/rohit-kumar-1328a8203/",
        github: "https://github.com/codeuk22",
      }
    ],
  },
  {
    id: 2,
    title: "Crew-Rental",
    date: "Jan 2023 - Mar 2023",
    description:
      "Crew-Rental Store, where we make it 40% easy and affordable to get the help you need for your projects! We offer a variety of services 🏢, including providing skilled labours, contractors, and engineers, with Ai chat bots and 3D house 🏠 model generation.",
    image: crew,
    tags: ["Python", "Keras", "OpenAI", "Dall-E", "Regression", "React", "Nodejs", "Tensorflow"],
    category: "machine learning",
    github: "https://github.com/anshu0202/Rental-Rack",
    webapp: "https://crewrental.co/",
    member: [
      {
        name: "Rohit Kumar",
        img: "https://static-assets-v2.s3.us-east-2.amazonaws.com/uploads/1740827845311_WhatsApp%20Image%202025-02-18%20at%2010.26.15%20AM.jpeg",
        linkedin: "https://linkedin.com/in/rohit-kumar-1328a8203/",
        github: "https://github.com/codeuk22",
      }
    ],
  },
  {
    id: 9,
    title: "Cyber-News",
    date: "Jun 2023 - Jul 2023",
    description:
      "👨‍💻Cyber News is the latest Website where you can find interesting news from all over the world!! Hope you enjoy it!😎",
    image: cyber,
    // "https://drive.google.com/u/0/uc?id=1GYN32qwXyuUYwsvItq6gcB7gQINaIK45&export=download",
    tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",

    ],
    category: "web app",
    github: "https://github.com/laxmikant007/News-Tech",
    webapp: "https://laxmikant007.github.io/News-Tech",
    member: [
      {
        name: "Rohit Kumar",
        img: "https://static-assets-v2.s3.us-east-2.amazonaws.com/uploads/1740827845311_WhatsApp%20Image%202025-02-18%20at%2010.26.15%20AM.jpeg",
        linkedin: "https://linkedin.com/in/rohit-kumar-1328a8203/",
        github: "https://github.com/codeuk22",
      }
    ],
  },
  // {
  //   id: 1,
  //   title: "Snappy Chat App",
  //   date: "Oct 2022 - Nove 2022",
  //   description:
  //     "Snappy is a chat application makes it easy to communicate with people anywhere in the world by sending and receiving messages in real time. By using React for frontend, MongoDB as database and socket.io 😉.",
  //   image: snappy,
  //   tags: [
  //     "React Js",
  //     "MongoDb",
  //     "Node Js",
  //     "Express Js",
  //     "Redux",
  //   ],
  //   category: "web app",
  //   github: "https://github.com/laxmikant007/Snappy-Front",
  //   webapp: "https://snappy-7nr7.onrender.com",
  //   member: [
  //     {
  //       name: "Laxmiaknt Saraswat",
  //       img: "https://avatars.githubusercontent.com/u/74814381?v=4",
  //       linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
  //       github: "https://github.com/laxmikant007",
  //     }
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Codex-Ai",
  //   date: "Dec 2021 - Apr 2022",
  //   description:
  //     " Codex-AI on specific topics and use advanced AI techniques such as machine learning to  improve its  and responsiveness over time. The goal of Codex-AI is to provide an intuitive and engaging way for users to interact with your organization 😉.",
  //   image: codex,
  //   tags: ["OpenAI", "Node", "React-Vite", "MongoDB"],
  //   category: "Web app",
  //   github: "https://github.com/laxmikant007/Codex-FrontEnd",
  //   webapp: "https://codex-ai-six-drab.vercel.app",
  //   member: [
  //     {
  //       name: "Rohit Kumar",
  //       img: "https://avatars.githubusercontent.com/u/74814381?v=4",
  //       linkedin: "https://linkedin.com/in/rohit-kumar-1328a8203/",
  //       github: "https://github.com/codeuk22",
  //     }
  //   ],
  // },
  // {
  //   id: 0,
  //   title: "Universal Movies",
  //   date: "Apr 2023 - May 2023",
  //   description:
  //     "This site uses imdb API to manage and display various movies rating , cast, release date and much more interesting information of your favorite movies😉.",
  //   image: universal,
  //   tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
  //   category: "web app",
  //   github: "https://github.com/laxmikant007/Universal-Movies1",
  //   webapp: "https://laxmikant007.github.io/Universal-Movies1",
  //   member: [
  //     {
  //       name: "Laxmiaknt Saraswat",
  //       img: "https://avatars.githubusercontent.com/u/74814381?v=4",
  //       linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
  //       github: "https://github.com/laxmikant007",
  //     }
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Weather City",
  //   date: "Jul 2022",
  //   description:
  //     "The Weather City Application is a React-based application that utilizes the OpenWeather API to fetch and display weather data. 😉.",
  //   image: weather,
  //   tags: ["React Js", "Weather-API", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/laxmikant007/Weather-City",
  //   webapp: "https://weather-city.onrender.com/",
  //   member: [
  //     {
  //       name: "Laxmiaknt Saraswat",
  //       img: "https://avatars.githubusercontent.com/u/74814381?v=4",
  //       linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
  //       github: "https://github.com/laxmikant007",
  //     }
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "Nike Store",
  //   date: "Jun 2022",
  //   description:
  //     " The Nike Store is a React application that is based on Redux. It utilizes Redux to effectively manage cart items and prices.😉.",
  //   image: nike,
  //   tags: ["React Js", "Local Storage", "Redux", "Node JS", "Context-API"],
  //   category: "web app",
  //   github: "https://github.com/laxmikant007/NIke-Redux",
  //   webapp: "https://nike-n2vn.onrender.com",
  // },
  // {
  //   id: 6,
  //   title: "Simon Game",
  //   date: "Jun 2021",
  //   description:
  //     "Its a simple game ,Simon is an electronic game of short-term memory skill invented by Ralph H. Baer and Howard J. Morrison invented in 1978!",
  //   image: simon,
  //   tags: ["Html", "CSS", "Reactjs"],
  //   category: "web app",
  //   github: "https://github.com/laxmikant007/Simon-Game",
  //   webapp: "https://laxmikant007.github.io/Simon-Game/",
  //   member: [
  //     {
  //       name: "Laxmiaknt Saraswat",
  //       img: "https://avatars.githubusercontent.com/u/74814381?v=4",
  //       linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
  //       github: "https://github.com/laxmikant007",
  //     }
  //   ],
  // },
  // {
  //   id: 7,
  //   title: "Desktop Alexa",
  //   date: "Dec 2020 - Jan 2021",
  //   description:
  //     "This is a virtual assistant based on the Python library You can run this python program in any integrated development environment (IDE) and Enjoy!.",
  //   image: alexa,
  //   tags: ["Python", "Open CV", "API"],
  //   category: "Web app",
  //   github: "https://github.com/laxmikant007/Akexa_Desktop",
  //   // webapp: "https://github.com/rishavchanda/Quiz-Earn",
  //   member: [
  //     {
  //       name: "Laxmiaknt Saraswat",
  //       img: "https://avatars.githubusercontent.com/u/74814381?v=4",
  //       linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
  //       github: "https://github.com/laxmikant007",
  //     }
  //   ],
  // },
  // {
  //   id: 8,
  //   title: "Meme-Share",
  //   date: "Jan 2021",
  //   description:
  //     "This is an Android project with a meme API. This fatches different types of trending memes from Reddit, Facebook, and Instagram and shows you!",
  //   image: meme,
  //   tags: ["Android", "Java", "Kotlin", "Emulator", "Android-Studio"],
  //   category: "Android App",
  //   github: "https://github.com/laxmikant007/MemeShare",
  //   // webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  //   member: [
  //     {
  //       name: "Laxmiaknt Saraswat",
  //       img: "https://avatars.githubusercontent.com/u/74814381?v=4",
  //       linkedin: "https://www.linkedin.com/in/laxmikant-saraswat",
  //       github: "https://github.com/laxmikant007",
  //     }
  //   ],
  // },
];


