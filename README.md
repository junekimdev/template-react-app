# Template for React App

![release-version](https://img.shields.io/github/v/release/junekimdev/template-react-app?display_name=tag)
![last-commit](https://img.shields.io/github/last-commit/junekimdev/template-react-app)
![license](https://img.shields.io/github/license/junekimdev/template-react-app)

Template for a React app

## Table of Contents

1. [Getting Started](#getting-started)
1. [Tech Stack](#tech-stack)
1. [Directory Structure](#directory-structure)
1. [Code Generation](#code-generation)
1. [Authors](#authors)
1. [License](#license)

---

## Getting Started

### Prerequisite

Install latest Node.js LTS

```shell
# Debian, Ubuntu
sudo apt update
sudo apt install nodejs
nodejs -v

# Windows
choco install nodejs-lts
```

### Installation

Clone the repo and install dependencies

```shell
# git clone will create a directory named myAppName
# if the directory is already created, then use .(dot) instead of myAppName
git clone https://github.com/junekimdev/template-react-app.git <myAppName>
cd myAppName
yarn
```

Make sure to remove `.git` directory to start afresh

```shell
# remove .git directory beforehand
git init
git add .
git commit -m "Initial commit"
git branch -M master
git remote add origin <myGitRepo>
git push -u origin master
```

Add a file `.env` that includes environmental variables

example

```shell
#NODE_ENV=production
NEXT_PUBLIC_URL=https://app.domain.com
#NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_API_URL=http://api.domain.com
```

## Tech Stack

- Markup language (Web Standard): HTML5
- Stylesheet language (Web Standard): CSS3
- Script language: ECMAScript 2015 (a.k.a Javascript ES6)
- Javascript Package Manager: Yarn
- Script preprocessor: Typescript
- Website client-side rendering framework: ReactJS
- Website server-side rendering framework: NextJS
- Package management: Webpack (included in NextJS)
- Transpiler: Speedy Web Compiler (included in NextJS)
- State management (client): Jotai
- State management (data-fetch): TanStack Query
- HTTP interface: fetch API (part of WHATWG Web Standard)
- JavaScript Testing Framework: Jest
- React Testing Library: @testing-library/react
- Browser style normalization script: Normalize
- Stylesheet preprocessor: SCSS
- Stylesheet postprocessor: Postcss (included in NextJS)
- Postcss plugin: Autoprefixer (included in NextJS)
- Version control: Git
- Source code repository: GitHub
- Linter: ESLint
- Formatter: Prettier
- Template engine for code generation: EJS

## Directory Structure

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD037 -->
<pre>
Root
├── components  
    ├── _theme.scss  
    └── eachComponent  
        ├── index.ts  
        ├── eachComponent.module.scss  
        ├── eachComponentInteractor.tsx  
        ├── eachComponentPresenter.tsx  
        └── eachComponentViewName.tsx  
├── controllers  
    ├── index.ts  
    ├── apiURLs.ts  
    ├── data  
        ├── states.ts  
        ├── types.ts  
        └── staticQuery.ts  
    ├── net  
        └── staticQuery.ts  
    └── moreControllers.ts
├── pages  
    ├── _app.tsx  
    ├── _document.tsx  
    ├── _error.tsx  
    ├── 404.tsx  
    ├── index.ts  
    └── global.scss  
├── public  
    ├── favicon.ico (similar files)  
    ├── robot.txt  
    └── assets  
        └── images  
            └── eachImage.png  
└── templates  
    └── eachCodeGenerationTemplate.ejs
</pre>
<!-- markdownlint-enable MD033 -->
<!-- markdownlint-enable MD037 -->

## Code Generation

### Component Generator

- With a View file

```shell
node codegen.js --name=myComponent
```

- Without a View file

```shell
node codegen.js --name=myComponent --V
```

## Authors

- **June Kim** - _Initial work_ - [Github](https://github.com/junekimdev)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
