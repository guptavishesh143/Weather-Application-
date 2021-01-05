import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const widths = Dimensions.get('window').width;

const AppScreen = () => {
  return (
    <>
      <SafeAreaView>
        <View style={{padding: 20}}>
          <View
            style={{
              flex: 0,
            }}>
            <View style={{paddingTop: 40}}></View>
            <Image
              style={{height: 320, width: widths}}
              source={require('../assets/Images/img/weatherapp.png')}
            />
          </View>
          <View
            style={{
              flex: 0,
              //how backgroundColor: 'red',

              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Helvetica-Bold',
                fontSize: 22,
                paddingTop: 20,
              }}>
              Weather Machine
            </Text>
            <Text style={{fontFamily: 'Helvetica-Bold', paddingBottom: 10}}>
              Let's check whats weather around yourside
            </Text>
            <Text style={{fontFamily: 'Helvetica-Bold', paddingBottom: 10}}>
              Let's check whats weather around yourside
            </Text>

            <TouchableOpacity activeOpacity={0.7} style={styles.butnstyle}>
              <Text style={styles.butnHeading}>Sign in With Google</Text>
            </TouchableOpacity>
            <View style={{height: 20}}></View>

            <TouchableOpacity activeOpacity={0.7} style={styles.butnstyle}>
              <Text style={styles.butnHeading}>Sign in with Email</Text>
            </TouchableOpacity>
            <View style={{height: 20}}></View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={{color: 'black'}}>Create your account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  butnHeading: {
    fontFamily: 'Helvetica-Bold',
    color: 'white',
    fontSize: 16,
    alignItems: 'center',
  },

  butnstyle: {
    backgroundColor: 'black',
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
});

export default AppScreen;

// const AppScreen = () => {
//   return (
//     <>
//       <View style={styles.container}>
//         <View style={{backgroundColor: 'green', flex: 2}}></View>

//         <View style={{backgroundColor: 'red', flex: 2}}></View>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({

// });

// export default AppScreen;

// container: {
//   flex: 1,
//   justifyContent: 'center',

//   backgroundColor: '#ecf0f1',
//   padding: 8,
// },
// butnHeading: {
//   fontFamily: 'Helvetica-Bold',
//   color: 'white',
//   fontSize: 16,
//   alignItems: 'center',
// },

// butnstyle: {
//   backgroundColor: 'black',
//   width: '100%',
//   alignItems: 'center',
//   padding: 6,
// },

// <SafeAreaView>
//         <View style={{padding: 20, flex: 1}}>
//           <View style={{flex: 2}}>
//             <Image
//               style={{height: 100, width: widths}}
//               source={require('../assets/Images/img/weatherapp.png')}
//             />
//           </View>

//           <View style={{alignItems: 'center', flex: 2, backgroundColor: 'red'}}>
//             <Text
//               style={{
//                 fontFamily: 'Helvetica-Bold',
//                 fontSize: 22,
//                 paddingTop: 20,
//               }}>
//               Weather Machine
//             </Text>
//             <Text style={{fontFamily: 'Helvetica-Bold', paddingBottom: 10}}>
//               Let's check whats weather around yourside
//             </Text>
//             <Text style={{fontFamily: 'Helvetica-Bold', paddingBottom: 10}}>
//               Let's check whats weather around yourside
//             </Text>

//             <TouchableOpacity style={styles.butnstyle}>
//               <Text style={styles.butnHeading}>Sign in With Google</Text>
//             </TouchableOpacity>
//             <View style={{height: 20}}></View>

//             <TouchableOpacity style={styles.butnstyle}>
//               <Text style={styles.butnHeading}>Sign in with Email</Text>
//             </TouchableOpacity>
//             <View style={{height: 20}}></View>
//             <TouchableOpacity>
//               <Text style={{color: 'black'}}>Create your account</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </SafeAreaView>
