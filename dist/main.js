/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n//import Canvas from './scripts/canvas';\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game-canvas\");\n  // const ctx = canvas.getContext(\"2d\");\n  // canvas.height = window.innerHeight;\n  // canvas.width = window.innerWidth;\n\n  new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  // console.log(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNxQztBQUVyQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2xELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3JEO0VBQ0E7RUFDQTs7RUFFQSxJQUFJSix3REFBSSxDQUFDRyxNQUFNLENBQUM7RUFDaEI7QUFDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgQ2FudmFzIGZyb20gJy4vc2NyaXB0cy9jYW52YXMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gIC8vIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIC8vIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIC8vIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gIG5ldyBHYW1lKGNhbnZhcyk7XG4gIC8vIGNvbnNvbGUubG9nKGN0eCk7XG59KSJdLCJuYW1lcyI6WyJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/characters.js":
/*!***********************************!*\
  !*** ./src/scripts/characters.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst CONSTANTS = {\n  MOVE_SPEED: 6,\n  CHARACTER_WIDTH: 30,\n  CHARACTER_HEIGHT: 30\n};\n\n//--load images?--\n// const images = {};\n// images.character = new Image();\n// images.character.src = '...';\n\nlet characterX = 0;\n// let characterSpeed = 6;\n\nclass Character {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.width = CONSTANTS.CHARACTER_WIDTH;\n    this.height = CONSTANTS.CHARACTER_HEIGHT;\n    this.characterSpeed = CONSTANTS.MOVE_SPEED;\n    // this.characterX = 0;\n    // this.vel = 0;\n  }\n\n  // move(input){\n  //   if (input === right){\n  //     characterX += this.characterSpeed;\n  //   } else if (input === left) {\n  //     characterX -= this.characterSpeed;\n  //   }\n  // }\n\n  animate(ctx) {\n    // this.move();\n    this.drawCharacter(ctx);\n    if (characterX < this.dimensions.width + this.width) {\n      characterX += CONSTANTS.MOVE_SPEED;\n    } else {\n      characterX = 0 - this.width;\n    }\n  }\n  drawCharacter(ctx) {\n    // debugger;\n    ctx.fillStyle = \"blue\";\n    ctx.fillRect(characterX, 500, CONSTANTS.CHARACTER_WIDTH, CONSTANTS.CHARACTER_HEIGHT);\n    //change this later!\n  }\n\n  //set boundaries so character don't go off canvas\n  bounds() {\n    return {\n      left: this.width,\n      right: this.width + CONSTANTS.CHARACTER_WIDTH\n    };\n  }\n\n  //prevent movement outside of canvas\n  atBoundary() {\n    //...\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxTQUFTLEdBQUc7RUFDaEJDLFVBQVUsRUFBRSxDQUFDO0VBQ2JDLGVBQWUsRUFBRSxFQUFFO0VBQ25CQyxnQkFBZ0IsRUFBRTtBQUNwQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlDLFVBQVUsR0FBRyxDQUFDO0FBQ2xCOztBQUVBLE1BQU1DLFNBQVMsQ0FBQztFQUNkQyxXQUFXLENBQUNDLFVBQVUsRUFBQztJQUNyQixJQUFJLENBQUNBLFVBQVUsR0FBR0EsVUFBVTtJQUM1QixJQUFJLENBQUNDLEtBQUssR0FBR1IsU0FBUyxDQUFDRSxlQUFlO0lBQ3RDLElBQUksQ0FBQ08sTUFBTSxHQUFHVCxTQUFTLENBQUNHLGdCQUFnQjtJQUN4QyxJQUFJLENBQUNPLGNBQWMsR0FBR1YsU0FBUyxDQUFDQyxVQUFVO0lBQzFDO0lBQ0E7RUFDRjs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQVUsT0FBTyxDQUFDQyxHQUFHLEVBQUM7SUFDVjtJQUNBLElBQUksQ0FBQ0MsYUFBYSxDQUFDRCxHQUFHLENBQUM7SUFDdkIsSUFBSVIsVUFBVSxHQUFHLElBQUksQ0FBQ0csVUFBVSxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLLEVBQUM7TUFDbERKLFVBQVUsSUFBSUosU0FBUyxDQUFDQyxVQUFVO0lBQ3BDLENBQUMsTUFBTTtNQUNMRyxVQUFVLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ0ksS0FBSztJQUM3QjtFQUNGO0VBRUFLLGFBQWEsQ0FBQ0QsR0FBRyxFQUFDO0lBQ2hCO0lBQ0FBLEdBQUcsQ0FBQ0UsU0FBUyxHQUFHLE1BQU07SUFDdEJGLEdBQUcsQ0FBQ0csUUFBUSxDQUFDWCxVQUFVLEVBQUUsR0FBRyxFQUFFSixTQUFTLENBQUNFLGVBQWUsRUFBRUYsU0FBUyxDQUFDRyxnQkFBZ0IsQ0FBQztJQUNwRjtFQUNGOztFQUVBO0VBQ0FhLE1BQU0sR0FBRTtJQUNOLE9BQU07TUFDSkMsSUFBSSxFQUFFLElBQUksQ0FBQ1QsS0FBSztNQUNoQlUsS0FBSyxFQUFFLElBQUksQ0FBQ1YsS0FBSyxHQUFHUixTQUFTLENBQUNFO0lBQ2hDLENBQUM7RUFDSDs7RUFFQTtFQUNBaUIsVUFBVSxHQUFFO0lBQ1Y7RUFBQTtBQUVKO0FBRUEsK0RBQWVkLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvY2hhcmFjdGVycy5qcz8zOWI1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENPTlNUQU5UUyA9IHtcbiAgTU9WRV9TUEVFRDogNixcbiAgQ0hBUkFDVEVSX1dJRFRIOiAzMCxcbiAgQ0hBUkFDVEVSX0hFSUdIVDogMzBcbn1cblxuLy8tLWxvYWQgaW1hZ2VzPy0tXG4vLyBjb25zdCBpbWFnZXMgPSB7fTtcbi8vIGltYWdlcy5jaGFyYWN0ZXIgPSBuZXcgSW1hZ2UoKTtcbi8vIGltYWdlcy5jaGFyYWN0ZXIuc3JjID0gJy4uLic7XG5cbmxldCBjaGFyYWN0ZXJYID0gMDtcbi8vIGxldCBjaGFyYWN0ZXJTcGVlZCA9IDY7XG5cbmNsYXNzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpe1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgdGhpcy53aWR0aCA9IENPTlNUQU5UUy5DSEFSQUNURVJfV0lEVEg7XG4gICAgdGhpcy5oZWlnaHQgPSBDT05TVEFOVFMuQ0hBUkFDVEVSX0hFSUdIVDtcbiAgICB0aGlzLmNoYXJhY3RlclNwZWVkID0gQ09OU1RBTlRTLk1PVkVfU1BFRUQ7XG4gICAgLy8gdGhpcy5jaGFyYWN0ZXJYID0gMDtcbiAgICAvLyB0aGlzLnZlbCA9IDA7XG4gIH1cblxuICAvLyBtb3ZlKGlucHV0KXtcbiAgLy8gICBpZiAoaW5wdXQgPT09IHJpZ2h0KXtcbiAgLy8gICAgIGNoYXJhY3RlclggKz0gdGhpcy5jaGFyYWN0ZXJTcGVlZDtcbiAgLy8gICB9IGVsc2UgaWYgKGlucHV0ID09PSBsZWZ0KSB7XG4gIC8vICAgICBjaGFyYWN0ZXJYIC09IHRoaXMuY2hhcmFjdGVyU3BlZWQ7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgYW5pbWF0ZShjdHgpe1xuICAgIC8vIHRoaXMubW92ZSgpO1xuICAgIHRoaXMuZHJhd0NoYXJhY3RlcihjdHgpO1xuICAgIGlmIChjaGFyYWN0ZXJYIDwgdGhpcy5kaW1lbnNpb25zLndpZHRoICsgdGhpcy53aWR0aCl7XG4gICAgICBjaGFyYWN0ZXJYICs9IENPTlNUQU5UUy5NT1ZFX1NQRUVEO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFyYWN0ZXJYID0gMCAtIHRoaXMud2lkdGg7XG4gICAgfVxuICB9XG5cbiAgZHJhd0NoYXJhY3RlcihjdHgpe1xuICAgIC8vIGRlYnVnZ2VyO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICBjdHguZmlsbFJlY3QoY2hhcmFjdGVyWCwgNTAwLCBDT05TVEFOVFMuQ0hBUkFDVEVSX1dJRFRILCBDT05TVEFOVFMuQ0hBUkFDVEVSX0hFSUdIVCk7XG4gICAgLy9jaGFuZ2UgdGhpcyBsYXRlciFcbiAgfVxuXG4gIC8vc2V0IGJvdW5kYXJpZXMgc28gY2hhcmFjdGVyIGRvbid0IGdvIG9mZiBjYW52YXNcbiAgYm91bmRzKCl7XG4gICAgcmV0dXJue1xuICAgICAgbGVmdDogdGhpcy53aWR0aCxcbiAgICAgIHJpZ2h0OiB0aGlzLndpZHRoICsgQ09OU1RBTlRTLkNIQVJBQ1RFUl9XSURUSFxuICAgIH1cbiAgfVxuXG4gIC8vcHJldmVudCBtb3ZlbWVudCBvdXRzaWRlIG9mIGNhbnZhc1xuICBhdEJvdW5kYXJ5KCl7XG4gICAgLy8uLi5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXIiXSwibmFtZXMiOlsiQ09OU1RBTlRTIiwiTU9WRV9TUEVFRCIsIkNIQVJBQ1RFUl9XSURUSCIsIkNIQVJBQ1RFUl9IRUlHSFQiLCJjaGFyYWN0ZXJYIiwiQ2hhcmFjdGVyIiwiY29uc3RydWN0b3IiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyYWN0ZXJTcGVlZCIsImFuaW1hdGUiLCJjdHgiLCJkcmF3Q2hhcmFjdGVyIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJib3VuZHMiLCJsZWZ0IiwicmlnaHQiLCJhdEJvdW5kYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/characters.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters */ \"./src/scripts/characters.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/scripts/level.js\");\n\n\nclass Game {\n  //create new canvas and restart the game\n  constructor(canvas) {\n    // this.canvas = canvas;\n    this.ctx = canvas.getContext('2d');\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.score = 0;\n    this.registerEvents();\n    this.restart();\n  }\n\n  //after game over, restart the game\n  restart() {\n    this.running = false;\n    this.score = 0;\n    this.characterOne = new _characters__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    // this.characterTwo = new Character();\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n    this.animate();\n  }\n\n  //binds the context of event handlers to the game class\n  registerEvents() {\n    this.boundClickHandler = this.click.bind(this);\n    this.ctx.canvas.addEventListener(\"click\", this.boundClickHandler);\n    this.boundKeydownHandler = this.keydown.bind(this);\n    console.log(this.boundKeydownHandler);\n    this.ctx.canvas.addEventListener(\"keydown\", this.boundKeydownHandler);\n  }\n  keydown(e) {\n    console.log(e);\n    if (!this.running) {\n      this.play();\n    }\n  }\n  // else {\n  //     if (e.code === \"ArrowRight\") {\n  //       this.characterOne.move(right)\n  //     }\n  //     else if (e.code === \"ArrowLeft\") {\n  //       this.characterOne.move(left)\n  //     }\n  //     }\n  //   }\n  // }\n\n  click(e) {\n    if (!this.running) this.play();else this.pause();\n  }\n\n  //start playing\n  play() {\n    this.running = true;\n    this.animate();\n    //add 1 to the score every second\n    this.counter = setInterval(() => this.score += 1, 1000);\n  }\n\n  //stop running animations and score counting\n  pause() {\n    //addEventListener?\n    clearInterval(this.counter);\n    this.running = false;\n  }\n\n  // gameOver(){\n  //   return (\n  //     this.level.collidesWith(this.characterOne.bounds()) ||\n  //     this.level.collidesWith(this.characterTwo.bounds())\n  //   );\n  // }\n\n  animate() {\n    //draw the level\n    this.level.animate(this.ctx);\n\n    //draw and move the characters\n    this.characterOne.animate(this.ctx);\n    // this.characterTwo.animate(this.ctx);\n\n    //check if game over => give player score => restart the game\n    // if (this.gameOver()){\n    //   alert(this.score);\n    //   this.restart();\n    // }\n\n    //draw the score\n    this.drawScore();\n\n    //stop animations if game is not running\n    if (this.running) {\n      //calls the function again after very short delay (~1/60 sec)\n      requestAnimationFrame(this.animate.bind(this));\n    }\n    // this.animate();\n  }\n\n  //clearInterval(<varname>)\n  drawScore() {\n    //location width and height are based off of canvas dimensions\n    const loc = {\n      x: this.dimensions.width / 2,\n      y: this.dimensions.height / 8\n    };\n    // const loc = { x: 50, y: 50 }\n    this.ctx.font = \"bold 50pt sans-serif\";\n    this.ctx.fillStyle = \"black\";\n    this.ctx.fillText(this.score, loc.x, loc.y);\n    //strokeStyle and linewidth are the color and width of the outline\n    this.ctx.strokeStyle = \"white\";\n    this.ctx.lineWidth = 2;\n    this.ctx.strokeText(this.score, loc.x, loc.y);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBLElBQUksQ0FBQzBCLFNBQVMsRUFBRTs7SUFFaEI7SUFDQSxJQUFJLElBQUksQ0FBQ2xCLE9BQU8sRUFBQztNQUNmO01BQ0FtQixxQkFBcUIsQ0FBQyxJQUFJLENBQUNoQixPQUFPLENBQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRDtJQUNBO0VBQ0Y7O0VBRUE7RUFDQVksU0FBUyxHQUFFO0lBQ1Q7SUFDQSxNQUFNRSxHQUFHLEdBQUc7TUFBRUMsQ0FBQyxFQUFHLElBQUksQ0FBQzNCLFVBQVUsQ0FBQ0MsS0FBSyxHQUFFLENBQUM7TUFBRTJCLENBQUMsRUFBRyxJQUFJLENBQUM1QixVQUFVLENBQUNFLE1BQU0sR0FBRTtJQUFFLENBQUM7SUFDM0U7SUFDQSxJQUFJLENBQUNKLEdBQUcsQ0FBQytCLElBQUksR0FBRyxzQkFBc0I7SUFDdEMsSUFBSSxDQUFDL0IsR0FBRyxDQUFDZ0MsU0FBUyxHQUFHLE9BQU87SUFDNUIsSUFBSSxDQUFDaEMsR0FBRyxDQUFDaUMsUUFBUSxDQUFDLElBQUksQ0FBQzVCLEtBQUssRUFBRXVCLEdBQUcsQ0FBQ0MsQ0FBQyxFQUFFRCxHQUFHLENBQUNFLENBQUMsQ0FBQztJQUMzQztJQUNBLElBQUksQ0FBQzlCLEdBQUcsQ0FBQ2tDLFdBQVcsR0FBRyxPQUFPO0lBQzlCLElBQUksQ0FBQ2xDLEdBQUcsQ0FBQ21DLFNBQVMsR0FBRyxDQUFDO0lBQ3RCLElBQUksQ0FBQ25DLEdBQUcsQ0FBQ29DLFVBQVUsQ0FBQyxJQUFJLENBQUMvQixLQUFLLEVBQUV1QixHQUFHLENBQUNDLENBQUMsRUFBRUQsR0FBRyxDQUFDRSxDQUFDLENBQUM7RUFDL0M7QUFDRjtBQUVBLCtEQUFlakMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9jaGFyYWN0ZXJzXCI7XG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vbGV2ZWxcIjtcblxuY2xhc3MgR2FtZSB7XG4gIC8vY3JlYXRlIG5ldyBjYW52YXMgYW5kIHJlc3RhcnQgdGhlIGdhbWVcbiAgY29uc3RydWN0b3IoY2FudmFzKXtcbiAgICAvLyB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIHRoaXMucmVzdGFydCgpO1xuICB9XG4gIFxuICAvL2FmdGVyIGdhbWUgb3ZlciwgcmVzdGFydCB0aGUgZ2FtZVxuICByZXN0YXJ0KCkge1xuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuY2hhcmFjdGVyT25lID0gbmV3IENoYXJhY3Rlcih0aGlzLmRpbWVuc2lvbnMpO1xuICAgIC8vIHRoaXMuY2hhcmFjdGVyVHdvID0gbmV3IENoYXJhY3RlcigpO1xuICAgIHRoaXMubGV2ZWwgPSBuZXcgTGV2ZWwodGhpcy5kaW1lbnNpb25zKTtcbiAgICBcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuICBcbiAgLy9iaW5kcyB0aGUgY29udGV4dCBvZiBldmVudCBoYW5kbGVycyB0byB0aGUgZ2FtZSBjbGFzc1xuICByZWdpc3RlckV2ZW50cygpe1xuICAgIHRoaXMuYm91bmRDbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmJvdW5kQ2xpY2tIYW5kbGVyKTtcblxuICAgIHRoaXMuYm91bmRLZXlkb3duSGFuZGxlciA9IHRoaXMua2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYm91bmRLZXlkb3duSGFuZGxlcilcbiAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5ib3VuZEtleWRvd25IYW5kbGVyKVxuICB9XG5cbiAga2V5ZG93bihlKXtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH1cbiAgICAvLyBlbHNlIHtcbiAgLy8gICAgIGlmIChlLmNvZGUgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gIC8vICAgICAgIHRoaXMuY2hhcmFjdGVyT25lLm1vdmUocmlnaHQpXG4gIC8vICAgICB9XG4gIC8vICAgICBlbHNlIGlmIChlLmNvZGUgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgLy8gICAgICAgdGhpcy5jaGFyYWN0ZXJPbmUubW92ZShsZWZ0KVxuICAvLyAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuICBcbiAgY2xpY2soZSl7XG4gICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHRoaXMucGxheSgpO1xuICAgIGVsc2UgdGhpcy5wYXVzZSgpO1xuICB9XG4gIFxuICAvL3N0YXJ0IHBsYXlpbmdcbiAgcGxheSgpe1xuICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgdGhpcy5hbmltYXRlKCk7XG4gICAgLy9hZGQgMSB0byB0aGUgc2NvcmUgZXZlcnkgc2Vjb25kXG4gICAgdGhpcy5jb3VudGVyID0gc2V0SW50ZXJ2YWwoKCk9PnRoaXMuc2NvcmUgKz0gMSwgMTAwMCk7XG4gIH1cbiAgXG4gIC8vc3RvcCBydW5uaW5nIGFuaW1hdGlvbnMgYW5kIHNjb3JlIGNvdW50aW5nXG4gIHBhdXNlKCl7XG4gICAgLy9hZGRFdmVudExpc3RlbmVyP1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jb3VudGVyKTtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIGdhbWVPdmVyKCl7XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIHRoaXMubGV2ZWwuY29sbGlkZXNXaXRoKHRoaXMuY2hhcmFjdGVyT25lLmJvdW5kcygpKSB8fFxuICAvLyAgICAgdGhpcy5sZXZlbC5jb2xsaWRlc1dpdGgodGhpcy5jaGFyYWN0ZXJUd28uYm91bmRzKCkpXG4gIC8vICAgKTtcbiAgLy8gfVxuXG4gIGFuaW1hdGUoKXtcbiAgICAvL2RyYXcgdGhlIGxldmVsXG4gICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMuY3R4KTtcblxuICAgIC8vZHJhdyBhbmQgbW92ZSB0aGUgY2hhcmFjdGVyc1xuICAgIHRoaXMuY2hhcmFjdGVyT25lLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgIC8vIHRoaXMuY2hhcmFjdGVyVHdvLmFuaW1hdGUodGhpcy5jdHgpO1xuXG4gICAgLy9jaGVjayBpZiBnYW1lIG92ZXIgPT4gZ2l2ZSBwbGF5ZXIgc2NvcmUgPT4gcmVzdGFydCB0aGUgZ2FtZVxuICAgIC8vIGlmICh0aGlzLmdhbWVPdmVyKCkpe1xuICAgIC8vICAgYWxlcnQodGhpcy5zY29yZSk7XG4gICAgLy8gICB0aGlzLnJlc3RhcnQoKTtcbiAgICAvLyB9XG5cbiAgICAvL2RyYXcgdGhlIHNjb3JlXG4gICAgdGhpcy5kcmF3U2NvcmUoKTtcblxuICAgIC8vc3RvcCBhbmltYXRpb25zIGlmIGdhbWUgaXMgbm90IHJ1bm5pbmdcbiAgICBpZiAodGhpcy5ydW5uaW5nKXtcbiAgICAgIC8vY2FsbHMgdGhlIGZ1bmN0aW9uIGFnYWluIGFmdGVyIHZlcnkgc2hvcnQgZGVsYXkgKH4xLzYwIHNlYylcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIC8vIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgLy9jbGVhckludGVydmFsKDx2YXJuYW1lPilcbiAgZHJhd1Njb3JlKCl7XG4gICAgLy9sb2NhdGlvbiB3aWR0aCBhbmQgaGVpZ2h0IGFyZSBiYXNlZCBvZmYgb2YgY2FudmFzIGRpbWVuc2lvbnNcbiAgICBjb25zdCBsb2MgPSB7IHg6ICh0aGlzLmRpbWVuc2lvbnMud2lkdGgpLzIsIHk6ICh0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KS84IH07XG4gICAgLy8gY29uc3QgbG9jID0geyB4OiA1MCwgeTogNTAgfVxuICAgIHRoaXMuY3R4LmZvbnQgPSBcImJvbGQgNTBwdCBzYW5zLXNlcmlmXCI7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMuc2NvcmUsIGxvYy54LCBsb2MueSk7XG4gICAgLy9zdHJva2VTdHlsZSBhbmQgbGluZXdpZHRoIGFyZSB0aGUgY29sb3IgYW5kIHdpZHRoIG9mIHRoZSBvdXRsaW5lXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMjtcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHRoaXMuc2NvcmUsIGxvYy54LCBsb2MueSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZSJdLCJuYW1lcyI6WyJDaGFyYWN0ZXIiLCJMZXZlbCIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJzY29yZSIsInJlZ2lzdGVyRXZlbnRzIiwicmVzdGFydCIsInJ1bm5pbmciLCJjaGFyYWN0ZXJPbmUiLCJsZXZlbCIsImFuaW1hdGUiLCJib3VuZENsaWNrSGFuZGxlciIsImNsaWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJib3VuZEtleWRvd25IYW5kbGVyIiwia2V5ZG93biIsImNvbnNvbGUiLCJsb2ciLCJlIiwicGxheSIsInBhdXNlIiwiY291bnRlciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRyYXdTY29yZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxvYyIsIngiLCJ5IiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/level.js":
