---
title: React Environment Variables Undefined Issue
description: Best Practice to declare env variables in react and fetch from utils 
date: 2024-08-12
draft: false
slug: /articles/env-variables-react
tags:
  - React
---

While using env in react app, we have to declar env variables with REACT_APP_ prefix in order to use them in our app otherwise we will get undefined

## JS

```js
//env
REACT_APP_BASE_URL = 'http://localhost:8000';

//utils-constants
const BASE_URL = process.env.REACT_APP_BASE_URL;

```
