const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  const maxAttempts = 7;
  while (attempts < maxAttempts) {
    const answer = prompt(
      `Guess a number between 1 and 100.\n\n` +
      `Attempt ${attempts + 1} of ${maxAttempts}`
    );
    if (answer === null) {
      alert("Game cancelled.");
      return;
    }
    const guess = Number(answer);
    if (isNaN(guess)) {
      alert("Please enter a valid number.");
      continue;
    }
    attempts++;
    if (guess > secretNumber) {

      alert("Too high! Try again.");

    } else if (guess < secretNumber) {

      alert("Too low! Try again.");

    } else {
      alert(
        `Correct! 🎉\n\n` +
        `You guessed the number in ${attempts} attempt` +
        `${attempts === 1 ? "" : "s"}!`
      );

      console.log("Secret number:", secretNumber);
      console.log("Number of attempts:", attempts);

      return;
    }
  }
  alert(
    `Game over! 😢\n\n` +
    `You used all ${maxAttempts} attempts.\n` +
    `The number was ${secretNumber}.`
  );
  console.log("Secret number:", secretNumber);
  console.log("Attempts used:", attempts);

});