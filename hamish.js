#!/usr/bin/env node

const program = require('commander')
const shell = require('shelljs')
const chalk = require('chalk')

program
  .version("0.0.1")
  .description(chalk.blue("Hello! I'm Hamish."));

program
  .command('installCreateReactApp')
  .alias('i')
  .description('Install create-react-app')
  .action(() => {
    console.log(chalk.blue('Installing create-react-app'));
    shell.exec("npm install -g create-react-app", ({ stderr }) => {
      stderr ? console.log(chalk.red(stderr)) : console.log(chalk.green('Success!'));
    });
  })

program.parse(process.argv)

