<script lang="ts">
  export let name: string;
  export let performance: string;
  export let count: string;
  export let queued: string;
  export let eta: string;

</script>

<div class="modelCard">
  <h1>
    {name}
  </h1>
  <div class="performance">
    Performance: {performance}
  </div>
  <div class="count">
    Count: {count}
  </div>
  <div class="queued">
    Queued: {queued}
  </div>
  <div class="eta">
    ETA: {eta}
  </div>
</div>

<style lang="scss">
  .modelCard {
    background-color: #1E1E1E;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-size: 1.5rem;
      font-weight: 500;
      margin: 0;
    }
    .performance {
      font-size: 1rem;
      font-weight: 400;
      margin: 0;
    }
    .count {
      font-size: 1rem;
      font-weight: 400;
      margin: 0;
    }
    .queued {
      font-size: 1rem;
      font-weight: 400;
      margin: 0;
    }
    .eta {
      font-size: 1rem;
      font-weight: 400;
      margin: 0;
    }
  }
</style>