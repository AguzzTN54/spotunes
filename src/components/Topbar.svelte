<script>
  import { createEventDispatcher } from 'svelte';
  import Icon from './Icon.svelte';

  const arrPlaceholder = [
    'Search for Music / Artist / Album / Playlist',
    '"Iwan Fals"',
    '"JKT48"',
    '"Payung Teduh"',
    '"ST 12"',
  ];
  const randomPlaceholder =
    arrPlaceholder[Math.floor(Math.random() * arrPlaceholder.length - 1)];

  let searchValue = '';

  export let isSidebarExpand = true;
  const dispatch = createEventDispatcher();
  const drawerClick = () => {
    dispatch('click', {
      msg: 'toggle clicked',
    });
  };
</script>

<style>
  .topbar {
    @apply w-full h-12 flex justify-start items-center;
    @apply sm:h-14;
  }

  .drawer-toggle > button {
    @apply border-none bg-transparent ml-3 mr-3 mt-1 p-1 outline-none;
  }

  .search-form {
    @apply w-96 max-w-full relative pr-4 pl-4;
  }
  .search-input {
    @apply h-10 w-full inline-block pl-10 pr-2 pt-2 pb-2 font-light bg-transparent transition-all;
    @apply outline-none border-gray-300 border-b-2 border-t-0 border-r-0 border-l-0 focus:border-pink-500;
  }
  .search-button {
    @apply border-none outline-none bg-transparent absolute left-6 top-1/2 text-gray-300;
    transform: translateY(-50%);
  }
  .search-input:focus ~ .search-button {
    @apply text-pink-500;
  }
</style>

<div class="topbar">
  <div class="drawer-toggle">
    <button on:click="{drawerClick}">
      {#if isSidebarExpand}
        <Icon bi="chevron-left" width="25" />
      {:else}
        <Icon bi="chevron-right" width="25" />
      {/if}
    </button>
  </div>
  <div class="search-form">
    <input
      type="text"
      id="search"
      class="search-input"
      name="s"
      placeholder="{randomPlaceholder}"
      bind:value="{searchValue}"
      autocomplete="false"
    />
    <button class="search-button">
      <Icon bi="search" />
    </button>
  </div>
</div>
