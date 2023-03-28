// import CourseDetails from "./components/CourseDetails";
import Classes from "./components/Classes";
import HeroSection from "./components/HeroSection";
import NoticeSection from "./components/NoticeSection";

const Home = () => {
    return (
        <main>
            <HeroSection />
            <NoticeSection />
            {/* <CourseDetails /> */}
            <Classes />
        </main>
    );
}

export default Home;