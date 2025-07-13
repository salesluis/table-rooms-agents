export function formatDate(dateString: string) {
	const date = new Date(dateString);
	const formatShort = date.toLocaleDateString("pt-BR", {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});

	return formatShort;
}
