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
    experience: [
      {
        companyName: "Tesla",
        city: "Austin, Texas, United States",
        companyDetails: [
          {
            position: "Application Security Engineer",
            startDate: "Jul 2021",
            endDate: "Present",
            term: "",
            description: [
              "Job functions include threat modeling, bug bounty triage, pentest coordination, vulnerability tracking, security reviews of internal and external products.",
              "Build out Application Security program (SAST, DAST, SCA, Developer Education, & Policies).",
              "Setup and Manage container security tooling.",
              "Collaborate frequently with different engineering teams to identify and address security issues.",
            ],
          },
        ],
      },
      {
        companyName: "Synopsys Inc",
        city: "Bloomington, Indiana, United States",
        companyDetails: [
          {
            position: "Security Consultant",
            startDate: "Jun 2020",
            endDate: "Jul 2021",
            term: "1 yr 2 mos",
            description: [
              "Translating client security requirements & conducting penetration testing and vulnerability assessments of web applications and web services.",
              "Reporting detailed results of the analysis back to the client as deliverables.",
              "Writing scripts to automate various steps in testing.",
            ],
          },
        ],
      },
      {
        companyName: "Okta, Inc.",
        city: "San Francisco Bay Area, United States",
        companyDetails: [
          {
            position: "Application Security Engineer Intern",
            startDate: "Jun 2019",
            endDate: "Aug 2019",
            term: "3 mos",
            description: [
              "Automate scanning of Okta products on weekly basis using Burp.",
              "Design review: Evaluate design against the specified requirements to identify issues before product release.",
              "Code review: Consciously and systematically convening code for CVE’s.",
              "Penetration testing: Identify and report security weaknesses in the features.",
            ],
          },
        ],
      },
      {
        companyName: "Techracers Inc",
        city: "Indore, India",
        companyDetails: [
          {
            position: "Blockchain developer",
            startDate: "Aug 2017",
            endDate: "Jun 2018",
            term: "11 mos",
            description: [
              "Blockchain Proof of Concept: Solidifying feasibility and functionality of application in blockchain environment.",
              "Test the business logics and securing all the application transaction on the blockchain.",
              "Develop solidity smart contract, covering user test-cases writing in Mocha testing framework using truffle suite.",
            ],
          },
          {
            position: "Solutions Architect",
            startDate: "Aug 2016",
            endDate: "Jul 2017",
            term: "1 yr",
            description: [
              "Application Diagnostics: Diagnose and fix bugs and performance bottlenecks for performance to provide a native experience.",
              "Code review of the application to check for possible exploits.",
              "Modules: Create React-Native modules including Video chat module, boilerplate, text-fields, buttons and more.",
            ],
          },
        ],
      },
    ],
    social: [
      {
        platform: "Github",
        link: "",
      },

      {
        platform: "Github",
        link: "",
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
                  <table>
                    <tr>
                      <td className="degreeInformation">
                        {edu.degree} | {edu.field}
                      </td>
                      <td>
                        {edu.startDate} - {edu.endDate}
                      </td>
                    </tr>
                    <tr>
                      <td className="schoolInformation">{edu.school}</td>
                    </tr>
                  </table>
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
      } else if (lower === "experience") {
        return (
          <React.Fragment>
            {this.information.experience.map((exp) => {
              return (
                <p className="result">
                  <table>
                    <tr>
                      <td className="degreeInformation">{exp.companyName}</td>
                    </tr>
                    <tr>
                      <td className="schoolInformation">{exp.city}</td>
                    </tr>
                  </table>
                  {exp.companyDetails.map((cd) => {
                    return (
                      <div>
                        <table>
                          <tr>
                            <td className="degreeInformation coursework">{cd.position}</td>
                            <td className="coursework">
                              {cd.startDate} - {cd.endDate} . {cd.term}
                            </td>
                          </tr>
                        </table>
                        <ul>
                          {cd.description.map((l) => {
                            return <li>{l}</li>;
                          })}
                        </ul>
                      </div>
                    );
                  })}
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
