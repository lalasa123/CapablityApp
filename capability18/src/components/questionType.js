import React, { Component } from 'react';
import './questionTopic.css';
import { NavLink } from 'react-router-dom';
import $ from "jquery";
import questionsTypes from "../services/questionsType.json"

class QuestionType extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeName: '',
            acronym: ''

        }
    }
    handleTypeEdit(data) {
        this.setState({
            typeName: data.name,
            acronym: data.acronym
        })
    }

    handleName(e) {
        this.setState({
            typeName: e.target.value
        });
    }

    handleAcronym(e) {
        this.setState({
            acronym: e.target.value
        });
    }

    handleSave() {
        alert(this.state.typeName + "       " + this.state.acronym);
    }

    handleTopic = () => {
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
                    <button type="button" id="add-row" value="add question type" class="btn btn-primary" onClick={this.handleType}>Add Question Type</button>
                </div>
                <div>
                    <br />
                    <br />
                    <table id="tbl" class="table table-bordered table-striped text-center" >
                        <thead class="thead-light">
                            <tr><th>Name</th><th>Acronym</th><th>Status</th><th>Action</th></tr></thead>
                        <tbody>
                            {questionsTypes.map((questionsType, index) => {
                                return <tr>
                                    <td>{questionsType.name}</td>
                                    <td >{questionsType.acronym}</td>
                                    <td>
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" value="Edit" onClick={() => { this.handleTypeEdit(questionsType) }}>Edit</button>
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
                                <input type="textbox" class="form-control" defaultValue={this.state.typeName} onChange={(e) => { this.handleName(e) }} /><br />
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
export default QuestionType;