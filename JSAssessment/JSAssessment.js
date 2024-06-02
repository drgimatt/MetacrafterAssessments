/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

const NFTs = []

function mintNFT (_name, _eyeColor, _shirtType, _bottomType, _shoeType, _bling) {
  const NFT = {
      "name": _name,
      "eyeColor": _eyeColor,
      "shirtType": _shirtType,
      "bottomType": _bottomType,
      "shoeType": _shoeType,
      "bling": _bling
  }

  NFTs.push(NFT);
  console.log("Minted NFT successfully: \"" + _name + "\"")

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID: \t\t" + (i+1) )
    console.log("Name: \t\t" + NFTs[i].name)
    console.log("Eye Color: \t" + NFTs[i].eyeColor)
    console.log("Shirt Type: \t" + NFTs[i].shirtType)
    console.log("Bottom Type: \t" + NFTs[i].bottomType)
    console.log("Shoe Type: \t" + NFTs[i].shoeType)
    console.log("Bling: \t\t" + NFTs[i].bling)
  }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nThere are currently " + NFTs.length + " NFTs minted.")
}

// call your functions below this line

mintNFT("Andrei","Blue","Hoodie","Shorts","Slip-on","Gold Chain");
mintNFT("Robert","Green","T-Shirt","Jeans","Highcut","Tattoos");
mintNFT("Luna","Red","Sando","Leggings","Wedges","Piercings");
mintNFT("Mary","Orange","Long Sleeves","Slacks","Lowcut","Gold Glasses");
mintNFT("Simon","Black","Turtle Neck","Jogging Pants","Boots","Silver Chain");
listNFTs();
getTotalSupply();
