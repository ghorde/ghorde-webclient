<script lang="ts">
    export let text: string;
    export let disabled: boolean = false;
    export let onClick: () => void;
  </script>
  
  <button
    class="{disabled ? 'disabled' : ''}"
    on:click="{onClick}"
  >
    {text}
  </button>
  
  <style lang="scss">
    button {
      background-color: #3498db;
      border: none;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      font-size: 16px;
      padding: 10px 20px;
      transition: background-color 0.3s ease;
  
      &.disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
  
      &:hover:not(.disabled) {
        background-color: #2980b9;
      }
    }
  </style>