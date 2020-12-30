<script>
  import { onMount } from 'svelte';
  import BottomAppbar from '../components/BottomAppbar.svelte';
  import Sidebar from '../components/Sidebar.svelte';

  let mobile = false;
  let isSidebarExpand = true;
  onMount(() => {
    const winWidth = window.innerWidth;
    if (winWidth <= 425) mobile = true;
    if (winWidth < 640) isSidebarExpand = false;
    window.addEventListener('resize', () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 425) mobile = true;
      else mobile = false;
      if (screenWidth < 640) isSidebarExpand = false;
      else isSidebarExpand = true;
    });
  });
</script>

<style>
  .row {
    @apply flex h-screen;
  }
  main {
    @apply w-full h-full bg-white bg-opacity-90 relative;
  }
  .sidebar {
    @apply h-full;
    width: fit-content;
  }
</style>

<section class="row">
  <div class="col sidebar">
    {#if mobile}
      <BottomAppbar />
    {:else}
      <Sidebar isSidebarExpand="{isSidebarExpand}" />
    {/if}
  </div>

  <main class="col">
    <slot />
  </main>
</section>
