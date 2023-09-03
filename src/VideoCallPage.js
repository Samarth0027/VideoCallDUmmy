// App.js
import React from 'react';
import  ZegoUIKitPrebuiltCall,  {ONE_ON_ONE_VIDEO_CALL_CONFIG} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import { View } from 'react-native';

export default function VoiceCallPage({route, navigation}) {
  const { userName } = route.params;
  return (
    <View style={{flex:1}}>
      <ZegoUIKitPrebuiltCall
        appID={1849564335}
        appSign={'d7b6503f781f81b11644ac81ab15b7bacf40a349ccbc17255567fcf00c5b2127'}
        userID={123} // userID can be something like a phone number or the user id on your own user system.
        userName={userName}
        callID={'myCallID'} // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => {
            navigation.navigate('HomePage');
          },
          onHangUp: () => {
            navigation.navigate('HomePage');
          },
        }}
      />
    </View>
  );
}
