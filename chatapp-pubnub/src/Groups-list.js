import { useState } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { Chat, ChannelList } from "@pubnub/react-native-chat-components";

const pubnub = new PubNub({
    publishKey: "pub-c-0bbabc39-0ac0-45b2-9255-ffeb2e0baf6f",
    subscribeKey: "sub-c-66a947cb-606a-4849-9425-4fe249a6464c",
    userId: "Nithinn",
  });

  const theme = "light";

  export default function ChannelListReactNative() {
    const [currentChannel, setCurrentChannel] = useState("space.c1ee1eda28554d0a34f9b9df5cfe")
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <PubNubProvider client={pubnub}>
          <Chat {...{ currentChannel, theme }}>
            <ChannelList 
              channels={['disaster1','disaster2','disaster3']} 
              onChannelSwitched={(ch) => setCurrentChannel(ch.id)}
              // sort={(ch1, ch2) => (ch1.name > ch2.name ? -1 : 1)}
              // extraActionsRenderer={(ch) => (
              //   <Button title="Info" onPress={() => alert(`Info about ${ch.name} channel`)} />
              // )}
              // channelRenderer={(ch) => <Text>{ch.name}</Text>}
              // onChannelLongPressed={(ch) => alert(`Long pressed the ${ch.name} channel`)}
              // style={{
              //   channelPressed: {
              //     backgroundColor: "red",
              //   },
              //   channelActive: {
              //     backgroundColor: "transparent",
              //   },
              // }}
            />
          </Chat>
        </PubNubProvider>
      </SafeAreaView>
    );
  }
  