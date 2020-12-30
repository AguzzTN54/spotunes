<script>
  let darkMode = localStorage.getItem('theme') === 'dark';
  const setDarkMode = (isDark) => {
    const html = document.body;
    if (isDark) {
      localStorage.setItem('theme', 'dark');
      html.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      html.classList.remove('dark');
    }
  };

  $: setDarkMode(darkMode);
</script>

<style>
  input[type='checkbox'] {
    @apply opacity-0 w-1 h-0;
  }
  .switch {
    @apply relative inline-block w-10 h-6 bg-white shadow-md rounded-3xl transition-all;
    @apply border border-gray-300 overflow-hidden;
  }
  .switch.dark-enable {
    background-color: rgb(2, 14, 46);
  }
  .dark-slider {
    @apply w-4 h-4 bg-yellow-400 absolute top-1 left-1 rounded-full;
    @apply pointer-events-none transition-all;
  }
  .switch.dark-enable .dark-slider {
    transform: translateX(100%);
  }
  .dark-slider::after {
    content: '';
    @apply absolute top-0 -left-5 w-full h-full rounded-full bg-white transition-all;
  }
  .switch.dark-enable .dark-slider::after {
    background-color: rgb(2, 14, 46);
    @apply -left-2;
  }
  label {
    @apply absolute top-0 left-0 h-full w-full cursor-pointer;
  }
</style>

<div class="switch {darkMode ? 'dark-enable' : ''}">
  <input type="checkbox" id="switch" bind:checked="{darkMode}" />
  <label for="switch"> <span class="dark-slider"></span> </label>
</div>
