module.exports = {
    preset: "jest-puppeteer",
    globals: { URL: "http://localhost:8080" },
    testMatch: [
        "**/test/**/*.test.js"
      ],
    transform: {
        '^.+\\.svelte$': 'svelte-jester',
        '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'svelte'],
    verbose: true,
    "testEnvironment": "jsdom",
};

// module.exports = {
//   transform: {
//     '^.+\\.svelte$': 'svelte-jester',
//     '^.+\\.js$': 'babel-jest',
//   },
//   moduleFileExtensions: ['js', 'svelte'],
  
// }