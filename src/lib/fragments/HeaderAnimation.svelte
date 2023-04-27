<script lang="ts">
     export let label: string;
</script>

<h1>
    <span class="magic">
      <span class="magic-text">{label}</span>
    </span>
  </h1>

<style lang="scss">
   @keyframes background-pan {
  from {
    background-position: 0% center;
  }
  
  to {
    background-position: -200% center;
  }
}

h1 {
  color: white;
  font-family: "Rajdhani", sans-serif;
  font-size: clamp(2em, 2vw, 4em);
  font-weight: bolder;
  font-size: 5rem;
  margin: 0px;
  padding: 20px;
  text-align: center;
  text-shadow: none;
}
h1 > .magic > .magic-text {
  animation: background-pan 3s linear infinite;
  background: linear-gradient(
    to right,
    #210029,
    #DB00FF,
    darkblue,
    #210029
  );
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}
</style>