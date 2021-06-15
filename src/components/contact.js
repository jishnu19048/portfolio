import React, { Component } from 'react';
import '../styles/main.css';
import * as emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
export default class ContactMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.messageChange = this.messageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    nameChange = (event) => {
        this.setState({name: event.target.value});
        console.log(this.state.name);
    }
    
    // saves the user's email entered to state
    emailChange = (event) => {
        this.setState({email: event.target.value})
    }

    // saves the user's message entered to state
    messageChange = (event) => {
        this.setState({message: event.target.value})
    }
    handleSubmit() {
        const templateId = 'template_7oal3od';
        let variables = {
            from_name: this.state.email,
            to_name: 'jishnu260p@gmail.com',
            message: this.state.message,
           }
        emailjs.send(
            'service_43bvw18', 
            templateId,
            variables,
            'user_xogYFplUrBfw2vzvkQQ63'
            ).then(res => {
                // Email successfully sent alert
                Swal.fire({
                  title: 'Email Successfully Sent',
                  icon: 'success'
                })
              })
              // Email Failed to send Error alert
              .catch(err => {
                Swal.fire({
                  title: 'Email Failed to Send',
                  icon: 'error'
                })
                console.error('Email Error:', err)
              })
            
            this.setState({
                name: '',
                email: '',
                message: '',
            })
              
        }
    render() {
      return (
        <React.Fragment>
            <form id="contact" className="flex mx-auto w-full max-w-sm space-x-3">
                <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                <h1 className="text-4xl mb-5 tracking-tight font-extrabold text-gray-700 sm:text-3xl md:text-4xl">
                    <span className=" block xl:inline">Reach out to me!</span>{' '}
                </h1>
                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                        <input type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" onChange={this.nameChange} placeholder="Name" />
                    </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                        <input type="text" id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" onChange={this.emailChange} placeholder="Email" />
                    </div>
                    </div>
                    <div className="col-span-2">
                    <label className="text-gray-700" htmlFor="name">
                        <textarea className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="message" onChange={this.messageChange} placeholder="Message" name="comment" rows={5} cols={40}  />
                    </label>
                    </div>
                    <div className="col-span-2 text-right rounded-md shadow">
                        <a
                            onClick={this.handleSubmit}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 md:py-2 md:text-lg md:px-10"
                        >
                            Send
                        </a>
                    </div>
                </div>
                </div>
            </form>
        </React.Fragment>
      );
    }
  }