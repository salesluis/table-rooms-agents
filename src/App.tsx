import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreateRoom from "./pages/create-room";
import { Room } from "./pages/room";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<CreateRoom />} index />
					<Route element={<Room />} path="/rooms/:roomId" />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
