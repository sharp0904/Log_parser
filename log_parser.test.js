const fs = require('fs');
const path = require('path');
const { parseLogFile } = require('./log_parser');

const mockLog = `
/index 104.181.16.140
/contact 227.32.4.180
/contact 75.42.157.122
/contact 124.227.101.198
/products/1 242.179.160.190
/contact 75.42.157.122
/products/1 242.179.160.190
`;

const mockLogPath = path.join(__dirname, 'mock_web.log');

beforeAll(() => {
    fs.writeFileSync(mockLogPath, mockLog.trim());
});

afterAll(() => {
    fs.unlinkSync(mockLogPath);
});

test('Most Page Views are calculated correctly', () => {
    const { mostViews } = parseLogFile(mockLogPath);
    expect(mostViews).toEqual([
        ['/contact', 4],
        ['/products/1', 2],
        ['/index', 1],
    ]);
});

test('Most Unique Page Views are calculated correctly', () => {
    const { mostUniqueViews } = parseLogFile(mockLogPath);
    expect(mostUniqueViews).toEqual([
        ['/contact', 3],
        ['/index', 1],
        ['/products/1', 1],
    ]);
});
