const handleDescription = (str,num) => {
    if (str.length <= num) {
      return str;
    } else {
      // return (
      //   str && str.substring(0, str.substring(0, num).lastIndexOf(" ")) + " ..."
      // );
      return str && str.substring(0, num) + "...";
    }
    // return str.split(" ").slice(0, num).join(" ") + " ...";
  };
  export default handleDescription;