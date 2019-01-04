import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AdsList extends Component {
  constructor() {
    super()

    this.state = {
      ads: []
    }
  }

  componentDidMount() {
    axios.get('/api/ads').then(response => {
      this.setState({
        ads: response.data
      })
    })
  }

  render() {
    const { ads } = this.state

    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>All Product Ads</div>

              <div className='card-body'>
                <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                  Create new Ad
                </Link>

                <ul className='list-group list-group-flush'>
                  {ads.map(project => (
                    <Link
                      className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                      to={`/${ad.id}`}
                      key={ad.id}
                    >
                      {ad.product_name}
                      <span className='badge badge-primary badge-pill'>
                        {project.ads_count}
                      </span>
                    </Link>
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

export default AdsList
