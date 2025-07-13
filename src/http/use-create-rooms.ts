import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateRoomResponse } from "./types/create-room-response";
import type { CreateRoomRequest } from "./types/create-rooms-request";

export function useCreateRoom() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (data: CreateRoomRequest) => {
			const response = await fetch("http://localhost:3333/createRoom", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const result: CreateRoomResponse = await response.json();
			return result;
		},

		onSuccess: () => {
			//get-rooms vem da query que nomeei em http/use-rooms
			queryClient.invalidateQueries({ queryKey: ["get-rooms"] });
		},
	});
}
