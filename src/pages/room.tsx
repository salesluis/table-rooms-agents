import { Navigate, useParams } from "react-router-dom";

type RoomsParams = {
	roomId: string;
};

function Room() {
	const params = useParams<RoomsParams>();

	if (!params.roomId) return <Navigate to="/" replace />;

	return <div>room</div>;
}

export default Room;
