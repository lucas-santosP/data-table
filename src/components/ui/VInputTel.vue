<template>
  <div class="input-row">
    <label v-if="label" :for="id" class="label">{{ label }}</label>
    <div class="input-wrapper">
      <input
        :id="id"
        type="tel"
        :value="value"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        @input="$emit('input', $event.target.value)"
        v-mask="'(##) #####-####'"
      />
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  name: "VInputTel",
  directives: { mask },
  props: {
    id: { type: String, required: true },
    value: { type: String, required: true },
    label: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    autocomplete: { type: String, default: "off" },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins";

.input-row {
  @include input-row;

  label {
    margin-bottom: 0.35rem;
  }

  input {
    @include base-input;
  }
}
</style>
