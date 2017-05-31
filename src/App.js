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
			]
		}
	}
	render() {
		let todos=this.state.todoList.map((item,index)=>{
			return (
				<li key={index}>
					<TodoItem todo={item}/> 
				</li>
			)
		})
		return (
			<div className="App">
				<h1>我的待办</h1>
				<div className="inputWarp">
					<TodoInput content={this.state.newTodo} onsubmit={this.addTodo.bind(this)}/>
				</div>
				<ol className="inputItem">
					{todos}
				</ol>
      		</div>
		)
	}
	addTodo(event){
		this.state.todoList.push({
			id:count(),
			title:event.target.value,
			status:null,
			deleted:false
		})
		this.setState({
			newTodo:'',
			todoList:this.state.todoList
		})
	}
}

export default App;

let id=0

function count(){
	id+=1
	return id
}