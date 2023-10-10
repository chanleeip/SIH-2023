import React from 'react'
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { Chat, MessageList, MessageInput,TypingIndicator,MemberList } from "@pubnub/react-native-chat-components";
 
const pubnub = new PubNub({
    publishKey: "pub-c-0bbabc39-0ac0-45b2-9255-ffeb2e0baf6f",
    subscribeKey: "sub-c-66a947cb-606a-4849-9425-4fe249a6464c",
    userId: "Nithinn",
  });
  const currentChannel = "Default";
  const theme = "light";
  const user1 = {
    id: 'user_e903570e-ed44-4c22-8a4f-f6b9154d1eb0', //  REPLACE WITH YOUR ID
    name: 'Manickam',
    profileUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
  }
  const user2 = {
    id: 'user_4F0E5969-7544-4102-A8AF-9A180D253A87',  //  REPLACE WITH YOUR ID
    name: 'nithinn manickam ',
    profileUrl: 'https://randomuser.me/api/portraits/women/1.jpg'
  }
export function ChatView () {
 return (
    <PubNubProvider client={pubnub}>
    <Chat users={[user1,user2]} currentChannel={currentChannel} theme={theme} >
      <MessageList />  
       {/* <MessageList  fetchMessages={"2"} />  this is used to display number of past messages when logging again back.*/ }
       <TypingIndicator showAsMessage={false}/>
       {/*<MessageInput typingIndicator={true} senderInfo={true} /> typingIndicator is used to show the typing indicator and senderInfo is used to show the sender info */}
      <MessageInput placeholder={"What is your message?"}  
    //   onBeforeSend={(message) => 
    //     {let newMsg=message;newMsg.text+='**';
    //       return newMsg;}}  ---> this is used to append any text to the message 
          />
          <MemberList members={[user1, user2]} presentMembers={[user1.id]} />

    </Chat>
  </PubNubProvider>
 )
}