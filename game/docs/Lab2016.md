# Lab Project 2016

1. New revised objectives
=========================

In light of lack of progress on the previous Labyrinth project, and poor choices made all around, I have come to the realization this project has no chance of ever being published.

The mistakes made are, but not limited to, the following:
 * Huge scope of the game
 * No clear iterations setting achievable goals thorough the process
 * Too much emphasis on end-game content
 * Reliance on good commitment of the team since the beginning of the project
 * No clear legal framework, no defined liabilities, no set license
 * No build tools nor scripts

I have therefore decided to reboot it myself, without using any material made by any member of the previous team, to avoid issues of intellectual property. I have also decided on the following changes:

 * The game code and all documentation will be using the GPLv2
 * Before implication any other people, I need to have a compelling demo to show
 * Before starting to code anything, a clear documentation, setting small iterations, will have to be made

2. General design
=================

The game consists of a grid composed of tiles, each tile representing the room of a labyrinth. Two of the tiles are special tiles, representing the start and the end of the labyrinth, with the other tiles connecting the two. If the player manages to get to the end tile, he wins the stage and earns a reward.

Each tile represents a room, that can be empty, or contains an object or enemy. To progress further, the enemy must be killed.

The design of the labyrinth is made by other players. A fog of war allows for progressive discovery.
