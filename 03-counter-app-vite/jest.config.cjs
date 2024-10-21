module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Usar babel-jest para archivos JS/JSX
  },
  // testEnvironment: "node",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],
};

// export default {
//   transform: {
//     "^.+\\.jsx?$": "babel-jest", // Usar babel-jest para archivos JS/JSX
//   },
//   testEnvironment: "node",
//   moduleFileExtensions: ["js", "jsx"],
// };
