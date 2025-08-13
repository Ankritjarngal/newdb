exports.alterTable = (req, res) => {
    const tableName = req.params.tableName;
    const { changes } = req.body;
    res.json({ message: `Would alter table: ${tableName}`, changes });
};
