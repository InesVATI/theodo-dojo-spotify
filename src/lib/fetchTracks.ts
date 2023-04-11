const apiToken: string =
  'BQA7zk8dkHcz4-UhvfhuY-PCfD4VUdbZlUtgPeVqAQ8jx8lokEspOo-PpGUqLNIWQ0AYfbEmRggAoY_yh314hMS9lLD2bVFZlk_ipZ-RkvL75Nc-lv3nnd4_7e4IyNOFmCDCFDZOt2P6YmMy9lLDGYfatkamqJpSAdgTcKIF-XFdw9AATrZivbYByf4wuVMje9w2PJbH9QeG95BXavfrVf3_vw-FZk9OjbiirUGvf2TQJCmA0VkKVcDrYptid1BRShkxw9k0TjE1KEn_MmTxDwsXfiRbgvAdP1HvBenO6sereWFz-X-Db-opZm5WAFtJ3awl_8Rb3Ud_LsJHhx-IOFG6ApYJ8A';

export const fetchTracks = async () => {
  // This function does nothing, yet
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};
