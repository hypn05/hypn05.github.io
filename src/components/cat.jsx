import React, { Component } from "react";
import githubLogo from "../assets/GitHub-Mark-Light-32px.png";
// import gif from "./eye-icon-animate.gif";

export class Cat extends Component {
  state = {
    type: this.props.line.type,
    value: this.props.line.value,
  };

  style = {
    align: "middle",
  };

  information = {
    about:
      "I'm an enthusiastic information security practitioner with experience in penetration testing, application security, application development, and blockchain security. I'm committed to remaining on top of the current threat landscape and developing efficient countermeasures to protect systems and detect malicious behavior quickly. Furthermore, I am skilled at communicating risks to a variety of audiences, ensuring that the impact is fully understood so that well-informed decisions can be made.",
    education: [
      {
        school: "University of Maryland, College Park",
        degree: "Master of Engineering",
        field: "Cyber Security",
        startDate: "2018",
        endDate: "2020",
        coursework: [
          "Penetration Testing",
          "Embedded System Hacking and Security",
          "Security Tools for Information Security",
          "Digital Forensics and Incidence Response",
          "Reverse Engineering",
          "Network Security",
          "Secure Operating Systems",
        ],
      },
      {
        school: "Ujjain Engineering College, Ujjain",
        degree: "Bachelor of Engineering",
        field: "Computer Science and Engineering",
        startDate: "2012",
        endDate: "2016",
        coursework: [
          "Business Information System ",
          "Analysis & Design of Algorithm",
          "Computer Organization & Architecture",
          "Theory of Computation",
          "Operating System",
          "Database Management System",
          "Data Communication",
          "Computer Networks and Management",
          "Compiler Design",
          "Network & Web Security",
          "Wireless Network",
        ],
      },
    ],
    projects: [
      {
        projectName: "p1",
        liveDemo: "https://github.com/shloksomani",
        linkToGithub: "https://github.com/shloksomani",
      },
      {
        projectName: "p2",
        liveDemo: "https://github.com/shloksomani",
        linkToGithub: "https://github.com/shloksomani",
      },
    ],
    social: [
      {
        platform: "Github",
        link: "https://github.com/shloksomani",
      },

      {
        platform: "Github",
        link: "https://github.com/shloksomani",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <p className="prompt"> {this.props.line.value} </p>
        {this.handelCd()}
      </React.Fragment>
    );
  }

  handelCd = () => {
    const navigation = this.state.value.split(" ")[1];
    if (navigation) {
      const lower = navigation.toLowerCase();
      if (lower === "about") {
        return <p className="result">{this.information.about}</p>;
      } else if (lower === "education") {
        return (
          <React.Fragment>
            {this.information.education.map((edu) => {
              return (
                <p className="result">
                  {edu.degree} | {edu.field}
                  <br></br>
                  {edu.school}
                  <br />
                  Coursework: <br />
                  <ul>
                    {edu.coursework.map((i) => {
                      return <li className="coursework">{i}</li>;
                    })}
                  </ul>
                </p>
              );
            })}
          </React.Fragment>
        );
      } else if (lower === "projects" || lower === "project") {
        return (
          <React.Fragment>
            {this.information.projects.map((everyProject) => {
              return (
                <p className="result">
                  {everyProject.projectName}
                  <a
                    href={everyProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                  <a
                    href={everyProject.linkToGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={githubLogo} alt="GithubLink to Code" />
                  </a>
                </p>
              );
            })}
          </React.Fragment>
        );
      } else if (
        lower === "socials" ||
        lower === "social" ||
        lower === "contact me" ||
        lower === "contactme" ||
        lower === "contact_me"
      ) {
        return (
          <React.Fragment>
            {this.information.social.map((everySocial) => {
              return (
                <p className="result">
                  <a
                    href={everySocial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {everySocial.platform}
                  </a>
                  <a
                    href="https://github.com/shloksomani"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={githubLogo} alt="GithubLink to Code" />
                  </a>
                </p>
              );
            })}
          </React.Fragment>
        );
      } else {
        return <p className="result">Opps wrong input</p>;
      }
    } else {
      return <p className="result">Opps wrong input</p>;
    }
  };
}

export default Cat;
