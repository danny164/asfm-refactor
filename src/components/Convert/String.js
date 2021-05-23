export const firstUppercase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const convertString = (value) => {
    const allLowerCase = value.toLowerCase();
    const removeSpace = allLowerCase.replace(/[ ]{2,}/g, ' ').trim();

    const removeSpecialChars = removeSpace.replace(
        /\.|\,|\+|\-|\*|\/|\-|\=|\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\{|\}|\||\\|\:|\"|\;|\'|\<|\>|\?|\[|\]|[0-9]/g,
        ''
    );

    const splitString = removeSpecialChars.split(' ');

    const result = [];

    splitString.forEach((string) => {
        return result.push(firstUppercase(string));
    });

    return result.join(' ');
};
