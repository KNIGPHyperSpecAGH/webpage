import {Outlet} from "react-router";

export function EmptyLayout() {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Outlet />
        </div>
    );
}
