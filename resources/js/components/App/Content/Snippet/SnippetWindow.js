import React, {Component} from 'react';
import SnippetListComponent from "./SnippetList/SnippetListComponent";
import SnippetForm from "./SnippetForm/SnippetFormContainer";
import {Provider} from 'react-redux';
import style from './SnippetWindow.module.css';

class SnippetWindow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.snippet_content}>
                <SnippetList/>
                {/*    <SnippetForm />*/}
            </div>

        );
    }
}

export default SnippetWindow;



