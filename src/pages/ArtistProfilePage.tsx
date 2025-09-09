import { useParams, useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { HeroSection } from '../sections/artist-profile/HeroSection';
import { ShowSection } from '../sections/artist-profile/ShowSection';
import { VideoSection } from '../sections/artist-profile/VideoSection';
import { BookingSection } from '../sections/artist-profile/BookingSection';
import { artists } from '../data/artists';

export const ArtistProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artist = artists.find(a => a.id === id);

  if (!artist) {
    navigate('/');
    return null;
  }

  return (
    <main className="min-h-screen bg-[#0A0F29]">
      <Navigation />
      <HeroSection artist={artist} />
      <ShowSection artist={artist} />
      <VideoSection artist={artist} />
      <BookingSection artist={artist} />
      <Footer />
    </main>
  );
};