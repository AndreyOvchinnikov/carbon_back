import store from "../components/App/store";
import axios from 'axios';

import {SNIPPET_FORM_CHANGE_CONTENT, SNIPPET_FORM_CHANGE_DESCRIPTION, SNIPPET_FORM_SUBMIT} from "./snippetFormReducer";

export let SNIPPET_LIST_DELETE_SNIPPETS = 'SNIPPET_LIST_DELETE_SNIPPETS';
export let SNIPPET_LIST_GET_SNIPPETS = 'SNIPPET_LIST_GET_SNIPPETS';

export let snippetListDeleteSnippetsActionCreator = (id) => {
    return {type: SNIPPET_LIST_DELETE_SNIPPETS , id: id}
};
export let snippetListGetSnippetsActionCreator = () => {
    return {type: SNIPPET_LIST_GET_SNIPPETS}
};

let snippetListGetSnippets = () => {
    (async () => {
        await axios.get('/api/snippets')
            .then((res) => {
                store.getState().snippetPage.snippets = res.data;
                store.render(store);
            })
            .catch((error) => {
                console.log(error)
            });
    })();
};

let snippetListDeleteSnippets = (id) => {
    let this_lock = this;
    (async () => {
        await axios.delete(`/api/snippets/${id}`)
            .then((res) => {
                let snippets = store.getState().snippetPage.snippets;
                snippets = snippets.filter(
                    el => parseInt(el.id) !== parseInt(id)
                );
                store.render(store);
            })
            .catch((error) => {
                console.log(error)
            });
    })();
};


const snippetReducer = (state, action)=> {

    switch (action.type) {
        case SNIPPET_LIST_DELETE_SNIPPETS:
            snippetListDeleteSnippets(action.id);
            break;
        case SNIPPET_FORM_CHANGE_CONTENT:
            snippetListGetSnippets();
            break;

    }
    return state;
};

export default snippetReducer;
