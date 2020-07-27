import React, { Component } from 'react'

export default class LyricCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { content: '' };
    }

    onSubmit (e) {
        e.preventDefault();

        

    }


    render() {
        return (
           <form onSubmit={this.onSubmit.bind(this)}>
               <label>Add a Lyric</label>
               <input
                value={this.state.content}
                onChange={e => this.setState({ content: e.target.value })}
               />
           </form>
        )
    }
}
