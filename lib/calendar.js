export function getCalendarDays(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  //new Date(year, month, day)
  const first = new Date(year, month, 1); //η 1η του μήνα
  const last = new Date(year, month + 1, 0); // μέρα 0 του επόμενου μήνα = τελευταία του τρέχοντος

  //πόσα κενά μπαίνουν πριν από την 1η
  let startOffset = first.getDay() - 1; // -1 γιατί το grid ξεκινά Δευτέρα
  if (startOffset < 0) {
    startOffset = 6;
  } // η Κυριακή (getDay() = 0) έχει 6 κενά πριν

  // Κενά μετά την τελευταία μέρα, ώστε η τελευταία γραμμή να φτάνει μέχρι Κυριακή
  let endOffset = 7 - last.getDay();
  if (endOffset === 7) {
    endOffset = 0; // Κυριακή: δεν χρειάζονται κενά
  }

  const total = startOffset + last.getDate() + endOffset;

  const days = [];

  for (let i = 0; i < total; i++) {
    days.push(new Date(year, month, 1 - startOffset + i));
  }

  return days;
}
