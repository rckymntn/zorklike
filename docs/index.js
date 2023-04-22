/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Actor.ts":
/*!**********************!*\
  !*** ./src/Actor.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Actor\": () => (/* binding */ Actor)\n/* harmony export */ });\n/* harmony import */ var _CharacterSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CharacterSheet */ \"./src/CharacterSheet.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.ts\");\n\n\nclass Actor extends _CharacterSheet__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(biography, attributes, equipment) {\n        super(biography, attributes, equipment);\n    }\n    attack(target) {\n        (0,_util__WEBPACK_IMPORTED_MODULE_1__.writeToConsoleHistory)(`${this.biography.name} attempted to attack to ${target.biography.name}!`);\n    }\n    talk(target) {\n        (0,_util__WEBPACK_IMPORTED_MODULE_1__.writeToConsoleHistory)(`${this.biography.name} attempted to talk to ${target.biography.name}!`);\n    }\n}\n\n\n//# sourceURL=webpack://zorklike/./src/Actor.ts?");

/***/ }),

/***/ "./src/CharacterSheet.ts":
/*!*******************************!*\
  !*** ./src/CharacterSheet.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attributes\": () => (/* binding */ Attributes),\n/* harmony export */   \"Biography\": () => (/* binding */ Biography),\n/* harmony export */   \"Equipment\": () => (/* binding */ Equipment),\n/* harmony export */   \"default\": () => (/* binding */ CharacterSheet)\n/* harmony export */ });\nclass Attributes {\n    constructor(level, strength, dexterity, constitution, intelligence, wisdom, charisma, maxHitPoints, curHitPoints) {\n        this.level = level;\n        this.strength = strength;\n        this.dexterity = dexterity;\n        this.constitution = constitution;\n        this.intelligence = intelligence;\n        this.wisdom = wisdom;\n        this.charisma = charisma;\n        this.maxHitPoints = maxHitPoints;\n        this.curHitPoints = curHitPoints ? curHitPoints : maxHitPoints;\n    }\n    toString() {\n        return `HP:\\t\\t${this.curHitPoints}/${this.maxHitPoints}\\n\\nLevel:\\t\\t${this.level}\\nStrength:\\t${this.strength}\\nDexterity:\\t${this.dexterity}\\nConstitution:\\t${this.constitution}\\nIntelligence:\\t${this.intelligence}\\nWisdom:\\t\\t${this.wisdom}\\nCharisma:\\t${this.charisma}\\n`;\n    }\n}\nclass Biography {\n    constructor(name = \"\", classType = \"Unknown\" /* ClassType.Unknown */, race = \"Unknown\" /* RaceType.Unknown */) {\n        this.name = !name || name === \"\" ? `${race} ${classType}` : name;\n        this.classType = classType;\n        this.race = race;\n    }\n}\nclass Equipment {\n}\nclass CharacterSheet {\n    constructor(biography, attributes, equipment) {\n        this.biography = biography;\n        this.attributes = attributes;\n        this.equipment = equipment;\n    }\n}\n\n\n//# sourceURL=webpack://zorklike/./src/CharacterSheet.ts?");

/***/ }),

/***/ "./src/Goblin.ts":
/*!***********************!*\
  !*** ./src/Goblin.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Goblin)\n/* harmony export */ });\n/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actor */ \"./src/Actor.ts\");\n/* harmony import */ var _CharacterSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CharacterSheet */ \"./src/CharacterSheet.ts\");\n\n\nclass Goblin extends _Actor__WEBPACK_IMPORTED_MODULE_0__.Actor {\n    constructor(biography, attributes, equipment) {\n        super(new _CharacterSheet__WEBPACK_IMPORTED_MODULE_1__.Biography(\"\", \"Fighter\" /* ClassType.Fighter */, \"Goblin\" /* RaceType.Goblin */), new _CharacterSheet__WEBPACK_IMPORTED_MODULE_1__.Attributes(1, 5, 5, 5, 5, 5, 5, 5), new _CharacterSheet__WEBPACK_IMPORTED_MODULE_1__.Equipment());\n    }\n}\n\n\n//# sourceURL=webpack://zorklike/./src/Goblin.ts?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actor */ \"./src/Actor.ts\");\n/* harmony import */ var _CharacterSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CharacterSheet */ \"./src/CharacterSheet.ts\");\n\n\nclass Player extends _Actor__WEBPACK_IMPORTED_MODULE_0__.Actor {\n    constructor(biography, attributes, equipment) {\n        super(new _CharacterSheet__WEBPACK_IMPORTED_MODULE_1__.Biography(\"Player\", \"Fighter\" /* ClassType.Fighter */, \"Human\" /* RaceType.Human */), new _CharacterSheet__WEBPACK_IMPORTED_MODULE_1__.Attributes(1, 10, 10, 10, 10, 10, 10, 10), new _CharacterSheet__WEBPACK_IMPORTED_MODULE_1__.Equipment());\n    }\n    updateCharacterSheet() {\n        const characterSheet = document.getElementById(\"characterSheet\");\n        characterSheet.value = `${this.biography.name}\\n${this.biography.race} ${this.biography.classType}\\n\\n${this.attributes.toString()}`;\n    }\n}\n\n\n//# sourceURL=webpack://zorklike/./src/Player.ts?");

