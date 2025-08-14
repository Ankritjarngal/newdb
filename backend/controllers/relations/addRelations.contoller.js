exports.addRelation = async (req, res) => {
    const{node1, node2, relationType} = req.body;
  return res.status(200).json({
    message: `will add a relation bw the nodes{node1} and ${node2} of type ${relationType}`,
  });
}