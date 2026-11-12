// hooks/useProfile.js
// Custom hook: logic pengambilan data profil yang dapat dipakai ulang.
 
import { useEffect, useState } from 'react';
 
export default function useProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    // Simulasi mengambil data selama 1 detik.
    // Pada Pertemuan 6, bagian ini diganti pengambilan data REST API.
    const timer = setTimeout(() => {
      setProfile({
        name: 'Fadli Haedar Fawwaz',
        nim: '624C0002',
        prodi: 'Informatika',
        email: '624c0002@student.mahardika.ac.id',
        phone: '0896-6367-6808',
      });
      setLoading(false);
    }, 1500);
 
    return () => clearTimeout(timer);
  }, []);
 
  return { profile, loading };
}
