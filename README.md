<h1 align="center">Haiku App</h1>

Matthew Eilar | [LinkedIn](https://www.linkedin.com/in/eilar-503/)    | [email](mailto:<meilar@gmail.com>) | [website](https://www.mattheweilar.com)
Mikah Mathews | [LinkedIn](https://www.linkedin.com/in/mikah-mathews) | [email](mailto:<mikah@outofband.org>)

## About this project

This is a simple web based app that takes in a user's text box and returns whether that text is a haiku.

## Get Started

### The Hard Way
- Ensure that you have installed the latest versions of Git ([instructions](https://github.com/git-guides/install-git)) and Node.js ([instructions](https://nodejs.org/en/download/))
- In your command line, clone this repository using `$ git clone https://github.com/meilar/{CHANGE_ME}`
- Navigate to the project directory, then install the reqired project dependencies with `$ npm init` followed by `$ npm install` 
- To run test suites, use the command `$ npm run test` 
- To build and view the project in your default browser, use the command `$ npm run start` to deploy a webpack development server. Please note that Google Chrome may be required to use all features. 

## Technologies Used

This site incorporates the following frameworks and languages:

- HTML 5
- CSS 3
- jQuery 3.6.0
- Bootstrap 4.5
- Node Package Manager/Node.js
- A full list of libraries and dependencies can be viewed on this project's `package.json` configuration file

The following development tools were used to develop this page:

- VS Code
- Google Chrome
- Git

## License 

MIT License

© 2022 Matthew Eilar and Mikah Mathews

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Notes
have function to validate input? no numbers - punctuation is ok
haiku has 3 lines
line 1 has 5 syllables
line 2 has 7 syllables
line 3 has 5 syllables
function to parse input into lines 1/2/3 (output = 3 strings)
syllable counter that gets run on each line - returns number of syllables
overall return statement is json object with key pair values/properties - one could be rule, one is bool if it passes that rule

```json object
{
  line1has5syllables = true;
  line2has7syllables = true;
  line3has5syllables = true;
}```

syllable counter input = a line of text (string) "man dog is best friend"
run regex counter tracking # of occurances
syllable counter output = int (5)
