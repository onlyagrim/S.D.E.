function sendProblem(message) {
  const [...args] = message.content.split(/\s+/);
  if (args[1] === "001" && args[3] === "Java") {
    message.channel.send("Binary Search in Java", {
      files: ["./Codes/Algorithms/BinarySearchJava.txt"],
    });
  } else if (args[1] === "001" && args[3] === "Cpp") {
    message.channel.send("Binary Search in Cpp", {
      files: ["./Codes/Algorithms/BinarySearchCpp.txt"],
    });
  } else if (args[1] === "001" && args[3] === "Python") {
    message.channel.send("Binary Search in Python", {
      files: ["./Codes/Algorithms/BinarySearchPython.txt"],
    });
  } else if (args[1] === "002" && args[3] === "Java") {
    message.channel.send("Linear Search in Java", {
      files: ["./Codes/Algorithms/LinearSearchJava.txt"],
    });
  } else if (args[1] === "002" && args[3] === "Cpp") {
    message.channel.send("Linear Search in Cpp", {
      files: ["./Codes/Algorithms/LinearSearchCpp.txt"],
    });
  } else if (args[1] === "002" && args[3] === "Python") {
    message.channel.send("Linear Search in Python", {
      files: ["./Codes/Algorithms/LinearSearchPython.txt"],
    });
  } else {
    message.reply(
      "It is currently unavailable or you wrote the wrong command!"
    );
  }
}
module.exports = sendProblem;
