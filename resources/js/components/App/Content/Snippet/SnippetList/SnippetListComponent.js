import React, {Component} from 'react';

import style from "./SnippetList.module.css";
import {
    snippetListDeleteSnippetsActionCreator,
    snippetListGetSnippetsActionCreator
} from '../../../../../redux/snippetReducer';

class SnippetListComponent extends Component {
    constructor(props) {
        super(props);
    }
    // вызывается сразу после монтирования компонента в DOM
    // очень подходит для создания сетевых запросов
    componentDidMount() {
        this.props.store.dispatch(snippetListGetSnippetsActionCreator(code));
    }
    onDeleteSnippet(id){
        return () => this.props.store.dispatch(snippetListDeleteSnippetsActionCreator(id));
    }
    render() {
        let snippetPage = this.props.store.snippetPage;
          return (
            <div className={style.snippet_container}>
                {
                    snippetPage.snippets.map(s => {
                        return (
                            <div className={style.snippet} key={s.id}>

                                <div className={style.delete_action}
                                     onClick={this.onDeleteSnippet(s.id)}> del
                                </div>

                                <div className={style.snippet_subject}>
                                    {s.html_content}
                                </div>

                                <div className={style.snippet_description}>
                                    {s.html_description}
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        );
    }
}


export default SnippetListComponent;
