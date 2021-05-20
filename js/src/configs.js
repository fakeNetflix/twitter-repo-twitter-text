// This file is generated by scripts/buildConfig.js
export default {
  version1: {
    version: 1,
    maxWeightedTweetLength: 140,
    scale: 1,
    defaultWeight: 1,
    transformedURLLength: 23,
    ranges: []
  },
  version2: {
    version: 2,
    maxWeightedTweetLength: 280,
    scale: 100,
    defaultWeight: 200,
    transformedURLLength: 23,
    ranges: [
      { start: 0, end: 4351, weight: 100 },
      { start: 8192, end: 8205, weight: 100 },
      { start: 8208, end: 8223, weight: 100 },
      { start: 8242, end: 8247, weight: 100 }
    ]
  },
  version3: {
    version: 3,
    maxWeightedTweetLength: 280,
    scale: 100,
    defaultWeight: 200,
    emojiParsingEnabled: true,
    transformedURLLength: 23,
    ranges: [
      { start: 0, end: 4351, weight: 100 },
      { start: 8192, end: 8205, weight: 100 },
      { start: 8208, end: 8223, weight: 100 },
      { start: 8242, end: 8247, weight: 100 }
    ]
  },
  defaults: {
    version: 3,
    maxWeightedTweetLength: 280,
    scale: 100,
    defaultWeight: 200,
    emojiParsingEnabled: true,
    transformedURLLength: 23,
    ranges: [
      { start: 0, end: 4351, weight: 100 },
      { start: 8192, end: 8205, weight: 100 },
      { start: 8208, end: 8223, weight: 100 },
      { start: 8242, end: 8247, weight: 100 }
    ]
  }
};