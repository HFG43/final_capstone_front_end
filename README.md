<a name="readme-top"></a>
<div align="center">
  <br/>
  <h1><b>Final Capstone Front-End | Gourmet Experience App</b></h1>
</div>

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [Final Capstone Front-End | Gourmet Experience App](#final-capstone-front-end--gourmet-experience-app)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Back-End Project  ](#-back-end-project--)
  - [💻 Getting Started ](#-getting-started-)
    - [Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Install](#install)
    - [Usage](#usage)
    - [Testing](#testing)
    - [Build](#build)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

# Final Capstone Front-End | Gourmet Experience App<a name="about-project"></a>

This project consists of a web application built with ReactJS and Redux Toolkit that allows users to book gourmet experiences that they can give to others, in a quick and easy way.

This application connects to the [GourmetExperience API](https://github.com/HFG43/final_capstone_back_end) and obtains all the information of registered users, the list of available gastronomic experiences, the list of reservations made by a selected user, and allows new users to be registered, authenticate existing users, create new reservations and delete them. Likewise, the app is completely responsive and has been built following the best practices of software development. It has robust validations, efficient data management, and a set of unit and integration tests that allowed validating the operation of the entire application.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://es.react.dev">React Library</a></li>
    <li><a href="https://reactrouter.com/en/main">React Router</a></li>
    <li><a href="https://nodejs.org">Node.js</a></li>
    <li><a href="https://create-react-app.dev">Create React App</a></li>
    <li><a href="https://stylelint.io/">Stylelint.io</a></li>
    <li><a href="https://eslint.org/">ESlint.org</a></li>
    <li><a href="https://redux-toolkit.js.org/">Redux Toolkit</a></li>
    <li><a href="https://axios-http.com/docs/intro">Axios</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **Using the ReactJS library**
- **Using the ReactJS Router library**
- **Using JSX syntax**
- **Using semantic HTML**
- **SPA Approach**
- **Responsive Design**
- **Using Redux Toolkit for a global state management**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Back-End Project  <a name="backend-project"></a>

The backend project can be found in the following link: [Final Capstone Back-End](https://github.com/HFG43/final_capstone_back_end)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder-name
  git clone https://github.com/HFG43/final_capstone_front_end.git
```

### Prerequisites

In order to install, modify and run this project, it is necessary to have the following applications installed:

- **Git:** to manage the project versions of source code. [You can Download Git here](https://git-scm.com/)

- **Nodejs and NPM:** to install and manage the project dependencies. [Nodejs and NPM installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- **A code editor** like Visual Studio Code (Recommended) or any other of your preference. It is necessary to open the project and add or modify the source code. [You can Download Visual Studio Code here](https://code.visualstudio.com/)

It is also important to have at least basic knowledge about ReactJS, JSX, HTML, CSS and Javascript languages so you will be able to understand and work with the code of the project.

- [Learn the basics of HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Learn the basics of CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Javascript Arrays](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Javascript Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [ReactJS](https://react.dev/learn)
- [JSX](https://react.dev/learn/writing-markup-with-jsx)
- [Create React App](https://github.com/facebook/create-react-app)

### Install

Install this project by running the next command into your project folder:

```sh
  npm install
```

All the packages and libraries necessary for the project to work will be installed in a folder called /node_module. After finishing the installation of this project, you should verify that you have the [Final Capstone Back-End](https://github.com/HFG43/final_capstone_back_end) installed so that this project can work as expected.

### Usage

**IMPORTANT NOTE: As specified above, to run this project you must have the [Final Capstone Back-End](https://github.com/HFG43/final_capstone_back_end) project installed and running, since it contains the API that will be consuming in this project. Please do not run this project without first running the project mentioned previously.**

In the project directory, you can run:

- `npm start`

A message similar to this will be displayed in the console:
![Alt text](<https://i.postimg.cc/bYG2n0R0/frontend-server.png>)

When the above message appears, press the `Y` key to allow the server to run the application on another available port (usually port 3001).

When everything is ready, this message should appear in the console:
- `compiled successfully!`

Open the main URL: [http://localhost:3001](http://localhost:3001) to see the app running in your browser.

The page will reload when you make changes.

You may also see any CSS and JS linters errors in the console running the following commands:

CSS Linter

```sh
  npx stylelint "**/*.{css,scss}"
```

Javascript Linter

```sh
  npx eslint "**/*.{js,jsx}"
```

### Testing

Run the following command to verify the quality of the application code through the designed test cases:

```sh
  npm test
```

### Build

- `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

**Note**: Please only modify the components files and the CSS files. Do not modify configurations files of the project.

## 👥 Authors <a name="authors"></a>

👤 **Andrés Zamorano**

- GitHub: [Andres Zamorano](https://github.com/Dachrono)
- Twitter: [Andres Zamorano](https://twitter.com/Dachrono)
- LinkedIn: [Andres Zamorano](https://www.linkedin.com/in/andres-zamorano-785b77a1/)

👤 **Andrea Manuel**

- GitHub: [@AndreaM2429](https://github.com/AndreaM2429)
- Twitter: [@AndreaManuelOr1](https://twitter.com/AndreaManuelOr1)
- LinkedIn: [Andrea Manuel](https://www.linkedin.com/in/andreamanuel24/)

👤 **Nitcelis Bravo**

- GitHub: [Nitcelis Bravo](https://github.com/NitBravoA92)
- Twitter: [@softwareDevOne](https://twitter.com/softwareDevOne)
- LinkedIn: [Nitcelis Bravo Alcala](https://www.linkedin.com/in/nitcelis-bravo-alcala-b65340158)

👤 **Hernán Güemes**

- GitHub: [@HFG43](https://github.com/HFG43)
- LinkedIn: [hernanguemes](https://www.linkedin.com/in/hernanguemes)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Add user roles and administrator account**
- [ ] **Add functionality to Create Experiences by the user admin**
- [ ] **Add the functionality to Update reservations: Components, UI, Actions**
- [ ] **Add custom animations using libraries such as Animate.css and Framer Motion**
- [ ] **Add functionality to have a dark and light design**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, suggestions and feature requests are welcome!
Feel free to check the [issues page](https://github.com/HFG43/final_capstone_front_end/issues).

To do Contributions, please fork this repository, create a new branch and then create a Pull Request from your branch. You can find detailed description of this process in: [A Step by Step Guide to Making Your First GitHub Contribution by Brandon Morelli](https://codeburst.io/a-step-by-step-guide-to-making-your-first-github-contribution-5302260a2940)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you liked this project, give me a "Star" (clicking the star button at the beginning of this page), share this repo with your developer community or make your contributions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

The UI design of this webapp is not ours. This design was created and belongs to Murat Korkmaz. (Here)[https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign] you can find more information about the original design of this webapp and you can also see Murat Korkmaz profile (here)[https://www.behance.net/muratk] to know more details about his wonderful work.

We would also like to thank to Microverse community for their support and motivation. They have supported us a lot in carrying out this project, giving us suggestions and good advice.

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

The UI design of the webpage is not ours. It is under (Creative Commons License)[https://creativecommons.org/licenses/by-nc/4.0] licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
