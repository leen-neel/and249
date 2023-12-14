<script setup lang="ts">
  import { ETailwind, EHeading } from "vue-email";

  defineProps<{
    name: string;
    message: string;
  }>();

  const tailwindConfig = {
    theme: {
      extend: {
        colors: {
          primary: "#007291",
        },
      },
    },
  };
</script>

<template>
  <e-tailwind :config="tailwindConfig">
    <EContainer>
      <e-heading as="h1" class="text-2xl">
        {{ name }} sent a message!
      </e-heading>
    </EContainer>
  </e-tailwind>
</template>
