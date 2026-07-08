module.exports = {
    default: {
      formatOptions: {
        snippetInterface: "async-await"
      },
      requireModule: [
        "ts-node/register"
      ],
      require: [
        "src/test/stepDefinitions/**/*.ts",
        "src/test/hooks/**/*.ts",
        "src/test/world/**/*.ts"
      ],
      paths: [
        "src/test/features/**/*.feature"
      ],
      publishQuiet: true,
      dryRun: false,
      timeout: 60000,
      format: [
        "snippets",
        "progress",
        "html:reports/cucumber-report.html",
        "json:reports/cucumber-report.json",
      ],
      parallel:1
    },
};
