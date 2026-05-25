import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import NotFound from "./pages/NotFound.jsx";
import {routes} from "./routes.jsx";
import {ConfigProvider} from "antd";
import {theme} from "./theme";

function App() {
    return (
        <ConfigProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        {routes.map((r) => (
                            <Route key={r.path} path={r.path} element={r.element} />
                        ))}
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ConfigProvider>
    );
}

export default App;
