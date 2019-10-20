import React, { Component } from 'react';
import decoration from '../../assets/Decoration.svg';
import facebook from '../../assets/Facebook.svg';
import instagram from '../../assets/Instagram.svg';

const initialState = {
    name: '',
    nameError: '',
    mail: '',
    mailError: '',
    message: '',
    messageError: ''
}
export class Contact extends Component {
    state = initialState;

    handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
          [name]: value
        });
    };

     validate = () => {
        if(this.state.name === ''){
            this.setState({
                nameError: 'Podane imię jest nieprawidłowe'
            });
            return false
        } if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.mail)){
            this.setState ({
                mailError: 'Podany email jest nieprawidłowy'
            });
            return false
        } if (this.state.message.length < 120 ){
            this.setState ({
                messageError: 'Wiadomość musi mieć conajmniej 120 znaków!'
            });
            return false
        } 
        return true
     }

    handleSubmit = e => {
        e.preventDefault();

        const isValid = this.validate();
        if (isValid) {
            console.log(this.state, "wysłano")
            //clear the form
            this.setState(
                initialState
            );
        } else console.log("nie wysłano")
    };

    render() {
        const {name, nameError, mail, mailError, message, messageError} = this.state;
        return (
            <div>
                <div id="contact" className="contact">
                    <div className="contact-box">
                        <div className="contact-img"></div>
                        <div className="contact-container">
                            <p className="contact-title"> Skontaktuj się z nami</p>
                            <img src={decoration} alt="" />
                            <div className="contact-form">
                                <form action="" onSubmit={this.handleSubmit}>
                                    <div className="contact-form-details">
                                        <div className="contact-form-name">
                                            <label htmlFor="">Wpisz swoje imię</label>
                                            <input type="text" value={name} name="name" onChange={this.handleChange}/>
                                            <div className="contact-input-error">{nameError}</div>
                                        </div>
                                        <div className="contact-form-mail">
                                            <label htmlFor="">Wpisz swój email</label>
                                            <input type="text" value={mail} name="mail" onChange={this.handleChange} />
                                            <div className="contact-input-error">{mailError}</div>
                                        </div>
                                    </div>
                                    <div className="contact-form-msg">
                                        <label htmlFor="">Wpisz swoją wiadomość</label>
                                        <textarea id="" cols="40" rows="4" value={message} name="message" onChange={this.handleChange}></textarea>
                                        <div className="contact-input-error">{messageError}</div>
                                    </div>
                                    <div className="contact-form-btn">
                                        <input type="submit" value="Wyślij" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="container">
                            <small className="page-footer-copyright">
                                &copy; Copyright by Coders Lab
                            </small>
                            <nav className="page-footer-nav">
                                <ul className="page-footer-nav-list">
                                    <li>
                                        <a href="/#"><img src={facebook} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="/#"><img src={instagram} alt="" /></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}