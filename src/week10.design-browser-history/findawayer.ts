// https://leetcode.com/problems/design-browser-history/

// Runtime: 204 ms, faster than 100.00% of TypeScript online submissions for Design Browser History.
// Memory Usage: 49 MB, less than 87.50% of TypeScript online submissions for Design Browser History.

class BrowserHistory {
  private traces: string[];
  private tail: number;

  public constructor(homepage: string) {
    this.traces = [homepage];
    this.tail = 0;
  }

  public visit(url: string): void {
    const hasForward = this.tail + 1 < this.traces.length;
    if (hasForward) this.traces.splice(this.tail + 1);
    this.traces.push(url);
    this.tail += 1;
  }

  public back(steps: number): string {
    this.tail = Math.max(this.tail - steps, 0);
    return this.traces[this.tail];
  }

  public forward(steps: number): string {
    this.tail = Math.min(this.tail + steps, this.traces.length - 1);
    return this.traces[this.tail];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
describe('design-browser-history', () => {
  it('should navigate back and forth', () => {
    // [leetcode, google, facebook, *youtube]
    const browserHistory = new BrowserHistory('leetcode.com');
    browserHistory.visit('google.com');
    browserHistory.visit('facebook.com');
    browserHistory.visit('youtube.com');
    // [leetcode, google, *facebook, youtube]
    expect(browserHistory.back(1)).toBe('facebook.com');
    // [leetcode, *google, facebook, youtube]
    expect(browserHistory.back(1)).toBe('google.com');
    // [leetcode, google, *facebook, youtube]
    expect(browserHistory.forward(1)).toBe('facebook.com');
    // [leetcode, google, facebook, *linkedin]
    browserHistory.visit('linkedin.com');
    // [leetcode, google, facebook, *linkedin]
    expect(browserHistory.forward(2)).toBe('linkedin.com');
    // [leetcode, *google, facebook, linkedin]
    expect(browserHistory.back(2)).toBe('google.com');
    // [*leetcode, google, facebook, linkedin]
    expect(browserHistory.back(7)).toBe('leetcode.com');
  });
});
