// screens/ProfileScreen.js
// Container component: mengambil data lewat custom hook, lalu
// meneruskannya ke ProfileCard.
 
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import useProfile from '../hooks/useProfile';
import { COLORS, SIZES } from '../constants/theme';
 
export default function ProfileScreen() {
  const { profile, loading } = useProfile();
 
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Memuat profil...</Text>
      </View>
    );
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Saya</Text>
      <ProfileCard
        name={profile.name}
        nim={profile.nim}
        prodi={profile.prodi}
        email={profile.email}
      />
      <ProfileCard
        name="Nessa Nirmala Pratama"
        nim="624c0007"
        prodi="Informatika"
        email="624c0007@student.mahardika.ac.id"
      />

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 64,
    paddingHorizontal: SIZES.padding,
    gap: 16,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  loadingText: {
    color: COLORS.muted,
  },
});

