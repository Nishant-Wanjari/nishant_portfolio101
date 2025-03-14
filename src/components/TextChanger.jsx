import React, { useEffect, useState } from "react";

const TextChanger = () => {
  const textArray = [
    "Hello !!",
    "I am Nishant",
    "React Developer",
    "Java Developer",
  ];

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = textArray[index];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing Effect
          if (charIndex < currentWord.length) {
            setCurrentText((prev) => prev + currentWord[charIndex]);
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
          }
        } else {
          // Deleting Effect
          if (charIndex > 0) {
            setCurrentText((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % textArray.length); // Move to next word
          }
        }
      },
      isDeleting ? 50 : 100
    ); // Faster deletion than typing

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="transition ease-in-out duration-300 text-4xl md:text-6xl font-bold min-w-[250px]">
      {currentText}
      <span className="animate-blink">|</span> {/* Cursor effect */}
    </div>
  );
};

export default TextChanger;
