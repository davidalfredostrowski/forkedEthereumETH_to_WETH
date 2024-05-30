//require("@nomicfoundation/hardhat-toolbox");
//;
//require('@nomiclabs/hardhat-waffle');
require('@nomicfoundation/hardhat-chai-matchers');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
        networks: {
                hardhat: {
                localhost: {
                        url: "http://ec2-35-91-106-247.us-west-2.compute.amazonaws.com:8545"
            ,           chainID: 1337

                }
,
			forking: { 
				url: "https://cloudflare-eth.com/",

			}

		}
   },

        solidity: "0.8.18",
};

