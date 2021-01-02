<script>
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';
</script>

<style global>
  @import '../node_modules/overlayscrollbars/css/OverlayScrollbars.css';
  @import '../node_modules/@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
  @import '../assets/global.css';
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* Start Splide */
  .splide__arrow {
    transform: scale(0.7);
    @apply text-pink-600 !important;
  }
  .splide__pagination__page:hover,
  .splide__pagination__page.is-active {
    @apply bg-pink-600 !important;
  }
  .splide__arrow svg {
    @apply fill-current opacity-50 transition-all duration-300;
  }
  .splide__arrow:hover svg {
    @apply fill-current opacity-100;
  }
  /* End Splide */
</style>

<Router routes="{routes}" />
