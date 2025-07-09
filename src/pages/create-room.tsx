import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../components/ui/table";
import { Toggle } from "../components/ui/toggle";

type GetRommsAPIResponse = Array<{
	id: string;
	name: string;
	crateAt: string;
}>;

function CreateRoom() {
	const { data, isLoading } = useQuery({
		queryKey: ["get-rooms"],
		queryFn: async () => {
			const response = await fetch("http://localhost:3333/rooms");
			const data: GetRommsAPIResponse = await response.json();
			return data;
		},
	});

	return (
		<>
			<h1 className="text-center font-bold text-4xl py-[48px]">Table Rooms</h1>
			<Table className="max-w-[800px] m-auto ">
				<TableCaption>A list Rooms.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>name</TableHead>
						<TableHead>id</TableHead>
						<TableHead>createAt</TableHead>
						<TableHead></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{isLoading && <p>carregando...</p>}
					{data &&
						data.map((room) => {
							return (
								<TableRow>
									<TableCell>{room.name}</TableCell>
									<TableCell>{room.id}</TableCell>
									<TableCell>{room.crateAt}</TableCell>
									<TableCell>
										<Link key={room.id} to={`/room/${room.id}`}>
											<Toggle>open</Toggle>
										</Link>
									</TableCell>
								</TableRow>
							);
						})}
				</TableBody>
			</Table>
			{/* <div>Create Room</div>
			{isLoading && <p>carregando...</p>}
			<div className="flex flex-col ">
				{data ? (
					data.map((room) => {
						return (
							<Link key={room.id} to={`/room/${room.id}`}>
								{room.name}
							</Link>
						);
					})
				) : (
					<p>não existe salas</p>
				)}
				<Link to="/room">entrar</Link>
			</div> */}
		</>
	);
}

export default CreateRoom;
