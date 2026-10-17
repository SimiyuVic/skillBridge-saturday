import SideBar from "../components/SideBar";
import DashBoardNav from "../components/DashboardNavBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return ( 
        <div>
            <div className="d-flex m-3">
                <div
                    className="card border-0 shadow-sm p-3 me-3"
                    style={{
                        backgroundColor: "#086288",
                        width: "300px",
                        minHeight: "90vh"
                    }}
                >
                    <SideBar />
                </div>
                <div className="flex-grow-1">
                    <div
                        className="card border-0 shadow-sm p-3"
                        style={{
                            backgroundColor: "#97D7FF"
                        }}
                    >
                        <DashBoardNav />
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AdminLayout;