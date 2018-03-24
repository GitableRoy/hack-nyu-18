

# HACK NYU 18: Project

Our project for HackNYU 2018

[TOC]

## Setup

### SOFTWARE

 - Code Text Editor: [Atom](https://atom.io/) 
- Markdown Editor: [Typora](https://typora.io/)
- Terminal: [Iterm2](https://www.iterm2.com/)

### ENVIROMENT

#### 1. Homebrew

Go to Hombrew's [website](https://brew.sh/) and follow installation instructions

#### 2. NodeJS

Once Homebrew is installed, install NodeJS by typing in Terminal `brew install node`

#### 3. EnduroJS

Once NodeJS is installed, install EnduroJS by typing `npm i -g enduro`

### Starting the project

1. Go to our [repository](https://github.com/GitableRoy/hack-nyu-18) to view it
2. Click **"Clone or Download"** and copy the link
3. Go to your Terminal (Iterm2)
4. Change directory to where you want folder to be: `cd ~/Desktop`
5. Clone repository: `git clone https://github.com/GitableRoy/hack-nyu-18.git`
6. Change directory to repository: `cd ./hack-nyu-18`
7. Change to the developer branch: `git checkout dev`
8. Make sure `dev` branch is up-to-date: `git pull origin dev`
9. Open directory with Atom: `atom .`
10. Run project with: `npm run dev`

#### Linking Atom to Terminal

- Open Atom (`command-spacebar` for spotlight, type `Atom`, and hit enter).
- Click the `Atom` menu in the top left corner
- Click `Install Shell Commands`
- Return to your terminal and enter `which atom`. You should get back `/usr/local/bin/atom`
- Enter `atom .` to open your user directory in Atom.