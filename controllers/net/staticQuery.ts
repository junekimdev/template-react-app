import { useQuery } from '@tanstack/react-query';

export const staticQuery = <TData = unknown>(url: string) => {
  return useQuery<TData, Error>({
    queryKey: ['static', url],
    queryFn: async ({ queryKey }) => {
      const [_key, url] = queryKey;
      const res = await fetch(url);
      if (res.ok) {
        return await res.json();
      }
      const msg = await res.text();
      throw new Error(msg);
    },
    staleTime: Infinity, // Only Once
  });
};
