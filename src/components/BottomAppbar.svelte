<script>
  import { isActive, url } from '@roxi/routify';
  import Icon from './Icon.svelte';

  const navLinks = [
    {
      title: 'Podcast',
      path: '/podcast',
      icon: 'mic',
    },
    {
      title: 'Radio',
      path: '/radio',
      icon: 'broadcast-pin',
    },
    {
      title: 'Explore',
      path: '/explore',
      icon: 'compass',
    },
    {
      title: 'Events',
      path: '/events',
      icon: 'calendar2-event',
    },
  ];
</script>

<style>
  :global(.dark .bottom-appbar) {
    @apply bg-gray-800 bg-opacity-95 !important;
  }

  .bottom-appbar {
    z-index: 1000;
    @apply flex items-center justify-evenly h-12 w-full fixed bottom-0 left-0 bg-white bg-opacity-90;
    @apply border-t border-gray-200 transition-all duration-500;
    backdrop-filter: blur(12px);
  }
  a,
  .nav-link {
    @apply flex h-full w-full justify-center items-center;
  }
  .bottom-appbar a {
    @apply text-gray-500;
    @apply dark:text-gray-300;
  }
  .bottom-appbar a.active,
  .bottom-appbar a:hover {
    @apply text-pink-600;
  }

  .avatar {
    @apply rounded-full;
    width: 30px;
    height: 30px;
  }
  .active > .avatar {
    @apply border-pink-600 border-2;
  }
</style>

<div class="bottom-appbar">
  {#each navLinks as { title, icon, path } (title)}
    <div class="nav-link">
      <a href="{$url(path)}" class:active="{$isActive(path)}">
        <Icon bi="{icon}" width="28" />
      </a>
    </div>
  {/each}
  <div class="nav-link">
    <a href="{$url('/me')}" class:active="{$isActive('/me')}">
      <img src="favicon.png" alt="Avatar" class="avatar" />
    </a>
  </div>
</div>
