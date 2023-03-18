import { useEffect, useState } from 'react'
import { ethers } from "ethers"
import { Row, Form, Button } from 'react-bootstrap'
import { create as ipfsHttpClient } from 'ipfs-http-client'
const client = ipfsHttpClient({url: 'https://ipfs.infura.io:5001/api/v0'})
import { useRouter } from 'next/router';
import { NFTStorage, File } from 'nft.storage'
import Navbar from '@/components/Navbar'

import MarketplaceAbi from './datasmc/abis/maketplace.json';
import MarketplaceAddress from './datasmc/address/marketplaceAddress.json';
import NFTAbi from './datasmc/abis/NFT.json';
import NFTAddress from './datasmc/address/nftAddress.json';
declare var window: any;

type CreateProps = {
    web3Handler: any;
    address:any;
    balance: any;
    nft: any;
    marketplace: any
  }


const Create = () => {

  //   const router = useRouter();
  // const { nft , address} = router.query;


  // const [nftContract, setNFT] = useState({})

  // if(nft) {
  //   const contract = JSON.parse(Array.isArray(nft) ? nft.join('') : nft);
  //   console.log(contract, address);
  //   setNFT(contract);
  // }
 


  
  const [image, setImage] = useState('')
  const [price, setPrice] = useState<number>(0);

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  
  const provider:any = new ethers.providers.Web3Provider(window.ethereum);

  const signer:any = provider.getSigner();
  const nft:any = new ethers.Contract(NFTAddress.address, NFTAbi, signer)
  const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi, signer)

const [imageBuffer, setImageBuffer] = useState(null);

  const uploadToIPFS = async (event:any) => {

    event.preventDefault();
    const file:any = event.target.files[0]
    
    const reader:any = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
        // sử dụng buffer ở đây
        setImageBuffer(reader.result)
      };
    
  
  }




  const createNFT = async () => {
    // if (!image || !price || !name || !description) return
    // try{
    //   const result = await client.add(JSON.stringify({image, price, name, description}))
    //   mintThenList(result)
    // } catch(error) {
    //   console.log("ipfs uri upload error: ", error)
    // }


      
  const nftstorage = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQ2Yzk0QzMxRTkxMTU4MTVEQjNGMzg0ODlCOWM0RTg4QTU0OGQzOGEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NzEyMTMyMzIxMCwibmFtZSI6Ik5GVF9TVE9SQUdFX0tFWSJ9.0cZ-vUh5ouxp_TUVCThNhRA_YKmixC2Fwh5WEfTh-J8" ?? '' });

  if (imageBuffer) {
    console.log(imageBuffer)
    const { ipnft} = await nftstorage.store({
      name,
      description,
      price,
      image: new File([imageBuffer], "image", {type: "image/png"}),
    });
    console.log(ipnft)
    
    const ipfsURL = `https://ipfs.io/ipfs/${ipnft}/metadata.json`;
    console.log(ipfsURL);


    // mint nft 
    await(await nft.mint(ipfsURL)).wait()
    // get tokenId of new nft 
    const id = await nft.tokenCount()
    // approve marketplace to spend nft
    await(await nft.setApprovalForAll(marketplace.address, true)).wait()
    // add nft to marketplace
   
      // sử dụng biến price ở đây
      const listingPrice = ethers.utils.parseEther(price.toString())
      await(await marketplace.makeItem(nft.address, id, listingPrice)).wait()
 
   
  }
  
  }

  useEffect(() => {
    loadMarketplaceItems()
  }, [])
  
const [items, setItems] = useState([])
const loadMarketplaceItems = async () => {
  // Load all unsold items
  if(marketplace!==undefined) {
    const itemCount = await marketplace.itemCount()
    let items:any = []
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplace.items(i)
      alert(item)
      if (!item.sold) {
        // get uri url from nft contract
        const uri = await nft.tokenURI(item.tokenId)
        // use uri to fetch the nft metadata stored on ipfs 
        const response = await fetch(uri)
        
        const metadata = await response.json()
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(item.itemId)
        // Add item to items array
        items.push({
          totalPrice,
          itemId: item.itemId,
          seller: item.seller,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image
        })
      }
    }
    setItems(items)
  }
 
}
console.log(items);



  return (
    <>
    {/* <Navbar /> */}
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="content mx-auto">
            <Row className="g-4">
              <Form.Control
                type="file"
                required
                name="file"
                onChange={uploadToIPFS}
              />
              <Form.Control onChange={(e:any) => setName(e.target.value)} size="lg" required type="text" placeholder="Name" />
              <Form.Control onChange={(e:any) => setDescription(e.target.value)} size="lg" required as="textarea" placeholder="Description" />
              <Form.Control onChange={(e:any) => setPrice(e.target.value)} size="lg" required type="number" placeholder="Price in ETH" />
              <div className="d-grid px-0">
                <Button onClick={createNFT} variant="primary" size="lg">
                  Create & List NFT!
                </Button>
              </div>
            </Row>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}

export default Create