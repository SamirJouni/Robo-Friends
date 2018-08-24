import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			robots: [],
			searchField: "",
			uuid: []
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChangeState = event => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const { robots, searchField } = this.state;

		const filteredRobots = robots.filter(robot => {
			return robot.name
				.toLocaleLowerCase()
				.includes(searchField.toLocaleLowerCase());
		});

		if (robots.length === 0) {
			return <h1 className="tc roboTitle">Loading...</h1>;
		} else {
			return (
				<div className="tc">
					<h1 className="roboTitle">RoboFriends</h1>
					<SearchBox searchChangeState={this.onSearchChangeState} />
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
