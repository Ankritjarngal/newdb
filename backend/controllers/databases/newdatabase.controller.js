const supabase = require('./supabaseClient');

exports.newdb = async (req, res) => {
    const { databaseName } = req.body;
    
    try {
        if (!databaseName || typeof databaseName !== 'string') {
            return res.status(400).json({ error: 'Valid database name is required' });
        }
        
        const cleanDbName = databaseName.toLowerCase().replace(/[^a-z0-9_]/g, '_');
        const sql = `CREATE SCHEMA IF NOT EXISTS "${cleanDbName}";`;
        const { data, error } = await supabase.rpc('exec_sql', { sql });
        if (error) {
            console.error('Supabase RPC error:', error);
            throw error;
        }
        if (data && !data.success) {
            return res.status(500).json({ error: data.error });
        }        
        res.json({ 
            success: true,
            message: `Schema '${cleanDbName}' created successfully!`,
            schemaName: cleanDbName
        });
        
    } catch (err) {
        console.error('Database creation error:', err);
        res.status(500).json({ 
            error: err.message || 'Failed to create database schema'
        });
    }
};