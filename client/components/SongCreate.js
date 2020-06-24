import React, { Component } from 'react';
import gql from 'graphql-tag';
import mutation from '../../server/schema/mutations';


class SongCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { title: ''}
    }

    onSubmit (e) {
        e.preventDefault();
        
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <h3>Create a New Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input type="text" onChange={e => this.setState ({ title: e.target.value}) } value={this.state.title} />
                </form>
            </div>
        )
    }
}


const mutation = gql`
    mutaiton {
        addSong(title: )
    }

`;

export default SongCreate;