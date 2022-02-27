function sendLink(message) {
  const [...args] = message.content.split(/\s+/);

  if (args[1] === "001" && args[3] === "Cpp") {
    message.channel.send("Array in Cpp", {
      files: ["./Codes/Data Structures/ArraysCpp.txt"],
    });
  } else if (args[1] === "002" && args[3] === "Cpp") {
    message.channel.send("Circular Linked List in Cpp", {
      files: ["./Codes/Data Structures/CircularLLCpp.txt"],
    });
  } else if (args[1] === "003" && args[3] === "Cpp") {
    message.channel.send("Circular Linked List in Cpp", {
      files: ["./Codes/Data Structures/CircularDoublyLLCpp.txt"],
    });
  } else if (args[1] === "007" && args[3] === "Cpp") {
    message.channel.send("Singly Linked List in Cpp", {
      files: ["./Codes/Data Structures/SinglyLLCpp.txt"],
    });
  } else if (args[1] === "007" && args[3] === "Python") {
    message.channel.send("Singly Linked List in Python", {
      files: ["./Codes/Data Structures/SinglyLLPython.txt"],
    });
  } else if (args[1] === "007" && args[3] === "Java") {
    message.channel.send("Singly Linked List in Java", {
      files: ["./Codes/Data Structures/SinglyLLJava.txt"],
    });
  } else if (args[1] === "004" && args[3] === "Cpp") {
    message.channel.send("Doubly Linked List in Cpp", {
      files: ["./Codes/Data Structures/DoublyLLCpp.txt"],
    });
  } else if (args[1] === "004" && args[3] === "Python") {
    message.channel.send("Doubly Linked List in Python", {
      files: ["./Codes/Data Structures/DoublyLLPython.txt"],
    });
  } else if (args[1] === "004" && args[3] === "Java") {
    message.channel.send("Doubly Linked List in Java", {
      files: ["./Codes/Data Structures/DoublyLLJava.txt"],
    });
  } else if (args[1] === "005" && args[3] === "Cpp") {
    message.channel.send("Queue Using Array in Cpp", {
      files: ["./Codes/Data Structures/QueueUsingArrayCpp.txt"],
    });
  } else if (args[1] === "005" && args[3] === "Java") {
    message.channel.send("Queue Using Array in Java", {
      files: ["./Codes/Data Structures/QueueUsingArrayJava.txt"],
    });
  } else if (args[1] === "005" && args[3] === "Python") {
    message.channel.send("Queue Using Array in Python", {
      files: ["./Codes/Data Structures/QueueUsingArrayPython.txt"],
    });
  } else if (args[1] === "006" && args[3] === "Cpp") {
    message.channel.send("Queue Using Linked list in Cpp", {
      files: ["./Codes/Data Structures/QueueUsingLLCpp.txt"],
    });
  } else if (args[1] === "006" && args[3] === "Java") {
    message.channel.send("Queue Using Linked list in Java", {
      files: ["./Codes/Data Structures/QueueUsingLLJava.txt"],
    });
  } else if (args[1] === "006" && args[3] === "Python") {
    message.channel.send("Queue Using Linked List in Python", {
      files: ["./Codes/Data Structures/QueueUsingLLPython.txt"],
    });
  } else if (args[1] === "008" && args[3] === "Cpp") {
    message.channel.send("Stack Using Array in Cpp", {
      files: ["./Codes/Data Structures/StackUsingArrayCpp.txt"],
    });
  } else if (args[1] === "008" && args[3] === "Java") {
    message.channel.send("Stack Using Array in Java", {
      files: ["./Codes/Data Structures/StackUsingArrayJava.txt"],
    });
  } else if (args[1] === "008" && args[3] === "Python") {
    message.channel.send("Stack Using Array in Python", {
      files: ["./Codes/Data Structures/StackUsingArrayPython.txt"],
    });
  } else if (args[1] === "009" && args[3] === "Cpp") {
    message.channel.send("Stack Using Linked list in Cpp", {
      files: ["./Codes/Data Structures/StackUsingLLCpp.txt"],
    });
  } else if (args[1] === "009" && args[3] === "Java") {
    message.channel.send("Stack Using Linked list in Java", {
      files: ["./Codes/Data Structures/StackUsingLLJava.txt"],
    });
  } else if (args[1] === "009" && args[3] === "Python") {
    message.channel.send("Stack Using Linked List in Python", {
      files: ["./Codes/Data Structures/StackUsingLLPython.txt"],
    });
  } else {
    message.reply(
      "I think i forgot it or maybe you are writing wrong command!😪"
    );
  }
}
module.exports = sendLink;
