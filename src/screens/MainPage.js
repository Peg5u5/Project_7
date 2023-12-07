// MainPage.js
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
        height: 120,
        width: 180,
        borderRadius: 20,
        overflow: 'hidden',
        margin: 10,
        ...containerStyle,
      }}
    >
      <LinearGradient colors={gradientColors} style={styles.headLinkGradient}>
        <View style={styles.headLinkContent}>
          <Text style={styles.headLinkTitle}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const MainPage = ({ navigation }) => {
  return (
    <LinearGradient colors={['rgba(135, 206, 235, 0.2)', 'rgba(0, 191, 255, 0.2)']} style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
        <Text style={styles.exploreText}>Explore your dream house</Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <HeadLink
            title="Architect"
            onPress={() => navigation.navigate('UserList')}
            containerStyle={styles.headLinkContainer}
            gradientColors={['#4e54c8', '#8f94fb']}
          />

          <HeadLink
            title="Maps"
            onPress={() => {
              navigation.navigate('MapPage');
            }}
            containerStyle={styles.headLinkContainer}
            gradientColors={['#ffcf97', '#ffa889', '#ff8c7a']}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 30 }}>
          <HeadLink
            title="Interior"
            onPress={() => {
              navigation.navigate('Interior');
            }}
            containerStyle={styles.headLinkContainer}
            gradientColors={['#d84ea8', '#e15fbc']}
          />

          <HeadLink
            title="Section4"
            containerStyle={styles.headLinkContainer}
            gradientColors={['#02a894', '#00cdac']}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  exploreText: {
    color: '#333',
    fontSize: 19,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  headLinkContainer: {
    marginTop: 15,
  },
  headLinkGradient: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  headLinkContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headLinkTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainPage;
