const supabase = require('../databases/supabaseClient'); 
exports.deleteTable = (req, res) => {
    const tableName = req.body.tableName;
    const schema = req.body.schemaName;
    if(!tableName || !schema) {
        return res.status(400).json({ error: "Table name and schema are required" });
    }
    const sql = `DROP TABLE IF EXISTS "${schema}"."${tableName}";`;
    supabase.rpc('exec_sql', { sql })
        .then(({ data, error }) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.json({ message: `Table '${tableName}' deleted successfully from schema '${schema}'` });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });

};
