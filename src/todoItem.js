import React from 'react'
class todoItem extends React.Component{
    render(){
        return <div>{this.props.todo.title}</div>
    }
}
export default todoItem