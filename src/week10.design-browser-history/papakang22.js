
// Runtime: 200 ms, faster than 72.68% of JavaScript online submissions for Design Browser History.
// Memory Usage: 48.4 MB, less than 89.72% of JavaScript online submissions for Design Browser History.
/**
 * @param {string} homepage
 */
 var BrowserHistory = function(homepage) {
    this.history = [homepage]; // history 배열
    this.nowIndex = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) { 
    this.history = this.history.slice(0,this.nowIndex + 1); //visited시 현재 index 까지 배열 자름
    this.history.push(url);
    this.nowIndex = this.history.length -1; 
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.nowIndex = this.nowIndex > steps - 1 ? this.nowIndex - steps : 0;
    return this.history[this.nowIndex];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.nowIndex = this.nowIndex < this.history.length - steps - 1  ? this.nowIndex + steps : this.history.length - 1;
    return this.history[this.nowIndex];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */