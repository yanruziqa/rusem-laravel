import BackToTop from "@/Components/BackToTop";
import Header from '@/Components/Header/Header';
import Footer from "@/Components/Footer/Footer";
import Offcanvas from "@/Components/Offcanvas/Offcanvas";

export default function Front({ children, menu }) {
    return (
        <main className="main-wrapper">
            <Header categoryList={menu} />
            { children }
            <Offcanvas categoryList={menu} />
            <Footer />
            <BackToTop />
        </main>
    );
}
