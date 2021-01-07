<script>
  import { metatags } from '@roxi/routify';
  import HomeBanner from '../components/HomeBanner.svelte';
  import { HChart, VList } from '../components/musiclist/index';

  metatags.title = 'Spotunes - Music Player App';
  metatags.description = 'Play and Listen Musics Everywhere';
</script>

<style>
  .row {
    @apply flex w-full mb-8 mt-6 flex-col;
    @apply sm:flex-row;
  }
  .list-left,
  .list-right {
    flex-basis: 50%;
  }

  .list-left {
    @apply sm:pl-10 sm:pr-10;
    @apply pl-4 pr-4;
  }
</style>

<HomeBanner />
<HChart />

<div class="row">
  <div class="list-left">
    <VList />
  </div>
  <div class="list-right">Oke</div>
</div>
