<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    const { default: Splide } = await import('@splidejs/splide');
    new Splide('#banner', {
      autoplay: true,
      lazyLoad: 'sequential',
      rewind: true,
    }).mount();
  });
</script>

<style>
  .banner {
    @apply w-full flex justify-center;
  }
  .splide {
    @apply w-11/12 h-60 shadow-lg;
  }
  .splide__slide__container {
    @apply w-full h-60 rounded-lg overflow-hidden;
  }
  ul {
    width: 50vw;
  }
  li {
    @apply w-full;
  }
  img {
    @apply h-full w-full object-cover;
  }
</style>

<div class="banner">
  <div class="splide" id="banner">
    <div class="splide__track">
      <ul class="splide__list">
        {#each [1, 2, 4, 5, 7, 8, 9] as i (i)}
          <li class="splide__slide">
            <div class="splide__slide__container">
              <img
                class="lazyload"
                src="/images/thumbnail.svg"
                data-src="/images/banner/banner-{i}.webp"
                alt="Spotunes Banner {i}"
              />
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
