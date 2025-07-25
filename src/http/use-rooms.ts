import { useQuery } from "@tanstack/react-query";
import type { GetRommsResponse } from "./types/get-rooms-response";

export function useRooms() {
	return useQuery({
		queryKey: ["get-rooms"],
		queryFn: async () => {
			const response = await fetch("http://localhost:3333/rooms");
			const data: GetRommsResponse = await response.json();
			return data;
		},
	});
}
