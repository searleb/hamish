# Install Create React app
# Create a new React app
#
#!/bin/bash

NPM_PACKAGES="axios prop-types react-router-dom"
REDUX_PACKAGES="redux react-redux redux-thunk"

if [ "$1" == "install" ]
then
  echo "Installing Create React App"
  npm install -g create-react-app
  echo "Complete"

elif [ "$1" == "create-app" ]
then
  echo "What would you like the app name to be?"
  read appname
  create-react-app $appname
  cd ./$appname
  npm install --save $NPM_PACKAGES

  echo "Install Redux? Y/n"
  read redux
  if [ $redux == "Y" ]
  then
    npm install --save $REDUX_PACKAGES
  fi

  echo "Install Styled Components? Y/n"
  read styled
  if [ $styled == "Y" ]
  then
    npm install --save styled-components
  fi
  echo "Complete"

elif [ "$1" == "help" ]
then
  echo "./hami.sh install    Installs create-react-app"

else
  echo "I'm Hamish"
fi
