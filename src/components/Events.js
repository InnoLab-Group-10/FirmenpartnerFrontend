const events = [
    { 
        title: "Überschrift 1", 
        start: getDate("YEAR-MONTH-01"),
        text: "Notiztext"
    },
    {
        title: "Überschrift 2",
        start: getDate("YEAR-MONTH-07"),
        text: "Notiztext"
    }
  ];
  
  function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();
  
    if (month.length === 1) {
      month = "0" + month;
    }
  
    return dayString.replace("YEAR", year).replace("MONTH", month);
  }
  
  export default events;
  