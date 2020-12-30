<script>
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
  .sidebar {
    @apply h-full w-14 pt-3 pb-3 bg-white bg-opacity-50;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  .sidebar.active {
    @apply w-60;
  }
  .hide_text {
    @apply hidden sm:inline-block;
  }
  .nav-header {
    @apply flex items-center font-medium whitespace-nowrap mb-4;
    @apply sm:mb-0;
    border-bottom-width: 1px;
  }
  .nav-header .hide_text {
    @apply pr-6;
  }
  .avatar {
    @apply w-9 h-9 mr-2 ml-2 pr-2 rounded-full bg-gray-300 object-cover;
    @apply sm:ml-4 sm:pr-0 sm:w-12 sm:h-12;
  }
  .pro {
    @apply border-pink-600 text-pink-600 pr-1 pl-1 inline-block text-center rounded-md;
    font-size: small;
    border-width: 1px;
  }
  .navTitle {
    @apply mt-8 pr-6 pl-6 uppercase font-semibold;
  }
  a,
  ul,
  li {
    @apply block;
  }

  .nav-body a {
    @apply sm:pl-8 sm:pr-8;
    @apply pt-2 pb-2 pr-4 pl-4 align-middle text-gray-800;
    text-decoration: none;
  }
  .nav-body a:hover {
    @apply text-pink-600 bg-white bg-opacity-30;
  }
  .nav-body a.active {
    @apply bg-white text-pink-600 font-medium bg-opacity-70;
  }
  .nav-body .hide_text {
    @apply ml-2;
  }
</style>

<div class="sidebar{isSidebarExpand ? ' active' : ''}">
  <div class="nav-header">
    <img class="avatar" src="favicon.png" alt="Avatar" />
    <div class="hide_text">
      <a href="#/">Agustinus Yohannes</a>
      <span class="pro">Pro</span>
    </div>
  </div>

  {#each navLinks as { id, items, name } (id)}
    <div class="navTitle hide_text">{name}</div>
    <ul class="nav-body">
      {#each items as { title, link, icon } (title)}
        <li>
          <a href="{$url(link)}" class:active="{$isActive(link)}">
            <Icon bi="{icon}" />
            <span class="hide_text">{title} </span>
          </a>
        </li>
      {/each}
    </ul>
  {/each}
</div>
