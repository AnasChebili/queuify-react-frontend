/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as QueuesIndexImport } from './routes/queues/index'
import { Route as ChatIndexImport } from './routes/chat/index'
import { Route as AuthIndexImport } from './routes/auth/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const QueuesIndexRoute = QueuesIndexImport.update({
  id: '/queues/',
  path: '/queues/',
  getParentRoute: () => rootRoute,
} as any)

const ChatIndexRoute = ChatIndexImport.update({
  id: '/chat/',
  path: '/chat/',
  getParentRoute: () => rootRoute,
} as any)

const AuthIndexRoute = AuthIndexImport.update({
  id: '/auth/',
  path: '/auth/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/': {
      id: '/auth/'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof rootRoute
    }
    '/chat/': {
      id: '/chat/'
      path: '/chat'
      fullPath: '/chat'
      preLoaderRoute: typeof ChatIndexImport
      parentRoute: typeof rootRoute
    }
    '/queues/': {
      id: '/queues/'
      path: '/queues'
      fullPath: '/queues'
      preLoaderRoute: typeof QueuesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/auth': typeof AuthIndexRoute
  '/chat': typeof ChatIndexRoute
  '/queues': typeof QueuesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/auth': typeof AuthIndexRoute
  '/chat': typeof ChatIndexRoute
  '/queues': typeof QueuesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/auth/': typeof AuthIndexRoute
  '/chat/': typeof ChatIndexRoute
  '/queues/': typeof QueuesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/auth' | '/chat' | '/queues'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/auth' | '/chat' | '/queues'
  id: '__root__' | '/' | '/auth/' | '/chat/' | '/queues/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthIndexRoute: typeof AuthIndexRoute
  ChatIndexRoute: typeof ChatIndexRoute
  QueuesIndexRoute: typeof QueuesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthIndexRoute: AuthIndexRoute,
  ChatIndexRoute: ChatIndexRoute,
  QueuesIndexRoute: QueuesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/auth/",
        "/chat/",
        "/queues/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/auth/": {
      "filePath": "auth/index.tsx"
    },
    "/chat/": {
      "filePath": "chat/index.tsx"
    },
    "/queues/": {
      "filePath": "queues/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
