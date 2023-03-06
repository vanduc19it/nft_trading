import { Avatar, Button, Menu } from 'antd'
import Image from 'next/image'
import React from 'react'
import styles from '@/styles/productDetail.module.css'
import { ShoppingCartOutlined ,EyeFilled, HeartFilled,EllipsisOutlined, ArrowLeftOutlined, ArrowRightOutlined   } from '@ant-design/icons';
function productDetail() {
    function getItem(label: any, key:any, children:any) {
        return {
          key,
          children,
          label,
        };
      }
    const item1 = [
        getItem('Properties', 'sub1', [
          getItem('Item 1', 'g1', null), 
        ]),
      ];
      const item2 = [
        getItem('Overview ', 'sub1', [
          getItem('Item 1', 'g1', null), 
        ]),
      ];
      const item3 = [
        getItem('Details', 'sub1', [
          getItem('Item 1', 'g1', null), 
        ]),
      ];
  return (
    <div className={styles.container}>
        <div className={styles.detail_product}>
            <div className={styles.detail_left}>
                <Image className={styles.detail_image} src="/nft_image/nft3.png" width={500} height={500} alt=""/>
                <Menu
                 className={styles.menu}
                    style={{
                        width: 570,
                        background: "#131528",
                        borderRadius: "12px",
                        marginBottom: "20px",
                        
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={item1}
    />
                <Menu
                 className={styles.menu}
                    style={{
                    width: 570,
                    background: "#131528",
                    borderRadius: "12px",
                    marginBottom: "20px",
                  
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={item2}
                />
                <Menu
                style={{
                    width: 570,
                    background: "#131528",
                    borderRadius: "12px",
                    marginBottom: "20px",
                   
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={item3}
                className={styles.menu}
                />
            </div>
            <div className={styles.detail_right}>
                <h3>BoredApeYachtClub #2437</h3>
                <p>The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain... Show more</p>
                <div className={styles.watch}>
                    <div className={styles.btn_eye}>
                        <Button className={styles.eye}><EyeFilled /></Button>
                        <span>1K</span>
                    </div>
                    <div className={styles.btn_heart}>
                        <Button className={styles.heart}><HeartFilled /></Button>
                        <span>120</span>
                    </div>
                    <div className={styles.btn_more}>
                        <Button className={styles.more} ><EllipsisOutlined size={60}/></Button>
                        <span>More</span>
                    </div>
                </div>
                <div className={styles.author}>
                    <div>
                        <h4>Created</h4>
                        <div className={styles.author_detail}>
                            <Avatar className={styles.author_img} src="/nft_users/user2.png" alt=""/>
                            <p>JPEGS-VAULT</p>
                        </div>
                    </div>
                    <div>
                        <h4>Current Owner</h4>
                        <div className={styles.author_detail}>
                            <Avatar className={styles.author_img} src="/nft_users/user3.png"/>
                            <p>0xed2ab...7236</p>
                        </div>
                    </div>

                </div>
                <div className={styles.price}>
                    <div>
                        <h4>Current Bid</h4>
                        <p>1.0324 ETH</p>
                    </div>
                    <div>
                        <h4>Remaining Time</h4>
                        <p>12 : 03 : 44</p>
                    </div>
                </div>
                <div className={styles.detail_btn}>
                    <Button className={styles.btn_buy}>Buy Now</Button>
                    <Button className={styles.btn_cart}><ShoppingCartOutlined  /></Button>
                </div>
            </div>
        </div>
        <div className={styles.more_collection}>
            <div className={styles.more_title}>
                <h2>More from this collection</h2>
                <div className={styles.btn_arrow}>
                  <Button className={styles.btn_left}><ArrowLeftOutlined /></Button>
                  <Button className={styles.btn_right}><ArrowRightOutlined /></Button>
                </div>
            </div>
            <div className={styles.collection}>
                <div className={styles.card_collection}>
                        <Image className={styles.collection_img}src="/nft_image/nft4.png" alt="" 
                        width={500} height={500}/>
                        <h4>BoredApeYachtClub #...</h4>
                        <p>Created by DARArtCrypt1</p>
                </div>
                <div className={styles.card_collection}>
                        <Image className={styles.collection_img}src="/nft_image/nft5.png" alt="" 
                        width={500} height={500}/>
                        <h4>BoredApeYachtClub #...</h4>
                        <p>Created by DARArtCrypt1</p>
                </div>
                <div className={styles.card_collection}>
                        <Image className={styles.collection_img}src="/nft_image/nft6.png" alt="" 
                        width={500} height={500}/>
                        <h4>BoredApeYachtClub #...</h4>
                        <p>Created by DARArtCrypt1</p>
                </div>
                <div className={styles.card_collection}>
                        <Image className={styles.collection_img}src="/nft_image/nft7.png" alt="" 
                        width={500} height={500}/>
                        <h4>BoredApeYachtClub #...</h4>
                        <p>Created by DARArtCrypt1</p>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default productDetail