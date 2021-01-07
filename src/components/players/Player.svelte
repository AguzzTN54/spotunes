<script>
  import Slider from './Slider.svelte';
  import Icon from '../Icon.svelte';
  import { keyboard, format } from '../../functions/index';

  let duration;
  let muted = false;
  let currentTime = 0;
  let paused = true;
  let volume = 0.5;

  const song = {
    name: 'Just Be Friend',
    author: 'Kalan',
    coverURL:
      'https://s3-ap-northeast-1.amazonaws.com/kalan.dev.blog/images/2.png',
    src:
      'https://s3-ap-northeast-1.amazonaws.com/kalan.dev.blog/images/Just+Be+Friend.mp3',
  };

  const shortcut = {
    ArrowUp: () => {
      volume += 0.05;
    },
    ArrowDown: () => {
      volume -= 0.05;
    },
    ArrowLeft: () => {
      currentTime -= 5;
    },
    ArrowRight: () => {
      currentTime += 5;
    },
    Space: () => {
      paused = !paused;
    },
    KeyP: () => {
      paused = true;
    },
    KeyM: () => {
      muted = !muted;
    },
  };
</script>

<style>
  * {
    box-sizing: border-box;
  }
  .player-container {
    @apply absolute w-full h-24 bg-white p-4 left-0 bottom-0 flex;
  }
  :global(.dark .player-container) {
    @apply bg-gray-900;
  }

  img {
    width: 50px;
    margin-right: 8px;
  }

  .song-info,
  .controls {
    display: flex;
    justify-content: space-between;
  }

  h4 {
    @apply m-0;
    font-weight: normal;
  }

  .volume {
    width: 100px;
  }
  .slider {
    width: calc(100% - 200px);
  }

  audio {
    visibility: hidden;
    opacity: 0;
  }
</style>

<!-- svelte-ignore a11y-media-has-caption -->
<audio
  src="{song.src}"
  bind:duration
  bind:currentTime
  bind:muted
  bind:paused
  bind:volume
></audio>

<div use:keyboard="{{ shortcut }}" class="player-container" tabindex="{0}">
  <div class="song-info">
    <img src="{song.coverURL}" alt="{song.name} 的專輯封面" />
  </div>

  <div class="properties" style="display: block; width:100%;">
    <div class="information">
      <div>
        <h4>{song.name} - {song.author}</h4>
      </div>
    </div>

    <div class="controls">
      <div class="slider">
        {#if duration}
          <Slider
            max="{duration}"
            min="{0}"
            step="{duration / 200}"
            current="{currentTime}"
            on:change="{(e) => {
              currentTime = e.detail.value;
            }}"
          />
          <span>{format(currentTime)} / {format(duration)}</span>
        {/if}
      </div>

      <div class="buttons">
        <button type="button">
          <Icon bi="caret-left-fill" />
        </button>
        <button
          type="button"
          on:click="{() => {
            paused = !paused;
          }}"
        >
          {#if paused}
            <Icon bi="play-fill" />
          {:else}
            <Icon bi="pause-fill" />
          {/if}
        </button>
        <button type="button">
          <Icon bi="caret-right-fill" />
        </button>
      </div>

      <div class="volume">
        <Slider
          max="{1}"
          min="{0}"
          step="{0.01}"
          current="{volume}"
          on:change="{(e) => {
            volume = e.detail.value;
          }}"
        />
      </div>
    </div>
  </div>
</div>
