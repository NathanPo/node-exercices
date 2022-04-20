import { my_sum } from "../day-1/exercise-0.js";
import { my_display_alpha } from "../day-1/exercise-1.js";
import { my_display_alpha_reverse } from "../day-1/exercise-2.js";
import { my_size_alpha } from "../day-1/exercise-4.js";
import { my_array_alpha } from "../day-1/exercise-5.js";
import { my_length_array } from "../day-1/exercise-6.js";

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

describe("exercise 2", function () {
  describe("try display alpha", function () {
    it("should return the arg as an array", function () {
      assert.equal(my_display_alpha_reverse(), 'zyxwvutsrqponmlkjihgfedcba');
    });
  });
});

describe("exercise 4", function () {
  describe("try display alpha", function () {
    it("should return the arg as an array", function () {
      assert.equal(my_size_alpha("azerty"), 6);
    });
  });

  describe("try display alpha", function () {
    it("should return the arg as an array", function () {
      assert.equal(my_size_alpha(1), 0);
    });
  });
});


// describe("exercise 5", function () {
//   describe("try display alpha", function () {
//     it("should return the arg as an array", function () {
//       assert.equal(my_array_alpha("str"), ['s', 't', 'r']);
//     });
//   });
// });


describe("exercise 6", function () {
  describe("try display alpha", function () {
    it("should return the arg as an array", function () {
      assert.equal(my_length_array(["1", 2, 23432, "RZEQFDS"]), 4);
    });
  });
});
