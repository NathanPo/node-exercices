import { my_sum } from "../day-1/exercise-0.js";
import { my_display_alpha } from "../day-1/exercise-1.js";
import assert from 'assert'

describe("exercise 0", function () {
  describe("try my sum with 1 param string with int", function () {
    it("should return 0", function () {
      assert.equal(my_sum("3"), 0);
    });
  });

  describe("try my sum with 1 param string with char", function () {
    it("should return 0", function () {
      assert.equal(my_sum("3"), 0);
    });
  });

  describe("try my sum with 0 param", function () {
    it("should return 0", function () {
      assert.equal(my_sum(), 0);
    });
  });

  describe("try my sum with 0 param", function () {
    it("should return 0", function () {
      assert.equal(my_sum(), 0);
    });
  });

  describe("try my sum with 2 params invalid", function () {
    it("should return 0", function () {
      assert.equal(my_sum("1", 2), 0);
    });
  });

  describe("try my sum with 2 params valid", function () {
    it("should return result", function () {
      assert.equal(my_sum(6, 6), 12);
    });
  });
});

describe("exercise 1", function () {
  describe("try display alpha", function () {
    it("should return the arg as an array", function () {
      assert.equal(my_display_alpha(), 'abcdefghijklmnopqrstuvwxyz');
    });
  });
});
