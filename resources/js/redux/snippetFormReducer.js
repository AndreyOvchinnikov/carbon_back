import store from "../components/App/store";
import axios from 'axios';

export let SNIPPET_FORM_SUBMIT = 'SNIPPET_FORM_SUBMIT';
export let SNIPPET_FORM_CHANGE_CONTENT = 'SNIPPET_FORM_CHANGE_CONTENT';
export let SNIPPET_FORM_CHANGE_DESCRIPTION = 'SNIPPET_FORM_CHANGE_DESCRIPTION';


export let snippetFormSubmitActionCreator = (event) => {
    return {type: SNIPPET_FORM_SUBMIT , event: event}
};
export let snippetFormChangeContentActionCreator = (event) => {
    return {type: SNIPPET_FORM_CHANGE_CONTENT , event: event}
};
export let snippetFormChangeDescriptionActionCreator = (event) => {
    return {type: SNIPPET_FORM_CHANGE_DESCRIPTION , event: event}
};


let snippetFormOnChangeContent = (event) => {
    store.getState().snippetForm.snippetContent = event.target.value;
};

let snippetFormOnChangeDescription = (event) => {
    store.getState().snippetForm.snippetDescription = event.target.value;
};

let snippetFormOnSubmit = (event) => {
    let snippetForm = store.getState().snippetForm;
    event.preventDefault();

    (async () => {
        await axios.post('/api/snippets', {
            html_content: snippetForm.snippetContent,
            html_description: snippetForm.snippetDescription
        }).then((response) => {
            //если успешно добавили новый сниппет
            //вызываем  метод родительского компонента для обновления списка сниппетов
            store.snippetListGetSnippets();
            snippetForm.snippetContent = '';
            snippetForm.snippetDescription = '';
        }).catch((error) => {
            console.log(error);
        });
    })();
};


const snippetFormReducer = (state, action)=> {

    switch (action.type) {
        case SNIPPET_FORM_SUBMIT:
            snippetFormOnSubmit(action.event);
            break;
        case SNIPPET_FORM_CHANGE_CONTENT:
            snippetFormOnChangeContent(action.event);
            break;
        case SNIPPET_FORM_CHANGE_DESCRIPTION:
            snippetFormOnChangeDescription(action.event);
            break;
    }
    return state;
};

export default snippetFormReducer;
