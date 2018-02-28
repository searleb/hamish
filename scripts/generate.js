const {
  prompt
} = require("inquirer");
const shell = require("shelljs");
const chalk = require("chalk");

const questions = [{
    type: 'list',
    name: 'genOpt',
    message: 'What would you like to generate?',
    choices: [
      'component',
      'container',
      'page',
      'redux module'
    ]
  },
  {
    type: 'input',
    name: 'name',
    message: 'What would you like the component to be named?'
  }
]

const createReduxModule = (name) => {
  shell
    .ShellString(`export { default as ${name} } from './${name}'`)
    .toEnd('./src/redux/modules/index.js')
  shell.cd('./src/redux/modules')
  shell.touch(`${name}.js`)
  shell.echo(chalk.green(`${name} Redux module was created!`))
}

const createComponent = (name, genOpt) => {
  shell.mkdir(`./src/${genOpt}s/${name}`)
  shell
    .ShellString(`export { default as ${name} } from './${name}/${name}'`)
    .toEnd(`./src/${genOpt}s/index.js`)
  shell.cd(`./src/${genOpt}s/${name}`)
  shell.touch(`./${name}.js`)
  shell.touch(`./${name}.test.js`)
  shell.echo(chalk.green(`${name} ${genOpt} was created!`));
}

const generate = () => {
  prompt(questions).then((answers) => {
    const {
      genOpt,
      name
    } = answers
    if (genOpt === 'redux module') {
      createReduxModule(name)
    } else {
      createComponent(name, genOpt)
    }
  })
}

module.exports = generate