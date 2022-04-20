export const my_size_alpha = (str) => {
    var count = 0;
    if (typeof(str) == "string") {
        for (const i of str) {
            count++;
        }
    }
    return count;
};