export const kebapCaseToTitleCase = (colorName) => {
    const colorWithSpaces = colorName.replaceAll("-", " ");
    const colorWithCaps = colorWithSpaces.replaceAll(/\b([a-z])/g, (match) => match.toUpperCase());
    return colorWithCaps;
}
