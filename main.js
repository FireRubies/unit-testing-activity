function greet(names) {
if (names.length == 0) {
return "Hello, there.";
}
    for (let i in names) {
      if (names.join('') == names.join('').toUpperCase()) {
        let toReturn = "HELLO";
        for (let i in names) {
          toReturn += ", " + names[i];
        }
        toReturn += "!";
        return toReturn;
      }
    }
    let toReturn = "Hello";
    for (let i in names) {
      let str = names[i].toLowerCase();
      str = str.charAt(0).toUpperCase() + str.slice(1);
      toReturn += ", " + str;
    }
    toReturn += ".";
    return toReturn;
}
