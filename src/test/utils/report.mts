import * as report from "multiple-cucumber-html-reporter";
report.generate({
    jsonDir: "reports",
    reportPath: "./",
    reportName: "Playwright BDD Report",
    pageTitle: "Test report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "118",
        },
        device: "Rishwanth - Machine",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
    customData: {
        title: "Test info",
        data: [
            { label: "Project", value: "DemoWebShop Ninja" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" },],
    },
});