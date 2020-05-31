import React from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage'
import EducationPge from './pages/EducationPage';

class App extends React.Component {
  state = {
    title: 'Kai Hua Lin',
    headerLink: [
      { title: 'Home', path: '/my-website'},
      { title: 'About', path: '#about'},
      { title: 'Skills', path: '#skills'},
      { title: 'Experience', path: '#experience'},
      { title: 'Education', path: '#education'},
      { title: 'Contact', path: '#contact'}
    ],
    home: {
      title: 'Kai Hua Lin',
      subtitle: 'Computer Science',
      text: 'University of Missouri',
      links: [
        {link: 'https://github.com/KaiHuaLin'},
        {link: 'https://www.linkedin.com/in/kai-hua-lin-a5086a174/'},
        {link: 'https://www.instagram.com/eric78963/'},
      ],
      nextPageLink: '#about'
    },
    about: {
      title: 'About Me',
      text: 'I am Kai Hua Lin, I am a student from the University of Missouri. I was born and raised in Taiwan.'
    },
    skills: {
      title: 'Skills & Abilities',
      pLanguage: {
        title: 'Programming Language',
        items: [
          'Java', 
          'C', 
          'JavaScript'
        ]
      },
      technology: {
        title: 'Technologies',
        items: [
          'HTML5 / CSS3', 
          'React.js',
          'MySQL', 
          'Android Studio',
          'Linux OS',
          'Git / GitHub'
        ]
      },
      language: {
        title: 'Languages',
        items: ['English', 'Mandarin Chinese', 'Taiwanese Hokkien']
      }
    },
    experience: {
      title: 'Experience',
      experiencesUpRow: [
        {
          header: '2020 - Present',
          company: 'Target',
          position: 'Software Engineering Intern',
          text: 'TBD'
        },
        {
          header: 'Summer 2019',
          company: 'Streamline Technology Company',
          position: 'Research Developer Intern',
          text: 'Developing android breathalyzer application for the University of Pittsburgh by using Android Studio. Cooperating and communicating with developers and the University of Pittsburgh to implement what client needs.'
        },
        {
          header: '2017 - 2019',
          company: 'University of Missouri',
          position: 'Student Supervisor',
          text: 'Experience how to cooperate with and organize other employees and team members. Learn how to organize and arrange my time and schedule with customers'
        }
      ],
      experiencesDownRow: [
        {
          header: '2019 - Present',
          company: 'University of Missouri',
          position: 'Student IT Consultant',
          text: 'Help customer solve any IT related question. Fix printer machines and communicate with co-worker if it is out of my ability to fix.'
        },
        {
          header: 'Spring 2019',
          company: 'University of Missouri',
          position: 'Research Assistant',
          text: 'Learning and building the website that display the transportation record with ReactJs and MongoDB as database.'
        }
      ]
    },
    education: {
      title: 'Education'
    },
    contact: {
      title: 'Contact Me',
      email: 'kl2cb@mail.missouri.edu',
      phone: '217-381-6949'
    }
   }



  render() { 
    return ( 
      //<Router> (if using react router for external link)
        <Container className = 'p-0' fluid = { true }>
          <Navbar className = 'border-bottom shadow' bg = 'white' expand = 'lg' sticky='top'>
            <Navbar.Brand> Kai Hua Lin</Navbar.Brand>
            <Navbar.Toggle className = 'border-0' aria-controls = 'navbar-toggle'/>
            <Navbar.Collapse id = 'navbar-toggle'>
              <Nav className = 'ml-auto'>
                {this.state.headerLink.map(link => (
                    // <Link className = 'nav-link' to={link.path}>{link.title}</Link> (if using react router for external link)
                    <a className = 'nav-link' href={link.path}>{link.title}</a>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* (if using react router for external link) */}

          {/* <Route path = '/' exact render = { () => 
            <HomePage 
                title = { this.state.home.title }
                subtitle = { this.state.home.subtitle }
                text = { this.state.home.text }
                links = { this.state.home.links }
                nextPageLink = { this.state.home.nextPageLink }
            /> 
          }
          />
          <Route path = '/about' exact render = { () => 
            <AboutPage 
                title = { this.state.about.title }
            /> 
          }
          />
          <Route path = '/contact' exact render = { () => 
            <ContactPage 
                title = { this.state.contact.title }
            /> 
          }
          /> */}


          <HomePage 
              title = { this.state.home.title }
              subtitle = { this.state.home.subtitle }
              text = { this.state.home.text }
              links = { this.state.home.links }
              nextPageLink = { this.state.home.nextPageLink }
          /> 
          <div id='about'>
            <AboutPage 
              title = { this.state.about.title }
              text = { this.state.about.text }
            />
          </div>
          <div id='skills'>
            <SkillsPage 
              title = { this.state.skills.title }
              pLanguage = { this.state.skills.pLanguage }
              technology = { this.state.skills.technology }
              language = { this.state.skills.language }
            />
          </div>
          <div id='experience'>
            <ExperiencePage 
              experience={this.state.experience}
            />
          </div>
          <div id='education'>
            <EducationPge 
              title={this.state.education.title}
            />
          </div>
          <div id='contact'>
            <ContactPage 
              title={this.state.contact.title}
              email={this.state.contact.email}
              phone={this.state.contact.phone}
            />
          </div>
          <Footer />
        </Container>
      //</Router>
    );
  }
}
 
export default App;



/*
 deploy:

  npm install gh-pages --save-dev
  in package.json, add 'homepage: <github page url>'
  in package.json -> scripts, add 'predeploy: 'npm run build'' & 'deploy: 'gh-pages -d build''
  do git init
  create github repo, git remote add origin <repo url>
  git push -u origin master
  npm run deploy



  with react router:
  same process but,
  In index.js, change to 'import {HashRouter as Router} from 'react-router-dom''

*/