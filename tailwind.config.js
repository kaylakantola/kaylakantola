module.exports = {
  theme: {
    extend: {
      fontFamily: {
        nunito: 'Nunito'
      },
      colors: {
        salmon: {light: "#FCE4D9",default:"#F4A683", dark: "#F4A683"},
        turqoise: {light: "#7EF1EF",default:"#0C6E6D", dark: "#042524"},
        espresso: {light: "#614242",default:"#322222", dark: "#0C0808"},
        pink: {light: "#F9DCDD",default:"#E56B70", dark: "#681215"},
        gray: {light: "#CECECF", default: "#79797C", dark: "#1E1E1F"}
      },
    }
  },
  variants: {
    visibility: ["responsive", "hover", "focus"],
    display: ["responsive", "hover", "focus"],
  },
  plugins: [],
}