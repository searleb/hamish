#!/usr/bin/env node

const program = require('commander')
const shell = require('shelljs')
const chalk = require('chalk')
const {
  prompt
} = require("inquirer")

const start = require('./scripts/start')
const generate = require('./scripts/generate')

program
  .version("0.0.1")
  .description(
    chalk.yellow(`
    Hello, I'm Hamish!
    
    Make sure you run the generator from your project root directory.
    `)
  );

program
  .command('installcreateapp')
  .description('Installs create-react-app.')
  .action(() => {
    console.log(chalk.yellow('Installing create-react-app'));
    shell.exec("npm install -g create-react-app", ({
      stderr
    }) => {
      stderr ? console.log(chalk.red(stderr)) : console.log(chalk.green('Success!'));
    });
  })

// Just here for development purposes
// program
//   .command('test')
//   .action(() => {})

program
  .command('start')
  .description('Starts a new create-react-app project with Hamish bootstrapping.')
  .action(() => {
    start()
  })

program
  .command("generate")
  .alias("g")
  .description('Generates a new redux module, page, container or component folder with [name].js and [name].test.js')
  .action(() => {
    generate()
  })

// Assert that a VALID command was provided 
if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  program.outputHelp();
  process.exit();
}

program.parse(process.argv)