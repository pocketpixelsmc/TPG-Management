export const validateHeadingLevel = (level: number) => {
  if (level < 1 || level > 6) {
    console.warn(`Invalid heading level: ${level}. Using fallback level 2.`);
    return 2;
  }
  return level;
}; 