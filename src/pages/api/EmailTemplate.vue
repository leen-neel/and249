<script setup lang="ts">
  import { ESection, ETailwind, EHeading } from "vue-email";

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
      <e-heading as="h1" class="text-2xl font-bold">
        {{ name }} sent a message!
      </e-heading>

      <e-section class="text-xl font-semibold">
        {{ message }}
      </e-section>
    </EContainer>
  </e-tailwind>
</template>
