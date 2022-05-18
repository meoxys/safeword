import React from "react";
import { useState, useEffect } from 'react';

import Axios from 'axios';

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

import VaultList from './vaultlist';

const Sidebar = (width) => {
    const [loginList, setLoginList] = useState([]);
    const [cardList, setCardList] = useState([]);
    const [noteList, setNoteList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/showlogins").then((res) => {
            setLoginList(res.data);
        });
        Axios.get("http://localhost:3001/showcards").then((res) => {
            setCardList(res.data);
        });
        Axios.get("http://localhost:3001/shownotes").then((res) => {
            setNoteList(res.data);
        });
      }, []);

    return (
        <>
            <Drawer
                variant="permanent"
                sx={{
                width: width,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: width, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'hidden' }}>
                <VaultList list={loginList} icon={<LanguageRoundedIcon />} />

                <Divider />
                <VaultList list={cardList} icon={<CreditCardIcon />} />

                <Divider />
                <VaultList list={noteList} icon={<ArticleRoundedIcon />} />
                
                </Box>
            </Drawer>
        </>
    );
}

export default Sidebar;