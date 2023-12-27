const date = new Date().toJSON();
const dateComponents = date.split('T')[0].split('-');

// var today = new Date().toJSON();
// console.log(today,'today')
export const today = new Date(new Date().setDate(new Date().getDate() - 1)).toJSON()

const datetoday = today.split('T')[0].split('-');
// console.log(today,'todaytoday')
// console.log(new Date(new Date().setDate(new Date().getDate() + 1)),'aewwdad')
// let tomorrow = new Date(new Date().getTime() + ((1 * 24) * 60 * 60 * 1000));
// const dateComponents1 = tomorrow.split('T')[0].split('-');
// console.log(tomorrow,'tomorrow')
// const current =today.setDate(today.getDate() - 1);

export const formattedDate =
  ("0" + dateComponents[2]).slice(-2) + "-" +
  ("0" + dateComponents[1]).slice(-2) + "-" +
  dateComponents[0];


  export const currentday =
  ("0" + datetoday[2]).slice(-2) + "-" +
  ("0" + datetoday[1]).slice(-2) + "-" +
  datetoday[0];