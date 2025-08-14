exports.alterRelation = async (req, res) => {
    const{node1, node2, relationType} = req.body;
  return res.status(200).json({
    message: `will alter the relation bw the ${node1} and ${node2} to type ${relationType}`,
  });
}