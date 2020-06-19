import React, {Component} from 'react';

import Panel from "./Panel/Panel";
import Content from "./Content/Content";
import Tools from "./Tools/Tools";
import style from "./App.module.css";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.content_wrapper}>
                <Panel/>
                <Content/>
                <Tools/>
            </div>
        );
    }
}

export default App;





