
import React from 'react';

export class ListItem extends React.Component{
    constructor(props){
        super();
        this.state = {
            editing: false,
            checked:props.item.checked
        }
    }
    onShowEditMode(){
        this.setState({
            editing:true
        })
    }
    onShowViewMode(){
        this.setState({
            editing:false
        })
    }
    onEditingInputValue(){
        var firstValue = this.props.item
        var newValue = this.refs.inputValue.value;
        this.props.saveChange(newValue,firstValue)
        this.setState({
            editing:false
        })
    }
    onEditChangeToInput(){
        if(this.state.editing){
            return(
                <form onSubmit={this.onEditingInputValue.bind(this)} className="formListCls">
                    <input ref='inputValue' defaultValue={this.props.item.name}/>
                </form>
            )
        }else{
            return(
                <span>
                    <span className="nameCls">{this.props.item.name}</span>
                </span>
                )

        }
    }

    onRemoveHandler(){
        this.props.remove(this.props.item)
    }
    onEditingModeRender(){
        if(this.state.editing){
            return(
                <span className="pull-right btnCls">
                    <button className="btn-sm btn-success firstBtn" onClick={this.onEditingInputValue.bind(this)}>save</button>
                    <button className="btn-sm btn-info" onClick={this.onShowViewMode.bind(this)}>cancel</button>
                </span>
            )
        }else{
            return(
                <span className="pull-right btnCls">
                    <button className="btn-sm btn-primary firstBtn" onClick={this.onShowEditMode.bind(this)}>Edit</button>
                    <button className="btn-sm btn-danger" onClick={this.onRemoveHandler.bind(this)}>Delete</button>
                </span>
            )
        }

    }
    render(){
        return(
            <li className="list-group-item">
                {this.onEditChangeToInput()}
                {this.onEditingModeRender()}
            </li>
        )
    }
}