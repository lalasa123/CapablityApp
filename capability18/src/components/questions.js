import React, { Component } from 'react';
import './questions.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery'
import questionsDatas from "../services/questions.json"

class Questions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            qName: '',
            qType: '',
            qComplexity: ''
        }
    }

    handleEdit(data) {
        this.setState({
            id: data.id,
            qName: data.questionName,
            qType: data.questionType,
            qComplexity: data.questionComplexity
        })
    }

    handleSave() {
        var  data=this.state.qName;
        alert(data);
    }

    handleQuetionName(e) {
        this.setState({
            qName:e.target.value
        });
    }

    handleQuetionType(e) {
        this.setState({
            qType:e.target.value
        });
    }

    handleQuetionComplexity(e) {
        this.setState({
            qComplexity:e.target.value
        });
    }
    

    render() {
        return (
            <div>
                <div>
                    <br />
                    <button type="button" id="btn" value="add question" class="btn btn-primary" ><NavLink to='/questionsPage'>Add Question</NavLink></button>
                </div>
                <br />
                <br />
                <div>
                    <table id="tblQues" class="table table-bordered table-striped text-center">
                        <thead class="thead-light">
                            <tr>
                                <th>S.No</th><th>Questions</th><th>Type</th>
                                <th>Complexity</th><th>Status</th><th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questionsDatas.map((questionsData, index) => {
                                return <tr>
                                    <td>{questionsData.id}</td>
                                    <td >{questionsData.questionName}</td>
                                    <td>{questionsData.questionType}</td>
                                    <td>{questionsData.questionComplexity}</td>
                                    <td>
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" value="Edit" onClick={() => { this.handleEdit(questionsData) }}>Edit</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>


                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">

                        <div class="modal-content">
                            <div class="modal-header">
                                <b> Edit Quetion </b>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <input type="textbox"  class="form-control" defaultValue={this.state.qName} onChange={(e) => { this.handleQuetionName(e) }}/><br />
                                <input type="textbox"  class="form-control" defaultValue={this.state.qType} onChange={(e) => { this.handleQuetionType(e) }}/><br />
                                <input type="textbox" class="form-control" defaultValue={this.state.qComplexity} onChange={(e) => { this.handleQuetionComplexity(e) }}/>
                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Questions;