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
var Utils;
(function (Utils) {
    var ObjectUtils = /** @class */ (function () {
        function ObjectUtils() {
        }
        // -------------------------------------------------------------------------
        ObjectUtils.loadJson = function (fileName) {
            return new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.open('GET', fileName, true);
                request.responseType = 'json';
                request.onload = function () {
                    if (request.status === 200) {
                        resolve(request.response);
                    }
                    else {
                        reject(new Error("Error loading " + fileName + ": " + request.statusText));
                    }
                };
                request.onerror = function () {
                    reject(new Error("Network error while loading " + fileName));
                };
                request.send();
            });
        };
        // -------------------------------------------------------------------------
        ObjectUtils.loadValuesIntoObject = function (jsonData, targetObject) {
            console.log("----- loading values into " + targetObject.name + " -----");
            for (var property in jsonData) {
                console.log("name = " + property + ", value = " + jsonData[property]);
                targetObject[property] = jsonData[property];
            }
            console.log("------------------------------------------------");
        };
        return ObjectUtils;
    }());
    Utils.ObjectUtils = ObjectUtils;
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    var StorageUtils = /** @class */ (function () {
        function StorageUtils() {
        }
        Object.defineProperty(StorageUtils, "sponsorStorage", {
            // -------------------------------------------------------------------------
            set: function (sponsorStorage) {
                StorageUtils._sponsorStorage = sponsorStorage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorageUtils, "allowMultipleRequests", {
            // -------------------------------------------------------------------------
            set: function (allowMultipleRequests) {
                StorageUtils._allowMultipleRequests = allowMultipleRequests;
            },
            enumerable: true,
            configurable: true
        });
        // -------------------------------------------------------------------------
        StorageUtils.save = function (key, data) {
            return __awaiter(this, void 0, void 0, function () {
                var sponsorStorage, storage, dataString;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // check if any load/save request is still running
                            if (!StorageUtils._allowMultipleRequests && StorageUtils._requestsCounter > 0) {
                                throw new Error("Previous load/save request was not finished yet");
                            }
                            ++StorageUtils._requestsCounter;
                            sponsorStorage = StorageUtils._sponsorStorage;
                            if (!(sponsorStorage !== null)) return [3 /*break*/, 2];
                            // save
                            return [4 /*yield*/, sponsorStorage.save(key, data)];
                        case 1:
                            // save
                            _a.sent();
                            // fallback set to true? Use also standard local storage?
                            if (!sponsorStorage.fallbackToStandardStorage()) {
                                --StorageUtils._requestsCounter;
                                return [2 /*return*/];
                            }
                            _a.label = 2;
                        case 2:
                            storage = StorageUtils.getLocalStorage();
                            if (storage !== null) {
                                dataString = JSON.stringify(data);
                                console.log("saving key " + key + ": " + dataString);
                                storage.setItem(key, dataString);
                            }
                            else {
                                --StorageUtils._requestsCounter;
                                throw new Error("Standard storage not available");
                            }
                            --StorageUtils._requestsCounter;
                            return [2 /*return*/];
                    }
                });
            });
        };
        // -------------------------------------------------------------------------
        StorageUtils.load = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                var data, sponsorStorage, storage, dataString;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // check if any load/save request is still running
                            if (!StorageUtils._allowMultipleRequests && StorageUtils._requestsCounter > 0) {
                                throw new Error("Previous load/save request was not finished yet");
                            }
                            ++StorageUtils._requestsCounter;
                            data = null;
                            sponsorStorage = StorageUtils._sponsorStorage;
                            if (!(sponsorStorage !== null)) return [3 /*break*/, 2];
                            return [4 /*yield*/, sponsorStorage.load(key)];
                        case 1:
                            // save
                            data = _a.sent();
                            // if got some data (not null or undefined) or fallback to standard storage not not allowed
                            if (data != null || !sponsorStorage.fallbackToStandardStorage()) {
                                --StorageUtils._requestsCounter;
                                return [2 /*return*/, data];
                            }
                            _a.label = 2;
                        case 2:
                            storage = StorageUtils.getLocalStorage();
                            if (storage !== null) {
                                dataString = storage.getItem(key);
                                console.log("loading key " + key + ": " + dataString);
                                data = JSON.parse(dataString);
                            }
                            else {
                                --StorageUtils._requestsCounter;
                                throw new Error("Standard storage not available");
                            }
                            --StorageUtils._requestsCounter;
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        // -------------------------------------------------------------------------
        StorageUtils.getLocalStorage = function () {
            try {
                if ("localStorage" in window && window["localStorage"] != null) {
                    return localStorage;
                }
            }
            catch (e) {
                return null;
            }
            return null;
        };
        StorageUtils._sponsorStorage = null;
        StorageUtils._allowMultipleRequests = false;
        StorageUtils._requestsCounter = 0;
        return StorageUtils;
    }());
    Utils.StorageUtils = StorageUtils;
})(Utils || (Utils = {}));
var App;
(function (App) {
    var Settings = /** @class */ (function () {
        function Settings() {
            // music and sound
            this.musicOn = true;
            this.soundOn = true;
        }
        return Settings;
    }());
    App.Settings = Settings;
})(App || (App = {}));
/// <reference path ="Settings.ts" />
var App;
(function (App) {
    // game
    App.game = null;
    // settings
    App.settings = new App.Settings();
})(App || (App = {}));
// -------------------------------------------------------------------------
function launch() {
    return __awaiter(this, void 0, void 0, function () {
        var configJson, e_1, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    configJson = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Utils.ObjectUtils.loadJson("assets/config.json")];
                case 2:
                    configJson = _a.sent();
                    Utils.ObjectUtils.loadValuesIntoObject(configJson, App.Config);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    throw e_1;
                case 4:
                    game = new MaintainableGame.Game();
                    App.game = game;
                    return [2 /*return*/];
            }
        });
    });
}
// -------------------------------------------------------------------------
window.onload = launch;
var App;
(function (App) {
    var Config = /** @class */ (function () {
        function Config() {
        }
        // game dimensions
        Config.GAME_WIDTH = 800;
        Config.GAME_HEIGHT = 600;
        // saving
        Config.SAVE_KEY = "maintainable_game_save";
        return Config;
    }());
    App.Config = Config;
})(App || (App = {}));
var MaintainableGame;
(function (MaintainableGame) {
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        // --------------------------------------------------------------------
        function Game() {
            var _this = this;
            // default renderer
            var renderer = Phaser.AUTO;
            // init game
            _this = _super.call(this, {
                type: renderer,
                parent: "game_content",
                width: App.Config.GAME_WIDTH,
                height: App.Config.GAME_HEIGHT,
                title: "Maintainable Game",
            }) || this;
            // load user settings
            Utils.StorageUtils.load(App.Config.SAVE_KEY)
                .then(function (data) {
                // if data is not null and not undefined
                if (data != null) {
                    App.settings = data;
                }
            });
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
            // --------------------------------------------------------------------
            get: function () {
                return this.sys.game.config.width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SceneBase.prototype, "gameHeight", {
            // --------------------------------------------------------------------
            get: function () {
                return this.sys.game.config.height;
            },
            enumerable: true,
            configurable: true
        });
        // --------------------------------------------------------------------
        SceneBase.prototype.setView = function () {
            // focus on center
            this.cameras.main.centerOn(0, 0);
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
        // --------------------------------------------------------------------
        Boot.prototype.create = function () {
            console.log("Boot");
            this.scene.start("Preloader");
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
        // --------------------------------------------------------------------
        Menu.prototype.create = function () {
            console.log("Menu");
            // bacground color
            this.cameras.main.backgroundColor = Phaser.Display.Color.ValueToColor(0x808080);
            // focus on 0, 0
            this.setView();
            // sound and music icons
            this.addAudioControlls();
        };
        // --------------------------------------------------------------------
        Menu.prototype.addAudioControlls = function () {
            var y = -this.gameHeight / 2 + 50;
            // sound
            var soundIconFrame = App.settings.soundOn ? "IconSoundOn" : "IconSoundOff";
            var sound = this.add.sprite(-40, y, "Sprites", soundIconFrame);
            sound.setInteractive();
            sound.on("pointerdown", function () {
                App.settings.soundOn = !App.settings.soundOn;
                sound.setFrame(App.settings.soundOn ? "IconSoundOn" : "IconSoundOff");
                this.saveSettings();
            }, this);
            // music
            var musicIconFrame = App.settings.musicOn ? "IconMusicOn" : "IconMusicOff";
            var music = this.add.sprite(40, y, "Sprites", musicIconFrame);
            music.setInteractive();
            music.on("pointerdown", function () {
                App.settings.musicOn = !App.settings.musicOn;
                music.setFrame(App.settings.musicOn ? "IconMusicOn" : "IconMusicOff");
                this.saveSettings();
            }, this);
        };
        // --------------------------------------------------------------------
        Menu.prototype.saveSettings = function () {
            Utils.StorageUtils.save(App.Config.SAVE_KEY, App.settings)
                .then(function () {
                console.log("Settings saved...");
            });
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
        Preloader.prototype.preload = function () {
            console.log("Loading assets...");
            // load atlas with test sprites
            this.load.atlas("Sprites", "assets/sprites/Sprites.png", "assets/sprites/Sprites.json");
        };
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