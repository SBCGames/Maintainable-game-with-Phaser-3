var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var App;
(function (App) {
    // game
    App.game = null;
})(App || (App = {}));
// -------------------------------------------------------------------------
function launch() {
    var game = new MaintainableGame.Game();
    App.game = game;
}
// -------------------------------------------------------------------------
window.onload = launch;
var MaintainableGame;
(function (MaintainableGame) {
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        // -------------------------------------------------------------------------
        function Game() {
            var _this = this;
            // default renderer
            var renderer = Phaser.AUTO;
            // init game
            _this = _super.call(this, {
                type: renderer,
                parent: "game_content",
                width: 800,
                height: 600,
                title: "Maintainable Game",
            }) || this;
            // states
            _this.scene.add("Boot", MaintainableGame.Boot);
            _this.scene.add("Preloader", MaintainableGame.Preloader);
            _this.scene.add("Menu", MaintainableGame.Menu);
            // start
            _this.scene.start("Boot");
            return _this;
        }
        return Game;
    }(Phaser.Game));
    MaintainableGame.Game = Game;
})(MaintainableGame || (MaintainableGame = {}));
var MaintainableGame;
(function (MaintainableGame) {
    var SceneBase = /** @class */ (function (_super) {
        __extends(SceneBase, _super);
        function SceneBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(SceneBase.prototype, "gameWidth", {
            // -------------------------------------------------------------------------
            get: function () {
                return this.sys.game.config.width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SceneBase.prototype, "gameHeight", {
            // -------------------------------------------------------------------------
            get: function () {
                return this.sys.game.config.height;
            },
            enumerable: true,
            configurable: true
        });
        // -------------------------------------------------------------------------
        SceneBase.prototype.setView = function () {
            // focus on center
            this.cameras.main.setScroll(-this.gameWidth / 2, -this.gameHeight / 2);
        };
        return SceneBase;
    }(Phaser.Scene));
    MaintainableGame.SceneBase = SceneBase;
})(MaintainableGame || (MaintainableGame = {}));
///<reference path = "SceneBase.ts" />
var MaintainableGame;
(function (MaintainableGame) {
    var Boot = /** @class */ (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.delay = function (ms) {
            return new Promise(function (resolve) {
                setTimeout(function () { console.log("time out"); resolve("bla"); }, ms);
            });
        };
        Boot.prototype.create = function () {
            ////console.log('1');
            ////console.log(this.getUsername());
            ////console.log('2');
            ////console.log('1');
            ////console.log(await this.getUsername());
            ////console.log('2');
            //console.log('1');
            //this.getUsername()
            //    .then(function (result: string) {
            //        console.log("promise resolve = " + result);
            //    });
            //console.log('2');
            this.scene.start("Preloader");
        };
        Boot.prototype.getUsername = function () {
            return __awaiter(this, void 0, void 0, function () {
                var value;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.delay(3000)];
                        case 1:
                            value = _a.sent();
                            console.log("done", value); //for explaining the following
                            return [2 /*return*/, value];
                    }
                });
            });
        };
        return Boot;
    }(MaintainableGame.SceneBase));
    MaintainableGame.Boot = Boot;
})(MaintainableGame || (MaintainableGame = {}));
///<reference path = "SceneBase.ts" />
var MaintainableGame;
(function (MaintainableGame) {
    var Menu = /** @class */ (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // -------------------------------------------------------------------------
        Menu.prototype.create = function () {
            console.log("Menu");
            this.cameras.main.backgroundColor = Phaser.Display.Color.ValueToColor(0x80FF80);
        };
        return Menu;
    }(MaintainableGame.SceneBase));
    MaintainableGame.Menu = Menu;
})(MaintainableGame || (MaintainableGame = {}));
///<reference path = "SceneBase.ts" />
var MaintainableGame;
(function (MaintainableGame) {
    var Preloader = /** @class */ (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // -------------------------------------------------------------------------
        Preloader.prototype.create = function () {
            console.log("Preloader");
            this.scene.start("Menu");
        };
        return Preloader;
    }(MaintainableGame.SceneBase));
    MaintainableGame.Preloader = Preloader;
})(MaintainableGame || (MaintainableGame = {}));
//# sourceMappingURL=maintainable_game.js.map