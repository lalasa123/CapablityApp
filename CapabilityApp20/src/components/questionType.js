import React, { Component } from "react";

import questionTypeData from "../services/questionsType.json";

class QuestionType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addType: false,
      typeData: questionTypeData,
      editElement: -1,
      name: '',
      acronym: '',
      RecordsData:{
          name:'',
          acronym:''
        }
      
    };
  }

  handleChoice = () => {
    if (this.state.addType == false) {
      this.setState({
        addType: true
      });
    }
  };
  handleEdit(data,id) {
    this.setState({
      name:data.name,
      acronym:data.acronym,
      editElement: id
    });
  }

  handleSave(index) {
     const dummyRecord = this.state.RecordsData;
     dummyRecord.name=this.state.name;
     dummyRecord.acronym=this.state.acronym;
    const dummytypeData = this.state.typeData;
    dummytypeData[index] = dummyRecord;
    this.setState({
           RecordsData:dummyRecord,
           editElement:-1,
           typeData:dummytypeData,
     
      name:'',
     acronym:'',
      RecordsData:{
        name:'',
        acronym:''
      }
    });
  }

  handleName(e){
    this.setState({
      name: e.target.value
    });
  };
  handleAcronym(e){
    this.setState({
      acronym:e.target.value
    })
  }
  handleSaveData(){
      const dummyRecordsData=this.state.RecordsData;
      dummyRecordsData.name=this.state.name;
      dummyRecordsData.acronym=this.state.acronym;
      const dummytypeData=this.state.typeData;
      dummytypeData[this.state.typeData.length+1]=dummyRecordsData;
      this.setState({
          RecordsData:dummyRecordsData,
          editElement:-1,
          typeData:dummytypeData,
          addType:false,
          name:'',
          acronym:'',
          RecordsData:{
              name:'',
              acronym:''
          }
      })
  }
  render() {
    
    const typeData =this.state.typeData.map((item, index) => {
      return (
      <tr>
            <td>
              {this.state.editElement === index ? <input type="text" className="form-control"  onChange={(e) => {this.handleName(e)}} defaultValue={item.name} />:item.name}</td>

            <td>
              {this.state.editElement === index ? 
            <input type="text" className="form-control"   onChange={e =>{this.handleAcronym(e)}} defaultValue={item.acronym}/>: item.acronym}
            </td>
            <td><label class="switch" id="status"><input type="checkbox" /><span class="slider round"></span></label></td>
            <td>
              <div>
                {this.state.editElement === index ? <button type="button" className="btn btn-primary"   onClick={() =>{this.handleSave(index)}}>save</button>
                : <button type="button" className="btn btn-primary"  onClick={() =>{this.handleEdit(item,index)}}>edit</button>
                }
              </div>
            </td>
          </tr>
        
    );
    });

    return (
      <div>
        <div>
          <br />
          <button
            type="button"
            id="add-row"
            value="add question choice"
            className="btn btn-primary"
            onClick={this.handleChoice}
          >
            Add Question Type
          </button>
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
            <tr style={{ display: this.state.addType == true ? "contents" : "none" }}>
              <td>
                <input type="text" id="name" className="form-control" value={this.state.name} onChange={(e)=>{this.handleName(e)}}/>
              </td>
              <td>
                <input type="text" id="acronym" className="form-control" value={this.state.acronym} onChange={(e)=>{this.handleAcronym(e)}} />
              </td>
              <td><label class="switch" id="status"><input type="checkbox" /><span class="slider round"></span></label></td>
              <td>
                <button
                  type="button"
                  id="qtopicbutton"
                  className="btn btn-primary"
                  value="edit"
                  onClick={(e) => this.handleSaveData(e)}
                >
                  Save
                </button>
              </td>
            </tr>
            {typeData}
          </tbody>
        </table>
      </div>
    );
  }
}

export default QuestionType;
