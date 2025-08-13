exports.checkdb=(req, res) =>{
    const { databaseName } = req.body;
    res.json({ message: `Would check database: ${databaseName}` });
};