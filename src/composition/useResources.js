import { onMounted, ref, computed } from 'vue';
import { fetchResources } from '@/actions';

export default function useResources() {
  const resources = ref([]);
  const getResources = async () => {
    resources.value = await fetchResources();
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
  };
}
