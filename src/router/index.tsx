import React from "react";
import { Route } from "react-router-dom";
import loadable from "@loadable/component";

const Layout = loadable(() => import("../common/layout"));
const Login = loadable(() => import("../pages/login"));
const Register = loadable(() => import("../pages/register"));
const ForgotPwd = loadable(() => import("../pages/forgotpwd"));
const ArticleList = loadable(() => import("../pages/article-list"));
const AddArticle = loadable(() => import("../pages/article-add"));
const ArticleClassify = loadable(() => import("../pages/article-classify"));
const ArticleComments = loadable(() => import("../pages/article-comments"));
const ArticleDraft = loadable(() => import("../pages/article-draft"));
const AddMessage = loadable(() => import("../pages/message-add"));
const MessageList = loadable(() => import("../pages/messages-list"));
const ProjectAdd = loadable(() => import("../pages/project-add"));
const Projects = loadable(() => import("../pages/projects"));

const TagAdd = loadable(() => import("../pages/tag-add"));
const Tags = loadable(() => import("../pages/tags"));

const NewsAdd = loadable(() => import("../pages/news-add"));
const News = loadable(() => import("../pages/news"));

const ProfileAdd = loadable(() => import("../pages/profile-add"));
const Profiles = loadable(() => import("../pages/profiles"));

const UserAdd = loadable(() => import("../pages/user-add"));
const Users = loadable(() => import("../pages/users"));

const ContactAdd = loadable(() => import("../pages/contact-add"));
const Contacts = loadable(() => import("../pages/contacts"));

const NotificationAdd = loadable(() => import("../pages/notification-add"));
const Notifications = loadable(() => import("../pages/notifications"));

const StuffPostAdd = loadable(() => import("../pages/stuffpost-add"));
const StuffPostList = loadable(() => import("../pages/stuffposts"));

const ReportList = loadable(() => import("../pages/reports"));

const Home = loadable(() => import("../pages/home"));
export interface routeType {
  path: string;
  component: React.SFC;
}

export const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/forgotpwd",
    component: ForgotPwd
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/article",
        component: ArticleList
      },
      {
        path: "/article-add",
        component: AddArticle
      },
      {
        path: "/article-classify",
        component: ArticleClassify
      },
      {
        path: "/discuss",
        component: ArticleComments
      },
      {
        path: "/article-draft",
        component: ArticleDraft
      },
      {
        path: "/message-add",
        component: AddMessage
      },
      {
        path: "/message",
        component: MessageList
      },
      {
        path: "/project-add",
        component: ProjectAdd
      },
      {
        path: "/project",
        component: Projects
      },
      {
        path: "/tags-add",
        component: TagAdd
      },
      {
        path: "/tags",
        component: Tags
      },
      {
        path: "/notifications-add",
        component: NotificationAdd
      },
      {
        path: "/notifications",
        component: Notifications
      },
      {
        path: "/news-add",
        component: NewsAdd
      },
      {
        path: "/news",
        component: News
      },
      {
        path: "/profiles-add",
        component: ProfileAdd
      },
      {
        path: "/profiles",
        component: Profiles
      },
      {
        path: "/user-add",
        component: UserAdd
      },
      {
        path: "/users",
        component: Users
      },
      {
        path: "/contacts-add",
        component: ContactAdd
      },
      {
        path: "/contacts",
        component: Contacts
      },
      // {
      //   path: "/stuffposts-add",
      //   component: StuffPostAdd
      // },
      {
        path: "/stuffposts",
        component: StuffPostList
      },
      {
        path: "/stuffposts-add",
        component: ReportList
      },
      {
        path: "/",
        component: Home
      }
    ]
  }
];

export function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} {...route} />}
    />
  );
}
