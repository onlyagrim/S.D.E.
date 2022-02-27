function sendProblem(message) {
  const [...args] = message.content.split(/\s+/);
  if (args[1] === "001" && args[3] === "Java") {
    message.channel.send("Search Element in Matrix Java", {
      files: ["./Codes/Problems/SearchInMatrixJava.txt"],
    });
  } else if (args[1] === "001" && args[3] === "Cpp") {
    message.channel.send("Search Element in Matrix Cpp", {
      files: ["./Codes/Problems/SearchInMatrixCpp.txt"],
    });
  } else if (args[1] === "001" && args[3] === "Python") {
    message.channel.send("Search Element in Matrix Python", {
      files: ["./Codes/Problems/SearchInMatrixPython.txt"],
    });
  } else if (args[1] === "002" && args[3] === "Cpp") {
    message.channel.send("Spiral Order Print in Cpp", {
      files: ["./Codes/Problems/SpiralPrintCpp.txt"],
    });
  } else {
    message.reply(
      "It is currently unavailable or you wrote the wrong command!"
    );
  }
}
module.exports = sendProblem;
