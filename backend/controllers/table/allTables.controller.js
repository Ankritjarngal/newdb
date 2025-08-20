const supabase = require('../databases/supabaseClient');

exports.getAllTables = async (req, res) => {
  const { schemaName } = req.body;

  if (!schemaName) {
    return res.status(400).json({ error: "Schema name is required" });
  }

  try {
    const { data, error } = await supabase.rpc('list_tables', { 
      schema_name: schemaName 
    });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.json({ schema: schemaName, tables: data });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};