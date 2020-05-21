---
name: Update Task
about: Describe this issue template's purpose here.
title: Modify [Task Name]
labels: update data
assignees: ''

---

**Which task is being updated**
Task name here.

**Which items are being updated in the task?**
item_name: value

***Refer to the YML template below***
```yml
taskName: # [String, required]
links: 
  deployment: https://example.com # [String::URL, optional]
  sourceCode: https://github.com/example/task # [String::URL, required]
  publication: https://example.com # [String::URL, optional]
framework:
  library: # [Array::String, optional]
    - LIBRARY_1 
    - LIBRARY_2
  language: # [Array::String, optional]
    - LANGUAGE_1
    - LANGUAGE_2
lab:
  name: # [String, required]
  institution: # [String, required]
  principalInvestigator: # [String, optional]
  developers: # [Array::String, optional]
    - DEVELOPER_1
    - DEVELOPER_2
  website: https://example.com
platform: # [Boolean, optional]
  desktop:
    windows: false
    linux: false
    mac: false
  mobile:
    ios: false
    android: false
features: # [Boolean, optional]
  electron: false
  browser: false
  docker: false
  eegTrigger: false
  mturk: false
tags: # [Array::String, optional]
  - TAG_1
  - TAG_2
  - TAG_3
  - TAG_4
```
