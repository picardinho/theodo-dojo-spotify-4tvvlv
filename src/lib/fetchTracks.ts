const apiToken = 'BQAKSABPF5zpl58hXA6FrFRJFQD-oGDITFJ-jSFxfUlekNnQy12TR_QjXFJ2Q3PPNfh1lJfvsuoG12EXTMzsB91cU7CfPDrKRrpkcs7LUiG9rHjTnZFghQwAszq3kt6NF4fs5IGe6jInUaCmmBQKC6TTHVbzfB_0qtHg9qKA5YZhW951TIo8XS8DrLZEgAQxSajz0U_ro4jnJNfMA3JFIWqvIinulZZJy8q2dh-QCk0b6jtFJJOcfFsAw1tX3mT-ygk4MevyzzwEYumdIVvXqLY-GXkh2uexhaf8Xdtv4wKj5FbLns211xYOvT4t8z8ufcUYRxww_lGNyA85xaUUt2skZp90K1Yk2yOVUwG_yn02YNw';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};