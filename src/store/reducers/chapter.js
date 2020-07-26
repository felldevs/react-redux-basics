const INITIAL_STATE = {
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

//reducer
export default function chapter(state = INITIAL_STATE, action) {
  
  console.log('action', action);

  if (action.type === "TOGGLE_CHAPTER") {
      return {
          ...state, 
          activeChapter: action.activeChapter,
          activeModule: action.activeModule    
      };
  }
  
  return state;
}