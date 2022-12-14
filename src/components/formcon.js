import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const Formcon = () => {
    return (
        <div>
            <form action="https://getform.io/f/cc87536f-793c-4048-b88c-1787714528f2" method="POST">
                <div style={{display: 'inline'}}>
                    <div className='form-small'>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className='form-small'>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email"/>
                    </div>
                </div>
                <div style={{padding: '5px'}}>
                    <label style={{display: 'block'}} htmlFor="message">Message</label>
                    <input style={{
                        display: 'block',
                        width: '100%',
                        height: '100px',
                }} type="text" name="message" id='message'></input>
                </div>
                <button style={{float: 'right'}}type="submit" className="btn btn-outline-dark">Send</button>
            </form>
        </div>
    );
}

export default Formcon;
