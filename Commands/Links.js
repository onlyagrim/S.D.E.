function sendLink(message) {
  const [...args] = message.content.split(/\s+/);

  if (args[1] === "Array" && args[3] === "Cpp") {
    message.channel.send("Array in Cpp", {
      files: ["./Codes/ArraysCpp.txt"],
    });
  } else if (args[1] === "CircularLL" && args[3] === "Cpp") {
    message.channel.send("Circular Linked List in Cpp", {
      files: ["./Codes/CircularLLCpp.txt"],
    });
  } else if (args[1] === "CircularDoublyLL" && args[3] === "Cpp") {
    message.channel.send("Circular Linked List in Cpp", {
      files: ["./Codes/CircularDoublyLLCpp.txt"],
    });
  } else if (args[1] === "SinglyLL" && args[3] === "Cpp") {
    message.channel.send("Singly Linked List in Cpp", {
      files: ["./Codes/SinglyLLCpp.txt"],
    });
  } else if (args[1] === "SinglyLL" && args[3] === "Python") {
    message.channel.send("Singly Linked List in Python", {
      files: ["./Codes/SinglyLLPython.txt"],
    });
  } else if (args[1] === "SinglyLL" && args[3] === "Java") {
    message.channel.send("Singly Linked List in Java", {
      files: ["./Codes/SinglyLLJava.txt"],
    });
  } else if (args[1] === "DoublyLL" && args[3] === "Cpp") {
    message.channel.send("Doubly Linked List in Cpp", {
      files: ["./Codes/DoublyLLCpp.txt"],
    });
  } else if (args[1] === "DoublyLL" && args[3] === "Python") {
    message.channel.send("Doubly Linked List in Python", {
      files: ["./Codes/DoublyLLPython.txt"],
    });
  } else if (args[1] === "DoublyLL" && args[3] === "Java") {
    message.channel.send("Doubly Linked List in Java", {
      files: ["./Codes/DoublyLLJava.txt"],
    });
  } else if (args[1] === "QueueUsingArray" && args[3] === "Cpp") {
    message.channel.send("Queue Using Array in Cpp", {
      files: ["./Codes/QueueUsingArrayCpp.txt"],
    });
  } else if (args[1] === "QueueUsingArray" && args[3] === "Java") {
    message.channel.send("Queue Using Array in Java", {
      files: ["./Codes/QueueUsingArrayJava.txt"],
    });
  } else if (args[1] === "QueueUsingArray" && args[3] === "Python") {
    message.channel.send("Queue Using Array in Python", {
      files: ["./Codes/QueueUsingArrayPython.txt"],
    });
  } else if (args[1] === "QueueUsingLL" && args[3] === "Cpp") {
    message.channel.send("Queue Using Linked list in Cpp", {
      files: ["./Codes/QueueUsingLLCpp.txt"],
    });
  } else if (args[1] === "QueueUsingLL" && args[3] === "Java") {
    message.channel.send("Queue Using Linked list in Java", {
      files: ["./Codes/QueueUsingLLJava.txt"],
    });
  } else if (args[1] === "QueueUsingLL" && args[3] === "Python") {
    message.channel.send("Queue Using Linked List in Python", {
      files: ["./Codes/QueueUsingLLPython.txt"],
    });
  } else if (args[1] === "StackUsingArray" && args[3] === "Cpp") {
    message.channel.send("Stack Using Array in Cpp", {
      files: ["./Codes/StackUsingArrayCpp.txt"],
    });
  } else if (args[1] === "StackUsingArray" && args[3] === "Java") {
    message.channel.send("Stack Using Array in Java", {
      files: ["./Codes/StackUsingArrayJava.txt"],
    });
  } else if (args[1] === "StackUsingArray" && args[3] === "Python") {
    message.channel.send("Stack Using Array in Python", {
      files: ["./Codes/StackUsingArrayPython.txt"],
    });
  } else if (args[1] === "StackUsingLL" && args[3] === "Cpp") {
    message.channel.send("Stack Using Linked list in Cpp", {
      files: ["./Codes/StackUsingLLCpp.txt"],
    });
  } else if (args[1] === "StackUsingLL" && args[3] === "Java") {
    message.channel.send("Stack Using Linked list in Java", {
      files: ["./Codes/StackUsingLLJava.txt"],
    });
  } else if (args[1] === "StackUsingLL" && args[3] === "Python") {
    message.channel.send("Stack Using Linked List in Python", {
      files: ["./Codes/StackUsingLLPython.txt"],
    });
  } else if (args[1] === "LinearSearch" && args[3] === "Java") {
    message.channel.send("Linear Search in Java", {
      files: ["./Codes/LinearSearchJava.txt"],
    });
  } else if (args[1] === "LinearSearch" && args[3] === "Cpp") {
    message.channel.send("Linear Search in Cpp", {
      files: ["./Codes/LinearSearchCpp.txt"],
    });
  } else if (args[1] === "LinearSearch" && args[3] === "Python") {
    message.channel.send("Linear Search in Python", {
      files: ["./Codes/LinearSearchPython.txt"],
    });
  } else if (args[1] === "BinarySearch" && args[3] === "Java") {
    message.channel.send("Binary Search in Java", {
      files: ["./Codes/BinarySearchJava.txt"],
    });
  } else if (args[1] === "BinarySearch" && args[3] === "Cpp") {
    message.channel.send("Binary Search in Cpp", {
      files: ["./Codes/BinarySearchCpp.txt"],
    });
  } else if (args[1] === "BinarySearch" && args[3] === "Python") {
    message.channel.send("Binary Search in Python", {
      files: ["./Codes/BinarySearchPython.txt"],
    });
  } else if (args[1] === "SearchInMatrix" && args[3] === "Java") {
    message.channel.send("Search Element in Matrix Java", {
      files: ["./Codes/SearchInMatrixJava.txt"],
    });
  } else if (args[1] === "SearchInMatrix" && args[3] === "Cpp") {
    message.channel.send("Search Element in Matrix Cpp", {
      files: ["./Codes/SearchInMatrixCpp.txt"],
    });
  } else if (args[1] === "SearchInMatrix" && args[3] === "Python") {
    message.channel.send("Search Element in Matrix Python", {
      files: ["./Codes/SearchInMatrixPython.txt"],
    });
  } else if (args[1] === "SpiralPrint" && args[3] === "Cpp") {
    message.channel.send("Spiral Order Print in Cpp", {
      files: ["./Codes/SpiralPrintCpp.txt"],
    });
  } else {
    message.reply(
      "It is currently unavailable or you wrote the wrong command!"
    );
  }
}
module.exports = sendLink;
