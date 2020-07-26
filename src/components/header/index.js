import React from 'react';

import { connect } from 'react-redux';

const Header = ({ activeModule, activeChapter }) => (
  <div>
    <strong> Module { activeModule.title } </strong>
    <strong> Chapter { activeChapter.title } </strong>
  </div>
);

export default connect(state => ({
  activeChapter: state.chapter.activeChapter,
  activeModule: state.chapter.Module
}))(Header);
