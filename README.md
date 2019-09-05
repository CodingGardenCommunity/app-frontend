[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/CodingGardenCommunity/app-frontend/master.svg) ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/CodingGardenCommunity/app-frontend.svg) ![GitHub contributors](https://img.shields.io/github/contributors/CodingGardenCommunity/app-frontend.svg) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/CodingGardenCommunity/app-frontend.svg)

# Coding Garden Community App Frontend

This repository contains the source files of the
Coding Garden Community App Frontend. For more information about Community App
please visit the [App Wiki](https://github.com/CodingGardenCommunity/app-wiki/wiki).

## Opening/Serving the Frontend locally:

> **REMEMBER:** If you find yourself in some trouble going through this, reach out to us directly on our [Discord server](https://discord.gg/bPBuk3N).

### Prerequisites

1. **NodeJS:** <br>
   Please install [NodeJS >= 10.15.0](https://nodejs.org/en/download/). Which automatically installs NPM. If you already have them, you're good to go. ✔

1. **EditorConfig:** <br>
   Please visit [EditorConfig](https://editorconfig.org/) -> `Download a Plugin` section and scroll through to see if you need to install an additional Plugin/Extension for your code editor or IDE. If your IDE needs one, you should be able to find a link to that plugin/extension on that page.

   This prerequisite is directly related to the [`.editorconfig`](https://github.com/CodingGardenCommunity/app-frontend/blob/develop/.editorconfig) file in the root directory of this project.

   **_More About EditorConfig:_** <br>
   EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

---

Once you have the [Prerequisites](#prerequisites) covered:

1. [Clone](https://help.github.com/articles/cloning-a-repository/) this repository from GitHub onto your local computer.

   ```sh
   $ git clone https://github.com/CodingGardenCommunity/app-frontend.git
   ```

1. Navigate into the project folder and install all of its necessary dependencies with npm.

   ```sh
   $ cd app-frontend
   $ npm install
   ```

1. To make sure everything is setup properly, run tests.

   ```sh
   $ npm run ci
   ```

   If all tests pass, we can safely conclude that setup is complete and its working as expected. 🙌 Wooh!! <br>
   If not, don't worry. We are together on this!! Reach out to us directly on our [Discord server](https://discord.gg/bPBuk3N).

1. Once that's done, tap your back even if it feels awkward. You are ready to start contributing 😃 <br>
   You can run -

   ```sh
   $ npm run serve
   ```

   to start the local development server.

You can now visit <http://localhost:8080/> to view the frontend of the application.

Further, checkout [package.json](https://github.com/CodingGardenCommunity/app-frontend/blob/develop/package.json) file to learn about (more) available scripts/commands.

Happy coding! 🥂
