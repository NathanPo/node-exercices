export const my_array_alpha = (str) => {
    let array = [];
    let count = 0;
    if (typeof(str) == "string") {
        for (const i of str) {            
            array[count] = i;
            count++;
        }
    }
    return array;
};