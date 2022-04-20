export const my_size_alpha = (str) => {
    var count = 0;
    if (typeof(str) == "string") {
        for (char in str) {
            count++;
        }
    }
    return count;
};

console.log(my_size_alpha("azerty"));
