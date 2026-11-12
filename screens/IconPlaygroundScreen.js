// screens/IconPlaygroundScreen.js
// Layar latihan: mencoba ukuran, warna, dan posisi ikon (icon layouting).
 
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FaSolid from '@react-native-vector-icons/fontawesome-free-solid';
import { COLORS, SIZES } from '../constants/theme';
 
export default function IconPlaygroundScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Icon Playground</Text>
 
      {/* 1. UKURAN: prop size */}
      <Text style={styles.section}>1. Ukuran (size)</Text>
      <View style={styles.row}>
        <FaSolid name="star" size={16} color={COLORS.primary} />
        <FaSolid name="star" size={24} color={COLORS.primary} />
        <FaSolid name="star" size={32} color={COLORS.primary} />
        <FaSolid name="star" size={48} color={COLORS.primary} />
      </View>
 
      {/* 2. WARNA: prop color */}
      <Text style={styles.section}>2. Warna (color)</Text>
      <View style={styles.row}>
        <FaSolid name="heart" size={32} color="#D64545" />
        <FaSolid name="heart" size={32} color="#F5A623" />
        <FaSolid name="heart" size={32} color="#2E9E5B" />
        <FaSolid name="heart" size={32} color={COLORS.dark} />
      </View>
 
      {/* 3. POSISI A: ikon di kiri teks */}
      <Text style={styles.section}>3. Ikon di kiri teks</Text>
      <View style={[styles.box, styles.leftIcon]}>
        <FaSolid
          name="envelope"
          size={SIZES.iconMd}
          color={COLORS.primary}
        />
        <Text style={styles.label}>ahmad@example.com</Text>
      </View>
 
      {/* 4. POSISI B: teks di kiri, ikon di ujung kanan */}
      <Text style={styles.section}>4. Ikon di ujung kanan</Text>
<View style={[styles.box, styles.rightIcon]}>
        <Text style={styles.label}>Pengaturan</Text>
        <FaSolid
          name="chevron-right"
          size={SIZES.iconSm}
          color={COLORS.muted}
        />
      </View>
 
      {/* 5. POSISI C: ikon di atas teks */}
      <Text style={styles.section}>5. Ikon di atas teks</Text>
      <View style={styles.row}>
        <View style={styles.topIcon}>
          <FaSolid
            name="house"
            size={SIZES.iconLg}
            color={COLORS.primary}
          />
          <Text style={styles.small}>Beranda</Text>
        </View>
        <View style={styles.topIcon}>
          <FaSolid
            name="magnifying-glass"
            size={SIZES.iconLg}
            color={COLORS.muted}
          />
          <Text style={styles.small}>Cari</Text>
        </View>
        <View style={styles.topIcon}>
          <FaSolid name="user" size={SIZES.iconLg} color={COLORS.muted} />
          <Text style={styles.small}>Profil</Text>
        </View>
      </View>
 
      {/* 6. POSISI D: ikon di tengah lingkaran */}
      <Text style={styles.section}>6. Ikon di dalam lingkaran</Text>
      <View style={styles.row}>
        <View style={styles.circle}>
          <FaSolid name="camera" size={SIZES.iconMd} color={COLORS.card} />
        </View>
        <View style={[styles.circle, { backgroundColor: COLORS.danger }]}>
          <FaSolid name="trash" size={SIZES.iconMd} color={COLORS.card} />
        </View>
      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  content: {
    paddingTop: 64,
    paddingHorizontal: SIZES.padding,
    paddingBottom: 32,
    gap: 12,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.dark },
  section: {
fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.muted,
    marginTop: 8,
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 20 },
  box: {
    backgroundColor: COLORS.card,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SIZES.padding,
  },
  leftIcon: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  rightIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topIcon: { alignItems: 'center', gap: 4, width: 72 },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: { fontSize: 16, color: COLORS.dark },
  small: { fontSize: 12, color: COLORS.text },
});
