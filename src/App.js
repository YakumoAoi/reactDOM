import React, { Component } from 'react';
import './App.css';
import todoItem from './todoItem'

class App extends Component {
	constructor(props){
		super(props)
		this.state={
			newTodo:"test",
			todoList:[
				{
					id:1,
					title:"第一件事"
				},
				{
					id:2,
					title:"第二件事"
				},
				{
					id:3,
					title:"第三件事"
				}
			]
		}
	}
	render() {
		let todos=this.state.todoList.map((item,index)=>{
			return (
				<li>
					<todoItem todo={item}/> 
				</li>
			)
		})
		return (
		<div className="App">
			<h1>我的待办</h1>
			<div className="inputWarp">
				<input type='text' value={this.props.newTodo}/>
			</div>
			<ol>
				<todos/>
			</ol>
      	</div>
    	)
  	}
}

export default App;
