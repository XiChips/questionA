// custom-tab-bar/index.js
Component({
  data: {
    color: "#515151",
    selectedColor: "#88bf01",
    backgroundColor: "#ffffff",
    list: [{
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: "../static/images/btn1.png",
        selectedIconPath: "../static/images/btn1c.png"
      },
      {
        pagePath: "/pages/assit/assit",
        text: "助手",
        iconPath: "../static/images/btn2.png",
        selectedIconPath: "../static/images/btn2c.png"
      },
      {
        pagePath: "/pages/public/public",
        bulge: true,
        text: "常用",
        iconPath: "../static/images/btn3.png",
        selectedIconPath: "../static/images/btn3.png"
      },
      {
        pagePath: "/pages/analysis/analysis",
        text: "分析",
        iconPath: "../static/images/btn4.png",
        selectedIconPath: "../static/images/btn4c.png"
      },
      {
        pagePath: "/pages/my/my",
        text: "我",
        iconPath: "../static/images/btn5.png",
        selectedIconPath: "../static/images/btn5c.png"
      },
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
    }
  }
})