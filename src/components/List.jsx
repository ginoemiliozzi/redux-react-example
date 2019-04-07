import React from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions';

const ConnectedList = (props) => (
  <ul className='list-group list-group-flush'>
    {props.articles.map(el => (
      <li className='list-group-item' key={el.id}>
        <div className="row">
          <div className="col-md-8">
            {el.title}
          </div>
          <div className="col-md-2 col-md-offset-2">
            <button onClick={() => props.deleteArticle(el)} className="btn btn-danger">X</button>
          </div>
        </div>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
  return {deleteArticle: article => dispatch(deleteArticle(article))}
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;