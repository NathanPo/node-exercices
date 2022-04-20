export const my_display_alpha = () => {
    var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var orderedAlpha = new String();
    for (let i = 0; i <= 25; i++) {
        orderedAlpha += alpha[i];
    }
    return orderedAlpha;
};
