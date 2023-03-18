declare var window: any;
import { Avatar, Typography, Input, Button} from 'antd'

import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import React, { useContext } from 'react'
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css'
import flatted from 'flatted';
import CircularJSON from 'circular-json';


import {ethers} from 'ethers'
import { useState } from 'react'

type NavbarProps = {
  web3Handler: any;
  address:any;
  balance: any;
  nft:any;
  marketplace: any;
}

const Navbar = ({ web3Handler, address, balance, nft, marketplace }: NavbarProps) =>{

  const[NFT, setNFT] = useState("");
  console.log(nft)

  return (
      <nav className={styles.navbar}>
          <div className={styles.logo}>
              <Avatar className={styles.avatar}>C</Avatar>
              <Link href="/" className={styles.logo_name}>Craft</Link>
          </div>
          <div className={styles.search}>
            <SearchOutlined  className={styles.icon} />
            <input className={styles.input}  placeholder="Search collection, item or user"/>
          </div>
          <div>
              <ul className={styles.ul}>
                <li>
                  <Link href="/">Explore</Link>
                </li>
                <li>
                  <Link href={{ pathname: '/createNFT' }} >Create</Link>
                </li>
                <li>
                  <Link href="/">Page</Link>
                </li>
              </ul>
          </div>
         
          <div className={styles.logo_user}>
            <Avatar className={styles.avatar_user} icon={<UserOutlined />} size={44}/>
            {
              address ? <p>{address}: </p> :            <Button className={styles.btn_connect_wallet} onClick={web3Handler}>Connect Wallet</Button>
            }

           
          </div>
         
      </nav>
  )
}

export default Navbar