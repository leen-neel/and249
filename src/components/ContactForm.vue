<script lang="ts" setup>
  import { reactive, watch, ref } from "vue";
  import { object, string } from "yup";

  // import { sendEmail } from "~/pages/api/email";

  const form = reactive({
    name: "",
    email: "",
    message: "",
  });
  const isValid = ref(false);
  const isLoading = ref(false);

  const sendMessage = async () => {
    isLoading.value = true;
    isValid.value = false;
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(form),
    });
    isLoading.value = false;
    isValid.value = true;

    form.name = "";
    form.email = "";
    form.message = "";
  };

  const schema = object({
    name: string().required(),
    email: string().email().required(),
    message: string().required().min(10),
  });

  watch(form, async () => {
    try {
      await schema.validate({
        name: form.name,
        email: form.email,
        message: form.message,
      });

      isValid.value = true;
    } catch (error) {
      isValid.value = false;
    }
  });

  const testEmail = async () => {
    await fetch("/api/emailTest");
  };
</script>

<template>
  <form class="">
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
      class="btn bg-transparent border-white text-white border-1 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 w-52 mt-4 disabled:text-gray-400 disabled:bg-transparent disabled:border-gray-400 disabled:cursor-not-allowed"
      :disabled="!isValid"
      @click="sendMessage()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 fill-white animate-spin"
        viewBox="0 0 24 24"
        v-if="isLoading"
      >
        <path
          fill-rule="evenodd"
          d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53a7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035a.75.75 0 0 0-.53-.918Z"
          clip-rule="evenodd"
        />
      </svg>

      Send Message
    </button>
  </form>
</template>
