import Header from "@/Components/Admin/Header";
import Sidebar from "@/Components/Admin/SideBar";

export default function Authenticated({ auth, children }) {
    return (
        <>
            <Sidebar user={auth.user} />
            <Header />
            <div className="main main-app p-3 p-lg-4">
                <div className="row g-3">
                    {children}
                </div>
            </div>
        </>
    );
}
