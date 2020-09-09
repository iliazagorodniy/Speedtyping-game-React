# Speedtyping-game-React
project from Scrimba React bootcamp course styled with semantic ui

### Challenge 1: build the basic structure of our game 
1. <h1> title at the top
1. <textarea> for the box to type in (tip: React normalizes <textarea /> to be more like <input />, 
so it can be used as a self-closing element and uses the `value` property to set its contents)
1. <h4> to display the amount of time remaining
1. <button> to start the game
1. Another <h1> to display the word count

### Challenge 2: Using hooks, track the state of the text in the textarea on every keystroke
To verify it's working, you could just console.log the state on every change

### Challenge 3: Create a function to calculate the number of separate words in the `text` state
For now, just console.log the word count when the button gets clicked to test it out.

## Challenge 4:
1. Create state to hold the current value of the countdown timer.
Display this time in the "Time Remaining" header
1. Set up an effect that runs every time the `timeRemaining` changes
The effect should wait 1 second, then decrement the `timeRemaining` by 1
Hint: use `setTimeout` instead of `setInterval`. This will help you avoid a lot of extra work.
Warning: there will be a bug in this, but we'll tackle that next
1. Make it so the effect won't run if the time is already at 0

### Challenge 5:
Make it so clicking the Start button starts the timer instead of it starting on refresh
(Hint: use a new state variable to indicate if the game should be running or not)

### Challenge 6:
* When the timer reaches 0, count the number of words the user typed in and display it in the "Word count" section
* After the game ends, make it so the user can click the Start button againto play a second time

### Challenge 7:
Make the input box focus (DOM elements have a method called .focus()) immediately when the game starts
