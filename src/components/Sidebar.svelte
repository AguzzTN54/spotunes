<script>
  import { fade } from 'svelte/transition';
  import { isActive, url } from '@roxi/routify';
  import Icon from './Icon.svelte';

  const navLinks = [
    {
      id: 1,
      name: '',
      items: [
        {
          title: 'Explore',
          link: '/explore',
          icon: 'compass',
        },
        {
          title: 'Podcast',
          link: '/podcast',
          icon: 'mic',
        },
        {
          title: 'Radio',
          link: '/radio',
          icon: 'broadcast-pin',
        },
        {
          title: 'Events',
          link: '/events',
          icon: 'calendar2-event',
        },
      ],
    },
    {
      id: 2,
      name: 'Your Musics',
      items: [
        {
          title: 'Songs',
          link: '/songs',
          icon: 'music-note-beamed',
        },
        {
          title: 'Albums',
          link: '/albums',
          icon: 'vinyl-fill',
        },
        {
          title: 'Artists',
          link: '/artists',
          icon: 'people',
        },
      ],
    },
  ];

  export let isSidebarExpand = true;
</script>

<style>
  :global(.dark .sidebar) {
    @apply bg-gray-700 bg-opacity-50 text-white !important;
  }
  .sidebar {
    @apply h-full w-14 pt-3 pb-3 bg-white bg-opacity-50 transition-all duration-500;
    backdrop-filter: blur(13px);
  }
  .sidebar.active {
    @apply w-60;
  }
  .sidebar.active .hide_text {
    @apply inline-block;
  }
  .sidebar.active .nav-header {
    @apply mb-0;
  }
  .sidebar.active .avatar {
    @apply ml-4 w-12 h-12;
  }
  .sidebar.active .nav-body a {
    @apply pl-6 pr-6;
  }

  /* Mini Sidebar */
  .nav-header {
    @apply flex items-center font-medium whitespace-nowrap mb-4  transition-all duration-500;
  }
  .nav-header .hide_text {
    @apply pr-6;
  }
  .hide_text a {
    @apply dark:text-white;
  }
  .hide_text .pro {
    @apply dark:bg-pink-500 dark:text-white font-extralight !important;
  }
  .avatar {
    @apply w-9 h-9 mr-2 ml-2 rounded-full bg-gray-300 object-cover transition-all duration-500;
  }
  .pro {
    @apply border-pink-500 text-pink-500 pr-1 pl-1 inline-block text-center rounded-md transition-all;
    font-size: small;
    border-width: 1px;
  }
  .navTitle {
    @apply mt-8 pr-6 pl-6 uppercase font-semibold whitespace-nowrap;
  }
  a,
  ul,
  li {
    @apply block text-gray-600;
  }

  .nav-body a {
    @apply pt-2 pb-2 pr-4 pl-4 align-middle text-gray-800 whitespace-nowrap transition-all duration-500;
    @apply dark:text-gray-100;
    text-decoration: none;
  }
  .nav-body a:hover {
    @apply text-pink-600 bg-white;
    @apply dark:bg-gray-600 dark:text-white;
    @apply bg-opacity-30 !important;
  }
  .nav-body a.active {
    @apply bg-white text-pink-600 font-medium;
    @apply dark:bg-gray-800 dark:text-pink-400;
    @apply bg-opacity-70 !important;
  }
  .nav-body .hide_text {
    @apply ml-2;
  }
</style>

<div class="sidebar{isSidebarExpand ? ' active' : ''}">
  <div class="nav-header">
    <img class="avatar" src="/images/profile.webp" alt="Avatar" />
    {#if isSidebarExpand}
      <div
        class="hide_text"
        in:fade="{{ duration: 500 }}"
        out:fade="{{ duration: 500 }}"
      >
        <a href="#/">Agustinus Yohannes</a>
        <span class="pro">Pro</span>
      </div>
    {/if}
  </div>

  {#each navLinks as { id, items, name } (id)}
    {#if isSidebarExpand}
      <div
        class="navTitle hide_text"
        in:fade="{{ duration: 500 }}"
        out:fade="{{ duration: 500 }}"
      >
        {name}
      </div>
    {/if}

    <ul class="nav-body">
      {#each items as { title, link, icon } (title)}
        <li>
          <a href="{$url(link)}" class:active="{$isActive(link)}">
            <Icon bi="{icon}" />
            {#if isSidebarExpand}
              <span
                class="hide_text"
                in:fade="{{ duration: 500 }}"
                out:fade="{{ duration: 500 }}"
              >{title}
              </span>
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  {/each}
</div>
