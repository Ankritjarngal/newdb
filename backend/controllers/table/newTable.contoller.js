exports.createTable = (req, res) => {
    const { tableName, columns } = req.body;
    res.json({ message: `Would create table: ${tableName}`, columns });
};
