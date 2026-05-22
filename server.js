const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// የጌሙ ፋይሎች ያሉበትን ፎልደር እንዲያውቅ ማድረግ
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`ሰርቨሩ በ http://localhost:${PORT} ላይ እየሰራ ነው!`);
});