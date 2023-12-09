<script lang="ts" setup>
  import { reactive, ref } from "vue";
  // import { sendEmail } from "~/pages/api/email";

  const form = reactive({
    name: "",
    email: "",
    message: "",
  });

  const sendMessage = async () => {
    const response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(form),
    });
  };
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
        name="name"
      />
    </label>

    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Email*</span>
      </div>
      <input
        type="email"
        v-model="form.email"
        class="input bg-teal-800 focus:bg-teal-700 w-full max-w-xs"
        name="email"
      />
    </label>
    <label class="form-control">
      <div class="label">
        <span class="label-text">Message*</span>
      </div>
      <textarea
        v-model="form.message"
        class="textarea textarea-bordered bg-teal-800 focus:bg-teal-700 h-24"
        name="email"
      ></textarea>
    </label>
    <button
      class="btn bg-transparent border-white text-white border-1 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 w-52 mt-4"
      @click="sendMessage()"
    >
      Hire me
    </button>
  </div>
</template>
