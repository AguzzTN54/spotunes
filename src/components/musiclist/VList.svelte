<script>
  import { onMount } from 'svelte';
  import OverlayScrollbars from 'overlayscrollbars';
  import Icon from '../Icon.svelte';

  let musiclist;

  onMount(() => {
    OverlayScrollbars(musiclist, {
      sizeAutoCapable: false,
      scrollbars: {
        autoHide: 'leave',
      },
    });
  });
</script>

<style>
  .list-header {
    @apply mr-auto mb-3;
  }
  h1 {
    font-size: 1.15rem;
    @apply uppercase;
  }

  .table-content {
    @apply table-auto w-full rounded-md block;
  }
  thead {
    @apply block w-full;
  }
  thead > tr {
    @apply font-semibold shadow-md bg-white w-full flex;
  }
  :global(.dark .table-content thead tr) {
    @apply bg-gray-900;
  }

  tbody {
    @apply block w-full;
    height: 300px;
  }

  th:nth-child(1) {
    @apply text-left mr-auto pl-2;
  }
  th:nth-child(2),
  th:nth-child(3),
  td:nth-child(2),
  td:nth-child(3) {
    @apply w-1/5;
  }
  th:nth-child(4),
  td:nth-child(4) {
    @apply w-2/12;
  }
  th,
  td {
    @apply pt-1 pb-1 text-sm;
  }

  .musiclist {
    @apply w-full h-full;
  }
  tbody tr:hover {
    @apply bg-gray-100 dark:bg-gray-700 !important;
  }
  tbody tr:nth-child(odd) {
    @apply p-2 bg-white bg-opacity-50;
    @apply dark:bg-gray-800 bg-opacity-40;
  }
  td:not(:nth-child(1)) {
    @apply text-center pl-1 pr-1;
  }

  .title {
    @apply inline-flex items-center;
  }
  figure {
    @apply ml-2 mr-2;
  }
  img {
    @apply rounded overflow-hidden w-8 h-8 object-cover;
  }
  button {
    @apply outline-none border-none bg-transparent;
  }
</style>

<div class="vertical-list">
  <div class="list-header">
    <h1>Recent Update</h1>
    <p>Last Uploaded Musics</p>
  </div>

  <table class="table-content">
    <thead>
      <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>Albums</th>
        <th>Duration</th>
      </tr>
    </thead>

    <tbody>
      <div class="musiclist" bind:this="{musiclist}">
        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as i (i)}
          <tr>
            <td class="title">
              <span> {i} </span>
              <figure>
                <img
                  src="/images/thumbnail.svg"
                  data-src="/images/banner/banner-1.webp"
                  alt="Music Album Cover"
                  class="lazyload"
                />
              </figure>
              <a href="#/" title="Matane" class="text-overflow">
                Cerita Kepada Kawan mantab mantab syekali yeahs
              </a>
            </td>
            <td>
              <a href="#/" title="Matane" class="text-overflow">Ebiet G. Ade</a>
            </td>
            <td>
              <a href="#/" title="Matane" class="text-overflow">Cinta Sebening
                Embun</a>
            </td>
            <td>
              5:55
              <button><Icon bi="play" /></button>
            </td>
          </tr>
        {/each}
      </div>
    </tbody>
  </table>
</div>
