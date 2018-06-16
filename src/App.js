import React from 'react';
import {Groups} from './components/groups';
import './App.css';
import imgg from './images/fifalogo.jpg';
import {Button} from 'reactstrap';

class App extends React.Component {
    
	constructor(props){
		super(props)
		this.state={
			
		}
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
			<div id="but"><Button color="primary">Groups</Button></div>
			<div id="but"><Button color="secondary">Matches</Button></div>
			<div id="but"><Button color="success">Fixtures</Button></div>
			<div id="but"><Button color="info">Results</Button></div>
			<div id="but"><Button color="warning">News</Button></div>
		</div>
	</div>
    );
  }
}

export default App;
