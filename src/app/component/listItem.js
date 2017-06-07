/**
 * Created by nikeshhm on 07/06/17.
 */
import React from 'react';

export class ListItem extends React.Component{
    constructor(props){
        super()
        this.state = {
            editing: false
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
        var firstValue = this.props.item.title;
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
                    <input ref='inputValue' defaultValue={this.props.item.title}/>
                </form>
            )
        }else{
            return(
                <span>{this.props.item.title}</span>
                )

        }
    }
    onRemoveHandler(){
        this.props.remove(this.props.item.title)
    }
    onEditingModeRender(){
        if(this.state.editing){
            return(
                <span className="pull-right btnCls">
                    <button className="btn-sm btn-success firstBtn">save</button>
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