import React from 'react';

export class InputForm extends React.Component{
    constructor(){
        super()
    }
    onCreateNewItem(){
        this.props.createItem(this.refs.title.value)
        this.refs.title.value = ' '
    }
    render(){
        return(
            <div>
               <form onSubmit={this.onCreateNewItem.bind(this)}>
                    <div className="form-group formList">
                        <input type="text" className="form-control" ref="title" placeholder="Enter text" />
                    </div>
                    <button type="submit" className="btn btn-default">Create</button>
                </form>
            </div>
        )

    }
}