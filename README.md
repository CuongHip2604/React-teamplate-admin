# React Admin Template

CoreUI is meant to be the UX game changer. Pure & transparent code is devoid of redundant components, so the app is light enough to offer ultimate user experience. This means mobile devices also, where the navigation is just as easy and intuitive as on a desktop or laptop.

## Installation

### Clone repo

```bash
# clone the repo
$ git clone https://github.com/CuongHip2604/React-teamplate-admin.git

# go into app's directory
$ cd React-teamplate-admin

# install app's dependencies
$ npm install
```

### Basic usage

```bash
# dev server with hot reload at http://localhost:3000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
React-base
├── public/          #static files
│   └── index.html   #html template
│
├── src/             #project root
│   ├── assets/      #assets - js icons object
│   ├── modules/     #container source - template layout
|   │   ├── nav.js   #sidebar config
|   │   └── ...
│   ├── scss/        #user scss/css source
│   ├── shared/      #views source
│   ├── App.js
│   ├── App.test.js
│   ├── polyfill.js
│   ├── index.js
│   ├── router       #routes config
│   └── store        #template state example
│
└── package.json
```
