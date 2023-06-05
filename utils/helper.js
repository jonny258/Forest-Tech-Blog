module.exports = {
    format_time: (date) => {
        const validDate = new Date(date);
        return validDate.toLocaleTimeString();
      },
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear()
      }`;
    },
  };
  