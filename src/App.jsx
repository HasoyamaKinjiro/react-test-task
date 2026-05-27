import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import NotFound from "./pages/NotFound.jsx";
import { routes } from "./routes.jsx";
import { ConfigProvider } from "antd";
import { App as AntdApp } from "antd";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000, // 1 min
            retry: 1,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider theme={theme}>
                <AntdApp>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<AppLayout/>}>
                                {routes.map((r) => (
                                    <Route key={r.path} path={r.path} element={r.element}/>
                                ))}
                                <Route path="*" element={<NotFound/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </AntdApp>
            </ConfigProvider>
        </QueryClientProvider>
    );
}

export default App;
