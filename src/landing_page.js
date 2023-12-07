// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const LandingPage = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Architect</Text>
//         <TouchableOpacity
//           style={styles.sectionButton}
//           onPress={() => {
//             navigation.navigate('ArchitectScreen');
//           }}
//         >
//           <Text style={styles.sectionButtonText}>Go to Architect</Text>
//         </TouchableOpacity>
//       </View>
      
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Maps</Text>
//         <TouchableOpacity
//           style={styles.sectionButton}
//           onPress={() => {
//             navigation.navigate('MapsScreen');
//           }}
//         >
//           <Text style={styles.sectionButtonText}>Go to Maps</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   section: {
//     backgroundColor: 'white',
//     width: 300,
//     height: 200,
//     margin: 10,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'black', // Text color for section titles
//   },
//   sectionButton: {
//     backgroundColor: '#2ecc71',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   sectionButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default LandingPage;
