let selectedLesson: any = null;
let lessonsList: any[] = [];
let currentIndex = 0;

export const setLesson = (
  lesson: any,
  lessons: any[],
  index: number
) => {
  selectedLesson = lesson;
  lessonsList = lessons;
  currentIndex = index;
};

export const getLesson = () => {
  return selectedLesson;
};

export const getNextLesson = () => {
  if (currentIndex < lessonsList.length - 1) {
    currentIndex++;
    selectedLesson = lessonsList[currentIndex];
    return selectedLesson;
  }

  return null;
};

export const getPreviousLesson = () => {
  if (currentIndex > 0) {
    currentIndex--;
    selectedLesson = lessonsList[currentIndex];
    return selectedLesson;
  }

  return null;
};