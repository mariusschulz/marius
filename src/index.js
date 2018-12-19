#! /usr/bin/env node

const boxen = require("boxen");
const { bold, cyan } = require("chalk").default;

const lines = [
  bold("Marius Schulz"),
  "Front End Engineer at Facebook",
  "",
  bold("       Web: ") + cyan("https://mariusschulz.com"),
  bold("   Twitter: ") + cyan("https://twitter.com/mariusschulz"),
  bold("    GitHub: ") + cyan("https://github.com/mariusschulz"),
  bold("  LinkedIn: ") + cyan("https://linkedin.com/in/mariusschulz"),
  bold("   Courses: ") + cyan("https://egghead.io/instructors/marius-schulz")
];

const message = lines.join("\n");

const box = boxen(message, {
  borderColor: "cyan",
  borderStyle: "round",
  margin: 1,
  padding: 1
});

process.stdout.write(box + "\n");
