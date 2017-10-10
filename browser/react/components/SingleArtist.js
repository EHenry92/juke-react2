import React, { Component } from 'react';
import axios from 'axios';
import Songs from '../components/Songs';
import Albums from '../components/AllAlbums';
import Artist from '../components/AllArtists';




export default class SingleArtist extends Component {
    constructor(props)  {
      super(props);
        this.state = {
            selectedArtist: {},
            artistAlbums: [],
            artistSongs: []
      };
    }
    componentDidMount () {
      axios.get(`/api/artists/${this.props.match.params.artistId}`)
        .then(res => res.data)
        .then(artist => {
          this.setState({selectedArtist: artist })
      });
      axios.get(`/api/artists/${this.props.match.params.artistId}/albums`)
        .then(res => res.data)
        .then(albums => {
          this.setState({artistAlbums: albums })
      });
      axios.get(`/api/artists/${this.props.match.params.artistId}/songs`)
        .then(res => res.data)
        .then(songs => {
          this.setState({artistSongs: songs })
      });
    }
    render () {
  
      return (
        <div>
          <div>
              <h3>{this.state.selectedArtist.name}</h3>
          </div>
          <div>
              <Albums albums={this.state.artistAlbums}/>
          </div>
          <div>
            <Songs songs={this.state.artistSongs}/>
          </div>
      </div>
      );
    }
  }
  
