import React from 'react';
import SnippetFormComponent from "./SnippetFormComponent";
import {
    snippetFormChangeContentActionCreator,
    snippetFormChangeDescriptionActionCreator,
    snippetFormSubmitActionCreator
} from "../../../../../redux/snippetFormReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        SnippetFormState: state.SnippetForm,
        CodeMirrorState: state.CCodeMirror
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (e) => {
            dispatch(snippetFormSubmitActionCreator(e))
        },
        onChangeContent: (e) => {
            dispatch(snippetFormChangeContentActionCreator(e))
        },
        onChangeDescription: (e) => {
            dispatch(snippetFormChangeDescriptionActionCreator(e))
        }
    }
};

const SnippetFormContainer =
    connect(mapStateToProps, mapDispatchToProps)(SnippetFormComponent);
export default SnippetFormContainer;
