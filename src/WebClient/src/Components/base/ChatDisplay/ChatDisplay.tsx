import React, { useContext, useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import { AppContext } from '../../App';
import { MessageModel } from '../../shared/models/MessageModel';

const styles = require("./ChatDisplay.module.scss");

const ChatDisplay = () => {

    const { currentUsername } = useContext(AppContext);

    const [messages, setMessages] = useState([new MessageModel("User2", "Hello World!")] as MessageModel[]);
    const [input, setInput] = useState("");

    function onInput(e: any) {
        setInput(e.target.value);
    }

    // User Input -------------------------------------------------------------------------------------
    function onEnter(e: any) {
        if (e.key === 'Enter')
            sendMessage();
    }

    function sendMessage() {
        if (input == '') return;

        let m = Array.from(messages);
        m.push(new MessageModel(currentUsername, input));
        setMessages(m);
        setInput('');
    }

    // Return -----------------------------------------------------------------------------------------
    const displayMessages = () => {
        return (
            messages.map(msg => (
                <Paper className={styles.chatMessage} key={msg.message}>{msg.username}: {msg.message}</Paper>
            ))
        );
    }

    return (
        <Grid className={styles.chatDisplay}>
            {displayMessages()}
            <TextField id='message-input' variant='filled' value={input} onChange={onInput} onKeyDown={onEnter} />
            <IconButton onClick={sendMessage}><SendIcon/></IconButton>
        </Grid>
    );
}

export  default ChatDisplay;
