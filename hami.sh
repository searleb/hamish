# Install Create React app
# Create a new React app with:
# react router
# redux
# axios
# styled components
# normalize.css
# redux form
# grid styled
# esdoc
# eslint
#
#!/bin/bash

PACKAGES="axios prop-types react-router-dom styled-components normalize.css redux-form grid-styled"
REDUX_PACKAGES="redux react-redux redux-thunk"
DEV_PACKAGES="esdoc eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y@5 eslint-plugin-react"
FOLDERS="api components containers pages helpers redux styled-components"
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

elif [ "$1" == "go" ]
then
  read -p "What would you like the app name to be? " appname
  create-react-app $appname
  cd ./$appname

  echo "Removing default files to be replaced"
  cd ./src
  rm App.js App.css index.js index.css logo.svg
  cd ..

  mv ./src ./temp

  if which yarn > /dev/null; then
    echo "Installing Hamish packages with yarn: $PACKAGES $REDUX_PACKAGES"
    yarn add $PACKAGES $REDUX_PACKAGES
    echo "Installing Hamish dev packages with yarn: $DEV_PACKAGES"
    yarn add $DEV_PACKAGES --dev
  else
    echo "Installing Hamish packages with npm: $PACKAGES $REDUX_PACKAGES"
    npm install --save $PACKAGES $REDUX_PACKAGES
    echo "Installing Hamish dev packages with npm: $DEV_PACKAGES"
    npm install --save-dev $DEV_PACKAGES
  fi

  echo "Pulling ./src folder"
  svn export $GITHUB_FOLDER_URL/src
  cp ./temp/App.test.js ./src/App.test.js
  cp ./temp/registerServiceWorker.js ./src/registerServiceWorker.js
  rm -rf ./temp

  echo "Pulling config files"
  curl https://raw.githubusercontent.com/searleb/hamish/master/config/.esdoc.json -o .esdoc.json
  curl https://raw.githubusercontent.com/searleb/hamish/master/config/.env -o .env
  curl https://raw.githubusercontent.com/searleb/hamish/master/config/.eslintrc -o .eslintrc
  curl https://raw.githubusercontent.com/searleb/hamish/master/hami.sh -o hami.sh
  chmod +x hami.sh


  if which yarn > /dev/null; then
    yarn start
  else
    npm run start
  fi

elif [ "$1" == "new" ]
create() {
  read -p "$1 name? " name
  mkdir ./src/$1s/$name
  echo "export { default as $name } from './$name/$name'" >> ./src/$1s/index.js
  cd ./src/$1s/$name
  touch ./$name.js
  touch ./$name.test.js
  echo "$name was created"
  break
}
then
  options=("page" "container" "component" "quit")
  select opt in "${options[@]}"
  do
    case $opt in
    "page")
        create $opt
        ;;
    "container")
        create $opt
        ;;
    "component")
        create $opt
        ;;
    "quit")
        break
        ;;
    *) echo invalid option;;
esac
done

elif [ "$1" == "help" ]
then
  echo "./hami.sh install    Installs create-react-app"
  echo "./hami.sh go    Creates react app and adds redux, routing, axios and config"
  echo "./hami.sh new    Creates a new page, container or component folder with [name].js and [name].test.js"

else
  echo "I'm Hamish!"
fi
