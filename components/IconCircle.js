// components/IconCircle.js
// Presentational component: ikon berada tepat di tengah lingkaran berwarna.
 
import { StyleSheet, View } from 'react-native';
import FaSolid from '@react-native-vector-icons/fontawesome-free-solid';
import { COLORS, SIZES } from '../constants/theme';
 
export default function IconCircle({
  icon,
  diameter = 44,
  size = SIZES.iconMd,
  color = COLORS.card,
  background = COLORS.primary,
}) {
  return (
    <View
      style={[
        styles.circle,
        {
          width: diameter,
          height: diameter,
          borderRadius: diameter / 2,
          backgroundColor: background,
        },
      ]}
    >
      <FaSolid name={icon} size={size} color={color} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
