async function makeReservation(userId, roomId, url) {
	let startDate = prompt('Please provide starting date in format YYYY-MM-DD HH:MM:SS');
	let endDate = prompt('Please provide ending date in format YYYY-MM-DD HH:MM:SS');
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({
			UserId: userId,
			RoomId: roomId,
			StartDate: startDate,
			EndDate: endDate,
		}),
	});
	const resData = 'Made reservation';
	location.reload();
	return resData;
}
