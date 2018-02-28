#!/usr/bin/env node

const program = require('commander')
const shell = require('shelljs')
const chalk = require('chalk')
const { prompt } = require("inquirer")

const start = require('./scripts/start')
const generate = require('./scripts/generate')

const FOLDERS = "api components containers pages helpers redux styled-components";

const pwd = () => shell.echo(shell.pwd())

program
  .version("0.0.1")
  .description(chalk.blue("Hello! I'm Hamish."));

program
  .command('installcreateapp')
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
})

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

program.parse(process.argv)

