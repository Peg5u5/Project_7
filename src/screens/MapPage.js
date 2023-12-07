import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const HeadLink = ({ title, onPress, containerStyle, gradientColors }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 180,
        width: 180,
        borderRadius: 20,
        overflow: 'hidden',
        marginVertical: 15,
        ...containerStyle,
      }}
    >
      <LinearGradient colors={gradientColors} style={styles.headLinkGradient}>
        <Text style={styles.headLinkTitle}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const MapPage = ({ navigation }) => {
  return (
    <LinearGradient colors={['#87CEEB', '#00BFFF']} style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
        <Text style={styles.firstAppText}></Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <HeadLink
            title="2100sqft"
            onPress={() => {
              navigation.navigate('Section2100');
            }}
            containerStyle={styles.headLinkContainer}
            gradientColors={['#4e54c8', '#8f94fb']}
          />

          <HeadLink
            title="1500sqft"
            onPress={() => {
              navigation.navigate('Section1500');
            }}
            containerStyle={styles.headLinkContainer}
            gradientColors={['#ffcf97', '#ffa889', '#ff8c7a']}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', marginTop: 30 }}>
          <HeadLink
            title="1800sqft"
            onPress={() => {
              navigation.navigate('Section1800');
            }}
            containerStyle={styles.headLinkContainer}
            gradientColors={['#d84ea8', '#e15fbc']}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  firstAppText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  headLinkContainer: {
    marginVertical: 15,
  },
  headLinkGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headLinkTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MapPage;
