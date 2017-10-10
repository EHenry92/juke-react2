import React, { Component } from 'react';
import axios from 'axios';
import Songs from '../components/Songs';
import Albums from '../components/AllAlbums';
import Artist from '../components/AllArtists';
import {Link, HashRouter, Route} from 'react-router-dom';




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
        const artist = this.state.selectedArtist; // or however you've named it
          return (
    
            <div>
              <h3>{ artist.name }</h3>
              <ul className="nav nav-tabs">
                <li><Link to={`/artists/${this.props.match.params.artistId}/albums`}>ALBUMS</Link></li>
                <li><Link to={`/artists/${this.props.match.params.artistId}/songs`}>SONGS</Link></li>
              </ul>

              <Route path= "/artists/:artistId/albums" render={() => <Albums albums={this.state.artistAlbums} />} />

              <Route path= "/artists/:artistId/songs" render={() => <Songs songs={this.state.artistSongs} />} />
              
            </div>
           
        );
    }
  }
  
