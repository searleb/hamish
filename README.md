# I'm Hamish!
### I'll scaffold out a react project for you based on [create-react-app](https://github.com/facebook/create-react-app)!

## Why?
Every time I started a new react app I found myself going around copy and pasting my redux, router, axios, etc etc setup from previous projects so I created Hamish to scaffold out my setup for me.

I was also tired of manually creating component files and writing export statements so the generator function was added to handle components, containers, pages and redux modules.

Hamish started life as a cleverly named bash script `hami.sh` but has been re-written into a node cli package so you can use it anywhere!

This is a personal project to help myself out but I hope it can help you to :v:

## Install

```sh
npm install hamish -g
```

## Usage

* `hamish install` -- Installs `create-react-app`
* `hamish start` -- Starts a new react app and installs the Hamish setup 
* `hamish generate | g` -- Starts component generator
* `hamish -h` -- help

## What's installed on top:

- axios
- esdoc
- eslint
- grid-styled
- normalize.css
- prop-types
- react-router-dom v4
- redux
- redux-form
- redux-thunk
- styled-components
- hot module replacement

## Folder structure, added and edited files
```sh
|-- .env
|-- .esdoc.json
|-- .eslintrc
|-- src
    |-- App.js
    |-- index.js
    |-- api
    |   |-- config.js
    |-- components
    |   |-- index.js
    |   |-- Grid
    |       |-- Grid.js
    |-- containers
    |   |-- index.js
    |-- helpers
    |   |-- index.js
    |-- pages
    |   |-- index.js
    |-- redux
    |   |-- store.js
    |   |-- modules
    |       |-- index.js
    |__ styled-components
    |   |-- theme.js  
```


## Generator
Command: `hamish g`

Will ask what kind of component you want to generate:
* component
* container
* page
* redux module

 and will generate for example:
```
|-- src
    |-- components
        |-- <name>
            |-- <name>.js
            |-- <name>.test.js
```
and will add `export default { <name> } from './<name>/<name>` to the index.js so the component is ready to be imported.



