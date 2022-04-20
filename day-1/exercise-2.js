import { my_display_alpha } from "./exercise-1.js";

export const my_display_alpha_reverse = () => {
    let b = my_display_alpha();
    var plop = new String();
    for (var i = 25; i >= 0; i--) {
        plop += b[i];
    }
    return plop;
};

console.log(my_display_alpha_reverse());