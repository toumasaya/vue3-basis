<template>
  <ResourceDetail :resource="resource">
    <template #buttonLink>
      <a @click="$router.go(-1)" class="card-footer-item">
        Back
      </a>
    </template>
  </ResourceDetail>
</template>

<script>
import { fetchResourceByIdAPI } from '@/actions';
import ResourceDetail from '@/components/ResourceDetail';

export default {
  components: { ResourceDetail },
  data() {
    return {
      resource: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.resource = await fetchResourceByIdAPI(id);
  },
};
</script>

<style lang="scss" scoped></style>
