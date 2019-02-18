import React, { Component } from 'react';
import './questionTopic.css';
import { NavLink } from 'react-router-dom';
import $ from "jquery";
import questionsTopics from "../services/quetionstopic.json"

class QuestionTopic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topicName: '',
            acronym: '',
            markup: ''

        }
    }
    handleTopicEdit(data) {
        this.setState({
            topicName: data.name,
            acronym: data.acronym
        })
    }

    handleName(e) {
        this.setState({
            topicName: e.target.value
        })
    }

    handleAcronym(e) {
        this.setState({
            acronym: e.target.value
        })
    }

    handleSave() {
        alert(this.state.topicName + "       " + this.state.acronym);
    }
    handleSaveData = () => {
        alert("Hi From Save");
    }

    handleTopic = () => {
        this.setState({
            markup:
                <table class="table table-bordered table-striped text-center" >
                    <thead class="thead-light">
                        <tr><th>Name</th><th>Acronym</th><th>Status</th><th>Action</th></tr></thead>
                    <tbody>
                        <tr><td><input type="text" id="name" /></td><td><input type="text" id="acronym" /></td><td><label class="switch" id="status"><input type="checkbox" /><span class="slider round"></span></label></td><td><button type="button" id="qtopicbutton" class="btn btn-primary" value="edit" onClick={this.handleSaveData}>Save</button></td></tr>
                    </tbody>
                </table>

        })
    }
    render() {
        return (
            <div>
                <div>
                    <br />
                    <button type="button" id="add-row" value="add question topic" class="btn btn-primary" onClick={this.handleTopic}>Add Question Topic</button>
                </div>
                <br />
                <div>
                    {this.state.markup}
                </div>
                <div>
                    <br />
                    <br />
                    <table id="tbl" class="table table-bordered table-striped text-center" >
                        <thead class="thead-light">
                            <tr><th>Name</th><th>Acronym</th><th>Status</th><th>Action</th></tr></thead>
                        <tbody>
                            {questionsTopics.map((questionsTopic, index) => {
                                return <tr>
                                    <td>{questionsTopic.name}</td>
                                    <td >{questionsTopic.acronym}</td>
                                    <td>
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" value="Edit" onClick={() => { this.handleTopicEdit(questionsTopic) }}>Edit</button>
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
                                <input type="textbox" class="form-control" defaultValue={this.state.topicName} onChange={(e) => { this.handleName(e) }} /><br />
                                <input type="textbox" class="form-control" defaultValue={this.state.acronym} onChange={(e) => { this.handleAcronym(e) }} /><br />
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
export default QuestionTopic;