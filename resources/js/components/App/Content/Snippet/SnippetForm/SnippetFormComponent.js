import React, {Component} from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import style from  "./SnippetForm.module.css";

require('codemirror/lib/codemirror.css');
require('codemirror/theme/paraiso-dark.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/php/php.js');

const CodeMirrorAria = (props) => {

    return (
        <div className={style.snippet_code_mirror}>
            <CodeMirror value={props.gState.value}
                        options={{
                            mode: 'php',
                            theme: 'paraiso-dark',
                            lineNumbers: true
                        }}
                        onBeforeChange={(editor, data, value) => {
                            props.gState.setValue(value);
                        }}
                        onChange={(editor, value) => {
                        }}
            />
        </div>
    )
};


let SnippetFormComponent = (props) => {

    let onSubmit = (e) => {
        props.onSubmit(e);
    };
    let onChangeContent = (e) => {
        props.onChangeContent(e);
    };
    let onChangeDescription = (e) => {
        props.onChangeDescription(e);
    };

    return (
        <form className={style.snippet_form} onSubmit={onSubmit}>
            <input className={style.snippet_form_content} type="text"
                   value={props.SnippetFormState.SnippetContent}
                   onChange={onChangeContent}
                   placeholder="Новый сниппет"/>
            <textarea className={style.snippet_form_description}
                      value={props.SnippetFormState.SnippetDescription}
                      onChange={onChangeDescription}
                      placeholder="Описание..."/>
            <input className={style.snippet_form_submit} type="submit" value="Add Snippet"/>
            <CodeMirrorAria gState={props.CodeMirrorState}/>
        </form>
    )

};
export default SnippetFormComponent;
