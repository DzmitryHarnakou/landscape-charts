import dsv from "@rollup/plugin-dsv";

export default {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [
    dsv({
      processRow: (row, id) => {
        Object.keys(row).forEach((key) => {
          var value = row[key];
          row[key] = isNaN(+value) ? value : +value;
        });
      },
    }),
  ],
};
