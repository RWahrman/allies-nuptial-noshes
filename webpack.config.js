module.exports = {
  entry: "./client/index.js", // assumes your entry point is the index.js in the root of your project folder
  mode: "development",
  output: {
    path: __dirname,
    filename: "public/bundle.js", //creates a bundle.js file in the public directory
  },
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // use the style-loader/css-loader combos for anything matching the .css extension
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
