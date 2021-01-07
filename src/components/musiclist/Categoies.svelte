<style>
  .list-header {
    @apply mr-auto mb-3;
  }
  h1 {
    font-size: 1.15rem;
    @apply uppercase;
  }

  .list {
    @apply flex justify-evenly items-center flex-wrap;
  }
  .item {
    /* min-width: 40%; */
    @apply w-32 h-32 relative ml-8 mr-8 mt-4 mb-4 rounded-md overflow-hidden text-white;
  }
  .item::after {
    content: '';
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0)
    );
    @apply absolute block w-full h-full bottom-0;
  }

  img,
  a {
    @apply w-full h-full object-cover;
  }

  .title {
    z-index: +1;
    @apply absolute bottom-0 left-0 block m-2;
  }
</style>

<div class="categories">
  <div class="list-header">
    <h1>Categories</h1>
    <p>Find your favorite Musics</p>
  </div>

  <div class="list">
    {#each [1, 2, 3, 4] as i (i)}
      <div class="item">
        <a href="#/">
          <img
            src="/images/thumbnail.svg"
            data-src="/images/banner/banner-1.webp"
            alt="Categories"
            class="lazyload"
          />
          <div class="title">mantab</div>
        </a>
      </div>
    {/each}
  </div>
</div>
