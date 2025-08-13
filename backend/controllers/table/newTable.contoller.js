const supabase = require('../databases/supabaseClient'); 

exports.createTable = async (req, res) => {
  const { schemaName, tableName, columns } = req.body;

  if (!schemaName || !tableName || !columns) {
    return res.status(400).json({ error: "Schema name, table name, and columns are required" });
  }

  try {
    const sql = `CREATE TABLE IF NOT EXISTS "${schemaName}"."${tableName}" (${columns});`;

    const { data, error } = await supabase.rpc('exec_sql', { sql });

    if (error) throw error;

    res.json({ message: `Table '${tableName}' created in schema '${schemaName}' successfully!` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
