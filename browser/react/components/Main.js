import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import AllArtists from './AllArtists';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import { HashRouter, Route } from 'react-router-dom';
import Player from './Player';
import SingleArtist from './SingleArtist'


export default class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (        
        <HashRouter>
          <div id="main" className="container-fluid">
            <div className="col-xs-2">
              <Sidebar deselectAlbum={this.deselectAlbum} />
            </div>
            <div className="col-xs-10">
                <Route exact path="/" component = {AllAlbums}/>
                <Route exact path="/albums" component = {AllAlbums}/>
                <Route path="/albums/:albumId" component = {SingleAlbum}/>
                <Route exact path="/artists" component = {AllArtists}/>
                <Route path="/artists/:artistId" component = {SingleArtist}/>

            </div>
            <Player />
          </div>
        </HashRouter>

    );
  }
}
