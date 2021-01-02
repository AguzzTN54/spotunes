<script>
  import { metatags } from '@roxi/routify';
  import HomeBanner from '../components/HomeBanner.svelte';
  import { HChart } from '../components/musiclist/index';

  metatags.title = 'Spotunes - Music Player App';
  metatags.description = 'Play and Listen Musics Everywhere';
</script>

<HomeBanner />
<HChart />
