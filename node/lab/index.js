const helper = require("./module")




function main(arg) {

  const [, , action, ...data] = arg;
  const dataObj = data.reduce((acc, ele) => {
    const [key, val] = ele.split("=");
    acc[key] = val;
    return acc;
  }, {});

  switch (action) {
    case "add":
      helper.add(dataObj)
      break;
    case "edit":
      helper.edit(dataObj)
      break;
    case "remove":
      helper.remove(dataObj)
      break;
    case "check":
      helper.check(dataObj)
      break;
    case "uncheck":
      helper.uncheck(dataObj)
      break;
    case "list":
      helper.list(dataObj)
      break;


  }



}



main(process.argv);