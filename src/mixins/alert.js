export default {
  data() {
    return {
      alert: this.initAlert(),
      timeoutID: null,
    };
  },
  methods: {
    initAlert() {
      return { success: null, error: null };
    },
    clearAlertTimeout() {
      this.timeoutID && clearTimeout(this.timeoutID);
    },
    setAlert(type, message) {
      this.alert = this.initAlert();
      this.alert[type] = message;
      this.timeoutID = setTimeout(() => {
        this.alert = this.initAlert();
      }, 2000);
    },
  },
};
