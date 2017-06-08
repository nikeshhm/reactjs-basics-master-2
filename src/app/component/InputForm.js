import React from 'react';

export class InputForm extends React.Component{
    constructor(){
        super()
    }
    onCreateNewItem(event){
       event.preventDefault();
        if(this.refs.name.value !== ' '){
            this.props.createItem(this.refs.name.value)
            this.refs.name.value = ' '
        }
    }
    render(){
        return(
            <div>
               <form onSubmit={this.onCreateNewItem.bind(this)}>
                    <div className="form-group formList">
                        <input type="text" className="form-control" ref="name" placeholder="Enter text" />
                    </div>
                    <button type="submit" className="btn btn-default">Create</button>
                </form>
            </div>
        )

    }
}