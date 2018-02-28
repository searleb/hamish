const shell = require('shelljs');
const chalk = require('chalk');
const { prompt } = require('inquirer');

const PRODUCTION_PACKAGES = 'axios prop-types react-router-dom styled-components normalize.css redux-form grid-styled';
const REDUX_PACKAGES = 'redux react-redux redux-thunk';
const DEV_PACKAGES = 'esdoc esdoc-standard-plugin esdoc-jsx-plugin eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y@5 eslint-plugin-react';
const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/searleb/hamish/master';
const GITHUB_FOLDER_URL = 'https://github.com/searleb/hamish/trunk';

const questions = [{
  type: 'input',
  name: 'appName',
  message: 'What should your app be called?'
}, ]

const start = () => {
  prompt(questions).then(answers => {
    const { appName } = answers;
    // run create-react-app
    shell.exec(`create-react-app ${appName}`);

    // change directory into the new react app src
    shell.cd(`./${appName}/src`);

    // remove default src files to be replaced
    shell.echo(chalk.magenta('\nRemoving default files to be replaced...'));
    shell.rm('App.js', 'App.css', 'index.js', 'index.css', 'logo.svg');

    // move back up to the project root
    shell.cd('..');
    
    // rename src to temp so we can pull a new src folder from github
    // and copy these temp files back to src later
    shell.mv('-n', './src', './temp')

    // use yarn or npm to install packages
    const hasYarn = shell.which('yarn');

    if (hasYarn) {
      shell.echo(chalk.magenta('\nYarn detected, installing packages with Yarn...'));
      shell.echo(chalk.magenta(`production packages: ${PRODUCTION_PACKAGES} ${REDUX_PACKAGES}`));
      shell.exec(`yarn add ${PRODUCTION_PACKAGES} ${REDUX_PACKAGES}`);

      shell.echo(chalk.magenta(`\ndevelopment packages: ${DEV_PACKAGES}`));
      shell.exec(`yarn add --dev ${DEV_PACKAGES}`);
    } else {
      shell.echo(chalk.magenta('\nYarn not detected, installing packages with NPM...'));
      shell.echo(chalk.magenta(`production packages: ${PRODUCTION_PACKAGES} ${REDUX_PACKAGES}`));
      shell.exec(`npm install --save ${PRODUCTION_PACKAGES} ${REDUX_PACKAGES}`);

      shell.echo(chalk.magenta(`\ndevelopment packages: ${DEV_PACKAGES}`));
      shell.exec(`npm install --save-dev ${DEV_PACKAGES}`);
    }

    // copy hamish src in to new project src
    shell.echo(chalk.magenta('\nPulling Hamish src folder...'));
    shell.exec(`svn export ${GITHUB_FOLDER_URL}/src`)
    shell.cp('./temp/App.test.js', './src/App.test.js')
    shell.cp('./temp/registerServiceWorker.js', './src/registerServiceWorker.js');
    shell.rm('-rf', './temp')

    // copy hamish config in to new project root
    shell.echo(chalk.magenta('\nPulling Hamish config files...'))
    shell.exec('curl https://raw.githubusercontent.com/searleb/hamish/master/config/.esdoc.json -o .esdoc.json');
    shell.exec('curl https://raw.githubusercontent.com/searleb/hamish/master/config/.env -o .env');
    shell.exec('curl https://raw.githubusercontent.com/searleb/hamish/master/config/.eslintrc -o .eslintrc');

    shell.echo(chalk.green('\nFinished!'))
    // start project
    if (hasYarn) {
      shell.exec('yarn start');
    } else {
      shell.exec('npm start');
    }
  });
}

module.exports = start