exports.deleteTable = (req, res) => {
    const tableName = req.params.tableName;
    // Call your service here later
    res.json({ message: `Would delete table: ${tableName}` });
};
