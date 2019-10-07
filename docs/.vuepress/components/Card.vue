<template>
  <div :class="[getType,'custom-card']">
    <p class="custom-card-title">{{ title.length > 0 ? title : getType.charAt(0).toUpperCase() + getType.slice(1) }}</p>
    <div class="custom-card-content">
      <p>{{ text }}</p>
      <img
        v-if="img.length"
        :class="[flat? 'custom-card-image--flat': 'custom-card-image']"
        :src="'/' + img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    text: {
      type: String,
      required: false,
      default: "Text"
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false
    },
    info: {
      type: Boolean,
      required: false,
      default: false
    },
    warning: {
      type: Boolean,
      required: false,
      default: false
    },
    danger: {
      type: Boolean,
      required: false,
      default: false
    },
    success: {
      type: Boolean,
      required: false,
      default: false
    },
    img: {
      type: String,
      required: false,
      default: ""
    },
    flat: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    getType() {
      let type = "primary";
      if (this.secondary) type = "secondary";
      if (this.info) type = "info";
      if (this.warning) type = "warning";
      if (this.danger) type = "danger";
      if (this.success) type = "success";
      return type;
    }
  },
  methods: {}
};
</script>

<style lang="stylus">
.custom-card {
  border-radius: 3px;

  .custom-card-content {
    display: flex;
    justify-content: space-between;
  }

  .custom-card-title {
    font-weight: 600;
    margin-bottom: -0.4rem;
  }

  &.primary, &.secondary, &.info, &.warning, &.danger, &.success {
    padding: 0.1rem 1.5rem;
    border-left-width: 0.5rem;
    border-left-style: solid;
    margin: 1rem 0;
  }

  &.primary {
    background-color: #8671A9
    border-color: #6C5297
  }

  &.secondary {
    background-color: #F3EAF4
    border-color: #C7C0C8
    color: #2D2B2D
  }

  &.info {
    background-color: #FFA686;
    border-color: #EA8C55;
    color: #2D2B2D

    .custom-card-title {
      color: #2D2B2D
    }

    a {
      color: $textColor;
    }
  }

  &.warning {
    background-color: #F5F2B8;
    border-color: #F8C537
color: #2D2B2D
    .custom-card-title {
color: #2D2B2D
    }

    a {
      color: $textColor;
    }
  }

  &.danger {
    background-color: #C08497;
    border-color: #91171F;
    color: #91171F;

    .custom-card-title {
      color: #91171F;
    }

    a {
      color: $textColor;
    }
  }
  
    &.success {
    background-color: #79AEA3;
    border-color: darken(#347474, 20%);
    color: darken(#347474, 20%);

    .custom-card-title {
      color: darken(#347474, 20%);
    }

    a {
      color: $textColor;
    }
  }
  

  .custom-card-image {
    margin-top: -29px;
    height: 80px;
    float: right;

    &--flat {
      margin-top: -29px;
      height: 80px;
      float: right;
      background-color: #D6D6D6;
      opacity: 0.7;
      border-radius: 3%;
    }
  }
}
</style>