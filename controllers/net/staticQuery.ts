import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const useStaticQuery = <T = unknown>(url: string) => {
  return useQuery<T, Error, T, string[]>({
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
  }) as UseQueryResult<T, Error>;
};
