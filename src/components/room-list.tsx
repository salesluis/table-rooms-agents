import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRooms } from "../http/use-rooms";
import { formatDate } from "../utils/format-date";
import { Badge } from "./ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

function RoomList() {
	const { data } = useRooms();
	return (
		<Card>
			<CardHeader>
				<CardTitle>Salas recentes</CardTitle>
				<CardDescription>
					Acesso rápido para as salas criadas recentemente
				</CardDescription>
			</CardHeader>

			<CardContent className="flex flex-col gap-3">
				{data?.map((room) => {
					return (
						<Link
							key={room.id}
							to={`/rooms/${room.id}`}
							className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50"
						>
							<div className="flex-1">
								<h3 className="font-medium">{room.name}</h3>

								<div className=" flex items-center gap-1">
									<Badge variant="secondary" className="text-xs">
										{formatDate(room.crateAt)}
									</Badge>
									<Badge variant="secondary" className="text-xs">
										{room.questionCount} pergunta(s)
									</Badge>
								</div>
							</div>
							<span className="flex items-center gap-1">
								Entrar
								<ArrowRight className="size-3" />
							</span>
						</Link>
					);
				})}
			</CardContent>
		</Card>
	);
}

export default RoomList;
