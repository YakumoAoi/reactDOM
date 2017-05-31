import React from 'react'

class TodoInput extends React.Component{
    render(){
        return <input type='text' value={this.props.content}
        onKeyPress={this.submit.bind(this)}
        onChange={this.changetitle.bind(this)}/>
    }
    submit(e){
        if(e.key === "Enter"){
            this.props.onsubmit(e)
        }
    }
    changetitle(e){
        this.props.onChange(e)
    }
}
export default TodoInput