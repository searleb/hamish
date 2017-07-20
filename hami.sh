# Install Create React app
# Create a new React app with some default packages
# Redux option
# Styled Components option
#
#
#!/bin/bash

NPM_PACKAGES="axios prop-types react-router-dom styled-components"
REDUX_PACKAGES="redux react-redux redux-thunk"
FOLDERS="api components containers helpers redux styled-components"
GITHUB_URL="https://raw.githubusercontent.com/searleb/hamish/master"

if [ "$1" == "install" ]
then
  echo "Installing Create React App"
  npm install -g create-react-app
  echo "Complete"

elif [ "$1" == "test" ]
then
  echo $GITHUB_URL/api/config.js -o api/config.js
  read tester

elif [ "$1" == "create-app" ]
then
  read -p "What would you like the app name to be? " appname
  create-react-app $appname
  cd ./$appname

  echo "Installing Hamish defaults: $NPM_PACKAGES $REDUX_PACKAGES"
  npm install --save $NPM_PACKAGES $REDUX_PACKAGES
  echo "Installed packages"

  echo "Creating folders"
  cd src
  mkdir $FOLDERS
  echo "Created folders"

  echo "Setting up API config"
  curl $GITHUB_URL/api/config.js -o api/config.js
  echo "Done"





  # read -p "Install Redux? Y/n" redux
  # if [ $redux == "Y" -o $redux == "y" ]
  # then
  #   echo "Installing: $REDUX_PACKAGES"
  #   npm install --save $REDUX_PACKAGES
  # fi
  #
  # read -p "Install Styled Components? Y/n" styled
  # if [ $styled == "Y" -o $styled == "y" ]
  # then
  #   npm install --save styled-components
  # fi

  # read -p "Install esdoc? Y/n" esdoc
  # if [ $esdoc == "Y" -o $esdoc == "y" ]
  # then
  #   npm install --save-dev esdoc
  #   curl https://raw.githubusercontent.com/searleb/hamish/master/esdoc/.esdoc.json -o .esdoc.json
  # fi
  # echo "Complete"

elif [ "$1" == "help" ]
then
  echo "./hami.sh install    Installs create-react-app"
  echo "./hami.sh create-app    Creates react app with some extra default packages and optionals"

else
  echo "I'm Hamish"
fi
