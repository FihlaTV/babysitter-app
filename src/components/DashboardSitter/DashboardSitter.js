import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import * as actions from '../../actions';
import BioSitterForm from '../BioSitter/BioSitterForm';
import {searchParents} from '../../actions/parents';

import './DashboardSitter.css';

export class DashboardSitter extends Component{
	componentDidMount(){
			this.props.dispatch(actions.toggleView('sitter'));
			this.props.dispatch(searchParents(this.props.location));
	}

	render(){
		if(this.props.createdBios.length === 0){
			return(
				<div className="parentalBioForm">
					<BioSitterForm />
				</div>
			)
		}
		let localParentList;
		localParentList = this.props.localParents.map((item, index) =>

				<div key={index}>
					<ul>
						<li className="parentFirstName">Name: {item.parentUserID.firstName}</li>
						<li className="parentLocation">Location: {item.location}</li>
						{/* <Moment className="availability" format='MM/DD/YYYY'><li className="dateAvailable">Date Available: {item.dateAvailable}</li></Moment > */}
						<li className="ageOfChild">Child Age: {item.ageOfChild}</li>
						<li className="dateNeeded"> {item.dateNeeded}</li>	
						<li className="startTime">Start Time: {item.startTime}</li>
						<li className="endTime">End Time: {item.endTime}</li>
						<li className="additionalInfo">Additional Info: {item.additionalInfo}</li>
					</ul>
						<button className="contactParentButton">Contact Parent</button>
				</div>
				)
			return(
					<div>
						{localParentList}
					</div>
			)
	}
}

const mapStateToProps = state => ({
	userId: state.auth.currentUser.id,
	createdBios: state.sitters.createdBio,
	location: state.auth.currentUser.zipcode,
	localParents: state.parents.zipcodeSearches,
})

export default connect(mapStateToProps)(DashboardSitter);
