(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * GamePiece.js
 * Basic Game object
 *
 * To make this work, you must be running the Babel transpiler, 
 * and watching for changes in this file with browserify. Two 
 * Terminal windows need to be open:
 * 1. one window where you typed the command "grunt"
 * 2. one window where you typed the command "npm start"
 */

var GamePiece = function () {
    function GamePiece(credentials) {
        _classCallCheck(this, GamePiece);

        //TODO: use super();
        this.name = credentials.name;
        this.uuid = this.setId();
    }

    /** 
     * Generate a unique ID for every game object.
     * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */


    _createClass(GamePiece, [{
        key: 'setId',
        value: function setId() {
            var d = new Date().getTime();
            if (window.performance && typeof window.performance.now === "function") {
                d += performance.now(); //use high-precision timer if available
            }
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
            return uuid;
        }

        /** 
         * Return the given name of this object.
         */

    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }

        /** 
         * Return the unique id of this object.
         */

    }, {
        key: 'getId',
        value: function getId() {
            return this.uuid;
        }
    }]);

    return GamePiece;
}();

exports.default = GamePiece;

},{}],2:[function(require,module,exports){
'use strict';

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Set up the game.
 */
var config = {
  name: 'Forest Trump or Donald Gump rulz'
};

// Make some test game objects
/**
 * Create the game. Import the primary classes, and 'composit'
 * the overall Game object out of instances of the classes.
 */
var game = new _GamePiece2.default(config);
console.log(game.getName());

//var area = new Area(config);
//console.log(area.getName());

//var character = new Character(config);
//var player = new Player(config);

var config2 = {
  name: 'Thud Mutton, Esq'
};

var something = new _GamePiece2.default(config2);
console.log(something.getName());

},{"./GamePiece.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0dhbWVQaWVjZS5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNVcUIsUztBQUVqQix1QkFBYSxXQUFiLEVBQTBCO0FBQUE7OztBQUV0QixhQUFLLElBQUwsR0FBWSxZQUFZLElBQXhCO0FBQ0EsYUFBSyxJQUFMLEdBQVksS0FBSyxLQUFMLEVBQVo7QUFDSDs7Ozs7Ozs7OztnQ0FNUTtBQUNMLGdCQUFJLElBQUksSUFBSSxJQUFKLEdBQVcsT0FBWCxFQUFSO0FBQ0EsZ0JBQUksT0FBTyxXQUFQLElBQXNCLE9BQU8sT0FBTyxXQUFQLENBQW1CLEdBQTFCLEtBQWtDLFVBQTVELEVBQXdFO0FBQ3BFLHFCQUFLLFlBQVksR0FBWixFQUFMLEM7QUFDSDtBQUNELGdCQUFJLE9BQU8sdUNBQXVDLE9BQXZDLENBQStDLE9BQS9DLEVBQXdELFVBQVUsQ0FBVixFQUFhO0FBQzVFLG9CQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTCxLQUFjLEVBQW5CLElBQXVCLEVBQXZCLEdBQTRCLENBQXBDO0FBQ0Esb0JBQUksS0FBSyxLQUFMLENBQVcsSUFBRSxFQUFiLENBQUo7QUFDQSx1QkFBTyxDQUFDLEtBQUcsR0FBSCxHQUFTLENBQVQsR0FBYyxJQUFFLEdBQUYsR0FBTSxHQUFyQixFQUEyQixRQUEzQixDQUFvQyxFQUFwQyxDQUFQO0FBQ0gsYUFKVSxDQUFYO0FBS0EsbUJBQU8sSUFBUDtBQUNIOzs7Ozs7OztrQ0FLVTtBQUNQLG1CQUFPLEtBQUssSUFBWjtBQUNIOzs7Ozs7OztnQ0FLUTtBQUNMLG1CQUFPLEtBQUssSUFBWjtBQUNIOzs7Ozs7a0JBckNnQixTOzs7OztBQ05yQjs7Ozs7Ozs7O0FBS0EsSUFBSSxTQUFTO0FBQ1QsUUFBSztBQURJLENBQWI7Ozs7Ozs7QUFLQSxJQUFJLE9BQU8sd0JBQWMsTUFBZCxDQUFYO0FBQ0EsUUFBUSxHQUFSLENBQVksS0FBSyxPQUFMLEVBQVo7Ozs7Ozs7O0FBU0EsSUFBSSxVQUFVO0FBQ1osUUFBTTtBQURNLENBQWQ7O0FBSUEsSUFBSSxZQUFZLHdCQUFjLE9BQWQsQ0FBaEI7QUFDQSxRQUFRLEdBQVIsQ0FBWSxVQUFVLE9BQVYsRUFBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiogXG4gKiBHYW1lUGllY2UuanNcbiAqIEJhc2ljIEdhbWUgb2JqZWN0XG4gKlxuICogVG8gbWFrZSB0aGlzIHdvcmssIHlvdSBtdXN0IGJlIHJ1bm5pbmcgdGhlIEJhYmVsIHRyYW5zcGlsZXIsIFxuICogYW5kIHdhdGNoaW5nIGZvciBjaGFuZ2VzIGluIHRoaXMgZmlsZSB3aXRoIGJyb3dzZXJpZnkuIFR3byBcbiAqIFRlcm1pbmFsIHdpbmRvd3MgbmVlZCB0byBiZSBvcGVuOlxuICogMS4gb25lIHdpbmRvdyB3aGVyZSB5b3UgdHlwZWQgdGhlIGNvbW1hbmQgXCJncnVudFwiXG4gKiAyLiBvbmUgd2luZG93IHdoZXJlIHlvdSB0eXBlZCB0aGUgY29tbWFuZCBcIm5wbSBzdGFydFwiXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQaWVjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoY3JlZGVudGlhbHMpIHtcbiAgICBcdC8vVE9ETzogdXNlIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IGNyZWRlbnRpYWxzLm5hbWU7XG4gICAgICAgIHRoaXMudXVpZCA9IHRoaXMuc2V0SWQoKTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGV2ZXJ5IGdhbWUgb2JqZWN0LlxuICAgICAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuICAgICAqL1xuICAgIHNldElkICgpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkLzE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXVpZDtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogUmV0dXJuIHRoZSBnaXZlbiBuYW1lIG9mIHRoaXMgb2JqZWN0LlxuICAgICAqL1xuICAgIGdldE5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBSZXR1cm4gdGhlIHVuaXF1ZSBpZCBvZiB0aGlzIG9iamVjdC5cbiAgICAgKi9cbiAgICBnZXRJZCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XG4gICAgfVxufVxuXG5cbiIsIi8qKlxuICogQ3JlYXRlIHRoZSBnYW1lLiBJbXBvcnQgdGhlIHByaW1hcnkgY2xhc3NlcywgYW5kICdjb21wb3NpdCdcbiAqIHRoZSBvdmVyYWxsIEdhbWUgb2JqZWN0IG91dCBvZiBpbnN0YW5jZXMgb2YgdGhlIGNsYXNzZXMuXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4vKipcbiAqIFNldCB1cCB0aGUgZ2FtZS5cbiAqL1xudmFyIGNvbmZpZyA9IHtcbiAgICBuYW1lOidGb3Jlc3QgVHJ1bXAgb3IgRG9uYWxkIEd1bXAgcnVseidcbn1cblxuLy8gTWFrZSBzb21lIHRlc3QgZ2FtZSBvYmplY3RzXG52YXIgZ2FtZSA9IG5ldyBHYW1lUGllY2UoY29uZmlnKTtcbmNvbnNvbGUubG9nKGdhbWUuZ2V0TmFtZSgpKTtcblxuLy92YXIgYXJlYSA9IG5ldyBBcmVhKGNvbmZpZyk7XG4vL2NvbnNvbGUubG9nKGFyZWEuZ2V0TmFtZSgpKTtcblxuLy92YXIgY2hhcmFjdGVyID0gbmV3IENoYXJhY3Rlcihjb25maWcpO1xuLy92YXIgcGxheWVyID0gbmV3IFBsYXllcihjb25maWcpO1xuXG5cbnZhciBjb25maWcyID0ge1xuICBuYW1lOiAnVGh1ZCBNdXR0b24sIEVzcSdcbn07XG5cbnZhciBzb21ldGhpbmcgPSBuZXcgR2FtZVBpZWNlKGNvbmZpZzIpO1xuY29uc29sZS5sb2coc29tZXRoaW5nLmdldE5hbWUoKSk7XG4iXX0=
