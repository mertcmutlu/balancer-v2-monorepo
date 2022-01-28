import Task from '../../src/task';

export type GaugeSystemDeployment = {
  BAL: string;
  BPT: string;
  BalancerTokenAdmin: string;
};

const BAL = '0xba100000625a3754423978a60c9317c58a424e3D';
// 80-20 BAL-WETH token address
const BPT = '0x5c6Ee304399DBdB9C8Ef030aB642B10820DB8F56';

const BalancerTokenAdmin = new Task('2022xxxx-balancer-token-admin');

export default {
  BAL,
  BPT,
  BalancerTokenAdmin,
};
