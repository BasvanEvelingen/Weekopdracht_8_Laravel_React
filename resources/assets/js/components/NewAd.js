import axios from 'axios'
import React, { Component } from 'react'

class NewAd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product_name: '',
            product_description: '',
            errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewAd = this.handleCreateNewAd.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCreateNewAd(event) {
        event.preventDefault()

        const { history } = this.props

        const ad = {
            product_name: this.state.product_name,
            product_description: this.state.product_description
        }

        axios
            .post('/api/ads', ad)
            .then(response => {
                // redirect to the homepage
                history.push('/')
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                })
            })
    }

    hasErrorFor(field) {
        return !!this.state.errors[field]
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className='invalid-feedback'>
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        }
    }

    render() {
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>Create new Ad</div>

                            <div className='card-body'>

                                <form onSubmit={this.handleCreateNewAd}>

                                    <div className='form-group'>
                                        <label htmlFor='product_name'>Product name</label>
                                        <input
                                            id='product_name'
                                            type='text'
                                            className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                            name='product_name'
                                            value={this.state.product_name}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('product_name')}
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='product_description'>Product description</label>
                                        <textarea
                                            id='product_description'
                                            className={`form-control ${this.hasErrorFor('product_description') ? 'is-invalid' : ''}`}
                                            name='product_description'
                                            rows='10'
                                            value={this.state.product_description}
                                            onChange={this.handleFieldChange}
                                        />

                                        {this.renderErrorFor('product_description')}
                                    </div>

                                    <button className='btn btn-primary'>Create</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewAd
