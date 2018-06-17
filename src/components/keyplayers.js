import React from 'react'
import { Badge } from 'reactstrap';
import './keyplayers.css'

export class KeyPlayers extends React.Component{
	render(){
		return(
			<div>
				<div className="outerbox">
					<h2 className="badge"><Badge color="success">#1 - Lionel Messi (Argentina)</Badge></h2>
				</div>
			</div>
	);
	}
}