import React, { Component } from 'react';
import './questionTopic.css';
import questionTopicData from '../services/questionsType.json';


class QuestionTopic extends Component {
  constructor(props) {
    super(props);
this.state = {
    topicData: questionTopicData,
    addTopic: false,
     editElement:-1,
     name:'',
     acronym:'',
    status:true,   
     Record:{
       name:'',
       acronym:''
     }
    }
    }
handleName(e){
  this.setState({
    name:e.target.value
  })
 
}
 handleAcronym(e){
   this.setState({
     acronym:e.target.value
   })
   console.log(this.state.acronym);
 }
handleChoice = () => {
 
  if(this.state.addTopic === false) {
    this.setState({
      addTopic: true
    });
  }
    
}
handleEdit(data,id) {
  
  this.setState({
    name:data.name,
    acronym:data.acronym,
    editElement: id
  });
}
handleStatus(index){
if(this.state.editElement===index){
this.setState({
  status:false
})
}
}
handleSave(index) {
  const dummyRecord = this.state.Record;
  dummyRecord.name=this.state.name;
  dummyRecord.acronym=this.state.acronym;
 const dummytopicData = this.state.topicData;
 dummytopicData[index] = dummyRecord;
 this.setState({
        editElement:-1,
        topicData:dummytopicData,
       name:'',
       acronym:'',
        Record:{
     name:'',
     acronym:''
   }
 });
}
handleSaveData(){
  const dummyRecord = this.state.Record;
  dummyRecord.name=this.state.name;
  dummyRecord.acronym=this.state.acronym;
 const dummytopicData = this.state.topicData;
 dummytopicData[this.state.topicData.length+1] = dummyRecord;
 this.setState({
       Record:dummyRecord,
       topicData:dummytopicData,
       editElement:-1,
       addTopic: false,
       name:'',
       acronym:'',
        Record:{
          name:'',
          acronym:'',
        }
       });
}

  render() {    
    const topicData = this.state.topicData.map((item, index) => {
      return (
        <tr>
          <td>{this.state.editElement===index ? <input type='text'className="form-control" onChange={(e)=>{this.handleName(e)}} defaultValue={item.name}/>:item.name}</td>
           <td>{this.state.editElement===index ? <input type='text' className="form-control" onChange={(e)=>{this.handleAcronym(e)}} defaultValue={item.acronym}/>:item.acronym}</td>
          <td>
              <label className="switch" id="status">
                <input type="checkbox"  onClick={()=>{this.handleStatus(index)}}/>
                <span class="slider round" />
              </label>
            </td>
          <td>
          <div>{this.state.editElement===index ?<button type="button" className="btn btn-primary" onClick={()=>{this.handleSave(index)}}>Save</button> :
          <button type="button" className="btn btn-primary" onClick={(e)=>{this.handleEdit(item,index)}}>Edit</button>
          }
              
           </div>
            
          </td>
          
        </tr>
      )
    });
    
    
    return (
      <div>
        <div>
            <br />
                    <button type="button" id="add-row" value="add question topic" className="btn btn-primary" onClick={this.handleChoice}>Add Question Topic</button>
        </div>
            <br />
       
        <table className="table table-striped">
        <thead className="thead-light">
            <th>Name</th>
            <th>Acronym</th>
            <th>Status</th>
            <th>Action</th>
            </thead>
          <tbody>
          <tr style={{display: this.state.addTopic ? 'contents' : 'none'}}>
            <td><input type="text"   className="form-control"  value={this.state.name} onChange={(e) => this.handleName(e)} /></td>
            <td><input type="text"  className="form-control"  value={this.state.acronym} onChange={(e) => this.handleAcronym(e)} /></td>
            <td>
              <label className="switch" id="status">
                <input type="checkbox" />
                <span className="slider round" />
              </label>
            </td>
            <td><button type="button" id="qtopicbutton" className="btn btn-primary" value="edit" onClick={()=>{this.handleSaveData()}}>Save</button></td>
          </tr>
            {topicData}
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default QuestionTopic;