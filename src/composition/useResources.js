import { onMounted, ref, computed } from 'vue';
import { fetchResources } from '@/actions';

export default function useResources() {
  const resources = ref([]);
  const getResources = async () => {
    resources.value = await fetchResources();
  };

  const hydrateResource = (resource, operation) => {
    const index = resources.value.findIndex((r) => r._id === resource._id);

    operation === 'update'
      ? (resources.value[index] = resource)
      : resources.value.splice(index, 1);
  };

  onMounted(getResources);

  // computed
  const resourceLength = computed(() => resources.value.length);
  const hasResources = computed(() => resourceLength.value > 0);

  return {
    resources,
    getResources,
    resourceLength,
    hasResources,
    hydrateResource,
  };
}
