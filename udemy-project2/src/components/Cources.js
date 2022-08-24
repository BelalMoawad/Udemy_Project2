import React from "react";
import Card from "./Card";
import "../style/Cources.css";

function cources() {
  const cources = [
    {
      title: "Learn Python: The Complete Python Programming Course",
      src: "https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg",
      author: "Avinash Jain",
      price: "E£179.99",
    },
    {
      title: "Learning Python for Data Analysis and Visualization",
      src: "https://img-c.udemycdn.com/course/750x422/396876_cc92_7.jpg",
      author: "Jose Portilla",
      price: "E£329.99",
    },
    {
      title: "Python for Beginners - Learn Programming from scratch",
      src: "https://img-c.udemycdn.com/course/750x422/405878_e5a0_3.jpg",
      author: "Edwin Diaz",
      price: "E£161.11",
    },
    {
      title: "Learn Python: Python for Beginners",
      src: "https://img-c.udemycdn.com/course/750x422/426570_1b91_3.jpg",
      author: "Abrar Hussain",
      price: "E£179.99",
    },
    {
      title: "Python Beyond the Basics - Object-Oriented Programming",
      src: "https://img-c.udemycdn.com/course/750x422/449532_2aa9_7.jpg",
      author: "Infinite Skills",
      price: "E£179.99",
    },
    {
      title: "Python From Scratch and Selenium WebDriver QA Automation 2022",
      src: "https://img-c.udemycdn.com/course/750x422/482754_7146_6.jpg",
      author: "Admas Kinfu",
      price: "E£179.99",
    },
    {
      title: "Teach Your Kids to Code: Learn to Program Python at Any Age!",
      src: "https://img-c.udemycdn.com/course/750x422/519554_da68_6.jpg",
      author: "Bryson Payne",
      price: "E£179.99",
    },
    {
      title: "Python for Data Structures, Algorithms, and Interviews!",
      src: "https://img-c.udemycdn.com/course/750x422/535622_3bc0.jpg",
      author: "Jose Portilla",
      price: "E£179.99",
    },
    {
      title: "Automate the Boring Stuff with Python Programming",
      src: "https://img-c.udemycdn.com/course/750x422/543600_64d1_4.jpg",
      author: "Al Sweigart",
      price: "E£179.99",
    },
    {
      title: "2022 Complete Python Bootcamp From Zero to Hero in Python",
      src: "https://img-c.udemycdn.com/course/750x422/567828_67d0.jpg",
      author: "Jose Portilla",
      price: "E£179.99",
    },
  ];
  const CourceList = cources.map((cource) => <Card cource={cource}></Card>);
  return (
    <div className="container">
      <h2>Expand your career opportunities with Python</h2>
      <p>
        Take one of Udemy’s range of Python courses and learn how to code using
        this incredibly useful language.
        <br />
        Its simple syntax and readability makes Python perfect for Flask,
        Django, data science, and machine learning.
        <br />
        You’ll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to..
      </p>
      <button type="submit" class="ButtonPython">
        <h5>Explore Python</h5>
      </button>
      <br />
      <br />
      <div className="Cards">
        {CourceList}
      </div>
    </div>
  );
}

export default cources;
