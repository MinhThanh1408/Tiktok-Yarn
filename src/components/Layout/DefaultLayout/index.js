import Header from "src/components/Layout/components/Header";
import Sidebar from "src/components/Layout/components/Sidebar";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;