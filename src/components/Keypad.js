// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
  logSomeThing() {
<<<<<<< HEAD
    console.log('Entering password...');
=======
    console.log('Entering password ...');
>>>>>>> 50c6af458530a443b3a2d7ee2ad032e63885e6c6
  }
  render() {
    return (
      <input type="password" onKeyUp={this.logSomeThing} />
    )
  }
}
