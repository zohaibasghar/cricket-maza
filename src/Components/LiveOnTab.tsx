import { Image, View } from "native-base";
import React from "react";

const LiveOnTab = () => {
  return (
    <View flex={1} alignItems={"center"}>
      <Image
        mt={12}
        source={{
          uri: "https://e7.pngegg.com/pngimages/362/254/png-clipart-star-sports-3-logo-television-channel-star-india-news-live-television-text.png",
        }}
        alt="Star Sports"
        width={"350"}
        height={"300"}
      />
    </View>
  );
};

export default LiveOnTab;
