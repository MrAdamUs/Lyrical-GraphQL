import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'

class SongList extends Component {
  renderSong () {
    if (this.props.data.loading ) {
      return <div>Loading</div>
    }

    return  this.props.data.songs.map(song => {
      return (
      <li className="collection-item" key={song.id}>{song.title}</li>
      );
    });
  
}
  render() {
    return (
      <ul className="collection">
        {this.renderSong()}
      </ul>
    )
  }
}

const query=gql`
{
  songs {
    title
    id
  }
}

`;

export default graphql (query)(SongList);


