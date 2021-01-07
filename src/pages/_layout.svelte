<script>
  import { onMount } from 'svelte';
  import OverlayScrollbars from 'overlayscrollbars';
  import 'lazysizes';
  import BottomAppbar from '../components/BottomAppbar.svelte';
  import Sidebar from '../components/Sidebar.svelte';
  import Topbar from '../components/Topbar.svelte';

  let content;
  let shadow = false;
  let mobile = false;
  let isSidebarExpand = true;

  const checkViewport = () => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    mobile = screenWidth <= 425;
    isSidebarExpand = screenWidth > 640;
  };
  const whenSrolled = () => {
    const viewportElement = content.querySelector('.os-viewport');
    viewportElement.addEventListener('scroll', () => {
      const position = viewportElement.scrollTop;
      shadow = position > 0;
    });
  };

  onMount(() => {
    checkViewport();
    window.addEventListener('resize', () => {
      checkViewport();
    });
    OverlayScrollbars(content, { sizeAutoCapable: false });
    whenSrolled();
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
      shadow="{shadow}"
      isSidebarExpand="{isSidebarExpand}"
      on:click="{() => {
        isSidebarExpand = !isSidebarExpand;
      }}"
    />
    <div class="content" bind:this="{content}">
      <slot />
    </div>
  </main>
</section>
