import React from 'react';
import {render} from 'react-dom';
import _ from 'lodash'
import axios from 'axios';
import {InputForm} from './component/InputForm'
import {ListItem} from './component/listItem'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            data:[
                {title:'game 1'},
                {title:'game 2'},
            ]
        }

    }
    onCreate(title){
        this.state.data.push({
            title
        })
        this.setState({data:this.state.data})
    }
    onSaveBtn(newValue,oldValue){
        let getTodo = _.find(this.state.data,(item)=>item.title === oldValue)
        getTodo.title = newValue;
        this.setState({
            data:this.state.data
        })
    }
    onRemoveHandler(value){
         _.remove(this.state.data,(item)=>item.title === value)
        this.setState({
            data:this.state.data
        })
    }
    render(){
        return(
          <div className="col-md-6 col-md-offset-3">
             <InputForm createItem={this.onCreate.bind(this)}/>
              <ul className="list-group">
                  {this.state.data.map((item,index)=><ListItem item={item} key={index} saveChange = {this.onSaveBtn.bind(this)} remove={this.onRemoveHandler.bind(this)}/>)}
              </ul>
          </div>
        )
    }
}
render(<App/>,document.getElementById('app'))