#!/usr/bin/env node

const program = require('commander')
const shell = require('shelljs')
const chalk = require('chalk')
const { prompt } = require('inquirer')

PRODUCTION_PACKAGES = "axios prop-types react-router-dom styled-components normalize.css redux-form grid-styled";
REDUX_PACKAGES = "redux react-redux redux-thunk";
DEV_PACKAGES = "esdoc esdoc-standard-plugin esdoc-jsx-plugin eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y@5 eslint-plugin-react";
FOLDERS = "api components containers pages helpers redux styled-components";

const pwd = () => shell.echo(shell.pwd())

program
  .version("0.0.1")
  .description(chalk.blue("Hello! I'm Hamish."));

program
  .command('installCreateReactApp')
  .alias('i')
  .description('Installs create-react-app.')
  .action(() => {
    console.log(chalk.blue('Installing create-react-app'));
    shell.exec("npm install -g create-react-app", ({ stderr }) => {
      stderr ? console.log(chalk.red(stderr)) : console.log(chalk.green('Success!'));
    });
  })

program
.command('test')
.action(() => {
  shell.echo(shell.pwd())
  shell.cd('./test-again')
  pwd()
  shell.cp("-r", "../src/*", "./src/");
  shell.cp(["../config/.env", "../config/.esdoc.json", "../config/.eslintrc"], "./");
})

program
  .command('start')
  .alias('go')
  .description('Starts a new create-react-app project with Hamish bootstrapping.')
  .action(() => {
    console.log('here we go');
    const questions = [
      {
        type: 'input',
        name: 'appName',
        message: 'What should your app be called?'
      },
    ]
    prompt(questions).then(answers => {
      const { appName } = answers
      // run create-react-app
      shell.exec(`create-react-app ${appName}`)
      
      // change directory into the new react app src 
      shell.cd(`./${appName}/src`)

      // remove default file to be replaced
      shell.echo(chalk.blue('Removing default files to be replaced...'))
      shell.rm('App.js', 'App.css', 'index.js', 'index.css', 'logo.svg')

      // move back up to the project root
      shell.cd('..')
      
      // use yarn or npm to install packages
      const hasYarn = shell.which('yarn')
      
      if (hasYarn) {
        shell.echo(chalk.blue('Yarn detected, installing packages with Yarn...'))
        shell.echo(chalk.blue(`production packages: ${PRODUCTION_PACKAGES} ${REDUX_PACKAGES}`));
        shell.exec(`yarn add ${PRODUCTION_PACKAGES} ${REDUX_PACKAGES}`)

        shell.echo(chalk.blue(`development packages: ${DEV_PACKAGES}`));
        shell.exec(`yarn add --dev ${DEV_PACKAGES}`)
      } else {
        shell.echo(chalk.blue("Yarn not detected, installing packages with NPM..."));
        shell.echo(chalk.blue(`production packages: ${PRODUCTION_PACKAGES} ${REDUX_PACKAGES}`));
        shell.exec(`npm install --save ${PRODUCTION_PACKAGES} ${REDUX_PACKAGES}`);

        shell.echo(chalk.blue(`development packages: ${DEV_PACKAGES}`));
        shell.exec(`npm install --save-dev ${DEV_PACKAGES}`);
      }

      // copy hamish src in to new project src
      shell.cp("-r", "../src/*", "./src/");
      // copy hamish config in to new project root
      shell.cp(["../config/.env", "../config/.esdoc.json", "../config/.eslintrc"], "./");

      // start project
      if (hasYarn) {
        shell.exec('yarn start')
      } else {
        shell.exec('npm start')
      }

    })
    
  })

program.parse(process.argv)

