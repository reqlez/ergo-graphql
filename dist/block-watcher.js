"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockWatcher = void 0;
class BlockWatcher {
    _repository;
    _callbacks;
    _lastBlockHeight;
    _timer;
    constructor() {
        this._callbacks = [];
        this._lastBlockHeight = 0;
    }
    onNewBlock(callback) {
        if (!callback) {
            return this;
        }
        this._callbacks.push(callback);
        return this;
    }
    removeOnNewBlockListener(callback) {
        const index = this._callbacks.indexOf(callback);
        if (index > -1) {
            this._callbacks = this._callbacks.splice(index, 1);
        }
    }
    start(repository, interval = 5) {
        this._repository = repository;
        if (this._timer) {
            clearInterval(this._timer);
        }
        this._timer = setInterval(() => this._startBlockWatcher(this._repository), interval * 1000);
        return this;
    }
    _notify(height) {
        this._callbacks.forEach((callback) => callback(height));
    }
    _startBlockWatcher(repository) {
        repository
            .getMaxHeight()
            .then((height) => {
            if (!height || this._lastBlockHeight >= height) {
                return;
            }
            if (process.env.TS_NODE_DEV === "true") {
                console.log(`New block found: ${height}`);
            }
            this._lastBlockHeight = height;
            this._notify(height);
        })
            .catch((e) => {
            this._notify();
            console.error(e);
        });
    }
}
exports.blockWatcher = new BlockWatcher();
//# sourceMappingURL=block-watcher.js.map