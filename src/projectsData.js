const projects = [
  {
    title: "Crime Map",
    description: [
      "My 2 teammates and I developed a web application that enables users to anonymously report and tag crimes on an interactive map.",
      "Leverages the Google Maps API for real-time mapping"
    ],
    image:"/images/crimemap.png",
    liveLink: "https://not-live-yet.com",
    githubLink:"https://github.com/keithfernandez0/keanuhackthis",
    techStack:["Next.js","Tailwind CSS","MongoDB","Google Maps API","Figma"],
  },
  {
    title: "CGI Web Form with C++",
    description:  [
      "The web form takes user input and sends it to a C++ backend.",
      "Implemented input validation, string analysis, and displays meaningful output or error messages directly in the browser.",
      "This application was hosted and tested on the OBI server provided by Kean University."
    ],
    image:"/images/cpp-p1.png",
    liveLink: "https://obi2.kean.edu/~pennal@kean.edu/CPS3525/project1.html",
    githubLink:"https://github.com/lexp2204/cpp-cgi-form",
    techStack:["C++","HTML","Unix","Apache","CGI"],
  },
  {
    title: "Weather App",
    description:  [
      "Displays current weather conditions",
      "Search by city or use geolocation",
      "Built with React and OpenWeather API"
    ],
    image:"/images/Weather-app.png",
    liveLink: "https://app.screencastify.com/v3/watch/Q3EO49pnQQXPrlwu8z5v",
    githubLink:"https://github.com/lexp2204/Weather-app",
    techStack:["React.js","Node.js","Express","CSS","Axios","Figma"],
  },
  {
    title: "Job & Intership Portal",
    description:  [
      "Built a full-stack web application that connects job seekers with employers through real-time job and internship listings.",
      "Engineered RESTful APIs with Node.js and Express.js, and integrated PostgreSQL for relational data modeling, storage, and efficient query handling."
    ],
    image:"/images/landing.png",
    liveLink: "https://not-live-yet.com",
    githubLink:"https://github.com/lexp2204/Job-Portal",
    techStack:["React.js","Node.js","Express","Postgres","Axios","Figma"],
  },
  {
    title: "C++ Guessing Game",
    description:  [
      "Allows users to upload a text file, then analyzes it to count occurrences of each uppercase letter (A–Z).",
      "Prompts players to guess the most frequent uppercase letter in the uploaded file.",
      "Uses CGI to handle user input and display interactive game results on a web page."
    ],
    image:"/images/cpp-p3.png",
    liveLink: "https://obi2.kean.edu/~pennal@kean.edu/CPS3525/project3.html",
    githubLink:"https://not-on-github-yet.com",
    techStack:["C++","HTML","Unix","Apache","CGI"],
  },
];

export default projects;
