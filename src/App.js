import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';


class App extends Component {

	constructor () {
		super ();

		this.state = {
			robots: [],
			searchField: '',
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(

		response => {
			return response.json();

		}).then(users=> {
			this.setState({robots: users})
		});
	}


	onSearchChangeState = (event) => {

		this.setState({searchField: event.target.value})
	}

	render () {

		const filteredRobots = this.state.robots.filter( (robot) => {
			return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
		});

		return (
			<div className='tc'>
				<h1 className='roboTitle'>RoboFriends</h1>
				<SearchBox searchChangeState = {this.onSearchChangeState}/>
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default App;