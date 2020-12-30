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
  .bottom-appbar {
    @apply flex items-center justify-evenly h-12 w-full fixed bottom-0 left-0 bg-white bg-opacity-90;
    @apply border-t border-gray-200;
  }
  a,
  .nav-link {
    @apply flex h-full w-full justify-center items-center;
  }
  a {
    @apply text-gray-500;
  }
  a.active,
  a:hover {
    @apply text-pink-600 bg-white;
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
        <Icon bi="{icon}" width="30" />
      </a>
    </div>
  {/each}
  <div class="nav-link">
    <a href="{$url('/me')}" class:active="{$isActive('/me')}">
      <img src="favicon.png" alt="Avatar" class="avatar" />
    </a>
  </div>
</div>
