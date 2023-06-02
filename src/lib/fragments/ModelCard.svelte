<script lang="ts">
  export let name: string;
  export let performance: string;
  export let count: string;
  export let queued: string;
  export let eta: string;

</script>

<div class="card flex flex-col gap-2 card card-hover w-[300px] p-4 bg-surface-900">
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