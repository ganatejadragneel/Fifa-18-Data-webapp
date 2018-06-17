import React from 'react';
import {Groups} from './components/groups';
import {Matches} from './components/matches';
import {Results} from './components/results'
import {KeyPlayers} from './components/keyplayers'
import './App.css';
import imgg from './images/fifalogo.jpg';
import {Button} from 'reactstrap';

class App extends React.Component {
    
	constructor(props){
		super(props)
		this.state={
			page:<Groups/>
		}
		this.handleChangeMatches=this.handleChangeMatches.bind(this);
		this.handleChangeGroups=this.handleChangeGroups.bind(this);
		this.handleChangeResults=this.handleChangeResults.bind(this);
		this.handleChangeKeyPlayers=this.handleChangeKeyPlayers.bind(this);
	}
	
	handleChangeMatches(){
		this.setState({page:<Matches/>})
	}
	
	handleChangeGroups(){
		this.setState({page:<Groups/>})
	}
	
	handleChangeResults(){
		this.setState({page:<Results/>})
	}
	
	handleChangeKeyPlayers(){
		this.setState({page:<KeyPlayers/>})
	}
	
	render() {
		
    return (
	<div>
		<div className="randomSpace1">
			<p></p>
		</div>
		<div className="first">
		<ul>
		<li id="list1">
			<div className="leftimage"><img src={imgg} alt={"Fifa Logo"}/></div>
		</li>
			<div className="header"><li id="list1">	FIFA WORLD CUP RUSSIA 2018</li></div>
		</ul>
		</div>
		<div className="second">
			<div id="but"><Button color="primary" onClick={this.handleChangeGroups}>Groups</Button></div>
			<div id="but"><Button color="secondary" onClick={this.handleChangeMatches}>Matches</Button></div>
			<div id="but"><Button color="success" onClick={this.handleChangeKeyPlayers}>Key Players</Button></div>
			<div id="but"><Button color="info" onClick={this.handleChangeResults}>Results</Button></div>
		</div>
		<div>
			{this.state.page}
		</div>
	</div>
    );
  }
}

export default App;
