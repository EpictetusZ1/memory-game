# React Memory Game  
## Who's That Author?

### Test your memory - Beat the game and find out who all the authors are

An assignment from [The Odin Project](https://www.theodinproject.com/) to learn and practice:
- React Hooks:
  - ```useState()```
  - ```useEffect()```
- General React concepts and implementation

### Things I learned:
- The difference between ```e.target```  and ```e.currrentTarget``` and why that matters in React ( it's because React does not Propagate, it goes straight to Bubbling.)
- Updating state in Functional Components with Arrays, Objects, and normal variables as the state.
- The importance of passing a callback (```prevState => ```) when calling ```useEffect()```

### Functionality:
- Show rules before game starts, take away rules once playing.
- Shuffle cards on click
- Alert to game over
- Show current score and High-score
- You get to find out the authors names if you can beat the game, good luck!

#### Technologies Used:
- HTML, CSS
- React.js
- CSS Modules
- Webpack
- Create React App - A npm package: ```npm create-react-app```