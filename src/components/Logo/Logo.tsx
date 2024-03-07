import React from 'react';
import { View , Text , Image} from 'react-native';
import ImageLogo from '../../../assets/foto1.jpg'
import { styles } from './LogoStyles';

export function Logo() {
  return (
      <>
          <Text style={styles.title}>PASS GENERATOR</Text>
          <Image style={styles.logoImage} source={ImageLogo} />
    </>
  );
}