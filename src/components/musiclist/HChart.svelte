<script>
  import { onMount } from 'svelte';
  import { randChar } from '../../functions/index';
  import Icon from '../Icon.svelte';

  const randID = randChar(8);
  onMount(async () => {
    const { default: Splide } = await import('@splidejs/splide');
    new Splide(`#h-chart-${randID}`, {
      autoWidth: true,
      gap: '1rem',
      lazyLoad: 'nearby',
      padding: '2.5rem',
      pagination: false,
      perMove: 1,
      rewind: true,
      breakpoints: {
        425: {
          padding: '2rem',
        },
      },
    }).mount();
  });
</script>

<style>
  .horizontal-chart {
    @apply mt-6;
  }
  .list-header {
    @apply mr-auto ml-10 mb-3;
  }
  h1 {
    font-size: 1.15rem;
    @apply uppercase;
  }
  h2 {
    @apply font-bold;
  }

  .splide {
    @apply h-56;
  }
  ul {
    width: 50vw;
  }
  li > div,
  figure {
    @apply w-40;
  }
  img {
    @apply w-full h-full object-cover;
  }
  figure {
    @apply w-40 h-40 rounded-lg overflow-hidden relative transition-all duration-300;
  }
  figure button {
    @apply rounded-full bg-pink-600 w-11 h-11 flex justify-center items-center outline-none border-none;
  }
  @media screen and (min-width: 640px) {
    figure:hover img {
      filter: grayscale(70%);
    }
    .cover-overlay {
      transform: scale(3);
      opacity: 0;
      @apply w-full h-40 absolute top-0 left-0 bg-pink-700 bg-opacity-50 text-white;
      @apply flex justify-center items-center transition-all duration-300;
    }
    figure:hover .cover-overlay {
      transform: scale(1);
      opacity: 1;
    }
  }

  .music-header {
    font-size: 0.92em;
    @apply ml-2 mr-2;
  }
</style>

<div class="horizontal-chart">
  <div class="list-header">
    <h1>
      Top Chart 50
      <a href="#/"><Icon bi="play" /></a>
    </h1>
    <p>The Sounds that you like</p>
  </div>

  <div id="h-chart-{randID}" class="splide">
    <div class="splide__track">
      <ul class="splide__list">
        {#each [1, 2, 4, 5, 7, 8, 9] as i (i)}
          <li class="splide__slide">
            <div class="splide__slide__container">
              <figure>
                <img
                  class="lazyload"
                  src="/images/thumbnail.svg"
                  data-src="/images/banner/banner-{i}.webp"
                  alt="Spotunes Banner {i}"
                />
                <div class="cover-overlay">
                  <button><Icon bi="play" width="30" /></button>
                </div>
              </figure>

              <div class="music-header">
                <h2 class="text-overflow"><a href="#/">Ini Judul </a></h2>
                <h3 class="text-overflow"><a href="#/">Singer - Band</a></h3>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
