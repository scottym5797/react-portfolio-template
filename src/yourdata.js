// Skills Icons
import htmlIcon from "./images/Group.svg"
import awsIcon from "./images/awsLogo.svg"
import reactIcon from "./images/React-icon.svg"
import jsIcon from "./images/JavaScript_logo_2.svg"
import pythonIcon from "./images/python-logo.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import linkedinIcon from "./images/linkedin.svg"
import halisi from "./images/halisi.png"
import facebook from "./images/facebook_ads.png"
import mixAmigo from "./images/MixAmigo.png"
import me from "./images/me-resized-3.jpg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Scott",
  headerTagline: [
    //Line 1 For Header
    "Combining technical",
    //Line 2 For Header
    "passion and expertise",
    //Line 3 For Header
    "with domain knowledge",
  ],
  //   Header Paragraph
  headerParagraph:
    "Software Engineer with over 2 years experience using Python to build products used in automation and marketing.",

  //Contact Email
  contactEmail: "scott.martin5797@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "MixAmigo", //Project Title - Add Your Project Title Here
      para:
        "A multipage static website for getting song statistics for millions of songs in multiple langauges. Made in React.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        mixAmigo,
      //Project URL - Add Your Project Url Here
      url: "https://mixamigo.com/",
    },
    {
      title: "Hali Halisi", //Project Title - Add Your Project Title Here
      para:
        "Progressive Web App to connect the Deaf to interpreters", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        halisi,
      //Project URL - Add Your Project Url Here
      url: "https://halisi.io/",
    },
    {
      title: "Facebook dynamic video creation", //Project Title - Add Your Project Title Here
      para:
        "Automated dynamic video creation with connection to FB Ads API for campaign creation and management. Using Python, OpenCV, Docker, React.js", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      facebook,
      //Project URL - Add Your Project Url Here
      url: "",
    },
    {
      title: "SEA Campaign Automation", //Project Title - Add Your Project Title Here
      para:
        "Python based pipeline that creates advertisements for millions of keywords for 40 000+ products through Google Ads API.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1561451212-d7350aa8d04c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2690&q=80",
      //Project URL - Add Your Project Url Here
      url: "",
    },
    {
      title: "Corona Tracker", //Project Title - Add Your Project Title Here
      para:
        "Tool to check the current number of corona infections", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://stupefied-yonath-e6b6a3.netlify.app/",
    },
    {
      title: "Corona Vaccine Scraper", //Project Title - Add Your Project Title Here
      para:
        "Scraper that checks for appointments in Munich every minute and sends an email when available (private repo: ask for access)", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1618961734760-466979ce35b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      //Project URL - Add Your Project Url Here
      url: "",
    },


    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Versatile and motivated professional working in the marketing tech field. My passion and vision is to utilise the rising ubiquity of data and need for digitalisation to make a significant impact on how we operate, this is my primary focus at Hali Halisi and at FlixBus. In Australia, I underwent 3 years of officer training in the Australian Defence Force. I can communicate effectively and lead in dynamic and adverse situations, proven within my formal recommendation letter from the US Military after spending a semester on exchange at Purdue University.",
  aboutParaTwo:
    "I've worked for over 2 years as a Python/Data Engineer at FlixBus in the marketing space. My focus was on automation of tasks and the creation of data pipelines to facilitate products.",
  aboutParaThree:
    "In my spare time I create other products, particularly web apps. Such as MixAmigo and the MVP for Hali Halisi. As such I have full stack skills with an expertise in Python and AWS.",
  aboutImage:
    me,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: pythonIcon,
      para:
        "Strong experience in Python developing ETL pipelines and backend products.",
    },
    {
      img: awsIcon,
      para:
        "Expereience with deploying and using Amazon services such as Lambda, S3, EC2, RDS",
    },
    {
      img: codeIcon,
      para:
        "Development mindset including skills in Agile, Jira, Git, Docker, Kubernetes, creating APIs, etc",
    },
    {
      img: jsIcon,
      para:
        "JavaScript in both web development and NodeJS for backend development or scraping.",
    },
    {
      img: reactIcon,
      para:
        "React framework for the creation of websites or Progressive Web Apps.",
    },

    {
      img: htmlIcon,
      para:
        "Snowflake, Postgres, SQL and general database management.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "I look forward to hearing from you",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/scottym5797" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/scott-martin-43a639118/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
