import React, { Component } from 'react';
import logo from './logo.svg';
import MainCard from './MainCard/MainCard';
import './App.css';

// 8-13-19 WimHof-Breaths
// 1st=11:15, 2nd==11:24, 3rd=11:31XX, 4th=11:46x, 5th=11:50,
// 6th=12:06X, 7th=12:20X, 8th=12:27, 9th=12:33x, 10th=12:36x,
// 11th=12:38, 12th=12:46, 13th=12:55x, 14th=12:57, 15th=1:07x,
// 16th=1:10x, 17th=1:12, 18th=1:21x, 19th=1:28, 20th=1:36x,
// 21st=1:41, 22nd=1:48, 23rd=2:06x, 24th=2:10, 25th=2:23x,
// 26th=2:24, 27th=2:38x, 28th=3:48X, 29th=4:09,

class App extends Component {

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <MainCard />
        </header>
      </div>
    );
  }
}

export default App;
