const fs = require('fs');
const path = require('path');

test('El archivo index.html contiene Hola Mundo', () => {
    const filePath = path.resolve(__dirname, '../index.html');
    const htmlContent = fs.readFileSync(filePath, 'utf8');
    expect(htmlContent).toMatch(/¡Hola Mundo!/);
});
