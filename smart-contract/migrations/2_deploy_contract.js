const CrowdFunding = artifacts.require("CrowdFunding");

module.exports = function (deployer) {
  const target = 1000; // In wei
  const deadline = 3600; // In seconds

  deployer.deploy(CrowdFunding, target, deadline);
};