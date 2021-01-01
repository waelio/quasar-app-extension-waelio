<template>
  <q-page padding class="flex flex-center flex-col">
    <h1 class="text-center text-h2 q-mx-auto text-wrap full-width q-px-sm">
      {{ $t("contact.title") }}
    </h1>
    <q-card class="q-mx-auto" style="width: 95vw;min-width: 350px;">
      <q-card-section class="q-py-lg">
        <div class="text-h4 text-center">{{ $t("contact.form.title") }}</div>
        <div class="text-h6 text-center">
          {{ $t("contact.form.caption") }}
        </div>
      </q-card-section>
      <q-card-section>
        <q-form class="q-gutter-md" ref="contactForm" id="contactForm">
          <q-input
            name="fullname"
            filled
            v-model="user_name"
            :label="$t('contact.form.name.label')"
            :hint="$t('contact.form.name.hint')"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || $t('contact.form.name.placeholder')
            ]"
          />
          <q-input
            filled
            name="email"
            type="email"
            v-model="user_email"
            :label="$t('contact.form.email.label')"
            :hint="$t('contact.form.email.hint')"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') ||
                $t('contact.form.email.placeholder')
            ]"
          />
          <q-input
            filled
            type="textarea"
            name="message"
            min-height="5rem"
            max-height="10rem"
            v-model="message"
            :label="$t('contact.form.message.label')"
            :hint="$t('contact.form.message.hint')"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || $t('contact.form.message.placeholder')
            ]"
          />

          <q-toggle
            name="accept"
            v-model="accept"
            :label="$t('contact.form.termslabel')"
          />
          <p>
            <router-link to="terms" class="full-width">
              {{ $t("contact.form.acceptterms") }}</router-link
            >
          </p>

          <q-btn
            name="send"
            :label="$t('contact.form.submit')"
            :disabled="!isReadyForm"
            color="primary"
            @click.prevent="onSubmit()"
          />
          <q-btn
            :label="$t('contact.form.reset')"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import { meta } from 'waelio-utils';
import emailjs from "emailjs-com";
export default {
  name: "ContactUs",
  beforeCreate() {
    emailjs.init("user_5tP22pGVFDXWM7b3Y6cGZ");
  },
  data() {
    return {
      project_name: "",
      accept: false,
      user_email: "",
      user_name: "",
      message: "",
      metaTags: {
        title: "North West Meta | Contact US",
        description:
          "Want to share a concern? an idea or a bug in any of our projects? Please let us know. Wel will attend to your inqueries as soon as possible",
        url: "https://northwestmeta.com/contact",
        image: "nwm_logo.png"
      }
    };
  },
  meta,
  methods: {
    onSubmit() {
      emailjs
        .send(
          "service_o1hhxks",
          "template_040828n",
          this.emailBody,
          "user_5tP22pGVFDXWM7b3Y6cGZ"
        )
        .then(result => {
          this.$notification.success("Message Was set successfully.");
          this.$refs.contactForm.reset();
          this.onReset();
        })
        .catch(exception => {
          this.$notification.error(exception);
        });
      return true;
    },
    onReset() {
      this.form_valid = false;
      this.personalname = "";
      this.project_name = "";
      this.accept = false;
      this.user_email = "";
      this.user_name = "";
      this.to_name = "";
      this.message = "";
      this.reply_to = "";
      return true;
    }
  },
  computed: {
    isReadyForm() {
      return !!(
        this.user_name &&
        this.user_email &&
        this.project_name &&
        this.accept &&
        this.message
      );
    },
    isEmptyForm() {
      return (
        !this.user_name &&
        !this.user_email &&
        !this.project_name &&
        !this.accept &&
        !this.message
      );
    },
    emailBody() {
      return {
        user_email: this.user_email,
        user_name: this.user_name,
        project_name: this.project_name.name,
        message: this.message,
        reply_to: this.user_email
      };
    }
  }
};
</script>