/*!******************************!*\
  !*** ./src/scripts/level.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n  }\n\n  //render the background\n  drawBackground(ctx) {\n    ctx.fillStyle = \"lightgreen\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  //render the game level\n  animate(ctx) {\n    this.drawBackground(ctx);\n  }\n\n  //returns true if either character hits a hazard\n  // collideswith(characterOne, characterTwo){\n  //   //...\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Level);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sZXZlbC5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsS0FBSyxDQUFDO0VBQ1ZDLFdBQVcsQ0FBRUMsVUFBVSxFQUFDO0lBQ3RCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQSxVQUFVO0VBQzlCOztFQUVBO0VBQ0FDLGNBQWMsQ0FBQ0MsR0FBRyxFQUFDO0lBQ2pCQSxHQUFHLENBQUNDLFNBQVMsR0FBRyxZQUFZO0lBQzVCRCxHQUFHLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ0osVUFBVSxDQUFDSyxLQUFLLEVBQUUsSUFBSSxDQUFDTCxVQUFVLENBQUNNLE1BQU0sQ0FBQztFQUNuRTs7RUFFQTtFQUNBQyxPQUFPLENBQUNMLEdBQUcsRUFBQztJQUNWLElBQUksQ0FBQ0QsY0FBYyxDQUFDQyxHQUFHLENBQUM7RUFDMUI7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7QUFDRjs7QUFFQSwrREFBZUosS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9sZXZlbC5qcz8wMWFhIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExldmVsIHtcbiAgY29uc3RydWN0b3IgKGRpbWVuc2lvbnMpe1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gIH1cblxuICAvL3JlbmRlciB0aGUgYmFja2dyb3VuZFxuICBkcmF3QmFja2dyb3VuZChjdHgpe1xuICAgIGN0eC5maWxsU3R5bGUgPSBcImxpZ2h0Z3JlZW5cIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgfVxuXG4gIC8vcmVuZGVyIHRoZSBnYW1lIGxldmVsXG4gIGFuaW1hdGUoY3R4KXtcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gIH1cblxuICAvL3JldHVybnMgdHJ1ZSBpZiBlaXRoZXIgY2hhcmFjdGVyIGhpdHMgYSBoYXphcmRcbiAgLy8gY29sbGlkZXN3aXRoKGNoYXJhY3Rlck9uZSwgY2hhcmFjdGVyVHdvKXtcbiAgLy8gICAvLy4uLlxuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExldmVsIl0sIm5hbWVzIjpbIkxldmVsIiwiY29uc3RydWN0b3IiLCJkaW1lbnNpb25zIiwiZHJhd0JhY2tncm91bmQiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiYW5pbWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/level.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;