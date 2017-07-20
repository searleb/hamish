# Install Create React app
# Create a new React app with default packages
# Adds axios config
#
#
#
#!/bin/bash

NPM_PACKAGES="axios prop-types react-router-dom styled-components normalize.css"
REDUX_PACKAGES="redux react-redux redux-thunk"
DEV_PACKAGES="esdoc eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react"
FOLDERS="api components containers helpers redux styled-components"
GITHUB_RAW_URL="https://raw.githubusercontent.com/searleb/hamish/master"
GITHUB_FOLDER_URL="https://github.com/searleb/hamish/trunk"

if [ "$1" == "install" ]
then
  echo "Installing Create React App"
  npm install -g create-react-app
  echo "Complete"

elif [ "$1" == "test" ]
then
  svn export $GITHUB_FOLDER_URL/esdoc testfolder

elif [ "$1" == "create-app" ]
then
  read -p "What would you like the app name to be? " appname
  create-react-app $appname
  cd ./$appname

  echo "Removing default fies to be replaced"
  cd ./src
  rm App.js App.css index.js index.css logo.svg
  cd ..

  echo "Installing Hamish npm packages: $NPM_PACKAGES $REDUX_PACKAGES"
  npm install --save $NPM_PACKAGES $REDUX_PACKAGES

  echo "Installing Hamish dev packages: $DEV_PACKAGES"
  npm install --save-dev $DEV_PACKAGES

  echo "Pulling ./src folder"
  svn export $GITHUB_FOLDER_URL/src

  echo "Pulling config files"
  curl https://raw.githubusercontent.com/searleb/hamish/master/config/.esdoc.json -o .esdoc.json
  curl https://raw.githubusercontent.com/searleb/hamish/master/config/.env -o .env
  curl https://raw.githubusercontent.com/searleb/hamish/master/config/.eslintrc -o .eslintrc

elif [ "$1" == "help" ]
then
  echo "./hami.sh install    Installs create-react-app"
  echo "./hami.sh create-app    Creates react app with some extra default packages and optionals"

else
  echo "I'm Hamish"
fi
