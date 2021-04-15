const { ethers } = require("ethers");


function main(args){
  const wallet = new ethers.Wallet(Buffer.from(args.privateKey));
  
  
  
  const hash = ethers.utils.hashMessage(args.msg);
  const signature = args.signature;
  const recoveredKeyUncompressed = ethers.utils.recoverPublicKey(hash, signature);
  const recoveredKey = ethers.utils.computePublicKey(recoveredKeyUncompressed, true);

  console.log();
  if(recoveredKey.slice(2) === args.publicKey){
    console.log('Signature OK');
  }
  else{
    console.log('Bad signature');
  }
}

function usage(){
  console.log('usage:');
  console.log('node ./index.js --publicKey pub --privateKey priv --msg msg --signature sig');
}

function getArgs(args){
  let publicKey, privateKey, msg, signature;
  let _args = args.slice(0);

  _args.shift();
  _args.shift();

  let a = _args.shift();
  while(a){

    if(a === '--publicKey'){
      publicKey = _args.shift();
    }
    else if(a === '--privateKey'){
      privateKey = _args.shift();
    }
    else if(a === '--msg'){
      msg = _args.shift();
    }
    else if(a === '--signature'){
      signature = _args.shift();
    }

    a = _args.shift();
  }

  if(!publicKey || !privateKey || !msg || !signature){
    usage();
    process.exit(0);
  }

  return {publicKey, privateKey, msg, signature};
}

let args  = getArgs(process.argv);
main(args);
