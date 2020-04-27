export default {
  methods: {
    getData() {
      let data = localStorage.getItem("data");
      if (data === null) {
        localStorage.setItem("data", JSON.stringify({}));
        return JSON.parse(localStorage.getItem("data"));
      } else {
        return JSON.parse(data);
      }
    },
    saveData(input, value) {
      let info = this.getData();
      info[input] = value;
      localStorage.setItem("data", JSON.stringify(info));
    },
  },
};
