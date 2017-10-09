import React, { Component } from 'react';
import axios from 'axios';


export default class SingleArtist extends Component {
    constructor(props)  {
      super(props);
        this.state = {
            artist: {},
            artistAlbums: [],
            artistSongs: []
      };
    }
    componentDidMount () {
      axios.get(`/api/artists/${this.props.match.params.artistId}`)
        .then(res => res.data)
        .then(artist => {
          this.setState({selectedArtist : artist })
        });
        axios.get(`/api/artists/${this.props.match.params.artistId}/albums`)
        .then(res => res.data)
        .then(albums => {
          this.setState({artistAlbums : albums })
        });
        axios.get(`/api/artists/${this.props.match.params.artistId}/songs`)
        .then(res => res.data)
        .then(songs => {
          this.setState({artistSongs : songs })
        });
    }
    render () {
     console.log("sdfsdf",this.state)
  
      return (
        <div>
        <h3>{this.state.artist}</h3>
        <h4>{this.state.artistAlbums}</h4>
        <h4>{this.state.artistSongs}</h4>
      </div>
      );
    }
  }
  