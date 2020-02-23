export interface menuType {
  title: string;
  key: string;
  icon?: string;
  path?: string;
  children?: menuType[];
}

export const menuConfig: menuType[] = [
  {
    title: "文章与举报投诉",
    key: "post",
    icon: "play-circle",
    children: [
      {
        title: "文章列表",
        key: "stuffpost-list",
        path: "/stuffposts"
      },
      {
        title: "举报投诉列表",
        key: "report-list",
        path: "/reports"
      }
    ]
  },
  {
    title: "新闻",
    key: "news",
    icon: "play-circle",
    children: [
      {
        title: "列表",
        key: "news-all",
        path: "/news"
      },
      {
        title: "添加新闻",
        key: "news-add",
        path: "/news-add"
      }
    ]
  },
  {
    title: "通知",
    key: "notifications",
    icon: "play-circle",
    children: [
      {
        title: "列表",
        key: "notifications-all",
        path: "/notifications"
      },
      {
        title: "添加通知",
        key: "notification-add",
        path: "/notification-add"
      }
    ]
  },
  {
    title: "电话号",
    key: "contacts",
    icon: "play-circle",
    children: [
      {
        title: "列表",
        key: "contacts-all",
        path: "/contacts"
      },
      {
        title: "添加电话号",
        key: "contact-add",
        path: "/contact-add"
      }
    ]
  },
  {
    title: "应用信息",
    key: "profile",
    icon: "play-circle",
    children: [
      {
        title: "列表",
        key: "profile-all",
        path: "/profiles"
      },
      {
        title: "添加资料",
        key: "profile-add",
        path: "/profile-add"
      }
    ]
  },
  {
    title: "用户",
    key: "user",
    icon: "play-circle",
    children: [
      {
        title: "列表",
        key: "user-all",
        path: "/users"
      }
    ]
  }
];
