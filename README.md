# Friends of Texas Wildlife Website

Redesigned website for [Friends of Texas Wildlife](https://ftwl.org)

## Getting Started

### First Time

1. Change directory to your workspace

    ```$ cd <your workspace>```

2. Clone the git project to your workspace

    ```$ git clone <link to this repo>```

3. Change directory into the ftwl folder

    ```$ cd ftwl2019```

4. Set the origin remote

    ```$ git remote add origin <link to this repo>```

### Developing

1. Pull from the repo each time before you start working in case someone pushed some changes

   ```$ git pull origin master```

2. Create a new branch

    ```$ git branch <your branch name here>```

3. Check out (switch) to your new branch

    ```$ git checkout <your branch name here>```

    A shortcut for steps 2-3 is just running `$ git checkout -b <your branch name here>`

4. Make your changes
5. Add and commit your changes

    `$ git add .`

    `$ git commit -m '<your commit message here>'`

6. Repeat steps 4-5 until you're ready to push your changes

### When you're ready to push

This assumes you've followed the instructions in the Developing section.

1. Make sure your code is clean, easily understandable, and formatted properly (run the formatter)
2. Push your branch to Github

    `$git push origin <your branch name here>`

3. Go to the Github repo on your browser, and click on the Pull Request button
4. Wait for someone to approve or request changes to your pull request

### Developing Locally

`$ npm run dev`

Runs the website locally in development mode with hot reloading.


### Deployment

`$ npm run deploy`
Creates a production build of the website, exports this build to the docs folder, creates the CNAME file and stages all changes for commit.

### Repository Structure

1. All of the components that make up the pages can be found in the components directory.
2. Each Component will have a CSS file, a JS file, and some will have a JSON file that contains the content of of the component.
3. Some general components that are used in mulitple places are in the root directory of the components directory, the others are organized by the page of the website they occur at.
4. The static images and SVGs are located in the static directory.
5. The pages of the website are located in the pages directory, each page contains its page specific components as well as the navbar, header, and footer components.
6. The build files are exported to the docs folder after they are compiled, as part of the `$ npm run deploy` command, the gh-pages site is configured to pull from this folder in the master branch. 
