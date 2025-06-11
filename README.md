# Final Project Videos
[Public](https://youtu.be/LmWFrdrsTsw?si=jZKLaznlMxMMf2EG)
[Private](https://www.youtube.com/watch?v=ejcicYYTlAE)

# How to play
## Method 1
1. Download the source code to your local machine
2. Run a local web server of your choice, such as VSCode's Live Server extension or npm live-server. The following instructions will explain how to use npm live-server.
3. Open up a terminal (command prompt) and run `npm install live-server `
4. Navigate to the source code's root directory
5. In that directory, run `npx live-server `. A browser window should open up.
6. Nagivate to the file ../src/title/index.html 
7. Done!

## Method 2
Play it right in your browser [here](https://v3yu.github.io/Card-Game-Project/src/title/index.html). This is a personal fork made by a team member _after_ the code freeze date but the only changes made were image file paths in order to make it work on GitHub Pages. Everything else is exactly the same as the moment the project was submitted.

## FAQ

Q: The page is blank after the opening cutscenes!

A: You probaby tried to open the webpage locally (via file:// protocol) by double clicking the .html file. JavaScript modules, which our game relies on, are only supported via HTTP(S). Try one of the methods above instead.

Q: The cards are overlapping the player and enemy character!

A: Our game is designed to be played on a desktop computer web browser. It is not reccomended to play on tablet or mobile.

Q: Powell used a move but nothing happened!

A: He used a buff or debuff, which are not yet implemented.

Q: I lost all my block at the end of the turn!

A: This is working as intended so that players cannot 'stack' block across turns. Try to play smartly with attacks, heals, and blocks.

For any other questions, feel free to contact any of the team members who contributed to this repo :)



