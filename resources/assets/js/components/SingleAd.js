import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SingleAd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ad: {},
      bids: [],
      project_name: '',
      project_description: '',
      errors: []
    }

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleAddNewBid = this.handleAddNewBid.bind(this)
    this.hasErrorFor = this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)

  }

  componentDidMount() {
    const adId = this.props.match.params.id

    axios.get(`/api/ads/${adId}`).then(response => {
      this.setState({
        ad: response.data,
        bids: response.data.bids
      })
    })
  }

  handleFieldChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleAddNewBid(event) {
    event.preventDefault()

    const bid = {
      price: this.state.price,
      ad_id: this.state.ad.id,
      user_id: this.state.user_id,
    }

    axios
      .post('/api/bids', bid)
      .then(response => {
        // clear form input
        this.setState({
          price: ''
        })

        // add new task to list of bids
        this.setState(prevState => ({
          tasks: prevState.bids.concat(response.data)
        }))
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
    const { ad, bids } = this.state

    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>{ad.product_name}</div>

              <div className='card-body'>
                <p>{ad.product_description}</p>

                <button
                  className='btn btn-primary btn-sm'
                //onClick={this.handleRemoveBid}
                >
                  Remove Bid
                </button>

                <hr />

                <form onSubmit={this.handleAddNewBid}>
                  <div className='input-group'>
                    <input
                      type='text'
                      name='price'
                      className={`form-control ${this.hasErrorFor('price') ? 'is-invalid' : ''}`}
                      placeholder='price'
                      value={this.state.price}
                      onChange={this.handleFieldChange}
                    />

                    <div className='input-group-append'>
                      <button className='btn btn-primary'>Add</button>
                    </div>

                    {this.renderErrorFor('title')}
                  </div>
                </form>

                <ul className='list-group mt-3'>
                  {bids.map(bid => (
                    <li
                      className='list-group-item d-flex justify-content-between align-items-center'
                      key={bid.id}
                    >
                      {bid.price}

                      <button
                        className='btn btn-primary btn-sm'
                      /*onClick={this.handleRemoveBid(
                        this,
                        bid.id
                      )}*/
                      >
                        Remove Bid
                      </button>
                    </li>
                  ))}

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleAd
