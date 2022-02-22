# Contributing Guide

This guide will help you in contributing to DSA Bot.
Contributing to this repo is divided into two parts:

- Contributing to DSA Codes
- Contributing to Bot

## Contributing to DSA-Codes

To contribute to DSA-Codes follow the steps below:

- **Step 1 : Fork the Repo**
- **Step 2 : Clone your forked repo in your system**
- **Step 3 : Create a new branch or switch to development**
- **Step 4 : Do changes as follows :**

  - Go to `./Commands/topic.js` and write the topic for which you want to add the code in the correct format in **addFields** section. For example:

  ```
  .addFields(
  {
    name: "Data Structures:",
    value: "`◽CircularLL\n``◽DoublyLL\n``◽SinglyLL\n`",
  },
  {
    name: "Algorithms:",
    value: "`◽BinarySearch\n``◽LinearSearch\n`",
  }
  )
  ```

  - Write your code and save it as a .txt file with correct topic name and in Camel Case. (Topic name should be same as written in `./Commands/topic.js`)

  - Then go to `./Commands/Links.js` ,copy the code below and add your topic name and language in which your code is written (Java/Python/C++) and paste it in the **Links.js :**

  ```
  else if (args[1] === 'YourTopic' && args[3] === 'Java/Cpp/Python(choose yours)') {
      message.channel.send("<Your Topic> in <language>", { files: ["./Codes/YourTopic.txt"] });
  }
  ```

  - If your topic is already present in [Codelist](https://github.com/Bhuvnesh875/DSA-Bot/tree/main/Codes/Codelist.md) then replace `:white_large_square:` with `:white_check_mark:` for the specified code and language.
    else :
    Make a new row in the suitable table and add the required emojis.

  **Note : Topic name should be same everywhere**

- **Step 5 : Push it to your forked repo**
- **Step 6 : Create a Pull request with the new branch giving details of your changes.**

**Not able to think of a topic? No problem! Check the [CodeList](https://github.com/Bhuvnesh875/DSA-Bot/tree/main/Codes/Codelist.md) and select one.**:rocket:

## Contributing to Bot

To contribute to the main features of the bot:

- **Step 1 : Raise an issue**
- **Step 2 : Wait for approval and getting it assigned**
- **Step 3 : Fork the Repo.**
- **Step 4 : Clone your forked repo in your system.**
- **Step 5 : Create a new branch.**
- **Step 6 : Do your changes.**
- **Step 7 : Push it to your forked repo.**
- **Step 8 : Create a Pull request with the new branch giving details of your changes.**

## Happy contributing:tada:
