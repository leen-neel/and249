<script lang="ts" setup>
  // import { sendEmail } from "pages/api/email";
  import { reactive } from "vue";

  const form = reactive({
    name: "",
    email: "",
    message: "",
  });
</script>

<template>
  <div class="">
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Name*</span>
      </div>
      <input
        type="text"
        v-model="form.name"
        class="input input-bordered bg-teal-800 focus:bg-teal-700 w-full max-w-xs"
      />
    </label>

    {{ form }}

    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Email*</span>
      </div>
      <input
        type="email"
        v-model="form.email"
        class="input bg-teal-800 focus:bg-teal-700 w-full max-w-xs"
      />
    </label>
    <label class="form-control">
      <div class="label">
        <span class="label-text">Message*</span>
      </div>
      <textarea
        v-model="form.message"
        class="textarea textarea-bordered bg-teal-800 focus:bg-teal-700 h-24"
      ></textarea>
    </label>
    <button
      class="btn bg-transparent border-white text-white border-1 hover:bg-emerald-500 w-52 mt-4"
    >
      Hire me
    </button>
  </div>
</template>
