<script>
  import { metatags } from '@roxi/routify';
  import axios from 'axios';
  import HomeBanner from '../components/HomeBanner.svelte';
  import { Categories, HChart, VList } from '../components/musiclist/index';

  metatags.title = 'Spotunes - Music Player App';
  metatags.description = 'Play and Listen Musics Everywhere';

  const fetchData = async () => {
    const get = await fetch(
      'https://api-v2.soundcloud.com/mixed-selections?client_id=cKf4vDOFJQhksTD5LHptv0uG9P0gHZA0&limit=10&offset=0&linked_partitioning=1&app_version=1609942767&app_locale=en',
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'no-cache',
          pragma: 'no-cache',
          'sec-ch-ua':
            '"Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"',
          'sec-ch-ua-mobile': '?0',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
        },
        referrer: 'https://soundcloud.com/',
        referrerPolicy: 'origin',
        body: null,
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
      }
    );
    const { data } = await get.json();
    console.log(data);
  };
  fetchData();
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
  <div class="list-right">
    <Categories />
  </div>
</div>
