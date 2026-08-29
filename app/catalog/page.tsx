'use client';

import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCampers } from '@/lib/api';
import type { CamperFiltersParams } from '@/lib/api';
import CamperFilters from '@/components/CamperFilters/CamperFilters';
import CamperList from '@/components/CamperList/CamperList';
import NotFound from '@/components/NotFound/NotFound';
import Loader from '@/components/Loader/Loader';

const CatalogPage = () => {
  const [filters, setFilters] = useState<CamperFiltersParams>({});
  const [filterValues, setFilterValues] = useState<CamperFiltersParams>({});

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['campers', filters],

    queryFn: ({ pageParam }) =>
      getCampers({
        page: pageParam,
        perPage: 4,
        ...filters,
      }),

    initialPageParam: 1,

    getNextPageParam: lastPage => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
  });

  const campers = data?.pages.flatMap(page => page.campers) ?? [];

  const handleSearch = () => {
    setFilters(filterValues);
  };

  const handleClear = () => {
    setFilterValues({});
    setFilters({});
  };

  if (isFetching && !isFetchingNextPage) {
    return <Loader />;
  }

  const handleShowAll = () => {
    setFilterValues({});
    setFilters({});
  };

  return (
    <main>
      <CamperFilters
        filters={filterValues}
        onChange={setFilterValues}
        onSearch={handleSearch}
        onClear={handleClear}
      />

      {campers.length > 0 ? (
        <CamperList campers={campers} />
      ) : (
        <NotFound onShowAll={handleShowAll} />
      )}

      {hasNextPage && (
        <button type="button" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </button>
      )}
    </main>
  );
};

export default CatalogPage;
