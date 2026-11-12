// components/ProfileCard.js
// Presentational component: hanya menampilkan data dari props.
 
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
 
export default function ProfileCard({ name, nim, prodi, email }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>NIM: {nim}</Text>
      <Text style={styles.info}>Prodi: {prodi}</Text>
      <Text style={styles.info}>Email: {email}</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SIZES.padding,
    gap: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: COLORS.text,
  },
});
