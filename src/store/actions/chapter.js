export function toggleChapter(list, chapter) {
  return {
    type: 'TOGGLE_CHAPTER', // Required and unique.
    list, 
    chapter
  };
}