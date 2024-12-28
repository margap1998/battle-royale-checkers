This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Commands for dev
```bash
npm run dev
$YOUR_BROWSER http://localhost:3000
```
# Battle-royale checkers
Small, next.js training project basing on made up version of multi-player (2-9 players) checkers for 11x11 board and dice
<a href="/docs/rules/README.md"> Rules </a>

## Roadmap
  - [x] Init project
  - [ ] Write down rules
    - [x] Polish version
    - [ ] English version
  - [ ] Implement gameplay
    - [ ] Initializing game
    - [ ] Adding chips on the gameboard
    - [ ] Implementing dice role
      - [ ] Vanilla JS Math.random() mode
      - [ ] Fetching from somewhere else
    - [ ] Showing cost of a tile of gameboard
    - [ ] Implement distributing players
  - [ ] Implement hot-seat 1 vs 1
  - [ ] Implement 1 vs "random moves AI"
  - [ ] Implement multi-player
  - [ ] /\*draft\*/ API for WebAssembly AI modules 
    - [ ] Design the needed I/O interfaces
    - [ ] Loading the modules 