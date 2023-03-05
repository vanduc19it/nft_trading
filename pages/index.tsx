import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { Avatar, Button } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined  } from '@ant-design/icons';

const inter = Inter({ subsets: ['latin'] })
const a = "aa"
export default function Home() {
  return (
    <>
      <Head>
        <title>OpenSea Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <div className={styles.intro}>
            <div className={styles.h1}>
                <p>
                  Buy, Sell, And 
                  <Image className={styles.img1}src="/picture3.png" alt="" width={210} height={70}/> Showcase Super NFTs <Image src="/picture2.png" alt="" width={70} height={70}/>
                </p> 
            </div>
            
            <div className={styles.h2}>
              <p>Discover, collect, and sell extraordinary NFTs through our awesome platform. Express yourself by your artwork though us.</p>
              <Button className={styles.button_explore}>Explore NFTs</Button>
            </div>
       
        </div>

        <div className={styles.img_intro}>
        <Image className={styles.img1}src="/intro1.png" alt="" width={370} height={430}/> 
        <Image className={styles.img1}src="/intro2.png" alt="" width={270} height={430}/> 
        <Image className={styles.img1}src="/intro3.png" alt="" width={470} height={430}/>
        </div>
      
        <div className={styles.banner}>
          <Image className={styles.banner_img}src="/banner.png" alt="" 
      width={1490} height={146}/> 
        </div>

        <div className={styles.detail}>
          <Image className={styles.detail_img}src="/detail1.png" alt="" 
          width={470} height={470}/> 
          <div className={styles.vertical_line}></div>
          <div>
              <h2 className={styles.detail_title}>JUNK FOOD PARTY #137</h2>
              <p className={styles.detail_description}>Created by MitsuoKatori</p>
              <div className={styles.time}>
                <div className={styles.detail_time}>0 <p className={styles.detail_time_1}>DAYS</p></div>
                <div className={styles.detail_time}>4<p className={styles.detail_time_1}>HRS</p> </div>
                <div className={styles.detail_time}>17 <p className={styles.detail_time_1}>MINS</p></div>
                <div className={styles.detail_time}>59<p className={styles.detail_time_1}>SECS</p></div>
              </div>
              <p className={styles.current_bid}>Current Bid</p>
              <h3 className={styles.price}>1.0324 ETH</h3>
              <div className={styles.btn_detail}>
                <Button className={styles.btn_place_bid}>Place a Bid</Button>
                <Button className={styles.btn_view_art}>View ArtWork</Button>
              </div>
          </div>
        </div>

        {/* feature collection */}
        <div className={styles.collection}>
          <h2 className={styles.collection_heading}>Featured Collections <Image className={styles.fire_img}src="/fire.png" alt="" 
          width={33} height={44}/></h2> 
          <p className={styles.collection_des}>Discover, collect, and sell extraordinary NFTs through<br/> our awesome platform.</p>

          <div>
            <div className={styles.card}>
                <div className={styles.nft_card}>
                    <Image className={styles.nft_img}src="/nft_image/nft1.png" alt="" 
                    width={500} height={600}/>
                    <h4 className={styles.nft_name}>LuppyclubOfficial</h4>
                    <p className={styles.nft_author}>Created by LuppyclubOfficial</p>

                    <div className={styles.nft_info} >
                      <div>
                        <p className={styles.info_name}>Current Bid</p>
                        <h5 className={styles.info_detail}>1.0324 ETH</h5>
                      </div>
                      <div >
                        <p className={styles.info_name}>Remaining Time</p>
                        <h5 className={styles.info_detail}>12 : 03 : 44 </h5>
                      </div>
                    </div>
                </div>
                <div className={styles.nft_card}>
                    <Image className={styles.nft_img}src="/nft_image/nft1.png" alt="" 
                    width={500} height={600}/>
                    <h4 className={styles.nft_name}>LuppyclubOfficial</h4>
                    <p className={styles.nft_author}>Created by LuppyclubOfficial</p>

                    <div className={styles.nft_info} >
                      <div>
                        <p className={styles.info_name}>Current Bid</p>
                        <h5 className={styles.info_detail}>1.0324 ETH</h5>
                      </div>
                      <div >
                        <p className={styles.info_name}>Remaining Time</p>
                        <h5 className={styles.info_detail}>12 : 03 : 44 </h5>
                      </div>
                    </div>
                </div>
                <div className={styles.nft_card}>
                    <Image className={styles.nft_img}src="/nft_image/nft1.png" alt="" 
                    width={500} height={600}/>
                    <h4 className={styles.nft_name}>LuppyclubOfficial</h4>
                    <p className={styles.nft_author}>Created by LuppyclubOfficial</p>

                    <div className={styles.nft_info} >
                      <div>
                        <p className={styles.info_name}>Current Bid</p>
                        <h5 className={styles.info_detail}>1.0324 ETH</h5>
                      </div>
                      <div >
                        <p className={styles.info_name}>Remaining Time</p>
                        <h5 className={styles.info_detail}>12 : 03 : 44 </h5>
                      </div>
                    </div>
                </div>
                <div className={styles.nft_card}>
                <Image className={styles.nft_img}src="/nft_image/nft2.png" alt="" 
                    width={500} height={600}/>
                    <h4 className={styles.nft_name}>LuppyclubOfficial</h4>
                    <p className={styles.nft_author}>Created by LuppyclubOfficial</p>

                    <div className={styles.nft_info} >
                      <div>
                        <p className={styles.info_name}>Current Bid</p>
                        <h5 className={styles.info_detail}>1.0324 ETH</h5>
                      </div>
                      <div >
                        <p className={styles.info_name}>Remaining Time</p>
                        <h5 className={styles.info_detail}>12 : 03 : 44 </h5>
                      </div>
                    </div>
                </div>
                <div className={styles.nft_card}>
                    <Image className={styles.nft_img}src="/nft_image/nft2.png" alt="" 
                    width={500} height={600}/>
                    <h4 className={styles.nft_name}>LuppyclubOfficial</h4>
                    <p className={styles.nft_author}>Created by LuppyclubOfficial</p>

                    <div className={styles.nft_info} >
                      <div>
                        <p className={styles.info_name}>Current Bid</p>
                        <h5 className={styles.info_detail}>1.0324 ETH</h5>
                      </div>
                      <div >
                        <p className={styles.info_name}>Remaining Time</p>
                        <h5 className={styles.info_detail}>12 : 03 : 44 </h5>
                      </div>
                    </div>
                </div>
                <div className={styles.nft_card}>
                    <Image className={styles.nft_img}src="/nft_image/nft2.png" alt="" 
                    width={500} height={600}/>
                    <h4 className={styles.nft_name}>LuppyclubOfficial</h4>
                    <p className={styles.nft_author}>Created by LuppyclubOfficial</p>

                    <div className={styles.nft_info} >
                      <div>
                        <p className={styles.info_name}>Current Bid</p>
                        <h5 className={styles.info_detail}>1.0324 ETH</h5>
                      </div>
                      <div >
                        <p className={styles.info_name}>Remaining Time</p>
                        <h5 className={styles.info_detail}>12 : 03 : 44 </h5>
                      </div>
                    </div>
                </div>
                
            </div>
          </div>

          {/* btn view more */}
          <div className={styles.view_more}>
          <Button className={styles.btn_view_more}>View More</Button>
          </div>
          
        </div>
        
        {/* category  */}

        <div className={styles.category}>
            <div className={styles.category_title}>
                <h2 >Browse by Category</h2>
                <div className={styles.btn_arrow}>
                  <Button className={styles.btn_left}><ArrowLeftOutlined /></Button>
                  <Button className={styles.btn_right}><ArrowRightOutlined /></Button>
                </div>
            </div>
            <div className={styles.nft_category}>
                <div className={styles.card_category}>
                        <Image className={styles.category_img}src="/nft_category/category1.png" alt="" 
                        width={500} height={500}/>
                        <Button className={styles.btn_category}>Art</Button>
                </div>
                <div className={styles.card_category}>
                        <Image className={styles.category_img}src="/nft_category/category2.png" alt="" 
                        width={500} height={500}/>
                        <Button className={styles.btn_category}>Music</Button>
                </div>
                <div className={styles.card_category}>
                        <Image className={styles.category_img}src="/nft_category/category3.png" alt="" 
                        width={500} height={500}/>
                        <Button className={styles.btn_category}>Photography</Button>
                </div>
                <div className={styles.card_category}>
                        <Image className={styles.category_img}src="/nft_category/category4.png" alt="" 
                        width={500} height={500}/>
                        <Button className={styles.btn_category}>Sports</Button>
                </div>

            </div>
            
        </div>
      
      {/* top collection */}
        <div className={styles.top_collection}>
            <h3>Top Collections</h3>
            <div className={styles.btn_choose_collection}>
                <Button className={styles.btn_choose}>Today</Button>
                <Button className={styles.btn_choose}>Last 7 Days</Button>
                <Button className={styles.btn_choose}>Last 30 Days</Button>
            </div>
            <div className={styles.card_collections}>
                <div className={styles.card_collection}> 
                    <div className={styles.collection_info}>
                    <Avatar className={styles.avatar} src="/nft_users/user1.png" alt="" size={54}/>
                    <div>
                      <h4>CloneX</h4>
                      <p >302.6K ETH</p>
                    </div>
                    </div>
                    <p className={styles.collection_percent}>+70.05%</p>
                </div>
                <div className={styles.card_collection}> 
                    <div className={styles.collection_info}>
                    <Avatar className={styles.avatar} src="/nft_users/user1.png" alt="" size={54}/>
                    <div>
                      <h4>CloneX</h4>
                      <p >302.6K ETH</p>
                    </div>
                    </div>
                    <p className={styles.collection_percent}>+70.05%</p>
                </div>
                <div className={styles.card_collection}> 
                    <div className={styles.collection_info}>
                    <Avatar className={styles.avatar} src="/nft_users/user1.png" alt="" size={54}/>
                    <div>
                      <h4>CloneX</h4>
                      <p >302.6K ETH</p>
                    </div>
                    </div>
                    <p className={styles.collection_percent}>+70.05%</p>
                </div>
                <div className={styles.card_collection}> 
                    <div className={styles.collection_info}>
                    <Avatar className={styles.avatar} src="/nft_users/user1.png" alt="" size={54}/>
                    <div>
                      <h4>CloneX</h4>
                      <p >302.6K ETH</p>
                    </div>
                    </div>
                    <p className={styles.collection_percent}>+70.05%</p>
                </div>
                <div className={styles.card_collection}> 
                    <div className={styles.collection_info}>
                    <Avatar className={styles.avatar} src="/nft_users/user1.png" alt="" size={54}/>
                    <div>
                      <h4>CloneX</h4>
                      <p >302.6K ETH</p>
                    </div>
                    </div>
                    <p className={styles.collection_percent}>+70.05%</p>
                </div>
                <div className={styles.card_collection}> 
                    <div className={styles.collection_info}>
                    <Avatar className={styles.avatar} src="/nft_users/user1.png" alt="" size={54}/>
                    <div>
                      <h4>CloneX</h4>
                      <p >302.6K ETH</p>
                    </div>
                    </div>
                    <p className={styles.collection_percent}>+70.05%</p>
                </div>
            </div>
            <Button className={styles.btn_view_collection}>View All Collections</Button>

        </div>

        {/* most poplar artist */}
        <div className={styles.artist}>
            <div className={styles.category_title}>
                <h2>Most Popular Artist</h2>
                <div className={styles.btn_arrow}>
                  <Button className={styles.btn_left}><ArrowLeftOutlined /></Button>
                  <Button className={styles.btn_right}><ArrowRightOutlined /></Button>
                </div>
            </div>

            <div className={styles.nft_artist}>
                <div className={styles.card_artist}>
                        <Image className={styles.artist_img}src="/bg1.png" alt="" 
                        width={500} height={500}/>
                        <div className={styles.artist_info}>
                          <div>
                              <h4>Mitchell Starc</h4>
                              <p>20,600+ Items</p>
                          </div>
                          <Button className={styles.btn_artist}>Follow</Button>
                        </div>
                        
                </div>
                <div className={styles.card_artist}>
                        <Image className={styles.artist_img}src="/bg2.png" alt="" 
                        width={500} height={500}/>
                        <div className={styles.artist_info}>
                          <div>
                              <h4>Mitchell Starc</h4>
                              <p>20,600+ Items</p>
                          </div>
                          <Button className={styles.btn_artist}>Follow</Button>
                        </div>
                        
                </div>
                <div className={styles.card_artist}>
                        <Image className={styles.artist_img}src="/bg3.png" alt="" 
                        width={500} height={500}/>
                        <div className={styles.artist_info}>
                          <div>
                              <h4>Mitchell Starc</h4>
                              <p>20,600+ Items</p>
                          </div>
                          <Button className={styles.btn_artist}>Follow</Button>
                        </div>
                        
                </div>
               
               
            </div>
            <div className={styles.btn_view_artist}>
            <Button className={styles.btn_view_collection}>View All Artist</Button>
            </div>
             
        </div>

        {/* how it work */}
        <div className={styles.help_title}>
        <h3>How it Works</h3>
            <div className={styles.help}>
                <div className={styles.card_help}>
                    <Image className={styles.help_img}src="/help/help1.png" alt="" 
                            width={500} height={500}/>
                    <h4>Set up your wallet</h4>
                    <p>Once you’ve set up your wallet of choice, connect it to our platform by clicking the wallet icon.</p>
                </div>
                <div className={styles.card_help}>
                    <Image className={styles.help_img}src="/help/help2.png" alt="" 
                            width={500} height={500}/>
                    <h4>Create your collection</h4>
                    <p>Click your collection. Add social links, profile & banner images, and set a secondary sales fee.</p>
                </div>
                <div className={styles.card_help}>
                    <Image className={styles.help_img}src="/help/help3.png" alt="" 
                            width={500} height={500}/>
                    <h4>Add your NFTs</h4>
                    <p>Upload your work (image, video, audio, or 3D art), add a title and description.</p>
                </div>
            </div>
        </div>

        {/* join our community */}
        <div className={styles.community}> 
            <Image className={styles.community_img}src="/community.png" alt="" 
                            width={600} height={500}/>
            <h2>Join our community</h2>
            <p>Discover, collect, and sell extraordinary NFTs through our awesome platform.</p>
            <Button className={styles.btn_community}>Get Started</Button>
        </div>

      </main>
    </>
  )
}
