const fs = require('fs');

function parseLogFile(filePath) {
    const pageViews = {};
    const uniqueViews = {};

    const lines = fs.readFileSync(filePath, 'utf-8').split('\n').filter(Boolean);

    for (const line of lines) {
        const [page, ip] = line.split(' ');

        pageViews[page] = (pageViews[page] || 0) + 1;

        if (!uniqueViews[page]) {
            uniqueViews[page] = new Set();
        }
        uniqueViews[page].add(ip);
    }

    const mostViews = Object.entries(pageViews).sort((a, b) => b[1] - a[1]);
    const mostUniqueViews = Object.entries(uniqueViews)
        .map(([page, ips]) => [page, ips.size])
        .sort((a, b) => b[1] - a[1]);

    return { mostViews, mostUniqueViews };
}

module.exports = { parseLogFile };

if (require.main === module) {
    const filePath = './web.log';
    const { mostViews, mostUniqueViews } = parseLogFile(filePath);

    console.log("Most Page Views:");
    mostViews.forEach(([page, views]) => console.log(`${page} ${views} visits`));

    console.log("\nMost Unique Page Views:");
    mostUniqueViews.forEach(([page, uniqueViews]) => console.log(`${page} ${uniqueViews} unique views`));
}
