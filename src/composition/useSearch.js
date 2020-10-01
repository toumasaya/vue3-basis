import { computed, ref } from 'vue';

export default function useSearch(resources) {
  const searchQuery = ref('');
  const setSearchQuery = (value) => (searchQuery.value = value);

  const searchedResources = computed(() => {
    if (!searchQuery.value) {
      return resources.value;
    }

    const lowerCaseSearch = searchQuery.value.toLocaleLowerCase();

    return resources.value.filter((resource) => {
      const lowerCaseTitle = resource.title.toLocaleLowerCase();
      return lowerCaseTitle.includes(lowerCaseSearch);
    });
  });

  return {
    searchedResources,
    setSearchQuery,
  };
}
