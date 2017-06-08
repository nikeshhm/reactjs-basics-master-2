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

            ]
        }

    }
    onCreate(name){
        var self = this
        axios.post('https://hub1.eiris.in/testrest/api/', {
            name,
        }).then(function (response) {
            self.onAddStateUpdate(response.data.result)
        }).catch(function (error) {
            console.log(error);
        });
    }
    onAddStateUpdate(value){
        this.state.data.push(value);
        this.setState({data:this.state.data})
    }
    onSaveBtn(newValue,oldValue){
        let getTodo = _.find(this.state.data,(item)=>item._id === oldValue._id)
        getTodo.name = newValue;
        this.setState({
            data:this.state.data
        })
        axios.patch('https://hub1.eiris.in/testrest/api/', oldValue)
            .then(function (response) {
                console.log(response)
            }).catch(function (error) {
            console.log(error);
        });
    }
    onRemoveHandler(value){
         _.remove(this.state.data,(item)=>item._id === value._id)
        this.setState({
            data:this.state.data
        });
        axios.delete('https://hub1.eiris.in/testrest/api/', {params: value})
            .then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error);
             });
    }
    componentWillMount(){
        let self = this
        axios.get('https://hub1.eiris.in/testrest/api/')
            .then(function (response) {
                console.log(response.data.result);
                self.setState({
                    data:response.data.result
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render(){
        return(
          <div className="col-md-6 col-md-offset-3">
             <InputForm createItem={this.onCreate.bind(this)}/>
              <ul className="list-group todo-list">
                  {this.state.data.map((item,index)=><ListItem
                      item={item}
                      key={index}
                      saveChange = {this.onSaveBtn.bind(this)}
                      remove={this.onRemoveHandler.bind(this)}
                  />)}
              </ul>

          </div>
        )
    }
}
render(<App/>,document.getElementById('app'))