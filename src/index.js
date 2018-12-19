#! /usr/bin/env node

const boxen = require("boxen");
const { bold, blue } = require("chalk").default;

const lines = [
  bold("Marius Schulz"),
  "Front End Engineer at Facebook",
  "",
  bold("       Web: ") + blue("https://mariusschulz.com"),
  bold("   Twitter: ") + blue("https://twitter.com/mariusschulz"),
  bold("    GitHub: ") + blue("https://github.com/mariusschulz"),
  bold("  LinkedIn: ") + blue("https://linkedin.com/in/mariusschulz"),
  bold("   Courses: ") + blue("https://egghead.io/instructors/marius-schulz")
];

const message = lines.join("\n");

const box = boxen(message, {
  borderColor: "blue",
  borderStyle: "round",
  margin: 1,
  padding: 1
});

process.stdout.write(box + "\n");
