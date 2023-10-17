# README

[![License: AGPL](https://img.shields.io/badge/License-AGPL-blue.svg)](https://github.com/gotreasa/connect-four---orange-belt/blob/main/LICENSE)
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_connect-four---orange-belt&metric=alert_status)](https://sonarcloud.io/dashboard?id=gotreasa_connect-four---orange-belt)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=gotreasa_connect-four---orange-belt&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=gotreasa_connect-four---orange-belt)
[![Known Vulnerabilities](https://snyk.io/test/github/gotreasa/connect-four---orange-belt/badge.svg)](https://snyk.io/test/github/gotreasa/connect-four---orange-belt)
[![Build Status](https://github.com/gotreasa/connect-four---orange-belt/actions/workflows/pipeline.yml/badge.svg)](https://github.com/gotreasa/connect-four---orange-belt/actions/workflows/pipeline.yml)
[![OpenAPI Validation](https://validator.swagger.io/validator?url=https://raw.githubusercontent.com/gotreasa/connect-four---orange-belt/main/openapi.yaml)](https://editor.swagger.io/?url=https://raw.githubusercontent.com/gotreasa/connect-four---orange-belt/main/openapi.yaml)
[![Can I Deploy main to test](https://gotreasa.pactflow.io/pacticipants/connect-four---orange-belt_app/branches/main/latest-version/can-i-deploy/to-environment/test/badge)](https://gotreasa.pactflow.io/hal-browser/browser.html#https://gotreasa.pactflow.io/pacticipants/connect-four---orange-belt_app/branches/main/latest-version/can-i-deploy/to-environment/test/badge)

Connect Four - Orange Belt repository

## Contributing

Please consult [CONTIRBUTING](./CONTRIBUTING.md) for guidelines on contributing to this project.

## Description

### Connect Four

Take a look at wiki description of Connect Four game:

[Wiki Connect Four](https://en.wikipedia.org/wiki/Connect_Four)

The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

```js
piecesPositionList = [
  'A_Red',
  'B_Yellow',
  'A_Red',
  'B_Yellow',
  'A_Red',
  'B_Yellow',
  'G_Red',
  'B_Yellow',
];
```

The list may contain up to 42 moves and shows the order the players are playing.

The first player who connects four items of the same color is the winner.

You should return "Yellow", "Red" or "Draw" accordingly.

## Domain

- Two players - red and yellow
- Each player has 21 tokens in their respective colour
- Can start with either player
- Grid of 6 rows by 7 columns
  - Columns are named from A to G
- A player drops in a token of their column into a column with free space
- Each column starts with 6 spaces, and tokens fill up the column until all 6 spaces are taken
- Each player tries to have four tokens are adjacent to each other - horizontally, vertically or diagonally in the same colour to win the game
- The game ends when a player connects four tokens following the rule above, or there are no moves left when the game ends in a draw

### Entities

- Game
  - Player
    - Colour
    - Tokens (21)
  - Grid
    - Rows (6)
    - Columns (7)
  - Status
    - Won
    - Draw
    - In progress
