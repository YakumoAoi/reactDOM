import React from 'react'
import './todoItem.css'

class todoItem extends React.Component{
    render(){
        return (
            <div className="todoitem">
                <input type="checkbox" checked={this.props.todo.status==='completed'} onChange={this.toggle.bind(this)}/>
                <span className="input">{this.props.todo.title}</span>
                <button onClick={this.delete.bind(this)}>删除</button>
            </div>
        )
    }
    toggle(e){
        this.props.onToggle(e,this.props.todo)
    }
    delete(e){
        this.props.onDelete(e,this.props.todo)
    }
}
export default todoItem