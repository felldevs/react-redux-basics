import React, { Component } from 'react'

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1, title: 'Easy', chapters: [
            {id: 1, title: 'One'},
            {id: 2, title: 'Two'},
            {id: 3, title: 'Three'},
            {id: 4, title: 'Four'},
            {id: 5, title: 'Five'},
          ]
        },
        {
          id: 2, title: 'Medium', chapters: [
            {id: 6, title: 'Six'},
            {id: 7, title: 'Seven'},
            {id: 8, title: 'Eight'},
            {id: 9, title: 'Nine'},
            {id: 10, title: 'Ten'},
          ]
        },
      ]
    }
  }

  render() {

    const { list } = this.state;

    return (
      <aside>
        { list.map(list => (
          <div key={list.id}>
            <strong>{list.title}</strong>
            <ul>
              {list.chapters.map(chapters => (
                <li key={chapters.id}>
                  {chapters.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    );
  }
}
