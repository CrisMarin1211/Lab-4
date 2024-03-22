export const getFirstEpisodeName = async (episodeUrl: string): Promise<string> => {
	try {
		const episodeData = await fetch(episodeUrl).then((res) => res.json());
		return episodeData.name;
	} catch (error) {
		console.error('Error al obtener datos del episodio:', error);
		return 'Unknown';
	}
};

export default getFirstEpisodeName;