/***/ }),

/***/ "./src/Room.ts":
/*!*********************!*\
  !*** ./src/Room.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Room)\n/* harmony export */ });\nclass Room {\n    constructor() {\n        this.connectedRooms = { \"north\": null, \"east\": null, \"south\": null, \"west\": null };\n        this.actorList = [];\n        this.connectedRooms = { \"north\": null, \"east\": null, \"south\": null, \"west\": null };\n        this.description = \"The starting room.\";\n    }\n}\n\n\n//# sourceURL=webpack://zorklike/./src/Room.ts?");

/***/ }),

/***/ "./src/ScreenManager.ts":
/*!******************************!*\
  !*** ./src/ScreenManager.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScreenManager)\n/* harmony export */ });\nclass ScreenManager {\n    constructor() {\n        this.consoleHistory = document.getElementById(\"consoleHistory\");\n        this.consoleInput = document.getElementById(\"consoleInput\");\n        this.characterSheet = document.getElementById(\"characterSheet\");\n        this.consoleInput.addEventListener(\"keypress\", (keypress) => {\n            if (keypress.key === \"Enter\") {\n                this.readFromConsoleInput();\n            }\n        });\n    }\n    writeToConsoleHistory(toWrite) {\n        this.consoleHistory.value += `${toWrite}\\n`;\n    }\n    clearConsoleHistroy() {\n        this.consoleHistory.value = \"\";\n    }\n    readFromConsoleInput() {\n        this.writeToConsoleHistory(this.consoleInput.value);\n        this.consoleInput.value = \"\";\n    }\n    updateCharacterSheet(player) {\n        this.characterSheet.value = `${player.biography.name}\\n${player.biography.race} ${player.biography.classType}\\n\\n${player.attributes.toString()}`;\n    }\n}\n\n\n//# sourceURL=webpack://zorklike/./src/ScreenManager.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Goblin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Goblin */ \"./src/Goblin.ts\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\n/* harmony import */ var _Room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Room */ \"./src/Room.ts\");\n/* harmony import */ var _ScreenManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScreenManager */ \"./src/ScreenManager.ts\");\n\n\n\n\nfunction main() {\n    const screenManager = new _ScreenManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    let startingRoom = new _Room__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    screenManager.writeToConsoleHistory(startingRoom.description);\n    let player = new _Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    let goblin = new _Goblin__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    startingRoom.actorList.push(player, goblin);\n    player.attack(goblin);\n    goblin.attack(player);\n    player.talk(goblin);\n    goblin.talk(player);\n    screenManager.writeToConsoleHistory(\"Greetings, adventurer!\");\n    player.updateCharacterSheet();\n}\nwindow.onload = main;\n\n\n//# sourceURL=webpack://zorklike/./src/main.ts?");

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearConsoleHistory\": () => (/* binding */ clearConsoleHistory),\n/* harmony export */   \"readFromConsoleInput\": () => (/* binding */ readFromConsoleInput),\n/* harmony export */   \"sleep\": () => (/* binding */ sleep),\n/* harmony export */   \"updateCharacterSheet\": () => (/* binding */ updateCharacterSheet),\n/* harmony export */   \"writeToConsoleHistory\": () => (/* binding */ writeToConsoleHistory)\n/* harmony export */ });\nconst writeToConsoleHistory = (toWrite) => {\n    const consoleHistory = document.getElementById(\"consoleHistory\");\n    consoleHistory.value += `${toWrite}\\n`;\n    // Handle input\n};\nconst readFromConsoleInput = () => {\n    const consoleInput = document.getElementById(\"consoleInput\");\n    writeToConsoleHistory(consoleInput.value);\n    consoleInput.value = \"\";\n};\nconst updateCharacterSheet = (player) => {\n    const characterSheet = document.getElementById(\"characterSheet\");\n    characterSheet.value = `${player.biography.name}\\n${player.biography.race} ${player.biography.classType}\\n\\n${player.attributes.toString()}`;\n};\nconst clearConsoleHistory = () => {\n    const consoleHistory = document.getElementById(\"consoleHistory\");\n    consoleHistory.value = \"\";\n};\nconst sleep = (ms) => new Promise((r) => setTimeout(r, ms));\n\n\n//# sourceURL=webpack://zorklike/./src/util.ts?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;