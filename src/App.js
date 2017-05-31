import React, { Component } from 'react';
import 'normalize.css'
import './reset.css'
import './App.css';
import TodoItem from './todoItem'
import TodoInput from './todoInput'

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
					<TodoItem todo={item}/> 
				</li>
			)
		})
		return (
		<div className="App">
			<h1>我的待办</h1>
			<div className="inputWarp">
				<TodoInput content={this.state.newTodo}/>
			</div>
			<ol className="inputItem">
				{todos}
			</ol>
      	</div>
    	)
  	}
}

export default App;
