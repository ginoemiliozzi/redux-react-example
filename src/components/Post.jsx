import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Post extends Component {

  componentDidMount() {
    // calling the new action creator
    this.props.getData();
  }
  render() {
    return (
        <ul>
            {this.props.articles.map(art =>
                <li key={art.id}>{art.title}</li>)}
        </ul>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        articles: state.remoteArticles
      };
}  

export default connect(
  mapStateToProps,
  { getData }
)(Post);