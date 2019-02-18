import React, { Component } from 'react';
import './questionTopic.css';
import { NavLink } from 'react-router-dom';
import $ from "jquery";
import questionsComplexities from "../services/questionsComplexity.json"

class QuestionComplexity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ComplexityName: '',
            acronym: ''

        }
    }
    handleComplexityEdit(data) {
        this.setState({
            ComplexityName: data.name,
            acronym: data.acronym
        })
    }

    handleName(e) {
        this.setState({
            ComplexityName: e.target.value
        })
    }

    handleAcronym(e) {
        this.setState({
            acronym: e.target.value
        })
    }

    handleSave() {
        alert(this.state.ComplexityName + "       " + this.state.acronym);
    }

    handleComplexity = () => {
        var name = $("#name").val();
        var acronym = $("#acronym").val();
        var status = $("#status").val();
        var qtypebutton = $("#qtypebutton").val();
        var markup = '<tr><td><input type="text" id="name"/></td><td><input type="text" id="acronym"/></td><td><label class="switch" id="status"><input type="checkbox"  /><span class="slider round"></span></label></td><td><button type="button" id="qtypebutton" class="btn btn-primary" value="edit">edit</button></td></tr>';
        $('#trs').before(markup);

    }
    render() {
        return (
            <div>
                <div>
                    <br />
                    <button type="button" id="add-row" value="add question Complexity" class="btn btn-primary" onClick={this.handleComplexity}>Add Question Complexity</button>
                </div>
                <div>
                    <br />
                    <br />
                    <table id="tbl" class="table table-bordered table-striped text-center" >
                        <thead class="thead-light">
                            <tr><th>Name</th><th>Acronym</th><th>Status</th><th>Action</th></tr></thead>
                        <tbody>
                            {questionsComplexities.map((questionsComplexity, index) => {
                                return <tr>
                                    <td>{questionsComplexity.name}</td>
                                    <td >{questionsComplexity.acronym}</td>
                                    <td>
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" value="Edit" onClick={() => { this.handleComplexityEdit(questionsComplexity) }}>Edit</button>
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
                                <b> Edit Question </b>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <input type="textbox" class="form-control" defaultValue={this.state.ComplexityName} onChange={(e) => { this.handleName(e) }} /><br />
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
export default QuestionComplexity;