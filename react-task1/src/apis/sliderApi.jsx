const imageApi = {
  fetchImages: async () => {
    try {
      const response = await fetch('https://picsum.photos/v2/list');
      if (!response.ok) {
        throw new Error('Error get img');
      }
      const data = await response.json();
      const firstFiveImages = data.slice(0, 9).map(item => item.download_url);
      return firstFiveImages;
    } catch (error) {
      console.error('Error get images:', error);
      throw error;
    }
  },
};

export default imageApi;
