import React, {useState} from 'react';
import style from './App.module.css'

function App() {

    const [messages, setMessage] = useState([
        {message: 'Hello Nata', id: '123', user: {id: 'wqwer', name: 'Max'}},
        {message: 'Hello Max', id: '321', user: {id: 'asdf', name: 'Nata'}}
    ])

    return (
        <div className={style.App}>
            <div className={style.container}>
                {messages.map(m => {
                    return <div>
                        <b>{m.user.name}: </b> {m.message}
                        <hr/>
                    </div>
                })}
            </div>
            <div className={style.formContainer}>
                <textarea/>
                <button>Send</button>
            </div>
        </div>
    );
}

export default App;
