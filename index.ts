import { ethers } from 'ethers';
import { erc20Abi } from 'viem';

import { routerAbi, liquidApi } from './routerAbi';


async function main(){
let array = ["0xCc78A0acDF847A2C1714D2A925bB4477df5d48a6", "0x0b1307dc5D90a0B60Be18D2634843343eBc098AF", "0x0EB4EE7d5Ff28cbF68565A174f7E5e186c36B4b3", "0xd6c31bA0754C4383A41c0e9DF042C62b5e918f6d", "0x463413c579D29c26D59a65312657DFCe30D545A1", "0x4243568Fa2bbad327ee36e06c16824cAd8B37819"]
const provider1 = new ethers.JsonRpcProvider(
    "https://rpc.pulsechain.com"
  );
  let signer = new ethers.Wallet("", provider1)
for(let i = 0; i < array.length; i++){



let tokenAC = new ethers.Contract(array[i], erc20Abi, signer)
let tokenAb = new ethers.Contract("0x67e3fec6F92e1bCD82E1CD96835220FF9121595E", erc20Abi, signer)
const liquidityCheckerAddress = "0xB55BfD2dd5232653E08c6766B44c0Ba96A495552";

const liquidityChecker = new ethers.Contract(liquidityCheckerAddress, liquidApi, provider1);
let lpCheck11 = await   liquidityChecker.searchLiqPairB(array[i], "0xA1077a294dDE1B09bB078844df40758a5D0f9a27")
let lpCheck12 = await   liquidityChecker.searchLiqPairB(array[i], "0x67e3fec6F92e1bCD82E1CD96835220FF9121595E")

try{
if(lpCheck11[1] > lpCheck12[1]){
    let router = new ethers.Contract(lpCheck11[3] === ethers.ZeroAddress ? "0x165C3410fC91EF562C50559f7d2289fEbed552d9" : lpCheck11[3], routerAbi, signer)
    let router2 = new ethers.Contract("0x165C3410fC91EF562C50559f7d2289fEbed552d9", routerAbi, signer)
    let g1 = await tokenAC.balanceOf(signer.address)
 
    let g =  await router.swapExactTokensForTokens.staticCall(g1, 0, [array[i], "0xA1077a294dDE1B09bB078844df40758a5D0f9a27", "0x67e3fec6F92e1bCD82E1CD96835220FF9121595E"], signer.getAddress(), "99999999999999999999999999999999")

    await tokenAC.approve("0x165C3410fC91EF562C50559f7d2289fEbed552d9", g1)
    await tokenAb.approve("0x165C3410fC91EF562C50559f7d2289fEbed552d9", g[2])
    let moo =  await router2.addLiquidity(array[i], "0x67e3fec6F92e1bCD82E1CD96835220FF9121595E",        
     await tokenAC.balanceOf(signer.getAddress()), g[2],
      0, 0, "0x67e3fec6F92e1bCD82E1CD96835220FF9121595E", "99999999999999999999999999999999999")
    await moo.wait()
      console.log(moo)




}

else{
    let router = new ethers.Contract(lpCheck12[3] === ethers.ZeroAddress ? "0x165C3410fC91EF562C50559f7d2289fEbed552d9" : lpCheck12[3], routerAbi, signer)
    let router2 = new ethers.Contract("0x165C3410fC91EF562C50559f7d2289fEbed552d9", routerAbi, signer)
let g1 = await tokenAC.balanceOf(signer.address)

let g =  await router.swapExactTokensForTokens.staticCall(g1, 0, [array[i], "0x67e3fec6F92e1bCD82E1CD96835220FF9121595E"], signer.getAddress(), "99999999999999999999999999999999")

console.log(g)
await tokenAC.approve("0x165C3410fC91EF562C50559f7d2289fEbed552d9", g1)
await tokenAb.approve("0x165C3410fC91EF562C50559f7d2289fEbed552d9", g[2])
let moo =  await router2.addLiquidity(array[i], "0x67e3fec6F92e1bCD82E1CD96835220FF9121595E", 
   
 await tokenAC.balanceOf(signer.getAddress()), g[2],
  0, 0, "0x67e3fec6F92e1bCD82E1CD96835220FF9121595E", "99999999999999999999999999999999999")
await moo.wait()
  console.log(moo)





}
}catch(err){ 
    console.log(err)
    continue}


}


}

main()