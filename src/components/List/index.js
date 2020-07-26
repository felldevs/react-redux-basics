import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ChapterActions from '../../store/actions/chapter';


const List = ({list, toggleChapter}) => ( //Dispatch send actions to redux
  <aside>
    {list.map(list => (
      <div key={list.id}>
        <strong>{list.title}</strong>
        <ul>
          {list.chapters.map(chapter => (
            <li key={chapter.id}>
              {chapter.title}
              <button onClick={() => toggleChapter(list, chapter)}> Select </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = state => ({
  list: state.chapter.list
});

const mapDispatchToProps = dispatch => 
  //toggleChapter: (list, chapter) => dispatch(ChapterActions.toggleChapters(list, chapter))
  bindActionCreators(ChapterActions, dispatch);
;

export default connect(mapStateToProps, mapDispatchToProps)(List);