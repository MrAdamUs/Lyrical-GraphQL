import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'

class SongList extends Component {
  render() {
    renderSong () {
     
        return this.props.data.songs.map(song => {
          return (
          <li>{song.title}</li>
          );
        });
      
    }
    console.log(this.props)
    if (this.props.data.loading) {
 return <div>Loading</div>
    }
    return (
      <div>
        {this.renderSong()}
      </div>
    )
  }
}

const query=gql`
{
  songs {
    title
  }
}

`;

export default graphql (query)(SongList);


