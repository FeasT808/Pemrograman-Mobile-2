// // App.js
// // Titik awal aplikasi: cukup memanggil layar (screen) utama.
 
import { StatusBar } from 'expo-status-bar';
import ProfileScreen from './screens/ProfileScreen';
 
export default function App() {
  return (
    <>
      <ProfileScreen />
      <StatusBar style="dark" />
    </>
  );
}

// App.js
// Sementara menampilkan layar latihan ikon (Icon Playground).
 
// import { StatusBar } from 'expo-status-bar';
// import IconPlaygroundScreen from './screens/IconPlaygroundScreen';
 
// export default function App() {
//   return (
//     <>
//       <IconPlaygroundScreen />
//       <StatusBar style="dark" />
//     </>
//   );
// }
