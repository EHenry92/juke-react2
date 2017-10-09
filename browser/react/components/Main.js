import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import { HashRouter, Route } from 'react-router-dom';
import Player from './Player';



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
            </div>
            <Player />
          </div>
        </HashRouter>

    );
  }
}
