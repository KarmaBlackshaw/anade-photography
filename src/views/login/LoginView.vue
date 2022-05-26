<template>
  <section
    id="login"
    class="login"
  >
    <base-card class="login__card">
      <base-card-title class="login__title">
        Login
      </base-card-title>

      <base-card-body class="login__body">
        <input
          type="text"
          class="input"
          placeholder="Email/Username"
        >

        <input
          type="text"
          class="input"
          placeholder="Password"
        >

        <base-button class="login__btn">
          Login
        </base-button>

        <div class="divider"></div>

        <base-button class="login__btn login__btn--google">
          <img
            alt="Google sign-in"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          >

          Login with Google
        </base-button>
      </base-card-body>
    </base-card>
  </section>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
@import './assets/scss/LoginView';
</style>