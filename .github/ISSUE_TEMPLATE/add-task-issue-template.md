---
name: Add Task Issue Template
about: Register new tasks to hub
title: data-request
labels: data request
assignees: ''

---

Instructions: 
```
taskName: # name of the task
links: 
  deployment: https://example.com # link to the deployed site 
  sourceCode: https://github.com/example/task # link to the source code of task.
framework:
  library: LIBRARY
  language: LANGUAGE
lab:
  name: # name of the lab
  institution: # institution name
  principalInvestigator: 
  developers:
    - DEVELOPER_1
    - DEVELOPER_2
  website: https://example.com
publication:
  doi: doi:###/###.###
  url: https://example.com
platform:
  desktop:
    windows: true
    linux: true
    mac: false
  mobile:
    ios: false
    android: false
features:
  electron: false
  browser: true
  docker: false
  eegTrigger: true
  mturk: true
tags:
  - TAG_1
  - TAG_2
  - TAG_3
  - TAG_4
```
