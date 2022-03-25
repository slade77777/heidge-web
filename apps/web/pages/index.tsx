import HeroSection from "../components/Home/HeroSection";
import Announcements from "../components/Home/Announcements";
import { getAnnouncements } from "../api/announcement";
import HomeSections from "../components/Home/HomeSections";
import { getWorlds } from "../api/play";
import { getBusinesses } from "../api/business";

export async function getServerSideProps({ req, res }) {
  try {
    const announcements = await getAnnouncements(3);
    const worlds = await getWorlds();
    const businesses = await getBusinesses(8, 0);
    return {
      props: {
        announcements: announcements?.data || [],
        worlds: worlds?.data || [],
        businesses: businesses?.data || [],
      }, // will be passed to the page component as props
    };
  } catch (e) {
    console.log(e);
    return {
      props: {},
    };
  }
}

export default function Web({ announcements, worlds, businesses }) {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <Announcements announcements={announcements} />
      <HomeSections worlds={worlds} businesses={businesses} />
    </div>
  );
}
