


import React from 'react'
// import {WebView} from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://playearn.club/' }}
        // ignoreSslError={true}
      />
    </SafeAreaView>
  )
}

export default App


// keytool -genkey -v -keystore "C:\Users\Ganesh-Shiv-k\Downloads\Projects\RNtemplate\android\app\keystore.jks" -alias mykeyalias -keyalg RSA -keysize 2048 -validity 10000














































// import {
// 	ScreenCapturePickerView,
// 	RTCPeerConnection,
// 	RTCIceCandidate,
// 	RTCSessionDescription,
// 	RTCView,
// 	MediaStream,
// 	MediaStreamTrack,
// 	mediaDevices,
// 	registerGlobals
// } from 'react-native-webrtc';

// import {View,Text} from 'react-native'
// const App = () => {
// 	import React, { useState } from 'react';
// import { Button } from 'react-native';
// import JsSIP from 'jssip';

// const CallButton = () => {
//   const [session, setSession] = useState(null);

//   const handleCallPress = () => {
//     // Create our JsSIP instance and run it:
//     var socket = new JsSIP.WebSocketInterface('wss://sip.myhost.com');
//     var configuration = {
//       sockets  : [ socket ],
//       uri      : 'sip:alice@example.com',
//       password : 'superpassword'
//     };
//     var ua = new JsSIP.UA(configuration);
//     ua.start();

//     // Register callbacks to desired call events
//     var eventHandlers = {
//       'progress': function(e) {
//         console.log('call is in progress');
//       },
//       'failed': function(e) {
//         console.log('call failed with cause: '+ e.data.cause);
//       },
//       'ended': function(e) {
//         console.log('call ended with cause: '+ e.data.cause);
//       },
//       'confirmed': function(e) {
//         console.log('call confirmed');
//       }
//     };
//     var options = {
//       'eventHandlers'    : eventHandlers,
//       'mediaConstraints' : { 'audio': true, 'video': true }
//     };
//     var session = ua.call('sip:bob@example.com', options);
//     setSession(session);
//   };

//   const handleEndCallPress = () => {
//     if (session) {
//       session.terminate();
//       setSession(null);
//     }
//   };




//   return (
// <View style={{backgroundColor:'red',height:150,borderRadius:10,marginTop:20,paddingLeft:40}}>
  
//   <Text>hii
//   </Text>
//   <Button title="Call" onPress={handleCallPress} />
//       <Button title="End Call" onPress={handleEndCallPress} />


//   </View>
//   )
// }


// import React, { useState } from 'react';
// import { Button } from 'react-native';
// import JsSIP from 'react-native-jssip-modified';

// const CallButtons = () => {
//   const [session, setSession] = useState(null);

//   const handleAnswerPress = () => {
//     if (session) {
//       // answer the call
//       var options = {
//         'mediaConstraints' : { 'audio': true, 'video': true }
//       };
//       session.answer(options);
//     }
//   };

//   const handleEndCallPress = () => {
//     if (session) {
//       // end the call
//       session.terminate();
//       setSession(null);
//     }
//   };

//   // Create our JsSIP instance and run it:
//   var socket = new JsSIP.WebSocketInterface('wss://sip.myhost.com');
//   var configuration = {
//     sockets  : [ socket ],
//     uri      : 'sip:alice@example.com',
//     password : 'superpassword'
//   };
//   var ua = new JsSIP.UA(configuration);

//   ua.on('newRTCSession', (data) => {
//     if (data.originator === 'remote') {
//       // incoming call
//       setSession(data.session);
//     }
//   });

//   ua.start();

//   return (
//     <>
//       <Button title="Answer" onPress={handleAnswerPress} />
//       <Button title="End Call" onPress={handleEndCallPress} />
//     </>
//   );
// };


// import JsSIP from 'jssip';
// import { mediaDevices } from 'react-native-webrtc';

// // Create our JsSIP instance and run it:
// var socket = new JsSIP.WebSocketInterface('wss://sip.myhost.com');
// var configuration = {
//   sockets  : [ socket ],
//   uri      : 'sip:alice@example.com',
//   password : 'superpassword'
// };
// var ua = new JsSIP.UA(configuration);

// ua.on('newRTCSession', (data) => {
//   if (data.originator === 'remote') {
//     // incoming call
//     var session = data.session;

//     // get local media stream
//     mediaDevices.getUserMedia({
//       audio: true,
//       video: false
//     }).then((stream) => {
//       // answer the call
//       var options = {
//         'mediaStream': stream
//       };
//       session.answer(options);
//     });
//   }
// });

// ua.start();

// // make an outgoing call
// mediaDevices.getUserMedia({
//   audio: true,
//   video: false
// }).then((stream) => {
//   var options = {
//     'mediaStream': stream
//   };
//   var session = ua.call('sip:bob@example.com', options);
// });

// //////////////
// // make an outgoing call
// mediaDevices.getUserMedia({
// 	audio: true,
// 	video: false
//   }).then((stream) => {
// 	var options = {
// 	  'mediaStream': stream,
// 	  'rtcConfiguration': {
// 		'iceServers': [
// 		  { 'urls': 'stun:stun.myhost.com' },
// 		  { 'urls': 'turn:turn.myhost.com', 'username': 'myusername', 'credential': 'mypassword' }
// 		]
// 	  }
// 	};
// 	var session = ua.call('sip:bob@example.com', options);
//   });
  



// export default App
