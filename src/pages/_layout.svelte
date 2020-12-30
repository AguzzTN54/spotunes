<script>
  import { onMount } from 'svelte';
  import BottomAppbar from '../components/BottomAppbar.svelte';
  import Sidebar from '../components/Sidebar.svelte';
  import Topbar from '../components/Topbar.svelte';

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
  :global(.dark main) {
    @apply text-white;
    @apply bg-gray-800 bg-opacity-95 !important;
  }
  main {
    @apply w-full h-full bg-white relative bg-opacity-90 transition-all duration-500;
  }
  .sidebar-content {
    @apply h-full;
    width: fit-content;
  }

  .content {
    @apply w-full;
    height: calc(100% - 3.5rem);
  }
</style>

<section class="row">
  <div class="col sidebar-content">
    {#if mobile}
      <BottomAppbar />
    {:else}
      <Sidebar isSidebarExpand="{isSidebarExpand}" />
    {/if}
  </div>

  <main class="col">
    <Topbar
      mobile="{mobile}"
      isSidebarExpand="{isSidebarExpand}"
      on:click="{() => {
        isSidebarExpand = !isSidebarExpand;
      }}"
    />
    <div class="content">
      <slot />
    </div>
  </main>
</section>
